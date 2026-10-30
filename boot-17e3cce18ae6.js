// Shared image scheduler: one background request, at most two critical requests.
(() => {
  const status=document.getElementById('loadingStatus'),progress=document.getElementById('loadingProgress'),error=document.getElementById('loadingError'),retry=document.getElementById('loadingRetry');
  const records=new Map(),listeners=new Set();let active=0,scheduled=false;
  window.GamePreloadedImages={};
  function record(key){
    if(!window.GameAssets[key]) throw new Error('Unknown image: '+key);
    if(!records.has(key))records.set(key,{key,image:new Image(),state:'idle',priority:2,waiters:[],starts:0});
    return records.get(key);
  }
  function notify(){if(scheduled)return;scheduled=true;setTimeout(()=>{scheduled=false;for(const fn of listeners)fn();},0);}
  function finish(r,err){
    if(r.state!=='loading'&&r.state!=='downloaded')return;
    if(!err){try{const plan=window.GameAtlasPacking?.[r.key];if(plan){const original=r.image,c=document.createElement('canvas');c.width=plan.width;c.height=plan.height;const cx=c.getContext('2d');for(const region of plan.regions)cx.drawImage(original,...region.source,...region.target,region.source[2],region.source[3]);Object.defineProperties(c,{naturalWidth:{value:c.width},naturalHeight:{value:c.height},complete:{value:true}});r.image=c;original.onload=null;original.onerror=null;original.src='';}}catch{err=new Error('이미지를 준비하지 못했어요.');}}
    active--;r.state=err?'error':'ready';r.error=err;
    if(!err)window.GamePreloadedImages[r.key]=r.image;
    for(const w of r.waiters.splice(0))err?w.reject(err):w.resolve(r.image);
    notify();pump();
  }
  async function decode(r){
    if(document.hidden||r.decoding)return;
    r.decoding=true;
    try{if(r.image.decode)await r.image.decode();finish(r,null);}
    catch{finish(r,new Error('이미지를 준비하지 못했어요.'));}
    finally{r.decoding=false;}
  }
  function pump(){
    if(document.hidden)return;
    for(const r of records.values())if(r.state==='downloaded')decode(r);
    while(true){
      const pending=[...records.values()].filter(r=>r.state==='queued').sort((a,b)=>a.priority-b.priority);
      const next=pending[0];if(!next)return;
      // Critical work can use two slots; menu and background work share a single slot.
      if(active >= (next.priority===0?2:1))return;
      active++;next.state='loading';next.starts++;
      next.image.onload=()=>{next.state='downloaded';decode(next);};
      next.image.onerror=()=>finish(next,new Error('이미지를 불러오지 못했어요.'));
      next.image.src=window.GameAssets[next.key];
    }
  }
  function ensure(keys,options={}){
    const priority=options.priority??0;
    return Promise.all([...new Set(keys)].map(key=>{
      const r=record(key);
      if(r.state==='ready')return Promise.resolve(r.image);
      if(r.state==='error'&&!options.retry)return Promise.reject(r.error);
      const pending=new Promise((resolve,reject)=>r.waiters.push({resolve,reject}));
      r.priority=Math.min(r.priority,priority);
      if(r.state==='idle'||r.state==='error'){r.state='queued';r.priority=priority;}
      return pending;
    })).finally(pump);
  }
  // Start after all waiters and priorities have been registered.
  const request=(keys,options)=>{const p=ensure(keys,options);pump();return p;};
  window.ShopAssets={
    image:key=>record(key).image,
    ready:keys=>keys.every(key=>record(key).state==='ready'),
    failed:keys=>keys.some(key=>record(key).state==='error'),
    ensure:request,
    subscribe:fn=>{listeners.add(fn);return()=>listeners.delete(fn);},
    background:()=>request(Object.keys(window.GameAssets),{priority:2}).catch(()=>{}),
    stats:()=>Object.fromEntries([...records].map(([key,r])=>[key,{state:r.state,starts:r.starts,width:r.image.naturalWidth??r.image.width??0,height:r.image.naturalHeight??r.image.height??0}]))
  };
  document.addEventListener('visibilitychange',pump);
  // Actual decoded image count; no artificial percentage or rotating timer.
  let startup=true,slowTimer=0,appRequested=false;
  function refreshStartup(){
    if(!startup)return;
    const keys=Object.keys(window.GameAssets),done=keys.filter(k=>records.get(k)?.state==='ready').length;
    progress.max=keys.length+1;progress.value=done;
    status.textContent=done===keys.length?'가게에 따뜻한 불을 켜고 있어요.':'진열대에 악기를 가지런히 놓고 있어요. · '+done+' / '+keys.length;
  }
  listeners.add(refreshStartup);
  async function start(manual=false){
    retry.hidden=true;error.hidden=true;startup=true;
    clearTimeout(slowTimer);slowTimer=setTimeout(()=>{if(startup){status.textContent='조금 더 꼼꼼히 준비하고 있어요. 잠시만 기다려주세요.';retry.hidden=false;}},15000);
    try{
      if(window.GameLoadFailed)throw new Error('화면 스타일을 불러오지 못했어요.');
      refreshStartup();
      await request(Object.keys(window.GameAssets),{priority:0,retry:manual});
      refreshStartup();
      if(!window.Game)await new Promise((resolve,reject)=>{
        appRequested=true;const script=document.createElement('script');script.src=window.GameAppURL;
        script.onload=()=>window.Game?resolve():reject(new Error('게임을 시작하지 못했어요.'));
        script.onerror=()=>reject(new Error('게임 파일을 불러오지 못했어요.'));document.body.append(script);
      });
      startup=false;clearTimeout(slowTimer);listeners.delete(refreshStartup);progress.value=progress.max;
      status.textContent='오늘은 어떤 선율을 만나게 될까요?';
      document.getElementById('loadingScreen').remove();document.documentElement.removeAttribute('data-loading');
      window.GameLoadMetrics={titleReady:performance.now(),titleReadyKeys:Object.keys(window.GamePreloadedImages)};
    }catch(e){startup=false;clearTimeout(slowTimer);error.hidden=false;error.textContent=(e.message||'준비 중 문제가 생겼어요.')+' 연결을 확인한 뒤 다시 시도해주세요.';retry.hidden=false;status.textContent='가게를 마저 준비할 수 있도록 다시 시도해주세요.';}
  }
  retry.onclick=()=>{if(startup||window.GameLoadFailed||appRequested)location.reload();else start(true);};
  start();
})();
