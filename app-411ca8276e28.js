window.GameBuild=Object.freeze({"version":"3.23.1","schema":{"version":28,"storageKey":"little-tone-v1","legacyStageSizes":[[7,6],[9,6],[9,8],[11,8],[11,10],[13,10]],"legacyShelfItems":[3,6,7]},"art":{"grid":{"halfWidth":34,"halfHeight":17,"groundFit":0.94},"wallHeight":84,"furnitureFeet":{"0":[[[0.033,0.627],[0.735,0.976],[0.967,0.823],[0.265,0.475]],[[0.036,0.63],[0.713,0.981],[0.961,0.824],[0.287,0.497]]],"1":[[[0.08,0.75],[0.67,0.99],[0.98,0.84],[0.39,0.6]],[[0.08,0.75],[0.67,0.99],[0.98,0.84],[0.39,0.6]]],"2":[[[0.2,0.8],[0.62,0.99],[0.91,0.86],[0.49,0.67]],[[0.2,0.8],[0.62,0.99],[0.91,0.86],[0.49,0.67]]],"3":[[[0.4,0.93],[0.55,0.95],[0.64,0.89],[0.49,0.87]],[[0.4,0.93],[0.55,0.95],[0.64,0.89],[0.49,0.87]]],"4":[[[0.01,0.75],[0.6,0.98],[0.94,0.81],[0.35,0.58]],[[0.01,0.75],[0.6,0.98],[0.94,0.81],[0.35,0.58]]],"5":[[[0.075,0.614],[0.681,0.946],[0.919,0.812],[0.313,0.48]],[[0.075,0.614],[0.681,0.946],[0.919,0.812],[0.313,0.48]]]},"furnitureScale":{"2":0.78,"3":0.72},"furnitureSize":[0,76,68,74,72,81.84],"rackHeight":70.72,"cabinetSize":81.84,"characterHeight":77,"cashierHeight":73,"metadata":{"characterFrames":"src/js/data/sprites.js","productClips":"src/js/data/sprites.js","furnitureFeet":"config/art-layout.json"}},"missions":[{"id":"s1-sales","stage":0,"title":"첫 다섯 번의 선율","goals":[{"label":"상품 판매","kind":"total","min":5}],"reward":{"money":150000}},{"id":"s1-core","stage":0,"title":"입문자의 선택","goals":[{"label":"데이브레이크 ST","kind":"products","min":1,"ids":[0]},{"label":"딥 포레스트 JB","kind":"products","min":1,"ids":[1]},{"label":"모닝 어쿠스틱","kind":"products","min":1,"ids":[2]}],"reward":{"actor":9}},{"id":"s2-sales","stage":1,"title":"새로운 음색","goals":[{"label":"일반급 기타·베이스 판매","kind":"products","min":3,"ids":[9,10]}],"reward":{"money":250000}},{"id":"s2-core","stage":1,"title":"일반급 악기의 두 얼굴","goals":[{"label":"블루 아워 ST","kind":"products","min":5,"ids":[9]},{"label":"앰버 그루브 JB","kind":"products","min":5,"ids":[10]}],"reward":{"product":21}},{"id":"s3-sales","stage":2,"title":"소품까지 꼼꼼하게","goals":[{"label":"기타줄 판매","kind":"products","min":10,"ids":[6,7,8]}],"reward":{"feature":"cabinet"}},{"id":"s3-rack","stage":2,"title":"취향을 넓히는 진열","goals":[{"label":"일렉 기타 판매","kind":"family","family":"electric","min":10},{"label":"베이스 판매","kind":"family","family":"bass","min":10},{"label":"어쿠스틱 판매","kind":"family","family":"acoustic","min":10}],"reward":{"feature":"rack2"}},{"id":"s3-core","stage":2,"title":"나만의 페달 보드","goals":[{"label":"오버드라이브","kind":"products","min":1,"ids":[3]},{"label":"디스토션","kind":"products","min":1,"ids":[4]},{"label":"딜레이","kind":"products","min":1,"ids":[5]}],"reward":{"actor":10}},{"id":"s4-sales","stage":3,"title":"바쁜 하루의 보람","goals":[{"label":"하루 최고 판매","kind":"bestDay","min":10}],"reward":{"money":150000}},{"id":"s4-core","stage":3,"title":"고급의 울림","goals":[{"label":"와인 세미할로우","kind":"products","min":3,"ids":[13]},{"label":"아이보리 세션 5","kind":"products","min":3,"ids":[14]},{"label":"두 모델 합계 판매","kind":"products","min":12,"ids":[13,14]}],"reward":{"product":22}},{"id":"s5-sales","stage":4,"title":"다양한 악기가 있는 가게","goals":[{"label":"판매한 악기 종류","kind":"distinctInstruments","min":8}],"reward":{"feature":"staff2"}},{"id":"s5-core","stage":4,"title":"전문가의 무대 준비","goals":[{"label":"에메랄드 마스터","kind":"products","min":1,"ids":[15]},{"label":"차콜 마스터 5","kind":"products","min":1,"ids":[16]},{"label":"고급 이펙터","kind":"products","min":1,"ids":[19,20]}],"reward":{"actor":11}},{"id":"s6-sales","stage":5,"title":"우리 동네 음악 명소","goals":[{"label":"누적 상품 판매","kind":"total","min":300}],"reward":{"feature":"drums"}},{"id":"s6-core","stage":5,"title":"마지막 특별한 한 대","goals":[{"label":"바이올렛 리미티드","kind":"products","min":3,"ids":[17]},{"label":"미드나잇 리미티드 5","kind":"products","min":3,"ids":[18]},{"label":"두 모델 합계 판매","kind":"products","min":15,"ids":[17,18]},{"label":"전자드럼 세트 판매","kind":"products","min":5,"ids":[26]}],"reward":{"product":23}},{"id":"s6-drums","stage":5,"title":"첫 리듬을 함께","goals":[{"label":"전자드럼 세트 판매","kind":"products","min":3,"ids":[26]}],"reward":{"feature":"drumDemo"}}]});
// SOURCE: systems/motion
/* Distance-driven movement: one continuous budget across route waypoints. */
(function (root) {
  function facing(dx, dy, fallback = 5) {
    if (Math.abs(dx) + Math.abs(dy) < 1e-8) return fallback;
    const sx = dx - dy,
      sy = (dx + dy) * 0.5;
    return Math.abs(sx) >= Math.abs(sy) ? (sx >= 0 ? 4 : 6) : sy >= 0 ? 5 : 7;
  }
  function projectedDistance(dx, dy) {
    return Math.hypot((dx - dy) * 34, (dx + dy) * 17) / Math.hypot(34, 17);
  }
  function settle(p, dt) {
    p.velocity = 0;
    p.moving = false;
    const blend = 1 - Math.exp(-12 * Math.max(0, dt));
    p.animationWeight = (p.animationWeight ?? 0) * (1 - blend);
    // Finish on the next planted-foot pose rather than snapping mid-stride.
    p.gait ??= 0;
    const planted = Math.ceil((p.gait - .1875 - 1e-8) * 2) / 2 + .1875;
    p.gait += (planted - p.gait) * blend;
    if (p.animationWeight < .015) p.animationWeight = 0;
    if (p.lookTarget && p.animationWeight < .18)
      p.facing = facing(p.lookTarget.x - p.x, p.lookTarget.y - p.y, p.facing);
  }
  function advance(p, dt) {
    if (!(dt > 0) || !Number.isFinite(dt)) return 0;
    p.velocity ??= 0;
    p.gait ??= 0;
    p.facing ??= 0;
    p.stride ??= .75;
    p.walkCycleDistance ??= p.stride * 1.8;
    if (!p.path.length) { settle(p, dt); return 0; }
    // Small integration steps keep braking consistent at 30/60 Hz and fast-forward.
    const steps = Math.ceil(dt / (1 / 60)), h = dt / steps;
    let distance = 0;
    for (let step = 0; step < steps; step++) {
      // Arrived/duplicate nodes must be consumed even with no travel budget.
      while (p.path.length && projectedDistance(p.path[0].x-p.x, p.path[0].y-p.y) < 1e-8)
        p.path.shift();
      if (!p.path.length) { settle(p, h); continue; }
      let remain = 0, from = p;
      for (const point of p.path) {
        remain += projectedDistance(point.x - from.x, point.y - from.y);
        from = point;
      }
      const top = Math.max(.05, (p.walkSpeed ?? 1.18) * (p.crowdSpeed ?? 1)),
        accel = 3.6, brake = 5.2,
        target = Math.min(top, Math.sqrt(2 * brake * remain + (brake*h)**2) - brake*h),
        old = p.velocity;
      p.velocity += Math.max(-brake*h, Math.min(accel*h, target-p.velocity));
      p.animationWeight = (p.animationWeight ?? 0) +
        (Math.min(1, p.velocity / (p.walkSpeed ?? 1.18)) - (p.animationWeight ?? 0)) * (1-Math.exp(-14*h));
      let budget = (old+p.velocity)*.5*h;
      while (p.path.length) {
        const next = p.path[0], dx = next.x-p.x, dy = next.y-p.y,
          d = projectedDistance(dx,dy);
        if (d < 1e-8) { p.path.shift(); continue; }
        if (budget <= 1e-10) break;
        p.facing = facing(dx,dy,p.facing);
        const travel = Math.min(d,budget);
        p.x += dx/d*travel; p.y += dy/d*travel;
        distance += travel; p.gait += travel/p.walkCycleDistance; budget -= travel;
        if (travel >= d-1e-8) {
          p.x=next.x; p.y=next.y; p.path.shift();
          // Carry the remaining budget through bends; never discard a frame's travel.
        }
      }
      p.moving = !!p.path.length && p.velocity > 1e-5;
      if (!p.path.length) { p.velocity=0; p.moving=false; }
    }
    return distance;
  }
  const api = { advance, facing, settle };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Motion = api;
})(typeof window !== 'undefined' ? window : globalThis);

;
// SOURCE: render/interior
/* Isometric shop architecture. Wall art uses a straight front elevation,
   projected onto the same wall plane as the floor grid. */
(function (root) {
  const Interior = {};
  function polygon(c, points, fill, stroke) {
    c.beginPath();
    points.forEach((p, i) => (i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)));
    c.closePath();
    c.fillStyle = fill;
    c.fill();
    if (stroke) {
      c.strokeStyle = stroke;
      c.lineWidth = 1;
      c.stroke();
    }
  }
  function box(c, x, y, w, h, fill) {
    c.fillStyle = fill;
    c.fillRect(x, y, w, h);
  }
  // Low cutaway walls: no hanging instruments, posters or lamps.
  function wall(c, corner, side, length) {
    const height = root.GameBuild.art.wallHeight;
    c.save();
    c.translate(corner.x, corner.y);
    c.transform(side, 0.5, 0, 1, 0, 0);
    box(c, 0, -height, length, height, (root.ShopInteriorStyle?.colors??['#668477','#789185'])[side===1?0:1]);
    box(c, 0, -height, length, 5, '#795638');
    box(c, 0, -height, length, 1, '#dfbd83');
    box(c, 0, -3, length, 3, '#6b5138');
    box(c, length - 3, -height, 3, height, '#795638');
    c.restore();
  }
  Interior.backdrop = function (c, P, art, guitar, N = 11, M = 10) {
    const corner = P(-0.5, -0.5), height = root.GameBuild.art.wallHeight;
    wall(c, corner, -1, M * 34);
    wall(c, corner, 1, N * 34);
    box(c, corner.x - 2, corner.y - height, 4, height, '#795638');
    box(c, corner.x - 2, corner.y - height, 4, 1, '#dfbd83');
  };
  Interior.floor = function (c, P, editing, N = 11, M = 10) {
    for (let y = 0; y < M; y++)
      for (let x = 0; x < N; x++) {
        const q = P(x, y),
          shade = (x * 11 + y * 7) % 6;
        const points = [
          { x: q.x, y: q.y - 17 },
          { x: q.x + 34, y: q.y },
          { x: q.x, y: q.y + 17 },
          { x: q.x - 34, y: q.y }
        ];
        polygon(
          c,
          points,
          ['#d7ac73', '#deb780', '#dcb27a', '#e3bc86', '#d4a76e', '#dfb67d'][shade],
          '#c89b62'
        );
        for (const offset of [-8, 0, 8]) {
          c.strokeStyle = offset === 0 ? '#aa783f35' : '#f4d39a45';
          c.beginPath();
          c.moveTo(q.x - 23 + offset * 0.25, q.y + 6 + offset * 0.5);
          c.lineTo(q.x + 22 + offset * 0.25, q.y - 6 + offset * 0.5);
          c.stroke();
        }
        if ((x + y) % 3 === 0) {
          c.strokeStyle = '#9b693b2a';
          c.beginPath();
          c.ellipse(q.x + 7, q.y - 3, 7, 2, -0.45, 0, Math.PI * 2);
          c.stroke();
        }
        if (editing) polygon(c, points, '#fff5d915', '#fff0c785');
      }
    const warm = c.createRadialGradient(500, 350, 35, 500, 350, 330);
    warm.addColorStop(0, '#ffe9b31f');
    warm.addColorStop(1, '#9f693500');
    c.fillStyle = warm;
    c.fillRect(130, 165, 760, 420);
  };
  function facade(c, a, b, h) {
    const d = { x: b.x - a.x, y: b.y - a.y },
      length = Math.hypot(d.x, d.y);
    if (length < 1) return;
    polygon(c, [a, b, { x: b.x, y: b.y - h }, { x: a.x, y: a.y - h }], '#8d8b77', '#676b5c');
    const steps = Math.max(1, Math.floor(length / 24));
    for (let row = 0; row < 3; row++)
      for (let i = 0; i < steps; i++) {
        const t = (i + (row % 2) * 0.5) / steps,
          u = Math.min(1, t + 0.9 / steps);
        if (t >= 1) continue;
        polygon(
          c,
          [
            { x: a.x + d.x * t, y: a.y + d.y * t - row * 12 - 2 },
            { x: a.x + d.x * u, y: a.y + d.y * u - row * 12 - 2 },
            { x: a.x + d.x * u, y: a.y + d.y * u - row * 12 - 11 },
            { x: a.x + d.x * t, y: a.y + d.y * t - row * 12 - 11 }
          ],
          (row + i) % 3 ? '#a6a38d' : '#b6b29a'
        );
      }
    polygon(
      c,
      [
        { x: a.x, y: a.y - h },
        { x: b.x, y: b.y - h },
        { x: b.x, y: b.y - h - 7 },
        { x: a.x, y: a.y - h - 7 }
      ],
      '#bca77b',
      '#89714d'
    );
    // Clipped hedge above the low cutaway storefront wall.
    for (let i = 0; i < steps * 2; i++) {
      const t = i / (steps * 2),
        x = a.x + d.x * t,
        y = a.y + d.y * t - h - 7;
      c.fillStyle = ['#678553', '#78905a', '#547849'][i % 3];
      c.beginPath();
      c.ellipse(x, y - 3, 7, 6, 0, 0, Math.PI * 2);
      c.fill();
      box(c, x - 4, y - 9 - (i % 3), 5, 5, i % 2 ? '#89a064' : '#547847');
      box(c, x + 1, y - 6, 5, 5, i % 2 ? '#688850' : '#99ab72');
      box(c, x - 2, y - 8, 2, 2, '#b0bd7c');
    }
  }
  Interior.front = function (
    c,
    P,
    entry,
    doorOpen,
    shopName = '작은 선율',
    N = 11,
    M = 10,
    isOpen = true
  ) {
    const gap = 1.05,
      lo = Math.max(-0.5, entry.x - gap),
      hi = Math.min(N - 0.5, entry.x + gap),
      y = M - 0.5;
    facade(c, P(-0.5, y), P(lo, y), 35);
    if (hi < N - 0.5) facade(c, P(hi, y), P(N - 0.5, y), 35);
    facade(c, P(N - 0.5, -0.5), P(N - 0.5, M - 0.5), 35);
    const a = P(lo, y),
      b = P(hi, y),
      u = b.x - a.x;
    c.save();
    c.translate(a.x, a.y);
    c.transform(1, 0.5, 0, .72, 0, 0);
    // Brass threshold, wide welcome mat and dark metal door jambs.
    box(c, -1, -2, u + 2, 5, '#c5ae76');
    box(c, 1, 3, u - 2, 15, '#9e7a4e');
    box(c, 4, 5, u - 8, 11, '#b48e5c');
    c.strokeStyle = '#d9b981';
    c.strokeRect(6, 6, u - 12, 8);
    c.fillStyle = '#e9d6a6';
    c.font = '5px sans-serif';
    c.textAlign = 'center';
    c.fillText('WELCOME', u / 2, 13);
    box(c, -1, -117, u + 2, 6, '#53665a');
    box(c, 0, -117, u, 1, '#c5b482');
    for (const x of [0, u - 5]) {
      box(c, x, -112, 5, 114, '#3d4b43');
      box(c, x + 1, -111, 1, 111, '#9dafa1');
    }
    // A glass leaf swings open as a customer crosses the actual doorway.
    const leaf = Math.max(8, (u - 10) * (1 - doorOpen * 0.82));
    c.strokeStyle = '#3d4b43';
    c.lineWidth = 2;
    c.strokeRect(5, -107, leaf, 103);
    box(c, 7, -104, Math.max(1, leaf - 4), 96, '#a5c5bb55');
    polygon(
      c,
      [
        { x: 8, y: -101 },
        { x: leaf + 2, y: -94 },
        { x: leaf + 2, y: -82 },
        { x: 8, y: -89 }
      ],
      '#e7f2dd66'
    );
    box(c, 5, -107, leaf, 3, '#3d4b43');
    box(c, 5, -7, leaf, 3, '#3d4b43');
    box(c, leaf + 2, -106, 3, 102, '#3d4b43');
    box(c, leaf - 4, -62, 2, 15, '#d6c18a');
    box(c, -4, -136, u + 8, 17, '#775533');
    box(c, -2, -134, u + 4, 13, '#f3dfad');
    c.fillStyle = '#624b30';
    c.textAlign = 'center';
    c.font =
      'bold ' + Math.min(8, (u - 6) / Math.max(1, Array.from(shopName).length)) + 'px sans-serif';
    c.fillText(shopName, u / 2, -124);
    // Small open sign hangs from the door, rather than blocking the view.
    if (doorOpen < 0.7) {
      box(c, leaf / 2 - 10, -79, 24, 11, '#f3e1ad');
      c.fillStyle = '#527057';
      c.font = 'bold 6px sans-serif';
      c.fillText(isOpen ? 'OPEN' : 'CLOSED', leaf / 2 + 2, -71);
    }
    c.restore();
  };
  Interior.facade=facade;root.Interior = Interior;
})(window);

;
// SOURCE: systems/furniture
(function (root) {
  const vectors = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0]
    ],
    labels = ['앞면 ↙', '앞면 ↘', '앞면 ↗', '앞면 ↖'];
  function direction(f) {
    return f.t === 3 ? 0 : (((Number.isInteger(f.dir) ? f.dir : f.rot ? 1 : 0) % 4) + 4) % 4;
  }
  function front(f) {const d=direction(f),[dx,dy]=vectors[d],wide=[12,15].includes(f.t)&&!f.legacyCompact,offset=1;return {x:f.x+dx+(wide&&[0,2].includes(d)?offset:0),y:f.y+dy+(wide&&[1,3].includes(d)?offset:0)};}
  function seatEntry(f) {const [dx,dy]=vectors[direction(f)];return {x:f.x+dx*.25,y:f.y+dy*.25};}
  function seat(f) {const [x,y]=[[.4,.2],[.2,.4],[-.15,-.15],[-.15,-.15]][direction(f)];return {x:f.x+x,y:f.y+y};}
  function migrate(f) {
    return { ...f, dir: direction(f) };
  }
  function cells(f){if(![12,15].includes(f.t)||f.legacyCompact)return [{x:f.x,y:f.y}];const d=direction(f);return Array.from({length:f.t===12?2:3},(_,n)=>({x:f.x+([0,2].includes(d)?n:0),y:f.y+([1,3].includes(d)?n:0)}));}
  function covers(f,x,y){return cells(f).some(p=>p.x===x&&p.y===y);}
  function blocks(f,x,y){return f.t!==9 && covers(f,x,y);}
  function conflicts(a,b){return (a.t===9)===(b.t===9)&&cells(a).some(p=>covers(b,p.x,p.y));}
  const api = { vectors, labels, direction, front, migrate, seatEntry, seat, cells, covers, blocks, conflicts };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Furniture = api;
})(typeof window !== 'undefined' ? window : globalThis);

;
// SOURCE: systems/audio
/* Original synthesized plucked-string music and small shop effects.
   Audio starts only after a user gesture; no external recordings are used. */
(function (root) {
  class ShopAudio {
    constructor(settings) {
      this.settings = settings;
      this.context = null;
      this.running = true;
      this.voices = 0;
      this.cache = new Map();
      this.cooldowns = {};
      this.step = 0;
      this.next = 0;
    }
    async unlock() {
      try {
        const C = root.AudioContext || root.webkitAudioContext;
        if (!C) return false;
        if (!this.context) {
          this.context = new C();
          this.music = this.context.createGain();
          this.effects = this.context.createGain();
          this.master = this.context.createGain();
          this.music.connect(this.master);
          this.effects.connect(this.master);
          this.master.connect(this.context.destination);
          this.timer = setInterval(() => this.schedule(), 200);
          this.next = this.context.currentTime + 0.1;
          this.apply();
        }
        if (this.context.state !== 'running') await this.context.resume();
        this.schedule();
        return this.context.state === 'running';
      } catch {
        return false;
      }
    }
    apply() {
      if (!this.context) return;
      const t = this.context.currentTime;
      this.master.gain.setTargetAtTime(this.settings.muted ? 0 : 0.55, t, 0.025);
      this.music.gain.setTargetAtTime(this.running ? this.settings.music : 0, t, 0.08);
      this.effects.gain.setTargetAtTime(this.settings.effects, t, 0.025);
    }
    setRunning(v) {
      if (v === this.running) return;
      this.running = v;
      if (this.context) this.next = this.context.currentTime + 0.1;
      this.apply();
    }
    buffer(freq) {
      const key = Math.round(freq * 10);
      if (this.cache.has(key)) return this.cache.get(key);
      const c = this.context,
        n = Math.round(c.sampleRate * 2.4),
        period = Math.round(c.sampleRate / freq),
        b = c.createBuffer(1, n, c.sampleRate),
        a = b.getChannelData(0);
      for (let i = 0; i < period; i++) a[i] = (Math.random() * 2 - 1) * 0.7;
      for (let i = period; i < n; i++) a[i] = (a[i - period] + a[i - period + 1]) * 0.4975;
      this.cache.set(key, b);
      return b;
    }
    pluck(freq, time, volume = 0.3, music = false) {
      if (!this.context || this.voices >= 24) return;
      const c = this.context,
        s = c.createBufferSource(),
        g = c.createGain(),
        filter = c.createBiquadFilter();
      s.buffer = this.buffer(freq);
      filter.type = 'lowpass';
      filter.frequency.value = music ? 2600 : 3900;
      g.gain.setValueAtTime(volume, time);
      g.gain.exponentialRampToValueAtTime(0.0001, time + 2.2);
      s.connect(filter);
      filter.connect(g);
      g.connect(music ? this.music : this.effects);
      this.voices++;
      s.onended = () => {
        this.voices--;
        s.disconnect();
        filter.disconnect();
        g.disconnect();
      };
      s.start(time);
      s.stop(time + 2.3);
    }
    tone(freq, time, duration = 0.12, volume = 0.1, type = 'sine') {
      if (!this.context || this.voices >= 24) return;
      const c = this.context,
        o = c.createOscillator(),
        g = c.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, time);
      g.gain.exponentialRampToValueAtTime(volume, time + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, time + duration);
      o.connect(g);
      g.connect(this.effects);
      this.voices++;
      o.onended = () => {
        this.voices--;
        o.disconnect();
        g.disconnect();
      };
      o.start(time);
      o.stop(time + duration + 0.03);
    }
    play(kind, product = 0) {
      if (!this.context || this.context.state !== 'running' || this.settings.muted) return;
      const t = this.context.currentTime,
        limit = ['try','drums'].includes(kind) ? 2 : kind === 'bell' ? 0.8 : 0.07;
      if (t - (this.cooldowns[kind] ?? -99) < limit) return;
      this.cooldowns[kind] = t;
      if (kind === 'bell') {
        this.tone(1174.66, t, 0.65, 0.07);
        this.tone(1567.98, t + 0.09, 0.55, 0.04);
      } else if (kind === 'sale') {
        this.tone(1046.5, t, 0.12, 0.07, 'triangle');
        this.tone(1567.98, t + 0.07, 0.2, 0.06);
      } else if(kind==='drums'){
        for(let beat=0;beat<4;beat++){const tt=t+beat*.22;this.tone(beat%2?170:62,tt,.10,beat%2?.035:.07,beat%2?'triangle':'sine');this.tone(7000,tt+.11,.025,.008,'square');}
      } else if (kind === 'try') {
        const chords = [
          [329.63, 415.3, 493.88],
          [82.41, 110],
          [261.63, 329.63, 392]
        ][product % 3];
        chords.forEach((n, i) => this.pluck(n, t + i * 0.075, 0.3));
      } else if (kind === 'close') {
        [392, 329.63, 261.63].forEach((n, i) => this.pluck(n, t + i * 0.13, 0.2));
      } else if (kind === 'stock') {
        this.tone(100, t, 0.12, 0.09, 'triangle');
        this.tone(180, t + 0.04, 0.09, 0.05, 'triangle');
      } else if (kind === 'open') {
        [261.63, 329.63, 392].forEach((n, i) => this.pluck(n, t + i * 0.12, 0.25));
      } else this.tone(kind === 'rotate' ? 270 : 220, t, 0.06, 0.07, 'triangle');
    }
    schedule() {
      if (!this.context || this.context.state !== 'running' || !this.running || this.settings.muted)
        return;
      const c = this.context,
        notes = [
          130.81, 196, 261.63, 196, 110, 164.81, 220, 164.81, 87.31, 130.81, 174.61, 130.81, 98,
          146.83, 196, 146.83
        ];
      if (this.next < c.currentTime) this.next = c.currentTime + 0.05;
      while (this.next < c.currentTime + 0.35) {
        this.pluck(notes[this.step % 16], this.next, 0.2, true);
        if (this.step % 4 === 0) this.pluck(notes[this.step % 16] / 2, this.next, 0.13, true);
        this.step++;
        this.next += 0.48;
      }
    }
  }
  root.ShopAudio = ShopAudio;
})(window);

;
// SOURCE: systems/picking
// Distance to visible sprite pixels, in rendered world coordinates.
(function (root) {
  function distance(q, r, mask, radius = 0) {
    if (
      q.x < r.x - radius ||
      q.x > r.x + r.w + radius ||
      q.y < r.y - radius ||
      q.y > r.y + r.h + radius
    )
      return Infinity;
    if (!mask) {
      const dx = Math.max(r.x - q.x, 0, q.x - r.x - r.w),
        dy = Math.max(r.y - q.y, 0, q.y - r.y - r.h);
      return Math.hypot(dx, dy);
    }
    const px = ((q.x - r.x) / r.w) * mask.w,
      py = ((q.y - r.y) / r.h) * mask.h;
    const rx = Math.ceil((radius / r.w) * mask.w) + 1,
      ry = Math.ceil((radius / r.h) * mask.h) + 1;
    let best = Infinity;
    for (
      let y = Math.max(0, Math.floor(py) - ry);
      y <= Math.min(mask.h - 1, Math.floor(py) + ry);
      y++
    )
      for (
        let x = Math.max(0, Math.floor(px) - rx);
        x <= Math.min(mask.w - 1, Math.floor(px) + rx);
        x++
      ) {
        if (mask.alpha[y * mask.w + x] < 48) continue;
        const dx = (Math.max(x - px, 0, px - x - 1) * r.w) / mask.w,
          dy = (Math.max(y - py, 0, py - y - 1) * r.h) / mask.h;
        best = Math.min(best, Math.hypot(dx, dy));
      }
    return best <= radius ? best : Infinity;
  }
  function choose(candidates) {
    const hits = candidates.filter((c) => Number.isFinite(c.distance));
    const direct = hits.filter((c) => c.distance === 0);
    return (
      (direct.length
        ? direct.sort((a, b) => b.depth - a.depth || b.order - a.order)
        : hits.sort((a, b) => a.distance - b.distance || b.depth - a.depth || b.order - a.order))[0]
        ?.f || null
    );
  }
  const api = { distance, choose };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.Picking = api;
})(typeof window !== 'undefined' ? window : globalThis);

;
// SOURCE: core/migrations
(function (root) {
  // Never remove a released migration; the same input version follows the same rules.
  function upgrade(raw, version, defaults, rules) {
    const v = raw;
    if (version < 2) {
      if (!Array.isArray(v.stock) || v.stock.length !== 3) throw Error('이전 재고 데이터');
      const nonempty = Array.isArray(v.furniture) && v.furniture.length > 0;
      v.stock = [...v.stock, 0, 0, 0, 0, 0, 0];
      v.stage = nonempty ? 4 : 0;
      v.phase = 'prepare';
      v.opened = false;
      v.time = 0;
      v.settlement = null;
      v.specialDone = false;
      v.furnitureRevenue = 0;
      for (const key of ['money', 'revenue', 'totalRevenue', 'expenses'])
        if (Number.isFinite(v[key])) v[key] = Math.round(v[key] * 1000);
      v.dayRent = nonempty ? 80000 : 30000;
      v.ledgerStart = (v.money ?? defaults.money) - (v.revenue ?? 0) + (v.expenses ?? 0);
      v.named = v.named ?? true;
    }
    if (version < 3 && Array.isArray(v.stock) && v.stock.length === 9 && rules.productCount >= 9)
      v.stock = [...v.stock, ...Array(rules.productCount - 9).fill(0)];

    if (version < 8 && Array.isArray(v.stock) && v.stock.length === 21 && rules.productCount >= 21)
      v.stock = [...v.stock, ...Array(rules.productCount - 21).fill(0)];
    if (version < 11) {
      for (const key of ['stock'])
        if (Array.isArray(v[key]) && v[key].length === 24 && rules.productCount >= 26)
          v[key] = [...v[key], 0, 0];
      if (Array.isArray(v.missionStats?.sales) && v.missionStats.sales.length === 24)
        v.missionStats.sales = [...v.missionStats.sales, 0, 0];
      if (Array.isArray(v.staffPolicy?.products) && v.staffPolicy.products.length === 24)
        v.staffPolicy.products = [...v.staffPolicy.products, {enabled:true,quantity:1}, {enabled:true,quantity:1}];
    }
    if (version < 12) { v.cashierHired = 0; v.featureNotices = v.stage >= 3 ? ['cashier1','cashier2'] : v.stage >= 2 ? ['cashier1'] : []; v.newFeatures = [...v.featureNotices]; }
    if(version<13){
      for(const key of ['stock'])if(Array.isArray(v[key])&&v[key].length===26&&rules.productCount>=27)v[key].push(0);
      if(Array.isArray(v.missionStats?.sales)&&v.missionStats.sales.length===26)v.missionStats.sales.push(0);
      if(Array.isArray(v.staffPolicy?.products)&&v.staffPolicy.products.length===26)v.staffPolicy.products.push({enabled:true,quantity:1});
      v.showcase=null;v.drummerIntroduced=false;
      for(const key of ['featureNotices','newFeatures'])v[key]=(v[key]??[]).map(k=>k==='showcase'?'drums':k);
      if(v.claimedMissions?.includes('s6-sales'))for(const key of ['featureNotices','newFeatures'])if(!v[key].includes('drums'))v[key].push('drums');
    }
    if(version<15 && Array.isArray(v.guests))for(const p of v.guests){
      if(p.state==='try'&&p.product===26){p.drumResumeTimer=p.timer;delete p.drumSeatPhase;delete p.drumsSeated;}
    }
    if(version<16)v.ending={day:0,viewed:false,continued:false,records:null};
    // Version 9 only adds optional operations fields (staff, showcase, ad); missing values use defaults.
    return v;
  }
  const api = { upgrade };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SaveMigrations = api;
})(typeof window !== 'undefined' ? window : globalThis);

;
// SOURCE: core/storage
(function (root) {
  const commonJS = typeof module !== 'undefined' && module.exports;
  const schema = commonJS ? require('../../../config/save-schema.json') : root.GameBuild.schema;
  const Migrations = commonJS ? require('./migrations.js') : root.SaveMigrations;
  const VERSION = schema.version;
  function decode(raw, defaults, rules = {}) {
    rules = {
      width: 15,
      height: 12,
      typeCount: 8,
      productCount: defaults.stock.length,
      actorCount: 13,
      missionDefinitions: commonJS
        ? require('../../../config/missions.json')
        : root.GameBuild.missions,
      instrumentIds: [0, 1, 2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 21, 22, 23, 24, 25, 26],
      ...rules
    };
    const instrument = (i) => rules.instrumentIds.includes(i);
    if (raw == null) return JSON.parse(JSON.stringify(defaults));
    let v = typeof raw === 'string' ? JSON.parse(raw) : JSON.parse(JSON.stringify(raw));
    if (v?.format === 'little-tone-save') v = v.state;
    if (!v || typeof v !== 'object' || Array.isArray(v)) throw Error('저장 파일 형식');
    const version = v.saveVersion ?? 0;
    if (!Number.isInteger(version) || version < 0 || version > VERSION)
      throw Error('지원하지 않는 저장 버전');
    Migrations.upgrade(v, version, defaults, rules);
    if(version<25)rules.migrateVIP?.(v,version);
    if(version<27)rules.migrateCraft?.(v,version);
    if(version<23){v.requests=[];v.nextRequestId=1;v.adDay=0;for(const k of ['featureNotices','newFeatures'])if(Array.isArray(v[k]))v[k]=v[k].filter(x=>x!=='ad');}
    if (
      !Array.isArray(v.stock) ||
      v.stock.length !== rules.productCount ||
      v.stock.some((n) => !Number.isSafeInteger(n) || n < 0)
    )
      throw Error('재고 데이터');
    if (!Number.isInteger(v.stage) || v.stage < 0 || v.stage >= (rules.stageSizes?.length ?? 6)) throw Error('매장 단계');
    const sizes =
        version < 4
          ? schema.legacyStageSizes
          : (rules.stageSizes ?? [
              [9, 7],
              [10, 8],
              [11, 9],
              [12, 10],
              [13, 11],
              [15, 12]
            ]),
      size = sizes[v.stage],
      seen = new Set(),
      cells = new Set();
    if (!Array.isArray(v.furniture)) throw Error('가구 데이터');
    const furniture = v.furniture.map((f) => {
      if (
        !f ||
        !Number.isSafeInteger(f.id) ||
        f.id < 1 ||
        seen.has(f.id) ||
        !Number.isInteger(f.t) ||
        f.t < 0 ||
        f.t >= rules.typeCount ||
        !Number.isInteger(f.x) ||
        !Number.isInteger(f.y) ||
        f.x < 0 ||
        f.x >= size[0] ||
        f.y < 0 ||
        f.y >= size[1] ||
        Furniture.cells(f).some(p=>cells.has((f.t===9?'floor:':'solid:')+p.x+','+p.y))
      )
        throw Error('가구 위치');
      if(f.dir!==undefined&&(!Number.isInteger(f.dir)||f.dir<0||f.dir>3))throw Error('가구 방향');
      seen.add(f.id);
      for(const p of Furniture.cells(f)){if(p.x<0||p.y<0||p.x>=size[0]||p.y>=size[1])throw Error('가구 범위');const cell=(f.t===9?'floor:':'solid:')+p.x+','+p.y;if(cells.has(cell))throw Error('가구 겹침');cells.add(cell);}
      if(f.t===0&&(f.p===26||f.p2===26))throw Error('전자드럼 전용 진열대 필요');
      if((f.t===6||f.t===7)&&((f.p!=null&&f.p!==26)||f.p2!=null||f.items?.length))throw Error('전자드럼 가구 상품');
      if (
        f.p !== undefined &&
        f.p !== null &&
        (!Number.isInteger(f.p) || f.p < 0 || f.p >= rules.productCount || !instrument(f.p))
      )
        throw Error('진열 상품');
      if (
        f.items !== undefined &&
        (!Array.isArray(f.items) ||
          f.items.length > 4 ||
          new Set(f.items).size !== f.items.length ||
          f.items.some(
            (i) => !Number.isInteger(i) || i < 0 || i >= rules.productCount || instrument(i)
          ))
      )
        throw Error('선반 상품');
      if (f.p2 !== undefined && f.p2 !== null && (!Number.isInteger(f.p2) || !instrument(f.p2) || f.p2 < 0 || f.p2 >= rules.productCount || f.p2 === f.p)) throw Error('두 번째 진열 상품');
      return {
        ...f,
        p2: f.t === 0 ? (f.p2 ?? null) : undefined,
        p: f.t === 0 ? (version < 4 ? (f.p ?? 0) : (f.p ?? null)) : f.p,
        items: f.t === 5 ? (f.items ?? schema.legacyShelfItems) : undefined
      };
    });
    const s = { ...defaults };
    for (const key of [
      'money',
      'day',
      'time',
      'revenue',
      'sold',
      'visitors',
      'totalSales',
      'totalRevenue',
      'expenses',
      'rep',
      'customerSequence',
      'furnitureRevenue',
      'ledgerStart',
      'dayRent'
    ]) {
      const n = v[key] ?? defaults[key];
      if (
        !Number.isFinite(n) ||
        Math.abs(n) > 1e15 ||
        (!['money', 'ledgerStart'].includes(key) && n < 0)
      )
        throw Error('운영 데이터');
      s[key] = n;
    }
    if (!Number.isSafeInteger(s.day) || s.day < 1 || s.time > (version < 5 ? 180 : 120))
      throw Error('날짜 데이터');
    if (version < 5) s.time *= 2 / 3;
    if (!['prepare', 'open', 'closing', 'settled'].includes(v.phase)) throw Error('영업 상태');
    s.phase = v.phase;
    s.opened = v.phase === 'open' || v.phase === 'closing';
    s.stage = v.stage;
    s.specialDone = v.specialDone === true;
    s.settlement = null;
    if (s.phase === 'settled') {
      const r = v.settlement;
      if (
        !r ||
        r.day !== s.day ||
        !['income', 'expenses', 'net', 'rent'].every((k) => Number.isFinite(r[k])) ||
        r.income < 0 ||
        r.expenses < 0 ||
        r.rent < 0 ||
        r.net !== r.income - r.expenses
      )
        throw Error('정산 데이터');
      s.settlement = {
        day: r.day,
        income: r.income,
        expenses: r.expenses,
        net: r.net,
        rent: r.rent,
        wage: Number.isFinite(r.wage) && r.wage >= 0 ? r.wage : 0
      };
    }
    const name =
      typeof v.shopName === 'string' ? v.shopName.normalize('NFC').trim() : defaults.shopName;
    s.shopName = name && Array.from(name).length <= 10 ? name : defaults.shopName;
    s.named = typeof v.named === 'boolean' ? v.named : true;
    s.guests = [];
    if (version >= 2 && ['open', 'closing'].includes(s.phase) && v.guests !== undefined) {
      if (!Array.isArray(v.guests) || v.guests.length > 12) throw Error('손님 데이터');
      const point = (p) =>
        p &&
        Number.isFinite(p.x) &&
        Number.isFinite(p.y) &&
        p.x >= -1 &&
        p.x <= size[0] + 1 &&
        p.y >= -1 &&
        p.y <= size[1] + 1;
      const ids = new Set();
      s.guests = v.guests.map((p) => {
        if (
          !p ||
          !Number.isFinite(p.id) ||
          ids.has(p.id) ||
          !point(p) ||
          !Number.isInteger(p.actor) ||
          p.actor < 0 ||
          p.actor >= rules.actorCount ||
          !Number.isInteger(p.product) ||
          p.product < 0 ||
          p.product >= rules.productCount ||
          !Array.isArray(p.path) ||
          p.path.length > 64 ||
          !p.path.every(point) ||
          !['browse', 'try', 'rest', 'queue', 'checkout', 'leave', 'follow'].includes(p.state) ||
          !Number.isFinite(p.timer) ||
          p.timer < 0 ||
          !Array.isArray(p.basket ?? []) ||
          ((p.basket ?? []).length > rules.productCount || new Set(p.basket??[]).size!==(p.basket??[]).length) ||
          (p.basket ?? []).some((i) => !Number.isInteger(i) || i < 0 || i >= rules.productCount) ||
          (p.target && !point(p.target))
        )
          throw Error('손님 위치');
        if (
          p.budget !== undefined &&
          (!Number.isFinite(p.budget) || p.budget < 0 || p.budget > 1e9)
        )
          throw Error('손님 예산');
        ids.add(p.id);
        return {
          ...p,
          bubbleUntil:
            version < 5 && Number.isFinite(p.bubbleUntil) ? (p.bubbleUntil * 2) / 3 : p.bubbleUntil,
          name: typeof p.name === 'string' ? p.name.slice(0, 24) : '손님',
          special: ['band', 'family', 'musician', 'child'].includes(p.special) ? p.special : null
        };
      });
    }
    const tiers = (field) => {
      const a = v[field] ?? [];
      if (
        !Array.isArray(a) ||
        new Set(a).size !== a.length ||
        a.some((t) => !Number.isInteger(t) || t < 1 || t > s.stage)
      )
        throw Error('해금 기록');
      return [...a];
    };
    s.introducedTiers = version < 3 ? [] : tiers('introducedTiers');
    s.pendingIntroductions =
      version < 3
        ? Array.from({ length: s.stage }, (_, i) => i + 1)
        : tiers('pendingIntroductions');
    if (s.pendingIntroductions.some((t) => s.introducedTiers.includes(t)))
      throw Error('중복 첫 방문');
    s.expansionNotice = version >= 3 ? (v.expansionNotice ?? null) : null;
    if (
      s.expansionNotice !== null &&
      (!Number.isInteger(s.expansionNotice) || s.expansionNotice < 1 || s.expansionNotice > s.stage)
    )
      throw Error('확장 안내');
    s.repathGuests = version < 24 || (version < 15 && furniture.some(f=>f.t===6||f.t===7));
    s.customerBook = {};
    s.requests = [];
    s.nextRequestId = 1;
    if (version >= 4) {
      const keyOK = (k) =>
        typeof k === 'string' && /^(actor-(?:[0-9]|1[012])|special-(band|family|musician))$/.test(k);
      const nat = (n) => Number.isSafeInteger(n) && n >= 0 && n <= 1e12;
      const families = ['electric', 'bass', 'acoustic', 'effect', 'strings', 'drums'];
      if (v.customerBook !== undefined) {
        if (
          !v.customerBook ||
          typeof v.customerBook !== 'object' ||
          Array.isArray(v.customerBook) ||
          Object.keys(v.customerBook).length > 32
        )
          throw Error('손님 기록');
        for (const [key, r] of Object.entries(v.customerBook)) {
          if (
            !keyOK(key) ||
            !r ||
            r.key !== key ||
            !Number.isInteger(r.actor) ||
            r.actor < 0 ||
            r.actor >= rules.actorCount ||
            typeof r.name !== 'string' ||
            r.name.length > 24 ||
            !['visits', 'purchases', 'spent', 'lastVisitDay'].every((k) => nat(r[k])) ||
            r.purchases > r.visits ||
            r.lastVisitDay > s.day ||
            !Number.isFinite(r.satisfaction) ||
            r.satisfaction < 0 ||
            r.satisfaction > 100 ||
            !families.includes(r.favoriteFamily) ||
            !Number.isInteger(r.preferredTier) ||
            r.preferredTier < 0 ||
            r.preferredTier > 5
          )
            throw Error('단골 기록');
          const integer = (n) => Number.isSafeInteger(n) && n >= 0;
          if (
            version >= 8 &&
            ((![r.affinityDay,r.lastStockoutDay,r.stockoutStreak].every(integer)||!Number.isFinite(r.affinityGain)||r.affinityGain<0||!Number.isInteger(r.affinityGain*2)) ||
              r.affinityDay > s.day ||
              r.affinityGain > 10 ||
              r.lastStockoutDay > s.day ||
              typeof r.regular !== 'boolean')
          )
            throw Error('호감도 기록');
          s.customerBook[key] = {
            ...r,
            regular: version < 8 ? r.purchases >= 2 : r.regular,
            affinityDay: version < 8 ? s.day : r.affinityDay,
            affinityGain: version < 8 ? 0 : r.affinityGain,
            lastStockoutDay: version < 8 ? 0 : r.lastStockoutDay,
            stockoutStreak: version < 8 ? 0 : r.stockoutStreak
          };
        }
      }
      if (v.requests !== undefined) {
        if (!Array.isArray(v.requests) || v.requests.length > 512) throw Error('요청 기록');
        const ids = new Set();
        s.requests = v.requests.map((q) => {
          if (
            !q ||
            !nat(q.id) ||
            q.id < 1 ||
            ids.has(q.id) ||
            !keyOK(q.customerKey) ||
            typeof q.customerName !== 'string' ||
            q.customerName.length > 24 ||
            !Number.isInteger(q.product) ||
            q.product < 0 ||
            q.product >= rules.productCount ||
            !['not_displayed', 'sold_out'].includes(q.reason) ||
            !nat(q.firstDay) ||
            q.firstDay < 1 ||
            !nat(q.lastDay) ||
            q.lastDay < q.firstDay ||
            q.lastDay > s.day ||
            !nat(q.count) ||
            q.count < 1 ||
            typeof q.fulfilled !== 'boolean' ||
            (q.fulfilled &&
              (!nat(q.resolvedDay) || q.resolvedDay < q.firstDay || q.resolvedDay > s.day))
          )
            throw Error('요청 내용');
          ids.add(q.id);
          return { ...q };
        });
        s.nextRequestId = Math.max(
          1,
          ...s.requests.map((q) => q.id + 1),
          nat(v.nextRequestId) ? v.nextRequestId : 1
        );
      }
    }
    s.pendingOrders = [];
    if (version >= 7) {
      if (
        !Array.isArray(v.pendingOrders ?? []) ||
        (v.pendingOrders ?? []).length > rules.productCount * 4
      )
        throw Error('입고 예정');
      const ordered = new Set();
      s.pendingOrders = (v.pendingOrders ?? []).map((o) => {
        if (
          !o ||
          !Number.isInteger(o.product) ||
          !instrument(o.product) ||
          o.product < 9 ||
          o.product >= rules.productCount ||
          ordered.has(o.product+':'+o.dueDay+':'+(version>=21?(o.dueTime??0):0)) ||
          !Number.isSafeInteger(o.quantity) ||
          o.quantity < 1 ||
          o.quantity > 1000000 ||
          !Number.isSafeInteger(o.dueDay) ||
          o.dueDay < 1 ||
          o.dueDay > s.day + 1 ||
          (version>=21 && ![0,60].includes(o.dueTime??0))
        )
          throw Error('입고 내용');
        ordered.add(o.product+':'+o.dueDay+':'+(version>=21?(o.dueTime??0):0));
        return { ...o, dueTime:version>=21?(o.dueTime??0):0 };
      });
    }
    if (version < 8) {
      s.rep = Math.max(0, Math.min(100, Math.round(10 + (s.rep - 4.5) * 180)));
      s.reputationDaily = { day: s.day, gained: 0 };
      s.missionRevenue = 0;
      s.missionStats = {
        sales: Array(rules.productCount).fill(0),
        bestDay: s.sold,
        legacyImported: true
      };
      s.claimedMissions = [];
      s.pendingMissionGuests = [];
      s.introducedMissionGuests = [];
    } else {
      if (s.rep < 0 || s.rep > 100) throw Error('명성 범위');
      const daily = v.reputationDaily;
      if (
        !daily ||
        !Number.isSafeInteger(daily.day) ||
        daily.day < 1 ||
        daily.day > s.day ||
        !Number.isFinite(daily.gained) ||
        daily.gained < 0 ||
        daily.gained > 3
      )
        throw Error('명성 일일 기록');
      s.reputationDaily = daily.day === s.day ? { ...daily } : { day: s.day, gained: 0 };
      if (
        !Number.isSafeInteger(v.missionRevenue) ||
        v.missionRevenue < 0 ||
        v.missionRevenue > 2700000
      )
        throw Error('미션 수입');
      s.missionRevenue = v.missionRevenue;
      const stats = v.missionStats;
      if (
        !stats ||
        !Array.isArray(stats.sales) ||
        stats.sales.length !== rules.productCount ||
        stats.sales.some((n) => !Number.isSafeInteger(n) || n < 0) ||
        stats.sales.reduce((n, q) => n + q, 0) > s.totalSales ||
        !Number.isSafeInteger(stats.bestDay) ||
        stats.bestDay < 0 ||
        stats.bestDay > s.totalSales ||
        typeof stats.legacyImported !== 'boolean'
      )
        throw Error('미션 판매 기록');
      s.missionStats = {
        sales: [...stats.sales],
        bestDay: stats.bestDay,
        legacyImported: stats.legacyImported
      };
      const definitions = rules.missionDefinitions;
      const claimed = v.claimedMissions;
      const legacyDefinitions = definitions.filter((m) => m.id !== 's3-rack');
      if (!Array.isArray(claimed) || new Set(claimed).size !== claimed.length || claimed.some((id) => !definitions.some((m) => m.id === id && m.stage <= s.stage))) throw Error('미션 완료 기록');
      if(version<17){
        const oldClaims = claimed.filter((id) => id !== 's3-rack');
        if (oldClaims.some((id, i) => id !== legacyDefinitions[i].id)) throw Error('미션 완료 순서');
        if (claimed.includes('s3-rack') && !definitions.slice(0, definitions.findIndex((m) => m.id === 's3-rack')).every((m) => claimed.includes(m.id))) throw Error('진열대 보상 순서');
      }else{
        for(const challenge of [false,true]){
          const lane=definitions.filter(m=>(m.reward.product!==undefined)===challenge);
          // Old saves may own later growth rewards while missing the v10 rack mission.
          const ordered=lane.filter(m=>m.id!=='s3-rack'), owned=claimed.filter(id=>ordered.some(m=>m.id===id)).map(id=>ordered.find(m=>m.id===id));
          if(owned.some((m,i)=>m.id!==ordered[i].id))throw Error('미션 완료 순서');
          if(!challenge&&claimed.includes('s3-rack')&&!lane.slice(0,lane.findIndex(m=>m.id==='s3-rack')).every(m=>claimed.includes(m.id)))throw Error('진열대 보상 순서');
        }
      }
      s.claimedMissions = [...claimed];
      const guests = definitions
        .filter((m) => s.claimedMissions.includes(m.id) && m.reward.actor !== undefined)
        .map((m) => m.reward.actor);
      for (const field of ['pendingMissionGuests', 'introducedMissionGuests']) {
        const value = v[field];
        if (
          !Array.isArray(value) ||
          new Set(value).size !== value.length ||
          value.some((a) => !guests.includes(a))
        )
          throw Error('미션 손님 기록');
        s[field] = [...value];
      }
      const all = [...s.pendingMissionGuests, ...s.introducedMissionGuests];
      if (new Set(all).size !== all.length || all.length !== guests.length)
        throw Error('미션 손님 중복');
    }
    const unlockedActors = rules.missionDefinitions
      .filter((m) => s.claimedMissions.includes(m.id) && m.reward.actor !== undefined)
      .map((m) => m.reward.actor);
    if(s.stage>=5&&s.claimedMissions.includes('s6-sales'))unlockedActors.push(12);
    if (
      s.guests.some((p) => p.actor >= 9 && !unlockedActors.includes(p.actor)) ||
      Object.values(s.customerBook).some((p) => p.actor >= 9 && !unlockedActors.includes(p.actor))
    )
      throw Error('잠긴 미션 손님');
    // Operations unlocked by claimed missions: cabinet slot, staff slots and showcase.
    const has = (name) =>
      rules.missionDefinitions.some(
        (m) => m.reward.feature === name && s.claimedMissions.includes(m.id)
      );
    const staffLimit = (s.stage>=1 || has('staff') ? 1 : 0) + (has('staff2') ? 1 : 0);
    if (
      furniture.some((f) => f.t === 5 && (f.items ?? []).length > (has('cabinet') ? 4 : 3))
    )
      throw Error('소품장 진열 수');
    if (furniture.some((f) => f.t === 0 && f.p2 != null) && !has('rack2')) throw Error('진열대 슬롯 미해금');
    const story = v.hanaStory ?? {phase:'locked',startedDay:0,deliveredDay:0,completedDay:0};
    const phases = ['locked','offered','accepted','delivered','done'];
    if (!story || !phases.includes(story.phase) || !['startedDay','deliveredDay','completedDay'].every((k) => Number.isSafeInteger(story[k]) && story[k] >= 0 && story[k] <= s.day)) throw Error('하나 이야기 기록');
    if (story.phase !== 'locked' && (!story.startedDay || !s.customerBook['actor-9'])) throw Error('하나 이야기 해금');
    if (['delivered','done'].includes(story.phase) && (!story.deliveredDay || story.deliveredDay < story.startedDay)) throw Error('하나 이야기 납품');
    if (story.phase === 'done' && (!story.completedDay || story.completedDay <= story.deliveredDay)) throw Error('하나 이야기 후일담');
    s.hanaStory = {phase:story.phase,startedDay:story.startedDay,deliveredDay:story.deliveredDay,completedDay:story.completedDay};
    if ((furniture.some((f) => f.p === 24 || f.p2 === 24) || s.pendingOrders.some((o) => o.product === 24)) && story.phase !== 'done') throw Error('잠긴 이야기 상품');
    s.cashierHired = v.cashierHired ?? 0;
    const cashierLimit = s.stage >= 3 ? 2 : s.stage >= 2 ? 1 : 0;
    if (!Number.isInteger(s.cashierHired) || s.cashierHired < 0 || s.cashierHired > cashierLimit || s.cashierHired > Math.max(0,furniture.filter(f=>f.t===1).length-1)) throw Error('계산 직원 데이터');
    s.staffHired = v.staffHired ?? 0;
    if (!Number.isInteger(s.staffHired) || s.staffHired < 0 || s.staffHired > staffLimit)
      throw Error('직원 데이터');
    const policy = v.staffPolicy ?? {
      reserve: 0,
      products: Array.from({length: rules.productCount}, (_, i) => ({enabled: true, quantity: instrument(i) && i >= 9 ? 1 : 5}))
    };
    if (!policy || !Number.isSafeInteger(policy.reserve) || policy.reserve < 0 || policy.reserve > 1e12 ||
      !Array.isArray(policy.products) || policy.products.length !== rules.productCount ||
      policy.products.some((p) => !p || typeof p.enabled !== 'boolean' || !Number.isSafeInteger(p.quantity) || p.quantity < 1 || p.quantity > 999 || (p.at != null && (!Number.isSafeInteger(p.at) || p.at < 0 || p.at > 99))))
      throw Error('직원 주문 설정');
    if(policy.enabled!==undefined&&typeof policy.enabled!=='boolean')throw Error('자동 주문 상태');
    s.staffPolicy = { enabled:policy.enabled!==false, reserve:0, products: policy.products.map((p) => ({ enabled: p.enabled, quantity: p.quantity, at: p.at ?? null })) };
    s.showcase=null;
    s.drummerIntroduced=v.drummerIntroduced??false;
    if(typeof s.drummerIntroduced!=='boolean'||(s.drummerIntroduced&&!has('drums')))throw Error('드러머 첫 방문');
    if((furniture.some(f=>f.t===6||f.t===7)||s.pendingOrders.some(o=>o.product===26))&&!has('drums'))throw Error('전자드럼 미해금');
    if(furniture.some(f=>f.t===7)&&!has('drumDemo'))throw Error('시연 공간 미해금');
    s.adDay = v.adDay ?? 0;
    if (!Number.isInteger(s.adDay) || s.adDay < 0 || s.adDay > s.day) throw Error('광고 데이터');
    s.furniture = furniture;
    s.stock = [...v.stock];
    s.nextId = Math.max(
      Number.isSafeInteger(v.nextId) ? v.nextId : 1,
      ...furniture.map((f) => f.id + 1)
    );
    s.audio = { ...defaults.audio };
    for (const k of ['music', 'effects'])
      if (Number.isFinite(v.audio?.[k])) s.audio[k] = Math.max(0, Math.min(1, v.audio[k]));
    s.audio.muted = v.audio?.muted === true;
    const featureKeys = ['delivery','staff','staff2','cabinet','rack2','drums','drumDemo','cashier1','cashier2'];
    for (const field of ['featureNotices','newFeatures']) {
      const values = v[field] ?? [];
      if (!Array.isArray(values) || values.length > featureKeys.length || new Set(values).size !== values.length || values.some(k=>!featureKeys.includes(k) || !(k==='delivery'?s.stage>=1:k==='staff' ? (s.stage>=1 || has(k)) : k==='ad' ? s.stage>=3 : k==='cashier1' ? s.stage>=2 : k==='cashier2' ? s.stage>=3 : has(k)))) throw Error('새 기능 안내 데이터');
      s[field] = [...values];
    }
    const ending=v.ending??{day:0,viewed:false,continued:false,records:null};
    if(!ending || !Number.isSafeInteger(ending.day) || ending.day<0 || ending.day>s.day || typeof ending.viewed!=='boolean' || typeof ending.continued!=='boolean')throw Error('엔딩 기록');
    if(ending.day===0){if(ending.viewed||ending.continued||ending.records!==null)throw Error('엔딩 상태');}
    else {
      const r=ending.records;
      if(!r||!['sales','revenue','regulars','drums'].every(k=>Number.isSafeInteger(r[k])&&r[k]>=0&&r[k]<=1e15)||r.drums<30||r.drums>s.missionStats.sales[26]||r.sales>s.totalSales||r.revenue>s.totalRevenue||(ending.continued&&!ending.viewed))throw Error('엔딩 통계');
      if(!ending.continued&&s.phase!=='settled')throw Error('엔딩 대기 상태');
    }
    s.ending={day:ending.day,viewed:ending.viewed,continued:ending.continued,records:ending.records?{sales:ending.records.sales,revenue:ending.records.revenue,regulars:ending.records.regulars,drums:ending.records.drums}:null};
    const roll=v.posterRoll??{day:0,won:false};
    if(!roll||!Number.isSafeInteger(roll.day)||roll.day<0||roll.day>s.day||typeof roll.won!=='boolean')throw Error('포스터 방문 기록');
    s.posterRoll={day:roll.day,won:roll.won};
    for(const r of Object.values(s.customerBook)){
      if(r.completedRequests!==undefined&&(!Number.isSafeInteger(r.completedRequests)||r.completedRequests<0||r.completedRequests>1e12))throw Error('요청 완료 횟수');
      r.completedRequests=r.completedRequests??0;
    }
    if(version<21)for(const q of s.requests)if(q.fulfilled&&s.customerBook[q.customerKey])s.customerBook[q.customerKey].completedRequests++;
    s.requests=s.requests.filter(q=>!q.fulfilled);
    const tour=version>=21?(v.tutorial??{active:false,step:0,purchased:false,startDay:1,completed:false}):{active:false,step:0,purchased:false,startDay:1,completed:false};
    if(!tour||typeof tour.active!=='boolean'||typeof tour.purchased!=='boolean'||typeof tour.completed!=='boolean'||!Number.isInteger(tour.step)||tour.step<0||tour.step>7||!Number.isSafeInteger(tour.startDay)||tour.startDay<1||tour.startDay>s.day||(tour.active&&tour.step===7))throw Error('안내 진행');
    s.tutorial={active:tour.active,step:tour.step,purchased:tour.purchased,startDay:tour.startDay,completed:tour.completed};
    for(let i=0;i<rules.productCount;i++)if(s.pendingOrders.filter(o=>o.product===i).reduce((n,o)=>n+o.quantity,0)>1000000)throw Error('입고 합계');
    rules.validateExpansion?.(v,s,rules);
    s.requests=[];s.nextRequestId=1;s.adDay=0;
    s.saveVersion = VERSION;
    return s;
  }
  function persisted(s){const {requests,nextRequestId,adDay,...rest}=s;return rest;}
  const api = {
    version: VERSION,
    decode,
    encode: (s) => JSON.stringify({ ...persisted(s), saveVersion: VERSION }),
    file: (s, version) =>
      JSON.stringify(
        {
          format: 'little-tone-save',
          appVersion: version,
          saveVersion: VERSION,
          state: { ...persisted(s), saveVersion: VERSION }
        },
        null,
        2
      )
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SaveStore = api;
})(typeof window !== 'undefined' ? window : globalThis);

;(function(){
'use strict';
const $=id=>document.getElementById(id),canvas=$('game'),ctx=canvas.getContext('2d');
const Motion=window.Motion,Interior=window.Interior,Furniture=window.Furniture,SaveStore=window.SaveStore;
// SOURCE: data/ids
// Numeric values are permanent save IDs. Append new IDs; never renumber.
const ProductId = Object.freeze({
  DAYBREAK_ST: 0,
  DEEP_FOREST_JB: 1,
  MORNING_ACOUSTIC: 2,
  OVERDRIVE: 3,
  DISTORTION: 4,
  DELAY: 5,
  ELECTRIC_STRINGS: 6,
  ACOUSTIC_STRINGS: 7,
  BASS_STRINGS: 8,
  BLUE_HOUR_ST: 9,
  AMBER_GROOVE_JB: 10,
  NIGHTFALL_SC: 11,
  WALNUT_RHYTHM_5: 12,
  WINE_SEMIHOLLOW: 13,
  IVORY_SESSION_5: 14,
  EMERALD_MASTER: 15,
  CHARCOAL_MASTER_5: 16,
  VIOLET_LIMITED: 17,
  MIDNIGHT_LIMITED_5: 18,
  AURORA_CHORUS: 19,
  DEEP_SPACE_REVERB: 20,
  CLOVER_ST: 21,
  EMBER_SESSION_5: 22,
  PEARL_LIMITED: 23,
  WALNUT_PARLOR: 24,
  DAWN_CUTAWAY: 25,
  ELECTRONIC_DRUMS: 26, CEDAR_GRAND:27, MOONLIGHT_ACOUSTIC:28
});
const FurnitureId = Object.freeze({
  GUITAR_RACK: 0,
  CHECKOUT: 1,
  AMP_DISPLAY: 2,
  MONSTERA: 3,
  DEMO_SEAT: 4,
  ACCESSORY_CABINET: 5,
  DRUM_DISPLAY: 6,
  DRUM_DEMO: 7,
  CATALOG: 8,
  RUG: 9,
  POSTER: 10, WORKBENCH:11, CUSTOM_DISPLAY:12, VIP_SEAT:13, VIP_DESK:14, VIP_DISPLAY:15, REST_CHAIR:16
});


// SOURCE: data/art
// Original pixels, anchors, feet, preview and hit-testing share one geometry.
const ArtLayout = window.GameBuild.art;
const DisplayFeet = ArtLayout.furnitureFeet;
const LegacyShelfItems = Object.freeze([...window.GameBuild.schema.legacyShelfItems]);


// SOURCE: data/balance
const Config = Object.freeze({
  version: window.GameBuild.version,
  saveVersion: SaveStore.version,
  storageKey: window.GameBuild.schema.storageKey,
  width: 20,
  height: 14,
  startingMoney: 5000000,
  initialStock: [3, 3, 3, ...Array(26).fill(0)],
  daySeconds: 120,
  guestPace: 1.5,
  restockBatch: 5,
  characterScale: 0.8,
  specialistShare: 0.35,
  premiumDemand: [1, 0.95, 0.9, 0.85, 0.75, 0.65],
  premiumSwitch: 0.5,
  expressFee: 0.2,
  staff: { firstHireCost: 500000, firstWage: 30000, hireCost: 2000000, wage: 90000, entryReorderAt: [1, 3] },
  ad: { minStage: 3, rentMultiple: 2.5, visitors: 1.2 },
  reputation: {
    start: 10,
    sale: 0.1,
    premiumSale: 0.3,
    closing: 0.5,
    dailyCap: 3,
    maxVisitorBonus: 0.15
  },
  affinity: {
    purchase: 2.5,
    premiumPurchase: 4,
    preference: 1,
    request: 1.5,
    dailyCap: 5,
    stockoutPenalty: 2,
    regular: 100
  }
});
const Stages = [{"name": "작은 악기점", "w": 10, "h": 8, "cost": 0, "rent": 30000, "capacity": 6, "interval": 7.5}, {"name": "여유 있는 매장", "w": 12, "h": 9, "cost": 2000000, "rent": 40000, "capacity": 7, "interval": 6.2}, {"name": "동네 악기점", "w": 14, "h": 11, "cost": 4500000, "rent": 50000, "capacity": 8, "interval": 5.3}, {"name": "전문 악기점", "w": 16, "h": 13, "cost": 10000000, "rent": 65000, "capacity": 9, "interval": 4.6}, {"name": "대형 악기점", "w": 20, "h": 16, "cost": 22000000, "rent": 80000, "capacity": 10, "interval": 4}, {"name": "우리 동네 음악 명소", "w": 22, "h": 18, "cost": 40000000, "rent": 100000, "capacity": 12, "interval": 3.5}, {"name": "커스텀 악기 아틀리에", "w": 24, "h": 20, "cost": 65000000, "rent": 125000, "capacity": 12, "interval": 3.5}];
let N = 9,
  M = 7;
const ENTRY = { x: 7, y: 6 },
  KEY = Config.storageKey;


// SOURCE: data/catalog
// Stable type IDs: append new entries instead of reordering existing ones.
const types = [
  {
    id: FurnitureId.GUITAR_RACK,
    key: 'GUITAR_RACK',
    name: '기타 진열대',
    cost: 250000,
    icon: '🎸',
    w: 118,
    h: 126
  },
  {
    id: FurnitureId.CHECKOUT,
    key: 'CHECKOUT',
    name: '계산대',
    cost: 500000,
    icon: '▣',
    w: 132,
    h: 126
  },
  {
    id: FurnitureId.AMP_DISPLAY,
    key: 'AMP_DISPLAY',
    name: '앰프 전시대',
    cost: 180000,
    icon: '▥',
    w: 88,
    h: 100
  },
  {
    id: FurnitureId.MONSTERA,
    key: 'MONSTERA',
    name: '몬스테라',
    cost: 60000,
    icon: '🌿',
    w: 83,
    h: 105
  },
  {
    id: FurnitureId.DEMO_SEAT,
    key: 'DEMO_SEAT',
    name: '악기 시연석',
    cost: 220000,
    icon: '♫',
    w: 112,
    h: 110
  },
  {
    id: FurnitureId.ACCESSORY_CABINET,
    key: 'ACCESSORY_CABINET',
    name: '소품 진열장',
    cost: 300000,
    icon: '▤',
    w: 118,
    h: 132
  }
];

const products = [
  {
    id: ProductId.DAYBREAK_ST,
    key: 'DAYBREAK_ST',
    name: '데이브레이크 ST',
    tag: '일렉 기타',
    cost: 220000,
    price: 340000,
    color: '#bd5446',
    kind: 'instrument',
    icon: '🎸'
  },
  {
    id: ProductId.DEEP_FOREST_JB,
    key: 'DEEP_FOREST_JB',
    name: '딥 포레스트 JB',
    tag: '베이스',
    cost: 320000,
    price: 470000,
    color: '#397c73',
    kind: 'instrument',
    icon: '🎸'
  },
  {
    id: ProductId.MORNING_ACOUSTIC,
    key: 'MORNING_ACOUSTIC',
    name: '모닝 어쿠스틱',
    tag: '어쿠스틱 기타',
    cost: 180000,
    price: 290000,
    color: '#c99151',
    kind: 'instrument',
    icon: '🪕'
  },
  {
    id: ProductId.OVERDRIVE,
    key: 'OVERDRIVE',
    name: '오버드라이브',
    tag: '이펙터 · 따뜻한 드라이브',
    cost: 55000,
    price: 85000,
    color: '#cb8a33',
    kind: 'effect',
    icon: '▣'
  },
  {
    id: ProductId.DISTORTION,
    key: 'DISTORTION',
    name: '디스토션',
    tag: '이펙터 · 강한 록 사운드',
    cost: 75000,
    price: 115000,
    color: '#b9554c',
    kind: 'effect',
    icon: '▣'
  },
  {
    id: ProductId.DELAY,
    key: 'DELAY',
    name: '딜레이',
    tag: '이펙터 · 반복되는 공간감',
    cost: 130000,
    price: 195000,
    color: '#47938d',
    kind: 'effect',
    icon: '▣'
  },
  {
    id: ProductId.ELECTRIC_STRINGS,
    key: 'ELECTRIC_STRINGS',
    name: '일렉 기타줄',
    tag: '일렉 기타용',
    cost: 4500,
    price: 8000,
    color: '#8e9c65',
    kind: 'strings',
    icon: '◉'
  },
  {
    id: ProductId.ACOUSTIC_STRINGS,
    key: 'ACOUSTIC_STRINGS',
    name: '어쿠스틱 기타줄',
    tag: '어쿠스틱 기타용',
    cost: 6500,
    price: 12000,
    color: '#bc914f',
    kind: 'strings',
    icon: '◉'
  },
  {
    id: ProductId.BASS_STRINGS,
    key: 'BASS_STRINGS',
    name: '베이스줄',
    tag: '베이스용',
    cost: 18000,
    price: 30000,
    color: '#667e99',
    kind: 'strings',
    icon: '◉'
  }
];

// IDs 0–8 are retained for existing saves. New products append after them.
const TierNames = ['입문급', '일반급', '전문급', '고급', '최고급', '명품'];
products.forEach((p, i) =>
  Object.assign(p, {
    unlock: 0,
    tier: 0,
    family:
      i === 1 ? 'bass' : i === 2 ? 'acoustic' : i === 0 ? 'electric' : i < 6 ? 'effect' : 'strings'
  })
);
products.push(
  {
    id: ProductId.BLUE_HOUR_ST,
    key: 'BLUE_HOUR_ST',
    name: '블루 아워 ST',
    tag: '일반급 일렉 기타',
    family: 'electric',
    kind: 'instrument',
    unlock: 1,
    cost: 450000,
    price: 650000,
    color: '#466eaa'
  },
  {
    id: ProductId.AMBER_GROOVE_JB,
    key: 'AMBER_GROOVE_JB',
    name: '앰버 그루브 JB',
    tag: '일반급 베이스',
    family: 'bass',
    kind: 'instrument',
    unlock: 1,
    cost: 550000,
    price: 780000,
    color: '#b58342'
  },
  {
    id: ProductId.NIGHTFALL_SC,
    key: 'NIGHTFALL_SC',
    name: '나이트폴 SC',
    tag: '전문급 일렉 기타',
    family: 'electric',
    kind: 'instrument',
    unlock: 2,
    cost: 850000,
    price: 1200000,
    color: '#34373d'
  },
  {
    id: ProductId.WALNUT_RHYTHM_5,
    key: 'WALNUT_RHYTHM_5',
    name: '월넛 리듬 5',
    tag: '전문급 5현 베이스',
    family: 'bass',
    kind: 'instrument',
    unlock: 2,
    cost: 1050000,
    price: 1450000,
    color: '#855a40'
  },
  {
    id: ProductId.WINE_SEMIHOLLOW,
    key: 'WINE_SEMIHOLLOW',
    name: '와인 세미할로우',
    tag: '고급 일렉 기타',
    family: 'electric',
    kind: 'instrument',
    unlock: 3,
    cost: 1600000,
    price: 2200000,
    color: '#864453'
  },
  {
    id: ProductId.IVORY_SESSION_5,
    key: 'IVORY_SESSION_5',
    name: '아이보리 세션 5',
    tag: '고급 5현 베이스',
    family: 'bass',
    kind: 'instrument',
    unlock: 3,
    cost: 1900000,
    price: 2600000,
    color: '#d8cbaa'
  },
  {
    id: ProductId.EMERALD_MASTER,
    key: 'EMERALD_MASTER',
    name: '에메랄드 마스터',
    tag: '최고급 일렉 기타',
    family: 'electric',
    kind: 'instrument',
    unlock: 4,
    cost: 2800000,
    price: 3800000,
    color: '#34755b'
  },
  {
    id: ProductId.CHARCOAL_MASTER_5,
    key: 'CHARCOAL_MASTER_5',
    name: '차콜 마스터 5',
    tag: '최고급 헤드리스 5현 베이스',
    family: 'bass',
    kind: 'instrument',
    unlock: 4,
    cost: 3200000,
    price: 4300000,
    color: '#47434d'
  },
  {
    id: ProductId.VIOLET_LIMITED,
    key: 'VIOLET_LIMITED',
    name: '바이올렛 리미티드',
    tag: '명품 일렉 기타',
    family: 'electric',
    kind: 'instrument',
    unlock: 5,
    cost: 4400000,
    price: 5900000,
    color: '#8866a5'
  },
  {
    id: ProductId.MIDNIGHT_LIMITED_5,
    key: 'MIDNIGHT_LIMITED_5',
    name: '미드나잇 리미티드 5',
    tag: '명품 5현 베이스',
    family: 'bass',
    kind: 'instrument',
    unlock: 5,
    cost: 5200000,
    price: 6900000,
    color: '#304b76'
  },
  {
    id: ProductId.AURORA_CHORUS,
    key: 'AURORA_CHORUS',
    name: '오로라 코러스',
    tag: '고급 이펙터 · 풍성한 울림',
    family: 'effect',
    kind: 'effect',
    unlock: 4,
    cost: 240000,
    price: 350000,
    color: '#a390b8'
  },
  {
    id: ProductId.DEEP_SPACE_REVERB,
    key: 'DEEP_SPACE_REVERB',
    name: '딥 스페이스 리버브',
    tag: '고급 이펙터 · 깊은 잔향',
    family: 'effect',
    kind: 'effect',
    unlock: 4,
    cost: 300000,
    price: 430000,
    color: '#435b8b'
  }
);
products.push(
  {
    id: ProductId.CLOVER_ST,
    key: 'CLOVER_ST',
    name: '클로버 V',
    tag: '미션 특별 일반급 V형 기타',
    family: 'electric',
    kind: 'instrument',
    unlock: 1,
    mission: 's2-core',
    cost: 480000,
    price: 690000,
    color: '#84bda6'
  },
  {
    id: ProductId.EMBER_SESSION_5,
    key: 'EMBER_SESSION_5',
    name: '앰버 세션 5',
    tag: '미션 특별 고급 베이스',
    family: 'bass',
    kind: 'instrument',
    unlock: 3,
    mission: 's4-core',
    cost: 2000000,
    price: 2750000,
    color: '#c38b42'
  },
  {
    id: ProductId.PEARL_LIMITED,
    key: 'PEARL_LIMITED',
    name: '펄 리미티드',
    tag: '미션 특별 명품 기타',
    family: 'electric',
    kind: 'instrument',
    unlock: 5,
    mission: 's6-core',
    cost: 4700000,
    price: 6200000,
    color: '#dbcea8'
  }
);
products.push(
 { id: ProductId.WALNUT_PARLOR, key: 'WALNUT_PARLOR', name: '월넛 팔러', tag: '일반급 어쿠스틱 · 하나의 첫 무대', family: 'acoustic', kind: 'instrument', unlock: 1, story: 'hana', cost: 400000, price: 590000, color: '#6e432e' },
 { id: ProductId.DAWN_CUTAWAY, key: 'DAWN_CUTAWAY', name: '새벽빛 컷어웨이', tag: '전문급 어쿠스틱 · 컷어웨이 바디', family: 'acoustic', kind: 'instrument', unlock: 2, cost: 780000, price: 1100000, color: '#d7b37b' }
);
types.push(
 {id:6,key:'DRUM_DISPLAY',name:'전자드럼 진열대',cost:800000,icon:'🥁',w:180,h:160},
 {id:7,key:'DRUM_DEMO',name:'전자드럼 시연 공간',cost:1200000,icon:'🥁',w:240,h:185},
 {id:8,key:'CATALOG',name:'거래처 카탈로그',cost:300000,icon:'▤',w:80,h:110},
 {id:9,key:'RUG',name:'빈티지 러그',cost:120000,icon:'▧',w:120,h:60},
 {id:10,key:'POSTER',name:'공연 포스터 보드',cost:200000,icon:'♫',w:100,h:130},
 {id:11,key:'WORKBENCH',name:'커스텀 제작대',cost:2000000,icon:'⚒',w:100,h:100},
 {id:12,key:'CUSTOM_DISPLAY',name:'특별 전시대',cost:1200000,icon:'◇',w:100,h:100},
 {id:13,key:'VIP_SEAT',name:'VIP 시연석',cost:800000,icon:'♫',w:100,h:100},
 {id:14,key:'VIP_DESK',name:'상담 테이블',cost:1000000,icon:'▣',w:100,h:100}
);
products.push({id:26,key:'ELECTRONIC_DRUMS',name:'리듬 메쉬 전자드럼',tag:'화이트 메쉬 전자드럼 세트',family:'drums',kind:'instrument',unlock:5,mission:'s6-sales',cost:4000000,price:5500000,color:'#464e49',icon:'🥁'});
products.push(
 {id:27,key:'CEDAR_GRAND',name:'시더 그랜드 어쿠스틱',tag:'최전문급 어쿠스틱 · 시더 그랜드',family:'acoustic',kind:'instrument',unlock:4,cost:2600000,price:3600000,color:'#bb8950'},
 {id:28,key:'MOONLIGHT_ACOUSTIC',name:'문라이트 어쿠스틱',tag:'명품 어쿠스틱 · 자개와 달 장식',family:'acoustic',kind:'instrument',unlock:5,cost:4800000,price:6500000,color:'#253e60'}
);
types.push({id:15,key:'VIP_DISPLAY',name:'최고급·명품 진열대',cost:1200000,icon:'◇',w:200,h:140},{id:16,key:'REST_CHAIR',name:'휴식 의자',cost:120000,icon:'▱',w:80,h:100});
types[12].name='커스텀 전용 진열대';types[12].w=200;
products.forEach((p) => {
  p.tier = p.unlock;
  p.icon ??= p.kind === 'instrument' ? '🎸' : '▣';
});

for (const entries of [types, products])
  entries.forEach((entry, index) => {
    if (entry.id !== index) throw Error('Catalog IDs must keep their saved order: ' + entry.key);
  });


// SOURCE: data/customers
// Appearance indices are shared by image IDs, clothing and customer selection.
const names = ['지우', '민준', '서연', '하준', '수빈', '도윤', '유진', '지호', '은서', '시우'];

const colors = ['#b75a4d', '#527c9b', '#728a58', '#c79751', '#806389', '#477e75'];

const customerLooks = [
  {
    gender: 'male',
    skirt: false,
    cut: 0.685
  },
  {
    gender: 'female',
    skirt: true,
    cut: 0.855
  },
  {
    gender: 'male',
    skirt: false,
    cut: 0.685
  },
  {
    gender: 'female',
    skirt: false,
    cut: 0.66
  }
];

// One new permanent visitor identity per expansion; existing four remain available.
const CustomerProfiles = [
  {
    actor: 4,
    tier: 1,
    name: '밴드부원 도하',
    role: '학생 밴드부원',
    budget: 900000,
    browse: 3.5,
    play: 3,
    families: ['electric', 'bass'],
    quote: '동아리 합주에 쓸 악기를 찾고 있어요!',
    tryQuote: '다음 합주가 기대돼요!',
    color: '#475b7e'
  },
  {
    actor: 5,
    tier: 2,
    name: '인디 연주자 나래',
    role: '인디밴드 연주자',
    budget: 1650000,
    browse: 5,
    play: 4.5,
    families: ['electric', 'effect', 'acoustic'],
    quote: '우리 밴드만의 소리를 찾고 싶어요.',
    tryQuote: '이 톤, 다음 공연에 어울리겠어요.',
    color: '#9a5553'
  },
  {
    actor: 6,
    tier: 3,
    name: '세션 연주자 현우',
    role: '전문 세션 연주자',
    budget: 3000000,
    browse: 3,
    play: 5,
    families: ['bass', 'electric'],
    quote: '녹음에 쓸 안정적인 악기가 필요해요.',
    tryQuote: '음 하나씩 정확하게 들어볼게요.',
    color: '#627078'
  },
  {
    actor: 7,
    tier: 4,
    name: '수집가 선영',
    role: '악기 수집가',
    budget: 4800000,
    browse: 6,
    play: 4,
    families: ['electric', 'bass'],
    quote: '오래 간직할 특별한 한 대를 보러 왔어요.',
    tryQuote: '마감도 울림도 마음에 드네요.',
    color: '#aa885d'
  },
  {
    actor: 8,
    tier: 5,
    name: '뮤지션 루카',
    role: '유명 뮤지션',
    budget: 8000000,
    browse: 5,
    play: 6,
    families: ['electric', 'bass'],
    quote: '새 무대에 함께할 한정판이 있을까요?',
    tryQuote: '무대에서 이 소리를 들려주고 싶어요.',
    color: '#8b6caa'
  }
];
CustomerProfiles.push(
  {
    actor: 9,
    tier: 0,
    unlockStage: 0,
    mission: 's1-core',
    name: '입문자 하나',
    role: '새내기 기타 연주자',
    gender: 'female',
    budget: 650000,
    browse: 5,
    play: 4,
    families: ['acoustic', 'electric'],
    quote: '첫 합주를 준비하고 있어요!',
    tryQuote: '이제 조금씩 연주가 익숙해져요.',
    color: '#c98842'
  },
  {
    actor: 10,
    tier: 0,
    unlockStage: 2,
    mission: 's3-core',
    name: '페달 수집가 태오',
    role: '페달 수집가',
    gender: 'male',
    budget: 650000,
    browse: 5,
    play: 3,
    families: ['effect'],
    quote: '새 페달을 연결해 보고 싶어요.',
    tryQuote: '기타와 조합도 들어볼게요.',
    color: '#76a58b'
  },
  {
    actor: 11,
    tier: 4,
    unlockStage: 4,
    mission: 's5-core',
    name: '베이시스트 서진',
    role: '전문 베이시스트',
    gender: 'female',
    budget: 5300000,
    browse: 4,
    play: 5,
    families: ['bass', 'electric'],
    quote: '다음 무대의 베이스를 찾고 있어요.',
    tryQuote: '저음의 균형이 좋네요.',
    color: '#8d4851'
  }
);
CustomerProfiles.push({actor:12,tier:5,unlockStage:5,feature:'drums',name:'드러머 리온',role:'밴드 드러머',budget:6500000,browse:4,play:6,families:['drums'],quote:'연습할 전자드럼을 찾고 있어요.',tryQuote:'헤드폰으로 리듬을 들어볼게요.',color:'#bc893e'});
customerLooks.push(
  ...CustomerProfiles.map((p) => ({
    gender: p.gender ?? ([5, 7].includes(p.actor) ? 'female' : 'male'),
    skirt: false,
    role: p.role
  }))
);


// SOURCE: data/sprites
// Active original-resolution crop tables only.
const GoodsClips=[[814,468,392,408],[408,468,402,418],[2,468,402,420],[431,2,417,453],[852,2,415,453],[2,2,425,462]];
const RackClips=[[2,2,797,770],[2,776,786,753]];
const FurnitureClips={"1":[[2,518,512,512],[2,2,512,512]],"2":[[2,1550,512,512],[2,1034,512,512]],"3":[[2,2,512,512],[2,2,512,512]],"4":[[2,1034,512,512],[2,518,512,512]]};


// SOURCE: data/accessories-v370
const AccessoryClips = {"19": [[2, 2, 234, 243], [240, 2, 179, 200]], "20": [[423, 2, 131, 258], [558, 2, 122, 230]]};


// SOURCE: data/instruments-v340
const InstrumentArtV340=Object.freeze({"0":{"atlas":0,"clips":[[785,2,183,494],[813,508,192,485]]},"1":{"atlas":0,"clips":[[188,2,180,502],[2,508,184,491]]},"2":{"atlas":0,"clips":[[372,2,218,499],[388,508,227,486]]},"9":{"atlas":0,"clips":[[972,2,182,494],[190,508,194,487]]},"10":{"atlas":0,"clips":[[2,2,182,502],[619,508,190,486]]},"11":{"atlas":0,"clips":[[594,2,187,496],[1009,508,193,484]]},"12":{"atlas":1,"clips":[[609,2,191,511],[609,523,186,471]]},"13":{"atlas":1,"clips":[[804,2,222,507],[1030,2,230,481]]},"14":{"atlas":1,"clips":[[2,2,195,517],[2,523,192,481]]},"15":{"atlas":1,"clips":[[201,2,206,514],[198,523,204,478]]},"16":{"atlas":1,"clips":[[406,523,199,473],[989,523,199,438]]},"17":{"atlas":1,"clips":[[411,2,194,511],[799,523,186,471]]},"18":{"atlas":2,"clips":[[840,2,201,491],[843,505,200,473]]},"21":{"atlas":2,"clips":[[1045,2,214,490],[1047,505,221,470]]},"22":{"atlas":2,"clips":[[2,2,211,499],[231,505,214,479]]},"23":{"atlas":2,"clips":[[448,2,195,492],[643,505,196,476]]},"24":{"atlas":2,"clips":[[647,2,189,492],[449,505,190,477]]},"25":{"atlas":2,"clips":[[217,2,227,497],[2,505,225,480]]},"27":{"atlas":3,"clips":[[103,7,323,748],[593,8,325,747]]},"28":{"atlas":3,"clips":[[114,777,301,758],[602,777,301,758]]}});


// SOURCE: data/drums-v350
const DrumFixtureClips=[[[17, 188, 422, 255], [455, 28, 424, 422], [899, 30, 430, 416], [1340, 31, 426, 414]], [[17, 604, 421, 247], [455, 458, 425, 404], [898, 458, 431, 401], [1337, 442, 427, 428]]];
const DrumProductClips=[[35, 55, 852, 768], [887, 71, 863, 753]];


// SOURCE: data/people-v310
// Whole painted identities, lossless packed in v3.11. Stable actor IDs.
const NaturalWalkAtlasKeys=["assets/walk-everyday-a-v3120.webp","assets/walk-everyday-b-v3120.webp","assets/walk-regulars-a-v3120.webp","assets/walk-regulars-b-v3120.webp","assets/walk-story-a-v3120.webp","assets/walk-story-b-v3120.webp","assets/walk-special-a-v3120.webp","assets/walk-special-b-v3120.webp","assets/walk-team-v3120.webp","assets/walk-drummer-v3120.webp"];
const NaturalWalkFrames={"0":{"atlas":0,"rows":[[{"clip":[86.276,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[278.774,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[470.694,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[662.874,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[854.881,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[1047.072,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[1238.944,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[1431.114,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3}],[{"clip":[85.85,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[278.72,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[470.613,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[662.536,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[855.06,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1047.097,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1238.693,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1430.451,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3}],[{"clip":[82.638,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[275.478,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[467.275,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[659.476,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[852.057,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[1044.6,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[1236.752,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[1428.802,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3}]]},"1":{"atlas":0,"rows":[[{"clip":[77.869,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[270.203,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[462.352,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[654.56,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[847.32,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[1039.519,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[1231.174,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[1423.896,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3}],[{"clip":[78.819,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[271.528,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[463.112,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[655.291,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[847.752,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1039.812,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1231.952,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1424.26,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3}],[{"clip":[75.946,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[268.788,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[460.233,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[652.605,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[845.007,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[1037.081,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[1229.616,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[1421.493,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3}]]},"2":{"atlas":1,"rows":[[{"clip":[71.575,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[262.755,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[454.876,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[645.525,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[836.225,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[1027.356,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[1218.701,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[1410.162,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3}],[{"clip":[66.62,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[259.131,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[451.39,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[642.339,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[833.616,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1025.165,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1216.855,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1408.161,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3}],[{"clip":[63.701,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[255.338,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[447.726,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[640.37,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[831.441,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[1023.882,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[1215.951,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[1407.366,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3}]]},"3":{"atlas":1,"rows":[[{"clip":[64.61,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[257.024,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[448.949,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[639.458,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[832.641,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1024.089,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1215.474,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1407.087,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3}],[{"clip":[67.317,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[260.24,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[452.067,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[643.753,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[835.506,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1027.06,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1219.462,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1410.333,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3}],[{"clip":[65.535,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[257.871,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[449.174,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[640.894,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[833.216,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[1025.011,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[1216.929,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[1408.417,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3}]]},"4":{"atlas":2,"rows":[[{"clip":[38.906,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[166.692,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[292.036,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[417.343,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[543.403,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[669.712,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[796.307,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[921.485,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3}],[{"clip":[37.299,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[164.408,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[290.866,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[415.398,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[541.368,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[666.431,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[793.393,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[918.571,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3}],[{"clip":[36.711,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[162.807,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[289.373,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[415.456,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[542.17,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[667.504,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[795.153,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[921.897,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3}]]},"5":{"atlas":2,"rows":[[{"clip":[30.871,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[158.483,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[284.663,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[410.751,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[537.112,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[663.277,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[789.748,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[915.83,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3}],[{"clip":[33.52,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[161.036,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[286.492,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[412.534,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[539.175,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[664.536,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[791.134,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[917.098,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3}],[{"clip":[30.042,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[157.501,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[283.941,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[409.561,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[536.39,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[662.697,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[789.327,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[915.319,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3}]]},"6":{"atlas":3,"rows":[[{"clip":[112.691,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[287.101,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[464.06,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[640.292,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[814.841,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[990.803,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[1167.276,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[1344.213,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3}],[{"clip":[114.977,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[292.225,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[469.034,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[643.275,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[819.761,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[996.573,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[1172.48,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[1348.619,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3}],[{"clip":[110.621,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[289.256,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[464.481,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[640.462,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[817.304,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[993.768,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[1169.975,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[1345.974,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3}]]},"7":{"atlas":3,"rows":[[{"clip":[107.392,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[283.559,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[461.107,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[636.586,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[812.754,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[989.154,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1165.471,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1341.734,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3}],[{"clip":[108.966,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[286.269,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[463.275,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[638.879,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[813.844,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[991.458,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[1167.155,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[1342.888,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3}],[{"clip":[107.556,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[285.779,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[461.835,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[637.356,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[813.739,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[991.447,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1165.704,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1341.88,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3}]]},"8":{"atlas":4,"rows":[[{"clip":[50.21,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[178.208,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[306.542,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[434.243,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[562.101,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[690.826,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[818.934,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[434.243,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3}],[{"clip":[49.946,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[179.795,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[307.343,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[435.816,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[563.412,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[692.421,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[819.692,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[435.816,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3}],[{"clip":[49.513,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[178.311,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[306.324,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[433.77,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[561.223,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[690.391,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[818.588,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[433.77,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3}]]},"9":{"atlas":4,"rows":[[{"clip":[34.314,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[165.55,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[293.524,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[421.889,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[549.198,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[678.528,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[806.316,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[421.889,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3}],[{"clip":[46.08,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[176.002,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[304.581,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[432.814,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[560.351,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[688.997,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[817.333,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[432.814,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3}],[{"clip":[34.245,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[163.047,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[291.218,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[419.378,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[548.1,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[676.731,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[803.929,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[419.378,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3}]]},"10":{"atlas":5,"rows":[[{"clip":[80.585,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[272.815,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[465.008,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[656.796,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[848.905,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[1040.581,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[1233.395,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[1425.433,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3}],[{"clip":[82.2,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[274.851,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[466.86,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[659.22,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[851.184,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[1043.25,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[1235.207,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[1427.598,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3}],[{"clip":[72.207,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[264.24,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[456.489,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[648.949,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[840.89,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[1033.843,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[1225.655,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[1417.698,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3}]]},"11":{"atlas":5,"rows":[[{"clip":[73.66,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[266.296,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[458.709,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[650.865,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[843.272,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[1034.927,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[1227.329,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[1419.839,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3}],[{"clip":[76.376,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[269.498,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[461.529,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[653.724,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[845.609,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1037.8,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1230.481,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1423.23,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3}],[{"clip":[66.237,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[259.592,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[451.29,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[643.364,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[835.325,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[1027.606,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[1219.81,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[1411.928,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3}]]},"12":{"atlas":6,"rows":[[{"clip":[23.187,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[150.411,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[277.84,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[405.363,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[533.048,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[661.103,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[789.441,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[916.594,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3}],[{"clip":[18.575,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[147.544,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[275.407,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[403.123,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[530.643,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[658.754,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[787.03,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[915.444,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3}],[{"clip":[20.607,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[148.533,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[279.379,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[406.732,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[534.176,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[662.409,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[790.513,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[918.722,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3}]]},"13":{"atlas":6,"rows":[[{"clip":[24.281,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[151.732,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[280.426,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[408.418,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[536.26,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[664.548,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[792.828,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[921.272,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3}],[{"clip":[24.299,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[152.02,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[280.404,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[409.254,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[536.623,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[664.652,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[793.157,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[921.525,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3}],[{"clip":[20.418,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[147.863,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[276.189,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[404.053,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[532.562,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[660.635,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[789.686,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[917.285,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3}]]},"14":{"atlas":7,"rows":[[{"clip":[70.7,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[262.448,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[453.559,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[646.057,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[838.42,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[1029.931,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[1222.049,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[1413.659,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3}],[{"clip":[68.837,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[261.489,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[452.799,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[645.212,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[837.402,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[1029.513,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[1221.4,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[1413.358,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3}],[{"clip":[72.835,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[265.699,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[458.233,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[650.509,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[841.612,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1034.425,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1226.971,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1418.629,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3}]]},"15":{"atlas":7,"rows":[[{"clip":[70.778,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[263.599,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[455.188,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[647.876,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[839.556,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1031.952,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1223.832,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1415.998,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3}],[{"clip":[72.527,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[265.305,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[457.31,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[649.372,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[840.575,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[1033.144,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[1225.198,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[1417.019,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3}],[{"clip":[69.331,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[262.472,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[454.433,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[646.071,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[838.539,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1031.184,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1223.048,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1415.081,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3}]]},"17":{"atlas":8,"rows":[[{"clip":[47.419,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[228.385,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[409.201,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[590.068,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[771.016,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[952.46,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[1133.101,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[1314.024,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3}],[{"clip":[48.16,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[229.731,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[410.117,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[590.884,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[772.337,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[953.865,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[1134.482,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[1315.711,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3}],[{"clip":[45.18,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[227.548,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[408.835,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[589.535,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[770.687,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[952.316,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[1132.383,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[1314.833,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3}]]},"18":{"atlas":8,"rows":[[{"clip":[46.509,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[227.165,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[408.148,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[589.445,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[770.13,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[951.717,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[1132.742,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[1313.817,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3}],[{"clip":[47.945,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[229.518,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[410.423,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[590.795,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[772.058,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[953.519,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[1134.129,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[1315.291,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3}],[{"clip":[46.332,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[228.226,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[409.497,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[590.545,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[770.778,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[952.071,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[1133.595,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[1315.093,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3}]]},"21":{"atlas":9,"rows":[[{"clip":[108.945,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[354.226,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[599.903,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[843.804,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[1087.872,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[1332.046,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[1575.932,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[1821.994,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3}],[{"clip":[107.647,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[352.441,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[596.739,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[841.611,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[1087.011,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[1331.588,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[1575.308,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[1821.487,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3}],[{"clip":[100.063,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[345.404,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[589.117,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[834.327,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[1079.436,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[1324.341,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[1569.021,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[1814.323,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3}]]}};
const SpecialPeopleActors=Object.freeze({band:12,family:13,musician:14,child:15});


// SOURCE: data/team-v3100
// Complete isometric checkout poses. Column0 faces down-right, column1 faces up-right.
const CheckoutAtlasKey='assets/checkout-v3130.webp';
const checkoutAtlas=runtimeImage(CheckoutAtlasKey);
const CheckoutPoses={"16":[{"clip":[185,77,247,448],"anchor":0.5,"sourceHeight":442,"footMargin":3},{"clip":[587,77,246,446],"anchor":0.5,"sourceHeight":440,"footMargin":3}],"19":[{"clip":[188,546,255,437],"anchor":0.5,"sourceHeight":431,"footMargin":3},{"clip":[583,546,253,437],"anchor":0.5,"sourceHeight":431,"footMargin":3}],"20":[{"clip":[187,1002,248,477],"anchor":0.5,"sourceHeight":471,"footMargin":3},{"clip":[586,1005,256,474],"anchor":0.5,"sourceHeight":468,"footMargin":3}]};
const PeopleAtlasKeys=[...NaturalWalkAtlasKeys,CheckoutAtlasKey];
const PeopleFrames=Array.from({length:22},(_,actor)=>NaturalWalkFrames[actor]??{atlas:NaturalWalkAtlasKeys.length,rows:[[CheckoutPoses[actor][0]],[CheckoutPoses[actor][1]],[CheckoutPoses[actor][1]]]});
function checkoutSprite(actor,dir){const row=dir<2?0:1,part=CheckoutPoses[actor]?.[row];if(!part)return walkSprite(actor,dir,0,false);return {image:checkoutAtlas,...part,flip:dir===0||dir===3,actor,dir};}


// SOURCE: data/missions
// Stable mission IDs also identify permanent product and visitor unlocks.
const MissionDefinitions = window.GameBuild.missions;


// SOURCE: data/layout
// New shops start empty. Existing saved layouts are preserved.
const initialFurniture = [];


// SOURCE: systems/progression
// Shared gates are used by menus, transactions, customer demand and display choices.
function isInstrument(i) {
  return products[i]?.kind === 'instrument';
}
function productUnlocked(i, stage = S.stage) {
  return (
    Number.isInteger(i) &&
    !!products[i] &&
    products[i].unlock <= stage &&
    (!products[i].mission || S.claimedMissions.includes(products[i].mission)) &&
    (!products[i].story || S.hanaStory.phase === 'done')
  );
}
function productsAtStage(stage) {
  return products.map((p, i) => ({ p, i })).filter(({ p }) => p.unlock === stage && !p.mission && !p.story);
}


// SOURCE: systems/missions
// Each lane advances independently, retaining the released mission IDs and cumulative sales.
function missionLane(m){return m.reward.product!==undefined?'challenge':'growth';}
function laneMissions(lane='growth'){return MissionDefinitions.filter(m=>missionLane(m)===lane);}
function currentMission(lane='growth'){return laneMissions(lane).find(m=>!S.claimedMissions.includes(m.id))??null;}
function activeMission(lane='growth'){const m=currentMission(lane);return m&&m.stage<=S.stage?m:null;}
function missionPhase(lane='growth'){return activeMission(lane)?'active':currentMission(lane)?'waiting':'done';}
const FeatureNames = Object.freeze({
  cabinet: '소품장 4종 확장',
  rack2: '기타 진열대 2종 확장',
  staff: '직원 채용 해금',
  staff2: '직원 2번째 슬롯',
  drums: '전자드럼 판매·진열대 해금',
  drumDemo: '전자드럼 시연 공간 해금'
});
function missionGoalValue(goal) {
  if (goal.kind === 'family') return S.missionStats.sales.reduce((sum, n, i) => sum + (products[i].family === goal.family ? n : 0), 0);
  if (goal.kind === 'total') return S.totalSales;
  if (goal.kind === 'bestDay') return Math.max(S.missionStats.bestDay, S.sold);
  if (goal.kind === 'distinctInstruments')
    return S.missionStats.sales.filter((n, i) => n > 0 && isInstrument(i)).length;
  return goal.ids.reduce((n, i) => n + S.missionStats.sales[i], 0);
}
function missionStatus(m = currentMission()) {
  if (!m) return { ready: false, progress: 1, goals: [], locked: false };
  const goals = m.goals.map((g) => ({ ...g, value: missionGoalValue(g) }));
  return {
    ready: S.stage >= m.stage && goals.every((g) => g.value >= g.min),
    locked: S.stage < m.stage,
    goals,
    progress:
      goals.reduce((n, g) => n + Math.min(g.value, g.min), 0) / goals.reduce((n, g) => n + g.min, 0)
  };
}
function recordMissionSale(items) {
  for (const i of items) S.missionStats.sales[i]++;
  S.missionStats.bestDay = Math.max(S.missionStats.bestDay, S.sold);
}
function claimMission(id) {
  const m = MissionDefinitions.find(m=>m.id===id);
  if (!m || currentMission(missionLane(m))?.id !== id || !missionStatus(m).ready) return false;
  const keys=[...criticalAssetKeys({...S,claimedMissions:[...S.claimedMissions,m.id]}),...(m.reward.product!==undefined?productAssetKeys(m.reward.product):[]),...(m.reward.actor!==undefined?actorAssetKeys(m.reward.actor===12?21:m.reward.actor):[]),...(m.reward.feature==='drums'?['assets/drum-fixtures-v350.webp',...productAssetKeys(26)]:[])];
  if(!assetGate(keys,()=>claimMission(id)))return false;
  const alreadyUnlocked=m.reward.feature && featureUnlocked(m.reward.feature);
  S.claimedMissions.push(m.id);
  if(m.reward.feature && !alreadyUnlocked)queueFeatureNotice(m.reward.feature);
  if (m.reward.money) {
    S.money += m.reward.money;
    S.missionRevenue += m.reward.money;
    if (S.phase === 'settled' && S.settlement) {
      S.settlement.income += m.reward.money;
      S.settlement.net += m.reward.money;
    }
  }
  if (m.reward.actor !== undefined) S.pendingMissionGuests.push(m.reward.actor);
  gainReputation(m.reward.money ? 1 : 2, true);
  // This save contains the completion, grant and ledger together; reload cannot repeat it.
  save();
  renderPanel();
  ui();
  if (S.phase === 'settled') showSettlement();
  Sound.play('place');
  if(m.reward.feature && S.phase!=='settled')showUnlockNotice();
  toast(
    m.reward.money
      ? '미션 완료 · ' + money(m.reward.money)
      : m.reward.feature
        ? (alreadyUnlocked?'미션 완료 · 명성 +2 · ':'운영 해금 · ') + (m.reward.feature==='staff'?'재고 직원 운영 안내':FeatureNames[m.reward.feature]) + (['cabinet', 'rack2'].includes(m.reward.feature) ? '' : ' · 매장 메뉴에서 사용')
        : m.reward.product !== undefined
          ? '새 악기 해금 · ' + products[m.reward.product].name
          : '새 손님 해금 · ' + profileForActor(m.reward.actor).name
  );
  return true;
}
function productLockReason(i) {
  const p = products[i];
  if (p.story && S.hanaStory.phase !== 'done') return '하나의 단골 이야기 완료 + 매장 2단계';
  return p.mission && !S.claimedMissions.includes(p.mission)
    ? (MissionDefinitions.find(m=>m.id===p.mission)?.reward.product!==undefined?'특별 악기 도전 보상으로 해금':'운영 미션 보상으로 해금')
    : '매장 ' + (p.unlock + 1) + '단계 해금';
}



const DecorDefinitions = {
  2: {effect:'일렉·베이스 시연 후 구매 확률 +5%p',condition:'해당 악기 시연'},
  3: {effect:'계산 대기 인내 시간 +20%',condition:'매장 배치 · 마감 중 계산 대기'},
  8: {effect:'악기 매입가 2% 할인',condition:'매장에 배치'},
  9: {effect:'시연 후 구매 확률 +3%p',condition:'러그 위에 시연석 배치'},
  10:{effect:'밴드 추가 방문 확률 10%',condition:'특별 손님 일정이 없는 날'}
};
function hasDecor(t){return S.furniture.some(f=>f.t===t);}
function rugUnder(seat){return !!seat && seat.t===FurnitureId.DEMO_SEAT && S.furniture.some(f=>f.t===9&&f.x===seat.x&&f.y===seat.y);}
function purchaseCost(i){const p=products[i];return Math.round(p.cost*(p.kind==='instrument'&&hasDecor(8)?.98:1));}
function queuePatience(){return hasDecor(3)?36:30;}
function demoDecorBonus(p){
 const seat=S.furniture.find(f=>f.id===p.stationId);
 return (hasDecor(2)&&['electric','bass'].includes(products[p.product]?.family)?.05:0)+(rugUnder(seat)?.03:0);
}
function applyDemoDecor(p){
 if(p.state!=='try'||p.demoDecorApplied)return;
 p.demoDecorApplied=true;const bonus=demoDecorBonus(p);p.decorBonus=bonus;
 if(!p.intent && p.decorEligible!==false && bonus>0 && Math.random()<bonus/(1-(p.returning?.84:.72)))p.intent=true;
}
function scheduledSpecial(day=S.day){
 if(day<3)return null;const cycle=(day-3)%5;
 return cycle===0||cycle===2?['band','family','musician'][(Math.floor((day-3)/5)*2+(cycle===2?1:0))%3]:null;
}
function decorStatus(t,f=null){
 if(!hasDecor(t))return '미적용';
 if(t===2&&!S.furniture.some(f=>f.t===4))return '시연석 필요';
 if(t===9 && !(f?S.furniture.some(q=>q.t===4&&q.x===f.x&&q.y===f.y):S.furniture.some(rugUnder)))return '시연석 필요';
 if(t===10){if(S.day<3)return '3일차부터 적용';if(scheduledSpecial())return '오늘은 특별 손님 예정';}
 return '적용 중';
}
function decorDetails(t,f=null){const d=DecorDefinitions[t];if(!d)return '';const status=decorStatus(t,f);return `<dl class="decor-effects"><div><dt>효과</dt><dd>${d.effect}</dd></div><div><dt>조건</dt><dd>${d.condition}</dd></div><div><dt>적용 여부</dt><dd class="${status==='적용 중'?'effect-active':'effect-pending'}">${status==='적용 중'?'✓ ':''}${status}</dd></div></dl>`;}
const DecorSummaries={2:'일렉·베이스 시연 구매 확률 증가',3:'계산 대기 인내 시간 증가',8:'악기 매입가 할인',9:'러그 위 시연 구매 확률 증가',10:'밴드 손님 추가 방문 기회'};
function decorCard(t,i){return `<article class="item decor-card compact-furniture">${furnitureIcon(i)}<div class="item-info"><h3>${t.name}</h3><p>${DecorSummaries[i]}</p><strong>${money(t.cost)}</strong><div class="furniture-actions"><button data-build="${i}" ${S.phase!=='prepare'||!canBuyFurniture(i)?'disabled':''}>배치하기</button><button class="secondary" data-decor-detail="${i}">상세</button></div></div></article>`;}
function openDecorDetail(i){if(!DecorDefinitions[i])return;const el=$('decorDetailBody');el.innerHTML=`${furnitureIcon(i)}<h3>${types[i].name}</h3>${decorDetails(i)}<p>같은 장식 효과는 중복되지 않아요.</p>`;drawIcons();drawCatalogPictures();$('decorDetail').showModal();}
function furnitureCategory(t){return [0,5,6,12,15].includes(t)?'display':[1,4,7,11,13,14,16].includes(t)?'facility':'decor';}


// SOURCE: systems/operations
// Operations unlocked by missions or by expansion: cabinet slots, staff, showcase and daily ads.
let staffTimer = 0;
function featureUnlocked(name) {
  return (name === 'staff' && S.stage >= 1) || MissionDefinitions.some((m) => m.reward.feature === name && S.claimedMissions.includes(m.id));
}
function cabinetLimit() {
  return featureUnlocked('cabinet') ? 4 : 3;
}
function staffSlots() {
  return (featureUnlocked('staff') ? 1 : 0) + (featureUnlocked('staff2') ? 1 : 0);
}
function inventoryWage() { return (S.staffHired ? Config.staff.firstWage : 0) + Math.max(0,S.staffHired-1)*Config.staff.wage; }
function inventoryHireCost(index=S.staffHired) { return index===0 ? Config.staff.firstHireCost : Config.staff.hireCost; }
function inventoryDailyWage(index=S.staffHired) { return index===0 ? Config.staff.firstWage : Config.staff.wage; }
function staffWage(){return inventoryWage()+S.cashierHired*Config.staff.wage+(S.vip.hired?VIPStaff.wage:0);}
// Cash that must remain for the closing settlement (rent and wages), so automatic spending cannot
// push the shop below zero at the end of the day.
function settlementCushion(extraWage = 0) {
  return stageInfo().rent + staffWage() + extraWage;
}
function hireStaff() {
  if (S.phase !== 'prepare' || editing !== null || S.staffHired >= staffSlots()) return false;
  if (S.money < inventoryHireCost() + setupReserve(-1) + settlementCushion(inventoryDailyWage())) {
    toast('채용 비용이 부족해요');
    return false;
  }
  if(!assetGate(actorAssetKeys(17),hireStaff))return false;
  const wage=inventoryDailyWage(), cost=inventoryHireCost();
  S.money -= cost;
  S.expenses += cost;
  S.staffHired++;
  save();
  renderPanel();
  ui();
  Sound.play('place');
  toast('직원을 채용했어요 · 일급 ' + money(wage));
  return true;
}
function dismissStaff() {
  if (S.phase !== 'prepare' || editing !== null || S.staffHired < 1) return false;
  S.staffHired--;
  if (S.staffHired === 0) resetStaffAnimation();
  save();
  renderPanel();
  ui();
  toast('직원이 떠났어요. 채용 비용은 돌려받지 못해요');
  return true;
}
// Staff reorder displayed stock. The first hire covers entry products; the second reorders earlier
// and also reorders sold-out premium instruments through the normal next-day order.
function operatingReserve(){return settlementCushion()*10;}
function applyRecommendedStaffSettings(){
 S.staffPolicy.products=S.staffPolicy.products.map((r,i)=>({...r,at:delayedProduct(i)?1:3}));save();ui();
 if($('staffSettings').open)renderStaffSettings();if($('staffManagement').open)renderStaffManagement();
 toast('기본 상품 3개 · 예약 악기 1개 기준으로 맞췄어요. 수동 주문 수량은 유지돼요.');return true;
}
function staffReorderAt(i) { return S.staffPolicy.products[i].at ?? (delayedProduct(i)?1:3); }
function setStaffProduct(i, enabled, quantity, at = S.staffPolicy.products[i]?.at ?? null) {
  if (!Number.isInteger(i) || !products[i] || typeof enabled !== 'boolean' || !Number.isSafeInteger(quantity) || quantity < 1 || quantity > 999 || (at !== null && (!Number.isSafeInteger(at) || at < 0 || at > 99))) return false;
  S.staffPolicy.products[i] = { enabled, quantity, at };
  save();
  ui();
  return true;
}
function staffOrderPlan() {
  const level = Math.min(2, S.staffHired), plan = [];
  let cash = S.money;
  for (const i of displayedProductIds().map((i,index)=>({i,index})).sort((a,b)=>Number(S.stock[b.i]===0)-Number(S.stock[a.i]===0) || S.stock[a.i]-S.stock[b.i] || a.index-b.index).map(r=>r.i)) {
    const rule = S.staffPolicy.products[i];
    const quantity = rule.quantity, cost = purchaseCost(i) * quantity;
    let reason = '';
    if (!level) reason = '직원 채용 필요';
    else if (!S.staffPolicy.enabled || !rule.enabled) reason = '자동 주문 꺼짐';
    else if (incomingQuantity(i)>0) reason='입고 대기 중';
    else if (delayedProduct(i)) {
      if (level < 2) reason = '두 번째 직원 필요';
      else if (incomingQuantity(i) > 0) reason = '입고 대기 중';
      else if (S.stock[i] > staffReorderAt(i)) reason = '재고 충분';
    } else if (S.stock[i] > staffReorderAt(i)) reason = '재고 충분';
    const floor = operatingReserve()+setupReserve(-1);
    if (!reason && cash < cost + floor) reason = '10일 운영비 보호';
    if (!reason && incomingQuantity(i) + quantity > 1000000) reason = '입고 수량 한도';
    if (!reason && !['prepare', 'open'].includes(S.phase)) reason = '다음 영업 준비 때 주문';
    if (!reason) cash -= cost;
    plan.push({ i, quantity, cost, ready: !reason, reason: reason || (delayedProduct(i) ? '예약 주문 · '+(S.phase==='prepare'?'오늘 15시':'내일 오픈 전') : '자동 주문 · 즉시 입고') });
  }
  return plan;
}
function staffRestock() {
  if (!S.staffHired || !['prepare', 'open'].includes(S.phase) || $('staffSettings').open) return 0;
  let ordered = 0;
  for (const row of staffOrderPlan()) {
    if (row.ready && orderProduct(row.i, false, true, row.quantity)) ordered++;
  }
  return ordered;
}
// Compatibility hooks: showcase was retired in13, its prior claim now unlocks drums.
function showcaseUnlocked(){return false;}
function setShowcase(){return false;}
function showcaseWeight(){return 1;}
function drumsUnlocked(){return S.stage>=5&&featureUnlocked('drums');}
function furnitureUnlocked(t){if(t===11||t===12)return S.stage>=6;if([13,14,15].includes(t))return S.stage>=4;if(t===16)return true;return t===6?drumsUnlocked():t===7?drumsUnlocked()&&featureUnlocked('drumDemo'):true;}
function adUnlocked(){return false;}
function adCost(){return 0;}
function adMultiplier(){return 1;}
function bookAd(){return false;}

// Stable increasing furniture IDs preserve installation order across moving and rotation.
function checkoutStations() { return S.furniture.filter(f=>f.t===FurnitureId.CHECKOUT).sort((a,b)=>a.id-b.id); }
function cashierSlots() { return S.stage>=3 ? 2 : S.stage>=2 ? 1 : 0; }
function checkoutActor(f) {
  const i=checkoutStations().findIndex(q=>q.id===f.id);
  return i===0 ? 16 : i>0 && i<=S.cashierHired ? 18+i : null;
}
function activeCheckouts() { return checkoutStations().slice(0,1+S.cashierHired); }
function hireCashier() {
  if(S.phase!=='prepare' || editing!==null || S.cashierHired>=cashierSlots() || S.cashierHired>=checkoutStations().length-1) return false;
  if(S.money<Config.staff.hireCost+setupReserve(-1)+settlementCushion(Config.staff.wage)) { toast('채용 비용과 마감 비용을 남겨주세요'); return false; }
  if(!assetGate(actorAssetKeys(19+S.cashierHired),hireCashier))return false;
  S.money-=Config.staff.hireCost;S.expenses+=Config.staff.hireCost;S.cashierHired++;
  sceneCacheKey=''; save();renderPanel();ui();Sound.play('place');toast('계산 직원을 채용했어요 · 추가 계산대 자동 배정');return true;
}
function dismissCashier() {
  if(S.phase!=='prepare' || editing!==null || !S.cashierHired)return false;
  S.cashierHired--;sceneCacheKey='';save();renderPanel();ui();toast('계산 직원이 떠났어요. 채용 비용은 돌려받지 못해요');return true;
}

function checkoutStatus(f){
  if(checkoutActor(f)===null)return '계산 직원 없음';
  const who=checkoutActor(f)===16?'사장':'계산 직원 '+(checkoutActor(f)-18);
  if(checkoutConflicts().includes(f.id))return who+' · 앞 손님 칸 겹침';
  if(!near(f,ENTRY))return who+' · 통로 막힘';
  if(!['open','closing'].includes(S.phase))return who+' · 영업 준비';
  return who+' · '+(people.some(p=>p.state==='checkout'&&p.stationId===f.id)?'계산 중':'손님 대기');
}


// SOURCE: systems/reputation
// Reputation affects only additional arrivals; ordinary shop traffic always remains.
function gainReputation(amount, mission = false) {
  if (S.reputationDaily.day !== S.day) S.reputationDaily = { day: S.day, gained: 0 };
  const allowed = mission
    ? amount
    : Math.min(amount, Math.max(0, Config.reputation.dailyCap - S.reputationDaily.gained));
  const earned = Math.max(0, Math.min(allowed, 100 - S.rep));
  S.rep = Math.round((S.rep + earned) * 10) / 10;
  if (!mission)
    S.reputationDaily.gained = Math.round((S.reputationDaily.gained + earned) * 10) / 10;
  return earned;
}
function visitorMultiplier() {
  return 1 + (Math.max(0, Math.min(100, S.rep)) / 100) * Config.reputation.maxVisitorBonus;
}


// SOURCE: systems/orders
// Paid orders, pending deliveries and expansion reserve advice.
function orderQuantity(i) {
  return isInstrument(i) && products[i].unlock > 0 ? 1 : Config.restockBatch;
}
function delayedProduct(i) {
  return isInstrument(i) && products[i].unlock > 0;
}
// Rush orders pay a fee for same-day stock; only products with next-day delivery qualify.
function expressCost(i) {
  return Math.round(purchaseCost(i) * (1 + Config.expressFee));
}
function incomingQuantity(i) {
  return S.pendingOrders.filter((o) => o.product === i).reduce((n, o) => n + o.quantity, 0);
}
function orderDue(){return S.phase==='prepare'?{dueDay:S.day,dueTime:60}:{dueDay:S.day+1,dueTime:0};}
function deliveryText(i){
 return S.pendingOrders.filter(o=>o.product===i).sort((a,b)=>a.dueDay-b.dueDay||(a.dueTime??0)-(b.dueTime??0)).map(o=>{
 const when=o.dueDay<S.day?'입고 대기':o.dueDay===S.day?((o.dueTime??0)===60?'오늘 15시':'오픈 전'):(o.dueDay===S.day+1?'내일':o.dueDay+'일차')+((o.dueTime??0)===60?' 15시':' 오픈 전');
 return when+' '+o.quantity+'개';}).join(' · ');
}
function deliverOrders(clock=S.time) {
  const isDue=o=>o.dueDay<S.day||(o.dueDay===S.day&&(o.dueTime??0)<=clock);
  const arrived = S.pendingOrders.filter(isDue);
  if (!arrived.length) return 0;
  S.pendingOrders = S.pendingOrders.filter(o=>!isDue(o));
  let count = 0;
  for (const o of arrived) {
    S.stock[o.product] += o.quantity;
    queueStaffRestock(o.product);
    count += o.quantity;
  }
  log('예약한 악기 ' + count + '개가 입고됐어요.');
  toast('오늘 입고 · 악기 ' + count + '개');
  return count;
}
function expansionReserve(stage = S.stage + 1) {
  const next = Stages[stage];
  if (!next) return 0;
  const premium = productsAtStage(stage)
    .filter((o) => o.p.kind === 'instrument')
    .map((o) => purchaseCost(o.i));
  return (premium.length ? Math.min(...premium) : 0) + 660000 + next.rent * 3;
}
function closingShortfall(cost){return S.phase==='settled'?0:Math.max(0,settlementCushion()-(S.money-cost));}
function closingWarning(cost){const n=closingShortfall(cost);return n?'구매 후 마감 비용 '+money(n)+' 부족':'';}
const purchaseQuantities = {};
function purchaseQuantity(i) { return purchaseQuantities[i] ?? 1; }
function setPurchaseQuantity(i, value) {
  const n = Number(value);
  if (!Number.isInteger(i) || !products[i] || !Number.isSafeInteger(n) || n < 1 || n > 999) return false;
  purchaseQuantities[i] = n;
  return true;
}
function quantityControl(i) {
  const n = purchaseQuantity(i);
  return `<div class="quantity-control touch-quantity" role="group" aria-label="${products[i].name} 구매 수량"><button type="button" data-quantity="${i}" data-delta="-1" aria-label="${products[i].name} 수량 줄이기" ${n <= 1 ? 'disabled' : ''}>−</button><input type="number" inputmode="numeric" min="1" max="999" step="1" data-quantity-input="${i}" aria-label="${products[i].name} 구매 수량" value="${n}"><button type="button" data-quantity="${i}" data-delta="1" aria-label="${products[i].name} 수량 늘리기" ${n >= 999 ? 'disabled' : ''}>＋</button></div>`;
}
// Update text/buttons in place so leaving an input never cancels the order tap.
function syncQuantityInput(input, commit = false) {
  const i = +input.dataset.quantityInput, n = Number(input.value);
  if(tab==='stock'&&document.activeElement===input)selectedProduct=i;
  const valid = input.value !== '' && Number.isSafeInteger(n) && n >= 1 && n <= 999;
  if (valid) setPurchaseQuantity(i, n);
  if (!valid && commit) { input.value = purchaseQuantity(i); toast('구매 수량은 1~999개로 입력해주세요'); }
  const row = input.closest('[data-product-row]');
  if (!row) return;
  const quantity = purchaseQuantity(i), total = purchaseCost(i) * quantity;
  const signature=[quantity,valid,commit,S.money,setupReserve(-1),staffWage(),S.phase].join('|');
  if(row.dataset.quantityState===signature){if(tab==='stock'&&document.activeElement===input)refreshStockFooter();return;}row.dataset.quantityState=signature;
  const amount = row.querySelector('.order-total strong');
  if (amount) amount.textContent = money(total);
  const warning=row.querySelector('.closing-warning');if(warning){warning.textContent=closingWarning(total);warning.hidden=!warning.textContent;}
  const short = row.querySelector('.order-short');
  const shortage = Math.max(0, total + setupReserve(-1) - S.money);
  if (short) { short.hidden = !shortage; short.textContent = money(shortage) + ' 부족 · 필수 가구 비용 포함'; }
  for (const b of row.querySelectorAll('[data-quantity]')) b.disabled = Number(b.dataset.delta) < 0 ? quantity <= 1 : quantity >= 999;
  for (const b of row.querySelectorAll('[data-order], [data-picker-order]')) {
    b.disabled = (!valid && !commit) || !!shortage;
    if (b.dataset.pickerOrder !== undefined) b.textContent = quantity + '개 주문 · ' + money(total);
  }
  for (const b of row.querySelectorAll('[data-express], [data-picker-express]')) {
    const fee = expressCost(i) * quantity;
    b.disabled = (!valid && !commit) || S.money < fee + setupReserve(-1);
    if (b.dataset.express !== undefined) b.innerHTML = '긴급주문 <span>' + compactMoney(fee) + '</span>';
    else b.textContent = '긴급주문 · ' + money(fee);
  }
  if(tab==='stock'&&document.activeElement===input)refreshStockFooter();
}
function orderProduct(i, express = false, staff = false, quantity = orderQuantity(i)) {
  if (!Number.isInteger(i) || !products[i] || !Number.isSafeInteger(quantity) || quantity < 1 || quantity > 999) return false;
  if (!productUnlocked(i)) {
    toast('매장을 확장하면 주문할 수 있어요');
    return false;
  }
  if (express && !delayedProduct(i)) return false;
  if(staff&&(!S.staffHired||!S.staffPolicy.enabled||!S.staffPolicy.products[i].enabled||incomingQuantity(i)>0||S.stock[i]>staffReorderAt(i)||delayedProduct(i)&&S.staffHired<2))return false;
  const p = products[i],
    n = quantity,
    cost = (express ? expressCost(i) : purchaseCost(i)) * n;
  if (incomingQuantity(i) + n > 1000000) return false;
  if (S.money < cost + setupReserve(-1) + (staff?operatingReserve():0)) {
    if(staff){toast('10일분 운영비를 확보한 뒤 주문해요.');return false;}
    toast('주문 자금이 ' + money(Math.ceil(cost + setupReserve(-1) - S.money)) + ' 부족해요 · 필수 가구 비용 포함');
    return false;
  }
  S.money -= cost;
  S.expenses += cost;
  if (delayedProduct(i) && !express) {
    const due=orderDue(),existing=S.pendingOrders.find(o=>o.product===i&&o.dueDay===due.dueDay&&(o.dueTime??0)===due.dueTime);
    if(existing)existing.quantity+=n;else S.pendingOrders.push({product:i,quantity:n,...due});
  } else { S.stock[i] += n; queueStaffRestock(i); }
  if (!staff){purchaseQuantities[i] = 1;if(S.tutorial.active)S.tutorial.purchased=true;}
  Sound.play('stock');
  save();
  if(staff)refreshLivePanel();else renderPanel();
  ui();
  toast(
    (staff ? '직원 주문 · ' : '') +
      p.name +
      ' ' +
      n +
      '개 · ' +
      (express
        ? '긴급주문 입고 · 수수료 ' + money(cost - purchaseCost(i) * n)
        : delayedProduct(i)
          ? deliveryText(i)
          : '즉시 입고') + (!staff && closingShortfall(0)?' · 마감 비용 '+money(closingShortfall(0))+' 부족':'')
  );
  return true;
}


// SOURCE: systems/display
// Display assignments share the catalog unlock gates.
function rackLimit() { return featureUnlocked('rack2') ? 2 : 1; }
function rackProducts(f){return f.t===6&&drumsUnlocked()?[26]:[f.p,f.p2].filter(i=>Number.isInteger(i)&&!isVIPProduct(i));}
function setRackProduct(id, i, slot = 0) {
 const f = S.furniture.find((f) => f.id === id);
 if (!f || f.t !== FurnitureId.GUITAR_RACK || !Number.isInteger(slot) || slot < 0 || slot >= rackLimit() || (i !== null && (!isInstrument(i) || products[i].family==='drums' || !productUnlocked(i)))) return false;
 const field = slot === 0 ? 'p' : 'p2', other = slot === 0 ? 'p2' : 'p';
 if (i !== null && f[other] === i) return false;
 if(i!==null&&isVIPProduct(i))return false;
 if(i!==null&&!assetGate(productAssetKeys(i),()=>{if(setRackProduct(id,i,slot))renderPanel();}))return false;
 f[field] = i;
 save(); ui(); return true;
}
function setShelfItems(id, items) {
  const f = S.furniture.find((f) => f.id === id);
  if (
    !f ||
    f.t !== FurnitureId.ACCESSORY_CABINET ||
    !Array.isArray(items) ||
    items.length > cabinetLimit() ||
    new Set(items).size !== items.length ||
    items.some((i) => !productUnlocked(i) || isInstrument(i))
  )
    return false;
  if(!assetGate(items.flatMap(productAssetKeys),()=>{if(setShelfItems(id,items))renderPanel();}))return false;
  f.items = [...items];
  save();
  ui();
  return true;
}


// SOURCE: systems/customer-demand
// Customer profiles and weighted product demand.
function profileForActor(actor) {
  return (
    CustomerProfiles.find((p) => p.actor === actor) ?? {
      actor,
      tier: 0,
      budget: 600000,
      browse: 4,
      play: 3,
      families: ['electric', 'bass', 'acoustic', 'effect', 'strings'],
      role: '동네 손님',
      quote: '구경해 볼까?',
      tryQuote: '소리를 들어볼까?'
    }
  );
}
function availableActors(stage = S.stage) {
  return [
    0,
    1,
    2,
    3,
    ...CustomerProfiles.filter(
      (p) =>
        (p.unlockStage ?? p.tier) <= stage && (!p.mission || S.claimedMissions.includes(p.mission)) && (!p.feature || featureUnlocked(p.feature))
    ).map((p) => p.actor)
  ];
}
function customerCanAfford(p,i,customId=null){const price=customId?S.custom.items.find(item=>item.id===customId)?.price:products[i]?.price;return productUnlocked(i)&&Number.isFinite(price)&&basketValue(p)+((customId?(p.customBasket??[]).includes(customId):(p.basket??[]).includes(i))?0:price)<=(p.budget??600000);}

function addonCompatible(instrument, addon) {
 const p=products[instrument],a=products[addon];
 if(!p||!a||p.family==='drums')return false;
 if(a.kind==='strings')return ({electric:6,acoustic:7,bass:8})[p.family]===addon;
 return a.kind==='effect';
}
function chooseOffer(list, profile) {
  const affordable = list.filter((o) => offerPrice(o) <= profile.budget);
  if (!affordable.length)
    return { choice: list[Math.floor(Math.random() * list.length)], affordable: false };
  const scores = affordable.map(
    (o) =>
      (products[o.i].tier === profile.tier
        ? 9
        : Math.max(0.5, 2 - Math.abs(products[o.i].tier - profile.tier) * 0.4)) *
      (profile.families.includes(products[o.i].family) ? 2 : 1)
  );
  let roll = Math.random() * scores.reduce((a, b) => a + b, 0);
  for (let j = 0; j < affordable.length; j++) {
    roll -= scores[j];
    if (roll <= 0) return { choice: affordable[j], affordable: true };
  }
  return { choice: affordable.at(-1), affordable: true };
}


// SOURCE: ui/unlocks
// Expansion announcement and catalog presentation.
function unlockSummary(stage,silhouette=false){return (stage===4?'<div class="note"><b>VIP 영업·추가 출입구</b><p>VIP구역을 드래그로 정하고 전용 시설과 직원을 준비하세요. 출입구는 최대 2곳까지 배치할 수 있어요.</p></div>':stage===6?'<div class="note"><b>커스텀 제작</b><p>제작대마다 1개씩, 옵션에 따라 1~3영업일 제작해요. 최고급 이상은 VIP실에 진열하세요.</p></div>':'')+`<div class="unlock-products">${productsAtStage(stage).map(({p,i})=>`<div><div class="unlock-art" data-product-art="${i}"></div><b>${p.name}</b></div>`).join('')}</div>`;}


const FeatureGuides = {
 delivery:['예약 악기 입고','준비 중 주문하면 오늘 15시, 영업 중 주문하면 내일 오픈 전 입고돼요. 긴급주문은 즉시 입고예요.'],
 staff:['자동 주문 직원','2단계부터 채용비 50만 원·일급 3만 원. 입문 악기·이펙터·기타줄을 자동 주문해요. 관리 → 직원 관리에서 채용하세요.'],
 staff2:['두 번째 자동 주문 직원','일반급 이상 악기도 예약 주문해요. 준비 중 주문은 오늘 15시, 영업 중 주문은 내일 오픈 전 입고예요.'],
 cabinet:['소품장 4칸','소품 진열장에서 최대 4종을 선택할 수 있어요.'],
 rack2:['기타 진열대 2칸','진열대의 악기 선택창에서 1번·2번 칸을 골라 진열하세요.'],
 drums:['전자드럼 판매','전자드럼을 주문하고 전용 진열대를 설치하세요. 밴드 드러머 리온이 찾아와요.'],
 drumDemo:['전자드럼 시연 공간','1×1칸의 시연 공간을 설치하면 드러머 리온이 앉아 연주해요. 시연은 판매 재고를 사용하지 않아요.'],
 cashier1:['계산 직원 1명','추가 계산대를 설치하고 계산 직원을 채용하세요. 사장과 동시에 계산해요.'],
 cashier2:['계산 직원 2명','추가 계산대 2개와 계산 직원 2명으로 총 3곳에서 계산할 수 있어요.']
};
function queueFeatureNotice(key) {
 if(!FeatureGuides[key])return;
 for(const field of ['featureNotices','newFeatures']) if(!S[field].includes(key))S[field].push(key);
}
function featureCards(keys) {
 return keys.map(key=>`<div class="feature-guide"><b>${FeatureGuides[key][0]}</b><p>${FeatureGuides[key][1]}</p><button data-feature-go="${key}">바로 가기</button></div>`).join('');
}
function featureBadge(){return '';}

function visitFeature(key) {
 if(!FeatureGuides[key])return;
 S.newFeatures=S.newFeatures.filter(k=>k!==key);
 closeUnlockNotice();
 if(key==='delivery'){setTab('stock');toast(FeatureGuides.delivery[1]);save();return;}
 if(['staff','staff2','cashier1','cashier2'].includes(key)){setTab('report');openStaffManagement(key.startsWith('cashier')?'cashier':'inventory');toast(FeatureGuides[key][1]);save();return;}
 if(['cabinet','rack2'].includes(key)){setTab('furniture');const f=S.furniture.find(f=>f.t===(key==='cabinet'?FurnitureId.ACCESSORY_CABINET:FurnitureId.GUITAR_RACK));if(f){selected=f.id;renderPanel();}}else setTab('shop');
 const selector = ['cabinet','rack2'].includes(key) ? '.furniture-shop' : key.startsWith('cashier') ? '#cashierOperations' : key==='ad' ? '#adOperations' : ['drums','drumDemo'].includes(key) ? '#drumOperations' : '#orderOperations';
 document.querySelector(selector)?.scrollIntoView?.({block:'center',behavior:'smooth'});
 toast(FeatureGuides[key][1]);save();
}
function showUnlockNotice(){if(titleActive||(S.expansionNotice===null&&!S.featureNotices.length))return;$('management').close();const stage=S.expansionNotice;const rows=[];if(stage!==null){const names=productsAtStage(stage).map(({p})=>p.name);if(names.length)rows.push(['새 악기',names.join(' · '),'instruments']);if(stage===4)rows.push(['VIP 영업','VIP구역·전용 직원과 시설을 준비하세요.','vips'],['두 번째 출입구','상점에서 출입구를 추가하고 위치를 정하세요.','decor']);if(stage===6)rows.push(['커스텀 제작','제작대마다 1개씩, 옵션에 따라 1~3영업일 제작해요.','craft']);}
 for(const key of S.featureNotices){const desc={staff:['자동 주문 직원','직원탭에서 채용하고 주문 품목을 정하세요.','employees'],staff2:['추가 주문 직원','더 높은 등급까지 자동 주문할 수 있어요.','employees'],cashier1:['계산 직원','계산대와 직원을 추가할 수 있어요.','employees'],cashier2:['계산 직원 추가','계산대를 최대 3곳까지 운영할 수 있어요.','employees'],delivery:['예약 입고','준비 중 주문은 오늘 15시, 영업 중 주문은 다음 날 입고돼요.','instruments'],drums:['전자드럼','악기탭에서 주문하고 전용 진열대에 진열하세요.','instruments'],drumDemo:['전자드럼 시연','상점에서 시연 공간을 설치하세요.','decor'],cabinet:['소품장 확장','소품을 최대 4종까지 진열할 수 있어요.','decor'],rack2:['진열대 확장','진열대마다 악기를 2종까지 고를 수 있어요.','decor']}[key];if(desc)rows.push(desc);}
 $('unlockHeading').textContent=stage===null?'새 기능 안내':`매장 ${stage+1}단계`;$('unlockContent').innerHTML=rows.map(([name,desc,go])=>`<article class="unlock-brief"><div><b>${name}</b><p>${desc}</p></div><button data-unlock-go="${go}">바로 가기</button></article>`).join('')||'<p>매장이 넓어졌어요.</p>';if(!$('unlockModal').open)$('unlockModal').showModal();}

function closeUnlockNotice() { $('unlockModal').close();S.expansionNotice=null;S.featureNotices=[];save(); }
$('unlockContent').addEventListener('click',e=>{const b=e.target.closest('button');if(b?.dataset.featureGo)visitFeature(b.dataset.featureGo);});


// SOURCE: systems/relationships
// Visitor relationships are records of real visits/purchases, with no automatic rewards.
function customerIdentity(actor, special = null) {
  const profile = profileForActor(actor);
  return {
    key: special ? 'special-' + special : 'actor-' + actor,
    actor,
    name: special
      ? { band: '밴드 멤버 준', family: '하린이와 보호자', musician: '거리 음악가 솔' }[special]
      : (profile.name ?? ['지우', '서연', '도윤', '유진'][actor % 4])
  };
}
function customerRecord(p) {
  if (p.companion) return null;
  const identity = customerIdentity(p.actor, p.special);
  p.customerKey ??= identity.key;
  return (S.customerBook[p.customerKey] ??= {
    key: p.customerKey,
    actor: p.actor,
    name: p.name ?? identity.name,
    visits: 0,
    purchases: 0,
    completedRequests: 0,
    spent: 0,
    satisfaction: 0,
    regular: false,
    affinityDay: S.day,
    affinityGain: 0,
    lastStockoutDay: 0,
    stockoutStreak: 0,
    lastVisitDay: 0,
    favoriteFamily:
      p.actor < 4
        ? ['electric', 'bass', 'acoustic', 'effect'][p.actor]
        : profileForActor(p.actor).families[0],
    preferredTier: profileForActor(p.actor).tier
  });
}
function recordVisit(p) {
  const r = customerRecord(p);
  if (!r || p.visitRecorded) return r;
  r.visits++;
  r.lastVisitDay = S.day;
  p.visitRecorded = true;
  p.name = r.name;
  visitHanaStory(p);
  return r;
}
function isRegular(r) {
  return r?.regular === true;
}
function recordPurchase(p, value, items) {
  if (p.relationshipRecorded || !value) return;
  const r = recordVisit(p);
  if (!r) return;
  const wasRegular = isRegular(r);
  const preferred = items.some(
    (i) => products[i].family === r.favoriteFamily && products[i].tier === r.preferredTier
  );
  if (r.affinityDay !== S.day) {
    r.affinityDay = S.day;
    r.affinityGain = 0;
  }
  const gain = Math.min(
    Math.max(0,Config.affinity.dailyCap - r.affinityGain),
    (items.some(delayedProduct) ? Config.affinity.premiumPurchase : Config.affinity.purchase) +
      (preferred ? Config.affinity.preference : 0)
  );
  r.purchases++;
  r.spent += value;
  r.satisfaction = Math.min(100, r.satisfaction + gain);
  r.affinityGain += gain;
  r.stockoutStreak = 0;
  r.lastStockoutDay = 0;
  r.regular = wasRegular || r.satisfaction >= Config.affinity.regular;
  p.relationshipRecorded = true;
  if (!wasRegular && r.regular) {
    log(r.name + '님이 단골이 되었어요 ♡');
    toast(r.name + '님의 감사 편지가 도착했어요 ♡ · 손님 메뉴에서 확인');
  }
}
function recordDeparture(p) {
  if (p.companion || p.relationshipRecorded) return;
  const r = recordVisit(p);
  if (!r) return;
  if (p.stockout && r.lastStockoutDay !== S.day) {
    r.stockoutStreak = r.lastStockoutDay === S.day - 1 ? r.stockoutStreak + 1 : 1;
    r.lastStockoutDay = S.day;
    if (r.stockoutStreak >= 2)
      r.satisfaction = Math.max(0, r.satisfaction - Config.affinity.stockoutPenalty);
  }
  p.relationshipRecorded = true;
}
function regularCustomers() {
  return Object.values(S.customerBook)
    .filter(isRegular)
    .sort((a, b) => b.purchases - a.purchases);
}
function returningCandidates() {
  return Object.values(S.customerBook).filter(
    (r) =>
      r.purchases > 0 &&
      r.lastVisitDay < S.day &&
      availableActors().includes(r.actor) &&
      !r.key.startsWith('special-') &&
      !people.some((p) => p.customerKey === r.key)
  );
}
function returningVisitChance() {
  const eligible = returningCandidates();
  return eligible.length
    ? 0.2 + (0.3 * eligible.reduce((n, r) => n + r.satisfaction, 0)) / eligible.length / 100
    : 0;
}
function returningCustomer() {
  const eligible = returningCandidates();
  let roll =
    Math.random() *
    eligible.reduce((n, r) => n + 1 + r.satisfaction / 20 + (isRegular(r) ? 2 : 0), 0);
  for (const r of eligible) {
    roll -= 1 + r.satisfaction / 20 + (isRegular(r) ? 2 : 0);
    if (roll <= 0) return r;
  }
  return eligible.at(-1) ?? null;
}
function rememberRequest(){return null;}
function requestStatus(q) {
  if (q.fulfilled) return { label: '구매로 연결됨', kind: 'done' };
  if (!displayedProductIds().includes(q.product)) return { label: '진열 필요', kind: 'missing' };
  if (S.stock[q.product] <= 0) return { label: '재고 필요', kind: 'missing' };
  return { label: '판매 준비됨', kind: 'ready' };
}
function desiredProduct(profile) {
  const candidates = products
    .map((p, i) => ({ p, i }))
    .filter(
      ({ p, i }) =>
        productUnlocked(i) && p.price <= profile.budget && profile.families.includes(p.family)
    );
  const ideal = candidates.filter(({ p }) => p.tier === profile.tier);
  const list = ideal.length ? ideal : candidates;
  return list.length ? list[Math.floor(Math.random() * list.length)].i : null;
}


// SOURCE: systems/hana-story
// Hana's plot starts and finishes on real visits; delivery consumes owned inventory once.
function visitHanaStory(p) {
 if(p.actor!==9||p.special||((S.customerBook['actor-9']?.satisfaction??0)<50&&S.hanaStory.phase!=='delivered'))return;
 const story = S.hanaStory;
 if (story.phase === 'locked') {
  story.phase = 'offered'; story.startedDay = S.day;
  p.bubble = '첫 공연 준비를 함께 해주실래요?'; p.bubbleUntil = S.time + 6;
  log('하나의 이야기 · 첫 작은 무대'); toast('하나의 이야기 시작 · 손님 → 이야기'); save();
 } else if (story.phase === 'delivered' && S.day > story.deliveredDay) {
  story.phase = 'done'; story.completedDay = S.day;
  S.customerBook['actor-9'].preferredTier = 1;
  S.customerBook['actor-9'].favoriteFamily = 'acoustic';
  p.bubble = '첫 무대를 잘 마쳤어요! 고마워요.'; p.bubbleUntil = S.time + 6;
  log('하나의 첫 공연 완료 · 월넛 팔러 거래처 소개');
  toast(S.stage >= 1 ? '월넛 팔러 구매 해금 · 하나의 첫 무대' : '하나의 이야기 완료 · 매장 2단계에서 월넛 팔러 주문 가능');
  save(); renderPanel();
 }
}
function acceptHanaStory() {
 if (S.hanaStory.phase !== 'offered') return false;
 S.hanaStory.phase = 'accepted'; save(); renderPanel(); return true;
}
function deliverHanaStory() {
 if (S.hanaStory.phase !== 'accepted' || S.phase !== 'prepare' || S.stock[2] < 1 || S.stock[7] < 1) return false;
 S.stock[2]--; S.stock[7]--;
 S.hanaStory.phase = 'delivered'; S.hanaStory.deliveredDay = S.day;
 // It is a gift for the first show: not a sale, no duplicate money/mission/affinity credit.
 log('하나에게 공연 준비 전달 · 모닝 어쿠스틱 1대 + 어쿠스틱 기타줄 1개');
 save(); renderPanel(); ui(); toast('공연 준비를 전달했어요 · 다음 날 이후 하나가 방문하면 후일담'); return true;
}
function hanaStoryPanel() {
 const q = S.hanaStory, r = S.customerBook['actor-9'];
 let body = '';
 if (q.phase === 'locked') body = `<p>시작 조건: 호감도 50 · 다음 방문</p><small>현재 호감도 ${r?.satisfaction ?? 0} / 100</small>`;
 if (q.phase === 'offered') body = '<p>“첫 작은 공연을 앞두고 있어요. 가게에서 고른 악기로 무대에 서고 싶어요.”</p><p>모닝 어쿠스틱 1대와 어쿠스틱 기타줄 1개를 선물로 준비해요. 수락해도 재고가 바로 차감되지는 않아요.</p><button class="primary" data-story="accept">공연 준비 돕기</button>';
 if (q.phase === 'accepted') body = `<p>모닝 어쿠스틱 1대 (${S.stock[2]}대 보유)<br>어쿠스틱 기타줄 1개 (${S.stock[7]}개 보유)</p><p>재고 소모 · 판매 실적 제외</p><button class="primary" data-story="deliver" ${S.phase !== 'prepare' || S.stock[2] < 1 || S.stock[7] < 1 ? 'disabled' : ''}>재고를 사용해 전달하기</button><small>영업 준비 중 전달 가능</small>`;
 if (q.phase === 'delivered') body = '<p>공연 준비를 마쳤어요. 다음 날 이후 하나가 다시 찾아오면 공연 이야기를 들을 수 있어요.</p>';
 if (q.phase === 'done') body = `<p>“그날의 첫 무대를 오래 기억할 거예요.”</p><b>${S.stage >= 1 ? '일반급 어쿠스틱 · 월넛 팔러 주문 가능' : '매장 2단계에서 월넛 팔러 주문 가능'}</b>`;
 return `<section class="hana-story"><span class="eyebrow">REGULAR CUSTOMER STORY</span><h3>하나의 첫 작은 무대</h3>${body}<p class="story-reward">완료 보상: 월넛 팔러 구매 해금 · 매장 2단계 필요</p></section>`;
}

let hanaRenderKey = '';
function refreshHanaStory(){if(!$('missionDialog').open||missionView!=='story')return;const el=$('hanaStoryPanel');if(!el)return;const key=JSON.stringify([S.hanaStory,S.stage,S.phase,S.stock[2],S.stock[7],S.customerBook['actor-9']?.satisfaction]);if(key===hanaRenderKey)return;hanaRenderKey=key;el.innerHTML=hanaStoryPanel();}



// SOURCE: core/persistence
// Browser storage can be limited for local HTML files. JSON export/import is portable.
function saveRules() {
  return {
    width: Config.width,
    height: Config.height,
    typeCount: types.length,
    productCount: products.length,
    actorCount: customerLooks.length,
    missionDefinitions: MissionDefinitions,
    stageSizes: Stages.map((s) => [s.w, s.h]),
    validateExpansion: validateExpansionSave,migrateVIP: migrateVIPSave,migrateCraft:migrateCraft27,
    instrumentIds: products.map((p, i) => (p.kind === 'instrument' ? i : -1)).filter((i) => i >= 0)
  };
}
function save() {
  if (titleActive || pendingNewGame) return false;
  try {
    if (storageReadFailed) throw new Error('Existing save needs recovery');
    S.guests = people.map((p) => ({ ...p, path: p.path.map((q) => ({ ...q })) }));
    localStorage.setItem(KEY, SaveStore.encode(S));
    storageOK = true;
    $('saveState').textContent = '자동 저장됨';
    return true;
  } catch {
    storageOK = false;
    $('saveState').textContent = '파일로 저장 가능';
    return false;
  }
}
function exportSaveData() {
  S.guests = people.map((p) => ({ ...p, path: p.path.map((q) => ({ ...q })) }));
  return SaveStore.file(S, Config.version);
}
function downloadSave() {
  $('backupHelp').textContent='내려받기가 막혀도 저장 내용을 복사해 보관할 수 있어요. 다른 주소로 옮기기 전에 백업해주세요.';
  $('backupHeading').textContent='저장 백업 · 복원';$('backupText').setAttribute('aria-label','저장 데이터');$('backupRestore').textContent='붙여넣은 저장 불러오기';$('backupText').placeholder='';$('backupDownload').hidden=false;$('backupCopy').hidden=false;
  $('backupText').value = exportSaveData();
  $('backupStatus').textContent = '파일 내려받기 또는 공유를 선택하세요. 실패하면 저장 내용을 복사해 보관해주세요.';
  if (!$('saveBackup').open) $('saveBackup').showModal();
  $('backupShare').hidden = !(typeof navigator !== 'undefined' && typeof navigator.share === 'function' && typeof File !== 'undefined');
}
function backupStatus(message) { $('backupStatus').textContent = message; }
function downloadBackupFile() {
  let url, a;
  try {
    const file = new Blob([$('backupText').value], {type:'application/json;charset=utf-8'});
    url = URL.createObjectURL(file); a = document.createElement('a');
    a.href = url; a.download = 'little-tone-save.json'; document.body.append(a); a.click();
    backupStatus('다운로드를 요청했어요. 브라우저의 다운로드 목록을 확인하세요. 파일이 없으면 공유 또는 복사를 사용해주세요.');
  } catch { backupStatus('이 환경에서 다운로드를 요청하지 못했어요. 공유 또는 저장 내용 복사를 사용해주세요.'); }
  finally { a?.remove?.(); if (url) setTimeout(() => URL.revokeObjectURL(url),60000); }
}
async function shareBackupFile() {
  try {
    if (typeof File === 'undefined' || typeof navigator === 'undefined' || !navigator.share) throw new Error('Unsupported');
    const file = new File([$('backupText').value],'little-tone-save.json',{type:'application/json'});
    if (navigator.canShare && !navigator.canShare({files:[file]})) throw new Error('Unsupported');
    await navigator.share({files:[file],title:'작은 선율 저장 백업'});
    backupStatus('공유 창 처리가 끝났어요. 선택한 위치에 저장했는지 확인해주세요.');
  } catch (e) { backupStatus(e?.name === 'AbortError' ? '공유를 취소했어요. 저장 내용은 그대로예요.' : '파일 공유를 지원하지 않거나 공유하지 못했어요. 저장 내용을 복사해주세요.'); }
}
async function copyBackupText() {
  try {
    if (typeof navigator === 'undefined' || !navigator.clipboard?.writeText) throw new Error('Unsupported');
    await navigator.clipboard.writeText($('backupText').value);
    backupStatus('저장 내용을 복사했어요. 메모나 문서에 붙여넣어 보관해주세요.');
  } catch {
    $('backupText').focus?.(); $('backupText').select?.();
    backupStatus('자동 복사를 사용할 수 없어 저장 내용을 선택했어요. 길게 눌러 복사해주세요.');
  }
}
$('closeBackup').onclick = () => $('saveBackup').close();
$('backupDownload').onclick = downloadBackupFile;
$('backupShare').onclick = shareBackupFile;
$('backupCopy').onclick = copyBackupText;
$('backupRestore').onclick = () => requestSaveImport($('backupText').value);
function importSaveData(raw, preserveBackup = true) {
  try {
    const restored = SaveStore.decode(raw, fresh(), saveRules());
    if(!assetGate(criticalAssetKeys(restored),()=>importSaveData(raw,preserveBackup)))return false;
    try {
      if(preserveBackup)localStorage.setItem(KEY + ':backup', SaveStore.encode(S));
    } catch {}
    try{localStorage.setItem(KEY,SaveStore.encode(restored));}catch(e){if(!preserveBackup)throw e;}
    S = restored;
    S.furniture = S.furniture.map(Furniture.migrate);
    resizeShop();
    syncEntrance();
    people = S.guests ?? [];
    repairGuestRoutes();
    floaters = [];
    spawnTime = 1;
    doorOpen = 0;
    resetInteractionState();
    Sound.settings = S.audio;
    Sound.apply();
    storageReadFailed = false;
    sceneCacheKey = '';
    titleActive = false;
    pendingNewGame = false;
    $('titleScreen').hidden = true;
    document.querySelector('.app').inert = false;
    paused = false;
    $('pause').textContent = 'Ⅱ';
    save();
    ui();
    renderPanel();
    restoreDayDialog();
    $('saveBackup').close();
    toast(storageOK?'저장한 가게를 불러왔어요.':'가게를 불러왔어요 · 자동 저장을 사용할 수 없어 파일 백업이 필요해요.');
    return true;
  } catch {
    toast('저장 파일을 확인해주세요. 현재 가게는 유지돼요.');
    return false;
  }
}

function openSaveCode(){
 $('backupHelp').textContent='복사해 둔 저장 코드를 아래 입력칸에 붙여넣어 가게를 이어가세요.';
 $('backupHeading').textContent='저장 코드 불러오기';$('backupText').value='';$('backupText').placeholder='보관한 저장 데이터 전체를 여기에 붙여넣으세요.';
 $('backupStatus').textContent='저장 데이터 전체를 붙여넣고 아래 불러오기를 누르세요. 올바르지 않은 코드는 현재 가게에 반영되지 않아요.';
 $('backupText').setAttribute('aria-label','붙여넣을 저장 코드');$('backupRestore').textContent='입력한 코드 불러오기';
 for(const id of ['backupDownload','backupShare','backupCopy'])$(id).hidden=true;
 if(!$('saveBackup').open)$('saveBackup').showModal();$('backupText').focus?.();
}


// v3.18 atelier / interior. Included inside the game closure before state initialization.
const Atelier = {
 walls:{original:{name:'기존 초록 벽',colors:['#668477','#789185']},cream:{name:'크림',colors:['#ddd0ae','#e7dbbf']},sage:{name:'세이지 그린',colors:['#698373','#819986']},beige:{name:'따뜻한 베이지',colors:['#bc9f7c','#ceb493']}},
 floors:{original:{name:'기존 원목',tint:null},oak:{name:'밝은 참나무',tint:'#ead3a5'},walnut:{name:'짙은 월넛',tint:'#a98255'},herringbone:{name:'헤링본 원목',tint:'#cab388'}},
 decorations:{poster:'공연 포스터',record:'레코드 액자',guitar:'벽걸이 기타',logo:'가게 로고',clock:'빈티지 벽시계',lamp:'따뜻한 벽등'},
 profiles:[{name:'서린',role:'투어 기타리스트',family:'electric',color:'wine',wood:'ash',pickup:'vintage',budget:12000000,quote:'무대에서 오래 함께할 기타를 찾고 있어요.'},{name:'태오',role:'세션 베이시스트',family:'bass',color:'forest',wood:'walnut',pickup:'active',budget:16000000,quote:'연주하기 편한 베이스를 찾고 있어요.'},{name:'은채',role:'빈티지 컬렉터',family:null,color:'ivory',wood:'mahogany',pickup:'vintage',budget:20000000,quote:'이 가게만의 특별한 한 대를 보고 싶어요.'}],
 upgrades:[0,3000000,8000000],
 options:{color:[['wine','와인 레드',0,0,'#9c4148'],['forest','포레스트',0,0,'#356b5a'],['ivory','아이보리',0,0,'#e7ddba'],['blue','딥 블루',70000,1,'#345e82'],['violet','바이올렛',140000,2,'#795689']],wood:[['alder','앨더',0,0],['ash','애시',90000,0],['walnut','월넛',180000,1],['mahogany','마호가니',280000,2]],pickup:[['standard','기본 픽업',0,0],['vintage','빈티지 픽업',120000,0],['noiseless','노이즈리스',230000,1],['active','액티브 픽업',330000,2]],hardware:[['chrome','크롬',0,0],['black','블랙',80000,1],['gold','골드',180000,2]],finish:[['satin','새틴',0,0],['gloss','글로스',80000,1],['relic','빈티지 에이징',170000,2]]}
};
function expansionDefaults(){return {design:{wall:'original',floor:'original',vipFloor:'walnut',vipWall:'sage',wallItems:[]},vip:{zone:null,hired:false,dailyDay:0,dailyCount:0,nextVisitAt:10,normalSales:0,normalRevenue:0,visitedDay:0,nextProfile:0,lastProfile:-1,guest:null,visits:0,sales:0,revenue:0,lastResult:''},custom:{benchLevel:1,nextId:1,items:[],crafted:0,sold:0,totalCost:0,totalRevenue:0}};}
function inVIP(p,z=S.vip.zone){return !!z&&p.x>=z.x-.5&&p.x<z.x+z.w-.5&&p.y>=z.y-.5&&p.y<z.y+z.h-.5;}
function vipDoor(z=S.vip.zone){if(!z)return null;const a=z.doorAt;return z.doorSide==='left'?{inside:{x:z.x,y:z.y+a},outside:{x:z.x-1,y:z.y+a},axis:'x',boundary:z.x-.5}:z.doorSide==='right'?{inside:{x:z.x+z.w-1,y:z.y+a},outside:{x:z.x+z.w,y:z.y+a},axis:'x',boundary:z.x+z.w-.5}:z.doorSide==='top'?{inside:{x:z.x+a,y:z.y},outside:{x:z.x+a,y:z.y-1},axis:'y',boundary:z.y-.5}:{inside:{x:z.x+a,y:z.y+z.h-1},outside:{x:z.x+a,y:z.y+z.h},axis:'y',boundary:z.y+z.h-.5};}
let vipRouting=false,vipZoneDraft=null,vipEditor=false,workshopDraft=null,workshopAngle=0;
function vipEdgeLegal(a,b){const z=S.vip.zone;if(!z||inVIP(a,z)===inVIP(b,z))return true;const d=vipDoor(z),v=b[d.axis]-a[d.axis];if(Math.abs(v)<1e-9)return false;const t=(d.boundary-a[d.axis])/v,other=d.axis==='x'?'y':'x';return t>=0&&t<=1&&Math.abs(a[other]+(b[other]-a[other])*t-d.inside[other])<=.44;}
function vipPath(a,b,fs=S.furniture){const old=vipRouting;vipRouting=true;try{return path(a,b,fs)}finally{vipRouting=old}}
function vipNear(f,a=ENTRY,fs=S.furniture){const target=Furniture.front(f),route=vipPath(a,target,fs);return route?{target,path:route}:null;}
function zoneError(z,fs=S.furniture){if(!z||!['x','y','w','h','doorAt'].every(k=>Number.isInteger(z[k]))||z.w<4||z.h<4||z.w>10||z.h>10)return '문과 필수 시설을 위해 4~10칸으로 지정해주세요';
 if(z.x<0||z.y<0||z.x+z.w>N||z.y+z.h>M)return '매장 안에 지정해주세요';if(!['left','right','top','bottom'].includes(z.doorSide)||z.doorAt<1||z.doorAt>(['left','right'].includes(z.doorSide)?z.h:z.w)-2)return '문은 모서리에서 한 칸 띄워주세요';const d=vipDoor(z);if(d.outside.x<0||d.outside.y<0||d.outside.x>=N||d.outside.y>=M)return '문 바깥에 통로가 필요해요';if(entrancePoints().some(e=>inVIP(e,z)))return '매장 출입구를 구역 밖에 두세요';if(fs.some(f=>Furniture.cells(f).some(p=>inVIP(p,z))&&[0,1,4,5,6,7,11].includes(f.t)))return '일반 시설과 제작대는 구역 밖에 두세요';if(fs.some(f=>[13,14,15].includes(f.t)&&!wideVIP(f,z)))return 'VIP 시설을 모두 포함해주세요';for(const i of S.custom.items){const f=fs.find(f=>f.id===i.displayId);if(f&&!customDisplayAllowed(i,f,z))return '커스텀 판매 구역을 유지해주세요';}if([d.inside,d.outside].some(p=>fs.some(f=>Furniture.blocks(f,p.x,p.y))))return '문 양쪽 한 칸을 비워주세요';const prior=S.vip.zone;S.vip.zone=z;routeCache.clear();let ok;try{ok=!!vipPath(ENTRY,d.inside,fs)&&valid(fs,true);}finally{S.vip.zone=prior;routeCache.clear();}return ok?'':'매장 시설과 출입구 통로를 확보해주세요';}

function setVIPZone(z){if(S.phase!=='prepare'||S.stage<4||editing!==null||S.vip.guest)return false;const error=zoneError(z);if(error){toast(error);return false;}S.vip.zone={...z};S.vip.lastResult='전시대·시연석·상담대와 직원을 준비하세요';expansionChanged();return true;}

function removeVIPZone(){if(S.phase!=='prepare'||S.vip.guest)return false;S.vip.zone=null;expansionChanged();return true;}
function vipRequirements(){const key=JSON.stringify([S.stage,N,M,ENTRY,S.vip.zone,S.vip.hired,S.furniture.map(f=>[f.id,f.t,f.x,f.y,f.dir,f.legacyCompact])]);if(key!==vipReadinessKey){vipReadinessValue=cachedVIPRequirements();vipReadinessKey=key;}return [...vipReadinessValue];}
function vipReady(){return vipRequirements().length===0;}
function expansionChanged(){sceneCacheKey='';routeCache.clear();clearFurnitureBodyCache();atelierSprites.clear();renderDirty=true;save();ui();if($('management').open)renderPanel();}
function atelierFacilityError(f){const z=S.vip.zone;if(z){const d=vipDoor(z);if([d.inside,d.outside].some(p=>Furniture.blocks(f,p.x,p.y)))return 'VIP 문 양쪽 통로를 비워주세요';if(inVIP(f)&&[0,1,4,5,6,7,11].includes(f.t))return '일반 판매 시설과 제작대는 VIP 구역 밖에 놓아주세요';}if(f.t===12){const item=S.custom.items.find(i=>i.displayId===f.id);if(item&&!customDisplayAllowed(item,f))return '커스텀 등급에 맞는 판매 구역을 선택해주세요';if(Furniture.cells(f).some(p=>inVIP(p))&&!wideVIP(f))return '진열대 전체를 같은 구역에 놓아주세요';}if([13,14,15].includes(f.t)&&(!Furniture.cells(f).every(p=>inVIP(p))||!inVIP(Furniture.front(f))))return 'VIP 구역 안에 놓고 앞 통로를 확보해주세요';return '';}
function customDefaults(){return {color:'wine',wood:'alder',pickup:'standard',hardware:'chrome',finish:'satin'};}
function customBases(level=benchLevel()){return products.map((p,i)=>({p,i})).filter(({p,i})=>(['electric','bass','acoustic'].includes(p.family))&&!p.mission&&productUnlocked(i)&&(level===3||p.tier<=(level===2?1:0))).map(r=>r.i);}

function customOptionAvailable(option,level=benchLevel()){return option[3]<level&&S.stage>=6;}

function customQuote(draft,level=benchLevel()){return customBases(level).includes(draft?.base)?quoteCustomAt(draft,level):null;}

function finishCustom(draft=workshopDraft,id=workshopBenchId){
 const f=currentWorkbench(id),c=ensureCraftState();if(!f||S.stage<6||S.phase!=='prepare'||editing!==null||benchJob(f.id)||c.items.length+c.jobs.length>=12)return false;const level=benchLevel(f.id),options=normalizedCustomOptions(draft?.base,draft?.options,level);if(Object.entries(draft?.options??{}).some(([k,value])=>options[k]!==value))return false;draft={...draft,options};const q=customQuote(draft,level);if(!q)return false;
 if(!assetGate(productAssetKeys(draft.base),()=>finishCustom(draft,f.id)))return false;if(S.stock[draft.base]<1||S.money<q.craftCost)return false;
 const job={id:c.nextId++,benchId:f.id,base:draft.base,options:{...draft.options},cost:q.cost,price:q.price,day:S.day,madeLevel:level,duration:q.duration,remaining:q.duration,lastDay:S.day-1,readyDay:null};S.stock[draft.base]--;S.money-=q.craftCost;S.expenses+=q.craftCost;c.totalCost+=q.cost;c.jobs.push(job);delete c.ready[f.id];noteStockChange(draft.base);expansionChanged();if($('workshopDialog').open)renderWorkshop();toast('제작 시작 · D-'+q.duration);return job;
}

function upgradeWorkbench(id=workshopBenchId){const f=currentWorkbench(id);if(!f||S.stage<6||S.phase!=='prepare'||editing!==null||benchJob(f.id))return false;const c=ensureCraftState(),level=benchLevel(f.id),cost=Atelier.upgrades[level];if(level>=3||S.money<cost)return false;S.money-=cost;S.expenses+=cost;c.levels[f.id]=level+1;c.benchLevel=Math.max(c.benchLevel,level+1);expansionChanged();if($('workshopDialog').open)renderWorkshop();return true;}

function setCustomDisplay(itemId,displayId,slot=0){if(S.phase!=='prepare'||editing!==null)return false;const item=S.custom.items.find(i=>i.id===itemId);if(!item)return false;if(displayId!==null){const f=S.furniture.find(f=>f.id===displayId);if(!customDisplayAllowed(item,f)||slot!==0)return false;for(const other of S.custom.items)if(other!==item&&other.displayId===displayId){other.displayId=null;other.displaySlot=null;}}item.displayId=displayId;item.displaySlot=displayId===null?null:0;expansionChanged();return true;}

function displayedCustoms(){return S.custom.items.filter(i=>isVIPCustom(i)&&i.displayId!==null&&S.furniture.some(f=>f.id===i.displayId&&customDisplayAllowed(i,f)&&vipNear(f)));}

function vipMatch(profile,item){const family=products[item.base].family;return (profile.family===null||profile.family===family)&&item.price<=profile.budget;}
function spawnVIP(){
 if(S.phase!=='open'||S.time<10||S.time>110||S.vip.guest||!S.vip.hired||!S.vip.zone)return false;if(S.vip.dailyDay!==S.day){S.vip.dailyDay=S.day;S.vip.dailyCount=0;S.vip.nextVisitAt=10;}
 if(S.vip.dailyCount>=vipDailyLimit()||S.time<S.vip.nextVisitAt)return false;const offers=vipOffers();if(!offers.length||!vipReady())return false;
 const order=Array.from({length:Atelier.profiles.length},(_,n)=>(S.vip.nextProfile+n)%Atelier.profiles.length),index=order.find(i=>offers.some(o=>vipMatch(Atelier.profiles[i],o)));if(index===undefined)return false;
 const profile=Atelier.profiles[index],d=vipDoor(),route=vipPath(ENTRY,d.inside);if(!route)return false;
 S.vip.guest={profile:index,x:ENTRY.x,y:ENTRY.y,path:route,state:'enter',timer:0,gait:0,facing:5,velocity:0,walkSpeed:2.8,bought:false};S.vip.nextProfile=(index+1)%Atelier.profiles.length;S.vip.lastProfile=index;S.vip.visitedDay=S.day;S.vip.dailyCount++;S.vip.visits++;S.visitors++;S.vip.lastResult=profile.name+' 방문 중';toast('VIP '+profile.name+'님 방문');save();renderDirty=true;return true;
}
function vipGo(g,f,state){const n=vipNear(f,g);if(!n)return false;g.path=n.path;g.stationId=f.id;g.state=state;g.timer=0;g.lookTarget={x:f.x,y:f.y};return true;}
function vipLeave(g,result){delete g.seatPhase;delete g.seated;g.state='leave';g.path=[...(vipPath(g,nearestEntrance(g,true))??[]),exitFor(nearestEntrance(g,true))];g.timer=0;S.vip.lastResult=result;save();}
function updateVIP(dt){
 if(S.phase==='open')spawnVIP();const g=S.vip.guest;if(!g)return;const profile=Atelier.profiles[g.profile];
 if(g.state==='try'){
  const seat=S.furniture.find(f=>f.id===g.stationId&&f.t===13);if(!seat){vipLeave(g,'시연석 확인 필요');return;}
  if(advanceSeating(g,seat,dt,5)){Sound.play('try',products[g.product]?.family==='bass'?1:products[g.product]?.family==='acoustic'?2:0);const target=vipDeskFor(g),desk=target&&S.furniture.find(f=>f.id===target.deskId);if(!desk||!vipGo(g,desk,'consult'))vipLeave(g,'상담 테이블과 직원 자리 통로 확인 필요');else g.consultDeskId=desk.id;}return;
 }
 if(g.state==='consult'){const target=vipDeskFor(g);if(!target){vipLeave(g,'상담 테이블과 직원 자리 통로 확인 필요');return;}if(g.stationId!==target.deskId){g.consultDeskId=target.deskId;if(!vipGo(g,S.furniture.find(f=>f.id===target.deskId),'consult'))vipLeave(g,'상담 테이블 통로 확인 필요');return;}}
 Motion.advance(g,dt);if(g.path.length)return;g.timer+=dt;
 if(g.state==='enter'&&g.timer>1){const item=vipOffers().filter(i=>vipMatch(profile,i)).sort((a,b)=>vipPreference(profile,b)-vipPreference(profile,a)||a.price-b.price)[0];if(!item){vipLeave(g,'취향과 예산에 맞는 악기 없음');return;}g.kind=item.kind;g.itemId=item.kind==='custom'?item.id:undefined;g.product=item.base;g.displayId=item.displayId;g.displaySlot=item.displaySlot;const desk=vipDeskFor(g);g.consultDeskId=desk?.deskId;if(!vipGo(g,S.furniture.find(f=>f.id===item.displayId),'browse'))vipLeave(g,'전시대 통로 확인 필요');}
 else if(g.state==='browse'&&g.timer>3){const f=S.furniture.find(f=>f.t===13&&wideVIP(f)&&vipNear(f,g));if(!f||!vipGo(g,f,'try'))vipLeave(g,'시연석 통로 확인 필요');else{g.seatPhase='approach';g.seated=false;}}
 else if(g.state==='consult'&&g.timer>3){const employee=vipEmployee(),desk=vipDeskFor(g);if(!S.vip.hired||!employee||!desk||employee.path.length||Math.hypot(employee.x-desk.staff.x,employee.y-desk.staff.y)>.05){if(g.timer>25)vipLeave(g,'직원 응대 동선을 확인해주세요');return;}const item=selectedVIPOffer(g);if(item&&vipMatch(profile,item)&&!g.bought){if(item.kind==='custom'){S.custom.items=S.custom.items.filter(i=>i.id!==item.id);S.custom.sold++;S.custom.vipSold++;S.custom.totalRevenue+=item.price;S.custom.vipRevenue+=item.price;}else{const f=S.furniture.find(f=>f.id===item.displayId);f.vipSlots[item.displaySlot]=null;S.vip.normalSales++;S.vip.normalRevenue+=item.price;noteStockChange(item.base);}S.money+=item.price;S.revenue+=item.price;S.totalRevenue+=item.price;S.sold++;S.totalSales++;S.vip.sales++;S.vip.revenue+=item.price;recordMissionSale([item.base]);g.bought=true;gainReputation(.3);clearFurnitureBodyCache();atelierSprites.clear();Sound.play('sale');vipLeave(g,profile.name+' · '+products[item.base].name+' 구매 '+money(item.price));}else vipLeave(g,profile.name+' · 다음 방문 예정');ui();}
 else if(g.state==='leave'&&g.timer>.3){S.vip.guest=null;S.vip.nextVisitAt=S.time+3;save();renderDirty=true;}
}
function vipPreference(p,i){return ['color','wood','pickup'].reduce((n,k)=>n+Number(i.options?.[k]===p[k]),0);}
function before23ValidateExpansionSave(v,s,rules){
 const def=expansionDefaults(),safe=n=>Number.isSafeInteger(n)&&n>=0&&n<=1e15,fail=t=>{throw Error(t)},design=v.design??def.design;
 if(!design||!Atelier.walls[design.wall]||!Atelier.walls[design.vipWall]||!Atelier.floors[design.floor]||!Atelier.floors[design.vipFloor]||!Array.isArray(design.wallItems)||design.wallItems.length>20)fail('인테리어 저장');
 const used=new Set();const size=rules.stageSizes[s.stage];s.design={wall:design.wall,floor:design.floor,vipFloor:design.vipFloor,vipWall:design.vipWall,wallItems:design.wallItems.map(i=>{const key=i.wall+':'+i.slot;if(!['x','y'].includes(i.wall)||!Number.isInteger(i.slot)||i.slot<0||i.slot>=Math.floor((size[i.wall==='x'?0:1]-1)/2)||!Atelier.decorations[i.type]||used.has(key))fail('벽 장식 위치');used.add(key);return {wall:i.wall,slot:i.slot,type:i.type};})};
 const vip=v.vip??def.vip;if(!vip||!['visitedDay','visits','sales','revenue'].every(k=>safe(vip[k]))||vip.visitedDay>s.day||!Number.isInteger(vip.nextProfile)||vip.nextProfile<0||vip.nextProfile>5||!Number.isInteger(vip.lastProfile)||vip.lastProfile< -1||vip.lastProfile>5||typeof vip.lastResult!=='string'||vip.lastResult.length>150||vip.sales>vip.visits)fail('VIP 기록');
 let z=null;if(vip.zone!==null){z=vip.zone;if(s.stage<4||!z||!['x','y','w','h','doorAt'].every(k=>Number.isInteger(z[k]))||z.w<4||z.h<4||z.w>10||z.h>10||z.x<0||z.y<0||z.x+z.w>size[0]||z.y+z.h>size[1]||!['left','right','top','bottom'].includes(z.doorSide)||z.doorAt<1||z.doorAt>(['left','right'].includes(z.doorSide)?z.h:z.w)-2)fail('VIP 구역');z={x:z.x,y:z.y,w:z.w,h:z.h,doorSide:z.doorSide,doorAt:z.doorAt};const d=vipDoor(z);if(d.outside.x<0||d.outside.y<0||d.outside.x>=size[0]||d.outside.y>=size[1]||s.furniture.some(f=>[d.inside,d.outside].some(p=>Furniture.blocks(f,p.x,p.y)))||s.furniture.some(f=>inVIP(f,z)&&[0,1,4,5,6,7,11].includes(f.t)))fail('VIP 출입 통로');}
 const c=v.custom??def.custom;s.vip={zone:z};validateCustom27(v,s,fail);
 let guest=null;if(vip.guest!==null){const g=vip.guest,point=p=>p&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&p.x>=-1&&p.x<=size[0]+1&&p.y>=-1&&p.y<=size[1]+1;if(!z||!['open','closing'].includes(s.phase)||!g||!Number.isInteger(g.profile)||g.profile<0||g.profile>5||!point(g)||!Array.isArray(g.path)||g.path.length>256||!g.path.every(point)||!['enter','browse','try','consult','leave'].includes(g.state)||!Number.isFinite(g.timer)||g.timer<0||g.timer>1000||typeof g.bought!=='boolean'||vip.visitedDay!==s.day)fail('VIP 방문 상태');if(g.itemId!==undefined&&(!Number.isSafeInteger(g.itemId)||g.itemId<1||g.itemId>=c.nextId))fail('VIP 선택 악기');guest={kind:g.kind??'custom',product:g.product,displayId:g.displayId,displaySlot:g.displaySlot,profile:g.profile,x:g.x,y:g.y,path:g.path.map(p=>({x:p.x,y:p.y})),state:g.state,timer:g.timer,bought:g.bought,walkSpeed:2.8,gait:Number.isFinite(g.gait)?g.gait:0,facing:Number.isInteger(g.facing)?g.facing:5,stationId:g.stationId,itemId:g.itemId,velocity:0};}
 s.vip={zone:z,visitedDay:vip.visitedDay,nextProfile:vip.nextProfile,lastProfile:vip.lastProfile,guest,visits:vip.visits,sales:vip.sales,revenue:vip.revenue,lastResult:vip.lastResult};
 validateVIPExtras(v,s,rules);
 validateNewVIPState(v,s);
 validateInterior26(v,s);
}
function paintInteriorFloor(){for(let y=0;y<M;y++)for(let x=0;x<N;x++){const key=x+','+y,id=previewMaterial('floor',key),im=materialTexture('floor',id);if(!im)continue;const p=P(x,y),selected=designEditor?.kind==='floor'&&designEditor.keys.includes(key);ctx.save();ctx.transform(34/128,17/128,-34/128,17/128,p.x,p.y-17);const n=id==='checker'?2:4,sw=512/n;ctx.drawImage(im,x%n*sw,y%n*sw,sw,sw,0,0,128.6,128.6);if(selected||editing!==null){ctx.strokeStyle=selected?'#71ba8a':'#fff0c755';ctx.lineWidth=selected?4:1;ctx.strokeRect(0,0,128,128);}ctx.restore();}}


function vipPartitions(){const z=S.vip.zone;if(!z)return [];const objects=[],d=vipDoor(z);for(const side of ['left','right','top','bottom']){const n=['left','right'].includes(side)?z.h:z.w;for(let i=0;i<n;i++){let a,b;if(side==='left'||side==='right'){const x=side==='left'?z.x-.5:z.x+z.w-.5;a={x,y:z.y+i-.5};b={x,y:z.y+i+.5};if(x===-.5||x===N-.5)continue;}else{const y=side==='top'?z.y-.5:z.y+z.h-.5;a={x:z.x+i-.5,y};b={x:z.x+i+.5,y};if(y===-.5||y===M-.5)continue;}const door=side===z.doorSide&&i===z.doorAt;objects.push({depth:(a.x+a.y+b.x+b.y)/2+.08,draw:()=>paintPartition(a,b,door,side,i)});}}
 if(S.vip.hired){const e=vipEmployee();if(e)objects.push({depth:e.x+e.y+.16,draw:()=>drawVIPEmployee(e)});}
 if(S.vip.guest){const g=S.vip.guest;objects.push({depth:g.x+g.y+.15,draw:()=>drawVIP(g)});}return objects;
}
let vipSpriteImage=null;const vipSpriteClips=[[[[18,33,150,306],[182,34,148,304],[346,34,149,305]],[[519,34,149,306],[691,34,144,304],[858,34,149,306]],[[1025,34,170,303],[1195,35,146,302],[1366,34,149,303]]],[[[19,366,150,304],[192,366,124,302],[345,368,149,301]],[[522,368,135,304],[698,367,121,302],[856,368,168,304]],[[1024,368,171,300],[1195,370,144,299],[1367,369,150,299]]],[[[18,689,150,312],[182,693,145,307],[345,691,150,310]],[[522,694,140,309],[688,694,142,306],[854,695,170,307]],[[1024,696,171,304],[1195,697,137,304],[1365,697,150,303]]]];
function vipFrame(profile,dir,gait,moving){if(profile>=3)return people320Frame(profile-3,dir,gait,moving);const row=dir===4||dir===6?2:dir===2||dir===3||dir===7?1:0,frames=[0,1,2,1],n=moving?frames[((Math.floor(gait*4)%4)+4)%4]:1,clip=vipSpriteClips[profile][row][n];return {image:vipSpriteImage,clip,anchor:.5,sourceHeight:clip[3],footMargin:0,flip:dir===1||dir===3||dir===6,natural:true};}
function drawVIP(g){
 if(!vipSpriteImage?.complete||!people320Atlas?.complete)return;const seat=g.seated&&g.state==='try'?S.furniture.find(f=>f.id===g.stationId&&f.t===13):null,q=P(g.x,g.y),dir=seat?Furniture.direction(seat):g.facing;ctx.save();ctx.translate(q.x,q.y);ctx.scale(Config.characterScale,Config.characterScale);if(seat){const frame=g.profile>=3?people320Frame(g.profile-3,dir,0,false,true):seatedLegacyFrame(vipFrame(g.profile,dir,0,false),dir);paintSeated(ctx,frame,59);}else drawFullCharacter(ctx,vipFrame(g.profile,dir,g.gait,g.moving),77,g.gait,g.moving,g.animationWeight??1);if(seat){const item=selectedVIPOffer(g);if(item){if(item.kind==='custom'){ctx.save();ctx.translate(17,-10);miniCustom(ctx,item,35);ctx.restore();}else drawProduct(ctx,item.base,6,-43,24,34,false,true);}text('♫',28,-55,14,'#d4b66a');}if(g.bought)rect(14,-23,12,17,'#ead6aa');ctx.restore();
}

const atelierSprites=new Map();
function atelierFurnitureSprite(f){const item=f.t===12?S.custom.items.find(i=>i.displayId===f.id):null,key=[f.t,f.dir??0,S.custom.benchLevel,item?JSON.stringify([item.base,item.options]):'empty'].join('|');let im=atelierSprites.get(key);if(!im){im=document.createElement('canvas');im.width=300;im.height=360;const c=im.getContext('2d');c.scale(3,3);c.translate(50,95);paintAtelierFurniture(c,f,item);im.complete=true;im.naturalWidth=300;im.naturalHeight=360;atelierSprites.set(key,im);}const q=P(f.x,f.y);return {image:im,sx:0,sy:0,sw:300,sh:360,flip:false,rect:{x:q.x-50,y:q.y-95,w:100,h:120}};}
let atelierFurnitureAtlas=null;const AtelierFurnitureClips=[[[37,70,348,404],[442,70,279,393],[782,135,320,328],[1140,98,361,391]],[[37,539,352,411],[435,539,280,375],[776,637,322,304],[1141,593,360,368]]];const AtelierCalibration=[[{"anchor":[173.5,303.5],"sx":1.044,"sy":0.11599999999999999,"axes":[0.406,-0.638]},{"anchor":[140.5,342.5],"sx":1.221,"sy":-0.025500000000000023,"axes":[0.636,-0.585]},{"anchor":[161,275],"sx":0.998,"sy":0.11299999999999999,"axes":[0.386,-0.612]},{"anchor":[185,289],"sx":0.9850000000000001,"sy":0.04450000000000001,"axes":[0.448,-0.537]}],[{"anchor":[174,308.5],"sx":1.09,"sy":0.139,"axes":[0.406,-0.684]},{"anchor":[144.5,325.5],"sx":1.216,"sy":-0.03700000000000003,"axes":[0.645,-0.571]},{"anchor":[165,228],"sx":1.003,"sy":0.0875,"axes":[0.414,-0.589]},{"anchor":[178.5,271.5],"sx":1.023,"sy":0.06449999999999997,"axes":[0.447,-0.576]}]];
function paintAtelierFurniture(c,f,item){const im=atelierFurnitureAtlas;if(!im?.complete||!im.naturalWidth)return;const dir=Furniture.direction(f),row=dir>=2?1:0,col=f.t-11,clip=AtelierFurnitureClips[row][col],cal=AtelierCalibration[row][col],h=({11:64,12:76,13:58,14:55})[f.t],k=Math.min(h/(clip[3]+Math.abs(cal.sy)*clip[2]),76/(cal.sx*clip[2])),[ax,ay]=cal.anchor;c.save();if(dir===1||dir===3)c.scale(-1,1);c.save();c.transform(k*cal.sx,k*cal.sy,0,k,-k*cal.sx*ax,-k*(ay+cal.sy*ax));c.drawImage(im,...clip,0,0,clip[2],clip[3]);c.restore();if(f.t===12&&item){c.save();c.translate(1,-12);miniCustom(c,item,48,dir>=2);c.restore();}c.restore();}

function renderInterior(){const z=S.vip.zone,prep=S.phase==='prepare'&&editing===null;$('interiorHeading').textContent='VIP 구역';$('interiorBody').innerHTML=vipStatusHTML()+`<section class="interior-section">${z?`<p>${z.w}×${z.h}칸</p>`:''}<div class="atelier-actions"><button data-atelier="zone" ${!prep||S.stage<4?'disabled':''}>${z?'위치 변경':'구역 지정'}</button>${z?`<button data-atelier="zone-remove" ${!prep?'disabled':''}>구역 해제</button>`:''}</div>${z?`<div class="interior-grid"><label>문 방향<select id="vipDoorSide" ${!prep?'disabled':''}>${[['left','왼쪽'],['right','오른쪽'],['top','위쪽'],['bottom','아래쪽']].map(([id,label])=>`<option value="${id}" ${z.doorSide===id?'selected':''}>${label}</option>`).join('')}</select></label><label>문 위치<input id="vipDoorAt" type="number" min="2" max="7" value="${z.doorAt+1}" ${!prep?'disabled':''}></label><button data-atelier="door-apply" ${!prep?'disabled':''}>적용</button></div>`:''}</section>`;}
function openInterior(){hideFurnitureQuick();renderInterior();$('interiorDialog').showModal();}
function beginVIPEdit(){if(S.stage<4||S.phase!=='prepare'||editing!==null)return false;closeMenu();$('interiorDialog').close();$('management').close();hideFurnitureQuick();vipEditor=true;vipDragStart=null;vipZoneDraft=S.vip.zone?{...S.vip.zone}:null;document.body.classList.add('vip-editing');$('vipEditBar').hidden=false;$('vipEditStatus').textContent='드래그로 4~10칸 지정';$('vipEditConfirm').disabled=true;renderDirty=true;return true;}

function finishVIPEdit(commit){if(commit&&!setVIPZone(vipZoneDraft))return false;vipEditor=false;vipDragStart=null;vipZoneDraft=null;document.body.classList.remove('vip-editing');$('vipEditBar').hidden=true;sceneCacheKey='';renderDirty=true;return true;}

function drawVIPDraft(){if(!vipEditor||!vipZoneDraft)return;const z=vipZoneDraft,ok=!zoneError(z);for(let y=z.y;y<z.y+z.h;y++)for(let x=z.x;x<z.x+z.w;x++)diamond(x,y,ok?'#6da57555':'#c65d5755',ok?'#528461':'#b44740');const d=vipDoor(z);diamond(d.inside.x,d.inside.y,'#edcf8399','#f9e9bc');}

function selectVIPTile(p){if(!vipEditor)return;const a=vipDragStart??p,end={x:Math.max(a.x-9,Math.min(a.x+9,p.x)),y:Math.max(a.y-9,Math.min(a.y+9,p.y))},w=Math.abs(end.x-a.x)+1,h=Math.abs(end.y-a.y)+1,x=Math.max(0,Math.min(a.x,end.x)),y=Math.max(0,Math.min(a.y,end.y));const prior=S.vip.zone;const candidates=[prior?.doorSide,'left','top','right','bottom'].filter(Boolean).map(side=>({x,y,w,h,doorSide:side,doorAt:Math.min(Math.max(1,prior?.doorAt??Math.floor((['left','right'].includes(side)?h:w)/2)),(['left','right'].includes(side)?h:w)-2)}));vipZoneDraft=candidates.find(z=>!zoneError(z))??candidates[0];const error=zoneError(vipZoneDraft);$('vipEditStatus').textContent=`${w}×${h} · `+(error||'배치 가능');$('vipEditConfirm').disabled=!!error;if($('vipDraftSide')){$('vipDraftSide').value=vipZoneDraft.doorSide;$('vipDraftAt').max=(['left','right'].includes(vipZoneDraft.doorSide)?h:w)-1;$('vipDraftAt').value=vipZoneDraft.doorAt+1;}sceneCacheKey='';renderDirty=true;}

function addWallItem(wall,slot,type){if(!beginDesignEdit('art:'+type))return false;if(!selectDesignTargets(wall+':'+slot)){resetDesignEditor();return false;}const result=commitDesign();if(!result)resetDesignEditor();return result;}

function openWorkshop(id=null){const f=currentWorkbench(id);if(S.stage<6||!f){setTab('furniture');return false;}workshopBenchId=f.id;ensureCraftState();delete S.custom.ready[f.id];if(!assetGate(customBases(benchLevel(f.id)).flatMap(productAssetKeys),()=>openWorkshop(f.id)))return false;hideFurnitureQuick();const base=customBases()[0];workshopDraft={base,options:normalizedCustomOptions(base)};workshopAngle=0;renderWorkshop();if(!$('workshopDialog').open)$('workshopDialog').showModal();return true;}

function renderWorkshop(){
 const f=currentWorkbench(),draft=workshopDraft;if(!f||!draft)return;const c=ensureCraftState(),job=benchJob(f.id),l=benchLevel(),q=customQuote(draft),prep=S.phase==='prepare'&&editing===null,family=products[draft.base].family;const jobText=job?`${products[job.base].name} · ${job.remaining?'D-'+job.remaining:'완성 ✓ · 다음 날 수령'}`:'';
 $('workshopHeading').textContent='제작대 #'+f.id;$('workshopBody').innerHTML=`${job?`<div class="bench-job"><canvas data-job-art="${job.id}" width="70" height="110"></canvas><b>${jobText}</b></div>`:''}<div class="workshop-layout"><section class="instrument-view"><canvas id="customModel" width="720" height="840" aria-label="악기 미리보기"></canvas><div><button data-model-turn="-30">↶</button><button data-model-turn="0">정면</button><button data-model-turn="30">↷</button></div></section><section class="workshop-options"><div class="operation-title"><b>${l}등급</b><small>${['입문급','일반급까지','모든 등급'][l-1]}</small></div><label>기본 악기<select id="customBase">${customBases().map(i=>`<option value="${i}" ${i===draft.base?'selected':''}>${products[i].name} · 재고 ${S.stock[i]}</option>`).join('')}</select></label>${Object.entries(customOptionsFor(draft.base)).map(([key,rows])=>`<label>${family==='acoustic'&&key==='top'?'상판':CustomLabels[key]??key}<select data-custom-option="${key}">${rows.filter(o=>customOptionAvailable(o)).map(o=>`<option value="${o[0]}" ${draft.options[key]===o[0]?'selected':''}>${o[1]}${o[2]?' · +'+compactMoney(o[2]):''}</option>`).join('')}</select></label>`).join('')}<div class="custom-price">${customPriceHTML(q,draft)}</div><button class="primary" data-atelier="craft-finish" ${!prep||job||!q||S.stock[draft.base]<1||S.money<(q?.craftCost??Infinity)||c.items.length+c.jobs.length>=12?'disabled':''}>${job?'제작 중':'제작 시작'}</button><small>완성·제작 중 ${c.items.length+c.jobs.length}/12</small>${l<3?`<button data-atelier="bench-upgrade" ${!prep||job||S.money<Atelier.upgrades[l]?'disabled':''}>${l+1}등급 · ${money(Atelier.upgrades[l])}</button>`:''}</section></div>`;bindModelDrag();drawCustomModel();drawJobPictures();
}

function customInventoryHTML(){return S.custom.items.length?S.custom.items.map(i=>`<div class="custom-item"><canvas data-custom-art="${i.id}" width="100" height="140"></canvas><div><b>${products[i.base].name} #${i.id}</b><small>${TierNames[products[i.base].tier]} · ${isVIPCustom(i)?'VIP실':'일반 매장'}</small><strong>${money(i.price)}</strong></div><label>진열<select data-custom-display="${i.id}" ${S.phase!=='prepare'?'disabled':''}><option value="">보관</option>${S.furniture.filter(f=>customDisplayAllowed(i,f)).map(f=>`<option value="${f.id}:0" ${i.displayId===f.id?'selected':''}>#${f.id}${S.custom.items.some(q=>q.id!==i.id&&q.displayId===f.id)?' · 교체':''}</option>`).join('')}</select></label></div>`).join(''):'<p class="empty-note">완성 악기 없음</p>';}

function drawCustomInventory(){document.querySelectorAll('[data-custom-art]').forEach(el=>{const item=S.custom.items.find(i=>i.id===+el.dataset.customArt);if(!item)return;const c=el.getContext('2d');c.clearRect(0,0,el.width,el.height);c.save();c.translate(50,125);miniCustom(c,item,110);c.restore();});}
function openCustomDisplays(displayId=null){hideFurnitureQuick();$('displayHeading').textContent='커스텀 악기 진열';if(displayId!==null){const f=S.furniture.find(f=>f.id===displayId&&f.t===12);if(!f)return false;$('customDisplayBody').innerHTML=S.custom.items.filter(i=>customDisplayAllowed(i,f)).map(i=>`<button class="custom-case-choice" data-case-item="${i.id}" data-case-id="${f.id}"><canvas data-custom-art="${i.id}" width="70" height="100"></canvas><b>${products[i.base].name} #${i.id}</b><span>${money(i.price)}</span></button>`).join('')||'<p class="empty-note">해당 구역의 완성 악기 없음</p>';}else $('customDisplayBody').innerHTML=customInventoryHTML();drawCustomInventory();if(!$('customDisplayDialog').open)$('customDisplayDialog').showModal();return true;}

function vipGuestCards(){return `<section class="vip-guest-list">${vipStatusHTML()}${Atelier.profiles.map((p,i)=>`<div class="vip-profile"><canvas data-vip-portrait="${i}" width="100" height="120"></canvas><div><b>${p.name}</b><small>${p.family==='electric'?'일렉 기타':p.family==='bass'?'베이스':p.family==='acoustic'?'어쿠스틱':'모든 악기'} · ${money(p.budget)}</small>${S.vip.guest?.profile===i?'<span>방문 중</span>':''}</div></div>`).join('')}</section>`;}

function drawVIPPortraits(){if(!vipSpriteImage?.complete||!vipSpriteImage.naturalWidth)return;for(const el of document.querySelectorAll('[data-vip-portrait]')){const c=el.getContext('2d');c.clearRect(0,0,100,120);c.save();c.translate(50,117);drawFullCharacter(c,vipFrame(+el.dataset.vipPortrait,0,0,false),110);c.restore();}}
function bindModelDrag(){const el=$('customModel');let drag=null;el.onpointerdown=e=>{drag={x:e.clientX,angle:workshopAngle};el.setPointerCapture(e.pointerId);};el.onpointermove=e=>{if(!drag)return;workshopAngle=drag.angle+(e.clientX-drag.x)*.8;drawCustomModel();};el.onpointerup=el.onpointercancel=()=>drag=null;}

// Source instrument pixels remain the art for both the workshop and finished display.
// Layered customization: source art, pigments, wood grain, pickups, metal and finish.
// No pixel readback or external image URLs; works with an origin-tainted source canvas too.
const customTextureCache=new Map();
const CustomCoverage={"0:0":{"w":183,"h":494,"rows":[[241,[36,5]],[242,[36,1,39,4]],[243,[36,2,41,4]],[244,[36,3,41,4]],[245,[35,10]],[246,[34,3,39,6]],[247,[31,6,38,5]],[248,[28,15]],[249,[26,17]],[250,[25,18]],[251,[24,20]],[252,[23,7,31,13]],[253,[22,7,30,15]],[254,[21,7,29,16]],[255,[21,24]],[256,[20,6,27,19]],[257,[19,6,26,20]],[258,[19,27]],[259,[18,6,25,21]],[260,[18,28]],[261,[18,5,24,22]],[262,[17,29]],[263,[17,5,23,23]],[264,[17,5,23,23]],[265,[16,30]],[266,[16,30]],[267,[16,5,22,24]],[268,[16,5,22,24]],[269,[16,30]],[270,[15,31]],[271,[15,32]],[272,[15,32]],[273,[15,32]],[274,[15,33]],[275,[15,33]],[276,[15,34,150,9]],[277,[15,34,148,13]],[278,[15,35,147,15]],[279,[15,36,146,17]],[280,[15,37,146,18]],[281,[15,38,73,1,145,6,152,13]],[282,[15,39,72,2,145,5,151,14]],[283,[15,40,71,3,144,22]],[284,[15,42,69,5,144,22]],[285,[15,45,67,7,144,11,156,11]],[286,[15,59,144,10,157,10]],[287,[15,59,144,9,157,11]],[288,[15,59,143,10,158,10]],[289,[15,59,143,10,158,10]],[290,[16,58,110,1,143,10,158,11]],[291,[16,58,110,1,143,10,159,10]],[292,[16,58,110,1,143,9,159,10]],[293,[16,58,110,1,142,10,159,10]],[294,[16,58,110,1,142,10,159,11]],[295,[16,58,110,1,141,11,160,10]],[296,[17,57,110,1,141,11,160,10]],[297,[17,47,69,5,110,1,141,10,160,10]],[298,[17,45,71,3,110,1,140,11,160,10]],[299,[17,45,73,1,110,1,140,11,160,10]],[300,[17,45,110,1,139,11,160,10]],[301,[18,44,110,2,138,12,160,10]],[302,[18,44,110,2,138,11,160,10]],[303,[18,44,110,2,137,12,160,10]],[304,[18,44,110,3,136,12,160,10]],[305,[19,44,110,3,135,6,142,6,160,10]],[306,[19,44,110,4,133,7,141,6,160,10]],[307,[19,44,110,6,132,7,140,6,160,10]],[308,[20,44,110,7,130,8,139,6,159,10]],[309,[20,44,110,11,126,18,159,10]],[310,[20,44,110,33,159,10]],[311,[21,43,110,32,159,10]],[312,[21,43,110,31,159,9]],[313,[22,43,111,29,158,10]],[314,[22,43,112,26,158,10]],[315,[22,43,115,21,158,10]],[316,[23,42,117,16,157,10]],[317,[23,42,123,4,157,10]],[318,[23,42,157,10]],[319,[24,42,157,9]],[320,[24,42,156,10]],[321,[24,42,155,10]],[322,[25,41,155,10]],[323,[25,41,155,10]],[324,[25,41,154,10]],[325,[26,40,154,10]],[326,[26,40,153,11]],[327,[26,40,153,10]],[328,[27,39,153,10]],[329,[27,39,152,11]],[330,[27,39,152,10]],[331,[27,39,152,10]],[332,[28,38,151,11]],[333,[28,38,151,10]],[334,[28,38,151,10]],[335,[28,37,150,11]],[336,[28,37,150,10]],[337,[29,36,149,11]],[338,[29,36,149,11]],[339,[29,36,149,10]],[340,[29,35,148,11]],[341,[29,35,148,11]],[342,[29,35,148,10]],[343,[29,35,148,10]],[344,[29,35,148,10]],[345,[29,34,148,9]],[346,[29,34,148,9]],[347,[28,35,148,9]],[348,[28,34,148,9]],[349,[28,34,147,10]],[350,[28,34,147,10]],[351,[28,33,147,10]],[352,[27,34,147,10]],[353,[27,33,147,10]],[354,[27,33,147,10]],[355,[26,34,147,10]],[356,[26,33,148,9]],[357,[26,33,148,10]],[358,[25,33,148,10]],[359,[25,33,148,10]],[360,[24,33,148,11]],[361,[24,33,149,10]],[362,[24,33,149,10]],[363,[23,33,149,11]],[364,[23,33,149,11]],[365,[22,33,150,10]],[366,[22,33,150,11]],[367,[21,33,150,11]],[368,[20,34,151,10]],[369,[20,34,151,11]],[370,[19,35,151,11]],[371,[19,34,152,11]],[372,[18,35,152,11]],[373,[18,35,153,11]],[374,[17,35,153,11]],[375,[17,35,154,11]],[376,[16,36,154,12]],[377,[16,36,155,11]],[378,[15,36,155,12]],[379,[14,37,156,11]],[380,[14,37,157,11]],[381,[13,38,157,11]],[382,[13,37,157,12]],[383,[13,37,158,11]],[384,[12,38,158,12]],[385,[12,38,159,11]],[386,[11,39,159,12]],[387,[11,39,160,11]],[388,[10,40,160,12]],[389,[10,40,161,11]],[390,[9,41,161,12]],[391,[9,41,134,1,162,11]],[392,[8,43,133,1,162,12]],[393,[8,43,163,11]],[394,[7,44,132,1,163,12]],[395,[7,44,109,1,164,11]],[396,[7,45,164,12]],[397,[6,46,165,11]],[398,[6,46,165,12]],[399,[6,47,166,11]],[400,[5,48,166,11]],[401,[5,49,167,11]],[402,[5,50,127,1,167,11]],[403,[4,51,168,10]],[404,[4,52,168,10]],[405,[4,53,112,1,168,11]],[406,[3,55,169,10]],[407,[3,56,113,1,169,10]],[408,[3,58,113,1,169,11]],[409,[2,61,113,1,170,10]],[410,[2,66,113,2,170,10]],[411,[2,70,113,4,120,9,170,11]],[412,[2,70,113,3,119,14,171,10]],[413,[1,71,112,2,118,17,171,10]],[414,[1,71,117,20,172,9]],[415,[1,71,116,23,172,10]],[416,[1,71,116,25,172,10]],[417,[1,71,117,26,172,10]],[418,[1,71,117,28,172,10]],[419,[0,72,112,2,117,29,172,10]],[420,[0,72,112,1,117,31,173,10]],[421,[0,72,106,1,112,1,117,32,173,10]],[422,[0,72,117,33,173,10]],[423,[0,72,117,35,173,10]],[424,[0,72,117,36,173,10]],[425,[0,72,117,37,173,10]],[426,[0,73,117,38,174,9]],[427,[0,132,136,21,174,9]],[428,[0,130,138,20,173,10]],[429,[0,129,141,18,173,10]],[430,[0,128,143,18,173,10]],[431,[0,128,145,17,172,11]],[432,[0,128,146,19,169,1,171,12]],[433,[0,127,148,35]],[434,[0,127,149,34]],[435,[0,128,150,33]],[436,[0,128,151,32]],[437,[0,128,152,31]],[438,[0,129,150,1,153,30]],[439,[0,129,150,2,154,29]],[440,[0,130,151,2,155,28]],[441,[1,130,153,1,156,27]],[442,[1,131,157,26]],[443,[1,132,157,26]],[444,[1,133,158,25]],[445,[1,134,159,23]],[446,[2,134,159,23]],[447,[2,135,160,22]],[448,[2,137,160,22]],[449,[2,138,161,21]],[450,[3,139,161,20]],[451,[3,140,161,20]],[452,[3,142,162,19]],[453,[4,143,162,18]],[454,[4,145,161,19]],[455,[5,146,161,18]],[456,[5,150,159,20]],[457,[6,173]],[458,[7,171]],[459,[7,171]],[460,[8,169]],[461,[9,168]],[462,[9,167]],[463,[10,165]],[464,[11,164]],[465,[12,162]],[466,[12,161]],[467,[13,159]],[468,[14,158]],[469,[15,156]],[470,[17,153]],[471,[18,150]],[472,[19,148]],[473,[21,145]],[474,[22,143]],[475,[24,139]],[476,[25,137]],[477,[27,134]],[478,[29,131]],[479,[31,127]],[480,[33,122]],[481,[35,118]],[482,[38,112]],[483,[41,107]],[484,[45,100]],[485,[50,91]],[486,[56,78]],[487,[67,56]],[488,[88,4,93,5]],[489,[89,8]],[490,[87,11]],[491,[86,4,93,6]],[492,[87,12]],[493,[88,10]]]},"0:1":{"w":192,"h":485,"rows":[[224,[151,1]],[225,[148,6]],[226,[146,2,151,3]],[227,[145,2,151,3]],[228,[144,4,151,3]],[229,[144,5,150,5]],[230,[146,3,152,8]],[231,[147,2,152,10]],[232,[147,17]],[233,[147,18]],[234,[146,20]],[235,[145,22]],[236,[145,6,152,16]],[237,[145,6,152,17]],[238,[144,6,151,18]],[239,[144,26]],[240,[144,27]],[241,[144,28]],[242,[144,28]],[243,[144,29]],[244,[144,29]],[245,[144,30]],[246,[144,30]],[247,[144,30]],[248,[144,30]],[249,[144,31]],[250,[144,31]],[251,[144,31]],[252,[144,31]],[253,[144,32]],[254,[143,33]],[255,[143,33]],[256,[143,33]],[257,[143,33]],[258,[142,34]],[259,[142,34]],[260,[32,8,142,34]],[261,[30,12,141,35]],[262,[29,14,141,36]],[263,[28,16,140,37]],[264,[27,17,140,36]],[265,[26,19,139,37]],[266,[25,20,138,38]],[267,[24,7,32,14,137,39]],[268,[24,6,31,15,136,40]],[269,[23,6,30,16,135,41]],[270,[23,23,116,1,134,42]],[271,[22,24,116,2,133,43]],[272,[22,25,116,3,131,45]],[273,[21,26,116,7,126,50]],[274,[21,26,116,60]],[275,[21,26,116,59]],[276,[21,27,116,59]],[277,[20,28,116,59]],[278,[20,28,116,59]],[279,[20,28,116,59]],[280,[20,29,116,58]],[281,[20,29,116,58]],[282,[20,29,116,58]],[283,[20,30,116,58]],[284,[20,30,116,57]],[285,[20,31,116,57]],[286,[20,32,116,57]],[287,[20,32,116,57]],[288,[20,33,116,56]],[289,[20,34,76,1,116,56]],[290,[20,36,75,2,116,56]],[291,[20,38,73,4,116,55]],[292,[20,40,72,5,116,55]],[293,[20,42,69,8,116,55]],[294,[20,57,116,54]],[295,[20,57,116,54]],[296,[21,56,116,54]],[297,[21,56,116,53]],[298,[21,56,116,53]],[299,[21,56,116,53]],[300,[21,56,116,52]],[301,[22,55,116,52]],[302,[22,55,116,52]],[303,[22,55,116,51]],[304,[22,55,116,51]],[305,[23,54,116,51]],[306,[23,54,116,50]],[307,[24,53,116,50]],[308,[24,53,116,50]],[309,[24,53,116,49]],[310,[25,52,116,49]],[311,[25,52,116,49]],[312,[25,52,116,49]],[313,[26,51,116,48]],[314,[26,51,116,48]],[315,[26,51,116,48]],[316,[27,137]],[317,[27,136]],[318,[27,136]],[319,[28,135]],[320,[28,135]],[321,[28,135]],[322,[29,134]],[323,[29,134]],[324,[30,132]],[325,[30,132]],[326,[30,132]],[327,[30,132]],[328,[31,131]],[329,[31,132]],[330,[31,132]],[331,[31,132]],[332,[31,132]],[333,[31,132]],[334,[31,132]],[335,[31,133]],[336,[31,133]],[337,[31,133]],[338,[30,134]],[339,[30,135]],[340,[30,135]],[341,[30,135]],[342,[30,136]],[343,[29,137]],[344,[29,138]],[345,[29,138]],[346,[28,41,112,55]],[347,[28,38,116,52]],[348,[27,38,116,52]],[349,[27,38,117,52]],[350,[27,38,117,52]],[351,[26,39,117,53]],[352,[26,39,117,54]],[353,[25,40,117,54]],[354,[24,41,117,55]],[355,[24,41,117,55]],[356,[23,42,117,56]],[357,[23,42,117,56]],[358,[22,43,117,57]],[359,[22,43,117,57]],[360,[21,44,117,58]],[361,[21,44,117,58]],[362,[20,45,117,59]],[363,[20,45,117,59]],[364,[19,46,117,60]],[365,[19,46,117,61]],[366,[18,47,117,61]],[367,[18,47,117,62]],[368,[17,48,117,62]],[369,[16,49,117,62]],[370,[16,49,117,63]],[371,[15,50,117,63]],[372,[14,51,117,64]],[373,[14,51,117,64]],[374,[13,52,117,65]],[375,[13,52,117,65]],[376,[12,53,117,65]],[377,[12,53,117,66]],[378,[11,54,117,66]],[379,[11,54,117,67]],[380,[10,55,117,67]],[381,[10,55,117,68]],[382,[9,56,117,68]],[383,[9,56,117,69]],[384,[8,57,117,69]],[385,[8,57,117,69]],[386,[7,58,117,70]],[387,[7,58,117,70]],[388,[6,59,117,70]],[389,[6,59,117,71]],[390,[6,59,117,71]],[391,[5,60,117,71]],[392,[5,60,117,72]],[393,[5,60,117,72]],[394,[4,61,117,72]],[395,[4,61,117,73]],[396,[4,61,117,73]],[397,[3,62,117,73]],[398,[3,62,117,74]],[399,[3,62,117,74]],[400,[3,62,117,74]],[401,[2,63,117,74]],[402,[2,63,117,75]],[403,[2,63,117,75]],[404,[1,64,117,75]],[405,[1,64,117,75]],[406,[1,64,117,75]],[407,[1,64,117,75]],[408,[1,64,117,75]],[409,[0,65,93,1,117,75]],[410,[0,65,77,1,92,2,100,1,117,75]],[411,[0,65,77,1,92,2,117,75]],[412,[0,65,92,1,117,75]],[413,[0,65,117,75]],[414,[0,65,117,75]],[415,[0,65,117,75]],[416,[0,65,117,75]],[417,[0,65,117,75]],[418,[0,65,117,75]],[419,[0,65,117,75]],[420,[0,65,117,75]],[421,[0,65,117,75]],[422,[0,65,117,75]],[423,[0,65,117,75]],[424,[0,65,117,75]],[425,[0,66,116,76]],[426,[0,67,115,77]],[427,[0,192]],[428,[0,192]],[429,[0,192]],[430,[0,192]],[431,[0,191]],[432,[0,191]],[433,[1,190]],[434,[1,189]],[435,[1,189]],[436,[1,189]],[437,[2,188]],[438,[2,187]],[439,[2,187]],[440,[2,186]],[441,[3,185]],[442,[3,185]],[443,[3,184]],[444,[4,183]],[445,[4,182]],[446,[5,181]],[447,[5,180]],[448,[5,179]],[449,[6,178]],[450,[7,176]],[451,[7,175]],[452,[8,173]],[453,[9,172]],[454,[9,171]],[455,[10,169]],[456,[11,167]],[457,[12,166]],[458,[12,165]],[459,[13,163]],[460,[14,160]],[461,[15,158]],[462,[17,155]],[463,[18,152]],[464,[19,150]],[465,[21,146]],[466,[22,143]],[467,[24,140]],[468,[25,137]],[469,[27,133]],[470,[29,129]],[471,[32,123]],[472,[34,119]],[473,[36,114]],[474,[39,108]],[475,[43,101]],[476,[48,91]],[477,[53,80]],[478,[61,65]],[479,[82,19]],[480,[91,9]],[481,[89,3,93,1,96,5]],[482,[89,3,98,4]],[483,[89,3,95,2,98,4]],[484,[90,11]]]},"1:0":{"w":180,"h":502,"rows":[[241,[35,2,38,1]],[242,[34,2,40,2]],[243,[34,2,42,1]],[244,[35,2]],[245,[34,3,42,1]],[246,[33,3,39,1,41,1]],[247,[30,6,41,1]],[248,[28,4,33,3,38,4]],[249,[26,16]],[250,[25,19]],[251,[24,20]],[252,[23,7,33,10,44,1]],[253,[22,7,31,15]],[254,[21,6,30,14,45,1]],[255,[20,6,28,16,45,2]],[256,[20,5,27,18,46,1]],[257,[19,6,27,18,46,1]],[258,[19,6,26,19,46,2]],[259,[18,6,25,20,46,2]],[260,[18,5,25,23]],[261,[17,6,24,22,47,1]],[262,[17,6,24,22,47,1]],[263,[17,5,23,23,47,1]],[264,[16,6,23,23,47,1]],[265,[16,5,23,23,47,1]],[266,[16,5,22,26]],[267,[16,5,22,26]],[268,[15,34]],[269,[15,1,17,32]],[270,[15,1,17,30,48,1]],[271,[15,32,48,1]],[272,[15,32,48,1]],[273,[15,32,48,1]],[274,[15,34]],[275,[14,34,49,1]],[276,[14,34,49,1]],[277,[14,1,16,34]],[278,[14,37]],[279,[14,37]],[280,[14,36,51,1]],[281,[14,39]],[282,[14,39]],[283,[14,1,16,39]],[284,[14,1,16,40]],[285,[14,1,16,41]],[286,[14,44,71,2]],[287,[14,46,68,1,71,2]],[288,[14,54,69,4]],[289,[15,50,67,6]],[290,[15,54,71,2,146,3]],[291,[15,53,70,3,149,2]],[292,[15,1,17,56,142,12]],[293,[15,1,17,56,140,1,142,14]],[294,[15,1,17,56,139,1,141,16]],[295,[15,58,139,5,147,11]],[296,[16,57,138,1,140,3,146,12]],[297,[16,57,139,4,144,15]],[298,[16,44,63,10,139,3,143,17]],[299,[16,43,66,7,137,5,143,18]],[300,[16,42,68,5,137,10,150,11]],[301,[17,41,70,3,136,1,138,8,151,10]],[302,[17,40,136,10,152,9]],[303,[17,40,136,10,152,9]],[304,[17,40,136,10,153,8]],[305,[18,39,136,9,153,10]],[306,[18,40,135,10,153,10]],[307,[18,40,135,10,154,10]],[308,[18,40,135,10,154,9]],[309,[19,1,21,38,134,11,155,8]],[310,[19,1,21,38,134,10,155,8]],[311,[19,40,133,11,155,8]],[312,[20,39,133,10,155,9]],[313,[20,40,132,1,134,9,156,9]],[314,[20,40,132,11,156,9]],[315,[21,39,131,11,156,9]],[316,[21,40,108,1,130,11,156,9]],[317,[21,40,108,2,129,6,136,5,156,9]],[318,[22,39,108,3,128,6,135,5,156,9]],[319,[22,39,108,4,126,7,134,5,156,8]],[320,[23,39,108,6,124,8,133,6,156,8]],[321,[23,39,108,22,132,5,156,8]],[322,[23,39,108,21,131,6,156,8]],[323,[24,38,108,19,129,5,156,8]],[324,[24,39,108,26,156,8]],[325,[24,39,108,25,156,8]],[326,[25,38,109,22,156,8]],[327,[25,1,27,36,111,18,156,8]],[328,[26,37,114,12,156,8]],[329,[26,37,156,8]],[330,[26,37,155,9]],[331,[27,36,155,8]],[332,[27,1,29,34,155,8]],[333,[27,36,155,8]],[334,[27,36,155,8]],[335,[28,35,155,8]],[336,[28,1,30,33,155,8]],[337,[28,1,30,33,155,7]],[338,[28,35,154,8]],[339,[28,35,154,8]],[340,[29,33,154,9]],[341,[29,33,154,9]],[342,[29,33,153,8,162,1]],[343,[29,32,153,8]],[344,[29,32,153,8]],[345,[29,32,153,7]],[346,[29,32,152,8]],[347,[29,31,152,8]],[348,[28,32,152,7]],[349,[28,32,151,8]],[350,[28,31,151,8]],[351,[28,31,151,7]],[352,[28,30,151,7]],[353,[28,1,30,28,150,8]],[354,[28,30,150,9]],[355,[27,30,149,8]],[356,[27,1,29,28,149,9]],[357,[27,1,29,28,149,9]],[358,[26,2,29,27,148,8]],[359,[26,1,28,28,148,9]],[360,[26,1,28,27,148,7,156,1]],[361,[25,30,147,8]],[362,[25,1,27,28,147,7,155,1]],[363,[24,30,147,7,155,1]],[364,[24,1,26,28,146,8]],[365,[23,30,145,8]],[366,[23,30,145,8]],[367,[22,31,145,8]],[368,[22,31,145,8]],[369,[21,31,144,9]],[370,[21,1,23,29,144,8]],[371,[20,32,144,8]],[372,[20,1,22,30,143,9]],[373,[19,32,143,8]],[374,[19,1,21,30,143,8]],[375,[18,1,20,31,143,8]],[376,[18,33,143,8]],[377,[17,34,143,9]],[378,[16,34,143,9]],[379,[16,1,18,4,23,27,143,9]],[380,[15,6,22,28,143,9]],[381,[15,35,142,10]],[382,[14,6,21,29,143,9]],[383,[14,1,16,34,143,9]],[384,[13,6,20,30,143,9]],[385,[13,1,15,36,143,9]],[386,[12,1,14,4,19,32,143,9]],[387,[11,2,14,3,18,33,143,9]],[388,[11,1,13,4,18,33,143,10]],[389,[11,1,13,38,143,10]],[390,[10,1,12,39,143,10]],[391,[9,43,143,10]],[392,[9,1,11,42,143,11]],[393,[8,45,144,10]],[394,[8,46,144,11]],[395,[7,48,144,11]],[396,[7,49,144,11]],[397,[6,51,145,11]],[398,[6,52,145,11]],[399,[6,1,8,52,145,10,156,1]],[400,[5,56,146,11]],[401,[5,1,7,56,146,10]],[402,[5,1,7,58,147,10]],[403,[4,70,148,9]],[404,[4,1,6,68,76,3,147,12]],[405,[4,1,6,69,76,8,85,8,149,11]],[406,[4,1,6,69,76,8,85,9,149,11]],[407,[3,1,5,70,76,8,85,16,150,11]],[408,[3,1,5,70,76,8,85,21,150,12]],[409,[3,1,5,70,76,8,85,25,150,12]],[410,[2,2,5,70,76,8,85,27,151,12]],[411,[2,1,4,71,76,8,85,29,152,11]],[412,[2,1,4,71,76,8,85,30,152,12]],[413,[2,72,76,8,85,32,153,12]],[414,[1,1,3,71,76,8,85,34,153,11,165,1]],[415,[1,1,3,71,75,9,85,35,154,12]],[416,[1,1,3,71,76,8,85,36,156,9]],[417,[1,1,3,71,76,8,85,37,155,11]],[418,[1,1,3,71,76,8,85,38,157,9,167,1]],[419,[1,73,78,6,85,9,95,5,104,20,157,10]],[420,[0,1,2,72,79,5,85,9,95,3,104,21,158,11]],[421,[0,1,2,71,79,5,85,8,96,1,106,20,158,10,169,1]],[422,[0,1,2,70,80,3,87,6,110,16,158,11]],[423,[0,1,2,63,112,15,159,10]],[424,[0,1,2,64,112,16,160,10,171,1]],[425,[0,1,2,64,113,16,160,12]],[426,[0,1,2,64,113,17,162,9,172,1]],[427,[0,66,81,1,113,17,162,11]],[428,[0,1,2,64,81,1,113,18,162,10,173,1]],[429,[0,66,81,1,113,19,164,10]],[430,[0,1,2,64,80,3,113,20,163,10,174,1]],[431,[0,1,2,64,81,2,113,19,165,8,174,1]],[432,[0,1,2,64,78,2,81,1,98,1,100,1,112,22,164,10,175,1]],[433,[0,1,2,69,79,1,91,1,96,6,107,28,166,8,175,1]],[434,[0,1,2,70,77,3,81,1,83,1,92,1,97,5,106,29,144,1,166,9]],[435,[0,1,2,72,78,6,85,1,87,7,95,8,104,32,167,8,176,1]],[436,[0,1,2,72,78,6,85,9,95,42,166,9,176,1]],[437,[0,1,2,72,75,9,85,9,95,43,167,9]],[438,[0,1,2,72,75,9,85,9,95,43,167,9]],[439,[0,1,3,71,75,9,85,9,95,44,167,10]],[440,[3,71,75,9,85,9,95,45,168,9]],[441,[1,1,3,71,75,9,85,9,95,45,168,9,178,1]],[442,[1,1,3,71,75,9,85,9,95,46,169,8,178,1]],[443,[1,1,3,71,75,9,85,9,95,47,169,10]],[444,[1,73,75,9,85,9,95,48,169,9]],[445,[2,1,4,70,75,9,85,9,95,49,169,9]],[446,[2,1,4,70,75,9,85,9,95,49,169,9,179,1]],[447,[2,1,4,70,75,9,85,9,95,50,170,8,179,1]],[448,[2,2,5,69,75,9,85,9,95,51,170,10]],[449,[3,1,5,69,75,9,85,9,95,52,170,10]],[450,[3,1,5,69,75,9,85,9,97,5,103,1,106,42,170,10]],[451,[3,2,6,62,111,38,170,10]],[452,[4,1,6,61,112,38,170,9]],[453,[4,63,113,38,170,9]],[454,[5,1,7,60,113,38,170,9]],[455,[5,62,113,40,169,10]],[456,[6,1,8,59,113,41,169,10]],[457,[6,61,113,43,168,11]],[458,[7,1,9,58,113,45,168,11]],[459,[8,1,10,57,113,47,166,14]],[460,[8,1,10,57,113,67]],[461,[9,1,11,56,113,67]],[462,[9,2,12,55,113,65,179,1]],[463,[10,1,12,55,113,65,179,1]],[464,[11,1,13,54,112,66,179,1]],[465,[12,1,14,53,112,67]],[466,[13,1,15,52,112,65,178,1]],[467,[13,2,16,51,112,65,178,1]],[468,[14,1,17,50,112,65,178,1]],[469,[15,1,18,49,112,64,177,2]],[470,[16,1,19,48,112,64,177,1]],[471,[17,1,20,47,112,63,177,1]],[472,[18,1,21,46,112,63]],[473,[19,2,22,45,112,63]],[474,[20,2,23,44,113,61,175,2]],[475,[22,1,25,42,113,61,175,1]],[476,[23,2,26,41,113,60,174,1]],[477,[24,2,28,40,111,62,174,1]],[478,[26,2,30,39,85,1,110,1,112,60,173,1]],[479,[28,2,31,39,71,3,77,1,83,1,85,1,87,2,90,8,101,3,109,62,172,2]],[480,[29,2,33,137,171,2]],[481,[32,1,35,134,171,1]],[482,[33,2,38,130,169,2]],[483,[34,3,40,127,168,2]],[484,[36,3,42,124,168,1]],[485,[39,3,45,120,166,2]],[486,[42,3,48,116,165,2]],[487,[44,4,51,111,164,2]],[488,[55,106,163,1]],[489,[61,98,161,2]],[490,[64,93,159,2]],[491,[67,88,157,2]],[492,[74,78,155,2]],[493,[73,2,84,65,152,2]],[494,[88,1,91,53,149,2]],[495,[100,37,144,4]],[496,[139,6]],[497,[106,34]],[498,[113,1,117,1,119,3,123,6]]]},"1:1":{"w":184,"h":491,"rows":[[232,[145,2,150,3]],[233,[143,1,145,6,153,2]],[234,[143,10,155,1]],[235,[141,17]],[236,[139,20]],[237,[139,21]],[238,[138,4,144,17]],[239,[137,22,160,1]],[240,[137,23,161,1]],[241,[137,23,161,1]],[242,[135,1,137,24,162,1]],[243,[136,25,162,2]],[244,[134,1,136,26,163,1]],[245,[134,1,136,26,163,2]],[246,[134,1,136,27,164,1]],[247,[134,1,136,27,164,1]],[248,[134,1,136,28,165,1]],[249,[134,1,136,28,165,1]],[250,[134,1,136,28,165,1]],[251,[134,31,166,1]],[252,[133,32,166,1]],[253,[134,33]],[254,[133,32]],[255,[133,1,135,31,167,1]],[256,[135,31,167,1]],[257,[133,1,135,31,167,1]],[258,[132,2,135,31,167,1]],[259,[133,33,167,1]],[260,[132,1,134,32]],[261,[132,34]],[262,[131,35]],[263,[131,36]],[264,[131,36,168,1]],[265,[130,37,168,1]],[266,[130,37,168,1]],[267,[129,38,168,1]],[268,[128,7,136,31,168,1]],[269,[128,1,130,4,135,32,168,1]],[270,[127,1,129,4,135,32,168,1]],[271,[126,1,129,4,134,33]],[272,[125,1,128,4,133,33]],[273,[111,1,123,8,133,33,167,1]],[274,[32,8,111,4,120,4,125,5,132,34,167,1]],[275,[29,9,111,18,131,35,167,1]],[276,[30,10,111,16,130,36,167,1]],[277,[25,16,111,15,128,38,167,1]],[278,[24,18,111,14,127,39,167,1]],[279,[24,7,34,9,45,1,111,55,167,1]],[280,[23,7,33,11,45,1,111,56]],[281,[22,7,31,13,45,1,111,54,166,1]],[282,[22,7,30,14,45,2,111,54,166,1]],[283,[21,7,29,16,46,1,111,54,166,1]],[284,[21,6,28,17,46,1,111,54,166,1]],[285,[20,25,46,1,111,54]],[286,[20,25,46,1,111,55]],[287,[20,25,46,2,111,53,165,1]],[288,[19,29,111,53,165,1]],[289,[19,27,47,1,111,53,165,1]],[290,[19,29,111,54]],[291,[19,30,111,52,164,1]],[292,[18,31,111,52,164,1]],[293,[18,32,111,52]],[294,[18,32,111,51,163,1]],[295,[17,34,111,51,163,1]],[296,[17,1,19,32,111,51,163,1]],[297,[17,1,19,33,73,1,111,50,162,1]],[298,[19,33,73,1,111,50,162,1]],[299,[17,1,19,34,72,2,111,50,162,1]],[300,[17,1,19,33,53,1,71,3,111,49,161,2]],[301,[17,1,19,33,54,1,70,4,111,49,161,1]],[302,[17,1,19,34,55,2,69,5,111,49,161,1]],[303,[17,1,19,36,57,2,67,2,70,4,111,48,160,2]],[304,[17,1,19,37,59,9,69,5,111,48,160,1]],[305,[17,1,19,39,63,3,67,6,111,50]],[306,[17,1,19,53,111,50]],[307,[17,1,19,51,72,2,111,47,159,1]],[308,[17,1,19,50,71,3,111,47,159,1]],[309,[17,1,19,55,111,46,158,1]],[310,[17,1,19,55,111,46,158,1]],[311,[17,1,19,55,111,46,158,1]],[312,[17,1,19,55,111,45,157,2]],[313,[17,1,19,55,111,45,157,1]],[314,[17,1,19,55,111,45,157,1]],[315,[17,1,19,55,111,44,156,2]],[316,[17,57,111,44,156,1]],[317,[18,56,111,44,156,1]],[318,[18,1,20,54,111,44,156,1]],[319,[18,1,20,54,111,43,155,2]],[320,[18,1,20,134,155,1]],[321,[18,1,20,134,155,1]],[322,[18,1,20,133,155,1]],[323,[19,1,21,132,155,1]],[324,[19,1,21,132,154,1]],[325,[19,1,21,132,154,1]],[326,[19,134,154,1]],[327,[20,1,22,131,154,1]],[328,[20,1,22,131,154,1]],[329,[20,1,22,131,154,1]],[330,[20,133,154,1]],[331,[21,132,154,1]],[332,[21,132,154,1]],[333,[21,132,154,1]],[334,[21,132,154,1]],[335,[22,1,24,129,154,1]],[336,[22,131,154,1]],[337,[22,2,25,128,154,1]],[338,[23,1,25,128,154,1]],[339,[23,130,154,1]],[340,[24,1,26,127,155,1]],[341,[24,1,26,127,155,1]],[342,[24,2,27,127,155,1]],[343,[25,1,27,127,155,1]],[344,[25,1,27,127,155,1]],[345,[26,1,28,127,156,1]],[346,[26,1,28,127,156,1]],[347,[26,124,151,4,156,1]],[348,[27,1,29,121,151,5,157,1]],[349,[27,1,29,121,152,4,157,1]],[350,[27,124,152,4,158,1]],[351,[28,123,153,4,158,1]],[352,[28,1,30,121,153,4,158,1]],[353,[28,123,154,4,159,1]],[354,[29,1,31,121,154,4,159,2]],[355,[29,1,31,122,155,4,160,1]],[356,[29,124,155,4,161,1]],[357,[30,123,155,4,161,1]],[358,[30,123,156,4,161,2]],[359,[30,1,32,122,156,5,162,1]],[360,[30,1,32,122,157,4,162,2]],[361,[30,125,157,5,163,1]],[362,[30,125,158,4,163,2]],[363,[30,2,33,124,159,4,164,1]],[364,[30,2,33,124,159,7]],[365,[30,2,33,124,160,4,165,1]],[366,[30,2,33,125,160,7]],[367,[30,2,33,126,161,4,166,1]],[368,[30,2,33,127,161,5,167,1]],[369,[30,2,33,127,162,4,167,1]],[370,[30,1,32,129,162,5,168,1]],[371,[30,1,32,130,163,4,168,1]],[372,[30,140]],[373,[29,139,169,2]],[374,[29,140,170,1]],[375,[29,1,31,133,165,7]],[376,[29,1,31,133,165,7]],[377,[28,137,166,7]],[378,[28,1,30,141,172,1]],[379,[28,144,173,1]],[380,[27,145,173,1]],[381,[27,1,29,144,174,1]],[382,[26,27,54,121]],[383,[26,1,28,20,58,1,60,116]],[384,[25,21,60,117]],[385,[25,1,27,18,61,114,176,1]],[386,[24,20,61,108,170,5,176,1]],[387,[23,2,26,17,62,107,171,7]],[388,[23,19,62,107,171,5,177,1]],[389,[22,2,25,16,64,112,177,2]],[390,[22,1,24,15,64,115]],[391,[21,18,64,113,178,1]],[392,[21,18,64,113,178,2]],[393,[20,18,64,114,179,1]],[394,[19,18,64,114,179,1]],[395,[19,18,64,117]],[396,[18,1,20,16,64,117]],[397,[18,1,20,15,64,115,180,1]],[398,[17,1,19,14,64,117]],[399,[16,1,18,15,64,116,181,1]],[400,[16,1,18,15,64,116,181,1]],[401,[15,1,17,15,64,116,181,1]],[402,[14,17,64,117]],[403,[13,17,64,117,182,1]],[404,[13,1,15,14,64,117,182,1]],[405,[12,17,64,117,182,1]],[406,[12,1,14,14,64,117]],[407,[11,1,13,14,64,118,183,1]],[408,[10,1,13,14,64,118,183,1]],[409,[10,1,12,14,64,118,183,1]],[410,[9,1,12,13,64,118,183,1]],[411,[9,1,11,14,64,118,183,1]],[412,[8,1,10,14,64,109,174,10]],[413,[8,1,10,13,64,119]],[414,[7,1,9,14,64,119]],[415,[6,2,9,13,64,119]],[416,[6,1,8,13,64,119]],[417,[6,1,8,13,64,119]],[418,[5,1,7,13,64,119]],[419,[5,1,7,12,64,119]],[420,[4,1,6,13,64,119]],[421,[4,1,6,12,64,119]],[422,[3,2,6,12,64,119]],[423,[3,1,5,12,64,119]],[424,[3,1,5,12,64,119]],[425,[5,11,64,119]],[426,[2,1,4,12,64,119]],[427,[2,1,4,11,64,118,183,1]],[428,[2,13,64,118,183,1]],[429,[3,12,64,118,183,1]],[430,[1,1,3,12,64,118,183,1]],[431,[1,1,3,11,64,118,183,1]],[432,[1,1,3,11,64,118]],[433,[0,1,2,12,64,119]],[434,[0,1,2,12,62,1,64,117,182,1]],[435,[0,1,2,12,62,1,64,117,182,1]],[436,[0,1,2,12,62,1,64,117]],[437,[0,1,2,12,64,118]],[438,[0,1,2,12,63,117,181,1]],[439,[0,1,2,12,62,118,181,1]],[440,[0,1,2,12,63,116,180,1]],[441,[0,14,62,117,180,1]],[442,[0,14,60,118,180,1]],[443,[0,14,60,118,179,1]],[444,[0,14,59,1,61,116,179,1]],[445,[2,12,58,119,178,1]],[446,[2,12,57,1,59,117,177,2]],[447,[0,1,2,12,56,119,177,1]],[448,[0,1,2,12,55,1,57,118,177,1]],[449,[0,1,2,12,56,118,176,1]],[450,[0,1,2,12,51,1,55,118,175,1]],[451,[2,12,50,1,52,121,175,1]],[452,[3,11,49,123,174,1]],[453,[1,1,3,11,49,1,51,120,173,1]],[454,[1,1,3,11,47,2,50,120,172,1]],[455,[3,12,46,124]],[456,[2,1,4,11,45,124,170,2]],[457,[2,1,4,12,44,124,169,2]],[458,[4,12,44,123,169,1]],[459,[3,1,5,11,43,123,167,2]],[460,[3,1,5,12,40,1,42,122,166,2]],[461,[4,1,6,11,41,123,165,2]],[462,[4,1,6,12,39,123,164,2]],[463,[5,1,7,11,38,1,40,121,163,2]],[464,[5,1,8,12,35,1,37,1,39,120,161,3]],[465,[6,1,8,13,30,1,37,121,160,2]],[466,[7,1,9,16,29,1,31,1,34,1,36,120,159,2]],[467,[7,1,10,18,30,125,157,2]],[468,[8,1,11,142,155,2]],[469,[8,2,12,139,154,1]],[470,[9,2,12,138,152,1]],[471,[10,2,13,134,150,2]],[472,[11,2,14,131,148,2]],[473,[12,2,15,128,146,2]],[474,[13,2,17,123,143,3]],[475,[15,1,18,118,141,3]],[476,[16,1,20,113,138,3]],[477,[18,1,21,109,135,3]],[478,[19,2,23,102,131,4]],[479,[21,2,25,95,127,4]],[480,[22,3,27,89,122,5]],[481,[24,3,30,77,116,6]],[482,[27,4,35,65,109,8]],[483,[31,3,39,50,104,6]],[484,[35,4,49,34,90,4,96,7]],[485,[40,5,82,6,92,2,95,1]],[486,[48,33,90,1,92,2,95,1]],[487,[87,1,91,1,96,2]],[488,[86,1,88,1,97,1]],[489,[86,1,92,1,97,1]],[490,[87,7,96,1]]]},"9:0":{"w":182,"h":494,"rows":[[235,[37,3]],[236,[36,6]],[237,[36,2,40,3]],[238,[36,3,42,2]],[239,[36,2,44,1]],[240,[35,2,42,1,44,1]],[241,[31,6,40,5]],[242,[29,9,41,2]],[243,[28,15]],[244,[26,16]],[245,[25,18]],[246,[24,19]],[247,[23,20]],[248,[22,21]],[249,[22,21]],[250,[21,22]],[251,[21,22]],[252,[20,23]],[253,[20,5,26,17]],[254,[19,24]],[255,[19,24]],[256,[18,25]],[257,[18,25]],[258,[18,25]],[259,[17,26]],[260,[17,26]],[261,[17,26]],[262,[16,27]],[263,[16,27]],[264,[16,27]],[265,[15,28]],[266,[15,28]],[267,[15,29]],[268,[15,29]],[269,[15,29]],[270,[15,29]],[271,[15,29]],[272,[15,30]],[273,[14,31]],[274,[14,31]],[275,[14,32,153,4]],[276,[14,32,152,7]],[277,[14,33,151,9]],[278,[14,33,72,1,150,11]],[279,[14,34,72,1,150,12]],[280,[14,35,71,2,149,14]],[281,[14,36,71,2,149,15]],[282,[14,37,71,2,149,15]],[283,[14,37,70,3,149,16]],[284,[15,37,70,3,149,16]],[285,[15,38,69,4,149,16]],[286,[15,40,68,5,149,17]],[287,[15,41,66,7,149,17]],[288,[15,45,63,10,149,17]],[289,[15,58,148,18]],[290,[15,58,148,19]],[291,[16,57,148,19]],[292,[16,57,148,19]],[293,[16,57,148,19]],[294,[16,57,147,20]],[295,[17,56,147,20]],[296,[17,56,147,20]],[297,[17,56,146,22]],[298,[17,56,146,22]],[299,[18,55,145,23]],[300,[18,55,145,23]],[301,[18,55,144,23]],[302,[18,55,143,24]],[303,[19,54,110,1,143,24]],[304,[19,54,110,1,142,25]],[305,[19,54,110,1,141,26]],[306,[20,53,110,2,141,26]],[307,[20,53,110,2,140,27]],[308,[20,53,110,3,139,28]],[309,[20,53,110,4,138,28]],[310,[21,52,110,5,136,30]],[311,[21,52,110,6,135,31]],[312,[21,52,110,8,133,33]],[313,[22,51,110,9,130,36]],[314,[22,51,110,55]],[315,[22,51,110,28,139,26]],[316,[23,50,110,55]],[317,[23,50,110,55]],[318,[23,50,110,54]],[319,[24,49,110,54]],[320,[24,49,110,54]],[321,[24,49,110,53]],[322,[25,50,106,57]],[323,[25,48,107,3,114,49]],[324,[25,41,107,1,115,47]],[325,[26,40,115,47]],[326,[26,40,109,1,111,1,114,47]],[327,[26,43,110,1,114,47]],[328,[27,40,115,45]],[329,[27,40,115,45]],[330,[27,40,115,44]],[331,[28,39,115,44]],[332,[28,39,115,43]],[333,[28,39,116,42]],[334,[28,39,116,42]],[335,[28,38,116,41]],[336,[29,37,116,41]],[337,[29,37,67,1,116,41]],[338,[29,40,116,40]],[339,[29,37,68,1,116,40]],[340,[29,37,70,1,116,40]],[341,[29,37,70,1,116,39]],[342,[29,37,70,1,110,1,116,39]],[343,[29,37,67,4,102,1,109,1,115,40]],[344,[29,37,97,1,106,1,108,2,115,40]],[345,[29,37,73,2,79,2,95,4,108,1,114,41]],[346,[29,47,77,29,107,47]],[347,[29,125]],[348,[29,125]],[349,[28,126]],[350,[28,126]],[351,[28,126]],[352,[28,126]],[353,[27,127]],[354,[27,128]],[355,[27,128]],[356,[27,128]],[357,[26,129]],[358,[26,113,141,14]],[359,[26,113,141,15]],[360,[25,114,141,15]],[361,[25,113,141,15]],[362,[24,114,140,17]],[363,[24,114,140,17]],[364,[23,114,140,18]],[365,[23,114,140,18]],[366,[23,114,140,18]],[367,[22,115,140,19]],[368,[22,115,140,20]],[369,[21,116,140,20]],[370,[21,116,140,21]],[371,[20,116,140,21]],[372,[20,56,77,59,139,23]],[373,[19,56,78,3,83,4,89,5,95,10,106,30,139,23]],[374,[19,47,116,20,139,24]],[375,[18,50,108,1,116,19,138,25]],[376,[18,51,108,1,116,19,138,26]],[377,[17,52,116,19,137,27]],[378,[16,53,116,19,137,28]],[379,[16,53,116,18,136,30]],[380,[15,54,116,18,135,31]],[381,[15,53,116,17,135,32]],[382,[14,53,116,17,135,32]],[383,[14,52,116,16,134,33]],[384,[13,53,116,16,134,34]],[385,[13,53,116,15,133,36]],[386,[12,55,116,15,133,36]],[387,[12,56,116,14,132,38]],[388,[11,58,116,13,131,39]],[389,[11,58,116,13,131,40]],[390,[10,59,116,12,130,41]],[391,[10,59,116,11,129,13,148,24]],[392,[9,60,116,11,129,11,149,23]],[393,[9,62,108,1,115,11,129,10,149,24]],[394,[8,63,108,2,115,10,128,11,148,25]],[395,[8,61,71,2,86,1,108,2,115,10,127,12,146,28]],[396,[7,68,77,30,108,16,127,12,144,30]],[397,[7,116,126,13,145,30]],[398,[7,116,125,15,144,31]],[399,[6,116,125,15,145,31]],[400,[6,69,77,45,124,18,147,29]],[401,[5,70,77,30,109,12,123,20,146,30]],[402,[5,59,103,2,116,4,123,54]],[403,[5,59,116,3,122,55]],[404,[5,59,116,2,121,57]],[405,[4,60,116,1,120,58]],[406,[4,60,116,1,120,58]],[407,[4,60,119,60]],[408,[3,61,119,60]],[409,[3,61,118,61]],[410,[3,61,118,62]],[411,[2,62,118,62]],[412,[2,62,118,62]],[413,[2,62,118,62]],[414,[2,62,118,63]],[415,[1,63,118,63]],[416,[1,63,118,63]],[417,[1,63,118,63]],[418,[1,63,118,63]],[419,[1,64,118,41,162,20]],[420,[1,64,118,37,163,19]],[421,[0,65,115,1,118,36,164,18]],[422,[0,66,114,1,117,37,165,17]],[423,[0,69,114,40,166,16]],[424,[0,71,112,42,166,16]],[425,[0,72,111,43,166,16]],[426,[0,72,111,43,166,16]],[427,[0,71,112,42,165,17]],[428,[0,71,112,42,165,17]],[429,[0,71,112,44,164,18]],[430,[0,71,112,45,163,19]],[431,[0,71,112,48,162,20]],[432,[0,71,112,70]],[433,[0,71,110,1,112,70]],[434,[0,71,110,1,112,70]],[435,[0,71,110,1,112,70]],[436,[0,71,110,1,112,70]],[437,[0,71,109,73]],[438,[0,72,109,73]],[439,[0,72,111,71]],[440,[0,72,111,71]],[441,[1,71,110,72]],[442,[1,71,75,2,85,2,88,3,92,1,94,8,108,74]],[443,[1,181]],[444,[1,181]],[445,[1,181]],[446,[2,180]],[447,[2,179]],[448,[2,179]],[449,[2,179]],[450,[3,178]],[451,[3,178]],[452,[3,177]],[453,[4,176]],[454,[4,176]],[455,[5,174]],[456,[5,174]],[457,[6,172]],[458,[6,172]],[459,[7,170]],[460,[7,170]],[461,[8,168]],[462,[9,167]],[463,[10,162,173,3]],[464,[10,162,173,2]],[465,[11,160,172,2]],[466,[12,162]],[467,[13,160]],[468,[14,158]],[469,[15,153,169,2]],[470,[16,153]],[471,[17,151]],[472,[18,146,165,2]],[473,[20,146]],[474,[21,144]],[475,[22,141]],[476,[23,139]],[477,[25,136]],[478,[27,132]],[479,[29,128]],[480,[31,124]],[481,[33,120]],[482,[35,115]],[483,[37,111]],[484,[40,105]],[485,[44,96]],[486,[49,86]],[487,[55,73]],[488,[66,25,92,18]],[489,[87,8]],[490,[85,4,91,5]],[491,[85,3,91,6]],[492,[85,3,91,6]],[493,[85,11]]]},"9:1":{"w":194,"h":487,"rows":[[224,[117,2,150,2,156,3]],[225,[117,2,150,3,154,5]],[226,[117,2,150,10]],[227,[117,2,152,2,157,6]],[228,[117,2,151,4,156,9]],[229,[117,2,151,16]],[230,[117,2,151,17]],[231,[117,2,150,19]],[232,[117,2,150,20]],[233,[117,2,149,7,157,14]],[234,[117,2,149,22]],[235,[117,2,149,23]],[236,[117,2,149,24]],[237,[117,2,149,24]],[238,[117,2,148,26]],[239,[117,2,148,26]],[240,[117,2,148,27]],[241,[117,2,148,27]],[242,[117,2,148,28]],[243,[117,2,148,28]],[244,[117,2,148,28]],[245,[117,2,148,29]],[246,[117,2,148,29]],[247,[117,2,148,29]],[248,[117,2,147,31]],[249,[117,2,147,31]],[250,[117,2,147,31]],[251,[117,2,147,31]],[252,[117,2,147,31]],[253,[117,2,146,33]],[254,[117,2,146,33]],[255,[117,2,146,33]],[256,[117,2,145,34]],[257,[35,2,117,2,145,34]],[258,[32,8,117,2,144,35]],[259,[30,11,117,2,144,35]],[260,[29,13,117,2,143,36]],[261,[28,14,117,2,143,36]],[262,[27,15,117,2,143,36]],[263,[26,7,34,8,117,3,142,37]],[264,[26,6,33,10,117,3,142,37]],[265,[25,18,117,3,141,7,149,30]],[266,[25,18,117,3,140,39]],[267,[24,19,117,3,139,8,148,31]],[268,[24,19,117,4,138,8,147,32]],[269,[23,20,117,5,137,42]],[270,[23,20,117,6,135,44]],[271,[23,20,117,7,133,46]],[272,[22,22,117,61]],[273,[22,22,117,24,142,36]],[274,[22,22,117,23,141,37]],[275,[22,23,117,61]],[276,[21,24,117,61]],[277,[21,24,117,60]],[278,[21,24,117,60]],[279,[21,25,117,60]],[280,[21,25,117,60]],[281,[21,25,117,59]],[282,[20,27,117,59]],[283,[20,27,117,59]],[284,[20,28,117,59]],[285,[20,28,117,59]],[286,[20,29,117,58]],[287,[20,30,117,58]],[288,[21,29,117,58]],[289,[21,30,117,57]],[290,[21,31,117,57]],[291,[21,33,77,1,117,57]],[292,[21,34,75,3,117,56]],[293,[21,36,73,5,117,56]],[294,[22,39,71,7,117,55]],[295,[22,56,117,55]],[296,[22,56,117,55]],[297,[22,56,117,54]],[298,[23,55,117,54]],[299,[23,55,117,54]],[300,[23,55,117,53]],[301,[23,55,117,53]],[302,[24,54,117,52]],[303,[24,54,117,52]],[304,[24,54,117,52]],[305,[25,53,117,51]],[306,[25,53,117,51]],[307,[26,52,117,51]],[308,[26,52,117,50]],[309,[26,52,117,50]],[310,[27,51,117,50]],[311,[27,51,117,49]],[312,[28,50,117,49]],[313,[28,50,117,49]],[314,[28,50,117,49]],[315,[29,49,117,48]],[316,[29,49,117,48]],[317,[29,136]],[318,[29,136]],[319,[30,135]],[320,[30,134]],[321,[30,134]],[322,[31,133]],[323,[31,133]],[324,[31,133]],[325,[31,133]],[326,[32,132]],[327,[32,132]],[328,[32,132]],[329,[32,132]],[330,[32,132]],[331,[32,132]],[332,[32,132]],[333,[32,132]],[334,[32,132]],[335,[32,132]],[336,[32,132]],[337,[32,133]],[338,[32,133]],[339,[32,133]],[340,[32,134]],[341,[32,134]],[342,[32,134]],[343,[32,135]],[344,[31,136]],[345,[31,43,77,1,94,6,117,1,120,48]],[346,[31,42,123,45]],[347,[31,42,123,45]],[348,[30,43,123,46]],[349,[30,43,123,46]],[350,[30,43,123,47]],[351,[29,44,123,47]],[352,[29,44,75,1,123,48]],[353,[28,45,123,48]],[354,[28,45,123,49]],[355,[27,46,123,49]],[356,[27,46,123,50]],[357,[26,47,123,51]],[358,[25,48,123,51]],[359,[25,22,49,24,123,51]],[360,[24,20,55,18,123,52]],[361,[24,18,44,2,57,16,123,52]],[362,[23,18,58,15,123,53]],[363,[23,16,59,14,123,53]],[364,[22,16,61,12,123,54]],[365,[21,17,61,12,123,54]],[366,[21,16,63,10,123,55]],[367,[20,16,64,9,123,56]],[368,[19,17,64,9,123,56]],[369,[19,16,65,8,123,57]],[370,[18,16,65,8,123,57]],[371,[17,17,65,8,123,58]],[372,[16,17,65,8,123,59]],[373,[16,16,65,8,123,59]],[374,[15,17,65,8,123,60]],[375,[15,16,65,8,123,60]],[376,[14,16,65,8,123,61]],[377,[14,16,65,8,123,61]],[378,[13,16,65,8,123,62]],[379,[13,16,65,8,123,62]],[380,[13,15,65,8,123,62]],[381,[12,16,65,8,123,63]],[382,[12,15,65,8,123,63]],[383,[11,15,65,8,123,64]],[384,[11,15,65,8,123,64]],[385,[10,15,65,8,123,65]],[386,[9,15,27,1,65,8,123,65]],[387,[9,15,65,8,123,65]],[388,[8,15,65,8,123,66]],[389,[8,15,65,8,123,66]],[390,[7,15,65,8,123,66]],[391,[7,15,65,8,123,67]],[392,[7,14,65,8,123,67]],[393,[6,15,65,8,123,67]],[394,[6,14,65,8,123,68]],[395,[5,15,65,8,123,68]],[396,[5,14,65,8,123,68]],[397,[5,14,65,8,123,68]],[398,[4,15,65,8,123,69]],[399,[4,14,65,8,123,69]],[400,[4,14,65,8,123,69]],[401,[3,15,64,9,123,69]],[402,[3,14,64,9,123,70]],[403,[3,14,63,10,123,70]],[404,[3,14,63,10,123,70]],[405,[2,14,62,11,123,70]],[406,[2,14,60,13,123,70]],[407,[2,13,59,14,123,70]],[408,[2,13,57,16,123,71]],[409,[1,14,56,17,123,71]],[410,[1,14,54,19,123,71]],[411,[1,13,53,20,123,71]],[412,[1,13,52,21,123,71]],[413,[0,14,51,22,123,71]],[414,[0,14,49,24,123,71]],[415,[0,14,48,25,123,71]],[416,[0,14,46,27,123,71]],[417,[0,14,45,28,123,71]],[418,[0,14,43,30,123,71]],[419,[0,14,38,1,43,30,123,71]],[420,[0,14,38,35,123,71]],[421,[0,14,39,34,123,71]],[422,[0,14,38,35,123,71]],[423,[0,14,37,36,123,71]],[424,[0,15,35,38,123,71]],[425,[0,15,34,38,123,71]],[426,[0,15,32,40,123,71]],[427,[0,17,31,42,123,71]],[428,[0,18,30,43,123,71]],[429,[0,20,28,47,123,71]],[430,[0,193]],[431,[0,193]],[432,[0,193]],[433,[1,192]],[434,[1,191]],[435,[1,1,3,189]],[436,[1,191]],[437,[2,189]],[438,[2,189]],[439,[2,189]],[440,[2,188]],[441,[2,188]],[442,[3,186]],[443,[3,186]],[444,[3,186]],[445,[4,184]],[446,[4,184]],[447,[5,182]],[448,[5,181]],[449,[6,180]],[450,[6,179]],[451,[7,177]],[452,[8,175]],[453,[8,175]],[454,[9,173]],[455,[10,171]],[456,[10,170]],[457,[11,168]],[458,[12,166]],[459,[13,164]],[460,[14,162]],[461,[14,161]],[462,[15,159]],[463,[16,157]],[464,[17,155]],[465,[18,153]],[466,[20,149]],[467,[21,146]],[468,[23,142]],[469,[25,139]],[470,[26,136]],[471,[28,132]],[472,[30,128]],[473,[31,125]],[474,[33,121]],[475,[36,115]],[476,[38,7,46,102]],[477,[42,103]],[478,[46,8,57,84]],[479,[51,84]],[480,[57,21,82,26,110,18]],[481,[66,52]],[482,[80,16,97,5]],[483,[92,9]],[484,[90,7,99,3]],[485,[90,5,97,1,99,3]],[486,[90,6,97,5]]]},"10:0":{"w":182,"h":502,"rows":[[239,[37,1]],[240,[33,1,38,3]],[241,[33,2,40,2]],[242,[34,2,37,6]],[243,[34,1,39,3]],[244,[33,1,39,1]],[245,[39,1]],[246,[27,1,39,2]],[247,[25,1,33,1,36,1,39,3]],[248,[36,1,39,1,41,2]],[249,[28,1,37,1,40,1]],[250,[22,1,26,1,37,1,39,1,43,1,72,1]],[251,[21,1,30,1,33,2,38,2,72,1]],[252,[20,1,23,1,31,1,33,1,36,1,39,2,44,1,72,1]],[253,[22,1,29,2,35,1,37,1,39,2,44,2,72,1]],[254,[19,1,21,2,35,1,40,1,43,1,45,1,72,1]],[255,[18,1,21,1,29,1,35,1,43,1,45,1,72,1]],[256,[18,1,20,3,30,1,45,2,72,1]],[257,[41,2,46,1,72,1]],[258,[19,2,39,1,46,1,72,1]],[259,[19,1,25,1,39,1,42,1,44,1,46,1,72,1]],[260,[24,1,42,1,44,1,46,1,72,1]],[261,[27,4,42,1,46,1,72,1]],[262,[26,5,46,1,72,1]],[263,[18,1,23,8,42,1,46,1,72,1]],[264,[23,12,46,1,72,1]],[265,[25,11,47,1,72,1]],[266,[24,15,47,1,72,1]],[267,[23,16,47,1,72,1]],[268,[23,16,47,1,72,1]],[269,[22,18,47,1,72,1]],[270,[22,17,47,1,72,1]],[271,[13,1,23,16,47,1,72,1]],[272,[22,16,48,1,72,1]],[273,[23,14,46,1,48,1,72,1]],[274,[13,1,23,14,45,1,48,1,72,1]],[275,[13,1,24,14,42,1,44,1,48,1,72,1]],[276,[13,1,24,15,47,1,49,1,72,1]],[277,[13,1,24,15,46,2,49,1,72,1]],[278,[13,1,24,15,45,1,72,1]],[279,[13,1,24,16,50,1,72,1]],[280,[13,1,24,16,46,1,51,1,71,2]],[281,[13,1,15,1,24,18,49,1,51,1,71,2]],[282,[13,1,15,2,24,18,49,2,52,1,71,2]],[283,[13,1,15,2,24,19,49,2,52,2,70,2]],[284,[13,1,15,2,24,19,46,1,50,2,53,2,69,2,72,1]],[285,[13,1,15,2,24,20,50,1,52,1,54,2,69,1,72,1]],[286,[13,1,16,1,24,20,50,4,55,3,68,1]],[287,[16,1,24,21,55,1,57,3,66,2]],[288,[13,1,24,22,52,1,57,8]],[289,[13,1,25,22]],[290,[25,22,51,1]],[291,[25,23,144,5,150,1]],[292,[14,1,25,25,142,2,151,2]],[293,[25,26,141,1,144,1,148,1,150,1,153,2]],[294,[25,28,72,1,140,1,142,1,153,1,155,1]],[295,[25,29,65,1,72,1,139,1,141,1,153,2,156,1]],[296,[14,1,25,31,65,1,72,1,138,1,140,1,154,2,157,1]],[297,[15,1,18,1,26,32,66,1,68,1,71,2,138,1,154,3,158,1]],[298,[15,1,18,1,26,32,59,5,65,3,70,3,138,1,156,1,158,1]],[299,[15,1,26,33,61,1,64,2,67,2,70,3,137,1,139,1,155,3,159,1]],[300,[15,1,18,1,26,32,59,5,66,7,137,1,139,1,156,2,159,1]],[301,[26,40,67,6,137,1,139,2,158,1,160,1]],[302,[16,1,18,1,27,30,58,9,69,1,71,2,136,2,139,1,148,2,153,1]],[303,[16,1,27,41,70,3,136,2,139,1,147,4,152,1,161,1]],[304,[16,1,19,1,27,30,58,12,72,1,136,1,138,2,142,1,147,4,159,1,161,1]],[305,[17,1,19,1,26,31,58,15,136,4,147,1,150,2,158,1,160,2]],[306,[17,1,20,1,27,46,135,4,144,1,147,5,153,1,160,1,162,1]],[307,[17,1,20,1,28,45,135,4,144,1,146,7,159,2,162,1]],[308,[17,1,20,1,27,46,135,4,146,7,161,1]],[309,[18,1,28,45,134,5,146,7,154,1,161,1]],[310,[18,1,29,44,134,1,136,2,145,9,163,1]],[311,[18,1,29,44,134,1,136,2,140,1,145,9]],[312,[19,1,22,1,29,44,133,1,136,2,145,9,163,1]],[313,[19,1,22,2,29,44,132,2,135,2,144,10,163,1]],[314,[22,1,29,44,131,2,136,1,144,10,164,1]],[315,[20,1,22,2,29,44,130,2,134,1,143,12,164,1]],[316,[20,1,29,44,129,3,133,1,141,1,143,12,164,1]],[317,[29,1,31,42,129,2,133,1,140,1,142,13,164,1]],[318,[21,1,30,1,32,41,110,1,128,2,131,1,142,13,164,1]],[319,[21,1,28,1,33,40,111,1,126,3,130,2,141,14,164,1]],[320,[33,40,111,3,125,2,129,2,138,1,140,15,164,1]],[321,[22,1,34,39,110,2,114,11,128,1,137,1,139,16,156,1,164,1]],[322,[22,1,34,39,110,1,116,5,125,2,136,1,139,16,156,1,164,1]],[323,[23,1,34,39,110,1,114,1,116,9,135,1,138,17,156,1,164,1]],[324,[23,1,34,39,110,1,118,7,136,19,164,1]],[325,[23,2,26,1,34,39,110,2,135,20,164,1]],[326,[24,1,35,38,111,3,131,1,134,21,164,1]],[327,[24,2,27,1,35,73,119,2,128,2,132,24,164,1]],[328,[25,1,35,74,112,2,125,2,130,25,164,1]],[329,[25,1,35,78,116,1,128,23,152,3,164,1]],[330,[35,82,124,27,153,1,164,1]],[331,[26,1,36,118,155,1,164,1]],[332,[26,1,36,31,68,40,110,44,155,1]],[333,[37,41,79,1,81,73,163,1]],[334,[27,1,37,117,163,1]],[335,[27,1,37,117,160,1,163,1]],[336,[27,1,37,116,160,1]],[337,[28,1,37,116,154,1,160,1,163,1]],[338,[38,115,154,1,160,1,162,1]],[339,[28,1,38,115,159,1,162,1]],[340,[28,1,38,115,162,1]],[341,[28,1,38,114,160,1,162,1]],[342,[28,2,38,114,153,1,162,1]],[343,[28,2,38,114,161,1]],[344,[28,2,38,113,161,1]],[345,[28,2,39,112,158,1,161,1]],[346,[28,2,38,113,158,1,160,1]],[347,[28,2,38,113,157,2,160,1]],[348,[28,2,39,111,151,1,157,2,160,1]],[349,[28,1,38,112,151,1,157,1,159,2]],[350,[28,1,38,22,61,89,154,1,157,1,159,1]],[351,[28,1,38,111,156,2,159,1]],[352,[28,1,38,111,156,1,158,2]],[353,[28,1,36,113,158,1]],[354,[27,3,37,111,149,1,158,1]],[355,[27,1,29,1,37,111,149,1,158,1]],[356,[27,1,29,1,33,1,37,111,157,2]],[357,[27,1,29,1,37,20,58,89,155,1,157,1]],[358,[26,1,28,3,36,111,155,1,157,1]],[359,[26,1,29,1,36,111,156,2]],[360,[26,1,29,1,36,20,57,89,147,1,156,1]],[361,[25,1,28,2,36,110,156,1]],[362,[25,1,28,1,36,106,143,2,155,2]],[363,[24,1,27,2,34,111,146,1,155,1]],[364,[24,1,26,3,34,111,155,1]],[365,[23,2,26,2,34,110,154,2]],[366,[23,1,25,3,33,111,145,1,154,1]],[367,[22,2,25,1,33,111,153,2]],[368,[22,1,24,2,33,110,153,2]],[369,[22,1,24,2,32,111,151,1,153,1]],[370,[21,1,23,3,32,111,144,1,151,1,153,1]],[371,[20,2,23,2,31,112,147,1,149,1,152,2]],[372,[20,1,22,3,31,112,152,1]],[373,[19,1,22,2,30,71,104,40,152,1]],[374,[19,1,21,3,30,47,80,21,104,40,152,1]],[375,[18,1,21,2,25,1,30,45,76,3,80,3,86,15,104,40,152,1]],[376,[18,1,20,2,29,45,81,1,87,6,94,1,97,3,105,38,152,1]],[377,[17,1,28,46,81,1,88,4,94,1,103,5,112,31,152,1]],[378,[16,2,20,1,28,38,69,2,80,2,88,1,90,2,103,3,112,31,152,1]],[379,[16,1,19,2,27,39,76,2,81,2,88,1,91,1,103,3,113,30,151,1]],[380,[15,2,18,2,26,40,71,3,76,3,81,2,88,1,90,2,98,1,104,2,113,30,151,2]],[381,[15,1,17,1,19,1,26,40,76,1,81,1,98,1,105,1,113,30,151,1]],[382,[14,1,17,1,25,41,76,1,98,1,105,1,113,30,151,1]],[383,[14,1,16,1,25,41,72,1,114,29,152,1]],[384,[13,2,24,42,71,3,114,30]],[385,[13,1,15,1,22,44,70,4,91,1,104,1,114,30,152,1]],[386,[12,1,15,2,23,50,91,2,103,1,107,3,113,31,152,1]],[387,[12,1,14,2,22,51,78,1,83,1,85,1,87,6,104,40,152,1]],[388,[11,1,14,2,22,52,76,1,78,18,97,1,99,2,103,41,152,1]],[389,[11,1,13,3,21,53,75,27,103,40,153,1]],[390,[13,1,21,121,153,1]],[391,[10,1,21,121,153,1]],[392,[9,1,12,2,20,119,154,1]],[393,[9,1,11,2,20,114,140,1,144,1]],[394,[11,2,19,111]],[395,[8,1,10,2,18,32,52,74]],[396,[10,2,14,1,18,33,53,70,141,1,145,1,147,1,155,1]],[397,[7,1,9,2,14,2,18,34,54,69,131,2,147,1,155,2]],[398,[9,2,14,1,17,35,55,15,71,51,146,2]],[399,[6,1,9,2,13,1,17,36,55,66,126,1,148,1,157,1]],[400,[5,1,8,2,13,1,15,38,56,64,125,1,148,1,154,1,157,1]],[401,[5,1,8,2,12,1,15,37,53,2,57,6,64,10,75,45,125,1,132,1,134,1,147,1,154,1]],[402,[5,1,7,2,12,1,15,40,58,2,66,3,73,10,84,35,125,2,130,2,134,3,152,1,156,1]],[403,[11,2,14,41,58,1,60,1,66,5,72,5,85,8,94,25,125,1,135,2,148,1,155,1,158,1]],[404,[4,1,7,2,12,43,62,2,67,10,85,34,135,2,153,1,155,1,157,1]],[405,[4,1,12,43,61,2,67,2,70,11,84,17,104,14,126,1,135,1,149,1,156,1,159,1]],[406,[3,1,12,46,62,1,67,2,71,2,74,7,84,13,98,20,125,1,132,1,135,1,157,2,160,1]],[407,[3,1,5,1,12,43,68,1,75,5,85,12,98,19,134,1,150,1,159,1]],[408,[3,1,5,1,12,43,67,2,75,5,85,5,93,24,135,1,158,4]],[409,[5,1,12,39,53,2,62,4,67,2,76,4,85,5,94,7,102,14,151,3,156,1]],[410,[2,1,12,39,53,2,61,8,76,4,84,6,94,6,102,14,119,1,152,2,159,1]],[411,[2,1,12,39,53,2,61,4,66,3,76,4,84,6,94,6,102,15,119,1,152,6]],[412,[1,2,4,1,12,43,61,3,67,2,76,4,85,5,94,5,102,14,153,4,158,1]],[413,[11,44,61,2,68,1,76,5,85,5,94,4,103,16,154,4,159,1]],[414,[3,2,11,44,61,2,68,1,75,6,85,5,94,3,103,6,110,11,154,4,159,1,161,1]],[415,[3,1,10,44,61,2,68,1,75,6,86,4,94,3,103,6,111,6,119,3,155,4,164,1,166,1]],[416,[1,1,3,2,11,43,61,2,68,1,74,7,86,4,95,3,103,2,106,1,108,1,111,6,119,4,156,2]],[417,[1,1,3,2,11,38,50,4,55,1,61,2,68,1,72,10,86,4,95,4,103,4,111,2,115,1,120,4,156,1,158,1,161,1,165,1,167,1]],[418,[0,2,3,2,11,42,55,2,61,2,68,1,71,7,80,1,86,5,94,6,103,4,111,2,116,1,123,2,162,1,164,2]],[419,[0,1,3,1,11,38,51,2,55,2,61,2,71,10,85,6,93,6,103,2,111,2,114,2,124,2,140,1,157,1,165,1]],[420,[0,1,3,1,11,39,51,1,55,2,61,3,71,5,78,3,85,6,93,6,103,1,105,1,112,3,116,1,125,2,136,1,158,1]],[421,[0,1,2,2,11,39,51,1,55,2,61,1,64,2,71,12,86,5,93,6,103,12,117,2,126,2,142,1]],[422,[0,1,2,2,11,39,51,2,55,2,60,3,64,10,75,8,85,7,93,2,104,11,116,3,126,2,137,1,140,2,170,1]],[423,[0,1,2,2,11,39,51,2,55,2,59,3,64,3,73,1,77,10,89,2,93,1,105,10,116,6,127,2,160,1,169,1]],[424,[0,1,2,2,11,38,51,3,55,2,59,3,64,2,77,6,105,20,127,3,139,1,169,2]],[425,[2,1,11,43,55,2,59,3,64,1,72,1,77,6,88,2,91,1,94,1,100,1,106,5,112,11,124,1,127,4,140,6,163,1,170,3]],[426,[2,1,11,46,59,3,64,1,76,7,88,4,99,1,112,9,123,3,128,3,162,1,164,1,170,3]],[427,[0,1,2,1,11,46,59,3,64,1,72,1,77,4,88,4,112,9,123,3,129,3,164,1,170,4]],[428,[0,1,2,1,11,46,59,2,64,1,78,3,88,4,112,9,123,4,129,4,171,2]],[429,[0,1,10,48,59,3,64,1,70,1,77,3,81,2,94,1,98,2,111,7,119,1,123,11,165,1,173,1]],[430,[0,1,10,47,59,3,64,2,68,3,73,1,75,1,77,2,91,1,95,1,97,3,111,5,123,11,166,1,169,1,175,1]],[431,[0,1,10,48,59,3,63,4,68,3,75,1,78,1,87,1,94,7,105,1,111,5,123,12,165,1,175,1]],[432,[0,1,11,42,54,8,63,4,68,3,75,1,77,2,81,1,88,5,95,2,99,2,107,2,110,6,123,13,147,1,167,1,170,1]],[433,[0,1,11,63,76,7,90,3,96,2,99,1,103,1,107,2,111,5,123,14,147,3,152,1,157,1,166,1]],[434,[0,1,2,1,11,63,75,18,94,4,99,3,103,1,105,11,123,14,147,4,152,1,157,1,168,1,171,1]],[435,[0,1,2,1,11,58,70,40,111,6,123,15,147,4,154,1,157,1]],[436,[0,1,2,1,11,51,65,53,123,16,148,3,153,1]],[437,[0,1,2,1,10,52,65,56,123,17,149,2,168,1,170,1]],[438,[0,1,12,51,64,5,71,37,109,12,123,17,149,2,170,1]],[439,[3,1,12,51,64,5,71,50,122,19,169,1]],[440,[0,2,3,1,12,57,71,20,93,49,177,1,179,1]],[441,[1,1,3,2,10,1,12,69,84,8,93,50]],[442,[1,1,3,1,10,70,84,59,170,1]],[443,[1,1,4,1,11,70,83,61,172,1]],[444,[1,1,4,1,12,69,83,62,172,1]],[445,[2,1,4,1,13,69,83,63,172,1]],[446,[2,1,13,67,81,65,171,2]],[447,[2,1,14,66,81,1,83,64,171,1,173,1]],[448,[2,1,14,66,81,1,83,65,159,2,173,1,181,1]],[449,[3,1,13,1,15,76,93,56,159,4,164,1,173,1,175,1]],[450,[3,1,8,1,15,75,93,57,158,1,160,3,173,1,175,1,181,1]],[451,[4,1,16,74,94,57,173,1,175,1,181,1]],[452,[4,1,16,74,94,58,160,2]],[453,[5,1,16,52,76,1,104,1,111,42]],[454,[5,1,8,1,17,51,111,43]],[455,[8,1,18,50,76,1,111,44]],[456,[6,1,19,49,75,2,111,45,173,1]],[457,[19,49,75,2,111,46,171,3]],[458,[7,1,20,48,111,48,171,3,175,1]],[459,[8,1,20,48,104,1,106,1,111,50,170,4,175,1,181,1]],[460,[8,1,12,1,22,46,97,2,102,5,111,52,168,8,181,1]],[461,[9,1,21,47,94,4,101,2,104,1,111,63,181,1]],[462,[10,1,23,45,83,1,86,1,91,7,101,2,104,1,111,63,181,1]],[463,[10,1,16,1,24,44,76,2,82,1,86,1,90,2,93,4,102,1,111,64,181,1]],[464,[11,1,25,43,75,2,86,2,92,1,95,2,102,1,111,64]],[465,[12,1,25,43,75,2,86,1,111,61,176,1]],[466,[13,1,27,41,75,1,111,59,180,1]],[467,[13,1,27,41,75,1,111,59,178,1,180,1]],[468,[14,1,29,39,75,1,111,59,180,1]],[469,[15,2,28,40,111,58]],[470,[16,2,32,36,75,1,95,1,104,2,111,58,179,1]],[471,[17,2,34,34,75,1,95,1,104,2,111,58,174,2]],[472,[18,1,25,1,35,33,74,2,85,1,101,1,104,2,111,57]],[473,[19,2,38,30,76,1,86,1,96,1,101,1,111,56,178,1]],[474,[20,2,25,1,39,29,96,1,112,55,177,1]],[475,[22,1,27,1,39,28,111,54,175,1,177,1]],[476,[23,2,28,2,40,27,111,53,172,1,176,1]],[477,[25,2,29,1,42,1,46,22,111,52,176,1]],[478,[26,2,48,20,75,1,78,1,85,1,110,52,175,1]],[479,[27,2,40,1,50,1,52,19,72,33,110,50,174,2]],[480,[29,2,39,2,57,102,169,1,171,1,174,1]],[481,[31,1,39,3,59,100,173,2]],[482,[32,3,40,2,43,1,48,1,63,93,168,1,172,1]],[483,[34,3,40,2,51,1,63,91,172,1]],[484,[36,3,55,2,64,3,68,84,171,1]],[485,[38,3,47,1,58,1,75,75,169,2]],[486,[40,4,51,1,55,1,78,70,168,2]],[487,[43,4,52,2,66,1,81,2,87,8,96,46,158,1,167,1]],[488,[46,4,110,26,165,2]],[489,[50,4,120,12,164,1]],[490,[53,5,85,1,87,2,125,2,132,3,151,2,162,2]],[491,[57,4,93,1,96,1,147,2,151,2,160,2]],[492,[62,1,64,2,107,4,126,5,142,1,144,1,158,2]],[493,[65,6,91,4,98,1,138,1,146,1,148,2,155,3]],[494,[71,7,128,7,143,1,153,3]],[495,[78,1,83,1,133,3,148,5]],[496,[83,5,91,1,143,5]],[497,[85,3,91,1,93,2,96,13,111,1,134,9]],[498,[84,5,90,1,93,7,101,36]],[499,[93,1]],[500,[85,1]],[501,[85,5,91,4]]]},"10:1":{"w":190,"h":486,"rows":[[223,[141,5,148,1]],[224,[142,4,148,3]],[225,[143,2,149,4]],[226,[142,3,148,1,154,2]],[227,[142,5,148,5,156,2]],[228,[141,2,146,1,149,2,158,2]],[229,[140,2,145,1,148,1,159,2]],[230,[140,1,158,1,160,2]],[231,[139,1,150,3,161,1]],[232,[138,2,162,1]],[233,[138,1,140,1,163,1]],[234,[138,1,161,1]],[235,[138,1,164,1]],[236,[137,2,165,1]],[237,[137,1]],[238,[137,1,140,1,166,1]],[239,[137,1,141,1,166,1]],[240,[137,1,164,1,167,1]],[241,[137,1,167,1]],[242,[137,1,164,1,168,1]],[243,[136,2,165,1,168,1]],[244,[136,1,139,1,168,1]],[245,[136,1,139,1,165,1,168,1]],[246,[136,1,138,2,151,4]],[247,[136,1,138,2,150,6,169,1]],[248,[136,1,138,1,152,4]],[249,[135,2,138,2,151,6,169,1]],[250,[135,2,138,1,151,5]],[251,[135,1,137,2,152,4]],[252,[135,1,137,2,152,5]],[253,[134,2,137,1,139,1,147,1,151,5,158,1]],[254,[134,1,137,1,146,3,150,5,158,1]],[255,[133,2,146,4,151,3,158,2]],[256,[133,2,136,1,146,9,159,1]],[257,[133,1,135,1,145,10,159,1]],[258,[132,1,134,3,144,11,159,1]],[259,[132,1,135,1,144,10]],[260,[131,1,135,1,141,1,143,2,146,8]],[261,[131,1,135,1,143,2,148,1,150,4,159,2]],[262,[130,1,134,1,142,3,148,7,156,5,170,1]],[263,[129,2,132,1,141,5,148,7,156,1,158,3,170,1]],[264,[128,1,131,1,141,13,156,5]],[265,[127,1,130,1,140,14,156,5,170,1]],[266,[114,1,125,2,129,1,140,15,156,1,158,4]],[267,[114,3,123,3,128,2,138,17,156,1,158,4,170,1]],[268,[114,13,128,1,133,1,138,23]],[269,[114,12,127,2,138,22]],[270,[36,4,114,13,139,21,170,1]],[271,[33,5,39,4,121,2,130,1,140,19,170,1]],[272,[31,2,37,1,42,3,134,2,137,22]],[273,[29,2,34,8,44,2,133,4,138,21,169,1]],[274,[28,2,32,2,40,1,45,2,132,1,134,20,156,2,169,1]],[275,[28,1,30,4,39,1,41,1,46,1,132,23,156,2,162,1]],[276,[26,1,46,2,127,29,162,1]],[277,[26,1,47,1,114,3,118,1,123,30,154,1,158,1,162,1,164,1]],[278,[47,1,114,1,117,7,125,29,164,2,168,1]],[279,[44,1,48,1,118,7,127,27,164,2,168,1]],[280,[41,1,45,1,48,1,114,39,165,1,168,1]],[281,[45,2,48,1,114,38,154,2,161,1]],[282,[44,3,48,1,114,39,154,4,164,1,167,1]],[283,[22,1,25,1,46,1,48,2,114,44,164,1,167,1]],[284,[22,1,25,1,46,2,49,1,114,43,162,1,164,1,166,1]],[285,[24,1,45,3,49,1,114,43,162,2,166,1]],[286,[47,1,49,1,114,43,166,1]],[287,[34,4,114,42,163,1]],[288,[34,5,50,1,114,42,162,2,165,1]],[289,[33,5,39,1,50,1,76,1,114,42,162,1,165,1]],[290,[32,5,40,1,76,1,114,41,162,1,164,1]],[291,[32,6,51,1,76,1,114,41,164,1]],[292,[31,5,41,1,52,1,75,2,114,41,164,1]],[293,[30,7,40,2,50,1,52,1,75,2,114,41,161,1,163,1]],[294,[30,5,37,5,50,1,53,1,74,3,114,38,154,1]],[295,[30,4,37,5,50,1,54,1,74,1,114,39]],[296,[30,13,51,2,55,1,72,2,75,1,114,38,158,1,162,1]],[297,[30,13,52,1,56,1,71,4,114,40,159,1,162,1]],[298,[30,2,33,11,54,1,58,1,69,6,114,39,159,1,162,1]],[299,[30,2,33,10,44,1,59,2,65,5,71,3,114,39,159,1,161,1]],[300,[30,2,34,6,55,4,62,10,114,38,161,1]],[301,[30,11,54,1,56,6,66,5,114,39,161,1]],[302,[21,1,30,13,44,1,56,1,58,13,114,38,154,1,160,1]],[303,[21,1,30,16,57,12,114,37,154,1,156,1,160,1]],[304,[21,1,30,16,114,36,160,1]],[305,[21,1,30,14,45,1,47,1,49,1,58,1,114,37,159,2]],[306,[19,1,21,1,23,1,31,1,33,17,53,1,74,1,114,37,156,1,159,1]],[307,[21,1,33,1,35,15,53,2,71,2,74,3,114,36,156,1,159,1]],[308,[22,1,33,19,53,1,69,4,74,3,114,36,156,1,158,2]],[309,[22,1,33,20,59,2,66,11,114,36,158,2]],[310,[22,1,35,21,64,13,114,36,158,1]],[311,[22,1,35,1,37,20,65,12,114,32,158,1]],[312,[22,1,35,1,37,21,63,14,114,33,148,2,158,1]],[313,[23,2,30,3,34,43,114,36]],[314,[20,1,23,1,30,47,114,36,154,1,157,1]],[315,[20,1,23,1,30,47,114,35,154,1,157,1]],[316,[23,1,31,118,153,2,157,1]],[317,[23,1,31,4,36,113,154,1,157,1]],[318,[23,1,32,117,157,1]],[319,[32,117,157,1]],[320,[31,118,156,1]],[321,[31,118,156,1]],[322,[31,118,156,1]],[323,[22,1,32,117,156,1]],[324,[22,1,32,117,156,1]],[325,[33,116,156,1]],[326,[23,1,33,112,146,2]],[327,[33,116,154,1]],[328,[30,1,34,114,154,1,157,1]],[329,[24,1,34,114,157,1]],[330,[24,1,35,113,151,1,154,1]],[331,[25,1,31,1,35,115,154,1,157,2]],[332,[36,113,154,2,158,1]],[333,[25,1,37,113,154,1,158,1]],[334,[38,112,152,1,154,3,158,1]],[335,[26,1,37,110,148,2,152,1,155,2,158,2]],[336,[38,113,155,1,159,1]],[337,[27,1,37,1,39,112,153,1]],[338,[38,113,153,1,157,1,160,1]],[339,[38,114,160,1]],[340,[30,1,38,112,160,2]],[341,[38,112,161,1]],[342,[29,1,31,1,42,111,157,3,161,1]],[343,[29,1,42,111,159,1,162,1]],[344,[29,1,41,113,158,3,162,1]],[345,[39,1,41,113,160,1,163,1]],[346,[40,1,43,112,159,1,161,1]],[347,[34,1,40,113,154,1,164,1]],[348,[40,116,165,1]],[349,[40,115,156,1,162,1,165,1]],[350,[31,1,40,115,163,1,166,1]],[351,[40,114,162,2,166,2]],[352,[31,1,40,115,162,1,164,1,167,1]],[353,[40,115,163,3,167,2]],[354,[31,1,40,116,157,1,168,2]],[355,[31,1,40,117,162,1,169,1]],[356,[31,1,40,119,169,2]],[357,[31,1,40,117,158,2,163,1,170,1]],[358,[34,1,40,121,168,1,170,2]],[359,[40,119,168,1,171,2]],[360,[34,1,40,120,169,1,172,1]],[361,[39,123,169,2,172,2]],[362,[39,1,41,119,170,1,173,1]],[363,[30,1,41,119,169,1,171,1,174,1]],[364,[42,118,167,1,171,1,174,1]],[365,[32,1,42,120,163,1,175,1]],[366,[35,1,38,1,41,125]],[367,[31,1,38,1,41,125]],[368,[31,1,38,2,41,126,176,1]],[369,[31,1,34,1,38,129,177,1]],[370,[27,1,30,1,38,129,178,1]],[371,[30,2,38,130,175,1,178,1]],[372,[29,1,39,11,52,2,55,114,174,2]],[373,[25,1,28,3,36,1,38,7,46,2,56,113,179,1]],[374,[25,1,36,10,47,1,56,109,166,3,176,1]],[375,[27,1,35,8,44,1,55,112,177,1,180,1]],[376,[24,1,27,1,34,8,43,1,55,114]],[377,[34,7,42,1,44,1,55,6,62,109,181,1]],[378,[25,2,34,8,55,6,63,110,178,1]],[379,[25,1,35,6,52,1,57,3,63,110,182,1]],[380,[24,2,35,6,52,1,57,1,63,110,179,1,182,1]],[381,[24,2,35,5,57,1,63,110,183,1]],[382,[23,1,27,1,35,4,63,111,183,1]],[383,[22,1,32,3,36,1,38,1,63,105,169,5,184,1]],[384,[22,2,32,4,63,106,170,4,184,1]],[385,[32,4,63,110,175,1,184,1]],[386,[30,1,34,2,63,111,185,1]],[387,[29,1,32,2,63,110,174,2,178,1,185,1]],[388,[23,1,27,1,30,3,34,1,63,110,175,1,178,1,181,2,186,1]],[389,[30,4,63,110,181,1,186,1]],[390,[27,2,30,3,63,114,179,1,181,2,186,1]],[391,[26,5,63,114,182,2,186,2]],[392,[25,5,63,115,182,1,186,2]],[393,[23,4,28,3,63,115,182,1,187,1]],[394,[15,2,23,5,63,112,176,2,182,1,187,1]],[395,[14,1,16,1,23,5,29,1,63,113,177,2,180,1,183,1,187,2]],[396,[14,1,22,6,63,116,180,1,183,1,188,1]],[397,[14,1,22,5,63,115,179,1,183,1,188,1]],[398,[22,6,63,112,178,2,184,2,188,1]],[399,[16,1,22,5,63,114,178,3,188,2]],[400,[20,1,22,3,63,118,184,1,188,2]],[401,[20,4,25,1,63,115,180,1,184,1,189,1]],[402,[20,5,26,1,63,116,180,1,184,1,189,1]],[403,[20,3,24,2,63,116,184,1,189,1]],[404,[19,3,23,1,63,115,184,1,189,1]],[405,[17,1,19,4,24,1,63,115,184,2,189,1]],[406,[17,4,26,1,63,115,184,2,189,1]],[407,[16,4,21,1,23,4,63,115,184,3,189,1]],[408,[16,5,22,3,63,116,184,3,189,1]],[409,[18,3,22,2,63,115,181,1,185,2,189,1]],[410,[15,2,18,2,63,116,180,2,184,3]],[411,[15,4,63,118,185,2,189,1]],[412,[14,4,63,118,186,1]],[413,[13,5,63,117,181,1]],[414,[14,3,64,116,183,1]],[415,[14,3,64,114,182,2,185,1]],[416,[14,3,64,113,182,1,184,2,189,1]],[417,[12,2,15,2,64,112,182,1,184,1,189,1]],[418,[12,5,63,114,178,1,182,1,185,1,189,1]],[419,[12,5,64,112,178,1,182,1,184,2,189,1]],[420,[11,6,63,114,178,1,184,2]],[421,[11,6,63,113,178,1,182,1,184,2,189,1]],[422,[11,6,63,116,189,1]],[423,[10,5,16,1,56,2,63,115,189,1]],[424,[6,1,10,5,16,2,55,6,63,115,188,1]],[425,[6,1,9,6,16,1,55,7,63,115,188,1]],[426,[9,8,55,7,63,113,177,1,181,1,188,1]],[427,[9,7,55,119,176,2,188,1]],[428,[9,7,56,4,61,112,174,2]],[429,[9,7,61,116,180,1,187,1]],[430,[9,8,62,113,176,2,187,1]],[431,[9,8,59,117,186,1]],[432,[9,8,59,115,175,1,179,1,186,1]],[433,[9,8,57,118,186,1]],[434,[9,3,13,4,56,116,173,2,185,1]],[435,[9,3,13,4,52,122,182,1,185,1]],[436,[9,3,13,4,53,121]],[437,[9,3,13,4,52,121,181,1,184,1]],[438,[9,8,51,122,184,1]],[439,[9,8,49,123,180,1,183,1]],[440,[6,1,10,7,49,122,179,2,182,1]],[441,[10,7,47,116,164,1,167,3,179,1,182,1]],[442,[10,7,47,1,49,115,165,2,168,1,179,1,181,1]],[443,[11,1,13,4,45,2,48,117,168,1,180,2]],[444,[7,1,11,1,13,4,45,1,47,118,180,1]],[445,[11,1,13,4,43,122,167,1,179,1]],[446,[12,5,36,2,40,124,165,1,178,2]],[447,[12,5,22,4,37,1,39,123,164,1,178,1]],[448,[14,3,20,7,39,123,163,1,171,1,173,2,177,1]],[449,[16,2,21,6,38,2,41,122,173,1,176,1]],[450,[13,1,15,1,17,2,20,7,37,2,40,119,170,1,175,2]],[451,[14,1,17,9,35,125,165,1,174,2]],[452,[16,10,35,117,153,5,169,1,173,2]],[453,[15,1,17,9,33,2,36,122,165,1,172,2]],[454,[16,1,18,9,31,3,35,123,164,3,172,1]],[455,[17,1,19,135,163,1,165,2,170,2]],[456,[18,2,21,131,164,2,169,1]],[457,[13,1,18,1,20,1,23,127,157,1,162,3,168,1]],[458,[21,4,30,119,155,1,166,2]],[459,[14,1,22,4,27,109,137,9,154,1,165,1]],[460,[13,1,15,1,23,113,137,6,155,1]],[461,[14,1,16,1,22,112,135,1,137,4,154,2,157,1,162,1]],[462,[25,113,161,1]],[463,[26,105,132,5,145,1,159,1]],[464,[27,106,142,1,147,1,157,1]],[465,[29,101,140,1]],[466,[33,5,39,88,143,1]],[467,[35,3,39,1,42,1,44,1,46,1,48,75,140,2]],[468,[37,1,39,2,42,67,110,1,112,5,122,1,131,2,136,2,148,2]],[469,[27,3,41,68,110,2,114,1,125,1,131,4]],[470,[26,1,45,3,49,9,59,10,74,27,105,1,129,3,143,3]],[471,[20,1,28,1,33,1,50,8,74,23,116,1,126,1,139,4]],[472,[37,1,58,1,66,12,110,2,119,1,122,1,137,3]],[473,[23,1,41,1,102,3,116,2,133,3]],[474,[36,2,46,1,108,3,128,4]],[475,[27,1,40,2,82,6,123,5]],[476,[47,1,67,11,85,4,116,6]],[477,[54,1,57,1,67,17,110,1,113,3]],[478,[36,3,102,8]],[479,[40,2,43,2,93,3,98,4]],[480,[49,1,85,8,95,1,97,1]],[481,[59,2,62,8,72,2,91,1,93,3,98,1]],[482,[89,2,94,1,98,2]],[483,[89,1,98,1,100,1]],[484,[89,1,94,6]],[485,[90,2,93,6]]]},"11:0":{"w":187,"h":496,"rows":[[251,[74,1]],[252,[74,1]],[253,[53,7,74,1]],[254,[51,9,74,1]],[255,[50,10,74,1]],[256,[49,11,71,4]],[257,[49,11,64,11]],[258,[50,25]],[259,[50,10,62,7]],[260,[50,15,69,1,71,4]],[261,[49,4,54,21]],[262,[49,26]],[263,[46,17,66,7,74,1]],[264,[45,6,52,10,68,1,72,3]],[265,[43,4,49,8,67,6,74,1]],[266,[42,1,44,2,48,7,68,3,74,1]],[267,[41,1,43,1,46,5,53,1,63,1,65,2,68,1,70,1,74,1]],[268,[40,3,45,5,63,1,67,2,74,1]],[269,[38,3,43,7,55,1,64,1,66,2]],[270,[38,2,43,5,64,4]],[271,[36,3,41,6,63,5]],[272,[35,3,40,7,49,6,63,5]],[273,[34,3,39,7,49,6,63,5]],[274,[33,2,39,2,42,2]],[275,[32,2,35,1,38,2,42,3]],[276,[32,3,37,2,41,2,44,1,46,1]],[277,[31,3,36,4,42,2,45,1]],[278,[31,1,33,1,36,11,73,1]],[279,[30,3,35,2,39,8,50,1,73,1]],[280,[30,1,34,3,41,6,73,1,146,7]],[281,[30,2,34,3,41,16,72,2,145,9]],[282,[29,3,33,4,44,13,61,3,71,3,144,1,146,1,148,7]],[283,[29,2,33,2,42,16,59,1,62,4,70,3,143,13]],[284,[28,3,32,2,35,1,42,18,64,1,70,3,143,13]],[285,[28,3,32,2,42,18,64,1,70,4,142,1,144,6,151,6]],[286,[28,6,39,1,41,20,63,1,67,7,141,10,152,5]],[287,[28,6,42,20,64,1,67,7,113,1,141,7,152,6]],[288,[29,5,40,22,67,7,113,1,140,7,153,5]],[289,[27,1,29,5,41,9,51,11,67,7,114,1,139,1,141,5,152,6]],[290,[27,6,39,1,41,21,71,1,113,3,137,10,152,6]],[291,[27,5,39,2,42,19,71,1,113,5,135,3,139,5,146,1,154,5]],[292,[27,5,40,1,42,19,113,3,117,2,132,12,145,1,154,3]],[293,[27,5,42,18,113,4,119,3,128,7,136,9,153,4]],[294,[27,5,42,18,113,6,121,2,131,2,134,8,153,4,158,1]],[295,[28,4,42,18,113,8,125,3,132,9,153,4,158,1]],[296,[28,4,42,18,113,28,153,4,158,1]],[297,[28,4,43,14,58,1,114,1,116,22,139,1,153,4,158,1]],[298,[27,5,44,11,57,1,116,1,118,21,152,1,154,3,158,1]],[299,[27,5,46,1,48,5,55,1,113,2,118,1,121,10,136,1,152,5,158,1]],[300,[27,5,47,3,52,3,113,3,120,1,122,10,152,7]],[301,[27,6,113,2,116,3,122,1,152,6]],[302,[27,1,29,3,36,1,113,1,123,1,125,1,152,6]],[303,[27,1,29,3,35,2,113,1,121,1,124,1,153,5]],[304,[28,5,35,2,71,2,74,1,113,1,122,1,124,1,153,3,157,1]],[305,[28,6,35,2,71,4,126,1,152,4,157,1]],[306,[28,3,32,2,71,4,123,1,125,1,144,1,152,6]],[307,[28,1,30,4,70,1,74,1,113,2,122,2,144,1,152,3,156,1]],[308,[29,5,70,5,113,1,122,2,127,1,145,1,150,5,156,1]],[309,[29,6,70,5,113,2,126,2,145,1,151,6]],[310,[29,5,70,5,113,2,123,2,126,1,147,1,151,3,155,1]],[311,[30,5,70,5,113,2,123,2,148,1,150,4,155,1]],[312,[30,1,32,4,70,5,113,2,127,1,148,1,150,6]],[313,[30,1,32,3,70,5,113,2,124,2,129,1,149,4,154,1]],[314,[31,6,47,2,69,6,113,2,125,1,129,1,133,2,142,2,145,1,149,4,154,1]],[315,[31,1,33,3,37,1,47,2,63,1,67,1,71,4,128,1,133,2,143,2,148,4,153,1]],[316,[32,6,47,2,63,1,72,3,126,1,128,1,133,2,143,1,148,6]],[317,[32,1,34,3,47,2,67,1,70,1,72,3,114,1,133,2,143,1,147,4,152,1]],[318,[32,7,47,2,68,1,70,1,72,3,113,1,127,1,129,1,131,1,147,6]],[319,[35,3,39,1,47,2,70,5,113,1,126,2,146,4,151,1]],[320,[35,5,47,2,70,5,126,1,144,1,146,4,151,1]],[321,[34,1,36,3,47,2,70,5,128,1,130,1,144,5,150,1]],[322,[34,1,36,6,43,4,51,2,70,5,128,1,130,1,145,5]],[323,[35,1,37,5,43,4,70,42,129,1,144,6]],[324,[35,1,37,5,70,42,129,1,131,1,144,4,149,1]],[325,[36,6,70,42,128,1,142,7]],[326,[36,6,71,41,132,1,143,4,148,1]],[327,[36,7,72,10,83,29,130,1,132,1,143,6]],[328,[37,1,39,5,73,4,78,4,83,2,88,2,91,22,131,1,133,1,142,6]],[329,[37,1,39,3,80,1,106,3,130,2,133,3,141,5,147,1]],[330,[37,7,91,2,102,1,107,3,130,2,134,1,142,6]],[331,[38,6,91,2,107,2,134,1,139,2,142,6]],[332,[38,1,40,4,91,1,93,1,102,1,107,2,131,2,134,1,139,2,142,5]],[333,[38,6,91,2,107,2,131,2,139,2,142,5]],[334,[38,1,40,4,91,1,93,1,107,2,133,1,135,1,139,8]],[335,[38,1,40,4,92,2,107,2,133,1,139,6,146,1]],[336,[38,1,40,4,92,2,107,2,136,1,140,7]],[337,[38,1,40,4,92,2,107,2,134,1,136,1,141,6]],[338,[38,1,40,4,78,1,86,1,93,1,107,2,134,1,141,7]],[339,[38,1,40,4,78,1,80,2,86,1,93,1,107,2,135,1,137,1,139,2,142,6]],[340,[38,1,40,4,78,1,80,2,91,1,107,2,134,2,140,1,142,6]],[341,[38,6,76,1,78,1,80,2,91,1,107,2,138,1,140,1,142,6]],[342,[39,5,76,1,78,1,80,2,84,1,91,2,107,2,136,1,138,1,142,7]],[343,[39,5,76,1,78,1,80,2,84,1,91,2,107,2,140,1,142,7]],[344,[37,6,76,1,78,1,80,2,84,1,92,1,107,2,137,1,139,1,141,1,143,6]],[345,[36,8,76,1,78,1,80,2,84,1,92,1,107,2,137,1,143,7]],[346,[36,1,38,4,46,1,71,4,76,1,78,1,84,1,106,3,140,1,144,7]],[347,[36,6,45,2,71,4,76,1,78,1,84,1,106,4,138,1,140,1,144,7]],[348,[35,1,37,5,46,1,71,4,78,1,84,1,106,4,145,7]],[349,[34,1,36,5,71,4,78,1,84,1,106,4,138,2,145,8]],[350,[34,1,36,4,71,4,84,1,106,4,138,2,146,7]],[351,[33,1,35,6,71,4,84,1,106,4,138,1,142,1,147,7]],[352,[34,6,71,4,84,1,106,4,139,2,147,8]],[353,[32,6,70,5,84,1,106,4,139,1,143,1,146,10]],[354,[31,1,33,5,63,12,78,1,82,1,84,1,99,1,105,5,141,1,145,12]],[355,[30,1,32,5,63,12,80,1,82,1,84,1,87,1,99,1,104,6,146,12]],[356,[28,2,31,6,63,4,78,1,82,1,84,1,89,1,94,1,99,1,104,7,142,1,144,15]],[357,[27,2,30,6,75,1,78,5,84,4,89,6,96,4,101,10,142,1,144,16]],[358,[27,1,29,5,43,4,65,1,78,3,85,3,89,5,95,5,101,4,106,4,143,18]],[359,[26,1,28,6,43,4,63,1,71,41,142,19]],[360,[25,1,27,1,29,5,43,4,63,1,69,2,72,40,143,19]],[361,[24,1,26,2,29,4,43,4,70,42,143,2,146,5,152,1,154,9]],[362,[23,1,25,2,28,5,63,1,70,42,135,1,143,8,154,10]],[363,[25,5,63,1,70,42,135,1,144,2,147,1,149,1,154,11]],[364,[22,8,63,1,70,42,133,2,143,3,148,3,153,1,155,12]],[365,[21,1,23,5,67,46,131,1,133,4,143,4,148,1,150,2,153,4,158,9]],[366,[20,1,22,6,67,48,116,1,130,1,132,6,144,3,151,1,159,9]],[367,[19,1,21,1,23,3,27,1,67,51,131,1,133,5,144,1,146,1,149,1,160,9]],[368,[18,1,20,1,23,3,29,1,70,43,115,3,131,1,133,5,147,1,154,2,160,10]],[369,[18,2,22,3,26,1,28,1,71,40,115,1,133,4,147,1,150,1,156,1,161,10]],[370,[16,2,19,1,22,2,25,1,70,42,114,2,133,3,147,2,150,1,162,10]],[371,[16,1,18,1,20,5,70,42,113,3,147,2,162,11]],[372,[17,1,20,2,70,42,114,2,151,1,163,10]],[373,[16,2,19,3,70,42,113,2,117,1,149,1,164,10]],[374,[14,1,16,1,18,3,70,42,113,2,117,1,165,9]],[375,[13,1,15,2,18,2,70,42,113,1,117,2,152,1,167,8]],[376,[12,1,14,6,70,43,117,2,150,1,152,1,166,9]],[377,[12,7,70,44,117,1,150,1,152,1,166,10]],[378,[13,6,63,1,69,44,149,2,152,1,168,8]],[379,[10,1,12,7,63,1,65,1,69,43,150,1,152,1,168,8]],[380,[10,1,12,7,65,1,69,43,116,1,125,4,148,1,154,1,170,7]],[381,[11,7,65,1,67,4,72,24,99,3,103,8,113,1,115,3,126,5,132,4,147,1,149,1,151,1,168,1,171,6]],[382,[11,5,66,17,84,6,91,2,94,1,97,1,99,4,105,5,117,1,130,8,146,1,148,1,150,1,154,1,171,5,177,1]],[383,[8,1,10,5,76,1,82,1,86,2,99,1,105,2,108,2,114,1,123,8,139,9,150,1,167,1,172,6]],[384,[8,7,76,1,86,2,89,1,99,1,105,2,130,5,143,3,167,1,171,8]],[385,[9,1,11,3,76,1,87,1,89,1,99,1,105,2,111,1,113,2,127,1,129,3,138,10,171,1,173,7]],[386,[6,7,76,1,85,2,89,1,92,1,105,2,127,8,171,7,179,1]],[387,[6,1,8,4,74,1,76,2,82,8,94,2,100,2,103,4,108,8,127,7,171,10]],[388,[6,3,10,2,68,7,76,41,127,6,171,8,180,2]],[389,[7,1,9,3,65,53,127,5,172,2,175,7]],[390,[6,5,64,54,127,4,152,11,174,8]],[391,[5,6,65,54,152,12,176,7]],[392,[4,1,6,4,65,54,152,12,175,8]],[393,[4,6,65,53,152,13,175,8]],[394,[5,5,65,53,156,5,163,2,176,8]],[395,[5,5,65,53,152,9,163,3,177,5,183,1]],[396,[3,1,5,5,66,51,151,14,176,6,183,1]],[397,[4,4,67,34,106,1,112,2,151,15,176,1,178,7]],[398,[2,1,4,4,22,1,68,5,76,2,82,2,86,1,88,2,91,6,100,2,105,2,150,3,154,12,167,3,175,8,184,1]],[399,[2,1,4,4,22,1,82,1,94,2,105,1,153,8,162,5,170,1,175,8,184,1]],[400,[2,6,22,1,73,2,82,1,94,2,105,1,109,2,152,9,163,5,170,1,175,3,179,7]],[401,[1,1,3,4,73,2,82,1,94,2,105,1,107,1,109,8,152,7,160,1,164,4,170,1,176,2,179,7]],[402,[3,5,69,6,105,1,107,1,109,9,147,4,152,7,164,6,171,5,178,6,185,1]],[403,[1,1,3,4,67,8,105,1,107,1,109,9,147,4,152,4,164,4,169,1,171,4,180,4,185,1]],[404,[0,2,3,3,67,8,101,1,105,1,107,1,109,9,147,4,152,4,164,6,171,4,180,4,185,1]],[405,[0,1,2,4,67,8,101,1,105,1,107,1,109,9,147,4,152,5,162,6,171,4,180,4,185,2]],[406,[0,1,2,4,63,13,107,1,109,10,152,6,161,8,178,1,180,7]],[407,[0,1,2,4,64,12,107,11,153,7,162,6,172,1,178,7,186,1]],[408,[0,1,2,4,63,13,108,11,154,14,172,1,178,7,186,1]],[409,[0,1,2,4,63,2,67,11,82,2,88,2,94,2,100,2,103,1,105,3,109,9,119,1,140,1,155,11,167,1,179,1,181,4,186,1]],[410,[0,1,2,4,63,1,65,54,133,7,157,7,181,4,186,1]],[411,[0,1,2,4,64,56,131,10,181,6]],[412,[0,6,63,57,130,12,181,6]],[413,[0,6,63,13,77,44,129,14,181,6]],[414,[1,5,63,58,129,5,136,8,181,6]],[415,[1,5,63,58,126,8,136,1,140,4,181,6]],[416,[0,6,63,58,123,4,128,5,140,4,181,6]],[417,[1,5,63,58,123,4,128,5,141,4,181,5]],[418,[1,5,63,57,121,1,123,4,128,4,141,4,181,5]],[419,[1,5,64,56,121,6,128,4,141,3,181,5]],[420,[1,5,65,54,123,10,140,4,181,5]],[421,[1,5,67,50,123,4,128,6,139,5,181,5]],[422,[0,6,63,3,123,13,138,6,181,5]],[423,[0,6,63,1,123,3,128,15,181,6]],[424,[0,6,103,5,109,4,121,3,129,12,181,6]],[425,[0,6,87,1,103,4,108,1,111,2,121,3,131,9,181,6]],[426,[0,1,2,4,133,1,175,2,181,6]],[427,[0,1,2,3,175,2,181,6]],[428,[0,1,2,3,159,3,181,6]],[429,[0,1,2,3,143,4,155,10,180,5,186,1]],[430,[0,1,2,4,155,11,177,2,180,7]],[431,[0,1,2,4,154,13,177,2,180,7]],[432,[0,6,7,1,153,15,177,2,180,7]],[433,[1,1,3,3,7,1,153,9,163,5,169,1,176,3,180,6]],[434,[1,1,3,3,7,2,152,10,164,7,175,4,180,4,185,1]],[435,[3,5,152,7,160,1,164,7,175,9,185,1]],[436,[2,6,152,5,164,9,177,1,179,7]],[437,[2,1,4,3,150,1,152,5,164,6,171,1,177,1,179,4,184,1]],[438,[2,1,4,5,150,7,164,6,171,2,179,4,184,1]],[439,[2,1,4,4,151,9,163,5,171,1,178,7]],[440,[3,1,5,3,151,17,178,4,183,1]],[441,[3,1,5,5,151,15,168,1,176,1,178,4,183,1]],[442,[5,4,133,1,150,1,152,14,171,2,176,8]],[443,[4,1,6,3,153,2,156,9,166,1,171,4,177,6]],[444,[4,6,132,8,153,4,162,1,164,3,169,5,176,7]],[445,[4,2,7,3,127,2,130,12,169,6,176,6]],[446,[5,1,7,5,127,2,130,13,154,2,169,3,173,2,176,4,181,1]],[447,[6,5,128,6,138,5,170,3,175,7]],[448,[6,1,8,5,127,1,129,4,140,4,145,1,170,4,175,4,180,1]],[449,[6,6,13,1,128,5,140,4,172,1,174,7]],[450,[9,5,128,5,140,5,174,4,179,1]],[451,[8,1,10,6,128,4,140,5,173,4,178,2]],[452,[8,1,10,5,128,4,140,5,173,4,178,1]],[453,[9,1,11,5,23,1,128,4,140,4,172,4,177,1]],[454,[11,5,23,1,127,1,129,4,137,7,170,8]],[455,[10,1,12,6,23,1,128,8,138,6,168,1,170,7]],[456,[10,8,22,1,130,13,167,10]],[457,[11,1,13,6,129,1,131,10,166,11]],[458,[12,1,14,4,130,11,166,10]],[459,[13,6,166,9]],[460,[13,8,132,1,138,1,165,10]],[461,[14,1,16,4,21,1,135,1,164,10]],[462,[15,1,17,4,22,1,163,11]],[463,[16,1,18,4,23,1,162,11]],[464,[16,2,19,4,162,9]],[465,[17,2,20,4,26,1,33,3,160,10]],[466,[18,2,21,4,27,1,29,1,33,2,153,1,159,1,161,8]],[467,[19,2,22,4,28,3,33,2,151,3,157,2,160,8]],[468,[20,2,23,4,29,1,150,4,157,1,159,7]],[469,[21,2,24,5,30,1,150,4,156,7,164,1]],[470,[23,1,25,5,150,1,154,1,156,6,163,1]],[471,[24,1,26,6,33,1,152,2,155,6,162,1]],[472,[25,2,28,5,34,1,154,5,160,2]],[473,[26,2,29,7,144,3,149,2,152,6,159,2]],[474,[28,8,43,2,56,7,139,1,147,2,151,6,158,2]],[475,[29,9,43,4,55,8,145,2,149,6,156,2]],[476,[30,2,34,6,42,6,49,14,147,6,155,2]],[477,[32,10,43,5,49,14,142,1,145,7,153,3]],[478,[33,12,46,4,54,1,59,4,143,7,151,3]],[479,[34,13,48,7,59,4,135,2,141,7,150,2]],[480,[36,14,51,12,134,2,138,8,148,2]],[481,[39,3,43,10,54,9,128,4,135,13]],[482,[42,2,45,11,58,1,66,3,83,4,131,15]],[483,[44,3,48,12,63,6,72,1,83,4,112,3,119,4,127,12,140,3]],[484,[47,2,51,14,87,7,115,1,121,15,137,4]],[485,[49,3,54,17,79,1,83,20,115,19,135,3]],[486,[52,5,59,25,101,27,131,3]],[487,[55,1,57,3,63,61,127,4]],[488,[60,5,69,49,119,1,121,5]],[489,[66,6,77,29,112,9]],[490,[72,13,90,23]],[491,[79,8,88,1,90,11]],[492,[86,3,90,7]],[493,[86,12]],[494,[86,1,88,10]],[495,[87,11]]]},"11:1":{"w":193,"h":484,"rows":[[241,[116,1]],[242,[116,1,132,6]],[243,[116,1,132,8]],[244,[116,1,132,9]],[245,[116,1,132,10]],[246,[116,6,131,12]],[247,[120,22]],[248,[116,25]],[249,[116,16,133,8]],[250,[116,18,135,7]],[251,[116,20,138,1,140,2,143,1]],[252,[116,24,141,4]],[253,[117,3,123,1,127,15,144,3]],[254,[132,12,146,2]],[255,[136,10,147,2]],[256,[138,10,149,2]],[257,[137,2,141,11]],[258,[140,1,142,12]],[259,[141,11,153,2]],[260,[143,10,154,2]],[261,[137,12,150,6]],[262,[136,21]],[263,[131,3,137,5,145,6,152,4,157,1]],[264,[134,6,141,2,147,5,153,6]],[265,[130,13,150,2,154,6]],[266,[128,17,152,1,154,7]],[267,[124,1,127,6,134,12,153,1,155,6]],[268,[36,6,126,5,133,2,143,4,152,1,154,1,156,6]],[269,[34,10,125,2,128,3,134,4,143,5,153,1,157,3,161,1]],[270,[33,1,35,10,77,1,124,4,129,1,134,2,137,1,145,4,153,1,155,1,157,6]],[271,[32,1,34,1,37,9,77,1,118,2,121,1,123,4,128,3,146,4,154,1,156,1,158,5]],[272,[31,1,33,1,36,10,77,1,118,2,122,4,127,2,148,2,156,1,158,6]],[273,[30,1,32,1,35,12,77,1,122,3,126,2,147,4,155,1,157,7]],[274,[29,4,35,13,76,1,121,4,148,3,157,7]],[275,[29,1,31,1,34,14,75,2,121,4,148,4,158,7]],[276,[28,3,33,3,40,9,75,3,121,4,149,3,158,7]],[277,[28,1,30,1,32,3,36,1,38,1,40,10,74,2,77,1,119,5,149,3,158,7]],[278,[28,3,32,3,37,1,39,1,41,9,73,5,119,4,149,3,159,6]],[279,[27,7,40,1,42,9,73,5,120,3,149,3,159,6]],[280,[27,1,29,4,42,2,45,7,71,3,75,3,117,1,119,4,149,3,159,7]],[281,[27,1,29,4,41,12,70,3,74,4,119,4,149,3,159,7]],[282,[27,6,41,11,53,1,69,9,120,4,149,3,159,7]],[283,[27,6,41,1,44,9,54,2,68,2,71,7,119,1,121,3,149,3,158,8]],[284,[27,6,45,10,56,4,64,4,70,8,121,4,144,4,149,3,159,7]],[285,[27,6,46,11,67,10,121,4,126,5,143,5,149,4,159,7]],[286,[26,8,35,1,47,3,52,24,122,5,129,3,143,5,149,4,159,7]],[287,[28,5,34,2,48,27,120,1,122,5,129,2,143,9,160,6]],[288,[27,6,34,2,48,24,120,2,123,7,135,3,143,7,151,1,157,2,160,6]],[289,[27,6,35,1,48,22,74,1,122,1,124,6,144,4,150,1,156,2,159,7]],[290,[27,6,35,1,49,1,53,14,122,1,125,5,143,2,146,1,148,1,150,1,157,1,159,7]],[291,[27,6,34,1,54,1,56,9,71,1,123,7,143,3,147,1,159,7]],[292,[27,1,29,4,34,1,124,1,126,8,138,4,143,4,157,1,159,7]],[293,[27,1,29,4,125,2,128,5,135,10,157,1,159,6]],[294,[27,1,29,4,129,15,157,1,159,6]],[295,[27,6,128,1,132,10,157,6,164,1]],[296,[28,5,155,2,158,7]],[297,[28,1,30,3,132,2,155,2,158,7]],[298,[30,5,156,1,158,6]],[299,[28,6,153,3,157,7]],[300,[29,1,31,3,153,3,157,7]],[301,[29,1,31,4,152,2,155,8]],[302,[29,6,36,1,152,1,156,7]],[303,[30,1,32,5,151,1,156,7]],[304,[31,5,38,1,40,1,150,2,155,7]],[305,[31,1,33,4,40,1,150,2,155,7]],[306,[31,1,33,5,151,1,154,1,156,5]],[307,[32,1,34,3,152,1,154,7]],[308,[32,1,34,5,148,10,159,1]],[309,[33,1,35,3,39,2,150,2,153,5,159,1]],[310,[33,1,35,4,40,2,149,2,152,5,158,1]],[311,[34,5,40,2,149,2,152,5,158,1]],[312,[34,1,36,5,149,9]],[313,[35,5,149,1,151,7]],[314,[35,1,37,5,149,6,156,2]],[315,[35,6,148,1,150,7]],[316,[36,1,38,3,42,1,148,1,150,7]],[317,[36,1,38,5,149,5,155,2]],[318,[36,6,147,1,149,5,155,1]],[319,[37,1,39,3,142,1,145,11]],[320,[37,1,39,4,142,1,145,8,154,2]],[321,[37,1,39,4,145,2,148,5,154,2]],[322,[37,6,44,1,144,3,148,7]],[323,[37,6,44,1,146,1,148,5,154,1]],[324,[37,6,44,1,146,1,148,5,154,1]],[325,[37,2,40,3,44,1,143,1,146,1,148,7]],[326,[37,2,40,3,44,1,143,1,146,1,148,7]],[327,[37,2,40,3,148,7]],[328,[37,1,39,4,148,7]],[329,[37,1,39,4,147,8]],[330,[37,1,39,4,147,6,154,1]],[331,[37,1,39,3,147,1,149,7]],[332,[39,3,147,1,149,7]],[333,[38,1,40,2,149,7]],[334,[38,4,150,7]],[335,[37,4,42,1,149,9]],[336,[35,1,37,4,149,9]],[337,[34,6,41,1,149,10]],[338,[34,1,36,5,150,1,152,8]],[339,[33,1,35,6,151,10]],[340,[32,8,151,10]],[341,[31,2,34,5,40,2,151,11]],[342,[31,1,33,6,40,2,153,10]],[343,[30,1,32,7,155,8]],[344,[29,1,31,6,156,8]],[345,[28,9,155,10]],[346,[27,8,156,10]],[347,[26,2,29,6,157,10]],[348,[25,2,28,1,30,3,157,10]],[349,[24,2,27,1,29,4,157,11]],[350,[23,2,26,1,28,5,157,3,161,1,163,6]],[351,[23,1,25,7,160,1,164,6]],[352,[21,2,24,7,165,7]],[353,[21,11,164,1,166,7]],[354,[20,1,22,2,25,4,163,1,165,1,167,6]],[355,[19,1,21,2,24,4,168,6]],[356,[18,2,21,6,165,2,169,6]],[357,[17,2,20,6,32,1,164,1,166,2,169,7]],[358,[17,1,19,6,168,1,170,6]],[359,[16,1,18,6,167,1,169,1,171,6]],[360,[15,1,17,7,26,2,168,1,170,1,172,6]],[361,[15,1,17,6,26,3,169,3,173,4,178,1]],[362,[14,1,16,6,168,4,173,4,178,1]],[363,[13,1,15,7,169,2,172,8]],[364,[12,9,171,9]],[365,[12,8,172,9]],[366,[11,1,13,6,21,2,173,8]],[367,[10,2,13,5,21,1,173,7,181,1]],[368,[10,1,12,5,20,1,174,9]],[369,[9,1,11,6,174,10]],[370,[8,2,11,5,31,1,175,7,183,1]],[371,[8,1,10,6,20,1,23,7,175,10]],[372,[7,2,10,5,18,1,21,11,35,1,176,9]],[373,[7,1,9,5,19,6,28,7,172,1,176,10]],[374,[6,2,9,5,18,6,29,8,38,2,177,7,185,1]],[375,[6,1,8,6,17,4,23,2,30,2,33,6,40,1,177,9]],[376,[5,2,8,5,16,5,24,1,33,8,42,2,179,8]],[377,[5,1,7,6,16,4,22,2,34,9,179,6,186,1]],[378,[5,1,7,4,16,3,37,8,179,9]],[379,[5,1,7,4,15,4,37,10,179,7,187,1]],[380,[4,1,6,4,15,4,42,7,51,1,179,10]],[381,[4,1,6,4,14,4,42,3,46,6,179,10]],[382,[3,1,5,5,14,3,41,1,46,7,55,1,180,7,188,1]],[383,[3,1,5,4,14,3,46,3,50,6,181,9]],[384,[3,1,5,4,14,3,52,6,59,1,181,7,189,1]],[385,[3,6,14,3,51,2,54,6,181,7,189,1]],[386,[2,1,4,4,14,3,56,6,63,1,183,8]],[387,[2,1,4,5,14,3,56,1,58,6,184,7]],[388,[2,7,14,3,60,5,184,7]],[389,[1,7,14,3,59,9,183,8]],[390,[1,1,3,5,14,3,61,5,183,1,185,7]],[391,[1,1,3,6,14,3,61,6,182,2,185,5,191,1]],[392,[1,1,3,4,8,1,14,3,60,7,183,1,185,5]],[393,[1,6,13,4,60,7,183,1,185,5,191,1]],[394,[1,6,13,4,62,2,65,4,186,4,191,2]],[395,[0,1,2,5,14,3,63,1,65,4,186,4,191,2]],[396,[0,1,2,5,14,3,63,1,65,4,186,7]],[397,[0,1,2,5,14,3,63,1,65,3,186,7]],[398,[0,1,2,5,14,3,63,1,65,3,186,7]],[399,[2,5,14,3,18,2,63,1,65,2,186,5,192,1]],[400,[0,1,2,5,14,8,65,2,186,5,192,1]],[401,[0,1,2,4,14,9,65,2,186,5,192,1]],[402,[0,1,2,4,14,9,65,2,186,5,192,1]],[403,[0,7,14,9,65,3,182,2,186,5,192,1]],[404,[0,7,14,3,18,5,65,3,182,2,186,5,192,1]],[405,[0,1,2,3,14,3,18,3,65,3,182,2,186,5,192,1]],[406,[0,1,2,3,14,3,65,3,182,2,186,5,192,1]],[407,[0,1,2,4,14,3,65,3,180,2,186,5,192,1]],[408,[0,1,2,3,14,3,65,3,186,5,192,1]],[409,[0,1,2,3,14,3,65,3,186,5,192,1]],[410,[0,6,14,3,65,3,186,5,192,1]],[411,[0,1,2,4,14,3,65,2,186,5,192,1]],[412,[0,1,2,4,14,3,65,2,186,5,192,1]],[413,[0,1,2,4,14,3,65,2,186,7]],[414,[0,1,2,4,14,3,63,1,65,2,186,4,191,2]],[415,[0,1,2,4,13,4,65,3,186,4,191,1]],[416,[2,4,13,4,65,3,185,5,191,1]],[417,[1,5,13,4,63,1,65,3,185,5,191,1]],[418,[1,1,3,3,13,4,63,1,65,3,185,7]],[419,[1,1,3,4,13,4,63,1,65,3,183,1,185,6]],[420,[1,1,3,4,13,4,63,1,65,3,183,1,185,4,190,1]],[421,[1,1,3,4,13,4,63,1,65,3,184,5,190,1]],[422,[3,4,14,3,20,1,63,1,65,3,184,5,190,1]],[423,[2,6,14,3,21,2,63,1,65,3,184,7]],[424,[2,1,4,4,14,3,18,5,63,1,65,3,182,8]],[425,[2,1,4,4,14,9,63,1,65,3,183,5,189,1]],[426,[3,1,5,3,11,1,14,3,18,5,63,1,65,3,181,1,183,7]],[427,[3,1,5,4,13,1,15,8,63,1,65,3,180,9]],[428,[3,1,5,4,10,1,15,3,19,4,63,1,65,3,179,2,182,5,188,1]],[429,[4,1,6,5,16,7,63,1,65,3,179,2,182,5,188,1]],[430,[4,1,6,4,16,8,63,1,65,3,179,7,187,1]],[431,[6,4,16,1,18,6,63,1,65,3,174,2,179,1,181,5,187,1]],[432,[5,1,7,4,14,1,16,10,65,3,173,3,178,7]],[433,[5,1,7,4,12,4,18,2,21,7,65,3,173,3,177,8,186,1]],[434,[5,1,8,8,23,9,38,1,43,1,65,3,174,5,180,5,186,1]],[435,[8,4,13,3,21,3,25,7,35,5,65,2,174,10]],[436,[6,2,9,6,26,14,65,2,175,9]],[437,[7,1,9,7,23,1,26,1,28,12,65,2,175,2,178,5,184,1]],[438,[7,2,10,6,30,5,36,4,58,2,63,1,65,2,175,8,184,1]],[439,[8,1,10,7,18,1,28,2,31,6,38,2,57,4,63,1,65,2,68,1,175,1,177,5,183,1]],[440,[8,2,11,4,16,1,18,1,32,1,34,5,40,2,56,2,60,2,63,1,65,2,172,1,176,7]],[441,[9,2,12,5,19,1,34,1,36,7,55,13,176,7]],[442,[10,1,12,4,17,1,36,1,38,5,44,2,55,8,64,2,67,1,175,5,181,1]],[443,[10,2,13,4,18,1,36,11,57,5,63,5,174,7]],[444,[11,7,20,1,39,8,48,1,58,3,62,3,66,2,171,8,180,1]],[445,[12,7,20,1,40,9,59,1,61,7,171,1,173,5,179,1]],[446,[13,1,15,6,42,1,44,7,52,5,59,8,169,2,172,6,179,1]],[447,[14,1,16,4,44,1,48,14,63,2,169,10]],[448,[14,2,17,4,22,1,49,12,62,1,165,2,168,1,170,6,177,1]],[449,[15,2,18,4,23,1,44,1,48,1,52,5,60,2,164,11,176,1]],[450,[16,1,18,6,166,11]],[451,[17,1,19,5,25,1,46,1,165,1,167,6,174,2]],[452,[18,1,20,5,26,1,46,2,164,1,166,6,173,2]],[453,[19,1,21,5,163,1,165,6,172,2]],[454,[20,2,23,7,161,2,164,6,172,1]],[455,[21,1,23,6,34,2,148,2,157,4,162,7,170,2]],[456,[21,2,24,14,148,1,157,3,161,7,169,2]],[457,[23,2,26,9,150,4,157,2,160,7,168,1]],[458,[23,3,27,6,34,2,151,3,155,2,158,8,167,1]],[459,[25,2,28,7,36,2,157,10]],[460,[26,3,30,6,38,1,155,8,164,2]],[461,[27,3,31,7,42,2,148,1,154,7,162,2]],[462,[29,10,41,3,148,2,152,8,161,2]],[463,[31,2,34,7,50,1,124,3,143,1,145,1,149,9,159,3]],[464,[33,2,36,8,46,2,124,1,126,1,142,4,147,13]],[465,[34,2,38,8,48,1,56,3,124,3,132,2,142,1,145,13]],[466,[36,2,40,8,52,6,139,1,142,11,154,2]],[467,[37,3,42,10,54,1,56,1,125,6,132,1,140,14]],[468,[39,3,44,10,58,1,126,7,137,12,150,3]],[469,[41,3,46,12,127,2,134,12,148,3]],[470,[44,2,49,14,68,5,117,7,129,14,145,3]],[471,[47,3,52,16,90,2,100,2,124,16,141,5]],[472,[50,2,56,19,88,18,107,1,116,21,139,4]],[473,[52,4,60,34,96,37,136,4]],[474,[55,5,65,63,132,5]],[475,[59,7,71,51,125,8]],[476,[65,6,80,1,82,30,121,6]],[477,[71,10,108,1,110,10]],[478,[80,3,84,5,91,17]],[479,[92,1,94,6]],[480,[90,2,94,4,99,3]],[481,[90,13]],[482,[90,12]],[483,[91,10]]]},"12:0":{"w":191,"h":511,"rows":[[235,[25,29,115,3]],[236,[24,30,115,3]],[237,[24,30,115,3]],[238,[24,30,115,3]],[239,[23,31,115,3]],[240,[23,31,115,3]],[241,[23,31,115,3]],[242,[23,31,115,3]],[243,[22,32,115,3]],[244,[22,32,115,3]],[245,[22,32,115,3]],[246,[22,32,116,2]],[247,[21,33,115,3]],[248,[21,33,115,3]],[249,[21,33,115,3]],[250,[21,33,115,3]],[251,[21,33,115,3]],[252,[21,33,115,3]],[253,[21,33,115,3]],[254,[20,34,115,3]],[255,[20,34,115,3]],[256,[21,34,115,3]],[257,[21,34,115,3]],[258,[21,34,116,2]],[259,[20,35,116,2]],[260,[20,35,115,3]],[261,[20,36,115,3]],[262,[21,35,115,3]],[263,[21,35,115,3]],[264,[21,35,115,3]],[265,[21,36,115,3]],[266,[21,36,115,3]],[267,[21,36,115,4]],[268,[21,37,115,4]],[269,[21,37,115,4]],[270,[21,37,115,4]],[271,[22,36,116,3]],[272,[22,37,115,4]],[273,[22,37,115,4]],[274,[22,38,115,4]],[275,[22,38,115,4]],[276,[23,38,115,4]],[277,[23,38,115,4]],[278,[23,39,115,4]],[279,[23,39,115,4]],[280,[24,39,115,4]],[281,[24,40,115,4]],[282,[24,40,116,3]],[283,[24,41,115,4]],[284,[25,41,115,4]],[285,[25,42,115,4]],[286,[25,43,115,4]],[287,[25,44,115,4]],[288,[26,45,115,4]],[289,[26,51,115,4]],[290,[26,51,115,4]],[291,[27,50,115,4]],[292,[27,50,115,2,118,1]],[293,[27,50,117,2]],[294,[27,50,115,4]],[295,[28,49,115,4]],[296,[28,49,115,4]],[297,[29,48,115,4]],[298,[29,48,115,4]],[299,[29,48,115,4]],[300,[30,47,115,4]],[301,[30,47,115,4]],[302,[30,47,115,4]],[303,[31,46,116,4]],[304,[31,46,115,5]],[305,[31,46,115,5]],[306,[31,46,115,5]],[307,[32,45,115,5]],[308,[32,45,115,5,165,2]],[309,[32,45,115,5,162,8]],[310,[33,44,115,5,161,10]],[311,[33,44,115,5,160,12]],[312,[33,44,117,3,159,14]],[313,[34,43,115,5,158,16]],[314,[34,43,115,5,157,17]],[315,[34,43,115,5,157,18]],[316,[34,43,115,5,156,19]],[317,[35,42,115,5,155,20]],[318,[35,42,115,5,155,20]],[319,[35,42,115,5,154,21]],[320,[35,42,115,5,154,21]],[321,[35,42,117,3,153,22]],[322,[36,41,115,5,152,23]],[323,[36,41,115,5,151,24]],[324,[36,41,115,5,151,24]],[325,[36,41,115,5,150,25]],[326,[37,40,115,5,149,26]],[327,[37,40,115,6,148,27]],[328,[37,40,115,6,147,27]],[329,[38,39,115,6,146,28]],[330,[38,39,117,5,145,29]],[331,[38,39,115,7,144,29]],[332,[38,39,115,8,144,29]],[333,[38,43,84,7,93,9,104,10,115,8,143,30]],[334,[38,42,83,8,93,9,104,10,115,9,141,31]],[335,[38,43,83,8,93,10,104,10,115,11,140,32]],[336,[39,42,83,8,93,9,104,10,115,12,137,34]],[337,[39,42,83,8,93,10,104,10,115,56]],[338,[39,42,83,8,93,10,104,7,116,32,149,21]],[339,[39,42,83,8,93,6,104,1,116,31,148,22]],[340,[39,42,83,1,93,10,104,10,115,31,147,23]],[341,[39,42,83,8,93,8,102,1,104,10,115,54]],[342,[39,42,83,8,93,10,104,10,115,54]],[343,[38,43,83,8,93,10,104,10,115,53]],[344,[38,43,83,8,93,9,104,10,115,52]],[345,[38,43,83,8,93,8,102,1,104,10,115,52]],[346,[38,43,84,7,93,8,104,2,117,49]],[347,[38,43,83,4,89,2,97,3,104,2,112,2,115,51]],[348,[38,42,84,2,90,1,93,10,104,10,115,1,117,49]],[349,[38,42,82,1,84,7,94,7,104,10,115,1,117,48]],[350,[37,43,82,9,93,9,104,10,115,1,117,48]],[351,[37,43,82,9,94,9,104,10,115,1,117,47]],[352,[37,43,82,9,94,9,104,10,115,1,117,47]],[353,[37,43,82,9,94,9,104,10,115,1,117,46]],[354,[36,43,82,8,94,9,104,10,115,48]],[355,[36,43,82,1,85,6,94,1,99,4,104,59]],[356,[36,44,82,9,94,1,97,6,104,58]],[357,[35,45,82,9,94,9,104,58]],[358,[35,45,82,9,94,9,104,58]],[359,[35,45,82,9,92,11,104,58]],[360,[34,46,82,9,92,11,104,57]],[361,[34,46,82,9,92,11,104,57]],[362,[33,47,82,9,92,11,104,57]],[363,[33,47,82,9,92,11,104,57]],[364,[32,48,82,9,92,69]],[365,[32,48,82,9,92,69]],[366,[31,49,81,10,92,69]],[367,[31,49,81,10,92,69]],[368,[30,50,81,10,92,68]],[369,[29,51,81,10,92,69]],[370,[29,51,81,10,92,69]],[371,[28,52,81,10,92,69]],[372,[27,53,81,10,92,69]],[373,[27,53,81,10,92,69]],[374,[26,54,81,10,92,69]],[375,[25,55,81,10,92,69]],[376,[25,55,81,10,92,70]],[377,[24,56,81,10,92,70]],[378,[23,57,81,81]],[379,[23,57,81,40,129,33]],[380,[22,58,81,10,92,11,104,8,116,1,131,32]],[381,[21,59,81,10,92,10,104,1,116,1,131,32]],[382,[21,59,81,10,92,4,104,1,113,1,116,1,131,32]],[383,[20,59,81,1,83,2,104,1,116,1,131,33]],[384,[19,53,73,6,81,1,113,1,116,1,131,33]],[385,[19,51,78,1,82,3,113,1,116,1,131,34]],[386,[18,48,76,2,83,2,113,1,131,34]],[387,[18,47,82,2,113,1,131,35]],[388,[17,48,82,2,113,1,131,35]],[389,[17,48,82,2,113,1,131,36]],[390,[16,49,82,2,113,1,131,36]],[391,[15,50,78,1,82,2,131,37]],[392,[15,50,78,1,89,1,105,1,107,1,131,38]],[393,[14,51,78,1,89,1,105,1,107,1,131,39]],[394,[13,52,78,1,89,1,105,1,107,1,131,39]],[395,[13,52,89,1,105,1,107,1,131,40]],[396,[12,53,89,1,105,1,129,1,131,41]],[397,[12,53,89,1,105,1,128,1,131,41]],[398,[11,54,105,1,127,1,129,1,131,42]],[399,[11,54,104,1,113,1,125,1,127,2,130,43]],[400,[10,55,89,1,93,1,104,2,108,1,116,1,127,47]],[401,[9,56,77,1,81,1,89,1,99,1,102,1,104,1,114,1,116,1,121,54]],[402,[9,56,77,1,81,1,102,1,104,1,108,7,116,59]],[403,[8,57,77,1,102,1,104,11,116,60]],[404,[8,58,72,5,94,9,104,72]],[405,[8,59,73,4,80,1,87,2,93,84]],[406,[7,59,72,7,80,10,92,86]],[407,[7,72,80,10,91,87]],[408,[6,73,80,99]],[409,[6,73,80,99]],[410,[5,74,80,100]],[411,[5,74,80,101]],[412,[4,75,80,101]],[413,[4,75,80,102]],[414,[4,75,80,102]],[415,[3,76,80,103]],[416,[3,76,80,103]],[417,[3,76,80,10,91,61,159,25]],[418,[2,88,91,60,160,24]],[419,[2,88,91,59,152,2,161,23]],[420,[2,88,91,59,151,1,154,1,161,24]],[421,[2,88,91,24,116,34,151,1,154,2,161,24]],[422,[1,89,91,24,116,5,129,21,161,25]],[423,[1,89,91,12,104,7,129,21,160,26]],[424,[1,89,91,12,104,2,129,21,160,27]],[425,[1,77,79,11,91,6,130,21,160,27]],[426,[1,77,83,7,101,1,104,1,129,23,153,1,159,29]],[427,[1,77,92,1,129,23,153,2,158,30]],[428,[0,71,77,1,129,59]],[429,[0,65,76,2,81,1,129,60]],[430,[0,64,74,4,101,1,129,60]],[431,[0,64,75,3,101,1,130,59]],[432,[0,64,76,2,130,60]],[433,[0,64,76,2,130,60]],[434,[0,64,76,1,130,60]],[435,[0,64,76,2,130,60]],[436,[0,64,76,1,130,60]],[437,[0,64,76,1,130,61]],[438,[0,64,76,1,130,35,168,23]],[439,[0,64,76,1,101,1,131,31,164,3,170,21]],[440,[0,64,76,1,101,1,104,1,128,1,131,30,163,2,169,22]],[441,[0,64,76,1,88,1,91,1,101,1,104,1,117,8,130,31,169,1,171,20]],[442,[0,64,76,1,88,1,91,1,101,1,104,1,118,1,130,30,171,20]],[443,[0,64,76,1,88,1,91,1,101,1,104,1,118,5,126,2,129,31,172,19]],[444,[0,64,76,1,88,1,100,1,104,1,118,42,172,19]],[445,[1,63,76,1,88,1,91,1,102,1,104,1,112,2,116,44,171,20]],[446,[1,63,76,1,84,2,87,1,91,1,100,1,102,1,104,1,106,55,171,20]],[447,[1,64,74,2,81,2,85,3,94,9,104,60,165,1,170,21]],[448,[1,63,65,1,81,8,91,76,169,1,171,20]],[449,[1,67,70,7,80,10,91,100]],[450,[2,75,79,87,167,24]],[451,[2,189]],[452,[2,189]],[453,[2,189]],[454,[3,188]],[455,[3,74,78,12,91,100]],[456,[4,73,78,113]],[457,[4,73,78,113]],[458,[5,72,78,11,90,101]],[459,[5,72,78,11,91,12,104,49,158,33]],[460,[6,71,78,11,91,12,104,12,117,5,124,28,160,31]],[461,[6,71,78,11,91,12,104,7,114,1,117,1,124,27,160,30]],[462,[7,70,78,11,91,11,114,1,117,4,124,1,126,25,161,29]],[463,[7,70,78,1,80,1,82,4,88,1,91,1,108,1,114,1,117,1,119,3,125,26,161,29]],[464,[8,68,78,3,88,1,92,1,95,7,105,4,110,1,114,1,117,3,121,1,125,26,162,28]],[465,[9,61,72,1,78,10,92,1,101,1,104,2,107,2,114,1,117,5,126,24,162,27]],[466,[9,60,71,3,75,1,78,5,84,1,92,1,97,1,99,3,105,3,117,1,126,24,162,27]],[467,[10,60,71,2,75,1,78,7,88,1,92,2,99,3,104,2,108,3,126,24,161,28]],[468,[10,60,75,1,78,5,87,1,92,1,94,1,97,3,108,3,117,3,121,1,126,25,160,28]],[469,[11,59,73,1,75,1,80,3,95,2,98,2,108,3,112,1,117,1,119,1,121,1,125,29,159,29]],[470,[12,57,71,4,79,2,82,1,84,2,95,1,97,2,101,2,108,1,117,1,126,29,157,1,159,29]],[471,[13,56,71,1,78,1,82,4,88,1,92,4,98,2,102,1,105,1,108,1,111,1,115,1,118,1,126,61]],[472,[14,54,78,1,88,1,91,1,110,1,125,62]],[473,[15,53,71,1,73,1,75,1,78,1,87,2,91,1,111,1,125,61]],[474,[16,52,73,1,75,1,78,1,80,1,86,3,91,1,99,1,125,61]],[475,[16,52,75,1,78,2,85,4,91,1,125,60]],[476,[17,51,75,1,78,1,85,2,99,1,111,2,126,15,143,42]],[477,[18,50,78,1,85,2,88,1,91,1,99,1,112,1,126,14,143,1,146,38]],[478,[19,49,126,13,147,37]],[479,[20,48,75,1,88,1,91,1,126,12,147,36]],[480,[22,46,71,1,105,1,120,1,125,13,148,34]],[481,[23,45,71,1,75,1,92,1,101,1,104,1,113,1,120,1,125,13,148,34]],[482,[24,44,71,2,76,3,103,1,125,13,147,34]],[483,[25,44,75,4,88,1,90,1,113,1,116,3,125,13,147,33]],[484,[27,42,72,1,76,3,83,1,113,1,115,1,119,2,125,14,147,33]],[485,[28,41,78,1,114,2,125,15,147,32]],[486,[30,39,78,1,114,2,118,1,120,1,125,16,147,31]],[487,[31,38,76,3,80,1,85,2,100,1,113,2,116,2,125,19,146,31]],[488,[33,35,71,1,85,1,99,1,125,51]],[489,[34,34,69,1,83,1,99,1,104,3,125,50]],[490,[36,32,69,1,72,1,82,3,92,1,102,1,107,1,109,1,116,1,126,48]],[491,[38,30,71,1,83,4,94,1,106,2,119,1,126,47]],[492,[39,29,70,1,72,1,75,1,83,5,91,1,100,4,109,1,113,6,120,2,126,46]],[493,[41,32,74,9,84,3,88,4,98,1,104,18,125,46]],[494,[44,36,85,2,89,1,98,3,105,11,123,47]],[495,[46,43,95,73]],[496,[48,119]],[497,[50,116]],[498,[52,112]],[499,[54,109]],[500,[57,104]],[501,[60,100]],[502,[63,95]],[503,[66,90]],[504,[69,84]],[505,[73,77]],[506,[77,71]],[507,[81,64]],[508,[85,56]],[509,[90,47]],[510,[96,11,116,2,119,12]]]},"12:1":{"w":186,"h":471,"rows":[[216,[112,1,141,23]],[217,[112,1,141,24]],[218,[112,1,141,24]],[219,[112,1,141,24]],[220,[112,1,141,25]],[221,[112,1,141,25]],[222,[112,1,141,26]],[223,[112,1,141,26]],[224,[112,1,141,26]],[225,[112,1,141,27]],[226,[112,1,141,27]],[227,[112,2,141,27]],[228,[112,2,141,27]],[229,[112,2,140,29]],[230,[112,2,140,29]],[231,[112,2,140,29]],[232,[112,2,140,29]],[233,[112,2,140,29]],[234,[112,1,140,29]],[235,[112,2,139,31]],[236,[112,2,139,31]],[237,[112,2,139,31]],[238,[112,2,139,31]],[239,[112,2,138,32]],[240,[112,2,138,32]],[241,[112,2,137,33]],[242,[112,2,137,33]],[243,[112,2,137,32]],[244,[112,2,136,33]],[245,[112,2,136,33]],[246,[112,2,135,34]],[247,[112,2,135,34]],[248,[112,2,134,35]],[249,[112,2,134,34]],[250,[112,2,133,35]],[251,[112,2,133,35]],[252,[112,2,132,36]],[253,[112,2,131,36]],[254,[112,3,131,36]],[255,[112,3,130,37]],[256,[112,3,129,37]],[257,[112,4,128,38]],[258,[112,5,126,39]],[259,[112,6,125,40]],[260,[112,53]],[261,[112,52]],[262,[112,52]],[263,[30,6,112,52]],[264,[28,9,112,51]],[265,[27,11,112,51]],[266,[26,13,112,51]],[267,[25,15,112,50]],[268,[24,16,112,50]],[269,[24,17,112,50]],[270,[23,8,32,9,112,49]],[271,[23,19,112,49]],[272,[23,19,112,48]],[273,[22,21,112,48]],[274,[22,22,112,47]],[275,[22,22,112,47]],[276,[22,23,112,46]],[277,[22,24,74,1,112,46]],[278,[22,24,74,1,112,46]],[279,[22,25,74,1,112,45]],[280,[22,26,74,1,112,45]],[281,[22,27,73,2,112,44]],[282,[22,27,73,2,112,44]],[283,[22,28,72,3,112,44]],[284,[22,29,71,4,112,43]],[285,[23,29,70,5,112,43]],[286,[23,30,69,6,112,42]],[287,[23,32,68,7,112,42]],[288,[24,33,66,9,112,42]],[289,[24,51,112,41]],[290,[24,51,112,41]],[291,[25,50,112,41]],[292,[25,50,112,40]],[293,[25,50,112,40]],[294,[26,49,112,40]],[295,[26,49,112,39]],[296,[27,48,112,39]],[297,[27,48,112,39]],[298,[27,48,112,39]],[299,[28,47,112,39]],[300,[28,47,112,39]],[301,[28,47,112,38]],[302,[29,46,112,38]],[303,[29,46,112,38]],[304,[30,45,112,38]],[305,[30,45,112,38]],[306,[31,44,112,38]],[307,[31,119]],[308,[31,119]],[309,[32,118]],[310,[32,118]],[311,[32,118]],[312,[32,118]],[313,[33,117]],[314,[33,117]],[315,[33,117]],[316,[33,118]],[317,[33,118]],[318,[33,118]],[319,[34,117]],[320,[34,118]],[321,[34,118]],[322,[34,118]],[323,[34,119]],[324,[34,119]],[325,[34,120]],[326,[34,120]],[327,[33,121]],[328,[33,122]],[329,[33,122]],[330,[33,123]],[331,[33,123]],[332,[32,125]],[333,[32,125]],[334,[32,126]],[335,[31,127]],[336,[31,128]],[337,[31,129]],[338,[30,130]],[339,[30,131]],[340,[29,132]],[341,[29,133]],[342,[28,134]],[343,[28,135]],[344,[27,136]],[345,[26,138]],[346,[26,139]],[347,[25,140]],[348,[24,142]],[349,[24,143]],[350,[23,144]],[351,[22,146]],[352,[22,147]],[353,[21,148]],[354,[20,150]],[355,[20,20,46,125]],[356,[19,19,43,2,48,123]],[357,[19,18,42,4,49,123]],[358,[18,18,37,1,41,7,49,123]],[359,[17,18,36,1,41,6,50,123]],[360,[17,17,42,5,50,123]],[361,[16,17,42,4,50,124]],[362,[15,17,51,124]],[363,[15,16,51,124]],[364,[14,16,51,125]],[365,[13,17,51,125]],[366,[13,16,50,127]],[367,[12,16,50,127]],[368,[11,17,50,128]],[369,[11,16,50,128]],[370,[10,16,50,128]],[371,[9,17,50,129]],[372,[9,16,50,129]],[373,[8,17,50,130]],[374,[8,16,50,130]],[375,[7,16,50,130]],[376,[7,16,50,131]],[377,[6,16,50,131]],[378,[6,16,50,132]],[379,[6,16,50,132]],[380,[5,16,50,132]],[381,[5,16,50,133]],[382,[4,16,50,133]],[383,[4,16,50,133]],[384,[4,15,50,134]],[385,[3,16,20,1,50,134]],[386,[3,15,19,2,50,134]],[387,[3,19,50,134]],[388,[3,19,50,135]],[389,[2,20,50,135]],[390,[2,20,50,135]],[391,[2,14,18,3,50,135]],[392,[2,14,50,135]],[393,[1,15,50,136]],[394,[1,15,50,136]],[395,[1,15,50,136]],[396,[1,14,50,136]],[397,[1,14,45,3,50,136]],[398,[0,15,44,5,50,136]],[399,[0,14,44,5,50,136]],[400,[0,14,44,5,50,136]],[401,[0,14,45,3,50,136]],[402,[0,14,45,3,50,136]],[403,[0,14,46,2,50,136]],[404,[0,14,49,137]],[405,[0,14,49,137]],[406,[0,14,49,137]],[407,[0,14,49,137]],[408,[0,14,49,137]],[409,[0,14,49,137]],[410,[0,14,49,137]],[411,[0,14,49,137]],[412,[0,14,49,137]],[413,[0,14,49,136]],[414,[0,14,49,92,142,43]],[415,[0,15,49,85,137,5,146,39]],[416,[0,15,49,83,134,7,147,38]],[417,[1,15,19,1,49,82,132,3,138,1,149,36]],[418,[1,15,19,2,49,81,131,3,148,1,150,34]],[419,[1,15,18,4,49,80,130,3,148,2,151,33]],[420,[1,15,17,5,49,79,129,1,132,1,149,2,152,32]],[421,[1,21,49,78,129,1,132,1,153,31]],[422,[2,19,49,77,131,1,151,1,154,29]],[423,[2,16,49,77,151,1,154,29]],[424,[2,16,49,77,154,28]],[425,[3,15,48,77,154,28]],[426,[3,16,48,77,155,26]],[427,[3,16,49,76,155,26]],[428,[4,16,48,77,156,24]],[429,[4,17,48,76,156,24]],[430,[4,18,48,76,156,24]],[431,[5,18,49,75,155,24]],[432,[5,18,36,1,49,75,156,23]],[433,[6,18,35,2,49,75,155,23]],[434,[7,17,48,76,127,3,155,22]],[435,[7,19,48,76,127,3,155,22]],[436,[8,19,41,1,48,77,127,2,154,22]],[437,[9,19,40,4,48,19,71,7,83,5,92,8,102,8,113,13,149,3,154,21]],[438,[9,19,39,6,48,19,72,6,83,5,93,6,104,6,116,10,149,26]],[439,[10,20,39,6,47,18,72,6,83,4,94,4,104,6,116,9,130,2,149,1,151,23]],[440,[10,21,40,5,46,20,73,3,82,6,93,5,104,6,114,1,116,10,127,6,149,1,152,21]],[441,[11,22,41,24,73,3,83,5,93,7,101,2,104,6,116,14,132,1,149,23]],[442,[12,22,41,26,71,5,82,8,93,7,103,7,114,1,116,17,150,21]],[443,[13,24,41,37,79,31,113,1,115,17,149,21]],[444,[14,98,113,18,148,21]],[445,[15,119,146,22]],[446,[16,120,143,24]],[447,[17,146,164,2]],[448,[18,144,163,1]],[449,[19,144]],[450,[20,142]],[451,[21,140]],[452,[22,138]],[453,[23,135]],[454,[25,131]],[455,[26,129]],[456,[27,123,151,2]],[457,[29,122]],[458,[30,119]],[459,[32,115]],[460,[34,106,141,4]],[461,[35,103,139,4]],[462,[37,103]],[463,[40,97]],[464,[42,91]],[465,[45,85]],[466,[49,77]],[467,[51,71]],[468,[54,64]],[469,[58,54]],[470,[64,11,78,2,81,25]]]},"13:0":{"w":222,"h":507,"rows":[[266,[170,4]],[267,[46,9,167,10]],[268,[44,13,166,13]],[269,[42,7,53,5,165,5,172,1,174,6]],[270,[41,4,55,4,164,4,178,3]],[271,[40,5,56,3,164,3,179,3]],[272,[39,4,47,6,57,3,163,4,169,7,180,3]],[273,[38,5,46,8,58,2,163,2,169,8,181,3]],[274,[38,3,44,11,59,2,162,3,167,12,182,3]],[275,[37,4,43,13,59,2,162,2,167,13,183,3]],[276,[36,3,42,14,59,3,161,3,167,13,184,2]],[277,[36,3,41,16,60,2,161,2,167,14,185,2]],[278,[35,3,41,16,60,3,160,3,166,16,185,3]],[279,[35,2,40,18,61,3,160,3,165,18,185,3]],[280,[34,3,39,19,61,3,159,4,165,18,186,3]],[281,[34,3,39,20,61,4,159,3,165,18,187,2]],[282,[33,4,39,20,62,3,158,3,164,20,187,3]],[283,[33,3,38,21,63,3,157,4,163,22,187,3]],[284,[33,2,37,23,63,4,157,3,163,22,187,3]],[285,[32,3,37,24,64,3,156,3,162,23,187,4]],[286,[32,3,37,24,65,3,155,4,161,24,188,3]],[287,[32,3,37,25,65,4,154,3,161,25,188,3]],[288,[32,3,37,26,67,3,153,4,160,27,189,2]],[289,[31,4,37,26,67,4,152,4,159,28,189,3]],[290,[31,4,37,28,69,3,88,1,134,1,150,5,158,29,189,3]],[291,[31,4,37,28,70,4,86,3,134,2,149,5,157,30,189,3]],[292,[31,3,36,30,71,6,84,5,134,5,146,6,156,31,189,3]],[293,[31,3,36,31,73,16,135,15,155,32,189,3]],[294,[31,2,36,33,76,10,138,9,154,33,189,3]],[295,[31,2,36,35,79,1,81,4,140,1,153,34,190,2]],[296,[31,2,36,38,87,2,134,2,150,37,190,2]],[297,[31,2,36,39,86,3,134,4,148,39,189,3]],[298,[31,2,36,53,134,53,189,3]],[299,[31,2,36,53,134,53,189,3]],[300,[31,2,36,53,134,53,189,3]],[301,[31,3,37,52,134,52,189,3]],[302,[31,3,37,52,134,52,189,3]],[303,[31,4,37,52,134,52,189,3]],[304,[32,3,37,52,134,52,189,3]],[305,[32,3,37,52,138,48,189,2]],[306,[32,3,37,48,134,2,139,46,188,3]],[307,[32,3,37,48,134,3,138,47,188,3]],[308,[33,2,38,48,87,2,134,1,137,48,187,4]],[309,[33,3,39,47,87,2,134,1,136,49,187,3]],[310,[33,3,39,47,87,2,134,3,138,46,187,3]],[311,[34,3,39,47,88,1,134,3,139,45,187,3]],[312,[34,3,39,47,88,1,135,48,186,3]],[313,[35,2,39,48,88,1,135,48,186,3]],[314,[35,3,40,49,135,48,185,3]],[315,[35,4,41,48,137,1,139,43,185,3]],[316,[36,3,41,46,88,1,139,42,184,4]],[317,[36,3,41,46,88,1,139,42,184,3]],[318,[36,3,42,46,139,42,183,4]],[319,[37,3,43,45,134,1,139,41,183,3]],[320,[37,3,43,43,134,1,140,39,182,4]],[321,[37,4,44,42,140,39,182,3]],[322,[38,4,45,41,134,1,140,39,181,4]],[323,[38,5,45,41,134,1,140,38,181,3]],[324,[39,4,46,40,140,37,180,4]],[325,[39,4,46,40,88,1,139,38,180,3]],[326,[40,4,47,39,140,36,179,3]],[327,[41,4,47,39,139,36,179,3]],[328,[42,3,47,39,134,1,139,36,178,3]],[329,[42,3,48,38,139,36,177,4]],[330,[43,3,49,37,90,5,101,1,127,3,137,37,177,4]],[331,[43,3,49,38,91,4,98,5,108,2,118,2,127,4,137,37,177,3]],[332,[43,4,49,41,98,1,103,2,107,8,116,10,127,46,176,4]],[333,[44,3,49,48,98,75,176,4]],[334,[44,3,49,124,176,3]],[335,[44,3,50,123,175,4]],[336,[44,3,50,123,175,4]],[337,[44,4,50,123,176,3]],[338,[45,3,50,123,175,4]],[339,[44,3,50,123,175,4]],[340,[44,3,50,123,176,3]],[341,[44,3,50,123,176,3]],[342,[44,3,49,124,176,3]],[343,[43,4,49,125,177,3]],[344,[43,4,49,125,177,3]],[345,[42,4,49,126,177,3]],[346,[42,3,49,126,177,4]],[347,[41,4,48,127,178,3]],[348,[40,4,47,129,179,3]],[349,[40,4,47,130,179,4]],[350,[39,4,46,131,180,4]],[351,[38,4,45,133,181,3]],[352,[37,4,44,135,182,3]],[353,[36,5,43,136,183,3]],[354,[35,4,42,138,184,3]],[355,[35,3,41,140,185,3]],[356,[33,4,41,141,186,3]],[357,[32,4,40,26,68,87,159,24,187,3]],[358,[31,4,39,24,64,2,68,86,159,25,188,4]],[359,[30,4,38,22,61,1,69,2,72,81,161,2,164,21,189,4]],[360,[29,4,36,26,68,3,72,80,161,2,165,21,190,4]],[361,[28,4,35,26,67,4,73,23,97,18,119,8,128,2,139,14,158,6,165,22,191,4]],[362,[27,4,34,24,59,1,63,1,66,5,73,21,135,2,139,14,155,10,166,22,192,4]],[363,[26,4,34,25,63,2,67,4,72,13,89,1,139,13,153,4,159,30,193,4]],[364,[25,4,32,24,63,1,72,13,87,3,140,19,160,2,165,25,194,4]],[365,[24,5,31,25,57,2,62,1,65,20,87,3,138,1,140,20,161,1,165,2,168,23,195,3]],[366,[23,4,30,26,59,3,64,21,88,2,134,1,139,28,169,23,196,3]],[367,[22,4,29,26,60,26,88,2,134,1,139,25,165,1,169,24,197,3]],[368,[21,4,28,28,59,3,63,22,89,1,139,29,169,25,198,3]],[369,[21,4,27,27,55,1,57,4,62,23,86,4,139,23,163,1,165,2,169,26,199,3]],[370,[20,4,26,28,56,1,58,3,62,28,139,23,163,6,170,26,199,4]],[371,[19,4,25,30,56,29,87,3,139,30,171,26,200,4]],[372,[18,4,25,60,88,2,139,24,164,5,171,27,201,3]],[373,[17,4,24,30,55,5,61,24,89,1,139,24,164,6,171,28,201,4]],[374,[17,3,23,29,53,6,61,24,86,3,134,1,138,25,164,5,172,27,203,3]],[375,[16,3,23,29,53,1,55,4,60,26,87,2,134,1,137,27,165,4,170,1,173,27,203,4]],[376,[15,4,22,31,56,3,60,26,88,1,134,1,137,27,165,4,173,28,204,4]],[377,[14,4,21,31,58,1,60,25,88,1,134,2,137,30,170,2,173,29,205,4]],[378,[14,3,20,32,53,1,58,27,88,1,112,1,134,2,139,27,169,1,171,1,173,29,206,3]],[379,[13,4,19,31,51,1,53,1,56,1,58,27,134,2,139,27,169,1,174,29,206,4]],[380,[12,4,18,34,53,32,134,1,138,28,175,29,207,4]],[381,[12,3,17,35,53,5,59,26,134,3,139,27,167,4,173,1,175,29,207,4]],[382,[11,3,17,31,49,2,52,4,59,26,134,1,139,35,175,30,208,4]],[383,[10,3,17,31,49,7,59,26,134,1,139,67,209,3]],[384,[10,3,15,32,48,9,59,26,133,2,139,26,166,9,176,31,209,4]],[385,[9,4,15,31,48,9,59,26,89,1,105,2,119,1,134,1,139,26,166,41,210,3]],[386,[9,3,15,30,47,10,59,26,93,1,97,6,105,4,112,1,115,3,120,2,125,2,138,28,167,41,211,3]],[387,[8,3,14,31,46,11,59,27,88,1,90,1,93,2,97,6,105,12,119,5,125,1,129,4,136,29,167,42,211,3]],[388,[8,3,14,30,45,12,59,35,97,7,106,60,167,11,180,29,211,4]],[389,[7,3,13,30,44,2,47,10,59,37,97,7,105,61,167,12,181,28,212,3]],[390,[7,3,13,29,43,14,58,38,97,7,105,61,167,43,213,3]],[391,[6,3,12,30,43,14,58,46,105,61,167,44,213,3]],[392,[6,3,11,31,43,14,58,46,105,106,214,3]],[393,[5,4,11,31,44,13,58,153,214,3]],[394,[5,4,11,32,44,13,59,58,119,7,129,6,136,44,181,31,215,2]],[395,[5,3,10,33,44,14,59,37,97,6,105,4,112,4,138,41,181,31,215,3]],[396,[4,3,9,34,44,42,89,2,139,39,181,32,215,3]],[397,[4,3,9,34,44,41,139,38,178,1,181,32,216,3]],[398,[4,3,9,34,44,13,59,26,94,1,97,1,139,26,167,12,181,32,216,3]],[399,[3,4,9,34,45,11,58,26,97,1,140,26,168,11,181,33,217,2]],[400,[3,2,9,34,44,11,57,27,140,27,169,8,178,1,181,33,217,2]],[401,[3,2,8,35,45,7,53,1,56,28,140,27,170,9,181,33,217,3]],[402,[3,2,8,35,45,8,55,29,105,2,139,30,170,9,181,34,217,3]],[403,[2,3,7,36,44,6,51,2,55,29,94,1,97,1,105,1,139,30,171,8,180,35,217,3]],[404,[2,3,7,35,44,6,51,1,54,31,137,33,172,43,218,3]],[405,[2,3,7,35,44,7,53,33,119,52,172,43,218,3]],[406,[1,3,7,35,43,6,50,1,52,43,96,7,105,66,173,43,219,2]],[407,[1,3,7,34,43,6,52,120,173,6,180,36,219,2]],[408,[1,3,7,34,43,1,45,5,51,166,219,3]],[409,[1,3,6,35,45,154,201,16,219,3]],[410,[1,2,6,35,42,1,47,1,50,131,182,13,204,13,219,3]],[411,[0,3,6,35,42,1,48,1,50,124,175,6,182,12,205,12,219,3]],[412,[0,3,6,34,43,1,48,126,175,6,182,11,206,11,219,3]],[413,[0,3,5,35,44,130,175,7,183,10,207,10,219,3]],[414,[0,3,5,34,44,4,49,125,176,6,183,10,207,10,220,2]],[415,[0,3,5,34,44,3,49,126,176,6,184,9,207,10,220,2]],[416,[0,3,5,34,43,4,48,127,177,6,184,9,207,10,220,2]],[417,[0,3,5,34,43,4,48,128,177,6,185,8,207,10,220,2]],[418,[0,3,5,33,42,2,45,1,48,128,177,6,185,8,206,11,220,2]],[419,[0,3,5,32,39,1,41,2,45,1,47,137,185,8,205,12,220,2]],[420,[0,3,5,32,39,6,47,36,86,3,95,1,97,2,128,2,133,5,141,43,185,9,205,12,220,2]],[421,[0,3,5,32,38,7,46,36,142,36,179,3,184,1,186,9,203,14,220,2]],[422,[0,3,5,31,38,1,41,40,143,35,179,2,187,10,201,16,220,2]],[423,[0,3,5,30,37,2,42,39,143,37,181,1,187,30,220,2]],[424,[0,3,5,23,29,3,38,1,45,36,143,39,186,1,191,26,220,2]],[425,[0,3,5,21,28,1,30,2,36,4,44,37,143,37,181,2,185,3,190,27,220,2]],[426,[0,3,6,20,27,1,29,13,43,38,144,36,181,3,186,10,198,19,220,2]],[427,[0,3,6,19,27,1,29,13,43,38,143,38,182,2,187,10,199,18,220,2]],[428,[0,3,6,21,29,12,43,37,143,18,165,16,183,2,187,10,199,18,219,3]],[429,[0,3,6,19,26,14,42,39,143,16,166,16,184,1,187,10,199,18,219,3]],[430,[1,2,6,19,26,13,41,40,142,15,167,16,184,13,198,19,219,3]],[431,[1,2,6,19,27,1,29,9,41,42,141,16,167,17,185,11,197,19,219,3]],[432,[1,3,6,20,28,1,30,7,39,118,168,17,186,7,194,1,197,19,219,3]],[433,[1,3,7,20,29,6,38,119,164,1,168,18,188,6,196,20,219,3]],[434,[1,3,7,21,36,121,168,20,194,22,219,3]],[435,[1,4,7,23,34,123,168,21,192,23,218,3]],[436,[2,3,7,150,167,48,218,3]],[437,[2,3,7,150,167,48,218,3]],[438,[2,3,7,152,166,49,217,4]],[439,[2,3,8,153,164,50,217,3]],[440,[3,2,8,206,217,3]],[441,[3,3,9,205,217,3]],[442,[3,3,9,177,191,22,216,3]],[443,[4,3,9,175,192,21,216,3]],[444,[4,3,9,174,194,19,215,4]],[445,[4,3,9,173,195,18,215,3]],[446,[4,3,10,171,195,18,215,3]],[447,[5,3,11,170,195,17,215,3]],[448,[5,3,11,170,195,16,214,3]],[449,[5,3,11,170,188,1,195,16,214,3]],[450,[6,3,12,169,195,15,213,3]],[451,[6,3,13,168,195,15,213,3]],[452,[7,3,13,168,195,14,212,3]],[453,[7,3,13,169,195,14,211,4]],[454,[8,3,14,169,194,14,211,3]],[455,[8,3,15,169,193,15,211,3]],[456,[9,3,15,175,192,15,210,3]],[457,[10,3,15,191,210,3]],[458,[10,3,16,190,209,3]],[459,[11,3,17,188,209,3]],[460,[11,3,17,146,165,39,208,3]],[461,[12,3,17,144,169,35,207,4]],[462,[13,3,19,140,170,33,207,3]],[463,[13,4,19,139,171,31,206,3]],[464,[14,3,20,137,172,30,205,4]],[465,[15,3,21,136,172,29,205,3]],[466,[16,3,22,135,172,28,204,3]],[467,[16,3,23,134,172,27,203,3]],[468,[17,4,23,134,172,26,202,4]],[469,[18,3,25,132,172,25,201,4]],[470,[19,4,26,132,172,25,200,4]],[471,[20,3,27,132,171,25,199,4]],[472,[20,4,27,132,171,24,199,3]],[473,[21,4,28,132,161,1,170,24,198,3]],[474,[22,4,29,137,168,25,196,4]],[475,[23,4,30,162,195,4]],[476,[24,4,32,159,194,4]],[477,[25,4,33,156,193,4]],[478,[26,4,33,155,192,4]],[479,[27,4,35,152,191,4]],[480,[28,5,36,150,190,4]],[481,[29,4,38,146,189,4]],[482,[31,4,39,144,187,5]],[483,[32,4,40,141,186,5]],[484,[33,5,42,138,184,5]],[485,[35,4,43,135,183,4]],[486,[36,4,45,132,181,5]],[487,[37,5,46,130,180,4]],[488,[39,5,49,124,178,4]],[489,[40,6,50,122,176,5]],[490,[42,6,53,116,174,6]],[491,[44,5,54,113,173,5]],[492,[46,6,57,107,170,7]],[493,[48,5,58,104,169,6]],[494,[50,6,62,97,166,7]],[495,[52,5,64,93,164,7]],[496,[53,10,69,84,161,7]],[497,[55,8,70,80,159,7]],[498,[58,7,76,70,154,10]],[499,[61,8,78,63,152,9]],[500,[64,12,87,48,148,10]],[501,[67,10,97,28,144,11]],[502,[71,14,86,1,138,12]],[503,[76,13,133,13]],[504,[80,18,117,2,120,21]],[505,[85,50]],[506,[92,36]]]},"13:1":{"w":230,"h":481,"rows":[[232,[175,3]],[233,[50,7,172,10]],[234,[47,12,171,13]],[235,[45,7,54,6,169,5,178,7]],[236,[44,6,56,5,168,4,179,7]],[237,[43,5,58,4,167,4,183,4]],[238,[41,6,52,2,60,2,167,3,175,3,184,4]],[239,[41,3,48,8,60,3,166,4,172,9,186,3]],[240,[40,4,47,10,61,2,166,3,172,10,186,4]],[241,[39,3,46,12,61,3,165,3,172,12,187,3]],[242,[38,4,45,14,62,3,165,3,171,14,188,3]],[243,[37,4,44,15,62,3,164,4,170,15,189,3]],[244,[37,3,43,17,63,3,164,3,170,16,189,4]],[245,[36,4,42,18,63,3,163,3,170,17,190,3]],[246,[36,3,42,19,64,3,163,3,169,19,190,4]],[247,[35,3,41,21,64,4,162,3,168,20,191,3]],[248,[35,3,40,22,64,4,161,4,168,21,192,3]],[249,[34,4,40,22,65,4,160,4,167,23,192,3]],[250,[34,3,40,23,66,4,160,3,166,24,192,4]],[251,[34,3,39,25,66,4,159,4,166,24,192,4]],[252,[34,2,38,26,67,4,158,4,166,24,193,3]],[253,[33,3,38,27,68,4,157,4,164,27,194,2]],[254,[33,3,38,28,69,5,156,4,164,27,194,3]],[255,[33,3,38,28,70,5,92,1,155,5,163,28,194,3]],[256,[33,3,38,29,71,5,91,2,154,5,162,30,194,3]],[257,[32,4,38,31,73,5,89,4,138,2,151,6,161,31,194,3]],[258,[32,4,38,32,74,8,86,7,138,18,160,32,194,3]],[259,[32,4,38,33,76,16,138,16,158,34,194,3]],[260,[32,4,38,34,77,13,140,13,158,34,195,2]],[261,[32,4,38,36,156,36,195,2]],[262,[32,3,38,38,92,1,153,39,195,2]],[263,[32,3,38,55,138,54,194,3]],[264,[32,3,38,55,138,54,194,3]],[265,[32,3,38,55,138,54,195,2]],[266,[32,4,38,55,138,54,194,3]],[267,[32,4,38,55,138,54,194,3]],[268,[33,3,38,55,138,54,194,3]],[269,[33,3,38,55,138,53,194,3]],[270,[33,3,38,55,138,53,194,3]],[271,[33,3,39,54,138,53,194,3]],[272,[34,2,39,54,138,52,194,2]],[273,[34,2,40,53,138,52,193,3]],[274,[34,3,40,53,138,52,192,4]],[275,[34,3,40,53,138,52,192,4]],[276,[35,3,40,53,138,51,192,3]],[277,[35,3,40,53,138,51,192,3]],[278,[35,3,41,52,138,50,192,3]],[279,[36,3,42,51,138,50,191,3]],[280,[36,4,42,51,138,50,191,3]],[281,[37,3,42,51,138,49,190,3]],[282,[37,3,43,50,138,49,190,3]],[283,[38,2,44,49,138,48,189,3]],[284,[38,3,44,49,138,48,188,4]],[285,[38,3,44,49,138,47,188,3]],[286,[39,3,45,48,138,47,188,3]],[287,[40,2,46,47,138,46,187,3]],[288,[40,3,46,47,138,46,187,3]],[289,[41,3,46,47,138,45,186,3]],[290,[41,4,47,46,138,44,186,3]],[291,[42,4,48,45,138,44,185,3]],[292,[43,3,48,45,138,43,184,4]],[293,[43,3,49,44,138,43,184,3]],[294,[44,3,50,43,138,42,183,4]],[295,[44,4,50,43,138,42,183,3]],[296,[44,4,51,42,138,41,182,4]],[297,[45,3,51,42,138,41,182,3]],[298,[45,3,52,41,138,40,182,3]],[299,[45,3,52,41,138,40,181,4]],[300,[46,3,52,41,138,40,181,3]],[301,[46,3,52,41,138,40,181,3]],[302,[46,3,52,41,138,40,181,3]],[303,[46,3,52,41,138,40,181,3]],[304,[46,3,52,41,138,40,181,3]],[305,[46,3,52,41,138,40,181,3]],[306,[46,3,52,41,138,40,181,3]],[307,[45,3,52,41,138,40,181,4]],[308,[45,3,51,42,138,41,182,3]],[309,[45,3,51,42,138,41,182,3]],[310,[44,4,50,43,138,41,182,4]],[311,[44,4,50,43,138,42,183,3]],[312,[43,4,50,43,138,42,183,4]],[313,[42,4,48,133,184,4]],[314,[42,3,48,134,184,4]],[315,[41,3,48,134,185,4]],[316,[40,4,47,136,186,4]],[317,[39,4,46,137,187,4]],[318,[38,4,45,139,188,4]],[319,[37,4,44,142,189,4]],[320,[36,4,43,143,190,4]],[321,[35,4,42,145,191,4]],[322,[33,5,41,147,192,4]],[323,[32,4,40,149,194,3]],[324,[31,5,39,151,194,5]],[325,[30,4,37,154,196,4]],[326,[29,5,36,156,196,5]],[327,[28,4,35,159,197,5]],[328,[27,5,34,161,198,5]],[329,[26,4,33,163,199,5]],[330,[25,5,32,165,200,5]],[331,[24,4,31,167,202,3]],[332,[23,5,30,169,202,4]],[333,[22,4,29,171,203,4]],[334,[21,5,28,173,204,4]],[335,[21,4,28,174,205,4]],[336,[20,4,26,176,206,4]],[337,[19,4,26,177,207,4]],[338,[18,4,25,179,208,4]],[339,[17,4,24,182,208,5]],[340,[16,5,23,183,210,3]],[341,[15,5,22,185,210,4]],[342,[14,5,21,187,211,4]],[343,[14,4,20,189,212,4]],[344,[13,5,19,191,213,4]],[345,[12,4,19,191,214,3]],[346,[12,4,18,193,214,4]],[347,[11,4,17,195,215,4]],[348,[11,3,17,195,216,3]],[349,[10,4,16,197,216,4]],[350,[10,4,16,197,217,3]],[351,[9,3,15,199,217,4]],[352,[8,4,15,200,218,3]],[353,[8,4,14,202,218,4]],[354,[7,4,14,202,219,3]],[355,[7,3,13,204,220,3]],[356,[6,4,12,20,45,172,220,3]],[357,[6,4,12,18,48,170,221,3]],[358,[5,4,12,16,51,167,221,3]],[359,[5,3,11,16,29,2,33,1,53,165,222,3]],[360,[4,4,10,16,29,1,33,1,56,163,222,3]],[361,[4,4,10,15,29,1,33,2,57,163,222,4]],[362,[4,4,10,14,29,1,34,1,60,160,222,4]],[363,[3,4,10,13,62,158,222,4]],[364,[3,3,9,13,64,157,223,4]],[365,[3,3,9,13,65,156,224,3]],[366,[3,3,8,13,67,155,224,3]],[367,[2,4,8,13,67,155,224,4]],[368,[2,3,8,12,67,155,224,4]],[369,[2,3,8,12,67,155,224,4]],[370,[1,3,7,12,67,155,225,3]],[371,[1,3,7,12,68,155,225,4]],[372,[1,3,7,12,68,155,226,3]],[373,[1,3,6,12,68,155,226,3]],[374,[0,4,6,12,68,155,226,3]],[375,[0,4,6,12,68,155,226,4]],[376,[0,3,6,11,68,156,226,4]],[377,[0,3,6,11,68,156,226,4]],[378,[0,3,6,11,68,156,226,4]],[379,[0,3,6,11,68,156,227,3]],[380,[0,3,6,11,69,155,227,3]],[381,[0,2,5,11,69,155,227,3]],[382,[0,2,4,12,69,155,227,3]],[383,[0,2,4,12,69,156,228,2]],[384,[0,2,4,12,69,156,228,2]],[385,[0,2,4,12,69,156,228,2]],[386,[0,2,4,12,69,156,228,2]],[387,[0,2,4,12,69,156,228,2]],[388,[0,2,4,12,69,156,228,2]],[389,[0,2,4,12,69,156,228,2]],[390,[0,2,4,12,69,156,228,2]],[391,[0,2,4,12,69,156,228,2]],[392,[0,2,5,11,69,156,228,2]],[393,[0,2,5,13,69,155,227,3]],[394,[0,2,5,12,69,155,227,3]],[395,[0,2,5,11,69,155,227,3]],[396,[0,3,6,10,69,155,227,3]],[397,[0,3,6,11,69,155,227,3]],[398,[0,4,6,11,65,2,69,155,226,4]],[399,[0,4,6,11,69,155,226,4]],[400,[0,4,6,11,69,155,226,3]],[401,[0,4,6,11,69,154,226,3]],[402,[1,3,6,11,69,154,226,3]],[403,[1,3,7,10,69,154,226,3]],[404,[1,3,7,10,69,154,226,3]],[405,[1,3,7,11,69,153,225,3]],[406,[2,2,7,12,69,153,224,4]],[407,[2,3,8,11,69,153,224,4]],[408,[2,3,8,11,69,153,224,3]],[409,[2,4,8,11,69,153,224,3]],[410,[3,3,8,11,69,152,224,3]],[411,[3,3,8,12,69,151,223,3]],[412,[3,3,9,11,69,151,223,3]],[413,[4,2,10,11,69,151,222,4]],[414,[4,3,10,11,69,151,222,4]],[415,[4,3,10,11,69,150,222,3]],[416,[5,3,11,11,70,148,222,3]],[417,[5,3,11,12,70,148,221,3]],[418,[6,3,12,11,70,147,221,3]],[419,[6,3,12,12,31,1,70,147,220,3]],[420,[6,4,12,12,29,1,31,2,70,146,220,3]],[421,[7,4,13,12,27,6,70,146,219,3]],[422,[8,4,14,12,27,4,32,1,70,145,218,4]],[423,[8,4,14,12,28,3,71,144,218,3]],[424,[9,3,15,12,71,143,217,4]],[425,[9,4,16,13,71,143,217,3]],[426,[10,4,16,13,71,142,216,4]],[427,[11,3,17,13,71,141,216,3]],[428,[11,3,18,12,71,140,215,4]],[429,[12,3,18,13,71,140,214,4]],[430,[12,4,19,14,71,139,214,3]],[431,[13,3,20,13,71,139,213,4]],[432,[14,3,20,14,71,138,212,4]],[433,[14,4,21,14,71,137,211,4]],[434,[15,4,22,15,71,136,210,4]],[435,[16,4,23,16,71,135,209,4]],[436,[17,4,24,16,71,134,208,5]],[437,[17,5,25,16,66,1,71,133,208,4]],[438,[18,4,26,17,65,2,70,133,207,4]],[439,[19,4,27,17,63,1,65,2,70,132,206,4]],[440,[20,4,28,18,62,1,64,3,69,132,205,4]],[441,[21,4,28,19,63,4,69,131,204,4]],[442,[22,4,29,21,63,136,203,4]],[443,[23,5,30,22,65,133,202,4]],[444,[24,4,31,25,63,134,201,4]],[445,[25,5,33,27,61,135,200,4]],[446,[26,5,34,160,199,4]],[447,[28,5,36,157,197,5]],[448,[29,4,37,155,196,6]],[449,[30,5,39,151,194,7]],[450,[31,5,40,149,194,5]],[451,[32,5,42,145,191,7]],[452,[34,4,43,143,190,6]],[453,[35,6,45,139,189,5]],[454,[37,5,47,136,188,5]],[455,[38,6,48,133,185,6]],[456,[40,5,50,129,184,6]],[457,[42,5,52,125,182,6]],[458,[43,5,53,122,181,6]],[459,[44,7,56,116,178,7]],[460,[46,6,57,113,177,6]],[461,[48,8,61,107,174,8]],[462,[50,7,63,103,173,7]],[463,[52,9,67,95,169,9]],[464,[54,8,68,92,168,7]],[465,[57,8,75,80,164,9]],[466,[59,9,76,75,162,9]],[467,[62,11,83,63,157,11]],[468,[65,10,86,1,88,55,154,10]],[469,[68,16,96,36,148,13]],[470,[73,11,99,24,126,2,129,1,145,12]],[471,[77,20,132,1,134,19]],[472,[82,17,130,18]],[473,[87,55]],[474,[95,41]],[475,[106,21]],[476,[111,2,117,2]],[477,[109,4,116,5]],[478,[108,4,119,2]],[479,[108,3,119,3]],[480,[109,2,115,6]]]},"14:0":{"w":195,"h":517,"rows":[[237,[28,10]],[238,[26,12]],[239,[24,14]],[240,[23,16]],[241,[22,6,32,8]],[242,[21,5,34,7]],[243,[20,6,35,7]],[244,[20,5,36,6]],[245,[19,6,30,3,37,6]],[246,[18,6,28,6,37,6]],[247,[18,6,27,9,37,7]],[248,[17,6,27,10,38,6]],[249,[17,6,26,18]],[250,[17,5,25,20]],[251,[16,5,25,20]],[252,[16,5,25,20]],[253,[16,5,25,21]],[254,[15,6,24,22]],[255,[15,6,24,22]],[256,[15,6,24,22]],[257,[15,6,24,23]],[258,[15,6,23,24]],[259,[15,6,23,24]],[260,[15,6,23,25]],[261,[14,7,22,26]],[262,[14,6,22,26]],[263,[14,6,22,27]],[264,[14,6,22,20,43,6]],[265,[14,6,22,20,43,6]],[266,[14,6,22,20,43,7]],[267,[14,6,22,21,44,6]],[268,[14,6,22,21,44,7]],[269,[14,6,22,30]],[270,[14,6,23,29]],[271,[14,6,23,30]],[272,[14,6,23,30,78,1]],[273,[14,7,23,31,78,1]],[274,[14,7,23,31,78,1]],[275,[15,6,23,32,78,1]],[276,[15,6,23,32,78,1]],[277,[15,6,23,33,78,1]],[278,[15,6,23,33,78,1]],[279,[15,6,23,26,50,7,78,1]],[280,[15,6,23,26,51,7,78,1]],[281,[15,6,23,27,52,7,78,1]],[282,[15,6,24,27,53,7,77,2]],[283,[16,5,24,27,54,7,76,3]],[284,[16,6,24,28,55,8,75,4]],[285,[16,6,25,28,56,9,73,6]],[286,[16,6,25,29,58,21]],[287,[16,7,25,30,59,20]],[288,[17,6,25,30,61,18]],[289,[17,6,25,31,62,17]],[290,[17,6,25,32,64,15]],[291,[17,6,25,34,66,7,76,3]],[292,[17,7,25,37,75,4]],[293,[18,6,25,40,74,5]],[294,[18,7,26,53]],[295,[18,7,27,52]],[296,[19,6,27,52]],[297,[19,6,27,41,69,10]],[298,[19,6,27,33,61,8,73,6]],[299,[19,7,27,32,60,3,67,4,74,5]],[300,[20,6,28,30,59,2,70,3,75,4]],[301,[20,7,28,30,59,1,64,2,67,2,72,2,76,3]],[302,[20,7,29,28,58,2,61,3,65,2,70,1,73,3,78,1]],[303,[21,6,29,28,58,1,61,2,65,2,75,2,78,1]],[304,[21,6,29,27,58,1,61,7,76,3]],[305,[21,7,29,27,58,1,61,7,77,2]],[306,[21,7,30,26,58,1,62,5,78,1]],[307,[22,7,30,26,58,1,63,3,78,1,157,8]],[308,[22,7,31,25,58,1,78,1,154,14]],[309,[22,7,31,26,58,1,78,1,153,16]],[310,[23,6,31,26,58,1,78,1,151,7,159,12]],[311,[23,7,31,26,59,1,78,1,150,6,163,9]],[312,[23,7,32,25,59,1,78,1,149,6,166,7]],[313,[24,7,32,25,59,1,78,1,117,1,148,6,167,6]],[314,[24,7,33,24,59,1,78,1,117,1,147,6,159,7,168,6]],[315,[24,7,33,24,60,1,78,1,117,2,146,7,157,10,169,6]],[316,[25,7,33,25,60,1,117,2,146,6,155,20]],[317,[25,7,34,25,60,1,117,2,144,7,154,22]],[318,[26,6,34,25,60,2,78,1,117,3,143,6,153,9,165,12]],[319,[26,7,35,24,61,1,78,1,117,3,142,7,152,12,166,11]],[320,[26,7,35,24,61,1,78,1,117,4,141,6,151,8,164,1,167,10]],[321,[27,6,35,25,61,1,78,1,117,4,140,6,151,6,161,1,165,1,167,11]],[322,[27,6,35,25,61,2,78,1,117,6,138,7,149,7,162,1,165,2,168,10]],[323,[28,6,36,24,61,2,78,1,117,7,136,8,149,6,159,4,166,12]],[324,[28,6,37,23,62,1,78,1,117,9,134,9,148,3,152,2,158,6,166,13]],[325,[28,7,37,24,62,1,77,2,117,25,147,3,151,2,158,6,167,12]],[326,[29,6,37,24,62,1,77,2,117,24,144,4,150,2,158,6,167,12]],[327,[29,6,37,24,62,2,77,2,117,22,143,4,149,2,159,4,167,13]],[328,[29,7,38,23,62,2,77,2,117,16,140,6,148,1,167,13]],[329,[30,6,38,23,63,1,77,2,117,6,126,3,139,6,147,1,167,13]],[330,[30,7,39,25,77,2,117,8,136,8,145,2,149,1,167,13]],[331,[30,7,39,23,63,1,77,2,117,9,135,7,144,2,168,12]],[332,[31,6,39,23,63,1,77,2,117,23,142,2,167,13]],[333,[31,6,39,23,63,1,77,2,117,25,167,13]],[334,[31,6,39,23,63,2,77,2,117,19,137,3,167,12]],[335,[32,6,40,22,64,1,77,2,117,2,120,9,130,8,167,12]],[336,[32,6,40,23,64,1,77,2,117,5,124,10,167,12]],[337,[32,6,40,23,64,1,77,4,82,9,92,10,103,9,113,1,115,4,121,2,167,12]],[338,[33,6,41,22,64,1,77,4,82,9,92,10,103,9,113,6,122,2,168,11]],[339,[33,6,41,22,64,1,77,2,80,1,82,9,92,10,103,9,113,6,121,2,167,12]],[340,[33,6,41,22,64,1,78,1,82,9,92,10,103,9,113,5,166,13]],[341,[33,6,41,22,64,1,69,1,78,1,82,9,92,10,103,9,113,5,166,13]],[342,[33,6,41,22,64,1,68,3,82,7,90,1,92,1,94,8,103,1,105,7,113,2,166,13]],[343,[33,6,41,22,64,1,67,2,70,1,79,1,83,5,95,5,107,5,113,1,166,13]],[344,[34,5,41,22,64,1,68,3,79,1,82,1,85,5,92,1,96,3,101,1,104,1,106,1,111,1,166,13]],[345,[34,5,41,22,64,1,68,2,79,1,85,5,92,1,101,1,165,14]],[346,[34,5,41,22,64,1,68,1,79,1,89,1,92,1,99,2,165,13]],[347,[34,5,42,21,64,1,79,1,92,2,166,12]],[348,[34,5,42,21,64,1,79,1,89,1,92,1,164,1,166,12]],[349,[34,5,42,21,79,1,82,1,92,1,164,13]],[350,[34,5,42,21,64,1,79,1,82,1,92,1,165,12]],[351,[34,5,41,22,64,1,67,4,79,1,82,1,92,1,165,12]],[352,[34,5,41,22,64,1,67,5,79,1,82,1,89,1,92,1,163,13]],[353,[34,5,41,22,67,5,79,1,89,1,92,1,163,13]],[354,[34,5,41,22,64,1,67,3,79,1,89,1,92,1,162,14]],[355,[34,5,41,22,64,1,79,1,89,1,92,1,162,14]],[356,[34,5,41,22,64,1,79,1,89,1,92,1,111,1,162,13]],[357,[33,6,41,22,64,1,79,1,82,1,89,1,92,1,111,1,162,13]],[358,[33,6,41,22,64,1,79,1,89,1,92,1,111,1,161,14]],[359,[33,5,41,22,64,1,79,1,89,1,92,1,111,1,162,12]],[360,[33,5,41,21,64,1,79,1,89,1,92,1,111,1,160,14]],[361,[33,5,40,22,64,1,79,1,89,1,92,1,111,1,160,13]],[362,[32,5,40,22,64,1,79,1,89,1,92,1,111,1,161,12]],[363,[32,5,40,22,63,2,79,1,89,1,92,1,111,1,159,14]],[364,[31,6,39,23,78,2,89,1,92,1,111,1,159,13]],[365,[31,6,39,23,63,1,78,2,89,1,92,1,111,1,114,1,159,13]],[366,[31,5,39,23,63,1,78,2,89,1,92,1,111,1,114,1,158,13]],[367,[30,5,39,23,63,1,78,2,89,1,92,1,111,1,114,1,159,12]],[368,[30,5,38,23,63,1,78,2,89,1,92,1,111,1,114,1,159,12]],[369,[30,5,38,23,63,1,78,2,89,1,92,1,111,1,114,1,157,13]],[370,[29,5,37,24,62,1,78,1,89,1,92,1,111,1,114,1,158,12]],[371,[29,4,37,24,62,1,78,1,81,1,89,1,101,1,111,1,114,1,156,14]],[372,[28,5,37,24,62,1,78,2,81,1,89,1,92,1,111,1,114,1,156,13]],[373,[28,5,36,24,62,1,78,2,81,1,89,1,92,1,101,1,111,1,114,1,157,12]],[374,[27,5,36,24,62,1,78,2,81,1,89,1,92,1,101,1,111,1,114,1,157,11]],[375,[27,4,35,25,62,1,78,2,81,1,89,1,92,1,101,1,114,1,155,13]],[376,[26,5,35,25,61,1,64,1,79,1,81,1,89,1,92,1,101,1,114,1,155,13]],[377,[26,5,34,28,81,1,89,1,92,1,101,1,114,1,156,12]],[378,[25,5,34,26,61,1,81,1,89,1,92,1,101,1,114,1,155,12]],[379,[24,6,33,26,60,2,81,1,89,1,101,1,114,1,154,13]],[380,[24,5,33,26,60,1,81,1,89,1,112,1,114,1,154,13]],[381,[23,6,32,27,60,1,81,1,89,1,92,1,101,1,112,1,114,1,154,13]],[382,[23,5,32,27,60,1,69,1,77,1,87,2,93,1,95,6,104,9,114,1,124,1,155,11]],[383,[22,5,31,27,60,1,68,1,78,1,89,1,92,1,101,1,104,1,155,11]],[384,[22,5,31,27,59,1,92,1,155,11]],[385,[21,6,30,28,59,1,68,1,70,1,89,1,93,1,100,2,105,2,111,2,155,11]],[386,[21,5,29,29,59,1,78,1,89,1,92,1,153,13]],[387,[20,5,29,28,59,1,89,1,92,1,101,1,153,13]],[388,[20,5,28,29,59,1,68,1,78,1,89,1,92,1,101,1,112,1,153,13]],[389,[19,5,28,29,68,1,89,1,92,1,101,1,112,1,153,13]],[390,[18,6,27,30,68,1,89,1,101,1,112,1,154,12]],[391,[18,5,27,30,58,1,68,1,89,1,101,1,112,1,115,1,154,12]],[392,[17,5,26,31,58,1,68,1,101,1,104,1,112,1,155,11]],[393,[17,5,25,32,58,1,68,1,101,1,155,11]],[394,[16,5,25,31,58,1,68,1,78,1,101,1,104,1,155,12]],[395,[15,6,24,33,58,1,68,1,78,1,101,1,104,1,155,12]],[396,[15,6,24,33,58,1,78,1,101,1,104,1,155,12]],[397,[14,6,23,33,58,1,68,1,78,1,101,1,104,1,154,13]],[398,[14,5,23,34,58,1,63,2,68,1,70,1,78,1,101,1,104,1,154,13]],[399,[13,5,22,35,58,2,62,3,68,1,70,1,78,1,101,1,155,13]],[400,[13,5,21,36,58,2,61,2,64,2,77,2,101,1,104,1,155,2,158,10]],[401,[12,5,21,36,58,2,61,6,77,2,101,1,104,1,155,2,158,3,162,6]],[402,[12,5,21,37,59,1,61,4,67,1,77,2,101,1,115,1,155,2,158,3,163,6]],[403,[11,5,21,37,59,2,62,1,68,2,76,1,78,1,96,1,100,1,105,1,107,4,116,3,156,2,159,2,163,6]],[404,[11,5,20,39,60,1,68,1,78,1,100,1,156,2,159,4,164,5]],[405,[10,5,20,39,60,1,69,3,111,1,156,2,159,4,164,6]],[406,[10,5,20,40,61,1,87,2,157,2,160,4,165,5]],[407,[9,6,21,44,80,1,157,2,160,11]],[408,[9,5,21,45,78,1,80,1,89,1,101,1,157,14]],[409,[8,5,21,47,75,1,77,2,80,1,82,1,89,1,101,1,158,14]],[410,[8,5,21,44,66,13,80,2,89,1,92,1,101,1,104,1,158,14]],[411,[7,6,21,45,70,9,80,1,82,7,91,1,93,8,102,2,105,8,115,1,158,15]],[412,[7,5,21,49,71,8,80,35,116,5,158,16]],[413,[6,6,14,2,21,58,80,1,82,5,89,37,145,4,158,16]],[414,[6,6,13,4,21,66,89,39,144,6,157,18]],[415,[6,5,13,4,21,66,89,35,126,3,130,1,144,7,157,18]],[416,[5,12,21,67,89,38,128,5,144,7,156,20]],[417,[5,12,21,67,89,40,132,1,134,1,145,5,156,21]],[418,[4,14,21,67,89,1,91,41,133,3,146,4,156,21]],[419,[4,14,21,67,89,1,91,22,114,20,135,3,139,1,155,23]],[420,[4,15,22,66,89,1,91,22,114,22,137,3,154,17,172,6]],[421,[3,16,22,66,91,22,114,23,138,4,150,29]],[422,[3,16,22,66,91,22,114,32,148,32]],[423,[3,16,23,65,91,49,141,39]],[424,[2,17,23,65,91,60,152,29]],[425,[2,17,23,65,89,1,91,90]],[426,[2,18,23,67,91,91]],[427,[2,18,23,56,80,8,89,1,91,1,93,8,102,81]],[428,[1,19,24,52,77,1,80,1,82,6,89,1,91,1,93,90]],[429,[1,20,25,42,68,10,81,9,91,4,96,88]],[430,[1,20,25,41,68,1,81,1,88,2,92,1,101,1,105,1,115,1,124,60]],[431,[1,20,25,41,67,1,89,1,91,2,124,61]],[432,[0,21,25,41,67,2,76,1,88,2,91,1,95,2,115,2,124,3,128,57]],[433,[0,22,25,41,67,2,77,1,89,1,101,1,115,1,124,62]],[434,[0,22,26,40,67,2,77,1,88,2,101,1,105,2,115,1,124,62]],[435,[0,22,26,40,67,2,77,1,88,2,101,1,105,2,115,1,125,62]],[436,[0,23,26,40,67,2,77,1,88,2,115,1,125,62]],[437,[0,23,26,40,67,2,77,1,88,2,101,1,115,1,125,63]],[438,[0,23,27,39,67,2,77,1,88,2,115,1,124,64]],[439,[0,23,27,39,67,2,77,1,88,2,115,1,124,65]],[440,[0,23,27,39,67,2,77,1,88,2,91,2,101,1,104,1,115,1,124,65]],[441,[0,23,28,38,67,2,77,1,88,2,92,1,101,1,104,1,115,2,124,65]],[442,[0,23,28,38,67,2,77,1,88,2,92,1,124,66]],[443,[0,24,28,38,67,2,77,1,88,2,91,2,104,1,116,1,126,64]],[444,[0,24,29,37,67,2,88,2,91,2,101,1,104,2,115,2,124,1,126,65]],[445,[0,25,29,37,67,2,88,1,91,2,101,1,104,2,113,1,115,2,124,1,126,37,164,27]],[446,[0,25,29,37,67,2,76,1,91,2,104,2,113,1,116,1,124,1,126,66]],[447,[0,25,29,37,67,2,80,1,91,2,104,1,113,1,116,1,124,68]],[448,[0,26,29,37,67,2,92,1,104,1,113,1,116,1,124,68]],[449,[0,26,29,39,69,1,73,4,93,1,105,2,108,6,115,1,117,5,124,69]],[450,[0,27,30,39,77,1,91,1,115,1,124,69]],[451,[0,27,30,48,79,1,81,9,91,10,102,1,104,89]],[452,[0,27,30,48,79,11,91,102]],[453,[1,26,31,47,79,115]],[454,[1,27,31,47,79,11,91,103]],[455,[1,27,31,47,79,11,91,1,93,101]],[456,[1,28,31,47,79,11,91,1,93,101]],[457,[1,28,31,47,79,11,91,103]],[458,[2,27,31,46,79,11,91,104]],[459,[2,28,31,47,79,11,91,104]],[460,[2,28,32,46,79,116]],[461,[2,29,32,46,79,116]],[462,[3,28,33,162]],[463,[3,28,33,45,79,116]],[464,[4,27,34,44,79,34,114,2,117,78]],[465,[4,27,34,44,79,116]],[466,[4,27,34,44,79,116]],[467,[5,27,34,161]],[468,[5,27,35,139,175,20]],[469,[6,27,35,140,176,19]],[470,[6,27,35,160]],[471,[6,27,35,160]],[472,[7,188]],[473,[7,188]],[474,[8,187]],[475,[8,187]],[476,[9,185]],[477,[10,184]],[478,[11,183]],[479,[11,183]],[480,[12,182]],[481,[13,180]],[482,[14,179]],[483,[14,179]],[484,[15,24,40,153]],[485,[16,176]],[486,[17,175]],[487,[18,173]],[488,[19,172]],[489,[20,170]],[490,[21,169]],[491,[22,19,42,147]],[492,[24,165]],[493,[25,163]],[494,[26,16,43,144]],[495,[28,159]],[496,[30,156]],[497,[31,154]],[498,[33,151]],[499,[35,149]],[500,[37,146]],[501,[39,143]],[502,[41,140]],[503,[42,138]],[504,[45,134]],[505,[48,130]],[506,[50,126]],[507,[53,121]],[508,[57,115]],[509,[61,109]],[510,[65,103]],[511,[69,97]],[512,[75,89]],[513,[81,80]],[514,[86,72]],[515,[95,58]],[516,[107,39]]]},"14:1":{"w":192,"h":481,"rows":[[221,[144,6,153,17]],[222,[143,6,152,19]],[223,[143,6,151,20]],[224,[143,6,151,20]],[225,[143,6,151,21]],[226,[143,6,151,21]],[227,[143,5,151,21]],[228,[142,6,151,21]],[229,[142,6,151,22]],[230,[142,6,150,23]],[231,[142,5,150,23]],[232,[142,5,150,23]],[233,[141,6,149,24]],[234,[141,6,149,24]],[235,[141,6,149,25]],[236,[141,6,149,25]],[237,[140,7,148,26]],[238,[140,7,148,26]],[239,[139,7,147,27]],[240,[139,6,147,27]],[241,[138,7,147,27]],[242,[138,6,147,27]],[243,[138,5,147,27]],[244,[137,6,146,28]],[245,[136,7,146,28]],[246,[136,6,145,29]],[247,[135,6,145,29]],[248,[134,7,144,30]],[249,[116,1,133,7,143,30]],[250,[116,1,132,7,143,30]],[251,[116,1,131,7,142,31]],[252,[116,2,130,7,141,32]],[253,[116,3,128,8,141,32]],[254,[116,5,126,9,139,34]],[255,[116,18,139,34]],[256,[116,17,137,35]],[257,[116,16,137,35]],[258,[117,12,135,37]],[259,[116,12,134,38]],[260,[116,1,118,2,132,40]],[261,[116,4,131,40]],[262,[116,10,127,44]],[263,[116,55]],[264,[116,55]],[265,[116,54]],[266,[32,7,116,54]],[267,[30,12,116,54]],[268,[28,16,116,54]],[269,[26,19,116,53]],[270,[25,7,38,9,116,53]],[271,[24,6,39,9,116,53]],[272,[23,6,41,8,116,52]],[273,[23,6,42,7,116,52]],[274,[22,6,33,6,43,8,116,52]],[275,[22,5,32,9,44,8,76,1,116,52]],[276,[21,6,31,12,46,7,75,2,116,51]],[277,[20,6,29,14,47,7,74,3,116,51]],[278,[20,5,29,16,48,8,73,4,116,51]],[279,[19,6,28,18,49,9,71,6,116,50]],[280,[19,6,27,20,51,12,68,9,116,50]],[281,[19,5,27,21,52,25,116,49]],[282,[18,6,27,22,55,20,116,49]],[283,[18,5,27,23,57,16,116,49]],[284,[18,5,26,26,60,10,116,48]],[285,[18,5,26,27,64,2,76,1,116,48]],[286,[18,5,25,31,75,2,116,47]],[287,[17,6,25,33,73,4,116,47]],[288,[17,6,25,52,116,47]],[289,[17,6,25,52,116,46]],[290,[17,6,25,52,116,46]],[291,[17,6,25,52,116,46]],[292,[17,6,25,52,116,45]],[293,[17,6,25,52,116,45]],[294,[17,6,25,52,116,45]],[295,[17,6,25,52,116,44]],[296,[17,6,25,52,116,44]],[297,[17,6,25,52,116,44]],[298,[17,60,116,44]],[299,[17,60,116,43]],[300,[17,60,116,43]],[301,[17,60,116,43]],[302,[18,59,116,43]],[303,[18,59,116,42]],[304,[18,59,116,42]],[305,[18,59,116,42]],[306,[18,59,116,42]],[307,[19,58,116,42]],[308,[19,58,116,42]],[309,[19,58,116,41]],[310,[20,57,116,41]],[311,[20,7,28,49,116,41]],[312,[20,7,28,49,116,41]],[313,[21,6,29,128]],[314,[21,6,29,128]],[315,[21,7,29,128]],[316,[22,7,30,127]],[317,[22,7,30,127]],[318,[22,7,30,127]],[319,[23,6,31,126]],[320,[23,7,31,126]],[321,[23,134]],[322,[24,133]],[323,[24,134]],[324,[25,7,33,125]],[325,[25,7,33,125]],[326,[26,7,34,124]],[327,[26,7,34,125]],[328,[26,7,35,124]],[329,[27,7,35,124]],[330,[27,132]],[331,[28,132]],[332,[28,7,36,124]],[333,[28,7,36,124]],[334,[29,6,36,125]],[335,[29,132]],[336,[29,132]],[337,[29,133]],[338,[29,7,37,125]],[339,[30,6,37,126]],[340,[30,6,37,126]],[341,[30,6,38,99,138,26]],[342,[30,6,38,99,138,26]],[343,[30,6,38,99,138,27]],[344,[30,6,38,100,139,27]],[345,[30,6,38,100,139,27]],[346,[30,6,38,100,139,28]],[347,[30,5,38,129]],[348,[30,5,38,130]],[349,[30,5,38,130]],[350,[30,5,37,102,140,29]],[351,[29,6,37,102,140,30]],[352,[29,6,37,102,140,30]],[353,[29,6,37,102,141,30]],[354,[29,5,37,103,141,31]],[355,[29,5,36,104,141,31]],[356,[28,5,36,105,142,31]],[357,[28,5,35,106,142,31]],[358,[27,6,35,106,143,31]],[359,[26,6,35,14,51,91,143,31]],[360,[26,6,35,12,48,7,58,84,143,32]],[361,[25,6,35,10,46,11,59,83,144,32]],[362,[25,6,34,9,44,3,56,3,60,83,145,31]],[363,[25,5,34,8,43,2,51,3,58,2,61,83,145,32]],[364,[24,6,33,8,42,2,50,6,59,1,62,82,145,32]],[365,[24,5,33,7,41,2,50,5,60,1,62,82,147,31]],[366,[23,6,32,7,40,2,50,5,60,2,63,82,147,31]],[367,[22,6,31,10,50,5,61,1,63,82,147,32]],[368,[22,5,31,9,41,1,51,3,61,1,63,83,149,30]],[369,[21,6,30,10,41,1,51,2,61,2,64,82,149,31]],[370,[20,6,30,9,61,2,64,83,150,30]],[371,[20,6,29,9,61,2,64,83,150,31]],[372,[19,6,29,6,36,1,61,2,64,84,151,30]],[373,[18,6,28,8,61,1,64,85,151,31]],[374,[18,5,27,6,34,1,37,1,64,85,152,31]],[375,[17,6,27,5,33,2,60,2,64,86,152,31]],[376,[16,7,26,8,60,2,63,87,153,31]],[377,[16,6,25,8,60,2,63,88,153,31]],[378,[15,6,25,5,31,2,60,2,63,88,154,31]],[379,[15,6,24,5,30,2,60,1,63,89,154,31]],[380,[14,6,23,6,30,1,60,1,63,90,154,32]],[381,[14,6,23,5,29,2,63,123]],[382,[14,5,22,5,60,1,63,123]],[383,[13,5,21,6,28,1,63,92,158,29]],[384,[13,5,21,5,27,2,60,1,62,93,158,29]],[385,[12,5,21,5,59,2,62,94,159,29]],[386,[11,6,20,5,26,1,59,2,62,95,159,29]],[387,[11,5,20,7,59,2,62,95,160,28]],[388,[10,6,19,7,59,2,62,97,160,29]],[389,[10,5,18,5,24,2,60,1,62,97,161,28]],[390,[9,6,17,6,62,98,161,28]],[391,[9,5,17,5,23,1,62,99,162,28]],[392,[8,5,17,4,59,1,61,101,163,27]],[393,[8,5,16,5,22,1,59,1,61,129]],[394,[7,6,16,4,22,1,58,2,61,129]],[395,[7,5,15,5,21,1,58,2,61,130]],[396,[7,4,15,4,20,2,61,130]],[397,[6,5,14,5,20,1,61,130]],[398,[6,5,13,6,23,3,61,130]],[399,[5,5,13,5,19,2,23,3,60,131]],[400,[5,5,13,6,22,5,58,1,60,131]],[401,[4,5,12,5,18,1,22,5,58,1,60,132]],[402,[4,5,12,5,23,3,58,1,60,132]],[403,[4,5,11,7,57,2,60,132]],[404,[3,6,11,7,58,1,60,132]],[405,[3,5,11,6,58,1,60,132]],[406,[3,5,11,6,60,132]],[407,[2,6,10,5,16,2,59,133]],[408,[2,6,9,6,16,1,59,133]],[409,[2,5,9,7,57,1,59,133]],[410,[1,6,9,5,15,2,56,2,59,133]],[411,[1,6,9,5,15,1,56,2,59,133]],[412,[1,6,9,6,57,1,59,133]],[413,[1,6,8,7,57,1,59,133]],[414,[1,5,8,7,57,1,59,133]],[415,[0,6,8,8,57,135]],[416,[0,6,7,9,58,134]],[417,[0,6,7,6,14,2,58,134]],[418,[0,6,7,6,14,1,56,1,58,134]],[419,[0,6,7,6,14,1,56,1,58,133]],[420,[0,13,56,1,58,133]],[421,[0,14,56,1,58,133]],[422,[0,14,58,133]],[423,[0,14,57,134]],[424,[0,14,57,133]],[425,[0,15,55,1,57,133]],[426,[0,14,54,2,57,133]],[427,[0,14,54,2,57,132]],[428,[0,13,14,1,54,2,57,132]],[429,[0,13,14,1,55,1,57,132]],[430,[0,15,57,131]],[431,[0,16,57,131]],[432,[0,13,14,2,18,4,56,131]],[433,[0,15,18,2,21,2,54,1,56,131]],[434,[0,15,17,6,54,1,56,130]],[435,[0,17,18,5,54,1,56,130]],[436,[0,17,19,3,54,1,56,129]],[437,[1,14,54,1,56,128]],[438,[1,14,16,2,55,21,78,9,89,20,111,73]],[439,[1,14,16,2,55,20,76,2,79,104]],[440,[1,15,17,2,55,20,76,2,79,104]],[441,[2,14,17,2,55,54,111,10,122,60]],[442,[2,15,18,1,53,1,55,126]],[443,[2,15,18,2,55,71,127,53]],[444,[3,15,19,1,55,124]],[445,[3,15,20,1,55,34,90,33,124,55]],[446,[3,16,20,2,55,123]],[447,[4,16,21,2,55,122]],[448,[4,17,22,2,55,121]],[449,[4,17,22,1,43,1,52,1,54,121]],[450,[5,17,23,1,43,4,52,1,54,120]],[451,[5,18,24,2,42,5,51,2,54,118]],[452,[6,18,25,2,42,6,54,117]],[453,[7,18,26,3,41,7,51,1,53,117]],[454,[7,19,27,3,42,6,53,115]],[455,[8,19,29,1,42,6,49,2,52,115]],[456,[9,20,30,2,45,5,52,113]],[457,[9,22,33,1,46,3,51,112]],[458,[10,22,35,1,38,1,43,4,50,112]],[459,[11,23,38,7,49,111]],[460,[12,24,46,112]],[461,[13,143]],[462,[14,140]],[463,[14,137]],[464,[15,134]],[465,[16,130]],[466,[17,126]],[467,[18,122]],[468,[20,115]],[469,[22,108]],[470,[24,102]],[471,[26,95]],[472,[29,87]],[473,[31,80]],[474,[34,71]],[475,[38,64]],[476,[42,48,93,10]],[477,[49,27,92,12]],[478,[92,13]],[479,[92,12]],[480,[92,11]]]},"15:0":{"w":206,"h":514,"rows":[[260,[46,2]],[261,[43,6]],[262,[41,9]],[263,[40,10]],[264,[39,11]],[265,[37,13]],[266,[36,14]],[267,[36,14]],[268,[36,14]],[269,[35,15]],[270,[35,15]],[271,[34,16]],[272,[34,16]],[273,[33,17]],[274,[33,17]],[275,[33,17]],[276,[33,17]],[277,[32,19]],[278,[32,7,40,11]],[279,[32,7,41,10]],[280,[32,7,41,10]],[281,[31,8,41,11]],[282,[31,8,41,11]],[283,[31,8,41,11]],[284,[31,8,41,12]],[285,[31,9,41,12,161,4]],[286,[31,9,41,13,159,8]],[287,[31,10,42,12,158,9]],[288,[31,10,42,13,157,11]],[289,[31,25,157,12]],[290,[31,26,157,13]],[291,[31,11,44,13,157,13]],[292,[32,11,45,13,157,13]],[293,[32,11,45,14,156,15]],[294,[32,11,45,15,156,15]],[295,[32,11,46,15,156,15]],[296,[33,11,46,16,155,17]],[297,[33,11,47,16,155,17]],[298,[34,11,47,18,154,18]],[299,[34,11,47,20,154,18]],[300,[34,12,48,20,153,19]],[301,[35,12,50,20,152,20]],[302,[35,12,50,23,151,21]],[303,[35,12,51,32,150,21]],[304,[36,12,51,32,149,22]],[305,[36,13,51,32,148,23]],[306,[36,14,51,32,143,2,146,25]],[307,[37,46,143,28]],[308,[37,46,126,1,134,6,142,28]],[309,[38,45,125,45]],[310,[38,45,124,46]],[311,[39,44,124,45]],[312,[40,43,124,45]],[313,[40,43,124,44]],[314,[40,43,124,44]],[315,[41,42,124,21,146,21]],[316,[42,41,124,19,144,23]],[317,[42,41,124,42]],[318,[42,41,129,37]],[319,[43,30,130,36]],[320,[43,30,130,35]],[321,[44,29,130,34]],[322,[44,29,131,33]],[323,[44,29,130,34]],[324,[45,28,131,32]],[325,[45,28,130,33]],[326,[46,27,130,32]],[327,[46,27,129,33]],[328,[46,27,129,32]],[329,[46,27,129,31]],[330,[47,26,130,30]],[331,[47,26,130,30]],[332,[48,25,130,29]],[333,[48,25,131,28]],[334,[48,25,75,3,131,28]],[335,[48,25,75,2,131,27]],[336,[48,25,75,2,131,27]],[337,[48,25,75,3,131,27]],[338,[48,25,75,3,131,27]],[339,[48,25,75,2,131,27]],[340,[48,25,75,2,131,26]],[341,[48,25,75,2,130,27]],[342,[48,25,131,26]],[343,[48,25,131,26]],[344,[48,16,65,7,131,26]],[345,[48,15,65,8,131,26]],[346,[48,15,65,9,75,2,131,26]],[347,[48,16,65,15,95,1,97,4,110,4,115,2,130,27]],[348,[47,16,65,19,92,1,94,24,119,7,129,28]],[349,[47,15,65,19,88,69]],[350,[47,15,65,20,88,69]],[351,[46,16,65,20,87,70]],[352,[46,16,64,21,87,71]],[353,[46,15,64,22,87,71]],[354,[46,15,64,94]],[355,[46,14,64,94]],[356,[45,15,63,96]],[357,[45,14,63,96]],[358,[44,15,63,97]],[359,[44,15,63,97]],[360,[43,16,63,97]],[361,[43,14,63,23,87,74]],[362,[42,15,63,23,87,74]],[363,[42,15,63,23,87,75]],[364,[41,16,63,23,87,75]],[365,[40,17,59,27,87,76]],[366,[40,124]],[367,[39,16,61,24,86,78]],[368,[38,17,61,24,87,78]],[369,[38,16,61,24,87,79]],[370,[37,17,61,24,87,80]],[371,[36,18,60,25,87,81]],[372,[35,19,59,25,88,6,97,71]],[373,[35,17,53,2,58,15,82,2,130,39]],[374,[34,17,53,2,58,14,130,40]],[375,[33,17,54,1,58,15,130,41]],[376,[32,17,58,20,129,43]],[377,[32,17,58,20,129,44]],[378,[30,19,57,21,129,1,131,43]],[379,[30,18,51,23,129,1,131,43]],[380,[29,18,50,24,131,44]],[381,[28,18,51,23,131,45]],[382,[28,17,52,1,54,20,131,46]],[383,[27,17,54,19,131,25,158,20]],[384,[26,17,54,19,131,25,159,19]],[385,[25,18,48,25,131,48]],[386,[24,19,48,25,131,49]],[387,[23,19,50,23,131,50]],[388,[23,18,51,22,130,52]],[389,[22,19,50,23,129,53]],[390,[22,18,47,27,75,2,128,55]],[391,[20,19,45,28,75,2,129,55]],[392,[20,19,46,27,76,1,128,56]],[393,[19,20,48,25,75,2,127,58]],[394,[19,19,48,25,127,59]],[395,[18,22,44,29,126,60]],[396,[17,56,128,59]],[397,[17,56,129,34,171,17]],[398,[16,57,130,32,172,17]],[399,[15,58,130,30,173,16]],[400,[14,59,104,1,131,28,174,16]],[401,[14,60,75,3,103,3,110,5,116,1,118,5,127,2,130,29,175,16]],[402,[14,70,93,1,95,1,97,5,103,3,109,6,116,2,119,39,175,16]],[403,[13,19,35,49,88,1,90,4,95,20,116,2,119,39,176,16]],[404,[13,17,38,47,89,26,116,2,119,39,176,16]],[405,[12,18,37,48,88,27,116,42,176,16]],[406,[12,18,36,49,88,1,90,25,116,1,120,38,176,17]],[407,[12,18,34,51,87,2,90,18,128,30,176,18]],[408,[11,20,32,52,130,29,175,19]],[409,[10,20,31,44,131,28,175,19]],[410,[10,64,131,29,175,20]],[411,[10,63,132,29,173,22]],[412,[9,63,132,30,172,24]],[413,[9,20,32,40,132,32,171,25]],[414,[9,21,31,41,132,64]],[415,[8,64,132,65]],[416,[8,64,132,65]],[417,[8,64,133,64]],[418,[8,64,132,66]],[419,[8,65,132,66]],[420,[7,66,117,3,123,3,131,67]],[421,[7,67,113,2,116,82]],[422,[6,72,86,1,92,13,107,2,111,4,116,83]],[423,[6,75,84,1,86,1,91,14,107,70,185,14]],[424,[6,75,84,1,86,1,90,5,96,79,187,12]],[425,[6,79,86,88,188,12]],[426,[6,77,84,1,86,87,188,12]],[427,[6,79,86,86,189,11]],[428,[6,79,86,86,189,11]],[429,[6,79,86,86,190,10]],[430,[5,144,155,16,190,10]],[431,[5,142,156,15,190,10]],[432,[5,71,87,4,92,3,98,3,107,1,131,15,157,14,190,10]],[433,[5,67,133,13,157,15,190,10]],[434,[5,66,134,12,158,14,190,10]],[435,[5,65,134,11,158,14,189,11]],[436,[5,64,135,10,158,15,189,11]],[437,[5,64,135,11,158,16,188,12]],[438,[5,64,135,11,157,18,187,13]],[439,[5,64,135,12,156,20,186,14]],[440,[5,64,135,13,155,24,180,20]],[441,[6,63,135,15,154,46]],[442,[6,63,135,65]],[443,[6,64,135,65]],[444,[6,64,135,65]],[445,[6,65,134,66]],[446,[6,68,130,3,134,66]],[447,[6,77,85,12,103,97]],[448,[6,194]],[449,[6,193]],[450,[7,192]],[451,[7,192]],[452,[7,192]],[453,[8,190]],[454,[8,151,166,32]],[455,[8,148,168,30]],[456,[8,147,169,29]],[457,[9,145,170,27]],[458,[9,145,170,27]],[459,[10,143,171,26]],[460,[10,143,171,25]],[461,[10,143,172,24]],[462,[11,142,172,23]],[463,[11,142,172,23]],[464,[12,141,171,23]],[465,[12,141,171,23]],[466,[13,141,171,22]],[467,[13,141,170,23]],[468,[14,141,170,22]],[469,[15,141,170,21]],[470,[15,142,167,24]],[471,[16,143,166,24]],[472,[17,172]],[473,[18,171]],[474,[18,170]],[475,[19,168]],[476,[20,166]],[477,[20,166]],[478,[22,163]],[479,[22,162]],[480,[23,160]],[481,[24,158]],[482,[25,156]],[483,[26,154]],[484,[27,152]],[485,[28,150]],[486,[30,146]],[487,[31,144]],[488,[32,142]],[489,[33,140]],[490,[35,136]],[491,[36,134]],[492,[38,130]],[493,[39,128]],[494,[41,124]],[495,[43,121]],[496,[45,116]],[497,[47,113]],[498,[50,106]],[499,[52,103]],[500,[54,97]],[501,[57,93]],[502,[60,87]],[503,[63,81]],[504,[67,72]],[505,[71,65]],[506,[78,51]],[507,[84,38]]]},"15:1":{"w":204,"h":478,"rows":[[226,[159,6]],[227,[158,8]],[228,[158,9]],[229,[157,12]],[230,[157,13]],[231,[157,14]],[232,[157,14]],[233,[157,15]],[234,[157,16]],[235,[157,16]],[236,[157,16]],[237,[156,18]],[238,[156,18,179,1]],[239,[156,18]],[240,[156,18]],[241,[150,1,155,20]],[242,[150,1,155,20]],[243,[149,1,154,21]],[244,[154,21]],[245,[148,1,153,22]],[246,[153,22]],[247,[37,3,47,1,152,23]],[248,[35,7,48,1,152,23]],[249,[34,9,151,24]],[250,[33,10,144,1,150,25]],[251,[32,12,150,24]],[252,[32,12,149,25]],[253,[31,13,148,26]],[254,[31,13,147,27]],[255,[30,15,51,1,146,27]],[256,[30,15,145,28]],[257,[30,16,51,1,134,1,143,30]],[258,[29,18,124,2,131,3,142,31]],[259,[29,19,55,1,81,1,125,7,142,30]],[260,[29,19,55,2,80,2,128,4,142,30]],[261,[29,20,56,2,80,2,125,6,141,31]],[262,[29,21,57,2,79,2,126,2,140,31]],[263,[29,22,58,2,77,3,137,34]],[264,[29,23,59,3,76,3,135,36]],[265,[30,23,60,4,74,6,131,39]],[266,[30,24,60,19,123,47]],[267,[30,25,61,16,123,46]],[268,[30,25,62,14,81,1,123,46]],[269,[31,26,68,4,78,4,123,13,140,29]],[270,[31,28,69,1,77,5,123,13,141,1,143,25]],[271,[31,30,67,1,73,9,123,7,131,3,143,25]],[272,[31,34,71,11,123,5,129,1,145,22]],[273,[32,50,123,6,146,21]],[274,[32,50,123,4,149,17]],[275,[33,49,123,3,149,17]],[276,[33,49,123,2,151,14]],[277,[34,48,150,14]],[278,[34,48,123,1,152,12]],[279,[35,47,123,1,151,12]],[280,[35,47,151,12]],[281,[36,46,151,12]],[282,[36,46,151,11]],[283,[37,45,151,11]],[284,[37,45,152,9]],[285,[38,44,151,10]],[286,[38,44,151,10]],[287,[39,43,151,9]],[288,[39,43,151,9]],[289,[40,42,123,1,151,8]],[290,[40,42,123,1,152,7]],[291,[41,41,123,2,151,8]],[292,[41,41,123,2,151,8]],[293,[42,40,123,2,150,8]],[294,[42,40,123,3,149,9]],[295,[42,40,123,4,148,10]],[296,[43,39,123,6,145,13]],[297,[43,39,123,8,144,13]],[298,[43,39,123,12,141,2,144,13]],[299,[43,39,123,12,140,17]],[300,[43,39,123,34]],[301,[44,38,123,34]],[302,[44,38,123,34]],[303,[44,38,123,34]],[304,[44,38,123,34]],[305,[44,38,123,34]],[306,[44,38,123,34]],[307,[44,38,123,34]],[308,[44,38,123,34]],[309,[44,38,123,35]],[310,[44,38,123,35]],[311,[44,114]],[312,[43,115]],[313,[43,116]],[314,[43,116]],[315,[43,116]],[316,[43,116]],[317,[42,118]],[318,[42,118]],[319,[42,118]],[320,[41,120]],[321,[41,120]],[322,[41,121]],[323,[40,123]],[324,[40,123]],[325,[39,125]],[326,[39,125]],[327,[38,127]],[328,[37,129]],[329,[36,131]],[330,[36,131]],[331,[35,133]],[332,[34,135]],[333,[34,136]],[334,[33,138]],[335,[32,140]],[336,[31,142]],[337,[31,143]],[338,[30,144]],[339,[29,146]],[340,[28,148]],[341,[27,134,163,13]],[342,[27,133,165,12]],[343,[25,135,165,13]],[344,[25,136,166,12]],[345,[24,137,166,13]],[346,[23,138,166,14]],[347,[22,140,167,14]],[348,[22,142,167,14]],[349,[21,161]],[350,[20,163]],[351,[19,14,39,2,42,141]],[352,[18,13,41,143]],[353,[18,11,32,1,44,141]],[354,[17,11,30,2,44,141]],[355,[17,10,45,141]],[356,[16,11,46,141]],[357,[16,10,46,141]],[358,[15,10,47,141]],[359,[15,10,47,141]],[360,[14,10,47,142]],[361,[13,11,47,143]],[362,[13,11,48,142]],[363,[12,12,49,142]],[364,[12,11,49,142]],[365,[11,12,48,143]],[366,[11,12,49,143]],[367,[11,12,49,143]],[368,[10,13,49,144]],[369,[10,12,49,144]],[370,[9,13,49,144]],[371,[9,13,49,145]],[372,[9,12,49,145]],[373,[8,12,49,146]],[374,[8,13,50,145]],[375,[8,13,50,145]],[376,[7,14,50,145]],[377,[7,12,20,1,50,146]],[378,[7,12,51,145]],[379,[7,13,53,143]],[380,[7,13,54,142]],[381,[6,13,54,143]],[382,[6,13,55,142]],[383,[6,14,55,1,57,140]],[384,[6,14,58,139]],[385,[5,14,59,138]],[386,[5,14,59,138]],[387,[5,14,60,137]],[388,[5,14,61,137]],[389,[5,14,62,136]],[390,[5,14,63,135]],[391,[5,14,64,134]],[392,[5,14,65,133]],[393,[5,14,67,131]],[394,[5,14,68,130]],[395,[5,14,69,129]],[396,[5,14,70,128]],[397,[5,14,71,127]],[398,[5,14,72,126]],[399,[5,14,74,124]],[400,[5,14,74,124]],[401,[5,14,75,123]],[402,[5,14,75,122]],[403,[5,14,75,122]],[404,[6,13,76,121]],[405,[6,13,76,121]],[406,[6,13,77,120]],[407,[6,14,77,120]],[408,[6,14,78,119]],[409,[6,14,79,117]],[410,[7,14,79,117]],[411,[7,14,79,117]],[412,[7,14,79,116]],[413,[7,14,79,116]],[414,[8,14,79,116]],[415,[8,15,80,115]],[416,[8,15,81,114]],[417,[9,13,23,1,81,113]],[418,[9,15,81,113]],[419,[9,16,82,111]],[420,[10,14,82,111]],[421,[10,16,82,110]],[422,[11,17,82,110]],[423,[11,18,83,108]],[424,[12,18,83,108]],[425,[12,20,83,107]],[426,[13,20,83,1,85,105]],[427,[13,22,85,104]],[428,[14,22,85,103]],[429,[15,21,85,103]],[430,[15,24,85,102]],[431,[16,25,85,102]],[432,[16,27,85,101]],[433,[17,27,85,100]],[434,[18,27,85,99]],[435,[19,27,85,98]],[436,[19,29,85,98]],[437,[20,30,51,1,85,97]],[438,[21,33,84,97]],[439,[22,34,83,97]],[440,[23,35,83,96]],[441,[24,35,83,95]],[442,[25,38,82,95]],[443,[26,36,63,1,80,96]],[444,[27,37,65,4,76,98]],[445,[28,49,78,95]],[446,[29,143]],[447,[31,140]],[448,[32,138]],[449,[33,135]],[450,[35,132]],[451,[37,128]],[452,[39,124]],[453,[40,122]],[454,[42,118]],[455,[44,114]],[456,[46,110]],[457,[48,105]],[458,[51,100]],[459,[53,95]],[460,[56,88]],[461,[60,82]],[462,[64,74]],[463,[68,66]],[464,[73,56]],[465,[79,45]],[466,[94,3,101,4]]]},"16:0":{"w":199,"h":473,"rows":[[217,[9,1,11,5,17,17,71,1,73,1,76,4]],[218,[9,1,11,23,36,1,71,1,73,1,76,4]],[219,[9,1,12,23,71,1,73,1,75,5]],[220,[10,1,12,5,18,17,37,1,71,1,73,1,75,5]],[221,[10,1,12,24,37,1,71,1,73,1,77,3]],[222,[10,1,12,24,38,1,70,1,73,1,76,4]],[223,[10,1,13,5,19,17,38,1,70,1,72,1,75,2,120,1]],[224,[13,24,70,1,72,2,120,1]],[225,[11,1,13,24,39,1,70,1,73,1,76,4,120,1]],[226,[11,1,13,6,20,18,70,1,73,1,76,4,120,1]],[227,[14,5,20,18,40,1,70,1,76,4,120,1]],[228,[14,25,70,1,76,4,120,1]],[229,[12,1,14,25,41,1,70,1,76,4,120,1]],[230,[12,1,14,6,21,19,70,1,76,4,120,1]],[231,[15,5,21,19,42,1,70,1,76,4,120,1]],[232,[15,26,70,1,76,4,120,1]],[233,[13,1,15,6,22,19,43,1,70,1,76,4,120,1]],[234,[13,1,15,6,22,20,70,1,73,1,76,4,120,1]],[235,[16,26,44,1,70,1,72,1,74,1,76,3,120,1]],[236,[16,6,23,20,70,3,74,1,76,4,120,1]],[237,[14,1,16,6,23,20,45,1,70,1,74,1,120,1]],[238,[14,1,16,28,70,1,74,1,76,4,120,1]],[239,[14,1,17,28,46,1,70,1,74,1,76,4,120,1]],[240,[17,6,24,21,70,1,74,1,76,4,120,1]],[241,[15,1,17,29,70,1,74,1,76,4,120,1]],[242,[15,1,17,29,48,1,70,1,74,1,76,4,120,1]],[243,[15,1,18,29,49,1,70,1,74,1,76,4,120,1]],[244,[16,1,18,30,69,1,72,1,74,1,76,4,120,1]],[245,[16,1,18,31,51,1,68,2,71,2,74,1,76,4]],[246,[16,1,18,32,51,2,68,2,71,2,74,1,76,4]],[247,[16,1,19,31,53,1,67,3,71,1,74,4]],[248,[17,1,19,32,54,1,66,2,69,1,71,2,74,1,76,4]],[249,[17,1,19,34,55,1,65,2,68,2,71,2,74,1,76,4]],[250,[17,1,19,35,57,2,63,2,67,3,71,2,74,1,76,4]],[251,[17,1,20,36,66,3,72,1,74,1,76,4,121,1]],[252,[18,1,20,39,63,6,72,1,74,1,76,4,121,1]],[253,[18,1,20,49,72,1,74,1,76,4,121,1]],[254,[18,1,20,50,72,1,74,1,76,4,121,1]],[255,[18,1,21,48,72,1,74,6,121,1]],[256,[21,44,66,3,72,1,74,6,121,1]],[257,[19,1,21,43,65,4,72,1,74,1,76,4,121,1]],[258,[19,1,21,42,64,5,71,2,74,6,121,1]],[259,[19,1,22,40,63,6,71,1,74,6,121,1]],[260,[20,1,22,37,62,7,72,1,121,1]],[261,[20,1,22,47,72,1,74,6,121,1]],[262,[20,1,22,47,70,1,72,1,74,6,121,1]],[263,[23,46,72,1,74,1,76,4,121,1]],[264,[21,1,23,46,72,1,74,6,121,1]],[265,[21,1,23,46,72,1,74,6,121,1]],[266,[21,1,23,46,70,1,72,1,74,6,121,1]],[267,[24,45,72,1,75,5,121,1]],[268,[22,1,24,45,72,1,77,3,121,1]],[269,[22,1,24,8,33,36,70,3,74,6,121,1]],[270,[22,1,24,45,70,2,74,6,121,1]],[271,[25,44,70,1,72,1,121,1]],[272,[23,1,25,8,34,35,72,1,75,5,121,1]],[273,[23,1,25,44,72,1,75,5,121,1]],[274,[23,1,26,43,70,1,72,1,75,5,121,1]],[275,[26,43,70,1,75,5,121,1]],[276,[24,1,26,43,70,1,75,5,121,1]],[277,[24,1,26,43,70,1,75,5]],[278,[27,8,36,33,70,2,75,5]],[279,[27,42,70,2,75,5]],[280,[25,1,27,42,70,2,74,4]],[281,[25,1,27,42,70,2,73,1,76,4]],[282,[25,1,28,41,73,1,75,5]],[283,[28,41,73,1,75,5,165,2,171,2]],[284,[28,41,71,1,73,1,75,5,163,1,173,1]],[285,[26,1,28,41,70,1,73,1,75,5,122,1,161,2,165,7,175,1]],[286,[26,1,29,40,71,1,73,1,75,5,122,1,161,1,164,10,176,1]],[287,[26,1,29,40,71,1,73,1,75,5,122,1,160,1,163,12,177,1]],[288,[29,40,73,1,79,1,122,1,159,1,162,5,168,8]],[289,[27,1,29,40,70,2,73,7,158,1,161,5,168,9,178,1]],[290,[27,1,29,40,70,2,73,7,120,1,123,1,157,1,160,5,166,11]],[291,[29,40,70,1,73,1,120,1,123,1,156,1,159,5,165,12,179,1]],[292,[30,39,70,1,73,1,75,5,120,1,124,1,155,1,158,5,164,14]],[293,[28,1,30,39,73,1,75,1,77,3,124,1,154,1,157,5,163,15]],[294,[28,1,30,39,70,1,73,1,75,5,122,1,125,1,153,1,156,5,162,16]],[295,[31,38,71,1,73,1,75,5,122,2,125,1,152,1,155,5,162,16]],[296,[31,38,70,2,73,1,75,5,122,2,126,1,150,2,154,5,161,13,175,3]],[297,[29,1,31,38,70,2,73,1,77,3,122,3,127,1,149,2,153,5,160,13,174,3]],[298,[29,1,31,38,70,2,73,5,122,3,127,1,148,1,151,6,159,18,179,1]],[299,[29,1,31,38,70,2,73,7,122,4,128,1,146,2,150,6,158,17,176,1,179,1]],[300,[32,37,70,2,73,1,75,5,122,5,129,1,145,2,149,6,157,15,174,2]],[301,[32,37,71,1,73,7,122,6,130,2,143,2,147,7,156,16,175,1,178,1]],[302,[30,1,32,37,71,1,73,7,122,7,131,4,140,3,146,7,155,16]],[303,[30,1,32,37,71,1,73,1,75,5,121,9,134,7,144,8,153,17,171,2,174,1,177,1]],[304,[30,1,32,37,71,1,73,7,120,13,142,9,152,18,173,2,177,1]],[305,[30,1,32,37,71,1,73,1,75,5,120,30,151,18,170,2,173,1]],[306,[30,1,33,37,71,1,73,1,120,28,150,18,171,1,176,1]],[307,[30,1,33,37,71,1,120,27,149,19,170,1,172,1]],[308,[31,1,33,37,71,1,83,1,92,2,101,3,105,1,107,1,109,36,147,20,170,3,175,1]],[309,[31,1,33,37,71,1,74,1,83,1,87,3,92,2,100,4,105,38,146,20,170,2]],[310,[31,1,33,10,44,26,71,1,73,3,78,3,83,1,85,1,87,4,92,2,99,5,105,35,144,22,170,2,174,1]],[311,[31,1,33,10,44,26,71,1,73,4,78,3,83,1,85,1,87,4,92,2,96,2,99,5,105,32,140,25,170,1]],[312,[31,1,33,10,44,26,71,1,73,8,83,1,85,1,87,4,92,2,95,3,99,5,105,60,170,1,173,1]],[313,[31,1,33,10,44,26,71,1,73,8,83,1,85,1,87,4,92,2,95,3,99,5,105,59]],[314,[31,1,33,10,44,26,71,1,73,8,83,1,85,1,87,4,92,2,95,3,99,5,105,3,109,55,169,1,172,1]],[315,[31,1,33,10,44,26,71,1,73,8,83,1,85,1,87,4,92,1,95,3,99,5,105,58,169,1]],[316,[31,1,33,10,44,26,71,1,73,8,83,3,87,4,92,1,95,3,99,5,105,3,109,54,168,1,171,1]],[317,[31,1,33,37,71,1,73,8,83,3,87,4,92,1,95,3,99,5,105,3,109,54,168,1,171,1]],[318,[31,1,33,10,44,26,71,1,73,9,83,3,87,4,92,1,95,3,99,5,105,3,109,52,162,1,167,1,170,1]],[319,[31,1,33,37,71,1,74,8,83,3,87,4,92,1,95,9,105,3,109,52,162,1,167,1,170,1]],[320,[31,1,33,37,71,1,74,8,83,3,87,4,92,1,95,9,105,3,109,51,162,1,166,1]],[321,[31,1,33,37,71,1,74,8,83,3,87,4,92,1,95,9,105,3,109,53,163,1,166,1,169,1]],[322,[33,37,71,1,74,8,83,3,87,4,92,1,95,13,109,50,160,2,163,1,165,1]],[323,[33,9,43,27,71,1,74,8,83,3,87,4,92,1,95,13,109,49,160,1,162,2,165,1,168,1]],[324,[30,1,33,37,71,1,74,8,83,3,87,4,92,1,95,13,109,49,163,1,168,1]],[325,[30,1,32,38,71,1,74,8,83,3,87,4,92,1,95,13,109,48,162,1,164,1]],[326,[30,1,32,9,42,28,71,1,74,8,83,3,87,4,92,1,95,13,109,12,122,35,158,1,164,1,167,1]],[327,[32,9,42,28,71,1,74,8,83,3,87,4,92,1,95,13,109,12,122,36,163,2]],[328,[29,1,32,38,74,8,83,8,92,1,95,13,109,12,122,34,157,1,163,1,166,1]],[329,[29,1,31,39,74,8,83,8,92,1,95,13,109,12,122,34,157,1,163,1,166,1]],[330,[31,9,41,29,74,1,76,6,83,8,92,1,95,9,105,3,109,12,122,33,156,1,163,1]],[331,[28,1,31,39,74,1,76,6,83,8,92,2,95,9,105,3,109,46,159,1,162,1]],[332,[28,1,30,9,40,30,74,8,83,8,92,2,95,9,105,16,128,1,130,25,156,1,159,2,162,1,165,1]],[333,[30,40,73,9,83,8,92,2,95,9,105,8,116,2,121,9,131,23,157,4,162,1,165,1]],[334,[27,1,29,41,73,9,83,8,92,1,95,8,105,1,107,1,113,17,132,22,155,1,157,6]],[335,[27,1,29,9,39,31,73,9,83,8,92,2,105,16,122,8,132,22,158,4]],[336,[26,1,29,9,39,31,72,10,83,2,92,2,97,7,105,10,116,2,119,11,133,21,157,5,164,1]],[337,[26,1,28,9,38,32,72,8,81,1,83,1,87,6,94,10,105,1,107,1,109,21,133,21,157,5,164,1]],[338,[28,9,38,32,72,1,81,1,83,11,95,1,99,4,105,1,107,23,133,21,156,6,164,1]],[339,[25,1,27,9,37,23,69,1,72,1,74,8,83,1,87,4,92,2,96,7,105,1,107,1,109,21,133,20,156,6,164,1]],[340,[27,9,37,20,60,10,72,8,83,1,87,4,92,2,95,8,105,1,107,1,109,9,119,11,133,20,154,8,164,1]],[341,[24,1,26,9,37,19,58,12,72,1,74,1,76,4,81,1,83,1,87,4,92,2,95,8,105,1,107,1,109,9,119,11,133,20,154,8,164,1]],[342,[26,9,36,20,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,105,1,107,1,109,9,119,11,133,29,164,1]],[343,[23,1,25,9,36,20,58,12,72,1,76,4,81,1,83,1,87,4,92,2,95,8,105,1,107,1,109,9,119,11,133,29,164,1]],[344,[23,1,25,9,36,20,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,105,1,107,1,109,9,119,11,133,30]],[345,[22,1,24,10,35,21,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,104,2,107,1,109,9,119,11,133,30]],[346,[22,1,24,9,35,21,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,104,2,107,1,109,9,119,11,133,30,165,1]],[347,[21,1,24,9,34,22,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,104,2,107,1,109,9,119,11,133,30,165,1]],[348,[21,1,23,10,34,22,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,104,2,107,1,110,8,119,11,132,31,165,1]],[349,[23,9,33,23,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,104,2,107,1,110,8,120,10,132,32]],[350,[20,1,22,10,33,23,58,12,72,1,75,5,81,1,83,1,86,5,92,1,95,8,104,2,107,1,110,8,120,10,132,32,166,1]],[351,[22,9,33,23,58,12,72,1,75,7,83,1,86,5,92,1,95,2,98,5,104,2,107,1,110,8,120,6,129,1,132,32,166,1]],[352,[19,1,21,10,32,24,58,11,72,1,74,8,83,1,86,5,92,2,95,8,104,2,107,9,117,1,132,33]],[353,[21,9,32,24,58,11,70,1,72,1,74,8,83,1,86,5,92,2,95,8,104,2,107,1,117,1,132,33,167,1]],[354,[18,1,20,10,31,25,58,11,70,1,72,1,74,8,83,1,85,6,92,2,95,8,104,2,117,1,130,36]],[355,[17,2,20,9,31,25,58,11,70,1,72,1,74,8,83,1,85,8,104,2,117,1,130,36,168,1]],[356,[17,1,19,10,30,26,58,11,70,1,72,1,74,8,83,1,85,3,92,2,104,2,117,1,122,4,129,38,169,1]],[357,[16,2,19,10,30,26,58,11,70,1,72,1,74,4,79,1,83,1,92,2,104,2,114,1,117,51,169,1]],[358,[16,1,19,9,30,26,58,11,70,1,72,1,83,1,92,1,104,2,111,1,113,2,117,4,122,46,170,1]],[359,[15,2,18,10,29,27,58,2,70,1,72,1,83,1,92,2,99,4,104,2,107,1,111,10,122,47]],[360,[15,1,18,9,29,28,70,1,72,1,81,1,83,1,87,1,90,1,92,1,99,4,104,2,107,2,110,59,171,1]],[361,[15,1,17,10,28,29,70,1,72,1,79,1,81,1,83,1,87,4,92,1,95,11,107,63,172,1]],[362,[14,1,17,9,28,30,70,1,72,1,78,2,81,1,83,1,85,6,92,1,95,11,107,63,172,1]],[363,[14,1,16,10,27,33,62,7,70,1,72,1,76,6,83,10,95,11,107,64,173,1]],[364,[16,9,27,42,70,1,72,3,76,6,83,10,95,76,173,1]],[365,[13,1,15,10,26,45,72,3,76,6,83,3,87,6,95,11,107,65,174,1]],[366,[15,10,26,45,72,3,76,6,83,3,87,6,95,78]],[367,[12,1,14,10,25,46,72,3,76,6,83,3,87,6,95,3,99,7,107,66,175,1]],[368,[12,1,14,10,25,44,70,1,72,3,76,6,83,3,87,6,94,12,107,67]],[369,[11,1,13,10,25,44,70,1,72,3,76,6,83,3,87,6,95,79,176,1]],[370,[11,1,13,10,24,45,70,1,72,3,76,6,83,3,87,6,95,80]],[371,[10,1,12,11,24,45,70,1,72,3,76,6,83,3,87,4,92,1,95,80]],[372,[10,1,12,10,23,46,70,1,73,2,76,6,83,3,87,6,94,82,178,1]],[373,[9,1,12,10,23,46,70,1,73,2,76,6,83,3,87,6,94,83]],[374,[9,1,11,58,70,1,73,2,76,6,83,3,87,6,94,4,99,78,179,1]],[375,[8,1,11,10,22,47,70,1,73,2,76,6,83,3,87,6,94,4,99,79,180,1]],[376,[8,1,10,11,22,47,70,1,73,2,76,6,83,3,87,6,94,4,99,22,127,2,131,47,180,1]],[377,[10,59,70,1,73,9,83,3,87,6,95,3,99,10,110,6,117,2,120,10,131,48,181,1]],[378,[7,1,9,11,21,48,70,1,73,9,83,3,87,6,94,12,107,1,113,17,131,49,181,1]],[379,[7,1,9,11,21,48,70,1,73,9,84,2,87,6,94,4,104,2,107,9,117,2,122,8,132,48,182,1]],[380,[9,10,20,49,70,1,73,9,83,3,87,4,92,2,99,6,106,10,117,2,122,8,132,49,183,1]],[381,[6,1,8,11,20,49,70,1,73,9,83,1,92,1,95,11,107,1,110,6,117,2,122,8,133,48,183,1]],[382,[6,1,8,11,20,49,70,1,73,4,81,1,87,6,94,9,104,2,107,2,110,6,117,2,122,8,133,49,184,1]],[383,[5,1,7,11,19,50,70,1,77,5,83,8,92,2,100,6,107,1,110,6,117,2,122,8,133,49]],[384,[5,1,7,11,19,40,68,1,70,1,73,9,83,1,89,2,92,1,96,2,99,6,107,1,110,6,117,2,122,8,133,50,185,1]],[385,[7,10,19,38,60,11,73,7,81,1,83,1,87,4,92,1,96,2,99,6,107,1,110,6,117,2,122,8,133,51]],[386,[4,1,6,11,18,39,58,11,70,1,75,7,83,1,87,4,92,1,96,2,99,6,107,1,110,6,117,2,122,8,133,51,186,1]],[387,[4,1,6,11,18,38,58,11,70,1,74,6,81,1,83,1,87,4,92,1,96,2,99,6,107,1,110,6,117,2,122,8,133,52]],[388,[3,1,6,11,18,38,58,11,74,6,81,1,83,1,87,4,92,1,96,2,100,5,107,1,110,6,117,2,122,8,133,31,168,17,187,1]],[389,[3,1,5,11,17,39,58,11,74,6,81,1,83,1,87,6,96,2,99,6,106,2,110,6,117,2,122,8,133,29,164,4,170,16,188,1]],[390,[5,11,17,39,58,11,74,6,81,1,87,6,94,4,99,6,106,2,110,6,117,2,120,1,122,8,133,28,163,1,165,5,171,15,188,1]],[391,[2,1,5,11,17,39,58,11,75,5,81,1,87,6,94,4,99,6,106,2,110,6,117,2,122,8,133,27,162,1,164,23,189,1]],[392,[2,1,4,11,17,39,58,11,74,6,81,1,87,6,94,4,99,6,106,2,110,6,117,2,122,8,133,26,161,11,173,15]],[393,[4,11,16,40,58,11,71,1,74,6,81,1,87,6,94,4,100,5,106,2,110,6,117,2,120,1,122,8,133,26,160,28,190,1]],[394,[1,1,4,11,16,41,58,11,71,1,75,5,81,1,86,7,94,4,100,5,106,2,110,6,117,2,120,10,133,26,160,12,174,15]],[395,[1,1,3,12,16,41,58,11,71,1,75,5,81,1,85,8,94,4,100,5,106,2,110,6,117,2,120,9,133,26,160,11,174,15,191,1]],[396,[1,1,3,12,16,41,58,11,71,1,75,5,81,1,85,8,94,4,100,5,106,2,110,9,120,1,133,26,160,12,174,16]],[397,[0,1,3,12,16,41,58,11,71,1,75,5,81,1,85,8,94,4,100,5,106,2,110,6,117,2,133,26,161,8,170,1,173,17]],[398,[0,1,3,11,15,42,58,11,71,1,75,5,81,1,84,9,94,11,106,1,117,2,129,2,133,27,161,7,169,2,173,18]],[399,[0,1,2,12,15,41,58,11,71,1,75,5,81,1,84,9,94,5,105,1,117,2,128,2,132,28,162,2,168,2,173,1,175,16]],[400,[0,1,2,12,15,42,58,11,71,1,74,8,84,9,94,1,105,2,117,2,123,4,129,32,165,3,173,1,175,17]],[401,[0,1,2,12,15,42,58,11,71,1,74,8,84,2,105,2,117,2,120,1,124,38,174,18]],[402,[0,1,2,55,58,11,71,1,74,6,81,1,92,1,94,1,105,2,115,1,117,46,173,1,175,18]],[403,[0,1,2,54,58,11,71,1,81,1,92,1,105,2,112,52,166,3,172,2,175,18]],[404,[0,1,2,54,58,2,71,1,81,1,92,1,94,1,97,7,105,62,172,22]],[405,[0,1,2,55,71,1,81,1,89,2,92,1,94,1,96,8,105,89,196,1]],[406,[0,1,2,55,71,1,81,1,85,1,87,6,94,1,96,9,106,40,151,44]],[407,[0,1,3,55,71,1,73,7,81,1,88,5,94,11,106,38,146,5,153,42,197,1]],[408,[0,1,3,57,63,5,71,1,73,7,81,1,84,2,87,6,94,11,106,37,144,2,147,6,154,42,197,1]],[409,[3,57,61,8,71,1,73,9,83,10,94,11,106,36,143,1,146,8,155,41]],[410,[1,1,4,66,71,11,83,10,94,11,106,36,143,11,155,41,198,1]],[411,[1,1,4,66,71,11,83,10,94,11,106,43,150,1,153,1,156,17,175,21,198,1]],[412,[2,1,5,53,136,5,142,10,153,1,156,13,171,4,177,19]],[413,[2,1,5,53,136,5,142,7,153,1,157,11,169,8,178,19]],[414,[3,1,6,52,136,5,143,9,157,10,168,1,171,7,179,18]],[415,[3,1,7,51,136,6,143,9,158,9,168,10,180,17]],[416,[4,1,7,51,136,6,144,4,151,1,158,9,168,11,180,17]],[417,[5,1,8,50,136,7,145,2,150,2,158,8,167,12,180,12,193,4]],[418,[5,1,8,50,136,8,155,1,157,9,167,12,181,13,195,1]],[419,[6,1,9,49,136,9,153,1,156,10,167,12,180,13,195,1]],[420,[9,49,136,10,151,15,168,10,180,10,191,1,195,1]],[421,[7,1,10,48,136,31,169,9,180,10,191,1]],[422,[8,1,11,47,136,31,170,7,179,12,197,1]],[423,[11,47,136,32,172,3,179,12,193,1]],[424,[9,1,12,46,136,34,178,12]],[425,[10,1,13,45,136,35,179,10]],[426,[13,45,136,38,178,8,187,1]],[427,[11,1,14,44,136,35,177,8,186,1]],[428,[12,1,15,43,136,36,176,9]],[429,[15,43,136,38,175,9,189,1]],[430,[13,1,16,42,136,47]],[431,[14,1,17,41,136,16,158,24]],[432,[17,41,136,14,152,6,160,22]],[433,[15,1,18,40,136,14,151,1,153,6,161,20]],[434,[16,1,19,39,136,13,150,1,152,8,161,19,189,1]],[435,[20,38,136,12,149,1,151,7,159,2,162,17,180,1]],[436,[17,1,20,38,136,12,149,2,152,9,162,17,184,1]],[437,[18,1,21,37,136,12,150,6,157,2,160,1,163,15,183,1]],[438,[22,36,136,11,148,1,150,6,157,1,160,1,163,14]],[439,[22,36,136,11,148,1,151,6,159,1,163,13]],[440,[20,1,23,35,136,11,149,1,152,4,159,1,164,12]],[441,[24,34,136,12,150,1,153,3,158,1,164,11]],[442,[24,34,136,13,150,2,154,4,162,1,164,10]],[443,[22,1,25,33,136,13,155,3,163,10]],[444,[26,32,136,14,161,11]],[445,[27,31,136,16,160,12,181,1]],[446,[24,1,27,31,136,35]],[447,[28,30,136,22,159,11]],[448,[29,29,136,34,175,1]],[449,[26,1,29,29,136,33,178,1]],[450,[30,28,136,33]],[451,[31,27,136,32,169,1]],[452,[31,27,136,32]],[453,[29,1,32,26,136,31,171,1,175,1]],[454,[33,25,137,28,171,1]],[455,[33,25,136,1,139,27,170,1]],[456,[34,24,141,23,169,1,173,1]],[457,[35,23,138,1,140,2,143,20,172,1]],[458,[36,22,137,1,139,1,142,21,168,1]],[459,[36,22,137,1,141,21,167,1]],[460,[34,1,37,21,141,1,143,4,148,13]],[461,[35,1,38,20,142,6,149,11]],[462,[39,19,142,8,151,8]],[463,[36,1,40,18,144,3,149,8,164,1]],[464,[37,1,40,17,147,3,151,3,163,1]],[465,[38,1,41,9,51,3,142,1,148,6,162,1]],[466,[42,8,150,4,161,1]],[467,[39,1,42,7,151,3]],[468,[40,1,43,5,148,1,153,1]],[469,[41,1,45,2]],[470,[42,1]]]},"16:1":{"w":199,"h":438,"rows":[[201,[120,5,163,1,166,5,172,15,188,1,190,1,193,1]],[202,[120,5,162,1,165,6,172,17]],[203,[120,5,162,1,164,6,171,19]],[204,[120,5,161,1,164,5,170,20,192,1]],[205,[120,5,163,6,170,20,192,1]],[206,[120,5,160,1,162,6,169,16,186,3]],[207,[120,5,159,1,162,5,168,16,186,3,191,1]],[208,[120,5,158,1,161,6,168,16,185,4,191,1]],[209,[120,5,127,1,158,1,160,6,167,16,184,5]],[210,[120,5,127,1,157,1,160,5,166,17,184,4,190,1]],[211,[120,5,127,1,156,1,159,6,166,18,186,2,190,1]],[212,[120,5,127,1,155,1,158,6,165,17,186,2]],[213,[120,5,127,1,155,1,157,6,164,18,186,1]],[214,[120,5,127,1,154,1,157,6,164,17,186,1]],[215,[120,5,127,1,153,1,156,6,163,18,185,2]],[216,[120,6,127,1,152,1,155,25,181,1,185,1,188,1]],[217,[120,6,127,1,151,1,154,7,162,18,185,1]],[218,[120,6,127,1,151,1,153,7,161,19,184,2]],[219,[120,6,150,1,152,7,160,21,184,1,187,1]],[220,[120,6,128,1,149,1,152,7,160,19,181,1,184,1]],[221,[120,6,128,1,148,1,151,7,159,20,183,1]],[222,[120,7,146,1,150,7,158,20,183,1,186,1]],[223,[120,7,129,1,145,1,149,7,157,22,183,1]],[224,[125,3,130,1,144,1,147,8,156,23,182,1]],[225,[120,1,131,1,142,1,146,8,156,23,182,1,185,1]],[226,[120,5,132,1,139,3,145,8,155,23,181,2,185,1]],[227,[120,8,134,5,143,9,154,24,181,1]],[228,[120,11,140,11,153,24,178,1,180,2,184,1]],[229,[121,14,137,13,152,25,178,1,180,2,184,1]],[230,[120,2,123,25,151,25,180,1]],[231,[120,27,150,27,180,1,183,1]],[232,[120,26,148,26,178,1,180,1,183,1]],[233,[120,24,146,27,179,1]],[234,[121,20,144,28,178,2,182,1]],[235,[121,16,140,31,179,1,182,1]],[236,[120,51,178,1]],[237,[120,50,178,1]],[238,[120,50,181,1]],[239,[120,49]],[240,[120,48,177,1]],[241,[120,48,180,1]],[242,[120,47,168,2]],[243,[120,48,176,1]],[244,[121,44,166,1,169,1,172,1]],[245,[30,3,35,3,120,1,122,45,169,1,172,1,175,1]],[246,[28,1,38,2,120,2,123,41,165,1,169,1,172,1,175,1]],[247,[27,1,31,6,40,1,120,2,123,40,172,1,175,1]],[248,[26,1,29,10,41,1,121,1,124,38,166,1,169,2,174,1]],[249,[25,1,28,12,42,1,120,3,124,38,166,1,169,2,174,1]],[250,[24,1,27,5,35,6,43,1,120,2,123,39,169,2,173,2]],[251,[26,5,33,9,120,1,122,39,170,1,173,1]],[252,[23,1,26,4,31,12,44,1,79,1,121,41,165,1,169,5]],[253,[25,18,45,1,79,1,120,42,165,2,169,5,176,1]],[254,[25,19,46,1,79,1,120,41,165,2,168,5]],[255,[25,20,47,1,78,1,120,41,165,1,167,1,169,4]],[256,[25,21,48,1,78,1,120,40,161,5,168,5]],[257,[25,22,49,1,120,46,167,5]],[258,[25,23,50,1,77,1,120,46,167,5]],[259,[25,24,51,1,77,1,79,1,120,46,167,5]],[260,[23,1,26,24,52,1,76,1,79,1,120,37,158,3,163,9]],[261,[26,25,53,1,78,2,120,51]],[262,[24,1,27,25,54,1,75,1,78,2,120,51]],[263,[24,1,27,26,55,1,74,1,77,3,120,35,157,14]],[264,[27,27,56,1,73,1,76,4,120,35,156,14]],[265,[25,1,28,27,58,1,72,1,75,4,120,33,155,15]],[266,[28,28,59,2,70,1,74,5,120,33,155,15]],[267,[26,1,29,29,61,3,67,3,73,5,79,1,120,33,154,15]],[268,[26,1,29,31,71,6,79,1,120,49]],[269,[27,1,30,33,68,8,78,2,120,32,153,16,171,1]],[270,[27,1,30,45,77,3,120,49]],[271,[28,1,31,43,76,4,120,49]],[272,[28,1,31,42,75,5,120,48]],[273,[32,40,74,6,120,48,170,1]],[274,[29,1,32,38,72,8,120,48]],[275,[30,1,33,35,70,10,120,48]],[276,[30,1,33,47,120,48]],[277,[34,46,120,47]],[278,[34,46,120,47]],[279,[34,46,120,47]],[280,[35,45,120,47]],[281,[35,45,120,47]],[282,[33,1,36,44,120,47]],[283,[36,44,120,47]],[284,[34,1,37,43,120,47]],[285,[34,1,37,130]],[286,[37,130]],[287,[35,1,38,129]],[288,[38,129]],[289,[36,1,39,128]],[290,[39,128]],[291,[39,128,169,1]],[292,[37,1,40,127,169,1]],[293,[40,127,169,1]],[294,[40,127,169,1]],[295,[40,128,169,1]],[296,[38,1,41,127]],[297,[38,1,41,127]],[298,[41,127,170,1]],[299,[41,128,170,1]],[300,[41,128]],[301,[41,128,171,1]],[302,[41,129,171,1]],[303,[38,1,40,130]],[304,[38,1,40,130,172,1]],[305,[38,1,40,131]],[306,[40,131,173,1]],[307,[40,132]],[308,[37,1,39,133,174,1]],[309,[39,7,47,123,171,1]],[310,[36,1,39,134,175,1]],[311,[36,1,38,7,46,125,172,1,175,1]],[312,[38,136,176,1]],[313,[35,1,37,7,45,127,173,1,176,1]],[314,[37,6,44,131,177,1]],[315,[34,1,36,7,44,131,177,1]],[316,[36,6,43,133]],[317,[33,1,35,6,42,134,178,1]],[318,[35,5,42,135,178,1]],[319,[32,1,34,6,41,12,54,123,179,1]],[320,[31,1,34,5,40,10,52,4,59,118,179,1]],[321,[33,6,40,8,49,10,61,117,180,1]],[322,[30,1,33,5,39,7,47,5,56,4,62,116,180,1]],[323,[29,1,32,5,38,7,46,3,50,3,54,3,59,2,62,117,181,1]],[324,[29,1,31,13,45,2,48,4,53,1,55,1,57,5,63,116,181,1]],[325,[28,1,31,5,37,6,44,2,47,5,53,9,64,116,182,1]],[326,[27,2,30,5,36,6,43,2,46,11,58,5,64,116,182,1]],[327,[27,1,30,4,35,6,42,2,45,11,57,6,64,117,183,1]],[328,[26,1,29,5,35,5,41,2,44,9,56,7,64,117,183,1]],[329,[26,1,28,5,34,5,41,22,65,117]],[330,[25,1,28,5,34,5,40,2,43,20,64,118,184,1]],[331,[27,5,33,5,39,2,42,21,64,119]],[332,[24,1,27,4,32,6,39,24,64,119,185,1]],[333,[26,5,32,5,38,2,41,22,64,120,185,1]],[334,[23,1,25,5,31,5,38,1,40,23,64,120]],[335,[22,1,25,4,30,6,37,25,64,121,186,1]],[336,[24,5,30,5,36,2,39,23,63,122]],[337,[21,1,24,4,29,6,36,26,63,122,187,1]],[338,[23,5,29,5,35,2,38,24,63,123]],[339,[20,1,22,5,28,6,35,1,37,24,62,124,188,1]],[340,[19,1,22,4,27,6,34,2,37,24,62,125]],[341,[19,1,21,5,27,5,33,2,36,25,62,125,189,1]],[342,[18,1,21,4,26,6,33,2,36,25,62,126,189,1]],[343,[20,11,32,2,35,25,61,127,190,1]],[344,[17,1,19,5,25,6,32,28,61,128,190,1]],[345,[16,1,19,4,24,6,31,29,61,128,191,1]],[346,[16,1,18,5,24,5,31,1,33,27,61,128,191,1]],[347,[15,1,18,4,23,6,30,29,61,129]],[348,[15,1,17,11,29,2,32,27,60,130,192,1]],[349,[14,1,17,4,22,6,29,1,32,27,60,131,192,1]],[350,[14,1,16,11,28,31,60,131,193,1]],[351,[13,1,16,4,21,11,33,25,60,131,193,1]],[352,[15,4,20,6,27,5,33,25,59,133]],[353,[12,1,15,4,20,8,29,2,33,25,59,133,194,1]],[354,[14,4,19,6,26,2,31,27,59,134,194,1]],[355,[11,1,13,5,19,5,26,1,28,29,59,134]],[356,[13,4,18,6,25,3,29,28,58,135,195,1]],[357,[10,1,12,11,25,32,58,136]],[358,[9,1,12,4,17,6,24,2,27,29,58,136,196,1]],[359,[9,1,11,11,24,1,26,30,57,137,196,1]],[360,[8,1,11,4,16,6,23,33,57,138,196,1]],[361,[8,1,10,11,23,1,25,31,57,103,167,28]],[362,[7,1,10,4,15,6,22,30,53,2,57,101,160,7,169,26,197,1]],[363,[7,1,9,11,22,1,24,26,54,1,56,101,159,3,163,6,170,26,197,1]],[364,[6,1,9,4,14,6,21,2,24,26,51,3,56,100,158,2,161,3,166,4,171,25]],[365,[6,1,8,11,21,1,23,31,56,100,157,2,160,11,172,24]],[366,[5,1,8,4,13,6,20,2,23,27,51,1,56,99,156,2,159,13,174,22,198,1]],[367,[5,1,7,5,13,5,20,1,22,29,55,100,156,1,158,5,165,5,171,2,175,21,198,1]],[368,[4,1,7,11,19,2,22,32,55,99,156,6,164,7,172,2,175,21,198,1]],[369,[4,1,6,5,12,5,19,1,21,30,55,99,155,17,173,2,176,20,198,1]],[370,[6,11,18,2,21,32,55,99,155,18,174,2,178,16,195,1,198,1]],[371,[3,1,5,11,18,1,20,33,54,100,155,19,175,2,178,16,195,1,198,1]],[372,[5,11,17,36,54,100,155,20,176,2,179,14,195,1,198,1]],[373,[2,1,4,12,17,35,54,100,155,21,177,2,180,13,195,1]],[374,[2,1,4,11,17,35,54,100,155,24,181,12,195,1]],[375,[1,1,4,11,17,35,53,101,155,21,181,11,194,1,197,1]],[376,[1,1,3,12,16,36,53,101,155,21,177,3,181,12]],[377,[3,12,16,3,21,30,53,101,155,20,176,4,182,10,193,1]],[378,[0,1,3,12,16,35,52,102,155,20,176,2,179,1,182,10,193,1,196,1]],[379,[0,1,2,13,18,1,21,30,52,102,155,20,176,4,182,6,189,1,192,1]],[380,[2,13,17,34,52,102,155,21,177,2,182,6,191,1,195,1]],[381,[2,13,17,4,22,28,52,102,155,23,182,4,187,2,191,1,194,1]],[382,[2,14,17,33,51,103,155,22,178,1,181,5,190,1,194,1]],[383,[2,14,18,32,51,103,155,25,181,5,189,1,193,1]],[384,[2,15,18,31,51,103,155,21,177,1,181,4,189,1]],[385,[2,16,19,30,51,103,155,23,180,4,188,1,192,1]],[386,[0,1,3,16,20,29,50,104,155,23,179,5,188,1,191,1]],[387,[3,16,21,28,50,103,155,22,179,4,187,1]],[388,[4,2,8,1,10,10,22,26,50,104,155,22,178,5,186,2,190,1]],[389,[1,1,4,2,8,1,11,10,23,25,49,105,155,1,157,19,177,5,186,1]],[390,[10,1,12,10,23,25,49,105,155,20,177,4,185,1]],[391,[7,1,10,1,13,10,24,23,49,105,155,19,176,6]],[392,[14,10,25,22,49,104,155,19,175,5,184,1]],[393,[8,1,14,10,26,1,28,1,30,17,48,105,155,18,174,6,183,1]],[394,[14,1,16,9,27,1,29,18,48,105,155,17,174,5]],[395,[16,10,27,2,30,17,48,105,155,17,173,6,182,1]],[396,[17,10,28,5,34,5,41,6,48,105,155,16,172,6]],[397,[13,1,18,10,29,9,40,6,48,31,81,72,155,4,160,10,172,5,184,1]],[398,[13,1,18,10,30,8,39,1,41,1,43,3,47,34,82,71,155,6,162,8,171,5]],[399,[10,1,18,1,20,9,31,14,47,31,79,3,84,8,94,59,155,3,161,8,170,6,183,1]],[400,[11,1,18,12,32,13,46,29,76,3,81,2,84,9,96,57,155,3,159,9,170,5,182,1]],[401,[12,1,18,3,22,9,33,11,46,29,76,2,82,1,85,5,91,2,94,1,97,5,103,2,107,46,155,3,159,1,161,1,163,5,169,5]],[402,[13,1,18,14,34,5,40,3,45,30,76,1,82,2,85,3,89,2,95,1,97,3,101,5,108,7,116,38,155,4,162,5,168,6,181,1]],[403,[14,1,18,16,36,6,44,31,76,2,81,1,83,1,85,5,95,2,98,2,101,2,106,1,108,9,120,6,130,24,156,10,167,6,180,1]],[404,[15,1,19,2,22,13,42,33,76,5,83,1,85,3,89,1,95,2,98,4,106,2,109,8,120,10,132,23,157,8,166,6,176,1,179,1]],[405,[20,1,22,16,40,36,77,3,81,7,89,2,94,1,96,1,98,1,100,2,104,1,107,1,109,2,112,2,121,7,129,2,132,24,158,6,165,6,175,1]],[406,[20,1,22,55,82,7,90,3,95,1,97,2,101,1,106,1,108,3,112,2,119,1,121,2,124,2,130,2,133,25,164,7,174,1]],[407,[21,1,24,66,92,2,96,4,101,5,107,4,112,2,118,2,121,4,131,1,133,37,173,1]],[408,[22,1,24,68,93,8,102,3,106,1,108,3,112,2,117,3,121,2,124,1,130,2,133,36,173,1]],[409,[23,1,25,77,104,1,107,5,113,6,120,3,124,2,129,1,131,1,133,35]],[410,[23,90,115,3,119,5,125,4,131,37]],[411,[21,1,24,5,30,85,118,7,126,41,171,1]],[412,[25,5,31,96,130,36,170,1]],[413,[26,4,31,39,74,91,169,1]],[414,[27,4,32,33,79,85,169,1,172,1]],[415,[28,1,30,2,33,31,83,81,168,1]],[416,[28,34,64,1,86,77]],[417,[29,31,61,2,92,70,170,1]],[418,[26,1,30,29,86,4,96,66]],[419,[27,1,30,26,58,3,62,1,86,3,91,2,100,61,169,1]],[420,[31,1,33,21,60,3,69,1,74,2,88,1,105,55,162,1,164,1,168,1]],[421,[32,1,35,18,59,1,66,1,109,50]],[422,[29,1,32,3,36,15,58,1,96,1,105,1,112,47]],[423,[33,2,36,13,62,1,101,1,104,2,118,40,162,1,166,1]],[424,[34,1,37,11,60,1,92,1,104,3,112,1,114,1,122,35,165,1]],[425,[35,11,96,2,114,1,125,31]],[426,[35,6,42,2,57,1,100,2,113,1,122,2,129,26,164,1]],[427,[35,4,46,1,55,1,104,2,125,2,132,23,163,1]],[428,[36,2,108,1,126,1,130,2,138,16,159,1]],[429,[52,1,112,1,126,1,138,1,140,1,142,11]],[430,[115,3,128,3,138,2,145,7,161,1]],[431,[48,1,120,1,133,1,138,1,142,2,160,1]],[432,[124,1,135,2,147,2,150,1,156,1]],[433,[42,1,140,1,146,2,150,1,154,2,159,1]],[434,[132,2,146,1]],[435,[136,1,148,2]],[437,[144,1]]]},"17:0":{"w":194,"h":511,"rows":[[238,[24,5]],[239,[23,2,28,3]],[240,[22,2,30,2]],[241,[22,2,29,3]],[242,[23,2,28,3]],[243,[23,2,29,2]],[244,[22,10]],[245,[20,14]],[246,[19,16]],[247,[18,19]],[248,[17,21]],[249,[16,23]],[250,[16,24]],[251,[16,25]],[252,[15,27]],[253,[15,28]],[254,[15,29]],[255,[14,31]],[256,[14,32]],[257,[14,33]],[258,[14,33]],[259,[14,34]],[260,[14,35]],[261,[14,36]],[262,[14,37]],[263,[14,38]],[264,[14,40]],[265,[14,41]],[266,[14,42]],[267,[14,43]],[268,[14,44,73,1]],[269,[14,46,72,2]],[270,[14,48,71,5]],[271,[14,51,69,8]],[272,[14,63]],[273,[14,63]],[274,[15,25,43,34]],[275,[15,23,46,25,72,5]],[276,[15,22,48,29]],[277,[15,21,49,28]],[278,[15,21,50,27]],[279,[16,20,52,24]],[280,[16,20,53,23]],[281,[16,20,54,22]],[282,[16,20,55,21]],[283,[16,20,57,19]],[284,[17,19,58,18]],[285,[17,20,59,17]],[286,[17,20,61,15]],[287,[17,20,62,14]],[288,[18,19,64,12]],[289,[18,19,68,7]],[290,[18,20]],[291,[18,20]],[292,[19,19]],[293,[19,19]],[294,[19,20]],[295,[20,19,146,12]],[296,[20,19,143,17]],[297,[21,18,141,21]],[298,[21,19,117,1,138,25]],[299,[21,19,117,3,136,13,150,14]],[300,[22,18,117,5,133,13,149,16]],[301,[22,19,117,26,145,21]],[302,[22,19,117,25,143,24]],[303,[23,18,117,51]],[304,[23,18,117,51]],[305,[24,18,117,30,156,13]],[306,[24,18,117,28,157,13]],[307,[24,18,117,26,159,11]],[308,[25,18,117,23,160,11]],[309,[25,18,118,19,161,10]],[310,[25,18,122,11,161,10]],[311,[26,17,162,10]],[312,[26,18,162,10]],[313,[27,17,163,9]],[314,[27,17,163,10]],[315,[27,18,164,9]],[316,[28,17,164,9]],[317,[28,17,164,9]],[318,[28,17,164,10]],[319,[29,16,164,10]],[320,[29,17,165,9]],[321,[29,17,165,9]],[322,[29,18,165,9]],[323,[30,17,165,9]],[324,[30,17,165,9]],[325,[30,17,165,9]],[326,[30,18,165,9]],[327,[31,17,165,9]],[328,[31,17,165,9]],[329,[31,18,165,9]],[330,[31,18,165,9]],[331,[31,19,165,9]],[332,[31,19,164,10]],[333,[31,19,164,10]],[334,[31,19,164,9]],[335,[31,20,164,9]],[336,[31,20,164,9]],[337,[31,20,164,9]],[338,[31,21,163,9]],[339,[31,21,163,9]],[340,[31,21,163,9]],[341,[31,22,163,9]],[342,[31,22,163,9]],[343,[30,23,162,10]],[344,[30,24,162,9]],[345,[30,24,162,9]],[346,[29,25,161,10]],[347,[29,26,161,9]],[348,[29,26,161,9]],[349,[29,26,161,9]],[350,[28,28,160,9]],[351,[28,28,160,9]],[352,[28,28,160,8]],[353,[27,30,159,9]],[354,[27,30,159,9]],[355,[26,31,159,8]],[356,[26,32,159,8]],[357,[26,32,158,9]],[358,[25,33,157,9]],[359,[25,34,157,9]],[360,[24,35,157,9]],[361,[24,35,156,10]],[362,[23,36,156,9]],[363,[23,36,156,9]],[364,[22,38,156,8]],[365,[22,6,29,31,155,9]],[366,[21,7,29,31,155,9]],[367,[21,6,28,32,155,9]],[368,[20,40,155,9]],[369,[20,40,154,10]],[370,[19,41,154,9]],[371,[19,41,154,9]],[372,[18,42,154,9]],[373,[18,42,154,9]],[374,[17,43,154,9]],[375,[17,43,154,9]],[376,[16,44,154,9]],[377,[16,44,154,9]],[378,[15,45,154,9]],[379,[15,45,154,9]],[380,[14,46,154,9]],[381,[13,47,154,9]],[382,[13,9,23,37,154,9]],[383,[12,48,154,9]],[384,[12,48,154,9]],[385,[11,49,155,8]],[386,[11,49,155,9]],[387,[11,49,155,9]],[388,[10,50,155,9]],[389,[10,50,155,10]],[390,[9,51,156,9]],[391,[9,51,156,10]],[392,[8,52,156,10]],[393,[8,52,157,10]],[394,[7,53,157,10]],[395,[7,53,158,10]],[396,[7,53,158,10]],[397,[6,20,27,33,158,11]],[398,[6,54,158,11]],[399,[6,55,159,11]],[400,[5,56,160,10]],[401,[5,56,160,11]],[402,[4,57,161,10]],[403,[4,58,161,11]],[404,[4,58,162,11]],[405,[3,59,162,12]],[406,[3,60,163,11]],[407,[3,61,164,11]],[408,[2,63,164,11]],[409,[2,64,165,11]],[410,[2,65,165,11]],[411,[2,67,166,11]],[412,[1,71,73,4,80,6,87,13,104,4,109,8,166,12]],[413,[1,77,79,42,167,11]],[414,[1,121,168,11]],[415,[1,122,168,11]],[416,[1,123,169,11]],[417,[0,123,169,11]],[418,[0,123,170,11]],[419,[0,122,127,1,171,10]],[420,[0,122,125,4,171,11]],[421,[0,121,123,1,125,5,172,11]],[422,[0,121,124,7,172,11]],[423,[0,120,124,8,173,11]],[424,[0,78,109,11,123,10,173,11]],[425,[0,78,112,7,121,13,174,11]],[426,[0,76,113,6,121,14,175,11]],[427,[0,75,114,4,120,16,175,11]],[428,[0,74,115,2,120,16,176,11]],[429,[0,73,120,17,176,11]],[430,[0,72,119,19,176,11]],[431,[0,72,120,19,177,11]],[432,[0,71,119,20,177,11]],[433,[0,71,119,21,178,11]],[434,[0,70,118,23,179,10]],[435,[0,69,119,22,179,10]],[436,[0,69,119,23,179,11]],[437,[0,69,120,23,180,10]],[438,[0,68,120,24,180,10]],[439,[0,68,120,24,181,10]],[440,[0,68,120,25,181,10]],[441,[1,67,121,25,181,10]],[442,[1,66,121,25,181,11]],[443,[1,66,121,26,182,10]],[444,[1,66,121,27,182,10]],[445,[2,65,122,26,182,10]],[446,[2,65,122,27,183,10]],[447,[2,64,122,28,183,10]],[448,[2,64,122,29,183,10]],[449,[3,63,122,29,183,10]],[450,[3,63,122,30,183,10]],[451,[3,63,122,31,184,9]],[452,[4,62,122,32,184,10]],[453,[4,62,122,33,184,10]],[454,[5,61,122,33,184,10]],[455,[5,61,122,34,184,10]],[456,[6,60,122,35,184,10]],[457,[6,61,122,36,184,10]],[458,[7,60,121,38,184,10]],[459,[7,60,121,39,184,10]],[460,[8,59,121,40,184,10]],[461,[8,59,121,41,184,10]],[462,[9,59,121,42,184,10]],[463,[10,58,121,44,183,11]],[464,[10,58,120,46,183,11]],[465,[11,58,120,47,182,12]],[466,[12,57,120,49,181,13]],[467,[13,57,119,52,180,14]],[468,[13,59,119,56,176,18]],[469,[14,61,115,79]],[470,[15,68,84,1,109,3,115,79]],[471,[16,74,91,1,101,1,109,85]],[472,[17,177]],[473,[18,175]],[474,[19,174]],[475,[19,174]],[476,[20,173]],[477,[22,171]],[478,[23,169]],[479,[24,168]],[480,[26,166]],[481,[27,164]],[482,[28,163]],[483,[30,160]],[484,[31,159]],[485,[33,156]],[486,[35,154]],[487,[36,152]],[488,[39,149]],[489,[41,146]],[490,[43,143]],[491,[45,141]],[492,[47,138]],[493,[49,135]],[494,[51,132]],[495,[54,129]],[496,[57,125]],[497,[60,121]],[498,[63,117]],[499,[66,112]],[500,[69,108]],[501,[73,103]],[502,[78,96]],[503,[82,90]],[504,[86,84]],[505,[91,76]],[506,[93,1,96,69]],[507,[91,8,104,58]],[508,[89,5,95,6,110,49]],[509,[89,3,98,3,120,35]],[510,[90,10,131,14]]]},"17:1":{"w":186,"h":471,"rows":[[220,[154,6]],[221,[152,3,159,2]],[222,[152,3,160,2]],[223,[152,9]],[224,[153,3,158,2]],[225,[152,3,158,3]],[226,[150,13]],[227,[149,15]],[228,[147,18]],[229,[145,21]],[230,[144,23]],[231,[143,24]],[232,[142,26]],[233,[141,27]],[234,[141,28]],[235,[140,29]],[236,[139,30]],[237,[138,32]],[238,[137,8,146,24]],[239,[136,8,145,25]],[240,[135,8,144,26]],[241,[133,9,143,27]],[242,[132,9,142,28]],[243,[131,39]],[244,[130,9,140,30]],[245,[112,1,129,9,139,31]],[246,[112,2,128,9,138,32]],[247,[112,3,126,44]],[248,[112,5,124,46]],[249,[112,21,134,36]],[250,[112,57]],[251,[112,57]],[252,[112,17,130,39]],[253,[112,15,129,40]],[254,[112,57]],[255,[112,56]],[256,[112,56]],[257,[112,56]],[258,[112,56]],[259,[112,56]],[260,[112,55]],[261,[112,55]],[262,[112,55]],[263,[112,55]],[264,[34,8,112,54]],[265,[30,15,74,1,112,54]],[266,[29,18,74,1,112,54]],[267,[27,22,73,2,112,53]],[268,[26,25,72,3,112,53]],[269,[25,28,71,4,112,53]],[270,[24,11,36,18,69,6,112,52]],[271,[23,9,34,23,68,7,112,52]],[272,[22,9,32,43,112,52]],[273,[22,53,112,51]],[274,[21,53,112,51]],[275,[21,54,112,50]],[276,[20,55,112,50]],[277,[20,55,112,50]],[278,[19,56,112,49]],[279,[19,56,112,49]],[280,[19,56,112,48]],[281,[18,57,112,48]],[282,[18,57,112,48]],[283,[18,57,112,47]],[284,[18,57,112,47]],[285,[17,58,112,46]],[286,[17,58,112,46]],[287,[17,58,112,46]],[288,[17,58,112,46]],[289,[17,58,112,45]],[290,[17,58,112,45]],[291,[17,58,112,45]],[292,[17,58,112,44]],[293,[18,57,112,44]],[294,[18,57,112,44]],[295,[18,57,112,44]],[296,[18,57,112,43]],[297,[18,57,112,43]],[298,[18,57,112,43]],[299,[18,57,112,43]],[300,[18,57,112,43]],[301,[18,57,112,43]],[302,[18,57,112,42]],[303,[19,56,112,42]],[304,[19,56,112,42]],[305,[19,56,112,42]],[306,[19,56,112,42]],[307,[20,134]],[308,[20,134]],[309,[20,134]],[310,[21,133]],[311,[21,133]],[312,[21,134]],[313,[22,133]],[314,[22,133]],[315,[22,133]],[316,[23,132]],[317,[23,133]],[318,[23,133]],[319,[24,132]],[320,[24,132]],[321,[24,133]],[322,[25,132]],[323,[25,132]],[324,[26,132]],[325,[26,132]],[326,[26,133]],[327,[27,132]],[328,[27,132]],[329,[27,133]],[330,[27,133]],[331,[28,133]],[332,[28,134]],[333,[28,134]],[334,[28,135]],[335,[28,135]],[336,[28,136]],[337,[28,136]],[338,[28,137]],[339,[28,138]],[340,[28,138]],[341,[28,139]],[342,[28,24,60,107]],[343,[28,22,62,106]],[344,[28,20,63,106]],[345,[28,19,64,105]],[346,[27,19,65,105]],[347,[27,18,65,105]],[348,[27,17,66,105]],[349,[27,16,66,105]],[350,[26,16,66,106]],[351,[26,16,66,106]],[352,[26,15,66,107]],[353,[25,15,66,107]],[354,[25,15,66,108]],[355,[24,15,67,107]],[356,[24,14,67,107]],[357,[23,14,67,108]],[358,[23,14,67,108]],[359,[22,14,67,109]],[360,[22,13,67,109]],[361,[21,14,67,110]],[362,[21,13,67,110]],[363,[20,14,67,111]],[364,[19,14,67,111]],[365,[19,13,67,112]],[366,[18,14,67,112]],[367,[17,14,67,113]],[368,[17,13,67,113]],[369,[16,14,67,113]],[370,[15,14,67,114]],[371,[15,14,67,114]],[372,[14,14,67,115]],[373,[14,14,67,115]],[374,[13,14,67,115]],[375,[13,13,67,116]],[376,[12,14,67,116]],[377,[12,13,67,116]],[378,[11,14,67,117]],[379,[11,13,67,117]],[380,[10,13,67,117]],[381,[10,13,67,117]],[382,[9,13,67,118]],[383,[9,13,67,118]],[384,[8,13,67,118]],[385,[8,13,67,118]],[386,[7,13,67,118]],[387,[7,13,67,119]],[388,[6,13,67,119]],[389,[6,13,67,119]],[390,[5,13,67,119]],[391,[5,13,67,119]],[392,[4,14,67,119]],[393,[4,13,67,119]],[394,[4,13,67,119]],[395,[3,13,67,119]],[396,[3,13,67,119]],[397,[3,13,67,119]],[398,[2,13,67,119]],[399,[2,13,67,119]],[400,[2,12,67,119]],[401,[2,12,67,119]],[402,[1,13,67,119]],[403,[1,13,67,119]],[404,[1,12,67,119]],[405,[0,13,67,119]],[406,[0,13,67,119]],[407,[0,13,67,118]],[408,[0,12,67,118]],[409,[0,12,67,118]],[410,[0,12,67,118]],[411,[0,12,67,118]],[412,[0,12,67,117]],[413,[0,12,67,117]],[414,[0,12,67,117]],[415,[0,12,67,117]],[416,[0,12,67,116]],[417,[0,12,67,116]],[418,[0,12,67,115]],[419,[0,12,67,115]],[420,[0,12,67,115]],[421,[0,12,66,115]],[422,[0,12,66,115]],[423,[0,12,66,114]],[424,[0,12,65,115]],[425,[0,12,65,114]],[426,[0,13,64,115]],[427,[0,13,63,115]],[428,[0,13,62,115]],[429,[0,14,60,117]],[430,[0,14,58,118]],[431,[1,13,56,119]],[432,[1,14,54,121]],[433,[1,14,52,122]],[434,[2,14,49,124]],[435,[2,15,47,125]],[436,[3,15,45,126]],[437,[3,16,43,127]],[438,[4,16,40,129]],[439,[4,17,37,131]],[440,[4,19,35,132]],[441,[5,22,31,135]],[442,[5,160]],[443,[6,157]],[444,[7,155]],[445,[7,154]],[446,[8,151]],[447,[9,148]],[448,[10,146]],[449,[11,143]],[450,[12,140]],[451,[12,137]],[452,[13,134]],[453,[15,130]],[454,[16,126]],[455,[17,123]],[456,[18,120]],[457,[20,115]],[458,[21,110]],[459,[23,104]],[460,[25,99]],[461,[27,93]],[462,[29,86]],[463,[32,78]],[464,[35,71]],[465,[39,52,95,4]],[466,[44,47,95,2]],[467,[55,19,89,3,95,3]],[468,[88,4,95,4]],[469,[87,3,97,2]],[470,[88,10]]]},"18:0":{"w":201,"h":491,"rows":[[239,[183,3]],[240,[183,2,190,4]],[241,[181,2,189,7]],[242,[180,2,188,8]],[243,[179,2,187,9]],[244,[178,2,181,1,185,11]],[245,[177,2,184,12,199,1]],[246,[176,2,183,12,199,1]],[247,[174,3,182,13]],[248,[173,3,181,13,198,1]],[249,[172,3,179,15,198,1]],[250,[171,2,178,16]],[251,[170,2,177,16,197,1]],[252,[169,2,176,17,197,1]],[253,[168,2,175,17,197,1]],[254,[167,2,174,18,196,1]],[255,[165,3,172,20,196,1]],[256,[164,2,171,21]],[257,[163,2,170,21]],[258,[163,1,169,22,195,1]],[259,[161,2,168,22,195,1]],[260,[160,2,167,23,194,1]],[261,[159,2,166,24,194,1]],[262,[158,2,165,24,194,1]],[263,[157,1,164,25,193,1]],[264,[155,2,162,26,193,1]],[265,[154,2,161,27,192,2]],[266,[153,2,160,28,192,1]],[267,[152,2,159,28,191,2]],[268,[151,2,158,29,191,1]],[269,[150,1,157,29,191,1]],[270,[149,1,156,30]],[271,[148,1,154,32,190,1]],[272,[146,2,153,32,190,1]],[273,[145,2,148,1,152,33,189,1]],[274,[71,1,80,1,143,1,151,33,189,1]],[275,[70,1,77,4,140,4,150,34,188,1]],[276,[69,1,76,5,148,36,188,1]],[277,[74,7,147,36,188,1]],[278,[68,2,74,7,146,37,187,1]],[279,[68,1,73,8,133,4,143,39,187,1]],[280,[68,1,73,8,132,50,186,1]],[281,[68,1,73,8,132,50,186,1]],[282,[72,9,132,49,186,1]],[283,[68,1,73,8,132,49,185,1]],[284,[68,1,73,8,132,48,185,1]],[285,[68,1,73,8,132,48,184,1]],[286,[68,1,73,8,132,48,184,1]],[287,[68,2,73,8,132,47,184,1]],[288,[68,2,73,8,132,47,183,1]],[289,[68,2,74,7,132,47,183,1]],[290,[68,2,74,7,132,46,182,1]],[291,[69,1,74,7,132,46,182,1]],[292,[69,1,74,7,132,46,182,1]],[293,[69,1,74,7,132,45,181,1]],[294,[69,2,74,7,132,45,181,1]],[295,[69,1,74,7,132,44]],[296,[69,2,74,7,132,44,180,1]],[297,[70,1,75,6,132,44]],[298,[70,1,75,6,132,43,179,1]],[299,[70,1,75,6,132,43,179,1]],[300,[70,1,75,6,132,42,178,2]],[301,[70,1,75,6,132,42,178,1]],[302,[70,1,75,6,132,41,178,1]],[303,[71,1,76,5,130,43,177,2]],[304,[71,1,76,5,124,3,129,44,177,2]],[305,[71,1,76,5,121,51,176,2]],[306,[71,1,76,5,121,51,176,2]],[307,[71,1,76,5,121,51,176,1]],[308,[71,2,76,5,121,50,176,1]],[309,[72,1,76,5,121,50,175,1]],[310,[72,1,77,4,121,50,175,1]],[311,[72,1,77,4,121,49,174,1]],[312,[72,1,77,4,121,49,174,1]],[313,[72,1,77,4,121,48,174,1]],[314,[77,4,121,48,173,1]],[315,[73,1,77,4,121,47,173,1]],[316,[73,1,78,3,121,47,172,1]],[317,[73,1,78,3,121,47,172,1]],[318,[73,1,78,3,121,46,171,2]],[319,[73,1,78,3,121,46,171,1]],[320,[73,2,78,21,100,8,111,7,119,48,171,1]],[321,[73,2,78,21,100,8,111,7,119,47,170,2]],[322,[74,1,78,20,100,8,111,7,119,47,170,1]],[323,[74,1,79,19,100,8,111,7,119,47,170,1]],[324,[74,1,79,19,100,8,111,7,119,46,169,1]],[325,[74,1,79,19,101,7,111,7,119,46,169,1]],[326,[74,1,79,19,100,8,111,7,119,45,168,2]],[327,[74,2,79,19,101,7,111,7,119,45,168,1]],[328,[74,2,79,19,101,7,111,7,119,45,168,1]],[329,[74,2,79,19,101,7,111,7,119,44,167,2]],[330,[75,1,80,18,101,7,111,7,119,44,167,1]],[331,[75,1,80,18,101,7,111,7,119,44,167,1]],[332,[75,1,80,18,101,7,111,7,119,44,167,1]],[333,[75,1,80,18,101,7,111,7,119,44,166,2]],[334,[75,1,80,18,100,8,111,7,119,44,166,2]],[335,[74,1,80,18,101,7,111,7,119,44,166,2]],[336,[74,1,79,19,101,7,111,7,119,44,167,1]],[337,[74,1,79,19,101,7,111,7,119,44,167,1]],[338,[74,1,79,19,101,7,111,7,119,44,167,1]],[339,[73,2,78,20,101,7,111,7,119,44,167,1]],[340,[73,1,78,20,101,7,111,7,119,45,167,2]],[341,[72,2,78,20,101,7,111,7,119,45,168,1]],[342,[71,2,77,21,101,7,111,7,119,45,168,1]],[343,[71,2,77,21,101,7,111,7,119,45,169,1]],[344,[70,2,76,22,101,7,111,7,119,46,169,1]],[345,[70,1,76,22,101,7,111,7,119,46,169,1]],[346,[69,2,75,23,101,7,111,7,120,8,129,37,169,2]],[347,[69,2,75,22,102,5,112,3,116,1,132,34,170,1]],[348,[68,2,74,15,138,28,170,2]],[349,[68,1,73,16,138,29,171,1]],[350,[67,2,73,15,139,28,171,1]],[351,[67,1,72,17,139,29,171,2]],[352,[67,1,72,17,139,29,172,1]],[353,[66,1,71,18,139,29,173,1]],[354,[66,1,71,18,139,30,173,1]],[355,[65,1,70,19,139,30,173,1]],[356,[64,2,70,18,139,31,174,1]],[357,[64,1,69,19,139,31,174,1]],[358,[63,1,69,19,139,32,175,1]],[359,[63,1,68,20,139,32,175,1]],[360,[62,2,67,21,140,31,175,2]],[361,[62,1,67,21,139,33,176,1]],[362,[61,1,66,22,139,33,176,1]],[363,[60,2,66,21,139,33,177,1]],[364,[60,1,65,22,139,34,177,1]],[365,[59,2,65,22,138,35,177,1]],[366,[59,1,64,23,138,36,178,1]],[367,[58,2,64,25,138,36,178,1]],[368,[58,1,63,26,138,36,178,2]],[369,[57,1,63,27,136,39,179,1]],[370,[56,2,62,34,102,4,111,7,121,7,130,45,179,1]],[371,[56,1,62,34,100,7,110,8,119,57,180,1]],[372,[55,2,61,36,100,7,110,8,119,57,180,1]],[373,[55,1,60,37,100,8,110,8,119,57,180,2]],[374,[54,2,60,37,100,8,110,8,119,9,129,48,181,1]],[375,[54,1,59,38,100,8,110,8,119,9,129,48,181,2]],[376,[53,1,59,38,100,8,110,8,119,9,129,26,159,18,182,1]],[377,[53,1,58,39,100,7,110,8,119,9,129,24,162,16,182,1]],[378,[52,2,58,39,100,7,110,8,119,9,129,23,163,15,182,2]],[379,[52,1,57,40,100,7,110,8,119,9,129,22,164,15,183,1]],[380,[51,2,57,40,100,7,110,8,119,9,129,22,164,15,183,2]],[381,[51,1,56,41,99,8,110,8,119,9,129,22,165,14,183,2]],[382,[50,1,56,41,99,8,110,8,119,9,129,21,165,15,184,1]],[383,[50,1,55,42,99,8,110,8,119,9,129,21,165,15,184,2]],[384,[49,1,55,42,99,8,110,8,119,9,129,21,165,15,185,1]],[385,[49,1,54,43,98,9,110,8,119,9,129,21,165,16,185,1]],[386,[48,1,54,43,98,9,110,8,119,9,129,22,165,16,185,1]],[387,[47,2,53,43,98,9,110,8,119,9,129,22,164,18,186,1]],[388,[47,1,52,44,99,8,110,8,120,8,129,23,164,18]],[389,[46,2,52,43,102,4,121,4,131,2,134,19,163,19]],[390,[46,1,51,39,139,16,161,22,187,1]],[391,[45,2,51,38,139,17,160,22,188,1]],[392,[44,2,50,38,140,44,188,1]],[393,[44,1,50,38,139,44,188,1]],[394,[43,2,49,39,139,45,189,1]],[395,[43,1,49,39,140,44,189,1]],[396,[42,2,48,40,139,45,190,1]],[397,[42,1,48,40,139,46,190,1]],[398,[41,2,47,41,139,22,166,20,190,1]],[399,[41,1,47,40,139,20,169,17,191,1]],[400,[40,2,46,41,139,19,170,17,191,1]],[401,[40,1,46,41,139,18,170,17]],[402,[39,2,46,41,139,18,171,16,192,1]],[403,[38,2,44,43,139,18,171,17,192,1]],[404,[38,2,44,43,139,18,172,16,193,1]],[405,[37,2,43,45,139,18,172,16,193,1]],[406,[37,2,43,45,139,18,172,17,194,1]],[407,[36,2,42,45,140,17,172,17,194,1]],[408,[36,2,42,46,140,18,172,18,194,1]],[409,[35,2,41,47,140,18,172,18]],[410,[35,1,41,48,99,1,139,20,171,19]],[411,[35,1,40,49,99,7,124,4,130,1,139,21,171,20,195,1]],[412,[34,2,40,51,99,7,110,8,121,7,129,34,171,19,196,1]],[413,[33,2,39,56,99,7,109,7,117,1,120,8,129,35,169,22,196,1]],[414,[33,1,39,56,99,8,108,6,116,1,120,8,129,63,196,1]],[415,[32,2,38,57,98,9,108,6,115,3,119,9,129,63,197,1]],[416,[32,1,38,57,99,7,109,4,120,8,129,63,197,1]],[417,[31,2,37,55,105,1,109,1,134,59]],[418,[31,1,36,55,135,33,173,20,198,1]],[419,[30,2,36,54,136,30,175,19,198,1]],[420,[30,1,35,55,136,29,176,18,199,1]],[421,[29,1,35,55,136,28,177,17,199,1]],[422,[28,2,34,56,137,27,178,17,199,1]],[423,[28,2,34,56,136,27,178,17]],[424,[27,2,33,56,136,27,178,18,200,1]],[425,[27,1,33,56,137,26,178,18]],[426,[26,2,32,57,137,26,178,18]],[427,[26,1,32,57,137,26,178,18]],[428,[25,2,31,58,137,27,178,18]],[429,[25,2,30,59,137,27,178,18]],[430,[24,2,30,59,137,28,178,17]],[431,[24,1,29,60,137,29,178,16]],[432,[23,2,29,60,137,30,177,15]],[433,[23,1,28,61,137,32,177,12]],[434,[22,2,28,61,137,34,177,9,196,1]],[435,[22,1,27,62,137,47]],[436,[21,2,27,62,137,45]],[437,[21,1,26,63,137,41]],[438,[20,1,26,63,137,39]],[439,[20,1,25,64,137,35]],[440,[19,2,25,64,137,33]],[441,[19,1,25,64,137,30]],[442,[18,1,24,65,137,28]],[443,[18,1,23,66,136,25]],[444,[17,1,23,67,136,23]],[445,[17,1,22,69,136,19]],[446,[16,1,22,69,136,16]],[447,[15,2,21,71,120,2,135,15,161,3]],[448,[15,2,21,78,104,5,110,2,116,31,158,4]],[449,[14,2,20,123]],[450,[14,1,19,122]],[451,[13,2,19,119]],[452,[13,2,18,117]],[453,[12,2,18,113]],[454,[12,1,18,110]],[455,[11,2,18,106]],[456,[11,1,17,105]],[457,[10,2,16,102]],[458,[10,1,16,100]],[459,[9,1,15,97]],[460,[9,1,14,95]],[461,[8,2,14,91]],[462,[8,1,13,89]],[463,[7,1,13,85]],[464,[7,1,12,83]],[465,[6,2,12,79]],[466,[6,1,11,77]],[467,[5,2,11,73]],[468,[5,1,10,71]],[469,[4,2,10,66,92,2]],[470,[4,1,9,64,87,2]],[471,[3,1,9,60,84,2]],[472,[3,1,8,58,80,2]],[473,[2,1,8,53,76,3]],[474,[2,1,8,49,72,3]],[475,[1,2,8,45,69,1,71,1]],[476,[1,1,7,43,64,3]],[477,[1,1,6,39,61,3]],[478,[0,1,6,35,57,2]],[479,[0,1,5,32,53,3]],[480,[5,29,49,3]],[481,[4,25,46,1,48,1]],[482,[4,22,41,3]],[483,[5,16,39,1]],[484,[5,12,33,4]],[485,[6,7,29,4]],[486,[25,3]],[487,[21,4]],[488,[18,2]],[489,[4,2,14,2]],[490,[5,2,8,1,10,1,12,1]]]},"18:1":{"w":200,"h":473,"rows":[[217,[77,4]],[218,[77,2,80,1]],[219,[77,1,80,1]],[220,[77,1,80,1]],[221,[77,1,80,1]],[222,[77,1,80,1]],[223,[11,7,77,1,80,1]],[224,[10,3,17,4,77,1,80,1]],[225,[9,2,19,3,77,1,80,1]],[226,[8,2,21,3,77,1,80,1]],[227,[8,1,14,1,22,3,77,1,79,2]],[228,[7,1,13,4,23,3,77,1,79,2]],[229,[7,1,12,7,24,3,77,1,80,1]],[230,[7,1,11,9,26,2,77,1,80,1]],[231,[7,1,11,10,26,3,77,1,80,1]],[232,[7,1,11,11,28,2,77,1,79,2]],[233,[7,1,12,12,29,3,77,1,79,2]],[234,[7,1,12,13,31,2,77,1,79,2]],[235,[7,2,12,15,32,2,77,1,79,2]],[236,[7,2,12,16,33,3,77,1,79,2]],[237,[8,1,13,16,34,3,76,2,79,2]],[238,[8,2,13,17,35,4,76,2,79,2]],[239,[8,2,13,19,37,3,76,2,79,2]],[240,[9,1,11,1,14,19,38,3,76,2,79,2]],[241,[9,1,14,20,39,3,76,2,79,2]],[242,[9,2,14,22,41,2,76,2,79,2]],[243,[9,2,15,22,42,2,76,2,79,2]],[244,[10,1,15,23,44,1,76,2,79,2]],[245,[10,2,16,23,45,2,76,2,79,2]],[246,[10,2,16,24,46,2,76,2,79,2]],[247,[11,2,16,26,48,1,76,5]],[248,[11,2,17,26,49,2,76,5]],[249,[11,2,17,28,50,2,76,5]],[250,[12,1,17,29,51,2,76,5]],[251,[12,2,18,29,53,2,76,5]],[252,[13,1,18,30,54,2,75,6]],[253,[13,2,19,31,55,2,75,6]],[254,[13,2,19,32,56,2,75,6]],[255,[14,1,19,33,57,2,75,6,120,1]],[256,[14,1,20,33,58,3,74,6,120,1]],[257,[15,1,20,34,59,3,73,6]],[258,[15,1,20,35,61,3,72,5]],[259,[15,2,21,36,62,4,70,6,80,1,129,1]],[260,[16,1,21,37,64,9,80,1,120,1,129,3]],[261,[16,1,21,39,67,4,79,2,120,3,131,2]],[262,[16,2,22,39,77,4,120,5,133,2]],[263,[17,1,22,40,76,5,120,7,134,2]],[264,[17,2,22,42,73,8,120,9,136,1]],[265,[17,2,23,58,120,11,136,2]],[266,[18,1,23,58,120,12,137,1]],[267,[18,1,24,57,120,13,137,2]],[268,[18,2,24,57,120,14,138,1]],[269,[19,1,24,57,120,14,138,1]],[270,[19,2,24,57,120,15,138,1]],[271,[20,1,25,56,120,15,138,1]],[272,[20,1,25,56,120,15]],[273,[26,55,120,15]],[274,[21,1,26,55,120,15,138,1]],[275,[21,1,26,55,120,15,138,1]],[276,[26,55,120,14,136,1,138,1]],[277,[22,1,27,54,120,14,138,1]],[278,[22,1,27,54,120,14,138,1]],[279,[23,1,28,53,120,14,138,1]],[280,[23,1,28,53,120,14,137,2]],[281,[23,2,28,53,120,13,137,1]],[282,[24,1,29,52,120,13,137,1]],[283,[24,1,29,52,120,13,137,1]],[284,[24,2,29,52,120,13,137,1]],[285,[25,1,30,51,120,12,137,1]],[286,[25,1,30,51,120,12,136,2]],[287,[25,2,30,51,120,12,136,1]],[288,[26,1,31,50,120,12,136,1]],[289,[26,2,31,50,120,12,136,1]],[290,[26,2,32,49,120,11,136,1]],[291,[27,1,32,49,120,11,135,1]],[292,[27,2,32,49,120,11,135,1]],[293,[28,1,33,48,120,11,134,2]],[294,[28,1,33,48,120,10,134,2]],[295,[28,1,33,48,120,10,134,2]],[296,[28,2,34,47,120,10,134,1]],[297,[29,1,34,47,120,10,134,1]],[298,[29,2,35,46,120,10,133,2]],[299,[30,1,35,46,120,9,133,2]],[300,[30,1,35,46,120,9,133,1]],[301,[30,2,36,45,120,9,133,1]],[302,[31,1,36,45,120,9,133,1]],[303,[31,1,36,45,120,8,133,1]],[304,[32,1,37,44,120,8,132,1]],[305,[32,1,37,44,120,8,132,1]],[306,[32,2,37,44,120,8,132,1]],[307,[33,1,38,43,120,8,132,1]],[308,[33,1,38,89,131,1]],[309,[33,2,38,89,131,1]],[310,[34,1,39,88,131,1]],[311,[34,1,39,88,131,1]],[312,[34,2,40,87,130,2]],[313,[35,1,40,86,130,2]],[314,[35,1,40,86,130,1]],[315,[36,1,41,85,130,1]],[316,[36,1,41,85,130,1]],[317,[36,2,41,85,130,1]],[318,[37,1,42,84,130,1]],[319,[37,1,42,84,130,1]],[320,[37,2,42,84,130,1]],[321,[38,1,43,83,130,1]],[322,[38,1,43,83,130,2]],[323,[38,1,43,84,131,1]],[324,[38,2,43,84,131,1]],[325,[38,2,43,84,131,2]],[326,[38,2,44,84,131,2]],[327,[38,2,44,84,131,3]],[328,[38,1,43,85,132,2]],[329,[38,1,43,86,133,2]],[330,[38,1,43,86,133,2]],[331,[37,2,43,87,134,2]],[332,[37,1,42,88,134,2]],[333,[36,2,42,89,135,2]],[334,[36,2,42,89,135,2]],[335,[35,2,41,91,135,3]],[336,[35,2,41,91,136,2]],[337,[34,2,40,93,137,1]],[338,[34,2,40,93,138,1]],[339,[33,3,39,95,138,1]],[340,[33,2,39,95,139,1]],[341,[32,2,38,97,139,1]],[342,[32,2,38,97,140,1]],[343,[32,1,37,99,140,1]],[344,[31,2,37,99,141,1]],[345,[31,1,36,101,141,1]],[346,[30,2,36,101,141,2]],[347,[30,1,35,103]],[348,[29,2,35,103,143,1]],[349,[29,1,34,105,143,1]],[350,[28,2,34,105,143,2]],[351,[28,1,33,107,142,1,144,2]],[352,[27,2,33,107,145,1]],[353,[27,2,32,14,60,81,145,2]],[354,[26,2,32,12,61,80,146,1]],[355,[26,2,31,10,62,80,146,2]],[356,[25,2,31,10,62,80,147,1]],[357,[25,2,30,10,63,80,148,1]],[358,[24,2,30,10,63,81,148,1]],[359,[24,2,29,10,64,80,146,1,148,2]],[360,[23,2,29,9,64,81,149,1]],[361,[23,2,28,10,64,81,149,2]],[362,[22,2,28,10,64,82,149,2]],[363,[22,2,28,8,65,81,150,2]],[364,[21,2,27,10,65,81,150,2]],[365,[21,2,26,9,65,82,151,2]],[366,[20,2,26,10,64,83,151,2]],[367,[20,2,25,9,64,84,152,2]],[368,[19,2,25,10,64,84,153,1]],[369,[19,2,24,10,64,85,153,2]],[370,[18,2,24,9,64,85,153,2]],[371,[18,2,23,9,64,86,154,2]],[372,[17,2,23,10,65,85,155,1]],[373,[17,2,22,9,65,86,155,1]],[374,[16,2,22,10,65,86,156,1]],[375,[16,2,21,10,65,87,156,2]],[376,[15,2,21,10,65,87,156,2]],[377,[15,1,20,11,65,88,157,2]],[378,[14,2,20,10,65,89,158,1]],[379,[14,2,19,11,65,89,158,2]],[380,[13,2,19,9,65,89,159,1]],[381,[13,1,18,10,65,90,159,2]],[382,[12,2,18,10,65,91,159,2]],[383,[12,1,18,8,65,91,160,2]],[384,[11,2,17,10,65,92,160,3]],[385,[11,2,17,9,65,92,161,2]],[386,[10,2,16,10,65,93,162,2]],[387,[10,2,16,9,65,93,163,1]],[388,[10,1,15,10,65,94,163,2]],[389,[9,2,15,10,65,94,163,2]],[390,[9,1,14,10,65,95,165,1]],[391,[8,2,14,10,65,95,165,1]],[392,[8,1,13,10,65,96,166,1]],[393,[7,2,13,10,65,96,165,2]],[394,[7,1,12,10,65,97,166,2]],[395,[6,2,12,10,65,97,167,1]],[396,[6,1,11,10,65,98,167,2]],[397,[5,2,11,10,65,98,168,1]],[398,[5,1,10,9,65,99,168,2]],[399,[4,2,10,10,65,99,169,1]],[400,[4,2,9,9,65,100,169,2]],[401,[3,2,9,10,65,100,170,1]],[402,[3,1,8,10,65,101,170,1]],[403,[2,2,8,10,65,101,170,2]],[404,[2,2,7,11,65,102,171,1]],[405,[1,2,7,11,65,102,172,1]],[406,[1,1,6,12,65,103,172,1]],[407,[1,1,6,11,65,103,173,1]],[408,[0,2,6,11,65,104,173,1]],[409,[0,1,5,13,65,104,173,2]],[410,[0,1,5,13,65,105,174,1]],[411,[0,1,5,14,65,105,175,1]],[412,[0,1,4,16,65,106,175,1]],[413,[4,18,65,106,176,1]],[414,[5,17,24,1,65,107,176,1]],[415,[0,1,5,19,27,1,65,107,177,1]],[416,[0,1,6,21,29,2,65,108,177,2]],[417,[1,1,7,24,32,2,63,1,65,108,178,1]],[418,[1,2,9,25,35,2,63,111,178,2]],[419,[2,1,12,25,39,1,63,111,179,1]],[420,[3,2,14,27,42,1,62,113,179,2]],[421,[5,2,17,26,45,1,61,1,64,111,180,1]],[422,[7,2,19,28,48,1,61,1,64,112]],[423,[9,3,22,27,52,4,59,2,63,113,181,1]],[424,[12,3,25,28,56,2,61,116,181,2]],[425,[14,3,28,29,58,119,182,1]],[426,[17,3,30,148,180,1,182,2]],[427,[19,4,33,145,183,1]],[428,[22,3,35,144,183,2]],[429,[24,4,38,141,184,1]],[430,[27,4,41,139,184,2]],[431,[30,2,44,136,185,1]],[432,[33,3,46,135,185,2]],[433,[36,2,50,131,186,1]],[434,[39,2,52,130,184,1,186,2]],[435,[41,2,55,127,187,1]],[436,[43,3,58,125]],[437,[46,3,54,1,61,122,188,1]],[438,[48,4,64,120]],[439,[51,4,67,117,189,1]],[440,[54,3,70,115,189,2]],[441,[57,2,73,112,190,1]],[442,[60,4,76,110,188,1,190,2]],[443,[63,3,80,106,190,2]],[444,[66,4,83,104,191,2]],[445,[70,2,87,100,192,1]],[446,[73,4,90,98,191,2]],[447,[76,4,94,94,192,2]],[448,[80,3,89,1,97,92,193,1]],[449,[83,5,101,88,194,1]],[450,[87,3,106,84,195,1]],[451,[91,2,102,1,111,79,195,1]],[452,[115,76,195,1]],[453,[101,1,119,72,196,1]],[454,[102,6,124,68,196,2]],[455,[106,6,118,1,129,63,197,1]],[456,[111,5,132,61,197,2]],[457,[116,5,137,56,198,1]],[458,[120,5,132,1,140,54]],[459,[124,5,146,48]],[460,[129,5,150,45]],[461,[133,5,155,40,199,1]],[462,[137,7,159,36]],[463,[142,7,154,2,164,31,199,1]],[464,[147,6,168,27,199,1]],[465,[153,3,173,21,199,1]],[466,[157,3,178,15]],[467,[161,3,185,7,195,1,198,1]],[468,[166,4,198,1]],[469,[170,4,197,1]],[470,[175,1,178,2,196,1]],[471,[180,3,184,1,194,1]],[472,[186,8]]]}};Object.assign(CustomCoverage,{"27:0":{"rows":[[337,[114,26,141,10,152,7,160,4,165,2,168,15,184,7]],[338,[108,22,134,6,141,10,152,7,160,1,162,2,165,2,168,15,184,8]],[339,[104,18,129,11,141,10,152,7,163,1,165,2,168,15,184,8]],[340,[101,14,122,18,141,10,152,7,164,3,168,15,184,7]],[341,[98,14,116,24,141,10,152,7,163,4,168,15,184,7,192,1]],[342,[95,12,110,30,141,10,152,7,160,1,162,2,165,26,192,1]],[343,[93,10,106,34,141,10,152,7,160,4,165,26,192,1]],[344,[91,10,104,36,141,10,152,7,160,23,184,9]],[345,[88,11,100,40,141,2,144,7,152,7,160,4,165,2,168,25]],[346,[86,73,160,33]],[347,[84,55,141,40,182,12]],[348,[82,112]],[349,[81,8,90,50,141,10,152,15,168,6,175,19]],[350,[79,8,88,52,141,53]],[351,[78,62,141,53]],[352,[76,64,141,18,160,34]],[353,[75,65,141,10,152,7,161,33]],[354,[73,67,141,10,152,7,160,35]],[355,[72,68,141,18,160,35]],[356,[71,6,78,62,141,10,152,7,160,7,168,27]],[357,[70,70,141,10,152,7,160,23,184,11]],[358,[69,71,141,10,152,7,160,35]],[359,[68,72,141,7,149,2,153,2,157,2,160,3,165,2,168,28]],[360,[67,114,185,11]],[361,[66,130]],[362,[64,84,149,2,157,2,161,2,165,2,169,1,172,2,176,21]],[363,[63,88,152,7,160,37]],[364,[62,89,152,7,160,4,165,32]],[365,[62,97,160,4,165,19,185,13]],[366,[61,98,160,1,162,2,165,19,185,13]],[367,[60,99,163,1,165,19,185,13]],[368,[59,100,163,1,165,19,185,14]],[369,[59,4,64,87,152,7,160,4,165,19,185,14]],[370,[58,5,64,87,152,7,161,3,165,10,176,7,185,15]],[371,[57,91,149,2,152,3,157,2,165,2,169,1,173,1,176,4,181,2,184,16]],[372,[57,4,62,139]],[373,[56,5,62,140]],[374,[56,4,61,87,149,2,152,3,157,2,160,7,168,2,172,2,176,4,181,11,193,9]],[375,[55,4,60,83,144,7,152,7,160,32,193,10]],[376,[55,3,60,144]],[377,[54,4,59,125,185,20]],[378,[54,3,59,84,144,15,160,24,185,22,246,9]],[379,[53,4,58,85,144,7,152,7,160,24,185,23,240,20]],[380,[53,3,58,85,144,7,152,7,160,24,185,25,236,26]],[381,[52,4,57,94,152,7,160,23,185,10,196,16,233,31]],[382,[52,4,57,94,152,7,160,24,185,10,197,19,229,36]],[383,[51,4,56,84,141,2,144,4,149,2,152,4,157,2,160,4,165,31,197,55,257,10]],[384,[51,4,56,141,198,53,260,8]],[385,[51,146,199,61,261,8]],[386,[50,4,55,88,144,3,149,2,154,1,157,2,160,3,165,6,172,2,176,1,179,19,200,70]],[387,[50,101,152,7,160,3,164,20,185,14,201,70]],[388,[50,101,152,7,160,4,165,19,185,15,202,36,239,32]],[389,[50,3,54,97,152,7,163,21,185,16,202,34,237,35]],[390,[49,102,152,7,164,20,185,17,204,63,269,4]],[391,[49,110,163,1,165,19,186,18,205,26,233,35,270,3]],[392,[49,110,162,2,165,19,185,42,230,39,270,4]],[393,[49,102,153,6,161,2,165,2,169,15,185,22,211,13,228,41,271,4]],[394,[49,135,186,23,226,44,271,4]],[395,[48,223,272,3]],[396,[48,223,272,4]],[397,[48,103,152,7,160,3,165,2,169,2,172,99,273,3]],[398,[48,111,160,112,273,3]],[399,[48,111,160,25,186,86,273,3]],[400,[48,119,168,104,273,4]],[401,[48,111,160,25,186,87,274,3]],[402,[48,3,52,99,152,7,160,15,176,7,184,1,186,87,274,3]],[403,[48,3,52,99,152,4,157,2,160,7,168,7,176,7,184,1,186,87,274,3]],[404,[48,3,52,133,186,87,274,3]],[405,[48,3,52,133,186,87,274,3]],[406,[48,3,52,221,274,3]],[407,[48,3,52,87,140,3,144,7,152,7,160,3,164,3,168,3,172,3,176,1,178,7,186,87,274,3]],[408,[48,3,52,85,138,1,140,44,186,87,274,3]],[409,[48,3,52,85,138,1,140,27,168,17,186,87,274,3]],[410,[48,4,53,84,138,1,140,19,160,25,186,87,274,3]],[411,[48,4,53,84,138,1,140,45,186,86,274,3]],[412,[48,4,53,84,138,1,140,19,160,4,165,14,180,5,186,86,273,4]],[413,[48,4,53,84,138,1,140,3,144,4,149,10,160,4,165,20,186,86,273,4]],[414,[49,3,53,84,138,46,186,86,273,3]],[415,[49,83,135,49,185,3,193,79,273,3]],[416,[49,4,54,77,134,9,144,34,182,2,185,4,194,77,273,3]],[417,[49,4,54,75,130,1,133,57,195,76,272,4]],[418,[49,4,54,73,130,30,165,2,170,21,196,75,272,4]],[419,[49,4,54,70,130,21,152,11,165,3,170,1,173,2,176,15,198,73,272,3]],[420,[50,4,55,68,130,1,132,14,148,14,165,3,170,2,173,2,178,14,194,1,199,71,271,4]],[421,[50,4,55,67,130,16,148,4,153,10,165,3,169,6,180,13,194,1,201,69,271,4]],[422,[50,4,55,66,129,17,148,4,153,11,165,3,169,6,181,14,201,69,271,3]],[423,[50,5,56,65,128,24,153,11,165,3,169,6,176,20,202,67,270,4]],[424,[51,4,56,62,126,26,153,15,169,6,176,22,203,66,270,4]],[425,[51,4,56,61,125,27,153,22,176,8,185,16,204,69]],[426,[51,5,57,59,123,1,125,10,137,4,142,9,153,22,176,4,181,3,185,16,205,63,269,4]],[427,[52,4,57,59,124,10,137,4,142,1,144,1,146,5,153,22,176,4,182,2,185,17,206,62,269,4]],[428,[52,4,57,58,123,10,137,4,142,5,148,3,153,1,155,20,176,2,179,1,181,3,185,17,207,60,268,4]],[429,[52,5,58,57,121,15,137,14,153,3,157,23,181,3,185,18,207,60,268,4]],[430,[53,4,58,56,120,16,137,2,140,2,143,5,149,2,153,3,157,22,182,2,185,19,208,64]],[431,[53,4,58,56,119,23,143,1,145,3,149,2,153,3,157,16,174,6,181,23,209,57,267,4]],[432,[53,5,59,55,119,20,140,2,143,5,149,2,152,4,157,48,209,57,267,4]],[433,[54,4,59,55,118,21,140,2,143,5,149,2,152,4,157,49,210,55,266,5]],[434,[54,5,60,53,117,22,140,2,143,5,149,2,152,4,157,49,210,55,266,4]],[435,[54,5,60,52,116,23,140,2,143,5,149,2,152,4,157,16,174,33,211,53,265,5]],[436,[55,4,60,52,116,26,143,5,149,2,152,4,157,50,211,53,265,5]],[437,[55,5,61,50,115,36,152,4,157,51,212,51,264,5]],[438,[55,5,61,50,115,33,149,2,152,4,157,52,212,51,264,5]],[439,[56,5,62,49,114,37,152,57,212,50,263,5]],[440,[56,5,62,48,114,37,152,58,212,50,263,5]],[441,[56,6,63,47,114,37,152,58,213,48,262,6]],[442,[57,5,63,46,113,9,124,27,152,59,214,47,262,5]],[443,[57,5,63,46,113,98,214,46,262,5]],[444,[57,6,64,45,112,9,122,2,125,86,214,46,261,5]],[445,[57,6,64,45,112,9,122,2,125,86,214,46,261,5]],[446,[58,6,65,44,111,9,121,91,214,45,260,6]],[447,[58,6,65,43,111,9,121,92,214,45,260,6]],[448,[58,50,111,154]],[449,[59,6,66,42,111,29,141,72,215,43,259,6]],[450,[59,6,66,42,110,30,141,72,216,42,259,6]],[451,[59,49,110,30,141,72,216,49]],[452,[59,7,67,41,110,30,141,72,216,41,258,7]],[453,[59,48,110,30,141,72,216,49]],[454,[60,47,110,30,141,72,216,48]],[455,[60,47,110,30,141,72,216,40,257,7]],[456,[60,47,110,30,141,73,216,40,257,7]],[457,[60,47,110,30,141,72,217,47]],[458,[60,47,110,30,141,72,217,47]],[459,[60,47,110,30,141,72,217,38,256,8]],[460,[60,47,110,30,141,73,217,38,256,8]],[461,[60,47,110,30,141,73,217,38,256,8]],[462,[60,47,110,30,141,73,217,47]],[463,[60,47,110,30,141,72,217,47]],[464,[60,47,110,30,141,72,216,48]],[465,[60,47,111,29,141,72,216,48]],[466,[60,48,111,29,141,72,216,38,256,8]],[467,[60,48,111,29,141,72,216,38,256,8]],[468,[60,48,111,29,141,72,216,38,256,8]],[469,[60,48,111,29,141,72,216,38,256,8]],[470,[59,49,111,29,141,72,216,38,256,9]],[471,[59,49,111,29,141,71,215,40,256,9]],[472,[59,50,111,29,141,70,215,50]],[473,[59,50,112,28,141,70,215,40,256,9]],[474,[58,51,112,28,141,69,215,40,256,10]],[475,[58,51,112,98,215,40,256,10]],[476,[57,53,113,97,215,51]],[477,[57,53,113,27,141,69,214,42,257,10]],[478,[57,53,113,27,141,68,214,42,257,10]],[479,[56,54,114,26,141,68,214,42,257,11]],[480,[56,54,114,95,213,43,258,10]],[481,[55,56,116,93,213,44,258,11]],[482,[54,58,115,94,212,45,258,11]],[483,[54,58,117,23,141,67,211,46,259,11]],[484,[53,59,117,90,210,48,259,11]],[485,[53,60,118,88,210,48,259,12]],[486,[52,62,119,86,209,50,260,12]],[487,[51,64,119,85,209,50,260,12]],[488,[51,10,62,53,119,84,208,52,261,12]],[489,[50,10,61,55,120,83,207,53,261,13]],[490,[49,11,61,56,120,83,207,54,262,13]],[491,[48,11,60,57,121,80,206,55,262,14]],[492,[48,11,60,58,122,16,139,61,205,57,263,14]],[493,[47,11,59,60,122,16,139,61,205,72]],[494,[46,11,58,62,123,15,139,60,204,59,264,14]],[495,[45,76,125,13,139,47,187,11,203,61,265,14]],[496,[44,78,125,13,139,58,202,77]],[497,[44,11,56,67,127,22,150,46,201,64,266,14]],[498,[43,81,128,14,143,52,200,81]],[499,[42,82,130,14,145,49,199,83]],[500,[41,12,54,71,132,61,199,68,268,14]],[501,[41,86,133,39,173,18,198,70,269,14]],[502,[40,88,134,34,171,19,197,87]],[503,[39,12,52,77,135,4,140,24,165,23,195,74,270,15]],[504,[38,12,51,80,136,3,140,47,194,76,271,14]],[505,[38,11,50,82,138,1,140,46,193,93]],[506,[37,97,138,1,140,44,191,96]],[507,[36,12,49,86,140,40,190,98]],[508,[35,12,48,91,144,5,150,24,175,2,188,101]],[509,[35,104,146,3,150,22,185,104]],[510,[34,109,150,19,185,105]],[511,[33,12,46,99,154,8,164,4,182,109]],[512,[32,12,45,103,150,1,158,3,178,98,277,15]],[513,[32,11,44,104,150,3,159,1,175,102,278,14]],[514,[31,12,44,104,150,6,158,2,167,126]],[515,[30,12,43,122,166,128]],[516,[29,12,42,115,158,121,280,14]],[517,[29,11,41,239,281,14]],[518,[28,11,40,244,285,11]],[519,[27,12,40,256]],[520,[27,11,39,258]],[521,[26,11,38,259]],[522,[25,12,38,260]],[523,[25,11,37,262]],[524,[24,11,36,263]],[525,[24,10,35,265]],[526,[23,277]],[527,[22,11,34,267]],[528,[22,266,289,13]],[529,[21,281]],[530,[21,10,32,257,290,13]],[531,[20,283]],[532,[19,272,292,12]],[533,[19,10,30,261,292,12]],[534,[18,274,293,12]],[535,[18,10,29,263,294,12]],[536,[17,10,28,265,294,12]],[537,[17,277,295,12]],[538,[16,10,27,267,296,11]],[539,[15,10,26,269,296,12]],[540,[15,281,297,11]],[541,[15,281,297,11]],[542,[14,283,298,11]],[543,[14,283,299,10]],[544,[13,285,299,11]],[545,[13,286,300,10]],[546,[12,287,300,11]],[547,[12,288,301,10]],[548,[11,289,302,10]],[549,[11,290,302,10]],[550,[11,290,302,10]],[551,[10,292,303,10]],[552,[10,292,303,10]],[553,[9,294,304,9]],[554,[9,294,304,10]],[555,[9,295,305,9]],[556,[8,296,306,8]],[557,[8,297,306,9]],[558,[8,297,307,8]],[559,[7,298,307,8]],[560,[7,90,98,208,307,9]],[561,[7,89,98,2,105,2,108,2,113,2,117,11,133,1,137,1,139,1,142,4,149,2,152,7,161,1,165,3,169,3,174,2,184,2,187,1,195,4,207,99,308,8]],[562,[6,90,97,41,139,9,149,40,190,4,195,111,308,8]],[563,[6,9,16,80,97,89,188,119,309,7]],[564,[6,9,16,80,97,27,125,34,160,23,184,2,188,119,309,8]],[565,[5,154,160,27,194,5,200,108,309,8]],[566,[5,9,15,153,175,1,185,1,194,114,310,7]],[567,[5,154,185,1,194,114,310,8]],[568,[5,115,121,3,125,1,127,15,157,2,184,3,189,120,310,8]],[569,[4,120,125,6,138,2,157,2,162,6,170,17,190,1,193,116,310,8]],[570,[4,120,127,1,129,2,138,2,145,32,178,9,188,3,194,3,198,111,311,7]],[571,[4,119,125,13,139,8,148,2,157,2,160,8,169,8,178,9,188,4,193,1,197,113,311,8]],[572,[3,120,125,3,129,2,137,1,139,1,141,5,148,2,152,3,156,3,160,31,193,117,312,7]],[573,[3,107,113,1,115,8,124,4,137,1,139,11,151,4,157,2,160,22,183,4,188,122,312,7]],[574,[3,104,108,3,116,7,124,4,129,5,135,11,147,3,151,26,179,3,184,3,190,121,312,7]],[575,[3,101,105,2,108,20,129,7,137,45,184,2,188,1,191,120,312,8]],[576,[3,95,99,5,106,2,110,2,113,5,119,4,124,1,127,2,134,89,225,86,313,7]],[577,[2,102,107,1,110,2,114,1,116,10,127,5,135,2,140,7,149,25,177,7,188,32,221,5,227,85,313,7]],[578,[2,90,93,7,101,2,104,2,108,2,112,1,116,1,118,6,126,4,131,1,134,2,141,5,151,5,160,5,169,4,179,3,189,1,191,19,211,5,217,7,227,85,313,7]],[579,[2,99,102,1,105,1,108,2,112,4,117,2,120,3,127,2,131,1,134,1,136,1,142,3,148,3,152,1,154,1,156,3,161,3,169,3,179,3,189,24,214,2,217,9,227,85,313,8]],[580,[2,89,92,17,110,5,117,3,121,2,126,2,130,1,133,2,136,9,146,7,154,6,161,3,165,13,179,3,183,5,189,2,193,14,208,18,227,85,314,7]],[581,[2,119,122,1,126,2,129,3,134,9,144,9,154,159,314,7]],[582,[1,122,127,3,134,9,144,9,154,42,197,116,314,7]],[583,[1,121,124,1,126,4,131,2,135,7,143,47,191,1,193,10,204,109,314,7]],[584,[1,107,138,1,158,1,217,96,314,7]],[585,[1,110,212,102,315,7]],[586,[1,112,210,104,315,7]],[587,[1,114,208,106,315,7]],[588,[1,116,207,107,315,7]],[589,[0,120,202,2,205,109,315,7]],[590,[0,122,200,122]],[591,[0,126,198,117,316,6]],[592,[0,128,196,119,316,6]],[593,[0,130,193,122,316,7]],[594,[0,133,191,124,316,7]],[595,[0,137,186,129,316,7]],[596,[0,140,184,131,316,7]],[597,[0,145,181,134,316,7]],[598,[0,150,169,154]],[599,[0,316,317,6]],[600,[0,316,317,6]],[601,[0,316,317,6]],[602,[0,316,317,6]],[603,[0,316,317,6]],[604,[0,316,317,6]],[605,[0,316,317,6]],[606,[0,316,317,6]],[607,[0,316,317,6]],[608,[0,316,318,5]],[609,[0,5,6,310,318,5]],[610,[0,317,318,5]],[611,[0,5,6,311,318,5]],[612,[0,323]],[613,[0,323]],[614,[0,323]],[615,[0,323]],[616,[0,323]],[617,[0,323]],[618,[0,323]],[619,[0,323]],[620,[0,316,317,5]],[621,[0,316,317,5]],[622,[0,316,317,5]],[623,[1,315,317,5]],[624,[1,315,317,5]],[625,[1,315,317,5]],[626,[1,315,317,5]],[627,[1,315,317,5]],[628,[1,315,317,4]],[629,[1,315,317,4]],[630,[1,315,317,4]],[631,[2,4,7,308,316,5]],[632,[2,313,316,5]],[633,[2,313,316,5]],[634,[2,313,316,4]],[635,[2,5,8,307,316,4]],[636,[2,5,8,307,316,4]],[637,[3,4,8,306,316,4]],[638,[3,311,315,4]],[639,[3,311,315,4]],[640,[3,5,9,305,315,4]],[641,[4,4,9,304,315,4]],[642,[4,4,9,304,314,5]],[643,[4,4,9,304,314,4]],[644,[4,5,10,303,314,4]],[645,[5,4,10,303,314,4]],[646,[5,4,10,302,313,4]],[647,[5,5,11,301,313,4]],[648,[6,4,11,301,313,4]],[649,[6,4,11,300,312,4]],[650,[6,4,11,300,312,4]],[651,[7,4,12,299,312,4]],[652,[7,4,12,298,311,4]],[653,[7,4,12,298,311,4]],[654,[8,4,13,297,311,4]],[655,[8,4,13,296,310,4]],[656,[8,301,310,4]],[657,[9,4,14,294,309,5]],[658,[9,4,14,294,309,4]],[659,[9,5,15,293,309,4]],[660,[10,4,15,292,308,4]],[661,[10,5,16,291,308,4]],[662,[11,4,16,290,307,5]],[663,[11,4,16,290,307,4]],[664,[12,4,17,288,306,5]],[665,[12,4,18,287,306,4]],[666,[12,5,18,286,305,5]],[667,[13,4,18,286,305,4]],[668,[13,5,19,284,304,5]],[669,[14,4,19,284,304,4]],[670,[14,5,20,282,303,5]],[671,[15,4,20,282,303,4]],[672,[16,4,21,280,302,5]],[673,[16,4,22,278,302,4]],[674,[17,4,22,278,301,4]],[675,[17,5,23,276,300,5]],[676,[18,4,24,274,300,4]],[677,[19,4,24,274,299,5]],[678,[19,5,25,272,299,4]],[679,[20,4,26,270,298,4]],[680,[21,4,26,270,297,5]],[681,[21,4,27,268,297,4]],[682,[22,4,28,266,296,4]],[683,[23,4,28,266,295,5]],[684,[24,4,29,264,295,4]],[685,[24,5,30,262,294,4]],[686,[25,4,31,260,293,5]],[687,[26,4,31,259,292,5]],[688,[26,5,32,258,291,5]],[689,[27,5,33,256,290,6]],[690,[28,5,34,254,290,5]],[691,[29,5,35,252,289,5]],[692,[29,6,36,250,288,5]],[693,[30,6,37,248,287,5]],[694,[31,6,38,247,286,6]],[695,[32,6,39,245,285,5]],[696,[33,6,40,243,284,5]],[697,[34,5,41,241,283,5]],[698,[35,5,42,239,282,5]],[699,[36,5,43,237,281,5]],[700,[38,4,44,235,280,5]],[701,[39,5,45,233,279,5]],[702,[40,5,46,230,278,5]],[703,[41,5,47,228,277,5]],[704,[42,5,49,225,276,5]],[705,[43,5,50,223,274,6]],[706,[44,5,51,220,273,6]],[707,[45,6,52,218,272,6]],[708,[46,6,54,215,271,6]],[709,[48,5,55,212,269,7]],[710,[49,6,57,209,268,6]],[711,[50,6,58,206,266,6]],[712,[52,6,60,203,265,6]],[713,[53,6,61,200,263,6]],[714,[55,6,63,197,262,6]],[715,[56,6,64,194,260,6]],[716,[58,6,66,191,258,7]],[717,[59,7,68,187,257,6]],[718,[61,6,70,183,255,7]],[719,[62,7,72,178,253,7]],[720,[64,7,74,174,251,7]],[721,[66,8,76,170,249,7]],[722,[68,8,79,165,247,7]],[723,[70,9,81,161,244,8]],[724,[73,8,84,155,242,8]],[725,[75,9,86,150,239,9]],[726,[77,9,89,144,237,9]],[727,[79,10,92,139,234,10]],[728,[82,10,95,132,231,10]],[729,[85,10,98,126,228,10]],[730,[88,11,103,117,224,11]],[731,[91,11,107,108,220,12]],[732,[95,12,112,98,215,14]],[733,[98,14,119,84,210,15]],[734,[102,17,126,70,203,18]],[735,[106,21,134,53,194,23]],[736,[112,25,156,14,185,27]],[737,[117,90]],[738,[124,75]],[739,[135,53]],[740,[146,28]],[741,[155,13]],[742,[155,13]],[743,[154,15]],[744,[153,16]],[745,[154,15]],[746,[154,14]],[747,[156,10]]]},"27:1":{"rows":[[337,[135,73]],[338,[134,2,154,2,158,1,189,24]],[339,[134,2,148,2,152,1,196,22]],[340,[133,3,138,58,206,16]],[341,[133,3,137,68,211,14]],[342,[133,79,217,10]],[343,[133,82,221,9]],[344,[133,86,224,9]],[345,[133,89,227,9]],[346,[133,92,229,9]],[347,[133,96,232,8]],[348,[132,100,234,8]],[349,[132,102,237,7]],[350,[132,104,239,6]],[351,[132,107,241,6]],[352,[132,109,242,7]],[353,[131,119]],[354,[131,113,245,7]],[355,[131,115,247,6]],[356,[131,116,248,6]],[357,[130,118,250,5]],[358,[130,120,251,5]],[359,[129,122,252,5]],[360,[129,123,254,5]],[361,[128,125,255,5]],[362,[128,126,256,5]],[363,[127,128,257,4]],[364,[127,129,258,4]],[365,[126,131,259,4]],[366,[126,132,260,4]],[367,[125,134,260,5]],[368,[124,136,261,4]],[369,[123,138,262,4]],[370,[123,138,263,4]],[371,[122,8,131,131,263,5]],[372,[121,9,131,132,264,4]],[373,[119,10,130,134,265,4]],[374,[118,11,130,134,265,4]],[375,[116,12,129,136,266,4]],[376,[115,12,130,135,266,4]],[377,[113,14,128,1,130,136,267,4]],[378,[110,16,129,142]],[379,[108,17,128,139,268,3]],[380,[70,20,102,22,127,145]],[381,[66,57,126,142,269,3]],[382,[63,59,123,150]],[383,[61,7,79,42,122,147,270,3]],[384,[59,19,83,37,121,148,270,3]],[385,[58,24,85,33,119,155]],[386,[57,28,88,28,118,156]],[387,[56,32,91,22,116,158]],[388,[55,36,94,16,114,161]],[389,[54,41,99,2,108,167]],[390,[54,217,272,3]],[391,[53,218,272,3]],[392,[52,223]],[393,[51,225]],[394,[51,225]],[395,[50,222,273,3]],[396,[50,222,273,3]],[397,[50,2,54,218,273,3]],[398,[49,3,53,223]],[399,[49,3,53,224]],[400,[49,3,53,224]],[401,[49,228]],[402,[49,228]],[403,[48,229]],[404,[48,229]],[405,[48,229]],[406,[48,229]],[407,[48,229]],[408,[48,229]],[409,[48,224,273,3]],[410,[48,224,273,3]],[411,[48,224,273,3]],[412,[48,228]],[413,[48,228]],[414,[48,228]],[415,[49,227]],[416,[49,226]],[417,[49,226]],[418,[49,226]],[419,[49,226]],[420,[49,4,54,220]],[421,[50,3,54,220]],[422,[50,3,54,220]],[423,[50,219,270,4]],[424,[50,4,55,214,270,3]],[425,[51,3,55,213,269,4]],[426,[51,217,269,4]],[427,[51,4,56,212,269,3]],[428,[52,215,268,4]],[429,[52,4,57,210,268,4]],[430,[53,3,57,214]],[431,[53,213,267,4]],[432,[53,4,58,208,267,4]],[433,[53,217]],[434,[54,4,59,206,266,4]],[435,[54,4,59,206,266,4]],[436,[54,5,60,204,265,4]],[437,[55,4,60,204,265,4]],[438,[55,5,61,202,265,4]],[439,[56,4,61,202,264,4]],[440,[56,4,61,202,264,4]],[441,[56,5,62,200,263,5]],[442,[57,4,62,200,263,4]],[443,[57,5,63,198,263,4]],[444,[57,5,63,198,262,4]],[445,[58,203,262,4]],[446,[58,5,64,196,261,5]],[447,[59,201,261,4]],[448,[59,206]],[449,[59,200,260,5]],[450,[59,200,260,5]],[451,[60,198,259,5]],[452,[60,198,259,5]],[453,[60,198,259,5]],[454,[60,204]],[455,[61,203]],[456,[61,196,258,6]],[457,[61,196,258,6]],[458,[61,196,258,5]],[459,[61,202]],[460,[61,202]],[461,[61,202]],[462,[62,201]],[463,[62,201]],[464,[62,201]],[465,[62,201]],[466,[61,203]],[467,[61,203]],[468,[61,203]],[469,[61,203]],[470,[61,203]],[471,[61,203]],[472,[61,203]],[473,[60,205]],[474,[60,205]],[475,[60,205]],[476,[60,205]],[477,[59,207]],[478,[59,207]],[479,[59,207]],[480,[58,209]],[481,[58,209]],[482,[57,211]],[483,[57,7,65,203]],[484,[56,8,65,204]],[485,[56,9,66,203]],[486,[55,8,64,206]],[487,[55,9,65,205]],[488,[54,8,63,1,65,206]],[489,[53,218]],[490,[53,8,62,1,64,208]],[491,[52,221]],[492,[51,9,61,212]],[493,[51,8,60,214]],[494,[50,9,60,214]],[495,[49,9,59,1,61,214]],[496,[49,215,265,11]],[497,[48,9,58,207,266,11]],[498,[47,9,57,220]],[499,[47,8,56,210,267,11]],[500,[46,9,56,211,268,11]],[501,[45,9,55,225]],[502,[45,8,55,213,269,11]],[503,[44,9,54,215,270,11]],[504,[43,9,53,229]],[505,[42,9,54,229]],[506,[41,9,53,218,272,12]],[507,[40,10,53,219,273,11]],[508,[40,9,52,221,274,11]],[509,[39,9,50,224,275,11]],[510,[38,9,49,225,276,11]],[511,[38,9,48,227,276,11]],[512,[37,9,47,229,277,11]],[513,[36,9,46,231,278,11]],[514,[35,9,45,232,279,10]],[515,[34,10,45,233,280,10]],[516,[34,9,44,235,280,11]],[517,[33,9,43,237,281,10]],[518,[32,9,43,238,282,10]],[519,[31,9,42,239,283,10]],[520,[31,9,41,241,283,11]],[521,[30,9,40,243,284,11]],[522,[29,9,39,244,285,10]],[523,[29,255,285,11]],[524,[28,9,38,247,286,11]],[525,[27,9,37,249,287,10]],[526,[27,8,36,262]],[527,[26,8,36,251,288,11]],[528,[25,9,35,253,289,10]],[529,[25,8,34,254,290,10]],[530,[24,8,33,256,290,11]],[531,[23,9,33,257,291,10]],[532,[23,8,32,258,291,11]],[533,[22,8,31,260,292,10]],[534,[22,7,31,261,293,10]],[535,[21,8,30,263,294,10]],[536,[20,8,29,264,294,10]],[537,[20,7,28,266,295,10]],[538,[19,8,28,267,296,9]],[539,[18,8,27,279]],[540,[18,278,297,10]],[541,[17,8,26,1,28,269,298,9]],[542,[17,7,25,272,299,9]],[543,[16,8,25,1,27,271,299,9]],[544,[16,7,24,275,300,9]],[545,[15,284,300,9]],[546,[15,7,23,277,301,9]],[547,[14,7,22,279,302,8]],[548,[14,7,22,279,302,9]],[549,[14,6,21,281,303,8]],[550,[13,7,21,281,304,7]],[551,[13,6,20,283,304,8]],[552,[12,7,20,283,304,8]],[553,[12,6,19,285,305,8]],[554,[11,7,19,285,305,8]],[555,[11,6,18,287,306,8]],[556,[10,7,18,296]],[557,[10,6,17,289,307,7]],[558,[10,6,17,289,307,8]],[559,[9,298,308,7]],[560,[9,6,16,291,308,8]],[561,[8,300,309,7]],[562,[8,6,15,293,309,8]],[563,[8,301,310,7]],[564,[7,302,310,7]],[565,[7,302,310,8]],[566,[7,303,311,7]],[567,[6,312]],[568,[6,313]],[569,[6,313]],[570,[5,314]],[571,[5,315]],[572,[5,315]],[573,[5,315]],[574,[4,316]],[575,[4,317]],[576,[4,317]],[577,[4,317]],[578,[3,318]],[579,[3,319]],[580,[3,319]],[581,[3,319]],[582,[3,319]],[583,[2,320]],[584,[2,321]],[585,[2,321]],[586,[2,321]],[587,[1,322]],[588,[1,322]],[589,[1,323]],[590,[1,323]],[591,[1,323]],[592,[1,323]],[593,[1,323]],[594,[0,324]],[595,[0,324]],[596,[0,5,6,319]],[597,[0,5,6,319]],[598,[0,5,6,319]],[599,[0,325]],[600,[0,325]],[601,[0,325]],[602,[0,319,320,5]],[603,[0,319,320,5]],[604,[0,319,320,5]],[605,[0,325]],[606,[0,319,320,5]],[607,[0,325]],[608,[0,325]],[609,[0,325]],[610,[0,325]],[611,[0,325]],[612,[0,325]],[613,[0,325]],[614,[0,325]],[615,[0,325]],[616,[0,325]],[617,[0,325]],[618,[0,325]],[619,[0,325]],[620,[0,325]],[621,[0,325]],[622,[0,325]],[623,[0,325]],[624,[1,318,320,4]],[625,[1,318,320,4]],[626,[1,318,320,4]],[627,[1,318,320,4]],[628,[1,323]],[629,[1,323]],[630,[1,323]],[631,[2,321]],[632,[2,316,319,4]],[633,[2,316,319,4]],[634,[2,4,7,316]],[635,[2,4,7,316]],[636,[2,315,318,5]],[637,[3,314,318,4]],[638,[3,314,318,4]],[639,[3,4,8,309,318,4]],[640,[3,4,8,314]],[641,[4,312,317,5]],[642,[4,4,9,307,317,4]],[643,[4,4,9,307,317,4]],[644,[4,4,9,312]],[645,[5,310,316,4]],[646,[5,310,316,4]],[647,[5,4,10,305,316,4]],[648,[6,308,315,4]],[649,[6,308,315,4]],[650,[6,4,11,303,315,4]],[651,[6,4,11,302,314,4]],[652,[7,306,314,4]],[653,[7,4,12,306]],[654,[7,305,313,4]],[655,[8,304,313,4]],[656,[8,4,13,304]],[657,[8,303,312,4]],[658,[9,4,14,302]],[659,[9,301,311,5]],[660,[10,300,311,4]],[661,[10,299,310,5]],[662,[10,299,310,4]],[663,[11,4,16,298]],[664,[12,296,309,4]],[665,[12,4,17,290,308,5]],[666,[13,294,308,4]],[667,[13,4,18,288,307,5]],[668,[14,4,19,287,307,4]],[669,[14,4,19,286,306,5]],[670,[15,4,20,285,306,4]],[671,[15,4,20,284,305,5]],[672,[16,4,21,283,305,4]],[673,[16,4,21,282,304,4]],[674,[17,4,22,280,303,5]],[675,[17,5,23,279,303,4]],[676,[18,4,23,278,302,5]],[677,[18,5,24,276,302,4]],[678,[19,5,25,275,301,4]],[679,[20,4,25,274,300,4]],[680,[21,4,26,272,299,5]],[681,[21,5,27,271,299,4]],[682,[22,275,298,4]],[683,[23,273,297,5]],[684,[24,4,29,266,296,5]],[685,[24,5,30,265,296,4]],[686,[25,5,31,263,295,5]],[687,[26,5,32,261,294,5]],[688,[27,265,293,5]],[689,[28,4,33,258,292,5]],[690,[28,5,34,256,292,4]],[691,[29,5,35,254,291,5]],[692,[30,5,36,253,290,5]],[693,[31,5,37,251,289,5]],[694,[32,5,38,249,288,5]],[695,[33,5,39,247,287,5]],[696,[34,5,40,245,286,5]],[697,[35,5,41,243,285,5]],[698,[36,5,42,241,284,5]],[699,[37,5,43,238,283,5]],[700,[38,5,44,236,282,5]],[701,[39,5,45,234,281,5]],[702,[40,5,47,231,280,5]],[703,[41,6,48,229,278,6]],[704,[42,6,49,227,277,6]],[705,[44,5,50,224,276,5]],[706,[45,5,52,221,275,5]],[707,[46,6,53,219,273,6]],[708,[47,6,54,216,272,6]],[709,[48,6,55,214,270,6]],[710,[50,6,57,210,269,6]],[711,[51,6,58,208,268,5]],[712,[53,5,60,205,266,6]],[713,[54,6,62,201,265,6]],[714,[55,6,63,198,263,6]],[715,[57,6,65,195,262,6]],[716,[59,6,67,191,260,6]],[717,[60,7,69,187,258,6]],[718,[62,7,71,183,256,7]],[719,[64,7,73,179,254,7]],[720,[65,8,75,175,252,7]],[721,[67,8,77,170,250,7]],[722,[69,9,79,167,247,8]],[723,[71,9,82,161,245,8]],[724,[73,10,84,156,242,9]],[725,[75,11,87,151,240,9]],[726,[78,11,90,145,237,9]],[727,[81,10,94,138,234,9]],[728,[84,11,97,131,231,9]],[729,[87,11,101,124,227,10]],[730,[90,11,105,114,222,12]],[731,[93,13,110,105,217,14]],[732,[96,16,116,10,127,101]],[733,[100,18,122,81,205,19]],[734,[104,90,198,22]],[735,[110,26,145,34,190,25]],[736,[116,48,166,43]],[737,[122,80]],[738,[132,61]],[739,[149,29]],[740,[157,13]],[741,[157,13]],[742,[157,13]],[743,[156,15]],[744,[156,15]],[745,[157,13]],[746,[159,9]]]},"28:0":{"rows":[[342,[129,1,132,1,141,2,145,2,158,2,163,3,167,2]],[345,[132,1,140,1,152,1,155,1,160,1,163,1]],[346,[132,1]],[348,[132,1]],[349,[132,1]],[350,[129,1,132,1,149,1]],[351,[132,1,149,1]],[352,[132,1,152,1]],[353,[132,1,152,1]],[354,[132,1,149,1,152,1]],[355,[132,1,149,1,152,1]],[356,[132,1,149,1]],[358,[152,1]],[359,[125,1]],[360,[182,3]],[362,[140,1,160,1,163,1,168,1]],[363,[113,3]],[364,[93,2,111,6]],[365,[89,2,104,4,110,6,211,2]],[366,[87,1,106,1,111,4,213,3]],[367,[124,2,174,2,217,1]],[368,[115,11,174,15,219,2]],[369,[80,2,91,1,95,1,108,18,174,21,207,2,221,2]],[370,[77,3,85,1,91,1,95,1,103,23,174,27,208,4,223,2]],[371,[76,2,85,1,100,26,174,31,226,1]],[372,[75,1,81,1,83,2,96,30,174,34,214,1,228,1]],[373,[79,1,83,2,92,34,149,1,174,37,217,1,229,2]],[374,[79,5,89,37,140,7,149,4,163,1,174,40,231,2]],[375,[69,1,74,2,79,3,86,40,175,41,223,1,232,2]],[376,[68,1,73,3,79,1,84,42,175,44,223,2,229,1,233,3]],[377,[67,1,74,2,82,44,137,1,140,2,145,2,149,1,152,1,163,1,175,45,225,2,229,1,235,2]],[378,[65,1,75,1,80,45,137,1,140,1,146,1,149,1,155,1,163,1,175,47,228,2,236,2]],[379,[64,1,74,1,78,48,146,1,175,49,229,1,238,2]],[380,[63,1,76,50,152,2,175,51,239,2]],[381,[62,1,75,50,152,2,175,53,237,1,241,1]],[382,[60,2,73,53,152,1,175,54,236,4,242,1]],[383,[59,2,72,54,140,1,175,56,236,1,239,1,243,1]],[384,[58,1,70,55,140,1,175,57,236,1,241,1,244,1]],[385,[57,1,64,2,69,56,140,1,175,59,245,1]],[386,[56,2,68,57,175,60,242,1,246,1]],[387,[56,1,67,58,175,61,247,1]],[388,[55,1,65,60,140,1,175,62,247,1]],[389,[54,1,64,61,140,2,156,1,158,3,168,2,175,63,248,1]],[390,[57,4,64,61,175,65,249,1]],[391,[58,2,63,62,175,66,250,1]],[392,[62,64,175,67,250,2]],[393,[54,1,61,65,175,68,251,1]],[394,[53,1,60,66,175,69,252,1]],[395,[53,1,59,67,160,1,163,1,175,69,252,2]],[396,[52,1,58,67,175,70,253,1]],[397,[48,1,58,67,175,70,254,1]],[398,[57,68,175,71,248,2]],[399,[56,69,175,72,249,1,255,1]],[400,[56,69,149,1,175,71,249,1]],[401,[49,1,55,70,149,1,175,72,250,1,256,1]],[402,[54,71,176,71,250,2]],[403,[48,1,54,71,149,1,176,72,251,1,257,1]],[404,[47,1,53,72,163,1,176,73,252,1]],[405,[47,2,53,72,176,74,258,1]],[406,[46,4,52,73,176,74,258,1]],[407,[46,4,52,73,160,1,163,2,176,75]],[408,[46,1,48,2,52,73,176,75,259,1]],[409,[42,1,46,1,48,1,51,74,176,75,259,1]],[410,[42,1,45,1,48,1,51,74,176,76]],[411,[42,1,51,74,176,76,255,1]],[412,[41,1,50,75,176,76,255,3]],[413,[41,1,50,75,176,77,255,3]],[414,[50,75,176,77,255,3]],[415,[49,76,176,77,255,3]],[416,[43,1,49,76,160,1,176,77]],[417,[40,1,43,1,49,76,176,78]],[418,[40,1,43,1,49,76,176,78]],[419,[43,1,48,77,146,1,176,78]],[420,[43,1,48,77,150,1,176,78]],[421,[43,1,48,77,176,78,257,1]],[422,[42,3,48,77,176,79,257,1,262,1]],[423,[42,3,48,77,176,79,257,1,262,1]],[424,[42,3,48,77,175,80,257,1,262,1]],[425,[42,3,47,78,175,80,257,1]],[426,[41,4,47,78,175,80]],[427,[41,2,47,78,150,1,176,79]],[428,[41,2,47,78,176,79]],[429,[47,78,176,79]],[430,[47,78,150,1,176,79]],[431,[47,78,176,79]],[432,[47,78,176,79]],[433,[47,78,177,78]],[434,[42,3,47,75,178,77,257,1]],[435,[42,3,47,74,180,75,257,1,262,1]],[436,[42,3,47,73,141,1,150,1,182,73,262,1]],[437,[42,3,47,71,183,72,262,1]],[438,[42,3,47,70,124,1,179,2,184,71,262,1]],[439,[42,3,47,69,141,1,150,1,176,2,185,70,262,1]],[440,[42,3,47,67,123,2,176,3,182,1,187,67,262,1]],[441,[39,1,48,65,118,1,122,3,176,3,181,1,188,66,262,1]],[442,[39,1,48,64,116,9,164,1,177,2,190,64,256,1,258,1,262,1]],[443,[48,63,116,7,150,1,178,2,187,1,190,64,256,1,258,1]],[444,[48,62,113,1,115,4,150,1,174,1,191,63,256,1,258,1,261,1]],[445,[40,1,48,61,112,6,150,1,174,3,181,2,193,61,255,2,261,1]],[446,[40,1,48,60,111,6,123,1,150,1,175,4,183,1,189,1,193,61,261,1]],[447,[40,1,48,59,111,5,150,1,176,4,184,1,187,1,189,3,194,59,261,1]],[448,[40,1,49,57,112,2,120,2,150,1,175,1,178,3,185,1,189,4,195,58,260,1]],[449,[44,3,49,57,119,1,150,1,178,5,189,2,193,1,196,57,260,1]],[450,[41,1,44,1,46,1,49,56,118,1,150,1,180,4,189,3,197,56,260,1]],[451,[41,1,44,1,47,1,50,54,117,1,150,1,181,4,189,3,198,54,260,1]],[452,[41,1,44,1,47,1,50,53,116,1,150,1,182,4,190,2,195,1,199,53]],[453,[47,1,50,53,105,1,114,2,146,1,184,3,191,1,196,1,199,52]],[454,[42,1,50,52,104,3,114,2,146,1,185,2,200,51,253,4,259,1]],[455,[42,1,45,1,47,1,51,50,104,3,113,2,188,1,197,1,200,51,256,1]],[456,[46,3,51,50,104,3,112,3,189,1,201,50,252,1]],[457,[46,4,51,50,103,4,111,3,189,2,201,50,252,1,255,1,258,1]],[458,[46,1,48,2,52,48,103,3,111,3,190,1,199,1,202,48,252,1,255,1]],[459,[46,1,48,2,52,47,104,2,110,2,191,1,202,48,252,3]],[460,[47,1,49,1,52,47,104,2,109,3,203,46,251,1,254,1,257,1]],[461,[47,1,49,2,53,46,104,1,109,2,192,1,197,1,203,46]],[462,[44,1,47,4,53,45,108,3,127,1,193,1,198,3,204,45]],[463,[53,44,108,2,193,1,197,3,204,44,253,1]],[464,[45,1,53,44,108,2,194,1,204,44,252,2]],[465,[45,2,54,43,108,1,194,1,205,42]],[466,[46,1,54,43,194,1,205,42]],[467,[46,1,55,41,195,1,205,42]],[468,[46,1,55,41,195,1,206,40,254,1]],[469,[50,4,56,40,106,2,195,1,206,40,248,1]],[470,[50,4,56,39,99,2,106,1,194,2,206,39,247,2,250,1,253,1]],[471,[50,5,57,38,98,3,105,2,195,2,201,3,206,39,247,4]],[472,[51,2,54,1,57,38,98,3,105,2,195,2,201,4,207,37,247,3,252,1]],[473,[51,2,54,1,57,38,97,3,104,3,194,3,201,2,204,1,207,37,246,4,252,1]],[474,[51,2,58,37,97,1,104,2,194,3,201,1,204,1,207,37,246,4]],[475,[58,37,104,2,195,2,207,36,245,4,251,1]],[476,[59,36,104,2,195,2,207,36]],[477,[50,1,59,36,104,2,195,2,207,36]],[478,[50,1,59,35,104,1,195,2,207,35]],[479,[59,35,104,1,195,2,208,34]],[480,[51,1,60,34,103,2,195,2,208,33,249,1]],[481,[51,1,60,34,103,2,195,2,208,33,249,1]],[482,[52,1,60,34,103,2,195,2,208,33]],[483,[52,1,61,33,99,1,103,2,205,1,208,33]],[484,[55,1,57,2,61,33,99,1,103,2,205,1,208,32]],[485,[55,4,61,33,98,2,103,2,202,1,204,2,208,32,243,1]],[486,[55,4,61,33,97,3,103,2,202,4,208,32,242,2]],[487,[56,3,61,33,97,2,103,2,202,3,208,32,242,2,245,1]],[488,[56,3,62,32,97,1,103,2,202,3,208,32,242,4]],[489,[57,1,62,32,97,2,103,2,202,3,208,32,242,4]],[490,[53,1,57,1,62,32,97,2,104,2,202,3,208,32,242,3]],[491,[57,1,62,33,97,2,104,2,201,2,204,1,207,33,242,3]],[492,[57,1,62,33,97,2,104,2,195,1,201,2,204,1,207,32]],[493,[54,1,62,33,97,3,104,2,195,1,201,1,204,1,207,32]],[494,[54,1,62,33,97,4,104,3,201,1,204,1,207,32]],[495,[54,1,62,33,98,1,105,2,201,1,203,1,207,32]],[496,[54,1,62,33,105,2,201,1,206,33]],[497,[54,1,62,33,98,1,105,3,206,33]],[498,[54,1,62,33,98,1,105,3,206,33]],[499,[57,1,62,34,106,2,206,33]],[500,[57,2,62,34,106,3,192,1,205,34]],[501,[57,3,62,35,107,2,192,1,197,3,205,34]],[502,[53,1,56,2,59,1,62,35,100,1,102,1,107,3,191,1,197,5,205,34,243,1]],[503,[53,1,56,2,59,1,62,35,100,1,103,1,108,3,196,4,204,36,242,4,248,1]],[504,[53,1,56,2,59,1,62,36,100,1,108,3,196,4,204,36,242,1,245,1,248,1]],[505,[53,1,56,4,62,36,101,1,108,3,190,1,196,2,199,1,203,37,242,1,248,1]],[506,[52,1,62,37,101,1,103,1,109,3,189,1,196,2,203,37,242,2,248,1]],[507,[52,1,61,38,101,2,109,3,196,1,202,39,242,4]],[508,[52,1,61,39,102,1,110,3,188,1,202,39,243,3,249,1]],[509,[52,1,61,39,111,2,187,1,189,1,201,40,243,2,246,1,249,1]],[510,[52,1,60,41,112,2,186,3,201,40,243,2,249,1]],[511,[52,1,60,42,112,2,186,3,200,41,243,2,250,1]],[512,[51,1,60,42,113,1,185,3,199,43,244,1,250,1]],[513,[54,3,59,44,105,1,114,1,184,4,199,43]],[514,[50,1,53,1,56,1,59,44,106,1,115,3,183,4,198,45]],[515,[50,1,53,1,55,2,59,44,106,2,116,3,182,4,198,45]],[516,[49,1,52,1,55,1,58,46,107,2,117,3,181,4,197,47,252,1]],[517,[49,1,52,1,55,1,58,47,108,1,118,4,180,4,196,48]],[518,[48,1,51,2,54,1,57,48,119,4,179,3,189,1,195,50,247,1,250,1,253,1]],[519,[51,3,57,49,107,1,120,4,179,2,189,1,195,50,253,1]],[520,[47,1,52,2,56,52,121,4,177,1,179,1,185,3,194,52,248,1,254,1]],[521,[46,1,52,2,56,53,112,1,114,3,122,3,176,2,184,1,193,53]],[522,[49,1,52,1,55,55,113,3,125,2,174,3,183,2,192,54,255,1]],[523,[48,1,55,56,175,1,183,1,191,56,256,1]],[524,[45,1,48,1,54,58,183,1,185,1,190,58,256,1]],[525,[48,1,53,61,188,60,257,1]],[526,[53,62,178,2,187,62,255,1]],[527,[43,1,52,63,176,3,186,63,252,1,258,1]],[528,[52,65,146,1,156,1,175,3,185,65,252,2,259,1]],[529,[41,1,51,68,132,1,175,3,183,68,253,1,259,1]],[530,[41,1,51,69,125,2,132,5,167,3,175,3,182,69,260,1]],[531,[40,1,50,71,126,2,132,4,145,3,164,6,175,1,181,71,261,1]],[532,[49,74,132,4,141,7,152,4,158,11,179,74,261,1]],[533,[42,3,49,75,132,4,141,7,151,8,160,8,177,76,262,1]],[534,[41,1,43,3,48,80,133,2,141,7,151,7,160,1,162,5,175,79,263,1]],[535,[43,2,47,81,136,1,141,2,144,1,151,1,160,2,174,80,264,1]],[536,[43,2,47,81,130,2,151,2,170,2,174,81,257,2,264,2]],[537,[39,1,43,1,46,82,130,4,167,5,174,82,258,2,265,1]],[538,[39,1,42,1,46,82,130,8,164,8,174,82,259,2,266,1]],[539,[35,1,39,1,41,1,45,83,130,8,140,8,158,3,163,9,174,83,259,2,266,1]],[540,[34,2,41,1,44,84,130,8,140,8,150,8,160,1,163,9,174,84,260,1,267,1]],[541,[34,1,43,85,130,8,140,8,151,7,160,1,163,9,174,85,261,1,267,2]],[542,[43,85,130,8,140,8,151,10,163,9,174,85,261,1,268,1]],[543,[42,86,130,8,140,8,151,10,163,9,174,86,269,1]],[544,[41,87,130,8,140,8,151,10,163,9,174,86]],[545,[34,2,40,88,130,8,140,8,151,10,163,9,174,87,270,1]],[546,[30,1,33,1,40,88,130,8,140,8,151,10,163,9,174,88,271,1]],[547,[39,89,130,8,140,8,151,10,163,9,174,88]],[548,[32,1,39,89,130,8,140,8,150,11,163,9,174,89,272,1]],[549,[28,1,31,2,38,90,130,8,140,8,151,10,163,9,174,90,268,2]],[550,[31,2,38,90,130,8,140,8,151,10,163,9,174,91,267,2,271,1]],[551,[27,1,31,1,37,91,130,8,140,8,150,8,159,2,163,9,174,91,268,1,274,1]],[552,[26,1,32,2,36,92,130,8,140,8,151,7,159,2,163,9,174,92,268,2,272,1,275,1]],[553,[26,1,32,1,36,92,130,8,140,8,151,10,163,9,174,92,269,2,273,1,275,1]],[554,[25,1,35,93,130,8,140,8,151,10,163,9,174,93,269,2,273,1,276,1]],[555,[24,2,34,94,130,8,140,8,151,10,163,9,174,94,270,1,273,1,277,1]],[556,[24,1,34,94,130,8,140,8,151,10,163,9,174,94,271,2,277,1]],[557,[23,1,33,95,130,8,140,8,151,10,163,9,174,95,271,2,278,1]],[558,[32,96,130,8,140,8,151,10,163,9,174,96,272,1,278,1]],[559,[22,1,26,1,32,95,130,8,140,8,151,10,163,9,174,96,279,1]],[560,[25,2,31,96,130,8,140,8,151,10,163,9,174,97,279,1]],[561,[24,3,30,97,130,8,140,8,151,10,163,9,174,97,280,1]],[562,[24,2,30,97,130,8,140,8,151,10,163,9,175,97]],[563,[23,2,29,98,130,8,140,8,151,8,160,1,163,9,175,98,281,1]],[564,[22,4,29,98,130,8,140,8,151,8,160,1,163,10,175,98]],[565,[19,1,28,99,130,8,140,8,151,8,160,1,163,10,175,99,276,1]],[566,[18,1,28,99,130,8,140,8,151,8,160,1,163,10,175,99,276,2,280,1]],[567,[18,1,27,100,130,8,140,8,151,8,160,1,163,10,175,100,276,2]],[568,[17,1,26,101,130,8,140,8,151,8,160,1,163,10,175,100,276,2]],[569,[16,2,26,101,130,8,140,8,151,8,163,10,175,101,277,2,284,1]],[570,[16,1,20,1,25,102,130,8,140,8,151,8,163,10,175,100,284,1]],[571,[15,2,21,1,25,102,130,8,140,8,151,8,163,10,175,102,285,1]],[572,[15,1,21,1,24,103,130,8,140,8,151,8,163,10,175,102,285,1]],[573,[14,2,24,103,130,8,140,8,151,8,163,10,175,103,286,1]],[574,[14,1,23,104,130,8,140,8,151,8,163,10,175,103,286,1]],[575,[14,1,23,104,130,8,140,8,151,8,163,10,175,104]],[576,[13,1,22,105,130,8,140,8,151,8,163,10,175,104,287,1]],[577,[13,1,16,4,22,105,130,7,140,8,151,8,163,10,175,105]],[578,[12,1,15,4,21,106,130,8,140,8,151,7,163,10,175,105]],[579,[12,1,15,2,18,1,21,106,130,8,140,8,151,7,163,10,175,106]],[580,[15,4,20,107,130,8,140,8,150,8,163,10,175,106,289,1]],[581,[14,4,20,107,130,8,140,8,150,8,163,10,175,106,283,1,287,1]],[582,[14,4,20,107,130,8,140,8,151,7,163,10,175,107,286,2]],[583,[10,1,14,3,19,108,130,8,140,8,151,7,163,10,175,107,284,5]],[584,[10,1,13,4,19,108,130,8,140,8,151,7,163,10,175,108,284,5]],[585,[9,1,13,1,15,1,18,109,130,8,140,8,151,7,164,9,175,108,285,1,287,2]],[586,[9,1,12,1,15,1,18,109,130,8,140,8,151,8,164,9,175,108,288,2]],[587,[9,1,15,1,18,68,95,32,130,8,140,8,151,8,164,9,176,29,217,67,289,1]],[588,[8,1,17,69,137,1,217,67,289,1,292,1]],[589,[8,1,17,69,217,67,289,1,292,1]],[590,[8,1,17,69,217,68,292,1]],[591,[16,69,217,68]],[592,[16,69,217,68,293,1]],[593,[16,69,218,68]],[594,[15,70,218,68]],[595,[15,70,218,68]],[596,[9,3,15,70,218,69]],[597,[8,4,14,70,219,68]],[598,[8,4,14,70,219,68,289,1]],[599,[7,2,14,70,219,69,289,1,295,1]],[600,[4,1,7,2,13,70,219,69,289,2,295,1]],[601,[4,1,7,2,13,70,220,68,290,2]],[602,[4,1,7,3,13,70,220,69,291,2,296,1]],[603,[7,2,12,70,220,69,296,1]],[604,[3,1,12,70,220,69,296,1]],[605,[3,1,12,70,221,68]],[606,[3,1,12,70,221,68]],[607,[3,1,11,70,222,67,297,1]],[608,[11,70,222,68,293,1,297,1]],[609,[11,79,92,4,222,68,297,1]],[610,[11,84,98,2,205,85]],[611,[11,92,143,1,166,1,200,3,204,86]],[612,[6,2,10,98,125,2,130,1,136,1,142,1,153,2,164,3,172,1,198,92,298,1]],[613,[5,3,10,101,127,3,149,5,164,2,195,96]],[614,[1,1,5,3,10,103,193,98]],[615,[1,1,4,4,10,103,192,99]],[616,[1,1,4,4,9,106,190,101]],[617,[1,1,4,3,9,108,187,104]],[618,[1,1,4,1,6,1,9,111,185,106]],[619,[4,1,6,1,9,113,181,110,299,1]],[620,[0,1,9,116,179,112,299,1]],[621,[0,1,9,119,175,116,299,1]],[622,[0,1,9,126,171,121,294,1,299,1]],[623,[0,1,9,130,163,1,165,127,294,1,296,1,299,1]],[624,[0,1,8,142,151,2,155,8,164,128,295,1]],[625,[0,1,8,284]],[626,[0,1,8,284]],[627,[0,1,8,284]],[628,[0,1,3,1,8,284,295,2]],[629,[0,1,3,2,8,284,295,2,300,1]],[630,[3,3,8,284,295,2,300,1]],[631,[3,3,8,284,295,3,300,1]],[632,[3,3,8,285,295,3,300,1]],[633,[0,1,3,3,8,285,296,2,300,1]],[634,[0,1,3,3,8,285,297,1,300,1]],[635,[0,1,3,3,8,285,300,1]],[636,[0,1,5,1,8,285,300,1]],[637,[0,1,8,285,300,1]],[638,[0,1,8,285,300,1]],[639,[0,1,8,285,295,1,300,1]],[640,[0,1,8,285,295,2,300,1]],[641,[0,1,8,285,295,2,300,1]],[642,[0,1,8,285,295,2,300,1]],[643,[0,1,8,285,295,2,300,1]],[644,[0,1,8,285,295,3,300,1]],[645,[0,1,4,2,8,285,295,2,300,1]],[646,[0,1,3,3,8,285,295,1,297,1,300,1]],[647,[0,1,3,3,8,284,297,1,300,1]],[648,[0,1,3,3,9,283,297,1]],[649,[0,1,3,3,9,283,296,2]],[650,[0,1,3,2,9,283,295,3]],[651,[0,1,3,2,9,283,295,2]],[652,[4,1,9,283]],[653,[1,1,4,2,9,283]],[654,[1,1,4,2,9,283]],[655,[4,1,9,283]],[656,[5,1,10,282]],[657,[5,1,10,281]],[658,[10,281]],[659,[2,1,10,281,298,1]],[660,[2,1,10,281,298,1]],[661,[2,1,10,281,298,1]],[662,[7,2,11,279,298,1]],[663,[6,1,8,1,11,279,298,1]],[664,[6,1,8,2,11,279,295,1]],[665,[6,1,8,2,12,278,292,1,294,2]],[666,[7,1,12,278,292,3]],[667,[12,277,294,1]],[668,[4,1,13,276]],[669,[4,1,13,276]],[670,[4,1,13,276]],[671,[5,1,14,274]],[672,[14,274]],[673,[8,2,14,274]],[674,[8,2,12,1,15,272]],[675,[9,1,12,1,15,272]],[676,[9,1,15,272,289,1]],[677,[10,1,16,270,289,1]],[678,[16,270,288,1,291,1]],[679,[16,269,288,1,290,1]],[680,[8,1,17,268,287,4,293,1]],[681,[9,1,15,1,17,268,287,3]],[682,[9,1,15,2,18,266,287,3]],[683,[13,1,15,2,18,266,286,1,292,1]],[684,[10,1,13,1,16,2,19,264]],[685,[10,1,13,5,19,264,291,1]],[686,[11,1,14,4,20,263]],[687,[11,1,14,4,20,262,284,1]],[688,[12,1,15,3,21,260,284,1]],[689,[12,1,21,260,289,1]],[690,[13,1,22,258]],[691,[13,1,23,256,288,1]],[692,[14,1,23,256,281,1]],[693,[24,254,281,1,283,1,287,1]],[694,[24,254,280,2,283,1]],[695,[19,1,25,252]],[696,[20,1,23,1,26,251,279,2,282,1]],[697,[20,1,24,1,27,249,278,2,281,1]],[698,[21,1,23,2,27,248,278,3,284,1]],[699,[18,1,21,3,28,246,283,1]],[700,[19,1,29,244,282,2]],[701,[20,1,30,243,282,1]],[702,[21,1,31,241,281,1]],[703,[21,2,32,239,280,1]],[704,[22,2,32,238,273,2,280,1]],[705,[23,1,33,236,273,2,279,1]],[706,[24,1,34,234,272,3,278,1]],[707,[25,1,35,232,270,4,277,1]],[708,[26,1,33,1,36,231,269,5,276,1]],[709,[33,1,37,228,268,4]],[710,[27,1,32,1,38,226,268,2]],[711,[28,1,32,2,40,223,267,2]],[712,[29,1,33,1,41,221,265,4]],[713,[30,1,34,1,42,219,264,4]],[714,[36,2,39,1,43,217,263,5]],[715,[32,1,37,3,44,215,263,4,270,1]],[716,[37,5,46,211,262,4,269,1]],[717,[35,1,39,1,47,208,263,1,268,1]],[718,[36,1,40,1,49,205,267,1]],[719,[37,1,50,203,265,2]],[720,[38,1,44,2,51,200,255,2,264,1]],[721,[39,2,44,3,48,2,53,196,255,3,263,1]],[722,[40,2,45,4,50,1,55,193,252,2,256,2,262,1]],[723,[42,1,46,3,50,1,56,191,251,2,256,1,260,1]],[724,[43,1,48,3,58,187,251,2,259,1]],[725,[45,1,51,5,60,183,252,1,257,2]],[726,[46,1,53,4,63,178,247,2,256,1]],[727,[48,1,54,3,58,2,65,174,245,1,247,2]],[728,[49,2,55,5,67,169,242,2,245,1,247,1,252,2]],[729,[51,2,57,2,62,3,69,166,242,2,245,1,251,1]],[730,[53,1,62,4,72,160,237,7,249,2]],[731,[55,2,62,6,74,156,235,2,239,3,248,1]],[732,[57,1,63,5,77,150,233,7,246,1]],[733,[59,1,66,2,69,1,80,144,231,8,244,1]],[734,[61,1,75,1,84,135,228,7,241,2]],[735,[62,3,75,2,79,1,87,128,225,2,228,4,239,1]],[736,[64,3,74,3,92,120,221,4,228,2,236,2]],[737,[67,3,76,4,84,1,95,112,218,4,223,5,234,2]],[738,[70,2,79,2,84,1,86,4,99,104,215,10,231,3]],[739,[73,1,85,6,93,5,107,91,211,5,219,1,228,3]],[740,[76,3,87,4,92,8,115,74,206,3,211,2,225,3]],[741,[79,4,93,7,125,54,203,5,221,3]],[742,[83,3,95,5,108,1,190,4,196,1,202,3,206,2,217,3]],[743,[87,4,103,2,107,2,113,7,188,3,192,2,196,1,202,1,213,3]],[744,[93,2,109,11,123,1,127,1,130,9,162,6,171,9,186,7,209,2]],[745,[97,4,119,6,130,8,142,2,153,2,161,1,167,1,171,9,204,2]],[746,[103,4,131,8,145,1,147,1,196,5]],[747,[110,3,188,5]],[748,[125,1,128,1,179,4]],[749,[131,5,138,1,143,2,156,11]]]},"28:1":{"rows":[[342,[128,22,159,22]],[343,[128,21,159,22]],[344,[128,21,160,21]],[345,[128,20,161,20]],[346,[128,19,161,20]],[347,[128,18,162,19]],[348,[128,18,162,19]],[349,[128,17,163,18]],[350,[128,17,163,18]],[351,[128,16,164,17]],[352,[127,17,164,17]],[353,[127,16,165,16]],[354,[127,16,165,17]],[355,[126,16,166,16]],[356,[126,16,166,16]],[357,[126,16,167,16]],[358,[126,16,167,17]],[359,[127,1,175,11]],[360,[153,5,187,7]],[361,[103,9,142,18,169,4,190,8]],[362,[100,4,126,10,137,2,142,2,150,1,152,7,168,7,183,4,196,6]],[363,[97,5,126,4,131,2,137,2,153,5,168,5,181,9,201,5]],[364,[93,5,106,3,111,1,115,1,170,3,182,8,205,5]],[365,[90,4,103,4,111,1,184,5,201,1,208,5]],[366,[88,2,103,2,107,1,111,1,127,41,200,7,212,3]],[367,[85,3,95,1,97,1,103,3,119,64,200,2,205,4,214,3]],[368,[83,3,92,6,114,77,200,4,207,1,217,3]],[369,[80,4,89,9,108,87,201,7,219,3]],[370,[78,3,89,7,103,96,205,3,223,1]],[371,[76,3,89,4,99,105,216,4,225,1]],[372,[75,2,96,112,216,4,221,1,227,1]],[373,[74,1,80,2,93,118,216,9,228,1]],[374,[71,2,81,2,89,124,220,6,230,1]],[375,[70,1,75,1,81,2,87,128,221,2,231,2]],[376,[68,2,74,2,79,2,85,133,233,2]],[377,[67,1,73,3,78,1,83,137,234,2]],[378,[65,1,74,3,81,141,236,2]],[379,[64,1,74,1,79,145,233,2,237,2]],[380,[63,1,78,148,233,3,238,2]],[381,[61,2,76,151,232,5,239,2]],[382,[60,2,66,1,74,155,232,5,241,1]],[383,[59,2,73,157,233,4,242,1]],[384,[59,1,67,1,71,160,234,2,237,1,242,2]],[385,[58,1,66,1,70,163,235,2,243,2]],[386,[57,1,65,1,69,165,244,2]],[387,[56,1,59,1,64,1,68,167,245,1]],[388,[55,1,58,2,63,1,66,170,246,1]],[389,[54,1,57,3,62,1,65,172,245,1,247,1]],[390,[56,2,60,1,64,174,248,1]],[391,[52,1,55,2,63,177,249,1]],[392,[62,179,249,1]],[393,[51,1,58,1,62,179,247,1,250,1]],[394,[61,181,251,1]],[395,[50,1,60,183,251,2]],[396,[49,1,59,184,252,1]],[397,[48,1,58,186,253,1]],[398,[48,1,57,188,253,1]],[399,[47,1,56,190,254,1]],[400,[56,190,254,1]],[401,[46,1,55,192,255,1]],[402,[55,192,249,1]],[403,[54,193]],[404,[47,3,54,194]],[405,[47,3,53,196]],[406,[46,1,53,196]],[407,[46,1,52,198,255,1]],[408,[49,1,52,198,255,1]],[409,[45,2,51,200,255,2]],[410,[42,1,51,200,256,1,259,1]],[411,[42,1,50,201,256,2]],[412,[41,2,50,201,256,2]],[413,[41,1,49,203,254,4]],[414,[41,1,49,203,254,4,260,1]],[415,[49,203,255,1,260,1]],[416,[48,205,260,1]],[417,[43,1,48,205]],[418,[42,2,48,205]],[419,[42,1,48,205]],[420,[42,1,45,1,48,206,261,1]],[421,[42,1,45,1,48,206,261,1]],[422,[42,1,45,1,47,207,261,1]],[423,[41,2,44,2,47,207,261,1]],[424,[41,4,47,207,261,1]],[425,[41,4,47,207,256,1]],[426,[41,2,47,207,256,3]],[427,[41,1,47,207,256,4]],[428,[46,208,256,4]],[429,[46,208,256,4]],[430,[46,208,256,2,259,1]],[431,[46,208,256,1]],[432,[38,1,46,208,256,1]],[433,[38,1,46,208,256,1]],[434,[38,1,46,208]],[435,[38,1,41,1,44,1,46,208]],[436,[41,1,44,1,47,207]],[437,[41,2,44,1,47,207]],[438,[41,4,47,207,258,1]],[439,[41,3,47,207,258,1]],[440,[47,207,258,1,261,1]],[441,[39,1,47,207,258,1,261,1]],[442,[39,1,47,206,258,1,261,1]],[443,[39,1,47,206,256,1]],[444,[39,1,47,206,257,1,260,1]],[445,[39,1,48,205,260,1]],[446,[39,2,48,205,260,1]],[447,[40,1,48,204,260,1]],[448,[40,1,45,1,48,204,257,1,260,1]],[449,[40,1,44,3,48,204,255,2,259,1]],[450,[40,1,44,1,46,1,49,202,256,1,259,1]],[451,[41,1,44,1,46,2,49,202,254,1,256,1,259,1]],[452,[41,1,44,1,46,2,49,202,256,1,259,1]],[453,[41,1,44,2,47,1,50,201,258,1]],[454,[41,2,45,1,47,2,50,200,255,1,258,1]],[455,[42,1,45,1,47,2,50,200,255,1]],[456,[42,1,45,4,51,198,257,1]],[457,[45,2,51,198,254,1,257,1]],[458,[43,1,46,1,52,197]],[459,[43,1,52,196,256,1]],[460,[52,196,256,1]],[461,[44,1,53,195,255,1]],[462,[44,1,53,194,255,1]],[463,[45,1,53,194]],[464,[45,1,54,192,254,1]],[465,[45,2,49,1,51,2,54,192,248,4,254,1]],[466,[46,1,49,1,52,2,55,190,247,1,250,2]],[467,[46,1,49,1,53,1,55,190,247,1]],[468,[47,1,49,2,53,2,56,189,247,1,250,1]],[469,[50,1,53,2,56,188,246,2,249,1]],[470,[48,1,50,1,53,1,56,188,246,4,252,1]],[471,[48,1,51,1,57,186,247,2]],[472,[49,1,57,186,251,1]],[473,[49,1,58,185]],[474,[50,1,58,184,244,1,247,1,250,1]],[475,[50,1,58,184,244,1]],[476,[50,1,59,183,244,3]],[477,[59,182,249,1]],[478,[60,181]],[479,[60,180,248,1]],[480,[52,1,60,180]],[481,[52,1,55,2,60,179]],[482,[55,2,61,178,247,1]],[483,[55,2,61,178,247,1]],[484,[55,2,61,178]],[485,[56,1,62,177]],[486,[56,1,62,176,246,1]],[487,[56,2,62,176,246,1]],[488,[57,3,62,176]],[489,[57,2,63,175,240,1]],[490,[57,1,60,1,63,175,240,3]],[491,[57,1,60,1,63,175,240,2]],[492,[57,2,60,1,63,175,245,1]],[493,[63,175,245,1]],[494,[63,175,245,1]],[495,[63,175,245,1]],[496,[63,175,245,1]],[497,[63,175,245,1]],[498,[63,175,242,1,245,1]],[499,[63,175,241,2]],[500,[63,175,241,2]],[501,[57,4,63,175,243,1]],[502,[57,5,63,175,243,1]],[503,[54,1,57,2,60,2,63,176,243,1,246,1]],[504,[54,1,57,1,60,1,63,176,240,2,243,1,246,1]],[505,[54,1,57,1,60,1,63,176,241,1,246,1]],[506,[57,1,62,177]],[507,[62,177]],[508,[53,1,62,177,247,1]],[509,[53,1,61,179]],[510,[53,1,61,179]],[511,[52,1,61,179,246,1]],[512,[52,1,61,180,246,2]],[513,[52,1,55,1,60,181,243,1,247,1,249,1]],[514,[51,1,54,1,57,1,60,181,243,1,247,1]],[515,[51,1,57,1,60,182,243,1,248,1,250,1]],[516,[50,1,53,1,59,183,248,1]],[517,[50,1,52,1,59,184,248,1,251,1]],[518,[52,2,58,185,246,4,251,1]],[519,[51,5,58,186,246,4,252,1]],[520,[50,5,57,187,246,2,252,2]],[521,[48,1,50,2,54,1,57,187,247,1,253,1]],[522,[48,3,56,189,247,1,253,2]],[523,[46,2,49,1,56,189,248,1,254,2]],[524,[46,1,55,191,248,2,255,1]],[525,[45,1,54,193,249,2,255,2]],[526,[44,2,54,193,250,1,256,2]],[527,[44,1,53,195,257,1]],[528,[43,1,53,196,251,1,258,1]],[529,[43,1,52,198,252,1,258,2]],[530,[42,1,45,1,48,2,52,198,256,1,259,1]],[531,[41,1,44,1,48,1,51,200,254,1,260,1]],[532,[41,1,44,1,47,2,51,201,260,1]],[533,[43,1,47,2,50,68,120,132,261,1]],[534,[42,2,46,2,50,69,120,133,262,1]],[535,[42,4,49,205,256,1,258,1,262,1]],[536,[38,1,41,1,44,2,48,206,256,3,263,1]],[537,[37,1,44,1,47,208,257,2,264,1]],[538,[37,1,46,209,257,2,264,1]],[539,[36,1,46,210,258,1,265,1]],[540,[45,212,266,1]],[541,[35,1,37,1,44,53,99,159,266,1]],[542,[36,2,40,1,44,214,267,1]],[543,[36,1,43,216,267,2]],[544,[33,1,35,2,43,217,268,2]],[545,[32,1,35,2,42,219,269,1]],[546,[31,2,41,220,270,1]],[547,[30,2,41,221,270,2]],[548,[30,1,40,223,269,1,271,1]],[549,[29,1,39,224,269,1,272,1]],[550,[28,1,38,226,273,1]],[551,[31,4,38,227,271,1,273,1]],[552,[27,1,31,4,37,229,274,1]],[553,[26,1,30,1,33,1,37,229,268,1,274,2]],[554,[26,1,29,2,36,231,268,1,275,1]],[555,[25,1,29,1,35,232,269,1,276,1]],[556,[24,2,28,1,34,234,269,1,276,1]],[557,[24,1,34,235,270,1,277,1]],[558,[23,2,33,236,277,1]],[559,[23,1,32,238,278,1]],[560,[22,1,32,238]],[561,[22,1,26,2,31,240,279,1]],[562,[21,1,25,3,31,241]],[563,[24,4,30,242,280,1]],[564,[20,1,23,4,30,243,281,1]],[565,[20,1,23,2,26,1,29,244,275,1]],[566,[23,1,25,1,29,245,275,2,278,3,282,1]],[567,[19,1,22,2,25,1,28,246,276,5]],[568,[23,2,28,247,276,5,283,1]],[569,[18,1,24,1,27,249,278,3,284,1]],[570,[17,1,26,250,278,1,284,1]],[571,[16,2,26,251,285,1]],[572,[16,1,19,1,25,252,285,1]],[573,[16,1,25,252,286,1]],[574,[24,254,286,1]],[575,[24,255,281,2]],[576,[14,1,23,256,282,1,287,1]],[577,[14,1,23,256,282,1,286,1]],[578,[13,1,23,257,282,1,286,1]],[579,[13,1,22,258,283,1,286,2]],[580,[12,1,22,259,287,1,289,1]],[581,[12,1,21,260]],[582,[21,261,290,1]],[583,[14,1,20,263]],[584,[14,1,17,1,20,263,291,1]],[585,[10,1,13,4,19,264,291,1]],[586,[10,1,13,4,19,265,289,1,291,1]],[587,[9,1,12,4,18,266,292,1]],[588,[9,1,18,266,292,1]],[589,[8,2,17,268,292,1]],[590,[8,1,17,268,288,1,293,1]],[591,[8,1,17,268,293,1]],[592,[7,1,16,270,293,1]],[593,[7,1,10,4,16,270,293,2]],[594,[10,4,16,270,293,2]],[595,[9,2,12,2,15,272,293,2]],[596,[6,1,9,4,15,272,293,2]],[597,[6,1,8,3,12,1,15,272,289,1,293,1,295,1]],[598,[8,3,12,1,14,273,292,2]],[599,[8,2,11,1,14,274,290,4]],[600,[5,1,8,3,13,275,290,3,296,1]],[601,[5,1,8,2,13,276,291,1,296,1]],[602,[5,1,13,276,296,1]],[603,[4,1,13,276]],[604,[4,1,12,277,297,1]],[605,[4,1,12,278,297,1]],[606,[4,1,12,278,297,1]],[607,[3,2,12,278]],[608,[3,1,11,279]],[609,[6,3,11,280,298,1]],[610,[6,3,11,280,295,1,298,1]],[611,[2,1,5,4,11,280,293,1,295,1,298,1]],[612,[2,1,5,4,11,280,293,4]],[613,[2,1,5,4,10,281,293,1,295,2]],[614,[2,1,5,3,10,281,293,1,296,1,299,1]],[615,[2,1,5,1,7,1,10,282,293,2,296,1,299,1]],[616,[1,1,4,4,10,282,293,4,299,1]],[617,[1,1,4,4,10,282,294,2,299,1]],[618,[1,1,4,4,10,282,299,1]],[619,[1,1,4,1,9,283,299,1]],[620,[1,1,4,1,9,283]],[621,[1,1,4,1,6,1,9,283,300,1]],[622,[1,1,9,283,300,1]],[623,[0,1,9,284,300,1]],[624,[0,1,9,284,300,1]],[625,[0,2,9,284,300,1]],[626,[0,2,4,1,9,284,296,2,300,1]],[627,[0,1,4,1,9,284,295,3,300,1]],[628,[0,1,3,3,9,284,295,3,300,1]],[629,[0,1,3,3,8,285,295,3,300,1]],[630,[0,1,3,3,8,285,295,4,300,1]],[631,[0,1,3,4,8,285,295,3,300,1]],[632,[0,1,3,4,8,88,98,195,295,3,300,1]],[633,[0,1,4,3,8,285,296,2,300,1]],[634,[0,1,8,285,296,1,300,1]],[635,[0,1,8,285,300,1]],[636,[0,1,8,285,300,1]],[637,[0,1,8,285,300,1]],[638,[0,1,3,3,8,285,300,1]],[639,[0,1,3,3,8,285,296,1,300,1]],[640,[0,1,3,3,8,285,295,3,300,1]],[641,[0,1,3,3,8,285,295,3,300,1]],[642,[0,1,3,3,8,285,295,3,300,1]],[643,[0,1,3,3,8,285,295,3,300,1]],[644,[0,1,9,284,295,3,300,1]],[645,[0,1,9,284,295,3,300,1]],[646,[0,1,9,284,295,3,300,1]],[647,[0,1,9,284,295,2,300,1]],[648,[0,1,9,283,295,2,300,1]],[649,[0,1,4,1,9,283,295,1]],[650,[4,1,9,283]],[651,[4,1,9,283]],[652,[4,1,9,283,299,1]],[653,[1,1,4,1,9,283,294,1,299,1]],[654,[1,1,9,282,294,2,299,1]],[655,[1,1,10,281,294,2,299,1]],[656,[1,1,10,281,299,1]],[657,[5,1,7,1,10,281]],[658,[2,1,5,3,10,281,293,1,298,1]],[659,[2,1,5,4,10,281,293,1,298,1]],[660,[2,1,5,4,11,279,298,1]],[661,[2,1,5,4,11,279,293,1,298,1]],[662,[5,4,11,279,293,1]],[663,[5,4,11,279,297,1]],[664,[6,3,12,278,297,1]],[665,[6,2,9,1,12,277,291,1]],[666,[7,3,12,277,291,1]],[667,[4,1,7,3,12,277,291,3]],[668,[4,1,7,4,13,275,291,3,296,1]],[669,[7,4,13,275,290,2,293,1]],[670,[8,1,10,1,13,274,290,2]],[671,[5,1,8,1,14,273,290,1]],[672,[5,1,9,2,14,273]],[673,[6,1,14,273]],[674,[6,1,15,271]],[675,[6,1,15,271,294,1]],[676,[6,2,15,270]],[677,[7,1,16,269,293,1]],[678,[7,1,16,269,287,1,293,1]],[679,[7,1,17,267,286,2,292,1]],[680,[11,1,17,267,286,2,292,1]],[681,[17,266,286,3]],[682,[9,1,12,1,18,265,286,3,291,1]],[683,[9,1,13,1,18,265,291,1]],[684,[9,2,13,1,19,263,290,1]],[685,[10,1,13,2,19,263,290,1]],[686,[10,2,14,1,20,261,289,1]],[687,[11,1,20,261,289,1]],[688,[12,1,21,259,288,1]],[689,[12,2,22,257,281,3,288,1]],[690,[13,1,23,256,281,4,287,1]],[691,[13,2,23,255,280,4,287,1]],[692,[14,1,21,1,24,254,280,4,286,1]],[693,[15,1,21,1,24,253,279,5]],[694,[18,1,21,2,25,252,280,3,285,1]],[695,[16,1,19,5,25,251,284,1]],[696,[20,4,26,249,277,2]],[697,[20,5,27,248,276,2,279,1,283,1]],[698,[21,5,28,246,276,2,279,1,282,1]],[699,[21,5,29,244,275,2]],[700,[22,5,29,243,275,1,281,1]],[701,[23,5,30,241,280,1]],[702,[24,4,31,239]],[703,[25,2,32,237,273,1,279,1]],[704,[22,1,32,237,271,3,278,1]],[705,[23,1,33,235,271,3,277,1]],[706,[23,2,30,1,34,233,270,4,277,1]],[707,[24,2,29,1,31,1,35,231,270,2,276,1]],[708,[25,2,29,2,37,228,275,1]],[709,[26,2,30,2,38,226,274,1]],[710,[27,2,31,5,39,224,273,1]],[711,[28,2,32,3,40,222,272,1]],[712,[29,2,33,1,41,220,264,1,271,1]],[713,[30,2,42,218,264,1,270,1]],[714,[31,1,39,1,44,214,261,1,269,1]],[715,[32,1,39,3,45,212,265,1,268,1]],[716,[33,2,38,5,46,210,267,1]],[717,[34,2,39,5,47,207,258,1,266,1]],[718,[36,1,39,5,48,204,256,3,265,1]],[719,[37,1,40,3,50,201,255,3,263,2]],[720,[38,1,52,197,254,2,262,1]],[721,[39,1,53,194,252,1,261,1]],[722,[40,2,55,191,250,2,260,1]],[723,[41,2,47,1,57,188,248,4,258,2]],[724,[42,2,48,2,58,185,247,3,251,1,257,1]],[725,[44,2,60,181,246,3,256,1]],[726,[46,2,56,2,62,177,246,2,254,1]],[727,[48,1,55,5,64,173,247,1,253,1]],[728,[50,1,56,3,66,169,251,1]],[729,[51,2,56,3,69,164,238,3,249,1]],[730,[53,2,58,2,71,160,235,7,247,1]],[731,[54,2,74,155,234,7,245,2]],[732,[56,2,67,1,77,149,232,7,244,1]],[733,[57,3,79,144,234,2,242,2]],[734,[60,2,75,1,82,137,228,1,240,2]],[735,[62,3,74,4,85,131,228,1,237,2]],[736,[65,3,74,7,89,123,221,3,226,3,235,2]],[737,[67,3,75,9,93,116,218,3,223,4,232,3]],[738,[69,4,79,5,100,105,212,3,217,1,220,4,230,2]],[739,[72,3,87,6,104,93,211,1,217,1,219,2,227,3]],[740,[75,2,87,6,95,2,114,76,210,5,224,4]],[741,[78,4,88,10,124,55,198,2,211,3,221,3]],[742,[82,3,97,2,110,2,191,5,197,1,202,2,217,3]],[743,[99,4,108,13,181,4,186,2,194,2,200,3,213,2]],[744,[91,3,108,11,126,13,144,9,160,1,163,8,177,8,186,9,208,3]],[745,[97,2,126,10,143,3,147,1,151,2,158,3,163,3,167,5,177,7,203,3]],[746,[102,5,131,7,143,14,158,3,163,8,178,3,196,4]],[747,[109,8,188,7]],[748,[118,7,126,3,181,3]],[749,[131,4,136,2,158,14]]]}});const customCoverageCache=new Map();
function legacyMakeCustomMask(W,H,rear,bass,base){const key=base+':'+Number(rear);if(customCoverageCache.has(key))return customCoverageCache.get(key);const path=new Path2D(),data=CustomCoverage[key];if(data)for(const [y,runs]of data.rows)for(let i=0;i<runs.length;i+=2)path.rect(runs[i]/W,y/H,runs[i+1]/W,1/H);customCoverageCache.set(key,path);return path;}
function paintCustomMetal(c,W,H,rear,bass,hardware){if(hardware==='chrome')return;const path=new Path2D();if(!rear){path.rect((bass?.34:.38)*W,(bass?.902:.82)*H,(bass?.31:.27)*W,(bass?.051:.05)*H);for(const [x,y]of(bass?[[.77,.81],[.82,.842],[.86,.87]]:[[.77,.78],[.83,.817],[.88,.852]])){path.moveTo((x+.027)*W,y*H);path.ellipse(x*W,y*H,.027*W,.011*H,0,0,Math.PI*2);}}for(let n=0;n<(bass?4:6);n++){const x=rear?.60+n*.022:(bass?.285:.47)-n*.026,y=.018+n*(bass?.035:.025);path.moveTo((x+.028)*W,y*H);path.ellipse(x*W,y*H,.028*W,.010*H,0,0,Math.PI*2);}c.save();c.clip(path);c.globalCompositeOperation=hardware==='black'?'multiply':'color';c.fillStyle=hardware==='black'?'#414c4b':'#c6a149';c.fillRect(0,0,W,H);c.globalCompositeOperation='soft-light';c.globalAlpha=.25;c.fillStyle=hardware==='black'?'#37403e':'#ebcd78';c.fillRect(0,0,W,H);c.restore();}
function paintCustomPickups(c,W,H,bass,kind,source){if(kind==='standard')return;const ys=bass?[.754,.845]:[.661,.723,.785],x=bass?.33:.34,w=bass?.28:.30;for(let idx=0;idx<ys.length;idx++){const y=ys[idx],x0=!bass&&idx===0?.39:x,w0=!bass&&idx===0?.24:w;const sy=bass?(idx===0?y+.04:y-.03):(idx===2?y-.025:y+.032);c.drawImage(source,(x0-.008)*W,sy*H,(w0+.016)*W,.015*H,(x0-.008)*W,(y-.005)*H,(w0+.016)*W,.031*H);}const positions=kind==='active'?[bass?.752:.675,bass?.839:.77]:ys;for(let idx=0;idx<positions.length;idx++){const y=positions[idx],x0=!bass&&idx===0&&kind!=='active'?.39:x,w0=!bass&&idx===0&&kind!=='active'?.24:w;const active=kind==='active',h=(active?.029:.017)*H,g=c.createLinearGradient(0,(y-.005)*H,0,y*H+h);g.addColorStop(0,kind==='vintage'?'#f2ddaa':kind==='standard'&&!bass?'#f4efdc':'#687173');g.addColorStop(1,kind==='vintage'?'#b79a62':kind==='standard'&&!bass?'#bcb59d':'#1e2829');c.fillStyle=g;c.strokeStyle='#4b4d42';c.lineWidth=.8;c.beginPath();c.roundRect(x0*W,y*H,w0*W,h,2.5);c.fill();c.stroke();if(kind==='standard'||kind==='vintage'){for(let n=0;n<(bass?4:6);n++){c.fillStyle=kind==='vintage'?'#a68442':'#5a625e';c.beginPath();c.arc((x0+.035+n*(w0-.07)/(bass?3:5))*W,(y+.008)*H,.007*W,0,Math.PI*2);c.fill();}}if(kind==='noiseless'){c.strokeStyle='#b4beb7';c.beginPath();c.moveTo((x0+.04)*W,(y+.008)*H);c.lineTo((x0+w0-.04)*W,(y+.008)*H);c.stroke();}}}
function electricCustomTexture(item,rear=false){const key=JSON.stringify([item.base,item.options,rear]);if(customTextureCache.has(key))return customTextureCache.get(key);const art=InstrumentArtV340[item.base],clip=art?.clips[rear?1:0],im=art?instrumentAtlases[art.atlas]:null;if(!clip||!im?.complete||!im.naturalWidth)return null;const out=document.createElement('canvas');out.width=clip[2];out.height=clip[3];const W=out.width,H=out.height,c=out.getContext('2d'),source=document.createElement('canvas');source.width=W;source.height=H;source.getContext('2d').drawImage(im,...clip,0,0,W,H);c.drawImage(source,0,0);const o=item.options,bass=products[item.base].family==='bass',mask=makeCustomMask(W,H,rear,bass,item.base),pigment=Atelier.options.color.find(v=>v[0]===o.color)[4],wood={alder:{light:'#c59b67',dark:'#795439',step:.063,wave:4},ash:{light:'#e0c793',dark:'#805f41',step:.037,wave:7},walnut:{light:'#96724c',dark:'#382c22',step:.028,wave:3},mahogany:{light:'#bd7d58',dark:'#653b2d',step:.048,wave:9}}[o.wood];
 c.save();c.scale(W,H);c.clip(mask,'evenodd');c.globalCompositeOperation='color';c.fillStyle=pigment;c.fillRect(0,.49,1,.51);c.globalCompositeOperation='soft-light';c.globalAlpha=.55;c.fillStyle=wood.light;c.fillRect(0,.49,1,.51);c.globalCompositeOperation='multiply';c.globalAlpha=o.wood==='walnut'?.5:o.wood==='ash'?.4:.3;c.strokeStyle=wood.dark;c.lineWidth=o.wood==='ash'?.010:.005;for(let x=-.1;x<1.1;x+=wood.step){c.beginPath();for(let n=0;n<=30;n++){const y=.49+n*.017,xx=x+Math.sin(y*wood.wave*6+x*8)*.014; n?c.lineTo(xx,y):c.moveTo(xx,y);}c.stroke();}c.globalAlpha=1;c.globalCompositeOperation='source-over';if(o.finish==='satin'){c.fillStyle='#ece8d315';c.fillRect(0,.49,1,.51);}if(o.finish==='gloss'){const g=c.createLinearGradient(0,.5,.8,1);g.addColorStop(0,'#ffffff00');g.addColorStop(.35,'#ffffff08');g.addColorStop(.43,'#ffffff65');g.addColorStop(.51,'#ffffff00');g.addColorStop(1,'#ffffff00');c.fillStyle=g;c.fillRect(0,.49,1,.51);}if(o.finish==='relic'){c.fillStyle=wood.light;c.strokeStyle=wood.dark;c.lineWidth=.003;for(const [x,y,r]of[[.11,.88,.038],[.16,.64,.023],[.82,.94,.028],[.09,.84,.02],[.88,.62,.018]]){c.beginPath();c.ellipse(x,y,r,r*.35,-.5,0,Math.PI*2);c.fill();c.stroke();}c.strokeStyle='#f0d6a6';c.lineWidth=.003;for(let n=0;n<12;n++){const x=.07+n*.008,y=.85+Math.sin(n)*.045;c.beginPath();c.moveTo(x,y);c.lineTo(x+.025,y-.018);c.stroke();}}c.restore();
 c.save();c.scale(W,H);c.beginPath();c.rect(rear?.43:.41,.20,.18,.38);c.clip();c.globalCompositeOperation='color';c.globalAlpha=.75;c.fillStyle=wood.dark;c.fillRect(0,0,1,1);c.restore();
 if(!rear)paintCustomPickups(c,W,H,bass,o.pickup,out);paintCustomMetal(c,W,H,rear,bass,o.hardware);c.globalCompositeOperation='destination-in';c.drawImage(source,0,0);c.globalCompositeOperation='source-over';
 if(customTextureCache.size>=72)customTextureCache.delete(customTextureCache.keys().next().value);customTextureCache.set(key,out);return out;}

function miniCustom(c,item,height=50,rear=false){const im=customTexture(item,rear);if(!im)return;const w=height*im.width/im.height;c.drawImage(im,-w/2,-height,w,height);}
function drawCustomModel(){const el=$('customModel');if(!el||!workshopDraft)return;const c=el.getContext('2d'),W=el.width,H=el.height,angle=workshopAngle*Math.PI/180,rear=Math.cos(angle)<0,im=customTexture(workshopDraft,rear);c.clearRect(0,0,W,H);const bg=c.createRadialGradient(W*.5,H*.45,20,W*.5,H*.45,H*.7);bg.addColorStop(0,'#fff8e5');bg.addColorStop(1,'#e9dabc');c.fillStyle=bg;c.fillRect(0,0,W,H);if(!im)return;const h=H*.78,w=h*im.width/im.height,squeeze=Math.max(.035,Math.abs(Math.cos(angle))),thickness=Math.sin(angle)*8;c.fillStyle='#5d4b2e15';c.beginPath();c.ellipse(W/2,H*.9,w*.6,14,0,0,Math.PI*2);c.fill();c.save();c.translate(W/2,H*.89);c.transform(squeeze,Math.sin(angle)*.025,0,1,0,0);
 // A shallow, source-image turntable. Front/rear use the shipped source views, never a substitute model.
 if(Math.abs(thickness)>1){c.save();c.globalAlpha=.8;for(let n=0;n<4;n++)c.drawImage(im,-w/2+thickness*n/(4*squeeze),-h,w,h);c.restore();}c.drawImage(im,-w/2,-h,w,h);c.restore();c.fillStyle='#77674c';c.textAlign='center';c.font='20px sans-serif';c.fillText(products[workshopDraft.base].name,W/2,H-32);drawCustomInventory();}

let interiorArtAtlas=null;const InteriorArtClips=[[127,19,312,432],[597,54,341,365],[1152,19,206,432],[64,627,437,207],[651,484,234,514],[1136,485,235,513]];
function paintWallDecor(){for(const i of S.design.wallItems)wallClockTransform(i,()=>drawWallArtwork(ctx,i.type));}

function paintPartition(a,b,door,side,index){const p=P(a.x,a.y),q=P(b.x,b.y),colors=Atelier.walls[S.design.vipWall].colors;
 if(door){paintVIPDoor(p,q);return;}const h=28;poly([p,q,{x:q.x,y:q.y-h},{x:p.x,y:p.y-h}],colors[0],'#526b5b');poly([{x:p.x,y:p.y-h},{x:q.x,y:q.y-h},{x:q.x,y:q.y-h-3},{x:p.x,y:p.y-h-3}],'#a48a5c','#75603d');paintVIPWallMaterial(p,q,side,index);for(const v of[p,q]){ctx.fillStyle='#8b7048';ctx.fillRect(v.x-1.5,v.y-h,3,h);}}
function paintVIPDoor(p,q){const im=interiorArtAtlas;if(!im?.complete||!im.naturalWidth)return;const start=p.x<q.x?p:q,end=p.x<q.x?q:p,w=end.x-start.x,h=76,clip=InteriorArtClips[S.vip.zone&&['top','right'].includes(S.vip.zone.doorSide)?5:4],g=S.vip.guest,center={x:(p.x+q.x)/2,y:(p.y+q.y)/2},near=g?Math.hypot(P(g.x,g.y).x-center.x,P(g.x,g.y).y-center.y):Infinity,open=Math.max(0,Math.min(1,(60-near)/35));ctx.save();ctx.translate(start.x,start.y);ctx.transform(1,(end.y-start.y)/w,0,1,0,0);const [sx,sy,sw,sh]=clip;
 // Keep the wooden frame fixed and swing the glass leaf inside it.
 const left=.15,right=.87,top=.08,bottom=.98;function part(x,y,ww,hh){ctx.drawImage(im,sx+x*sw,sy+y*sh,ww*sw,hh*sh,x*w,-h+y*h,ww*w,hh*h);}part(0,0,left,1);part(right,0,1-right,1);part(left,0,right-left,top);part(left,bottom,right-left,1-bottom);
 ctx.save();ctx.translate(left*w,-h+top*h);ctx.transform(Math.cos(open*1.05),Math.sin(open*1.05)*.35,0,1,0,0);ctx.drawImage(im,sx+left*sw,sy+top*sh,(right-left)*sw,(bottom-top)*sh,0,0,(right-left)*w,(bottom-top)*h);ctx.restore();ctx.restore();}

// v3.19 compact navigation and live workshop previews.
const MenuSections={shop:[['영업','business'],['직원','employees'],['미션','missions']],stock:[['악기','instruments'],['이펙터','effects'],['소모품','supplies']],furniture:[['꾸미기','decor'],['제작','craft']],guests:[['손님','visitors'],['단골','relationships'],['VIP','vips']]};
let navExpanded=null,readyGoalKey=null;
function normalizeMenuTab(t){return t==='craft'?'furniture':t;}
function syncMenuLabels(){for(const b of document.querySelectorAll('.tabs [data-tab],.sheet-nav [data-panel-tab]')){const key=b.dataset.tab??b.dataset.panelTab,label=b.querySelector('b');if(label)label.textContent={shop:'운영',stock:'악기',furniture:'상점',guests:'손님'}[key];const active=key===normalizeMenuTab(tab);b.classList.toggle('active',active);b.setAttribute('aria-current',active?'page':'false');}}
function closeMenu(){navExpanded=null;const el=$('menuPopover');if(!el)return;if(el.matches(':popover-open'))el.hidePopover();el.hidden=true;document.querySelectorAll('[data-tab],[data-panel-tab]').forEach(b=>b.setAttribute('aria-expanded','false'));}
function toggleMenu(key,anchor){if(!MenuSections[key])return false;if(navExpanded===key){closeMenu();return false;}closeMenu();const el=$('menuPopover');const dialog=anchor.closest('dialog[open]');(dialog??document.body).append(el);el.innerHTML=MenuSections[key].map(([name,action])=>`<button data-menu-section="${action}">${name}</button>`).join('');el.hidden=false;navExpanded=key;el.style.width='max-content';el.style.maxWidth=(innerWidth-24)+'px';el.style.left='12px';el.style.bottom='12px';el.showPopover();const r=anchor.getBoundingClientRect(),w=el.getBoundingClientRect().width;el.style.left=Math.max(12,Math.min(innerWidth-w-12,r.x+r.width/2-w/2))+'px';el.style.bottom=Math.max(12,innerHeight-r.top+8)+'px';anchor.setAttribute('aria-expanded','true');return true;}
function before23OpenMenuSection(section){closeMenu();for(const d of document.querySelectorAll('dialog[open]'))if(d.id!=='management'&&!['settlement','endingModal'].includes(d.id))d.close();if(section==='employees'){setTab('shop');openStaffManagement();return true;}if(section==='missions'){openMissions();return true;}if(section==='business'){setTab('shop');return true;}if(section==='records'){setTab('report');return true;}if(['instruments','effects','supplies'].includes(section)){stockStatus='all';stockFilter={instruments:'instrument',effects:'effect',supplies:'strings'}[section];instrumentFilter='all';setTab('stock');return true;}if(section==='decor'){setTab('furniture');return true;}if(section==='craft'){setTab('craft');return true;}if(['visitors','relationships','stories','vips'].includes(section)){guestView={visitors:'visiting',relationships:'regulars',stories:'story',vips:'vip'}[section];setTab('guests');return true;}return false;}
function craftHome(){if(S.stage<6)return '<p class="empty-note">7단계 해금</p>';const benches=S.furniture.filter(f=>f.t===11);return `<button data-build="11" ${S.phase!=='prepare'||!canBuyFurniture(11)?'disabled':''}>제작대 설치 · 200만 원</button><div class="bench-choice-grid">${benches.map(f=>`<button class="catalog-card" data-workbench="${f.id}">${furnitureIcon(11)}<b>제작대 #${f.id} · ${benchLevel(f.id)}등급</b></button>`).join('')}</div><h3>완성 악기 ${S.custom.items.length}/12</h3>${customInventoryHTML()}`;}

function drawCraftHome(){const el=$('craftHero');if(el){const c=el.getContext('2d');c.clearRect(0,0,150,240);c.save();c.translate(75,225);miniCustom(c,{base:0,options:customDefaults()},210);c.restore();}drawCustomInventory();}
function syncMissionToast(){const completed=['growth','challenge'].map(l=>activeMission(l)).filter(m=>m&&missionStatus(m).ready).map(m=>m.id).join('|');if(readyGoalKey===null){readyGoalKey=completed;return;}if(completed&&completed!==readyGoalKey)toast('미션 목표 달성 · 운영 → 미션에서 보상을 받으세요');readyGoalKey=completed;}
function refreshCustomPreview(){if(!workshopDraft||!$('customModel'))return;drawCustomModel();const q=customQuote(workshopDraft),box=$('workshopBody').querySelector('.custom-price');if(box)box.innerHTML=customPriceHTML(q,workshopDraft);const b=$('workshopBody').querySelector('[data-atelier="craft-finish"]');if(b)b.disabled=S.phase!=='prepare'||editing!==null||!!benchJob(currentWorkbench()?.id)||!q||S.stock[workshopDraft.base]<1||S.money<(q?.craftCost??Infinity)||S.custom.items.length+S.custom.jobs.length>=12;}

function setCustomDraftOption(key,value){if(!workshopDraft)return false;if(key==='base'){const n=Number(value);if(!customBases().includes(n))return false;workshopDraft.base=n;workshopDraft.options=normalizedCustomOptions(n,workshopDraft.options);renderWorkshop();return true;}const row=customOptionsFor(workshopDraft.base)[key]?.find(o=>o[0]===value&&customOptionAvailable(o));if(!row)return false;workshopDraft.options[key]=value;refreshCustomPreview();return true;}


let wallDetailAtlas=null;const WallDetailClips=[[138,82,690,713],[1103,108,449,632]];
function wallClockTransform(i,paint){const q=i.wall==='x'?P(i.slot*2+1,-.5):P(-.5,i.slot*2+1);ctx.save();ctx.translate(q.x,q.y+17);ctx.transform(1,i.wall==='x'?.5:-.5,0,1,0,0);paint();ctx.restore();}

function paintWallClockHands(){for(const i of S.design.wallItems.filter(i=>i.type==='clock'))wallClockTransform(i,()=>{ctx.save();ctx.translate(0,-63);ctx.fillStyle='#eee2c9';ctx.beginPath();ctx.arc(0,0,10.5,0,Math.PI*2);ctx.fill();const minute=600+S.time/Config.daySeconds*600;ctx.strokeStyle='#4b4031';ctx.lineCap='round';for(const [angle,len,width]of [[minute/60%12/12*Math.PI*2,6,1.1],[minute%60/60*Math.PI*2,9,.7]]){ctx.save();ctx.rotate(angle);ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(0,1);ctx.lineTo(0,-len);ctx.stroke();ctx.restore();}ctx.restore();});}


// VIP sales and seating share the real routes, inventory, payroll and ledger.
const VIPStaff={hireCost:800000,wage:40000};
const AcousticOptions={pickguard:[['none','없음',0,0],['tortoise','토터스',90000,0],['ivory','아이보리',150000,1]],rosette:[['simple','기본 링',0,0],['wood','우드 링',90000,1],['pearl','자개 링',180000,2]],bridge:[['rosewood','로즈우드',0,0],['ebony','에보니',140000,1],['walnut','월넛',180000,2]]};
const LoungeArt=[[[20, 34, 659, 390], [715, 42, 684, 394], [1446, 33, 298, 397]], [[21, 462, 655, 396], [714, 457, 684, 421], [1453, 497, 293, 366]]],People320Clips=[[[64, 3, 91, 173], [251, 2, 74, 173], [419, 4, 81, 172], [602, 3, 90, 172], [790, 2, 73, 172], [958, 3, 90, 172], [1148, 4, 92, 170], [1330, 3, 70, 171], [1499, 3, 88, 172], [1690, 18, 77, 156], [1866, 17, 81, 154], [2035, 20, 90, 151]], [[64, 185, 91, 173], [252, 183, 71, 174], [422, 185, 79, 172], [602, 184, 90, 173], [790, 184, 72, 172], [963, 185, 85, 171], [1148, 185, 92, 171], [1330, 185, 70, 171], [1500, 185, 87, 171], [1690, 201, 77, 154], [1865, 201, 82, 152], [2034, 205, 91, 148]], [[65, 367, 87, 171], [250, 366, 74, 171], [420, 367, 80, 171], [601, 367, 84, 170], [791, 366, 71, 170], [960, 367, 87, 169], [1147, 367, 92, 169], [1332, 367, 71, 169], [1499, 367, 88, 169], [1689, 386, 82, 150], [1863, 387, 84, 146], [2031, 389, 94, 145]], [[63, 547, 91, 173], [252, 545, 72, 174], [422, 547, 80, 172], [603, 547, 89, 172], [791, 546, 72, 172], [962, 547, 86, 172], [1148, 547, 92, 171], [1329, 547, 71, 171], [1500, 547, 87, 172], [1690, 563, 77, 156], [1865, 563, 82, 152], [2034, 568, 92, 148]]];
const HorizontalArt=[[[34, 56, 823, 383], [919, 8, 823, 431]], [[33, 492, 820, 383], [921, 460, 819, 426]]];let loungeAtlas=null,people320Atlas=null,horizontalAtlas=null;

Atelier.profiles.push(
 {name:'도윤',role:'핑거스타일 연주자',family:'acoustic',color:'forest',wood:'walnut',pickup:'standard',budget:9000000,quote:'나무의 울림이 잘 살아 있는 악기를 찾고 있어요.'},
 {name:'유진',role:'재즈 기타리스트',family:'electric',color:'wine',wood:'mahogany',pickup:'vintage',budget:13000000,quote:'따뜻하고 깊은 음색이 좋아요.'},
 {name:'해솔',role:'싱어송라이터',family:'acoustic',color:'ivory',wood:'ash',pickup:'standard',budget:14000000,quote:'노래와 함께할 특별한 기타를 보고 싶어요.'}
);
function isVIPProduct(i){return products[i]?.kind==='instrument'&&products[i].family!=='drums'&&products[i].tier>=4;}
function pVIPAsset(i){return isVIPProduct(i)||[0,1,27,28].includes(i);}
function customOptionsFor(base){const family=products[base]?.family??'electric',acoustic=family==='acoustic',p=PremiumOptions[family]??PremiumOptions.electric;let options=acoustic?{color:Atelier.options.color,wood:Atelier.options.wood,...AcousticOptions,hardware:Atelier.options.hardware,finish:Atelier.options.finish}:{...Atelier.options};options=Object.fromEntries(Object.entries(options).map(([k,a])=>[k,[...a]]));if(!acoustic){options.color.push(['pearl','펄 도장',500000,1,'#c0b5d2'],['metallic','메탈릭 도장',800000,1,'#7996a4'],['shift','컬러시프트',1800000,2,'#7c5daa']);options.hardware.push(['brass','브러시드 황동',600000,1]);options.finish.push(['engraved','핸드 인그레이빙',2500000,2]);if(family==='bass')options.finish.push(['openpore','오픈포어',500000,1]);options.pickup.push(...p.pickup);}else{options.color.push(['sunburst','선버스트',800000,1,'#b67c37']);options.rosette.push(['abalone','자개 로제트',1200000,2]);}
 for(const [key,rows]of Object.entries(p))if(key!=='pickup')options[key]=rows;return options;
}

function normalizedCustomOptions(base,prior={},level=benchLevel()){return Object.fromEntries(Object.entries(customOptionsFor(base)).map(([key,rows])=>[key,rows.some(o=>o[0]===prior[key]&&o[3]<level)?prior[key]:rows[0][0]]));}



function vipDailyLimit(){return S.stage>=6?3:2;}
function wideVIP(f,z=S.vip.zone){return Furniture.cells(f).every(p=>inVIP(p,z))&&inVIP(Furniture.front(f),z);}
let vipReadinessKey='',vipReadinessValue=[];
function cachedVIPRequirements(){
 if(S.stage<4)return ['5단계에서 열려요'];if(!S.vip.zone)return ['VIP구역을 드래그로 지정하세요'];const out=[],error=zoneError(S.vip.zone);if(error)out.push(error);
 for(const [t,label]of [[15,'최고급·명품 진열대'],[13,'VIP 시연석']]){const fs=S.furniture.filter(f=>f.t===t&&wideVIP(f));if(!fs.length)out.push(label+' 배치 필요');else if(!fs.some(f=>vipNear(f)))out.push(label+' 앞 통로 확보');}
 if(!S.furniture.some(f=>f.t===14&&wideVIP(f)))out.push('상담 테이블 배치 필요');else if(!vipDeskCandidates().length)out.push('상담 테이블과 직원 자리 통로 확보');if(!S.vip.hired)out.push('VIP 직원 미채용');return out;
}

function hireVIPStaff(){if(S.stage<4||S.vip.hired||S.phase!=='prepare'||editing!==null||S.money<VIPStaff.hireCost+setupReserve(-1)+settlementCushion(VIPStaff.wage))return false;S.money-=VIPStaff.hireCost;S.expenses+=VIPStaff.hireCost;S.vip.hired=true;vipEmployeeActor=null;expansionChanged();return true;}
function dismissVIPStaff(){if(!S.vip.hired||S.phase!=='prepare'||S.vip.guest||editing!==null)return false;S.vip.hired=false;vipEmployeeActor=null;expansionChanged();return true;}
function setVIPDisplay(id,slot,product){
 if(S.phase!=='prepare'||editing!==null||slot!==0)return false;const f=S.furniture.find(f=>f.id===id&&f.t===15);if(!f)return false;const old=f.vipSlots?.[0]??null;if(product===old)return true;
 if(product!==null&&(!isVIPProduct(product)||!productUnlocked(product)||!wideVIP(f)||S.stock[product]<1))return false;
 if(old!==null&&!Number.isSafeInteger(S.stock[old]+1))return false;if(product!==null&&!assetGate(productAssetKeys(product),()=>{if(setVIPDisplay(id,slot,product)&&$('customDisplayDialog').open)openVIPDisplays();}))return false;
 if(old!==null)S.stock[old]++;if(product!==null)S.stock[product]--;f.vipSlots=[product];expansionChanged();return true;
}


function vipOffers(){
 const out=displayedCustoms().map(i=>({...i,kind:'custom'}));for(const f of S.furniture.filter(f=>f.t===15&&wideVIP(f)&&vipNear(f))){const base=f.vipSlots?.[0];if(!isVIPProduct(base)||!productUnlocked(base))continue;out.push({kind:'normal',base,price:products[base].price,displayId:f.id,displaySlot:0,options:{}});}return out;
}


function selectedVIPOffer(g){return g.kind==='normal'?vipOffers().find(i=>i.kind==='normal'&&i.base===g.product&&i.displayId===g.displayId&&i.displaySlot===g.displaySlot):vipOffers().find(i=>i.kind==='custom'&&i.id===g.itemId);}

let vipEmployeeActor=null,vipEmployeeKey='';
function vipStaffHome(){return vipDeskFor()?.staff??null;}
function vipEmployee(){if(!S.vip.hired||!S.vip.zone)return null;const home=vipStaffHome();if(!home)return null;const key=JSON.stringify([S.day,S.vip.zone,S.furniture.map(f=>[f.id,f.x,f.y,f.dir])]);if(!vipEmployeeActor||key!==vipEmployeeKey){vipEmployeeKey=key;vipEmployeeActor={...home,path:[],state:'대기',gait:0,facing:5,walkSpeed:2.9};}return vipEmployeeActor;}
function updateVIPEmployee(dt){
 const e=vipEmployee();if(!e)return;const g=S.vip.guest,home=vipStaffHome();let target=home,state='대기';if(g&&g.state!=='leave'){
  if(g.state==='consult'){const desk=vipDeskFor(g);if(desk){target=desk.staff;state='상담·결제';}}
  else{const front=g.state==='enter'?vipDoor().inside:Furniture.front(S.furniture.find(f=>f.id===g.stationId)??{x:g.x,y:g.y,dir:0});state=g.state==='enter'?'입장 안내':g.state==='try'?'시연 안내':'악기 안내';const candidates=[{x:front.x+1,y:front.y},{x:front.x-1,y:front.y},{x:front.x,y:front.y+1},{x:front.x,y:front.y-1}].filter(p=>inVIP(p)&&!S.furniture.some(f=>Furniture.blocks(f,p.x,p.y)));target=candidates.find(p=>e.targetKey===p.x+','+p.y)??candidates.find(p=>vipPath(e,p))??home;}
 }
 if(!target)return;const key=target.x+','+target.y;if(e.targetKey!==key){e.path=vipPath(e,target)??[];e.targetKey=key;}e.state=state;e.lookTarget=g?{x:g.x,y:g.y}:null;Motion.advance(e,dt);
}
function people320Frame(row,dir,gait,moving,seated=false){const facing=dir===4||dir===6?2:[2,3,7].includes(dir)?1:0,col=seated?9+facing:facing*3+(moving?[0,1,2,1][((Math.floor(gait*4)%4)+4)%4]:1),clip=People320Clips[row][col];return {image:people320Atlas,clip,sourceHeight:clip[3],anchor:.5,footMargin:0,flip:dir===1||dir===3||dir===6,natural:true};}

function drawVIPEmployee(e){if(!people320Atlas?.complete)return;const q=P(e.x,e.y);ctx.save();ctx.translate(q.x,q.y);ctx.scale(Config.characterScale,Config.characterScale);drawFullCharacter(ctx,people320Frame(3,e.facing,e.gait,e.moving),77,e.gait,e.moving,e.animationWeight??1);text('VIP 직원',0,-85,9,'#e7d9af');ctx.restore();}
function paintSeated(c,frame,height=61){if(!frame.image?.complete||!frame.image.naturalWidth)return;drawFullCharacter(c,frame,height,0,false,0);}
const seatedLegacyCache=new WeakMap();
function seatedLegacyFrame(frame,dir){let cache=seatedLegacyCache.get(frame.image);const cacheKey=JSON.stringify([frame.clip,frame.flip,dir]);if(cache?.has(cacheKey))return cache.get(cacheKey);const body=people320Frame(0,dir,0,false,true);if(!body.image?.complete||!frame.image?.complete)return body;const cv=document.createElement('canvas');cv.width=120;cv.height=150;const c=cv.getContext('2d');c.translate(60,148);paintSeated(c,body,130);const [x,y,w,h]=frame.clip,top=.60,dh=190*top,dw=dh*w/(h*top);c.drawImage(frame.image,x,y,w,h*top,-dw/2,-150,dw,dh);cv.complete=true;cv.naturalWidth=120;cv.naturalHeight=150;const result={image:cv,clip:[0,0,120,150],sourceHeight:150,anchor:.5,footMargin:0,flip:frame.flip,natural:true};if(!cache){cache=new Map();seatedLegacyCache.set(frame.image,cache);}if(cache.size>=24)cache.delete(cache.keys().next().value);cache.set(cacheKey,result);return result;}

function tryRest(p){if(p.rested||p.companion||p.special||S.phase!=='open'||S.time>90)return false;p.rested=true;if(Math.random()>.3)return false;for(const f of S.furniture.filter(f=>f.t===16&&!inVIP(f)&&!people.some(q=>q!==p&&q.restChair===f.id))){const n=near(f,p);if(!n)continue;p.restChair=f.id;p.restOrigin={state:p.state,stationId:p.stationId,target:p.target};p.path=n.path;p.state='rest';p.seatPhase='approach';p.seated=false;p.timer=0;p.bubble='잠깐 쉬었다 갈게요';return true;}return false;}
function updateRest(p,dt){if(p.state!=='rest')return false;const f=S.furniture.find(f=>f.id===p.restChair&&f.t===16);if(!f){finishRest(p);return true;}if(S.phase==='closing'&&(p.seatPhase??'approach')==='approach'){p.path=[];finishRest(p);return true;}if(advanceSeating(p,f,dt,4,S.phase==='closing'))finishRest(p);return true;}
function finishRest(p){p.seated=false;delete p.seatPhase;delete p.restChair;const origin=p.restOrigin;delete p.restOrigin;p.state=origin?.state??'browse';p.stationId=origin?.stationId??null;p.target=origin?.target??null;p.timer=0;p.path=[];p.bubble='다시 살펴볼까?';finishBrowse(p);}
function drawSeatedCustomer(p){const f=S.furniture.find(f=>f.id===p.restChair);if(!f)return;const q=P(p.x,p.y),dir=Furniture.direction(f),frame=walkSprite(visualActor(p),dir,0,false,false);ctx.save();ctx.translate(q.x,q.y);ctx.scale((p.scale??1)*Config.characterScale,(p.scale??1)*Config.characterScale);paintSeated(ctx,seatedLegacyFrame(frame,dir),59);ctx.restore();}


function openVIPDisplays(){
 hideFurnitureQuick();$('displayHeading').textContent='최고급·명품 진열';$('customDisplayBody').innerHTML=`<p class="sub">악기 1개씩 배정 · 회수하면 보관 재고로 반환 · 판매 시 진열대 비움</p>${S.furniture.filter(f=>f.t===15).map(f=>{const current=f.vipSlots?.[0]??null,inside=wideVIP(f);return `<section class="operation-card"><h3>진열대 #${f.id}${inside?'':' · VIP 구역 밖'}</h3><label class="vip-slot">악기<select data-vip-display="${f.id}:0" ${S.phase!=='prepare'||editing!==null?'disabled':''}><option value="" ${current===null?'selected':''}>${current===null?'비움':'보관으로 회수'}</option>${products.map((p,i)=>({p,i})).filter(({i})=>isVIPProduct(i)&&productUnlocked(i)).map(({p,i})=>`<option value="${i}" ${current===i?'selected':''} ${!inside||current!==i&&S.stock[i]<1?'disabled':''}>${p.name} · 보관 ${S.stock[i]}${current===i?' · 배정됨':''}</option>`).join('')}</select></label></section>`;}).join('')||'<p>최고급·명품 진열대를 먼저 놓아주세요.</p>'}`;if(!$('customDisplayDialog').open)$('customDisplayDialog').showModal();
}
function vipStatusHTML(){const missing=vipRequirements();return `<div class="vip-status"><b>${missing.length?'VIP 준비 중':'영업 가능 · 하루 최대 '+vipDailyLimit()+'명'}</b>${missing.length?`<p>${escapeHTML(missing.join(' · '))}</p>`:''}<div class="atelier-actions"><button data-vip-staff="manage">직원</button><button data-atelier="vip-displays">진열</button></div></div>`;}


function legacyCustomTexture(item,rear=false){
 if(products[item.base].family!=='acoustic')return electricCustomTexture(item,rear);const key='acoustic:'+JSON.stringify([item.base,item.options,rear]);if(customTextureCache.has(key))return customTextureCache.get(key);const art=InstrumentArtV340[item.base],im=instrumentAtlases[art.atlas],clip=art.clips[rear?1:0];if(!im?.complete||!im.naturalWidth)return null;const cv=document.createElement('canvas');cv.width=clip[2];cv.height=clip[3];const W=cv.width,H=cv.height,c=cv.getContext('2d'),o=item.options;c.drawImage(im,...clip,0,0,W,H);
 const mask=makeCustomMask(W,H,rear,false,item.base),wood={alder:['#d8b480','#8f6740',.035],ash:['#ead2a0','#9b7d51',.055],walnut:['#aa8059','#4d392b',.025],mahogany:['#cb926d','#794532',.043]}[o.wood],color=Atelier.options.color.find(a=>a[0]===o.color)?.[4]??'#9c4148';c.save();c.scale(W,H);c.clip(mask);c.globalCompositeOperation='color';c.fillStyle=color;c.fillRect(0,.44,1,.56);c.globalCompositeOperation='soft-light';c.fillStyle=wood[0];c.globalAlpha=.55;c.fillRect(0,.44,1,.56);c.globalCompositeOperation='multiply';c.strokeStyle=wood[1];c.lineWidth=.005;c.globalAlpha=.45;for(let x=.03;x<1;x+=wood[2]){c.beginPath();c.moveTo(x,.44);c.bezierCurveTo(x+.02,.6,x-.015,.8,x,1);c.stroke();}c.globalCompositeOperation='source-over';c.globalAlpha=1;if(o.finish==='gloss'){const g=c.createLinearGradient(0,0,W/W,1);g.addColorStop(0,'#ffffff00');g.addColorStop(.5,'#ffffff70');g.addColorStop(.65,'#ffffff00');c.fillStyle=g;c.fillRect(0,.44,1,.56);}else if(o.finish==='relic'){c.strokeStyle='#e3bd87';c.lineWidth=.009;for(let n=0;n<10;n++){c.beginPath();c.moveTo(.1+n*.009,.87+n*.003);c.lineTo(.13+n*.009,.84+n*.003);c.stroke();}}else{c.fillStyle='#f3edd51c';c.fillRect(0,.44,1,.56);}c.restore();
 if(!rear){c.save();c.scale(W,H);if(o.pickguard!=='none'){c.fillStyle=o.pickguard==='ivory'?'#e4d9b3':'#693b2c';c.strokeStyle='#3c3024';c.lineWidth=.004;c.beginPath();c.moveTo(.67,.61);c.bezierCurveTo(.88,.66,.83,.79,.65,.80);c.lineTo(.60,.73);c.bezierCurveTo(.70,.72,.72,.66,.67,.61);c.fill();c.stroke();if(o.pickguard==='tortoise'){c.fillStyle='#c58c5e';for(const [x,y]of[[.73,.69],[.75,.73],[.69,.76]]){c.beginPath();c.ellipse(x,y,.018,.012,.4,0,Math.PI*2);c.fill();}}}if(o.rosette!=='simple'){c.strokeStyle=o.rosette==='pearl'?'#c9e0ce':'#7a5133';c.lineWidth=o.rosette==='pearl'?.014:.009;c.beginPath();c.ellipse(.50,.65,.155,.067,0,0,Math.PI*2);c.stroke();if(o.rosette==='pearl'){c.strokeStyle='#b69a56';c.lineWidth=.003;c.stroke();}}if(o.bridge!=='rosewood'){c.globalCompositeOperation='color';c.fillStyle=o.bridge==='ebony'?'#252b2c':'#9d7049';c.beginPath();c.moveTo(.28,.834);c.quadraticCurveTo(.50,.85,.73,.834);c.lineTo(.71,.86);c.quadraticCurveTo(.50,.88,.30,.86);c.closePath();c.fill();c.globalCompositeOperation='source-over';c.strokeStyle='#ddd3ae';c.lineWidth=.004;c.beginPath();c.moveTo(.35,.841);c.lineTo(.65,.841);c.stroke();}c.restore();}
 if(o.hardware!=='chrome'){c.save();c.scale(W,H);c.globalCompositeOperation=o.hardware==='black'?'multiply':'color';c.fillStyle=o.hardware==='gold'?'#d9b653':'#3e484c';for(let n=0;n<3;n++)for(const x of [.37,.63]){c.beginPath();c.ellipse(x,.045+n*.037,.037,.010,0,0,Math.PI*2);c.fill();}c.restore();}
 c.globalCompositeOperation='destination-in';c.drawImage(im,...clip,0,0,W,H);c.globalCompositeOperation='source-over';if(customTextureCache.size>=72)customTextureCache.delete(customTextureCache.keys().next().value);customTextureCache.set(key,cv);return cv;
}
const loungeSpriteCache=new Map();
function legacyLoungeFurnitureSprite(f){
 const dir=Furniture.direction(f),chair=f.t===16,row=dir>=2?1:0,clip=chair?LoungeArt[row][2]:HorizontalArt[row][f.t===12?0:1],image=chair?loungeAtlas:horizontalAtlas,q=P(f.x+(chair||f.legacyCompact?0:[0,2].includes(dir)?1:0),f.y+(chair||f.legacyCompact?0:[1,3].includes(dir)?1:0));
 const item=f.t===12?S.custom.items.find(i=>i.displayId===f.id):null,base=f.t===15?f.vipSlots?.[0]:null,key=JSON.stringify([f.t,dir,f.legacyCompact,image?.complete&&image.naturalWidth,item,base]);let cv=loungeSpriteCache.get(key);if(!cv){cv=document.createElement('canvas');cv.width=400;cv.height=360;const c=cv.getContext('2d');c.scale(2,2);c.translate(100,130);if(image?.complete&&image.naturalWidth){c.save();if(dir===1||dir===3)c.scale(-1,1);if(f.legacyCompact)c.scale(.55,.55);if(chair){c.drawImage(image,...clip,-21,-43,42,53);}else{c.save();if(row===0)c.scale(-1,1);c.transform(1,row===0?-.34:.34,0,1,0,0);c.drawImage(image,...clip,-65,-48,130,55);c.restore();if(item||Number.isInteger(base)){c.save();c.transform(1,.5,0,.55,0,-42);c.translate(47,0);c.rotate(-Math.PI/2);if(item)miniCustom(c,item,94,row===1);else drawProduct(c,base,-18,-94,36,94,row===1,true);c.restore();}}c.restore();}cv.complete=true;cv.naturalWidth=400;cv.naturalHeight=360;if(loungeSpriteCache.size>=16)loungeSpriteCache.delete(loungeSpriteCache.keys().next().value);loungeSpriteCache.set(key,cv);}return {image:cv,sx:0,sy:0,sw:400,sh:360,flip:false,rect:{x:q.x-100,y:q.y-130,w:200,h:180}};
}
function migrateLegacyVIPSave(v){
 for(const key of ['stock'])if(Array.isArray(v[key])&&v[key].length===27)v[key].push(0,0);if(v.missionStats?.sales?.length===27)v.missionStats.sales.push(0,0);if(v.staffPolicy?.products?.length===27)v.staffPolicy.products.push({enabled:true,quantity:1,at:1},{enabled:true,quantity:1,at:1});
 if(v.vip){v.vip.hired=false;v.vip.normalSales=0;v.vip.normalRevenue=0;v.vip.dailyDay=v.vip.visitedDay;v.vip.dailyCount=v.vip.visitedDay===v.day?1:0;v.vip.nextVisitAt=(v.time??0)+3;v.vip.guest=v.vip.guest?{...v.vip.guest,kind:'custom'}:null;}
 if(Array.isArray(v.custom?.items))for(const i of v.custom.items)i.displaySlot=i.displayId===null?null:0;
 if(Array.isArray(v.furniture)){for(const f of v.furniture){if(f.t===0){if(isVIPProduct(f.p))f.p=null;if(isVIPProduct(f.p2))f.p2=null;}if(f.t===12){f.legacyCompact=true;}}}
 // Preserve old installed displays and layout; they gain their 3-tile footprint when moved.
 if(Array.isArray(v.guests))for(const p of v.guests)if(isVIPProduct(p.product)||(p.basket??[]).some(isVIPProduct)){p.basket=(p.basket??[]).filter(i=>!isVIPProduct(i));if(!p.basket.length)p.intent=false;}
 v.repathGuests=true;
}
function validateVIPExtras(v,s,rules){
 const vip=v.vip??expansionDefaults().vip,fail=t=>{throw Error(t)},safe=n=>Number.isSafeInteger(n)&&n>=0&&n<=1e15;
 if(typeof(vip.hired??false)!=='boolean'||vip.hired&&s.stage<4)fail('VIP 직원');for(const k of ['normalSales','normalRevenue','dailyDay','dailyCount'])if(!safe(vip[k]??0))fail('VIP 운영 기록');if((vip.dailyDay??0)>s.day||(vip.dailyCount??0)>3||!Number.isFinite(vip.nextVisitAt??20)||(vip.nextVisitAt??20)<0||(vip.nextVisitAt??20)>1000)fail('VIP 방문 횟수');if((vip.normalSales??0)+s.custom.vipSold!==s.vip.sales||(vip.normalRevenue??0)+s.custom.vipRevenue!==s.vip.revenue)fail('VIP 판매 합계');
 Object.assign(s.vip,{hired:vip.hired??false,normalSales:vip.normalSales??0,normalRevenue:vip.normalRevenue??0,dailyDay:vip.dailyDay??0,dailyCount:vip.dailyCount??0,nextVisitAt:vip.nextVisitAt??20});
 const occupied=new Set();for(const item of s.custom.items){const source=v.custom.items.find(i=>i.id===item.id);item.displaySlot=item.displayId===null?null:(source.displaySlot??0);if(item.displayId!==null){const k=item.displayId+':'+item.displaySlot;if(!Number.isInteger(item.displaySlot)||item.displaySlot<0||item.displaySlot>0||occupied.has(k))fail('커스텀 진열 칸');occupied.add(k);}}
 for(const f of s.furniture){if(f.legacyCompact!==undefined&&(f.t!==12||f.legacyCompact!==true))fail('이전 진열대');if(f.t===15){const a=f.vipSlots??[null];if(!Array.isArray(a)||a.length!==1||a.some(i=>i!==null&&(!Number.isInteger(i)||!isVIPProduct(i)||products[i].unlock>s.stage)))fail('VIP 진열 상품');f.vipSlots=[...a];}}
 if(s.vip.guest){const g=s.vip.guest;if(!['custom','normal'].includes(g.kind))fail('VIP 상품 종류');if(g.kind==='normal'&&(!isVIPProduct(g.product)||!Number.isInteger(g.displaySlot)||g.displaySlot<0||g.displaySlot>0))fail('VIP 상품 선택');}
 for(const p of s.guests){if(p.state==='rest'){if(!Number.isSafeInteger(p.restChair)||!s.furniture.some(f=>f.id===p.restChair&&f.t===16)||!p.restOrigin||!['browse','try'].includes(p.restOrigin.state))fail('휴식 의자');}else if(p.seated)fail('착석 상태');}
}
function renderStaffManagement(){
 if(employeeTab!=='vip'){renderBaseStaffManagement();const total=$('staffManagementContent').querySelector('.employee-payroll b');if(total)total.textContent='직원 '+(S.staffHired+S.cashierHired+Number(S.vip.hired))+'명';const tabs=$('staffManagementContent').querySelector('.employee-tabs');if(tabs)tabs.insertAdjacentHTML('beforeend','<button data-employee-tab="vip" aria-pressed="false">VIP 직원</button>');return;}
 const hired=S.vip.hired,ready=S.phase==='prepare'&&editing===null,canHire=ready&&S.stage>=4&&!hired&&S.money>=VIPStaff.hireCost+setupReserve(-1)+settlementCushion(VIPStaff.wage);
 $('staffManagementContent').innerHTML=`<div class="employee-payroll"><b>직원 ${S.staffHired+S.cashierHired+Number(hired)}명</b><span>하루 일급 ${money(staffWage())}</span></div><div class="employee-tabs">${[['inventory','재고 직원'],['cashier','계산 직원'],['vip','VIP 직원']].map(([key,label])=>`<button data-employee-tab="${key}" aria-pressed="${key==='vip'}">${label}</button>`).join('')}</div><section class="operation-card vip-staff-card"><canvas id="vipStaffPortrait" width="100" height="140"></canvas><div><h3>VIP 전용 직원</h3><p>${S.stage<4?'5단계 해금':hired?(S.vip.guest?'VIP 응대 중':'VIP 영업 대기'):'미채용 · VIP 영업 중단'}</p><small>채용비 ${money(VIPStaff.hireCost)} · 일급 ${money(VIPStaff.wage)}</small></div></section>${hired?`<button data-employee-action="dismiss" ${!ready||S.vip.guest?'disabled':''}>퇴사 처리</button>`:`<button class="primary" data-employee-action="hire" ${canHire?'':'disabled'}>채용하기</button>`}`;
 const cv=$('vipStaffPortrait'),c=cv.getContext('2d');c.translate(50,136);if(people320Atlas?.complete)drawFullCharacter(c,people320Frame(3,0,0,false),125);
}

// One fixed-size room, one allocated instrument per case, and shared consultation stations.




function vipReservedCount(base){return S.furniture.filter(f=>f.t===15&&f.vipSlots?.[0]===base).length;}
function stockCount(base){return S.stock[base]+vipReservedCount(base);}
function stockLabel(base){return isVIPProduct(base)?'보관 '+S.stock[base]+' · 진열 '+vipReservedCount(base):'재고 '+S.stock[base];}




let vipDeskCacheKey='',vipDeskCache=[];
function vipDeskCandidates(){
 const key=JSON.stringify([N,M,ENTRY,S.vip.zone,S.furniture.map(f=>[f.id,f.t,f.x,f.y,f.dir,f.legacyCompact])]);if(key===vipDeskCacheKey)return vipDeskCache;
 const candidates=[];for(const f of S.furniture.filter(f=>f.t===14&&wideVIP(f))){const customer=Furniture.front(f);if(!vipPath(ENTRY,customer))continue;const [dx,dy]=Furniture.vectors[Furniture.direction(f)];for(const sign of [1,-1]){const staff={x:customer.x+dy*sign,y:customer.y-dx*sign};if(inVIP(staff)&&!S.furniture.some(q=>Furniture.blocks(q,staff.x,staff.y))&&vipPath(ENTRY,staff)){candidates.push({deskId:f.id,customer,staff});break;}}}
 vipDeskCacheKey=key;vipDeskCache=candidates;return candidates;
}
function vipDeskFor(g=S.vip.guest){const all=vipDeskCandidates(),id=g?.consultDeskId??(g?.state==='consult'?g.stationId:null);return all.find(c=>c.deskId===id)??all[0]??null;}



function seatRoute(from,via,to){return [...axisConnector(from,via),...axisConnector(via,to)];}
function advanceSeating(p,f,dt,holdSeconds,finishEarly=false){
 p.seatPhase??='approach';if(p.path.length){Motion.advance(p,dt);if(p.path.length)return false;}else Motion.settle(p,dt);
 const front=Furniture.front(f),entry=Furniture.seatEntry(f),seat=Furniture.seat(f);
 if(p.seatPhase==='approach'){p.seatPhase='enter';p.path=seatRoute(p,entry,seat);p.timer=0;p.seated=false;}
 else if(p.seatPhase==='enter'){p.seatPhase='sitting';p.seated=true;p.timer=0;p.lookTarget=front;}
 else if(p.seatPhase==='sitting'){p.timer+=dt;if(p.timer>=holdSeconds||finishEarly){p.seated=false;p.seatPhase='rise';p.timer=0;p.lookTarget=front;}}
 else if(p.seatPhase==='rise'){p.timer+=dt;if(p.timer>=.2){p.seatPhase='exit';p.path=seatRoute(p,entry,front);p.timer=0;}}
 else if(p.seatPhase==='exit'){delete p.seatPhase;delete p.seated;return true;}
 return false;
}






function migrateVIPSave(v,version=0){
 if(version<24)migrateLegacyVIPSave(v);
 if(v.vip?.guest?.kind==='custom'&&v.vip.guest.product===undefined)v.vip.guest.product=v.custom?.items?.find(i=>i.id===v.vip.guest.itemId)?.base;
 if(Array.isArray(v.stock)&&Array.isArray(v.furniture))for(const f of v.furniture){if(f.t!==15||!Array.isArray(f.vipSlots)||f.vipSlots.length!==1)continue;const base=f.vipSlots[0];if(!isVIPProduct(base)||!Number.isSafeInteger(v.stock[base])||v.stock[base]<0)continue;if(v.stock[base]>0)v.stock[base]--;else f.vipSlots[0]=null;}
 const migrateSeat=(p,chairId)=>{const f=v.furniture?.find(f=>f.id===chairId);if(!f)return;if(p.seated||p.state==='try'&&!p.path?.length){const seat=Furniture.seat(f);p.x=seat.x;p.y=seat.y;p.path=[];p.seated=true;p.seatPhase='sitting';}else{p.seated=false;p.seatPhase='approach';}};
 for(const p of v.guests??[])if(p.state==='rest')migrateSeat(p,p.restChair);
 if(v.vip?.guest?.state==='try')migrateSeat(v.vip.guest,v.vip.guest.stationId);
}
function validateNewVIPState(v,s){
 const phases=['approach','enter','sitting','rise','exit'],validSeat=(p,f)=>{if(!phases.includes(p.seatPhase)||typeof p.seated!=='boolean'||!f)throw Error('착석 이동 상태');if(p.seated!==(p.seatPhase==='sitting'))throw Error('착석 자세');if(['sitting','rise'].includes(p.seatPhase)){const pos=Furniture.seat(f);if(p.path.length||Math.hypot(p.x-pos.x,p.y-pos.y)>1e-6)throw Error('착석 위치');}};
 const occupied=new Set();for(const p of s.guests){if(p.state==='rest'){const f=s.furniture.find(f=>f.t===16&&f.id===p.restChair);validSeat(p,f);if(occupied.has(f.id))throw Error('휴식 의자 중복');occupied.add(f.id);}else if(p.seatPhase!==undefined)throw Error('이동 상태');}
 if(s.vip.guest){const g=s.vip.guest,raw=v.vip.guest;g.consultDeskId=raw.consultDeskId;if(g.consultDeskId!==undefined&&(!Number.isSafeInteger(g.consultDeskId)||!s.furniture.some(f=>f.id===g.consultDeskId&&f.t===14)))throw Error('VIP 상담 테이블');if(g.state==='try'){g.seatPhase=raw.seatPhase;g.seated=raw.seated;validSeat(g,s.furniture.find(f=>f.t===13&&f.id===g.stationId));}else if(raw.seatPhase!==undefined||raw.seated===true)throw Error('VIP 착석 상태');}
 for(let base=0;base<s.stock.length;base++){const reserved=s.furniture.filter(f=>f.t===15&&f.vipSlots?.[0]===base).length;if(!Number.isSafeInteger(s.stock[base]+reserved))throw Error('보유 재고 수량');}
}

// v3.21 pictorial catalog and per-surface construction. Quotes never mutate inventory or cash.
const InteriorCatalog={
 floor:{original:{name:'기본 원목',price:500,style:'oak',color:'#d8b17c'},oak:{name:'오크',price:500,style:'oak',color:'#dfc298'},checker:{name:'체커보드',price:800,style:'checker',color:'#e9dfc9'},terrazzo:{name:'테라조',price:1000,style:'terrazzo',color:'#e7dfcd'},herringbone:{name:'헤링본',price:1500,style:'herringbone',color:'#a28257'},marble:{name:'화이트 대리석',price:2000,style:'marble',color:'#ece7db'},blackMarble:{name:'블랙 대리석',price:3000,style:'marble',color:'#29302f'},walnut:{name:'월넛',price:1500,style:'oak',color:'#94704d'}},
 wall:{original:{name:'기본 초록 벽',price:500,style:'plaster',color:'#789185'},cream:{name:'아이보리 회벽',price:500,style:'plaster',color:'#e5d8bb'},sage:{name:'세이지 그린',price:500,style:'plaster',color:'#819986'},beige:{name:'따뜻한 베이지',price:500,style:'plaster',color:'#ceb493'},brick:{name:'빈티지 벽돌',price:800,style:'brick',color:'#ab795e'},acoustic:{name:'녹음실 흡음 패널',price:1000,style:'acoustic',color:'#69736c'},woodPanel:{name:'월넛 우드 패널',price:1200,style:'panel',color:'#8c6d50'},blueBrass:{name:'딥블루 몰딩',price:1500,style:'molding',color:'#384e61'},artdeco:{name:'아르데코',price:2000,style:'artdeco',color:'#435f55'}},
 art:{poster:{name:'공연 포스터',price:10000},record:{name:'레코드 액자',price:25000},guitar:{name:'기타 벽걸이',price:40000},logo:{name:'가게 로고 간판',price:50000},clock:{name:'벽시계',price:20000},lamp:{name:'벽등',price:15000}}
};
let designEditor=null,designStroke=null,catalogDrag=null,suppressCatalogClick=false;
function ensureDesignMaps(){S.design.floorTiles??={};S.design.wallTiles??={};S.design.wallStock??={};}
function validateInterior26(v,s){
 const d=v.design??{},size=Stages[s.stage],fail=()=>{throw Error('인테리어 타일 저장')};
 function map(raw,kind){if(raw===undefined)return {};if(!raw||typeof raw!=='object'||Array.isArray(raw)||Object.keys(raw).length>1200)fail();const result={};for(const [key,id]of Object.entries(raw)){if(!InteriorCatalog[kind][id])fail();if(kind==='floor'){const m=/^(\d+),(\d+)$/.exec(key);if(!m||+m[1]>=size.w||+m[2]>=size.h)fail();}else if(!validWallKey(key,s.stage))fail();result[key]=id;}return result;}
 s.design.floorTiles=map(d.floorTiles,'floor');s.design.wallTiles=map(d.wallTiles,'wall');
 const stock=d.wallStock??{};if(!stock||typeof stock!=='object'||Array.isArray(stock)||Object.keys(stock).some(k=>!InteriorCatalog.art[k]||!Number.isSafeInteger(stock[k])||stock[k]<0||stock[k]>999))fail();s.design.wallStock={...stock};
}
function validWallKey(key,stage=S.stage){const m=/^(x|y|vip:left|vip:right|vip:top|vip:bottom):(\d+)$/.exec(key);return !!m&&+m[2]<(m[1]==='x'?Stages[stage].w:m[1]==='y'?Stages[stage].h:10);}
function materialId(kind,key){const d=S.design;if(kind==='floor'){const [x,y]=key.split(',').map(Number);return d.floorTiles?.[key]??(inVIP({x,y})?d.vipFloor:d.floor);}return d.wallTiles?.[key]??(key.startsWith('vip:')?d.vipWall:d.wall);}
function materialTexture(kind,id){const def=InteriorCatalog[kind]?.[id];if(!def)return null;const key=kind+':'+id;if(materialTexture.cache.has(key))return materialTexture.cache.get(key);const cv=document.createElement('canvas');cv.width=cv.height=512;const c=cv.getContext('2d');c.fillStyle=def.color;c.fillRect(0,0,512,512);const index=kind==='floor'?{original:0,oak:0,walnut:1,herringbone:2,checker:3,terrazzo:4,marble:5,blackMarble:6}[id]:{original:8,sage:8,cream:9,beige:10,brick:11,woodPanel:12,walnut:12,acoustic:13,blueBrass:14,artdeco:15}[id];if(materialAtlas23?.naturalWidth&&index!==undefined){const n=materialAtlas23.naturalWidth/4;c.drawImage(materialAtlas23,index%4*n+3,Math.floor(index/4)*n+3,n-6,n-6,0,0,512,512);}if(id==='marble'||id==='blackMarble'){const g=c.createLinearGradient(0,0,512,512);g.addColorStop(0,id==='marble'?'#ede9df':'#303735');g.addColorStop(1,id==='marble'?'#e8e4da':'#2c3230');c.fillStyle=g;c.fillRect(0,0,512,512);}materialTexture.cache.set(key,cv);return cv;}

materialTexture.cache=new Map();
function before23WallArtThumb(c,type,x=0,y=0,w=160,h=135){
 const clock=type==='clock'||type==='lamp',im=clock?wallDetailAtlas:interiorArtAtlas,clip=clock?WallDetailClips[type==='clock'?0:1]:InteriorArtClips[{poster:0,record:1,guitar:2,logo:3}[type]];if(!im?.complete||!clip)return;const k=Math.min((w-20)/clip[2],(h-12)/clip[3]);c.drawImage(im,...clip,x+(w-clip[2]*k)/2,y+(h-clip[3]*k)/2,clip[2]*k,clip[3]*k);
}
function catalogPicture(key){return key.startsWith('f:')?furnitureIcon(+key.slice(2)):`<canvas width="320" height="270" data-catalog-art="${key}" aria-hidden="true"></canvas>`;}
function drawCatalogPictures(){document.querySelectorAll('[data-catalog-art]').forEach(cv=>{const [kind,id]=cv.dataset.catalogArt.split(':'),c=cv.getContext('2d');c.clearRect(0,0,320,270);if(kind==='art'){wallArtThumb(c,id,0,0,320,270);return;}const im=materialTexture(kind,id);if(!im)return;c.save();if(kind==='floor'){c.translate(160,40);c.transform(1,.5,-1,.5,0,0);c.fillStyle='#9b815c';c.fillRect(0,0,128,136);c.drawImage(im,0,0);}else{c.translate(65,28);c.fillStyle='#9a8765';c.fillRect(4,4,192,214);c.drawImage(im,0,0,192,208);}c.restore();});}
function catalogCard(key,name,installed=null){return `<button class="catalog-card" data-catalog="${key}" ${installed?`data-installed="${installed}"`:''}>${catalogPicture(key)}<b>${escapeHTML(name)}</b></button>`;}
function furnitureCatalogHTML(){ensureDesignMaps();if(selected)return installedFurnitureDetail();furnitureView='purchase';let h=`<div class="filter-bar decor-filters">${[['all','전체'],['display','진열대'],['facility','운영 시설'],['decor','소품'],['interior','인테리어']].map(([key,label])=>`<button data-decor-filter="${key}" aria-pressed="${decorFilter===key}">${label}</button>`).join('')}<button data-atelier="vip-design" ${S.stage<4||S.phase!=='prepare'?'disabled':''}>VIP구역 설정</button><button data-entrance-edit="0" ${S.phase!=='prepare'?'disabled':''}>출입구 설정</button>${S.stage>=4?'<button data-entrance-edit="1">추가 출입구</button>':''}</div><div class="catalog-grid">`;h+=types.map((t,i)=>decorFilter==='all'||furnitureCategory(i)===decorFilter?catalogCard('f:'+i,t.name):'').join('');if(['all','decor'].includes(decorFilter))h+=Object.entries(InteriorCatalog.art).map(([id,o])=>catalogCard('art:'+id,o.name)).join('');if(['all','interior'].includes(decorFilter))for(const kind of ['floor','wall'])h+=Object.entries(InteriorCatalog[kind]).map(([id,o])=>catalogCard(kind+':'+id,o.name)).join('');return h+'</div>';}


function shortFurnitureEffect(t){return DecorDefinitions[t]?.effect??({0:'악기 '+rackLimit()+'종 진열',1:'구매 계산',4:'악기 시연',5:'소품 '+cabinetLimit()+'종 진열',6:'전자드럼 진열',7:'전자드럼 시연',11:'악기 커스텀 제작',12:'커스텀 악기 1개 진열',13:'VIP 악기 시연',14:'VIP 상담·결제',15:'최고급·명품 1개 진열',16:'손님 휴식'})[t];}
function openCatalogDetail(key,installed=null){
 const [kind,id]=key.split(':'),t=+id,o=kind==='f'?types[t]:InteriorCatalog[kind]?.[id];if(!o)return false;const ready=S.phase==='prepare'&&editing===null;
 if(installed?.startsWith('f:')){selected=+installed.slice(2);renderPanel();return true;}
 let body=`${catalogPicture(key)}<h3>${escapeHTML(o.name)}</h3>`;
 if(kind==='f'){const unlocked=furnitureUnlocked(t),reason=!unlocked?([11,12].includes(t)?'7단계 해금':[13,14,15].includes(t)?'5단계 해금':'미션 해금'):!ready?'영업 준비 중 배치':canBuyFurniture(t)?'':'공간·자금 조건 확인';body+=`<dl class="catalog-facts"><div><dt>가격</dt><dd>${money(o.cost)}</dd></div><div><dt>효과</dt><dd>${shortFurnitureEffect(t)??'장식'}</dd></div>${DecorDefinitions[t]?`<div><dt>조건</dt><dd>${DecorDefinitions[t].condition}</dd></div>`:''}${reason?`<div><dt>조건</dt><dd>${reason}</dd></div>`:''}</dl><button class="primary" data-catalog-build="${t}" ${!ready||!canBuyFurniture(t)?'disabled':''}>구매·배치</button>`;
 }else if(kind==='art'){ensureDesignMaps();const stock=S.design.wallStock[id]??0;body+=`<dl class="catalog-facts"><div><dt>가격</dt><dd>${money(o.price)} / 개</dd></div><div><dt>설치</dt><dd>뒤쪽 벽</dd></div>${stock?`<div><dt>보관</dt><dd>${stock}개</dd></div>`:''}</dl><button class="primary" data-design-start="${key}" ${installed?`data-design-moving="${installed}"`:''} ${!ready?'disabled':''}>${installed?'이동':stock?'배치':'구매·배치'}</button>${installed?`<button data-wall-recall="${installed}">회수</button>`:''}`;
 }else body+=`<dl class="catalog-facts"><div><dt>시공비</dt><dd>${money(o.price)} / 칸</dd></div></dl><button class="primary" data-design-start="${key}" ${!ready?'disabled':''}>시공 위치 선택</button>`;
 $('catalogDetailBody').innerHTML=body;drawIcons();drawCatalogPictures();drawCatalogPictures();if(!$('catalogDetail').open)$('catalogDetail').showModal();return true;
}
function beginDesignEdit(key,moving=null){
 const [kind,id]=key.split(':');if(!InteriorCatalog[kind]?.[id]||S.phase!=='prepare'||editing!==null||vipEditor)return false;
 resetDesignEditor();hideFurnitureQuick();for(const d of document.querySelectorAll('dialog[open]'))d.close();document.body.classList.remove('menu-open');closeMenu();
 designEditor={kind,id,keys:[],moving:typeof moving==='string'?moving:null};document.body.classList.add('design-editing');$('designEditBar').hidden=false;resizeView();updateDesignBar();invalidateDesign();return true;
}
function resetDesignEditor(){designEditor=null;designStroke=null;catalogDrag=null;document.body.classList.remove('design-editing');if($('designEditBar'))$('designEditBar').hidden=true;sceneCacheKey='';renderDirty=true;}
function invalidateDesign(){sceneCacheKey='';renderDirty=true;draw();}
function designTargetAt(e,kind=designEditor?.kind){
 const q=worldAt(e);
 if(kind==='floor'){const p=tileAt(e);return p.x>=0&&p.y>=0&&p.x<N&&p.y<M?p.x+','+p.y:null;}
 if(kind==='art'){for(const wall of ['x','y']){const origin=P(-.5,-.5),u=(q.x-origin.x)/(wall==='x'?34:-34),height=origin.y+u*17-q.y,n=wall==='x'?N:M;if(u>=0&&u<n&&height>=3&&height<=84){const slot=Math.max(0,Math.min(Math.floor((n-1)/2)-1,Math.floor((u-1)/2+.5)));return wall+':'+slot;}}return null;}
 if(kind==='wall'){
  const z=S.vip.zone;if(z)for(const side of ['left','right','top','bottom'])for(let n=0;n<(['left','right'].includes(side)?z.h:z.w);n++){if(side===z.doorSide&&n===z.doorAt)continue;const [a,b]=vipWallEnds(side,n),p=P(a.x,a.y),r=P(b.x,b.y),dx=r.x-p.x;if(Math.abs(dx)<1)continue;const t=(q.x-p.x)/dx,h=p.y+(r.y-p.y)*t-q.y;if(t>=0&&t<1&&h>=0&&h<=28)return 'vip:'+side+':'+n;}
  const origin=P(-.5,-.5);for(const wall of ['x','y']){const u=(q.x-origin.x)/(wall==='x'?34:-34),height=origin.y+u*17-q.y,n=wall==='x'?N:M;if(u>=0&&u<n&&height>=0&&height<=84)return wall+':'+Math.floor(u);}
 }
 return null;
}
function selectDesignTargets(a,b=a){
 if(!designEditor||!a)return false;const keys=[];
 if(designEditor.kind==='floor'){const parse=k=>k.split(',').map(Number),[ax,ay]=parse(a),[bx,by]=parse(b??a);if(![ax,ay,bx,by].every(Number.isInteger))return false;for(let y=Math.min(ay,by);y<=Math.max(ay,by);y++)for(let x=Math.min(ax,bx);x<=Math.max(ax,bx);x++)if(x>=0&&y>=0&&x<N&&y<M)keys.push(x+','+y);}
 else if(designEditor.kind==='wall'){if(!validWallKey(a)||!validWallKey(b??a))return false;const split=k=>[k.slice(0,k.lastIndexOf(':')),Number(k.slice(k.lastIndexOf(':')+1))],[side,start]=split(a),[endSide,end]=split(b??a);if(side!==endSide)return false;for(let n=Math.min(start,end);n<=Math.max(start,end);n++){const z=S.vip.zone;if(side.startsWith('vip:')&&(!z||side==='vip:'+z.doorSide&&n===z.doorAt))continue;keys.push(side+':'+n);}}
 else if(/^[xy]:\d+$/.test(a))keys.push(a);
 designEditor.keys=keys;updateDesignBar();invalidateDesign();return keys.length>0;
}
function designQuote(){
 if(!designEditor)return {valid:false,cost:0,count:0,reason:'위치 선택'};ensureDesignMaps();const {kind,id,keys,moving}=designEditor,o=InteriorCatalog[kind]?.[id];if(!o||!keys.length||S.phase!=='prepare'||editing!==null)return {valid:false,cost:0,count:0,reason:'위치 선택'};
 let changed=keys.filter(k=>kind==='floor'?/^(\d+),(\d+)$/.test(k)&&k.split(',').map(Number).every((n,i)=>n>=0&&n<(i===0?N:M)):kind==='wall'?validWallKey(k):/^[xy]:\d+$/.test(k));if(changed.length!==keys.length)return {valid:false,cost:0,count:0,reason:'위치 확인'};
 if(kind==='art'){const [wall,slot]=keys[0].split(':'),max=Math.floor(((wall==='x'?N:M)-1)/2),source=moving?.split(':');if(keys.length!==1||+slot>=max||moving&&!S.design.wallItems.some(i=>i.wall===source[1]&&i.slot===+source[2]&&i.type===id))return {valid:false,cost:0,count:0,reason:'벽 위치 확인'};const previous=S.design.wallItems.find(i=>i.wall===wall&&i.slot===+slot);if(previous&&(previous.type!==id||moving&&moving!=='art:'+wall+':'+slot)&&(S.design.wallStock[previous.type]??0)>=999)return {valid:false,cost:0,count:0,reason:'소품 보관 가득'};const stock=S.design.wallStock[id]??0,same=S.design.wallItems.some(i=>i.wall===wall&&i.slot===+slot&&i.type===id),cost=moving||stock>0||same?0:o.price;return {valid:true,cost,count:same&&!moving?0:1,keys:[keys[0]],reason:same&&!moving?'변경 없음':''};}
 changed=changed.filter(k=>materialId(kind,k)!==id);return {valid:true,cost:changed.length*o.price,count:changed.length,keys:changed,reason:changed.length?'':'변경 없음'};
}
function commitDesign(){
 const q=designQuote();if(!q.valid||S.money<q.cost)return false;const {kind,id,moving}=designEditor;ensureDesignMaps();
 if(kind==='art'&&q.count){const [wall,slotText]=q.keys[0].split(':'),slot=+slotText;if(moving){const [,oldWall,oldSlot]=moving.split(':');S.design.wallItems=S.design.wallItems.filter(i=>i.wall!==oldWall||i.slot!==+oldSlot);}else if((S.design.wallStock[id]??0)>0)S.design.wallStock[id]--;
  const previous=S.design.wallItems.find(i=>i.wall===wall&&i.slot===slot);if(previous)S.design.wallStock[previous.type]=(S.design.wallStock[previous.type]??0)+1;S.design.wallItems=S.design.wallItems.filter(i=>i.wall!==wall||i.slot!==slot);S.design.wallItems.push({wall,slot,type:id});
 }else if(kind!=='art')for(const key of q.keys)(kind==='floor'?S.design.floorTiles:S.design.wallTiles)[key]=id;
 S.money-=q.cost;S.expenses+=q.cost;resetDesignEditor();expansionChanged();toast(q.count?'적용 완료 · '+money(q.cost):'변경 없음');return true;
}
function updateDesignBar(){if(!designEditor)return;const q=designQuote(),o=InteriorCatalog[designEditor.kind][designEditor.id];$('designEditName').textContent=o.name;$('designEditCost').textContent=q.valid?(q.count+(designEditor.kind==='art'?'개':'칸')+' · '+money(q.cost)):'위치 선택';const b=$('designEditConfirm');b.disabled=!q.valid||S.money<q.cost;b.textContent=S.money<q.cost?'자금 부족':'적용';}
function recallWallItem(wall,slot){if(S.phase!=='prepare'||editing!==null||designEditor)return false;ensureDesignMaps();const i=S.design.wallItems.find(i=>i.wall===wall&&i.slot===slot);if(!i)return false;if((S.design.wallStock[i.type]??0)>=999)return false;S.design.wallStock[i.type]=(S.design.wallStock[i.type]??0)+1;S.design.wallItems=S.design.wallItems.filter(q=>q!==i);expansionChanged();return true;}

function previewMaterial(kind,key){return designEditor?.kind===kind&&designEditor.keys.includes(key)?designEditor.id:materialId(kind,key);}

function paintWallSegment(p,q,id,h,selected=false,index=0){const im=materialTexture('wall',id);if(!im)return;ctx.save();ctx.translate(p.x,p.y);const dx=q.x-p.x,dy=q.y-p.y;ctx.transform(dx/128,dy/128,0,h/128,0,-h);ctx.drawImage(im,(index%4)*128,0,128,512,0,0,128.5,128);ctx.fillStyle=dx<0?'#ffffff08':'#13271f16';ctx.fillRect(0,0,128,128);ctx.fillStyle='#60482e';ctx.fillRect(0,122,128,6);if(selected){ctx.strokeStyle='#75bd8e';ctx.lineWidth=3;ctx.strokeRect(0,0,128,128);}ctx.restore();}

function paintDesignWalls(){for(const side of ['x','y']){const n=side==='x'?N:M;for(let i=0;i<n;i++){const key=side+':'+i,selected=designEditor?.kind==='wall'&&designEditor.keys.includes(key),id=previewMaterial('wall',key),a=side==='x'?P(i-.5,-.5):P(-.5,i-.5),b=side==='x'?P(i+.5,-.5):P(-.5,i+.5);paintWallSegment(a,b,id,79,selected,i);}}}

function vipWallEnds(side,i){const z=S.vip.zone;if(side==='left'||side==='right'){const x=side==='left'?z.x-.5:z.x+z.w-.5;return [{x,y:z.y+i-.5},{x,y:z.y+i+.5}];}const y=side==='top'?z.y-.5:z.y+z.h-.5;return [{x:z.x+i-.5,y},{x:z.x+i+.5,y}];}
function paintVIPWallMaterial(p,q,side,i){const key='vip:'+side+':'+i,selected=designEditor?.kind==='wall'&&designEditor.keys.includes(key);paintWallSegment(p,q,previewMaterial('wall',key),25,selected,i);}

function paintWallItemPreview(){if(designEditor?.kind!=='art'||!designEditor.keys.length)return;const [wall,slot]=designEditor.keys[0].split(':');wallClockTransform({wall,slot:+slot},()=>{ctx.globalAlpha=.65;drawWallArtwork(ctx,designEditor.id);});}





function chooseRegularExtra(p){const record=S.customerBook[p.customerKey??customerIdentity(p.actor,p.special).key];if(!isRegular(record)||!isInstrument(p.product)||S.phase!=='open'||Math.random()>=.25)return false;const bases=[...p.basket,...(p.customBasket??[]).map(id=>S.custom.items.find(i=>i.id===id)?.base)],family=profileForActor(p.actor).families,choices=offers(false,false).filter(o=>isInstrument(o.i)&&!isVIPProduct(o.i)&&family.includes(products[o.i].family)&&!bases.includes(o.i)&&(o.customId||S.stock[o.i]>0)&&customerCanAfford(p,o.i,o.customId)&&enoughShoppingTime(p,o));const tier=record.preferredTier;choices.sort((a,b)=>Math.abs(products[a.i].tier-tier)-Math.abs(products[b.i].tier-tier)||Number(products[b.i].family===record.favoriteFamily)-Number(products[a.i].family===record.favoriteFamily)||offerPrice(a)-offerPrice(b));for(const o of choices)if(go(p,o.f,'browse')){activateOffer(p,o);p.bubble='다른 악기도 살펴볼까?';return true;}return false;}


function installedFurnitureDetail(){let h='';
    if (selected) {
      const f = S.furniture.find((f) => f.id === selected);
      if (f) {
        h += `<div class="feature"><h3>${types[f.t].name} 선택됨</h3><button class="primary" data-action="move" ${S.phase !== 'prepare' ? 'disabled' : ''}>가구 이동</button>${f.t !== FurnitureId.MONSTERA ? `<button class="secondary" data-action="rotate" ${S.phase !== 'prepare' ? 'disabled' : ''}>회전 ↻ · ${Furniture.labels[Furniture.direction(f)]}</button>` : ''}${(f.t !== FurnitureId.CHECKOUT || checkoutActor(f)===null) ? `<button class="secondary" data-action="sell" ${!canSellFurniture(f) ? 'disabled' : ''}>판매 · ${money(Math.floor(types[f.t].cost * 0.5))}</button>` : ''}`;
        if(f.t===6||f.t===7)h+=`<p>${f.t===6?'전자드럼 고정 진열 · 재고 '+S.stock[26]+'세트':'전자드럼 시연 공간 · 재고 차감 없음'} · 1×1칸 · 앞 통로 필요</p>`;
        if(f.t===FurnitureId.CHECKOUT && checkoutActor(f)!==null)h+='<p>사장 기본 계산대는 유지돼요. 추가 계산대는 계산 직원 퇴사 후 판매할 수 있어요.</p>';
        if(f.t===FurnitureId.CHECKOUT) h+=`<p data-checkout-status="${f.id}">${escapeHTML(checkoutStatus(f))}</p>`;
        if (f.t === FurnitureId.GUITAR_RACK)
          h += `${featureBadge('rack2')}<p class="rack-slots-summary">${[f.p,f.p2].slice(0,rackLimit()).map((i,slot) => `${slot+1}칸 · ${Number.isInteger(i)?products[i].name:'빈 칸'}`).join('<br>')}</p><button class="primary" data-action="chooseRack">진열 악기 선택 · 최대 ${rackLimit()}종</button>`;
        if (f.t === FurnitureId.ACCESSORY_CABINET)
          h += `${featureBadge('cabinet')}<p>소품 진열 · 최대 ${cabinetLimit()}종</p><button class="primary" data-action="chooseRack">판매할 소품 선택</button><div class="shelf-choices">${products
            .map((p, i) => ({ p, i }))
            .filter(({ p }) => p.kind !== 'instrument')
            .map(
              ({ p, i }) =>
                `<label><input type="checkbox" data-shelf="${i}" ${(f.items ?? LegacyShelfItems).includes(i) ? 'checked' : ''} ${!productUnlocked(i) ? 'disabled' : ''}>${p.name}${!productUnlocked(i) ? ' · ' + (p.unlock + 1) + '단계 해금' : ''}</label>`
            )
            .join('')}</div><small>상품은 ‘상품 주문’에서 입고하세요.</small>`;
        if([11,12,15].includes(f.t))h+=`<button data-atelier="${f.t===11?'workshop':f.t===15?'vip-displays':'displays'}">${f.t===11?'제작대 열기':f.t===15?'최고급·명품 진열 관리':'커스텀 악기 진열 관리'}</button>`;
        h += decorDetails(f.t,f)+'</div>';
      }
    }

return h;}

// Individual workbenches, physical production queues and provenance-preserving custom sales.
let workshopBenchId=null;
const PremiumOptions={
 electric:{top:[['none','기본 바디',0,0],['flame','플레임 메이플 탑',800000,1],['quilt','퀼티드 메이플 탑',1500000,2]],pickup:[['handSingle','수제 싱글코일',1000000,1],['handHumbucker','수제 험버커',2000000,2]],bridge:[['standard','기본 브리지',0,0],['tremolo','고급 트레몰로',600000,1],['fixed','프리미엄 고정 브리지',900000,2]],inlay:[['dots','기본 인레이',0,0],['pearl','자개 인레이',1200000,2]]},
 bass:{top:[['none','기본 바디',0,0],['walnutTop','월넛 탑',900000,1],['burl','버얼 메이플 탑',1500000,2]],pickup:[['vintageJ','빈티지 J 픽업',1000000,1],['precisionP','P 타입 픽업',1200000,1],['boutiqueActive','부티크 액티브',2000000,2]],bridge:[['standard','기본 브리지',0,0],['heavy','고중량 브리지',800000,1],['ultra','프리미엄 브리지',1200000,2]],knobs:[['standard','기본 노브',0,0],['wood','목재 노브',400000,1]],inlay:[['dots','기본 인레이',0,0],['block','블록 자개 인레이',1200000,2]]},
 acoustic:{top:[['none','기본 상판',0,0],['spruce','시트카 스프루스',800000,1],['cedar','선별 시더',1200000,2]],backside:[['none','기본 측후판',0,0],['mahogany','선별 마호가니',1000000,1],['rosewood','선별 로즈우드',2000000,2]],acousticPickup:[['none','픽업 없음',0,0],['undersaddle','언더새들 픽업',800000,1],['soundhole','사운드홀 픽업',1100000,2]],saddle:[['standard','기본 새들',0,0],['bone','본 새들',600000,1]],binding:[['none','기본 바인딩',0,0],['maple','메이플 바인딩',400000,1],['abalone','자개 바인딩',900000,2]]}
};
const CustomLabels={color:'색상',wood:'바디 목재',pickup:'픽업',hardware:'하드웨어',finish:'마감',top:'장식용 탑',bridge:'브리지',inlay:'지판 인레이',knobs:'노브',backside:'측후판',acousticPickup:'픽업',saddle:'새들',binding:'바인딩',rosette:'로제트',pickguard:'픽가드'};
function ensureCraftState(){const c=S.custom;c.jobs??=[];c.levels??={};c.ready??={};c.progressDay??=0;c.vipSold??=c.sold;c.vipRevenue??=c.totalRevenue;c.normalSold??=0;c.normalRevenue??=0;for(const f of S.furniture.filter(f=>f.t===11))c.levels[f.id]??=1;return c;}
function currentWorkbench(id=workshopBenchId){return id!==null&&id!==undefined?(S.furniture.find(f=>f.id===Number(id)&&f.t===11)??null):(S.furniture.find(f=>f.t===11)??null);}
function benchLevel(id=workshopBenchId){const f=currentWorkbench(id);return f?(ensureCraftState().levels[f.id]??1):1;}
function benchJob(id){return ensureCraftState().jobs.find(j=>j.benchId===id)??null;}




function quoteCustomAt(draft,level){if(!draft||!products[draft.base])return null;const p=products[draft.base];if(!['electric','bass','acoustic'].includes(p.family)||p.mission||p.tier>(level===3?5:level-1))return null;let extra=0,duration=1;for(const [key,rows]of Object.entries(customOptionsFor(draft.base))){const o=rows.find(o=>o[0]===draft.options?.[key]);if(!o||o[3]>=level)return null;extra+=o[2];duration=Math.max(duration,o[3]+1);}const craftCost=100000+Math.round(p.cost*.12)+extra,cost=p.cost+craftCost,price=Math.round(cost*1.32/1000)*1000;return {craftCost,cost,price,profit:price-cost,duration};}



function advanceCrafts(){if(S.phase!=='closing')return false;const c=ensureCraftState();if(c.progressDay>=S.day)return false;c.progressDay=S.day;for(const j of c.jobs)if(j.remaining>0&&j.lastDay<S.day){j.remaining--;j.lastDay=S.day;if(j.remaining===0)j.readyDay=S.day+1;}renderDirty=true;return true;}
function releaseCompletedCrafts(){const c=ensureCraftState(),done=c.jobs.filter(j=>j.remaining===0&&j.readyDay<=S.day);for(const j of done){if(!c.items.some(i=>i.id===j.id)){const {benchId,duration,remaining,lastDay,readyDay,...item}=j;c.items.push({...item,displayId:null,displaySlot:null});c.crafted++;c.ready[j.benchId]=S.day;}}c.jobs=c.jobs.filter(j=>!done.includes(j));if(done.length){atelierSprites.clear();clearFurnitureBodyCache();renderDirty=true;}return done.length;}
function benchBadge(f){const c=ensureCraftState(),j=benchJob(f.id);return j?(j.remaining?'D-'+j.remaining:'완성 ✓'):c.ready[f.id]?'완성 ✓':'';}
function drawBenchBadges(){ctx.save();ctx.setTransform(view.dpr,0,0,view.dpr,0,0);const k=view.scale*zoom;for(const f of S.furniture.filter(f=>f.t===11)){const label=benchBadge(f);if(!label)continue;const p=screenPosition(f.x,f.y),w=label.startsWith('D-')?34:46,y=p.y-80*k;ctx.fillStyle='#fbf4dfed';ctx.strokeStyle='#a99567';ctx.lineWidth=.7;ctx.beginPath();ctx.roundRect(p.x-w/2,y,w,16,4);ctx.fill();ctx.stroke();text(label,p.x,y+11,10,'#4c674f','center',700);}ctx.restore();}
function isVIPCustom(item){return (products[item.base]?.tier??0)>=4;}
function customDisplayAllowed(item,f,zone=S.vip.zone){if(!f||f.t!==12)return false;const cells=Furniture.cells(f),inside=wideVIP(f,zone);return isVIPCustom(item)?inside:cells.every(p=>!inVIP(p,zone))&&!inVIP(Furniture.front(f),zone);}


function ordinaryCustomOffers(){return S.custom.items.filter(i=>!isVIPCustom(i)&&i.displayId!==null&&!people.some(p=>(p.customBasket??[]).includes(i.id))).flatMap(i=>{const f=S.furniture.find(f=>f.id===i.displayId);return customDisplayAllowed(i,f)&&near(f,ENTRY)?[{f,i:i.base,customId:i.id,price:i.price}]:[];});}
function offerPrice(o){return o.customId?(S.custom.items.find(i=>i.id===o.customId)?.price??Infinity):products[o.i]?.price??Infinity;}
function basketValue(p){return (p.basket??[]).reduce((v,i)=>v+products[i].price,0)+(p.customBasket??[]).reduce((v,id)=>v+(S.custom.items.find(i=>i.id===id)?.price??0),0);}

function customSelectionAvailable(p){const item=S.custom.items.find(i=>i.id===p.customProductId),f=item&&S.furniture.find(f=>f.id===item.displayId);return !!item&&!isVIPCustom(item)&&customDisplayAllowed(item,f)&&!people.some(q=>q!==p&&(q.customBasket??[]).includes(item.id));}
function enoughShoppingTime(p,o){const n=near(o.f,p);if(!n)return false;const checkoutTime=activeCheckouts().map(f=>near(f,n.target)).filter(Boolean).reduce((v,n)=>Math.min(v,n.path.length*.25),30);const trip=n.path.length*.25/(p.walkSpeed??1.2)/Config.guestPace;return S.phase==='open'&&Config.daySeconds-S.time>trip+checkoutTime+profileForActor(p.actor).browse/Config.guestPace+8;}
function activateOffer(p,o){p.product=o.i;p.customProductId=o.customId??null;p.alternativeChecked=false;}


function sellCustomBasket(p,budget){let value=0;const bases=[];for(const id of p.customBasket??[]){const item=S.custom.items.find(i=>i.id===id),f=item&&S.furniture.find(f=>f.id===item.displayId);if(!item||isVIPCustom(item)||!customDisplayAllowed(item,f)||value+item.price>budget)continue;S.custom.items=S.custom.items.filter(i=>i!==item);S.custom.sold++;S.custom.normalSold++;S.custom.totalRevenue+=item.price;S.custom.normalRevenue+=item.price;S.sold++;S.totalSales++;value+=item.price;bases.push(item.base);}if(bases.length){atelierSprites.clear();loungeSpriteCache.clear();clearFurnitureBodyCache();}return {value,bases};}
function migrateCraft27(v){const c=v.custom;if(!c)return;c.levels=Object.fromEntries((v.furniture??[]).filter(f=>f.t===11).map(f=>[f.id,c.benchLevel??1]));c.jobs=[];c.ready={};c.progressDay=v.phase==='settled'?v.day:Math.max(0,v.day-1);c.vipSold=c.sold;c.vipRevenue=c.totalRevenue;c.normalSold=0;c.normalRevenue=0;for(const item of c.items??[]){item.madeLevel=c.benchLevel??1;item.options=normalizedCustomOptions(item.base,item.options,item.madeLevel);const f=v.furniture.find(f=>f.id===item.displayId);if(item.displayId!==null&&!customDisplayAllowed(item,f,v.vip?.zone??null)){item.displayId=null;item.displaySlot=null;}}}
function validateCustom27(v,s,fail){
 const c=v.custom??expansionDefaults().custom,safe=n=>Number.isSafeInteger(n)&&n>=0&&n<=1e15,benches=s.furniture.filter(f=>f.t===11),levels=c.levels??{},jobs=c.jobs??[],ready=c.ready??{},progressDay=c.progressDay??0;
 if(!c||![c.benchLevel].every(n=>Number.isInteger(n)&&n>=1&&n<=3)||!Number.isSafeInteger(c.nextId)||c.nextId<1||!['crafted','sold','totalCost','totalRevenue'].every(k=>safe(c[k]))||!Array.isArray(c.items)||!Array.isArray(jobs)||c.items.length+jobs.length>12||c.crafted!==c.items.length+c.sold||!safe(progressDay)||progressDay>s.day||(s.stage<6&&(c.crafted||jobs.length||c.benchLevel!==1||s.furniture.some(f=>[11,12].includes(f.t)))))fail('커스텀 기록');
 if(!levels||typeof levels!=='object'||Array.isArray(levels)||Object.entries(levels).some(([id,l])=>!benches.some(f=>String(f.id)===id)||!Number.isInteger(l)||l<1||l>3||l>c.benchLevel))fail('제작대 등급');if(!ready||typeof ready!=='object'||Array.isArray(ready)||Object.entries(ready).some(([id,day])=>!benches.some(f=>String(f.id)===id)||!safe(day)||day<1||day>s.day))fail('제작대 완료');
 const result={benchLevel:c.benchLevel,nextId:c.nextId,crafted:c.crafted,sold:c.sold,totalCost:c.totalCost,totalRevenue:c.totalRevenue,normalSold:c.normalSold??0,normalRevenue:c.normalRevenue??0,vipSold:c.vipSold??c.sold,vipRevenue:c.vipRevenue??c.totalRevenue,levels:Object.fromEntries(benches.map(f=>[f.id,levels[f.id]??1])),ready:{...ready},jobs:[],items:[],progressDay};
 if(!['normalSold','normalRevenue','vipSold','vipRevenue'].every(k=>safe(result[k]))||result.sold!==result.normalSold+result.vipSold||result.totalRevenue!==result.normalRevenue+result.vipRevenue)fail('커스텀 판매 합계');
 const ids=new Set(),displayIds=new Set(),jobBenches=new Set();
 function item(raw,job=false){const p=products[raw.base],level=raw.madeLevel??c.benchLevel;if(!Number.isSafeInteger(raw.id)||raw.id<1||raw.id>=c.nextId||ids.has(raw.id)||!p||p.unlock>s.stage||!Number.isInteger(level)||level<1||level>c.benchLevel||!safe(raw.day)||raw.day<1||raw.day>s.day)fail('커스텀 악기');ids.add(raw.id);const quote=quoteCustomAt(raw,level);if(!quote||raw.cost!==quote.cost||raw.price!==quote.price)fail('제작 가격');const out={id:raw.id,base:raw.base,options:{...raw.options},cost:raw.cost,price:raw.price,day:raw.day,madeLevel:level};
  if(job){if(!benches.some(f=>f.id===raw.benchId)||jobBenches.has(raw.benchId)||result.levels[raw.benchId]!==level||raw.duration!==quote.duration||!Number.isInteger(raw.remaining)||raw.remaining<0||raw.remaining>raw.duration||raw.remaining!==raw.duration-(raw.lastDay-raw.day+1)||!safe(raw.lastDay)||raw.lastDay<raw.day-1||raw.lastDay>s.day||(raw.remaining===0?raw.readyDay!==raw.lastDay+1:raw.readyDay!==null)||result.ready[raw.benchId])fail('제작 진행');jobBenches.add(raw.benchId);return {...out,benchId:raw.benchId,duration:raw.duration,remaining:raw.remaining,lastDay:raw.lastDay,readyDay:raw.readyDay};}
  if(raw.displayId!==null){const f=s.furniture.find(f=>f.id===raw.displayId);if(!Number.isSafeInteger(raw.displayId)||displayIds.has(raw.displayId)||!customDisplayAllowed(out,f,s.vip.zone))fail('커스텀 판매 구역');displayIds.add(raw.displayId);}return {...out,displayId:raw.displayId,displaySlot:raw.displayId===null?null:0};
 }
 result.items=c.items.map(i=>item(i));result.jobs=jobs.map(i=>item(i,true));if(result.totalCost<[...result.items,...result.jobs].reduce((v,i)=>v+i.cost,0)||s.totalSales<c.sold)fail('커스텀 원가');s.custom=result;
 const reserved=new Set();for(const p of s.guests){if(p.customProductId!==undefined&&p.customProductId!==null&&(!Number.isSafeInteger(p.customProductId)||p.customProductId<1||p.customProductId>=c.nextId))fail('손님 커스텀 상품');if(p.customBasket!==undefined&&(!Array.isArray(p.customBasket)||p.customBasket.length>12||new Set(p.customBasket).size!==p.customBasket.length||p.customBasket.some(id=>!Number.isSafeInteger(id)||id<1||id>=c.nextId)))fail('커스텀 장바구니');for(const id of p.customBasket??[]){if(p.bought||p.checkoutCompleted)continue;const i=result.items.find(i=>i.id===id);if(!i||isVIPCustom(i)||reserved.has(id))fail('커스텀 장바구니 재고');reserved.add(id);}const value=(p.basket??[]).reduce((v,i)=>v+products[i].price,0)+(p.customBasket??[]).reduce((v,id)=>v+(result.items.find(i=>i.id===id)?.price??0),0);if(!p.bought&&!p.checkoutCompleted&&value>(p.budget??600000))fail('커스텀 장바구니 예산');}
}


function customPriceHTML(q,draft){if(!q)return '옵션 확인';const maxBudget=isVIPCustom(draft)?Math.max(...Atelier.profiles.filter(p=>p.family===null||p.family===products[draft.base].family).map(p=>p.budget)):Math.max(600000,...CustomerProfiles.filter(p=>p.families.includes(products[draft.base].family)).map(p=>p.budget*1.5));return `<span>제작비 <b>${money(q.craftCost)}</b></span><span>사용 재고 <b>기본 악기 1개</b></span><span>판매가 <b>${money(q.price)}</b></span><span>제작 기간 <b>${q.duration}영업일</b></span><span>판매 구역 <b>${isVIPCustom(draft)?'VIP실':'일반 매장'}</b></span>${q.price>maxBudget?'<small class="budget-warning">고객 최대 예산 초과</small>':''}`;}


function drawJobPictures(){for(const cv of document.querySelectorAll('[data-job-art]')){const job=S.custom.jobs.find(j=>j.id===+cv.dataset.jobArt);if(job){const c=cv.getContext('2d');c.clearRect(0,0,cv.width,cv.height);c.save();c.translate(cv.width/2,cv.height-4);miniCustom(c,job,cv.height-8);c.restore();}}}


const premiumTextureCache=new Map();
function customTexture(item,rear=false){const key=JSON.stringify([item.base,item.options,rear]);if(premiumTextureCache.has(key))return premiumTextureCache.get(key);const o=normalizedCustomOptions(item.base,item.options,3),bass=products[item.base].family==='bass',acoustic=products[item.base].family==='acoustic',knownColors=Atelier.options.color.map(o=>o[0]);const legacyOptions=Object.fromEntries(['color','wood','pickup','hardware','finish',...(acoustic?['pickguard','rosette','bridge']:[])].map(k=>[k,o[k]]));if(!knownColors.includes(o.color))legacyOptions.color='ivory';if(!['standard','vintage','noiseless','active'].includes(o.pickup))legacyOptions.pickup=['handHumbucker','boutiqueActive'].includes(o.pickup)?'active':'vintage';if(o.hardware==='brass')legacyOptions.hardware='gold';if(['engraved','openpore'].includes(o.finish))legacyOptions.finish='satin';if(o.rosette==='abalone')legacyOptions.rosette='pearl';const source=legacyCustomTexture({...item,options:legacyOptions},rear);if(!source)return null;const cv=document.createElement('canvas');cv.width=source.width;cv.height=source.height;const c=cv.getContext('2d'),W=cv.width,H=cv.height;c.drawImage(source,0,0);const mask=makeCustomMask(W,H,rear,bass,item.base);c.save();c.scale(W,H);c.clip(mask);
 if(!knownColors.includes(o.color)){c.globalCompositeOperation='color';c.fillStyle={pearl:'#c4b9d7',metallic:'#7997ad',shift:rear?'#348b8f':'#8a54a0',sunburst:'#c38c4b'}[o.color]??'#c9a976';c.fillRect(0,.44,1,.56);c.globalCompositeOperation='source-over';if(o.color==='sunburst'){const g=c.createRadialGradient(.5,.73,.08,.5,.73,.48);g.addColorStop(0,'#f4b94e00');g.addColorStop(1,'#49230bb0');c.fillStyle=g;c.fillRect(0,.44,1,.56);}if(['pearl','metallic'].includes(o.color)){for(let n=0;n<180;n++){c.fillStyle=n%2?'#fff8df66':'#b3a3c044';c.fillRect((n*37%100)/100,.46+(n*19%50)/100,.002,.002);}}}
 if(o.top!=='none'||acoustic&&o.backside!=='none'){const grain=acoustic&&rear?o.backside:o.top;if(grain!=='none'){c.globalCompositeOperation='soft-light';c.fillStyle=grain==='rosewood'?'#66412f':grain==='cedar'?'#b47847':grain==='walnutTop'?'#806044':'#ead5a7';c.globalAlpha=.65;c.fillRect(0,.44,1,.56);c.globalCompositeOperation='multiply';c.strokeStyle=['walnutTop','rosewood'].includes(grain)?'#4a2e20':'#8f6d43';c.globalAlpha=.33;c.lineWidth=.004;for(let n=0;n<40;n++){c.beginPath();if(['flame','quilt','burl'].includes(grain)){const y=.47+n*.014;c.moveTo(.02,y);for(let k=0;k<=40;k++)c.lineTo(k/40,y+Math.sin(k*.55+n*.65)*(['quilt','burl'].includes(grain)?.018:.009));}else{const x=n*.026;c.moveTo(x,.44);c.bezierCurveTo(x+.009,.64,x-.01,.84,x,1);}c.stroke();}c.globalAlpha=1;c.globalCompositeOperation='source-over';}}
 if(o.finish==='engraved'){c.strokeStyle='#d8b875bb';c.lineWidth=.004;for(let n=0;n<14;n++){c.beginPath();c.arc(.5,.77,.14+n*.008,n*.4,n*.4+1.2);c.stroke();}}if(o.finish==='openpore'){c.globalCompositeOperation='multiply';c.strokeStyle='#5c42252d';c.lineWidth=.003;for(let n=0;n<25;n++){c.beginPath();c.moveTo(n*.04,.46);c.lineTo(n*.04+.02,1);c.stroke();}c.globalCompositeOperation='source-over';}
 c.restore();c.save();c.scale(W,H);
 if(!rear){if(o.inlay&&o.inlay!=='dots'){c.fillStyle='#d0e0cc';c.strokeStyle='#8e9787';c.lineWidth=.002;for(let n=0;n<6;n++){const y=.255+n*.045;c.beginPath();if(o.inlay==='block')c.rect(.46,y,.08,.019);else{c.moveTo(.5,y);c.lineTo(.524,y+.011);c.lineTo(.5,y+.025);c.lineTo(.476,y+.011);c.closePath();}c.fill();c.stroke();}}
 if(['handSingle','vintageJ'].includes(o.pickup)){c.fillStyle='#c9af68';for(let n=0;n<6;n++){c.beginPath();c.arc(.36+n*.044,.72,.004,0,Math.PI*2);c.fill();}}if(o.hardware==='brass'){c.strokeStyle='#e1c478';c.lineWidth=.003;for(let n=0;n<4;n++){c.beginPath();c.moveTo(.36,.825+n*.008);c.lineTo(.64,.825+n*.008);c.stroke();}}
 if(['precisionP','handHumbucker','boutiqueActive'].includes(o.pickup)){c.fillStyle=o.pickup==='precisionP'?'#34352e':'#a49c7d';c.strokeStyle='#323c34';c.lineWidth=.005;for(let n=0;n<2;n++){const x=o.pickup==='precisionP'?.35+n*.1:.35,y=.68+n*.07;c.fillRect(x,y,.22,.028);c.strokeRect(x,y,.22,.028);}}
 if(o.bridge&&['tremolo','fixed','heavy','ultra'].includes(o.bridge)){c.fillStyle=o.hardware==='gold'||o.hardware==='brass'?'#c1a566':'#a8b2ae';c.strokeStyle='#4b5350';c.lineWidth=.005;c.fillRect(.36,.824,.28,.033);c.strokeRect(.36,.824,.28,.033);if(o.bridge==='tremolo'){c.beginPath();c.moveTo(.58,.85);c.lineTo(.72,.78);c.stroke();}}
 if(o.knobs==='wood'){c.fillStyle='#8a5d32';for(let n=0;n<3;n++){c.beginPath();c.arc(.69+n*.04,.8+n*.035,.015,0,Math.PI*2);c.fill();}}
 if(acoustic){if(o.binding!=='none'){const inner=document.createElement('canvas');inner.width=W;inner.height=H;const ic=inner.getContext('2d'),r=Math.max(1,Math.round(W*.018));ic.drawImage(source,0,0);ic.globalCompositeOperation='destination-in';for(const [dx,dy]of[[r,0],[-r,0],[0,r],[0,-r]])ic.drawImage(source,dx,dy);const edge=document.createElement('canvas');edge.width=W;edge.height=H;const ec=edge.getContext('2d');ec.drawImage(source,0,0);ec.globalCompositeOperation='destination-out';ec.drawImage(inner,0,0);ec.globalCompositeOperation='source-in';ec.fillStyle=o.binding==='abalone'?'#b3d1b4':'#d7bd82';ec.fillRect(0,0,W,H);c.save();c.clip(mask);c.drawImage(edge,0,0,1,1);c.restore();}if(o.acousticPickup==='soundhole'){c.fillStyle='#4b2d20';c.fillRect(.36,.64,.28,.023);c.strokeStyle='#c1aa6a';c.lineWidth=.003;c.strokeRect(.36,.64,.28,.023);}if(o.acousticPickup==='undersaddle'){c.fillStyle='#bdab6c';c.fillRect(.67,.84,.025,.025);}if(o.saddle==='bone'){c.fillStyle='#f5e9ca';c.fillRect(.35,.838,.3,.008);}if(o.rosette==='abalone'){c.strokeStyle='#a9d4ba';c.lineWidth=.017;c.beginPath();c.ellipse(.5,.65,.16,.07,0,0,Math.PI*2);c.stroke();}}
 }c.restore();c.globalCompositeOperation='destination-in';c.drawImage(source,0,0);c.globalCompositeOperation='source-over';if(premiumTextureCache.size>=24)premiumTextureCache.delete(premiumTextureCache.keys().next().value);premiumTextureCache.set(key,cv);return cv;}
let premiumShowcaseAtlas=null;
const premiumCaseCache=new Map();
function loungeFurnitureSprite(f){if(f.t!==12)return legacyLoungeFurnitureSprite(f);const dir=Furniture.direction(f),item=S.custom.items.find(i=>i.displayId===f.id),key=JSON.stringify(['v23',dir,f.legacyCompact,item?.base,item?.options,materialAtlas23?.complete]);let cv=premiumCaseCache.get(key);if(!cv){cv=document.createElement('canvas');cv.width=400;cv.height=280;const c=cv.getContext('2d');c.scale(2,2);c.translate(100,100);if(dir===1||dir===3)c.scale(-1,1);if(f.legacyCompact)c.scale(.7,.7);if(dir>=2)c.scale(-1,1);const top=[[-42,-35],[-18,-47],[42,-17],[18,-5]];function face(points,fill){c.beginPath();points.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fillStyle=fill;c.fill();c.strokeStyle='#493425';c.lineWidth=.7;c.stroke();}face([top[0],top[3],[18,17],[-42,-13]],'#6d4930');face([top[3],top[2],[42,5],[18,17]],'#483125');const grain=materialTexture('floor','walnut');if(grain){c.save();c.transform(60/512,30/512,0,22/512,-42,-35);c.drawImage(grain,0,0,512,512);c.fillStyle='#2e1e1266';c.fillRect(0,0,512,512);c.strokeStyle='#c0a063';c.lineWidth=5;c.strokeRect(18,28,476,456);c.restore();c.save();c.transform(24/512,-12/512,0,22/512,18,-5);c.drawImage(grain,0,0,512,512);c.fillStyle='#231b1680';c.fillRect(0,0,512,512);c.restore();}face(top,'#b18b52');face([[-38,-35],[-18,-44],[38,-17],[18,-8]],'#23463a');c.strokeStyle='#c9ab6c';c.lineWidth=.6;c.beginPath();c.moveTo(-40,-15);c.lineTo(18,14);c.lineTo(41,3);c.stroke();if(item){c.save();c.transform(-.72,.36,1,.5,0,-26);c.translate(0,29);miniCustom(c,item,58,dir>=2);c.restore();}const glass=top.map(([x,y])=>[x,y-11]);c.beginPath();glass.forEach(([x,y],i)=>i?c.lineTo(x,y):c.moveTo(x,y));c.closePath();c.fillStyle='#d8f0e908';c.fill();c.strokeStyle='#c9b27d';c.lineWidth=.7;c.stroke();for(let i=0;i<4;i++){c.beginPath();c.moveTo(...glass[i]);c.lineTo(...top[i]);c.stroke();}c.strokeStyle='#fff8dd75';c.beginPath();c.moveTo(-34,-44);c.lineTo(15,-20);c.stroke();cv.complete=true;cv.naturalWidth=400;cv.naturalHeight=280;if(premiumCaseCache.size>=24)premiumCaseCache.delete(premiumCaseCache.keys().next().value);premiumCaseCache.set(key,cv);}const q=P(f.x+(f.legacyCompact?0:[0,2].includes(dir)?.5:0),f.y+(f.legacyCompact?0:[1,3].includes(dir)?.5:0));return {image:cv,sx:0,sy:0,sw:400,sh:280,flip:false,rect:{x:q.x-100,y:q.y-100,w:200,h:140}};}

function showFurnitureQuick(f){legacyShowFurnitureQuick(f);const box=$('furnitureQuick');for(const b of box.querySelectorAll('[data-quick="choose"],[data-quick="clear"]'))b.remove();if([0,5,6,12,15].includes(f.t)){const row=box.querySelector('[data-quick="details"]').parentElement,b=document.createElement('button');b.dataset.quick='choose';b.textContent=f.t===6?'재고 관리':'악기 변경';b.disabled=S.phase!=='prepare';row.prepend(b);if(f.t!==6){const clear=document.createElement('button');clear.dataset.quick='clear';clear.textContent='진열 회수';clear.disabled=S.phase!=='prepare';row.append(clear);}}const top=document.querySelector('.hud').getBoundingClientRect().bottom+8;box.style.top=Math.max(top,Math.min(parseFloat(box.style.top)||top,innerHeight-76-box.offsetHeight))+'px';}
function clearDisplay(f){if(S.phase!=='prepare')return false;if(f.t===0){setRackProduct(f.id,null,0);if(rackLimit()>1)setRackProduct(f.id,null,1);}else if(f.t===5)setShelfItems(f.id,[]);else if(f.t===15)setVIPDisplay(f.id,0,null);else if(f.t===12){for(const i of S.custom.items.filter(i=>i.displayId===f.id))setCustomDisplay(i.id,null);}else return false;showFurnitureQuick(f);renderDirty=true;return true;}

function makeCustomMask(W,H,rear,bass,base){const key=base+':'+Number(rear);if(CustomCoverage[key])return legacyMakeCustomMask(W,H,rear,bass,base);if(customCoverageCache.has(key))return customCoverageCache.get(key);const art=InstrumentArtV340[base],im=art&&instrumentAtlases[art.atlas],clip=art?.clips[rear?1:0],path=new Path2D();if(!im?.complete||!clip)return path;const cv=document.createElement('canvas');cv.width=W;cv.height=H;const c=cv.getContext('2d');c.drawImage(im,...clip,0,0,W,H);const pixels=c.getImageData(0,0,W,H).data;for(let y=Math.floor(H*.46);y<H;y++){let start=-1;for(let x=0;x<=W;x++){const solid=x<W&&pixels[(y*W+x)*4+3]>32;if(solid&&start<0)start=x;if(!solid&&start>=0){path.rect(start/W,y/H,(x-start)/W,1/H);start=-1;}}}customCoverageCache.set(key,path);return path;}

// v3.23: compact management, configurable circulation and coherent surface artwork.
let entranceEditor=null,entranceDraft=null,vipDragStart=null;
let materialAtlas23=null,propAtlas23=null;
const propClips23={door:[145,15,250,487],lamp:[680,15,155,487],planter:[1084,118,410,319],guitar:[128,532,260,475],clock:[581,568,371,385],sign:[1097,558,380,430]};
const propMasks231={"door":{"width":250,"height":487,"rects":[[3,4,238,1],[3,5,239,1],[2,6,241,7],[3,13,239,1],[4,14,238,1],[4,15,237,1],[5,16,235,1],[6,17,234,1],[7,18,232,1],[8,19,230,1],[9,20,228,4],[10,24,227,1],[10,25,226,1],[11,26,224,1],[11,27,223,1],[12,28,222,21],[11,49,224,1],[10,50,225,1],[11,51,224,1],[10,52,225,1],[11,53,224,3],[12,56,222,1],[13,57,220,1],[13,58,219,1],[14,59,218,107],[14,166,217,1],[14,167,218,20],[14,187,217,16],[14,203,218,11],[14,214,217,46],[14,260,218,13],[14,273,217,19],[14,292,218,13],[14,305,217,15],[14,320,218,100],[14,420,217,8],[14,428,218,13],[13,441,219,3],[12,444,221,2],[11,446,223,1],[12,447,222,9],[11,456,223,24],[11,480,25,1],[210,480,24,1],[14,481,9,1],[214,481,13,1],[230,481,1,1]]},"lamp":{"width":155,"height":487,"rects":[[91,3,3,1],[88,4,9,1],[87,5,11,1],[85,6,14,1],[85,7,15,1],[84,8,17,1],[83,9,18,1],[83,10,19,1],[82,11,20,4],[83,15,19,2],[83,17,18,1],[84,18,17,1],[85,19,15,1],[86,20,13,1],[86,21,12,2],[85,23,14,2],[85,25,15,1],[84,26,16,1],[84,27,17,1],[83,28,18,1],[82,29,20,1],[81,30,22,1],[79,31,26,1],[77,32,29,1],[74,33,35,1],[73,34,38,2],[73,36,39,1],[72,37,40,1],[71,38,41,1],[71,39,42,1],[69,40,45,1],[68,41,47,1],[67,42,50,1],[66,43,52,1],[65,44,54,1],[64,45,56,1],[63,46,58,1],[61,47,61,1],[60,48,63,1],[59,49,65,1],[57,50,69,1],[55,51,74,1],[52,52,80,1],[50,53,84,1],[48,54,88,1],[46,55,92,1],[44,56,96,1],[42,57,100,1],[40,58,104,1],[40,59,105,4],[40,63,104,1],[42,64,100,1],[44,65,96,1],[46,66,93,1],[47,67,91,1],[47,68,90,1],[48,69,88,1],[49,70,86,1],[50,71,85,1],[50,72,84,1],[51,73,83,2],[51,75,82,1],[52,76,81,3],[52,79,80,1],[53,80,79,1],[53,81,78,1],[54,82,77,2],[54,84,76,3],[55,87,75,1],[55,88,74,4],[56,92,73,1],[56,93,72,4],[57,97,70,3],[57,100,69,1],[58,101,68,3],[58,104,67,1],[59,105,66,2],[59,107,65,2],[60,109,64,2],[60,111,63,2],[61,113,62,2],[62,115,60,4],[63,119,58,6],[64,125,57,1],[63,126,58,4],[64,130,56,1],[66,131,53,1],[68,132,50,1],[70,133,46,1],[71,134,43,1],[71,135,41,1],[72,136,40,2],[73,138,38,2],[74,140,36,1],[76,141,32,1],[77,142,30,1],[79,143,26,1],[81,144,23,1],[82,145,21,1],[82,146,20,1],[82,147,21,2],[81,149,22,4],[82,153,21,1],[82,154,20,1],[83,155,19,2],[84,157,17,4],[83,161,18,1],[83,162,19,2],[83,164,20,1],[81,165,23,1],[80,166,24,1],[79,167,26,1],[79,168,27,1],[78,169,28,4],[79,173,26,2],[80,175,24,1],[81,176,22,1],[82,177,21,1],[82,178,20,1],[83,179,19,3],[84,182,17,18],[84,200,18,6],[83,206,19,54],[82,260,20,26],[82,286,21,33],[81,319,23,1],[80,320,24,1],[80,321,25,1],[79,322,27,1],[78,323,28,1],[78,324,29,2],[77,326,30,1],[78,327,29,3],[79,330,27,2],[80,332,25,1],[81,333,23,9],[80,342,25,2],[79,344,27,1],[78,345,29,1],[77,346,31,1],[76,347,32,1],[75,348,34,1],[74,349,36,1],[73,350,39,1],[72,351,41,2],[72,353,42,1],[71,354,43,3],[72,357,42,1],[72,358,41,2],[73,360,40,1],[73,361,39,1],[74,362,37,1],[74,363,36,1],[75,364,35,1],[75,365,34,2],[75,367,35,19],[75,386,36,1],[74,387,37,13],[73,400,39,10],[73,410,40,1],[72,411,41,4],[72,415,42,1],[71,416,44,1],[70,417,46,1],[70,418,47,1],[69,419,48,3],[68,422,50,1],[67,423,52,1],[66,424,54,1],[65,425,56,1],[64,426,57,1],[63,427,59,3],[63,430,60,2],[62,432,61,1],[61,433,64,1],[59,434,68,1],[57,435,72,1],[56,436,75,1],[55,437,77,1],[53,438,81,1],[51,439,84,1],[49,440,88,1],[47,441,91,1],[46,442,93,4],[46,446,94,7],[46,453,93,2],[46,455,94,1],[47,456,92,1],[49,457,88,1],[51,458,84,1],[53,459,81,1],[54,460,78,1],[56,461,74,1],[57,462,72,1],[59,463,68,1],[61,464,63,1],[63,465,59,1],[65,466,56,1],[66,467,53,1],[68,468,49,1],[70,469,45,1],[72,470,42,1],[73,471,39,1],[75,472,35,1],[77,473,31,1],[79,474,27,1],[80,475,25,1],[82,476,21,1],[84,477,18,1],[86,478,14,1],[88,479,10,1],[89,480,6,1]]},"planter":{"width":410,"height":319,"rects":[[297,5,7,1],[297,6,9,1],[298,7,10,1],[298,8,12,1],[298,9,13,1],[261,10,4,1],[298,10,14,1],[259,11,10,1],[298,11,15,1],[201,12,4,1],[257,12,14,1],[299,12,14,1],[325,12,11,1],[195,13,10,1],[252,13,21,1],[298,13,16,1],[323,13,15,1],[193,14,12,1],[246,14,28,1],[275,14,1,1],[299,14,15,2],[322,14,16,1],[191,15,13,1],[245,15,34,1],[321,15,17,1],[190,16,14,1],[244,16,38,1],[300,16,14,2],[320,16,18,1],[189,17,15,1],[242,17,43,1],[319,17,19,1],[187,18,17,2],[238,18,48,1],[301,18,13,2],[319,18,18,1],[237,19,51,1],[318,19,19,1],[186,20,18,2],[236,20,53,1],[303,20,11,1],[318,20,18,2],[235,21,55,2],[305,21,8,1],[185,22,19,1],[307,22,6,1],[318,22,17,1],[184,23,20,3],[234,23,58,1],[308,23,4,1],[318,23,16,1],[234,24,70,1],[309,24,3,2],[318,24,15,1],[233,25,73,1],[319,25,12,1],[184,26,19,1],[232,26,76,1],[311,26,1,2],[319,26,11,1],[184,27,18,2],[231,27,78,1],[323,27,1,1],[325,27,1,1],[229,28,81,1],[184,29,17,1],[228,29,84,1],[323,29,7,1],[184,30,16,2],[228,30,83,2],[321,30,10,1],[166,31,8,1],[312,31,2,1],[315,31,19,1],[163,32,14,1],[185,32,13,1],[227,32,109,1],[161,33,17,1],[185,33,12,1],[227,33,111,1],[159,34,21,2],[186,34,10,1],[227,34,112,2],[345,34,7,1],[187,35,7,1],[344,35,9,1],[158,36,23,1],[189,36,3,1],[226,36,114,1],[342,36,11,1],[161,37,20,1],[187,37,1,1],[201,37,1,1],[225,37,115,2],[342,37,12,1],[161,38,21,1],[197,38,11,1],[341,38,13,1],[162,39,20,1],[195,39,15,1],[224,39,132,2],[162,40,21,1],[193,40,19,1],[163,41,20,1],[184,41,1,1],[187,41,1,2],[191,41,23,1],[224,41,133,2],[164,42,20,1],[190,42,26,1],[141,43,8,1],[165,43,19,1],[185,43,1,1],[187,43,31,2],[225,43,132,2],[141,44,11,1],[166,44,18,1],[101,45,7,1],[141,45,13,1],[167,45,18,1],[186,45,33,2],[225,45,133,4],[99,46,11,1],[141,46,15,1],[170,46,15,1],[97,47,14,1],[141,47,16,1],[173,47,47,1],[364,47,9,1],[96,48,17,1],[141,48,17,1],[177,48,41,1],[361,48,15,1],[94,49,22,1],[141,49,18,1],[179,49,40,1],[224,49,154,1],[86,50,31,1],[142,50,18,2],[181,50,37,1],[224,50,155,1],[85,51,34,1],[177,51,1,1],[179,51,3,1],[183,51,5,1],[189,51,1,1],[192,51,26,1],[220,51,161,1],[83,52,43,1],[142,52,19,2],[174,52,14,1],[193,52,187,1],[81,53,47,1],[172,53,16,1],[194,53,185,2],[80,54,50,1],[143,54,18,1],[171,54,17,1],[79,55,52,1],[143,55,19,1],[169,55,19,1],[193,55,185,1],[78,56,53,1],[144,56,18,1],[167,56,23,1],[191,56,186,1],[78,57,54,1],[145,57,16,1],[166,57,210,1],[77,58,56,2],[146,58,15,1],[165,58,209,1],[147,59,14,1],[164,59,209,1],[75,60,59,1],[148,60,13,1],[163,60,208,1],[73,61,62,1],[149,61,12,2],[163,61,206,1],[72,62,65,1],[138,62,6,1],[162,62,206,1],[71,63,298,1],[70,64,300,1],[70,65,303,1],[69,66,305,1],[69,67,307,1],[68,68,309,1],[68,69,310,1],[68,70,311,2],[55,72,4,1],[68,72,312,1],[53,73,6,1],[68,73,313,2],[51,74,8,1],[49,75,11,1],[68,75,314,1],[48,76,12,1],[67,76,315,1],[47,77,13,1],[66,77,316,2],[46,78,15,1],[15,79,12,1],[45,79,16,1],[65,79,308,1],[11,80,19,1],[44,80,17,1],[65,80,307,2],[9,81,23,1],[43,81,18,2],[10,82,23,1],[65,82,308,1],[12,83,22,1],[42,83,19,3],[64,83,310,1],[12,84,23,1],[64,84,312,1],[13,85,23,2],[64,85,313,1],[41,86,20,3],[64,86,315,1],[14,87,23,2],[64,87,317,1],[64,88,319,1],[15,89,22,1],[41,89,21,1],[63,89,322,1],[15,90,23,1],[41,90,346,1],[16,91,22,1],[41,91,348,1],[17,92,21,1],[41,92,350,1],[18,93,20,1],[41,93,352,1],[19,94,19,1],[41,94,354,1],[20,95,18,1],[42,95,354,2],[22,96,16,1],[24,97,13,1],[43,97,353,2],[27,98,7,1],[43,99,354,2],[41,100,1,1],[41,101,356,1],[21,102,11,1],[33,102,1,1],[41,102,1,1],[43,102,354,1],[19,103,17,1],[41,103,356,1],[16,104,22,1],[42,104,355,1],[15,105,24,1],[40,105,1,1],[42,105,354,1],[13,106,383,1],[12,107,384,1],[11,108,385,1],[10,109,386,1],[9,110,387,2],[8,112,387,1],[7,113,386,1],[7,114,384,1],[6,115,384,1],[6,116,26,1],[33,116,357,3],[6,117,25,1],[5,118,25,1],[5,119,23,1],[32,119,358,3],[5,120,21,1],[5,121,19,1],[5,122,15,1],[31,122,358,1],[5,123,2,1],[31,123,359,1],[31,124,358,1],[30,125,359,4],[29,129,360,8],[26,137,363,1],[23,138,366,1],[21,139,368,1],[19,140,370,1],[17,141,372,1],[15,142,374,1],[14,143,375,15],[15,158,374,1],[16,159,373,1],[17,160,372,1],[19,161,370,1],[20,162,369,1],[21,163,368,13],[21,176,369,1],[21,177,370,1],[21,178,371,2],[21,180,372,26],[21,206,371,1],[21,207,372,1],[21,208,327,1],[350,208,42,1],[21,209,325,1],[350,209,40,1],[21,210,323,1],[351,210,37,1],[21,211,320,1],[353,211,33,1],[21,212,318,1],[355,212,28,1],[21,213,315,1],[357,213,23,1],[21,214,313,1],[359,214,19,1],[21,215,310,1],[361,215,14,1],[21,216,307,1],[364,216,9,1],[21,217,304,1],[366,217,4,1],[21,218,302,1],[21,219,299,1],[21,220,297,1],[21,221,295,1],[21,222,292,1],[21,223,290,1],[20,224,288,1],[19,225,287,1],[19,226,284,1],[18,227,282,1],[18,228,280,1],[18,229,277,1],[18,230,275,1],[18,231,273,1],[18,232,270,1],[18,233,267,1],[18,234,264,1],[18,235,261,1],[18,236,259,1],[18,237,257,1],[18,238,255,1],[18,239,252,1],[18,240,250,1],[18,241,247,1],[18,242,244,1],[18,243,242,1],[18,244,240,1],[18,245,237,1],[18,246,234,1],[18,247,232,1],[18,248,229,1],[18,249,226,1],[18,250,224,1],[18,251,221,1],[18,252,219,1],[18,253,216,1],[18,254,214,1],[19,255,211,1],[20,256,207,1],[22,257,202,1],[24,258,198,1],[25,259,194,1],[27,260,190,1],[29,261,23,1],[55,261,159,1],[31,262,19,1],[57,262,155,1],[33,263,14,1],[59,263,150,1],[35,264,9,1],[61,264,146,1],[37,265,4,1],[63,265,140,1],[65,266,136,1],[67,267,131,1],[68,268,128,1],[70,269,124,1],[72,270,119,1],[73,271,116,1],[75,272,111,1],[77,273,106,1],[78,274,103,1],[80,275,99,1],[82,276,94,1],[83,277,91,1],[85,278,86,1],[86,279,83,1],[88,280,78,1],[90,281,73,1],[92,282,69,1],[94,283,64,1],[95,284,60,1],[97,285,56,1],[99,286,51,1],[100,287,48,1],[100,288,47,1],[99,289,48,8],[99,297,47,5],[100,302,46,1],[101,303,45,1],[103,304,42,1],[104,305,38,1],[106,306,34,1],[108,307,30,1],[110,308,25,1],[111,309,22,1],[113,310,17,1],[115,311,13,1],[117,312,9,1],[119,313,4,1]]},"guitar":{"width":260,"height":475,"rects":[[6,2,248,1],[5,3,249,39],[6,42,248,1],[5,43,249,119],[6,162,248,1],[5,163,249,99],[6,262,248,1],[5,263,249,153],[6,416,248,3],[5,419,249,49],[6,468,248,1]]},"clock":{"width":371,"height":385,"rects":[[175,9,20,1],[166,10,39,1],[159,11,53,1],[154,12,63,1],[150,13,71,1],[146,14,79,1],[142,15,88,1],[138,16,96,1],[135,17,102,1],[131,18,109,1],[128,19,115,1],[126,20,119,1],[124,21,124,1],[122,22,128,1],[119,23,133,1],[116,24,139,1],[113,25,144,1],[111,26,149,1],[109,27,153,1],[108,28,156,1],[106,29,159,1],[104,30,163,1],[102,31,166,1],[101,32,169,1],[99,33,173,1],[97,34,177,1],[96,35,179,1],[94,36,183,1],[93,37,186,1],[91,38,189,1],[90,39,191,1],[89,40,194,1],[87,41,197,1],[86,42,199,1],[84,43,203,1],[83,44,205,1],[82,45,207,1],[80,46,211,1],[79,47,213,1],[78,48,215,1],[77,49,217,1],[76,50,220,1],[75,51,222,1],[74,52,224,1],[73,53,226,1],[72,54,228,1],[70,55,231,1],[69,56,233,1],[68,57,235,1],[67,58,237,1],[66,59,239,1],[65,60,241,1],[64,61,243,1],[63,62,245,1],[62,63,247,1],[61,64,249,1],[60,65,251,1],[59,66,253,1],[58,67,255,1],[58,68,256,1],[57,69,258,1],[56,70,259,1],[55,71,261,1],[54,72,263,1],[53,73,265,1],[52,74,267,1],[51,75,268,1],[51,76,269,1],[50,77,271,1],[49,78,273,1],[48,79,275,1],[47,80,276,1],[47,81,277,1],[46,82,279,1],[45,83,281,2],[44,85,283,1],[43,86,285,2],[42,88,287,2],[41,90,289,1],[40,91,291,2],[39,93,293,1],[38,94,294,1],[38,95,295,1],[37,96,296,1],[37,97,297,1],[36,98,298,1],[35,99,300,1],[35,100,301,1],[34,101,302,1],[34,102,303,1],[33,103,304,1],[33,104,305,1],[32,105,307,1],[31,106,308,1],[31,107,309,1],[30,108,310,2],[30,110,311,1],[29,111,312,1],[29,112,313,1],[28,113,314,1],[28,114,315,2],[27,116,317,2],[26,118,318,1],[26,119,319,2],[25,121,321,3],[24,124,323,2],[23,126,324,1],[23,127,325,2],[22,129,326,1],[22,130,327,1],[21,131,328,2],[21,133,329,1],[20,134,330,2],[20,136,331,1],[19,137,332,2],[19,139,333,1],[18,140,334,3],[18,143,335,1],[17,144,336,3],[17,147,337,1],[16,148,338,4],[15,152,340,4],[15,156,341,1],[14,157,342,5],[14,162,343,1],[13,163,344,6],[13,169,345,1],[12,170,346,8],[12,178,347,3],[11,181,348,22],[12,203,347,1],[12,204,346,9],[12,213,345,2],[13,215,344,6],[13,221,343,1],[14,222,342,4],[14,226,341,2],[15,228,340,4],[16,232,338,4],[17,236,337,1],[17,237,336,3],[18,240,335,1],[18,241,334,3],[19,244,332,3],[20,247,331,1],[20,248,330,2],[21,250,328,3],[22,253,327,1],[22,254,326,2],[23,256,325,1],[23,257,324,1],[24,258,323,2],[24,260,322,1],[25,261,321,1],[25,262,320,1],[26,263,319,2],[26,265,318,1],[27,266,317,1],[27,267,316,2],[28,269,314,2],[29,271,312,2],[29,273,311,1],[30,274,310,2],[31,276,308,1],[31,277,307,1],[32,278,306,1],[33,279,304,2],[34,281,302,1],[35,282,301,1],[35,283,300,1],[36,284,299,1],[36,285,298,1],[37,286,297,1],[37,287,296,1],[38,288,294,1],[39,289,293,1],[39,290,292,1],[40,291,291,1],[41,292,289,1],[41,293,288,1],[42,294,287,1],[43,295,285,1],[43,296,284,1],[44,297,283,1],[45,298,281,1],[45,299,280,1],[46,300,278,1],[47,301,277,1],[47,302,276,1],[48,303,274,1],[49,304,272,1],[50,305,271,1],[51,306,269,1],[51,307,268,1],[52,308,266,1],[53,309,265,1],[54,310,263,1],[55,311,261,1],[56,312,259,1],[57,313,257,1],[58,314,256,1],[58,315,255,1],[59,316,253,1],[60,317,251,1],[60,318,250,1],[61,319,248,1],[62,320,246,1],[63,321,244,1],[64,322,242,1],[65,323,240,1],[66,324,238,1],[67,325,236,1],[68,326,234,1],[70,327,231,1],[71,328,229,1],[72,329,227,1],[73,330,225,1],[74,331,223,1],[75,332,221,1],[76,333,219,1],[77,334,217,1],[78,335,215,1],[80,336,211,1],[81,337,209,1],[82,338,207,1],[84,339,203,1],[85,340,201,1],[86,341,199,1],[88,342,195,1],[90,343,192,1],[91,344,190,1],[92,345,187,1],[94,346,183,1],[95,347,181,1],[97,348,177,1],[98,349,175,1],[100,350,171,1],[102,351,167,1],[104,352,164,1],[105,353,161,1],[107,354,157,1],[109,355,153,1],[111,356,149,1],[113,357,145,1],[115,358,141,1],[117,359,137,1],[120,360,131,1],[123,361,126,1],[125,362,121,1],[127,363,117,1],[130,364,111,1],[133,365,105,1],[137,366,98,1],[140,367,92,1],[142,368,86,1],[147,369,77,1],[151,370,69,1],[155,371,61,1],[160,372,50,1],[167,373,36,1]]},"sign":{"width":380,"height":430,"rects":[[113,6,4,1],[128,6,8,1],[111,7,13,1],[125,7,16,1],[108,8,38,1],[106,9,44,1],[104,10,49,1],[103,11,51,1],[102,12,52,1],[97,13,60,1],[95,14,66,1],[93,15,73,1],[91,16,80,1],[89,17,86,1],[89,18,94,1],[88,19,101,1],[88,20,106,1],[88,21,111,1],[88,22,115,1],[87,23,122,1],[87,24,127,1],[87,25,132,1],[87,26,137,1],[87,27,142,1],[87,28,148,1],[86,29,155,1],[86,30,160,1],[255,30,2,1],[86,31,177,1],[86,32,183,1],[86,33,189,1],[86,34,193,1],[85,35,195,2],[85,37,196,1],[85,38,202,1],[85,39,207,1],[85,40,211,1],[84,41,216,1],[84,42,217,1],[84,43,218,2],[83,45,219,1],[83,46,220,3],[82,49,221,2],[82,51,222,3],[81,54,223,2],[81,56,224,2],[80,58,225,2],[80,60,226,3],[79,63,227,2],[79,65,228,3],[78,68,229,1],[78,69,230,3],[77,72,231,2],[77,74,232,3],[76,77,233,2],[76,79,234,2],[75,81,235,3],[75,84,236,1],[74,85,237,5],[73,90,239,6],[72,96,241,4],[71,100,242,1],[71,101,243,3],[71,104,244,1],[70,105,245,4],[70,109,246,2],[69,111,247,3],[69,114,248,1],[68,115,249,2],[68,117,250,2],[67,119,251,4],[67,123,252,1],[66,124,253,4],[66,128,254,1],[65,129,255,3],[65,132,256,1],[64,133,257,4],[64,137,258,1],[63,138,259,3],[63,141,260,2],[62,143,261,3],[62,146,262,1],[61,147,263,4],[61,151,264,2],[60,153,265,3],[59,156,267,5],[58,161,269,4],[57,165,270,2],[57,167,271,3],[56,170,272,2],[56,172,273,3],[55,175,274,2],[55,177,275,3],[54,180,276,1],[54,181,277,4],[53,185,279,4],[52,189,280,2],[52,191,281,3],[51,194,282,1],[51,195,283,4],[50,199,285,4],[49,203,286,1],[49,204,287,3],[48,207,288,2],[48,209,289,3],[47,212,290,2],[47,214,291,2],[46,216,292,2],[46,218,293,3],[45,221,294,2],[45,223,295,2],[44,225,296,3],[44,228,297,1],[43,229,298,4],[42,233,300,5],[41,238,302,5],[40,243,304,4],[39,247,305,1],[39,248,306,4],[39,252,307,1],[38,253,308,4],[38,257,309,2],[37,259,310,2],[37,261,311,3],[36,264,312,2],[36,266,313,1],[35,267,314,3],[35,270,315,2],[34,272,316,3],[33,275,318,4],[33,279,319,1],[32,280,320,3],[32,283,225,1],[259,283,93,1],[31,284,226,2],[263,284,90,1],[268,285,85,1],[31,286,225,3],[273,286,80,1],[277,287,76,1],[281,288,72,1],[30,289,226,2],[285,289,69,1],[290,290,64,1],[30,291,225,2],[294,291,60,1],[298,292,56,1],[29,293,226,5],[302,293,53,1],[307,294,48,1],[310,295,45,1],[314,296,41,1],[318,297,37,1],[28,298,226,4],[318,298,38,1],[319,299,37,4],[27,302,227,3],[319,303,38,1],[320,304,37,3],[27,305,226,1],[26,306,227,4],[320,307,38,1],[321,308,37,4],[25,310,228,1],[25,311,227,5],[322,312,37,5],[24,316,228,1],[24,317,227,3],[323,317,37,5],[23,320,228,3],[324,322,36,1],[23,323,227,2],[324,323,37,3],[22,325,228,5],[325,326,36,3],[325,329,35,1],[21,330,228,5],[325,330,34,1],[326,331,32,1],[329,332,28,1],[333,333,22,1],[336,334,18,1],[20,335,229,1],[340,335,12,1],[20,336,228,3],[344,336,7,1],[19,339,229,2],[19,341,35,2],[56,341,192,1],[61,342,187,1],[18,343,36,2],[65,343,182,1],[69,344,178,1],[18,345,35,2],[72,345,175,1],[76,346,171,1],[17,347,36,3],[81,347,166,1],[85,348,162,1],[88,349,159,1],[17,350,35,2],[92,350,155,1],[96,351,150,1],[16,352,36,3],[100,352,146,1],[104,353,142,1],[108,354,138,1],[15,355,36,4],[112,355,134,1],[116,356,129,1],[120,357,125,1],[123,358,122,1],[14,359,37,1],[128,359,117,1],[14,360,36,4],[132,360,113,1],[136,361,109,1],[139,362,106,1],[144,363,101,1],[14,364,35,1],[148,364,96,1],[13,365,36,4],[151,365,93,1],[154,366,90,1],[159,367,85,1],[163,368,81,1],[13,369,35,1],[167,369,76,1],[12,370,36,3],[171,370,72,1],[176,371,67,1],[180,372,63,1],[13,373,34,1],[183,373,60,1],[16,374,29,1],[187,374,55,1],[20,375,23,1],[191,375,51,1],[24,376,16,1],[196,376,46,1],[27,377,10,1],[199,377,43,1],[31,378,4,1],[202,378,40,1],[205,379,37,2],[205,381,36,2],[204,383,37,4],[204,387,36,2],[203,389,37,5],[203,394,36,1],[202,395,37,6],[201,401,37,5],[200,406,38,1],[200,407,37,5],[199,412,38,2],[199,414,37,4],[200,418,35,1],[203,419,29,1],[208,420,23,1],[212,421,17,1],[215,422,12,1],[218,423,7,1],[221,424,1,1]]}};
const propCache23=new Map();
function criticalAssetKeys(s=S){return before23CriticalAssetKeys(s);}

function prop23(name){
 if(propCache23.has(name))return propCache23.get(name);
 const clip=propClips23[name],mask=propMasks231[name];
 if(!propAtlas23?.complete||!propAtlas23.naturalWidth||!clip||!mask)return null;
 const [x,y,w,h]=clip,cv=document.createElement('canvas');cv.width=w;cv.height=h;
 try{const c=cv.getContext('2d');c.beginPath();for(const [mx,my,mw,mh]of mask.rects)c.rect(mx,my,mw,mh);c.clip();c.drawImage(propAtlas23,x,y,w,h,0,0,w,h);}
 catch(error){console.warn('Optional shop artwork unavailable:',name,error.name);propCache23.set(name,null);return null;}
 propCache23.set(name,cv);return cv;
}


function refreshLivePanel(){before23RefreshLivePanel();for(const [key,value]of [['income',S.revenue+S.furnitureRevenue+S.missionRevenue],['expense',S.expenses],['money',S.money]])setLiveText(document.querySelector('[data-business-'+key+']'),compactMoney(value));}
function openMenuSection(section){if(section==='records')section='business';if(section==='stories'){closeMenu();$('management').close();missionView='story';renderMissions();$('missionDialog').showModal();return true;}return before23OpenMenuSection(section);}





// Entrance descriptors retain edge-relative positions through expansion.
function defaultEntrances(stage=S.stage){const size=Stages[stage];return [{side:'bottom',at:Math.min(9,size.w-2)}];}
function entrancePoint(e,size={w:N,h:M}){return e.side==='bottom'?{x:e.at,y:size.h-1}:e.side==='top'?{x:e.at,y:0}:e.side==='left'?{x:0,y:e.at}:{x:size.w-1,y:e.at};}
function entrancePoints(){return (S.entrances??defaultEntrances()).map(e=>({...entrancePoint(e),side:e.side,at:e.at}));}
function entryForPoint(p){return entrancePoints().reduce((a,b)=>Math.hypot(p.x-b.x,p.y-b.y)<Math.hypot(p.x-a.x,p.y-a.y)?b:a);}
function exitFor(e){return {x:e.x+(e.side==='right'?1.1:e.side==='left'?-1.1:0),y:e.y+(e.side==='bottom'?1.1:e.side==='top'?-1.1:0)};}

function nearestEntrance(p,vip=false){const choices=entrancePoints().map(e=>({e,route:vip?vipPath(p,e):path(p,e)})).filter(o=>o.route);choices.sort((a,b)=>a.route.length-b.route.length);return choices[0]?.e??entrancePoints()[0];}
function resizeShop(){before23ResizeShop();S.entrances??=defaultEntrances();Object.assign(ENTRY,entrancePoints()[0]);routeCache.clear();}
function syncEntrance(){if(!S.entrances){before23SyncEntrance();S.entrances=[{side:'bottom',at:ENTRY.x}];}Object.assign(ENTRY,entrancePoints()[0]);routeCache.clear();}
function entranceReserved(e,size={w:N,h:M}){const p=entrancePoint(e,size),dx=e.side==='left'?1:e.side==='right'?-1:0,dy=e.side==='top'?1:e.side==='bottom'?-1:0;return [p,{x:p.x+dx,y:p.y+dy}];}
function valid(fs,allow=false){return before23Valid(fs,allow)&&entrancePoints().every(e=>!inVIP(e)&&!(S.entrances??defaultEntrances()).filter(d=>d.side===e.side&&d.at===e.at).some(d=>entranceReserved(d).some(p=>fs.some(f=>Furniture.blocks(f,p.x,p.y)))))&&entrancePoints().every(e=>!!path(ENTRY,e,fs));}
function entranceError(list,fs=S.furniture){if(!Array.isArray(list)||list.length<1||list.length>(S.stage>=4?2:1))return '출입구 개수를 확인해주세요';for(const e of list){const n=['top','bottom'].includes(e.side)?N:M;if(!['top','bottom','left','right'].includes(e.side)||!Number.isInteger(e.at)||e.at<1||e.at>n-2)return '모서리에서 한 칸 떨어진 외벽을 선택해주세요';if(entranceReserved(e).some(p=>inVIP(p)||fs.some(f=>Furniture.blocks(f,p.x,p.y))))return '문 앞 두 칸을 비워주세요';}if(list.length===2&&Math.hypot(entrancePoint(list[0]).x-entrancePoint(list[1]).x,entrancePoint(list[0]).y-entrancePoint(list[1]).y)<3)return '출입구 사이를 띄워주세요';const old=S.entrances,entry={...ENTRY};S.entrances=list;Object.assign(ENTRY,entrancePoint(list[0]));routeCache.clear();let ok;try{ok=valid(fs,true);}finally{S.entrances=old;Object.assign(ENTRY,entry);routeCache.clear();}return ok?'':'매장 시설과 출입구 사이의 통로를 확보해주세요';}
function setEntrance(index,e){if(S.phase!=='prepare'||editing!==null||S.vip.guest||index<0||index>1||index===1&&S.stage<4)return false;const list=(S.entrances??defaultEntrances()).map(e=>({...e}));list[index]={...e};const error=entranceError(list);if(error){toast(error);return false;}S.entrances=list;Object.assign(ENTRY,entrancePoint(list[0]));routeCache.clear();sceneCacheKey='';save();ui();renderDirty=true;return true;}
function entranceAt(e){const p=tileAt(e);const choices=[{side:'top',at:p.x,d:Math.abs(p.y)},{side:'bottom',at:p.x,d:Math.abs(p.y-(M-1))},{side:'left',at:p.y,d:Math.abs(p.x)},{side:'right',at:p.y,d:Math.abs(p.x-(N-1))}].sort((a,b)=>a.d-b.d);const a=choices[0];return a.d<=2?{side:a.side,at:a.at}:null;}
function beginEntranceEdit(index){if(S.phase!=='prepare'||editing!==null||index===1&&S.stage<4)return false;closeMenu();$('management').close();hideFurnitureQuick();entranceEditor=index;entranceDraft=null;$('entranceEditBar').hidden=false;$('entranceEditStatus').textContent='외벽을 눌러 위치 선택';$('entranceEditConfirm').disabled=true;return true;}
function previewEntrance(e){entranceDraft=entranceAt(e);const list=(S.entrances??defaultEntrances()).map(e=>({...e}));if(entranceDraft)list[entranceEditor]=entranceDraft;const error=entranceDraft?entranceError(list):'외벽을 선택해주세요';$('entranceEditStatus').textContent=error||'설치 가능';$('entranceEditConfirm').disabled=!!error;renderDirty=true;}
function finishEntranceEdit(commit){if(commit&&!setEntrance(entranceEditor,entranceDraft))return false;entranceEditor=null;entranceDraft=null;$('entranceEditBar').hidden=true;renderDirty=true;return true;}
function spawn(){const primary={...ENTRY},entries=entrancePoints().filter(e=>!people.some(p=>Math.hypot(p.x-exitFor(e).x,p.y-exitFor(e).y)<.8));if(!entries.length)return false;const e=entries[S.customerSequence%entries.length];Object.assign(ENTRY,e);try{return before23Spawn();}finally{Object.assign(ENTRY,primary);}}
function legacyEntrances23(s,size){const candidates=[];for(const side of ['bottom','right','top','left']){const n=['bottom','top'].includes(side)?size.w:size.h;for(let at=1;at<n-1;at++)candidates.push({side,at});}candidates.sort((a,b)=>(a.side==='bottom'?0:100)+Math.abs(a.at-9)-(b.side==='bottom'?0:100)-Math.abs(b.at-9));return [candidates.find(e=>entranceReserved(e,size).every(p=>!inVIP(p,s.vip.zone)&&!s.furniture.some(f=>Furniture.blocks(f,p.x,p.y))))??defaultEntrances(s.stage)[0]];}
function validateExpansionSave(v,s,rules){before23ValidateExpansionSave(v,s,rules);const size={w:rules.stageSizes[s.stage][0],h:rules.stageSizes[s.stage][1]},list=v.entrances??legacyEntrances23(s,size);if(!Array.isArray(list)||!list.length||list.length>(s.stage>=4?2:1))throw Error('출입구 기록');s.entrances=list.map(e=>{if(!e||!['top','bottom','left','right'].includes(e.side)||!Number.isInteger(e.at)||e.at<1||e.at>(['top','bottom'].includes(e.side)?size.w:size.h)-2)throw Error('출입구 위치');if(entranceReserved(e,size).some(p=>inVIP(p,s.vip.zone)||s.furniture.some(f=>Furniture.blocks(f,p.x,p.y))))throw Error('출입구 통로');return {side:e.side,at:e.at};});if(s.entrances.length===2){const a=entrancePoint(s.entrances[0],size),b=entrancePoint(s.entrances[1],size);if(Math.hypot(a.x-b.x,a.y-b.y)<3)throw Error('중복 출입구');}}
// Rectangular VIP draft, bounded to 10x10; reject stranded or out-of-zone assigned furniture.






// Shared material samples are also used by the shop cards.






function wallArtSize(type){return {guitar:[25,43],clock:[30,30],poster:[30,40],record:[32,32],logo:[40,21],lamp:[21,36]}[type];}
function wallArtThumb(c,type,x=0,y=0,w=160,h=135){const im=['guitar','clock'].includes(type)?prop23(type):null;if(!im)return before23WallArtThumb(c,type,x,y,w,h);const k=Math.min((w-20)/im.width,(h-12)/im.height);c.drawImage(im,x+(w-im.width*k)/2,y+(h-im.height*k)/2,im.width*k,im.height*k);}
function drawWallArtwork(c,type){const [w,h]=wallArtSize(type),im=['guitar','clock'].includes(type)?prop23(type):null;c.save();c.shadowColor='#18282055';c.shadowBlur=2;c.shadowOffsetX=1;c.shadowOffsetY=2;if(im)c.drawImage(im,-w/2,-63-h/2,w,h);else {c.shadowBlur=0;before23WallArtThumb(c,type,-w/2-10,-63-h/2-6,w+20,h+12);}c.restore();}



// True plane-mapped top: a single original instrument inside a compact two-cell case.

function drawStoreDoor(e,preview=false){const p=entrancePoint(e),a=['top','bottom'].includes(e.side)?P(p.x-.75,e.side==='top'?-.5:M-.5):P(e.side==='left'?-.5:N-.5,p.y+.75),b=['top','bottom'].includes(e.side)?P(p.x+.75,e.side==='top'?-.5:M-.5):P(e.side==='left'?-.5:N-.5,p.y-.75),start=a.x<b.x?a:b,end=a.x<b.x?b:a,im=prop23('door');if(!im)return;ctx.save();ctx.translate(start.x,start.y);ctx.transform(1,(end.y-start.y)/(end.x-start.x),0,1,0,0);if(preview)ctx.globalAlpha=.65;const w=end.x-start.x,h=76;ctx.shadowColor='#26392b55';ctx.shadowBlur=2;const visitors=[...people,...(S.vip.guest?[S.vip.guest]:[])],distance=visitors.reduce((n,c)=>Math.min(n,Math.hypot(c.x-p.x,c.y-p.y)),Infinity),open=preview?0:Math.max(0,Math.min(1,(2-distance)/1.4));function part(x,y,ww,hh){ctx.drawImage(im,x*im.width,y*im.height,ww*im.width,hh*im.height,x*w,-h+y*h,ww*w,hh*h);}part(0,0,.13,1);part(.88,0,.12,1);part(.13,0,.75,.15);part(.13,.98,.75,.02);ctx.save();ctx.translate(w*.13,-h*.85);ctx.transform(Math.cos(open*1.15),Math.sin(open*1.15)*.2,0,1,0,0);ctx.drawImage(im,im.width*.13,im.height*.15,im.width*.75,im.height*.83,0,0,w*.75,h*.83);ctx.restore();ctx.restore();}
function drawStoreFront(){for(const side of ['bottom','right']){const n=side==='bottom'?N:M,points=(S.entrances??defaultEntrances()).filter(e=>e.side===side).sort((a,b)=>a.at-b.at);let last=-.5;const edge=t=>side==='bottom'?P(t,M-.5):P(N-.5,t);for(const e of points){Interior.facade(ctx,edge(last),edge(e.at-.8),35);last=e.at+.8;}Interior.facade(ctx,edge(last),edge(n-.5),35);}for(const e of (S.entrances??defaultEntrances()).filter(e=>['bottom','right'].includes(e.side)))drawStoreDoor(e);drawExteriorProps(true);}
function drawEntranceDraft(){if(entranceEditor!==null&&entranceDraft){drawStoreDoor(entranceDraft,true);for(const p of entranceReserved(entranceDraft))diamond(p.x,p.y,'#70a47c55','#97ba8d');}}
function exteriorProp(name,x,y,w,h){const im=prop23(name);if(!im)return;const p=P(x,y);ctx.save();ctx.shadowColor='#39402c30';ctx.shadowBlur=3;ctx.shadowOffsetY=2;ctx.drawImage(im,p.x-w/2,p.y-h,w,h);ctx.restore();}
function drawExteriorProps(front=false){const points=[['planter',-1.8,1.5,56,42],['lamp',-2.1,M*.65,18,88],['planter',N*.45,M+1.4,56,42],['lamp',N+1.5,M*.65,18,88],['planter',N+1.4,2.5,56,42]];for(const [name,x,y,w,h]of points){if(front!==(x>=N||y>=M))continue;if(entrancePoints().some(e=>Math.hypot(x-e.x,y-e.y)<2.5))continue;exteriorProp(name,x,y,w,h);}if(front){const e=entrancePoints()[0],p=exitFor(e);exteriorProp('sign',p.x+(e.side==='bottom'?1.4:0),p.y+(e.side==='right'?1.4:0),22,35);}}



function updateVIPDraftDoor(){if(!vipZoneDraft)return;const side=$('vipDraftSide').value,len=['left','right'].includes(side)?vipZoneDraft.h:vipZoneDraft.w;vipZoneDraft.doorSide=side;vipZoneDraft.doorAt=Math.min(len-2,Math.max(1,+$('vipDraftAt').value-1));$('vipDraftAt').max=len-1;$('vipDraftAt').value=vipZoneDraft.doorAt+1;const error=zoneError(vipZoneDraft);$('vipEditStatus').textContent=`${vipZoneDraft.w}×${vipZoneDraft.h} · `+(error||'배치 가능');$('vipEditConfirm').disabled=!!error;sceneCacheKey='';renderDirty=true;}


// SOURCE: core/state
// Persistent state; the versioned decoder also accepts old unversioned saves.
function fresh() {
  return {
    ...expansionDefaults(),
    saveVersion: Config.saveVersion,
    ending: {day:0,viewed:false,continued:false,records:null},
    shopName: '작은 선율',
    named: false,
    opened: false,
    phase: 'prepare',
    stage: 0,
    dayRent: 30000,
    settlement: null,
    specialDone: false,
    posterRoll: {day:0,won:false},
    guests: [],
    introducedTiers: [],
    pendingIntroductions: [],
    expansionNotice: null,
    customerBook: {},
    hanaStory: { phase: 'locked', startedDay: 0, deliveredDay: 0, completedDay: 0 },
    requests: [],
    nextRequestId: 1,
    repathGuests: false,
    pendingOrders: [],
    tutorial:{active:false,step:0,purchased:false,startDay:1,completed:false},
    staffHired: 0,
    cashierHired: 0,
    featureNotices: [],
    newFeatures: [],
    staffPolicy: { enabled:true, reserve:0, products: products.map((p, i) => ({ enabled: true, quantity: orderQuantity(i), at: null })) },
    showcase: null,
    drummerIntroduced: false,
    adDay: 0,
    furnitureRevenue: 0,
    ledgerStart: Config.startingMoney,
    audio: { music: 0.22, effects: 0.6, muted: false },
    customerSequence: 0,
    money: Config.startingMoney,
    day: 1,
    time: 0,
    revenue: 0,
    sold: 0,
    visitors: 0,
    totalSales: 0,
    totalRevenue: 0,
    expenses: 0,
    rep: Config.reputation.start,
    reputationDaily: { day: 1, gained: 0 },
    missionRevenue: 0,
    missionStats: { sales: Array(products.length).fill(0), bestDay: 0, legacyImported: false },
    claimedMissions: [],
    pendingMissionGuests: [],
    introducedMissionGuests: [],
    stock: [...Config.initialStock],
    furniture: initialFurniture.map((f) => ({ ...f })),
    nextId: Math.max(0, ...initialFurniture.map((f) => f.id)) + 1
  };
}
let S = fresh(),
  storageOK = true,
  storageReadFailed = false;
try {
  S = SaveStore.decode(localStorage.getItem(KEY), fresh(), saveRules());
} catch {
  storageOK = false;
  storageReadFailed = true;
}
S.audio = { music: 0.22, effects: 0.6, muted: false, ...S.audio };
S.furniture = S.furniture.map(Furniture.migrate);
const Sound = new window.ShopAudio(S.audio);


// SOURCE: ui/session
// All transient selection/placement state lives here, never in the saved shop.
let editing = null,
  selected = null,
  tab = 'shop',
  hover = null;
let placementPreview = null,
  previewLocked = false,
  placementDir = 0,
  rackPickerId = null,
  rackPickerSlot = 0,
  rackFilter = 'all';
function resetPlacementState() {
  editing = null;
  selected = null;
  hover = null;
  placementPreview = null;
  previewLocked = false;
  $('editHint').hidden = true;
  document.body.classList.remove('editing');
}
function resetInteractionState() {
 resetDesignEditor();
 vipEmployeeActor=null;document.body.classList.remove('vip-editing');
 closeMenu();readyGoalKey=null;
 vipEditor=false;vipZoneDraft=null;workshopDraft=null;workshopBenchId=null;if($('vipEditBar'))$('vipEditBar').hidden=true;for(const id of ['interiorDialog','workshopDialog','customDisplayDialog'])$(id)?.close();
  for(const id of ['missionDialog','dismissConfirm','decorDetail','saveManager','importConfirm'])$(id).close();
  tutorialReading=false;lastTutorialStep=-1;tutorialRenderKey='';$('tutorialCard').hidden=true;document.body.classList.remove('tutorial-active');
  resetPlacementState();
  rackPickerId = null;
  rackPickerSlot = 0;
  rackFilter = 'all';
  for (const key of Object.keys(purchaseQuantities)) delete purchaseQuantities[key];
  activePointers.clear();
  pinch = null;
  drag = null;
  wasDragged = false;
  $('rackPicker').close();
  $('staffSettings').close();
  $('staffManagement').close();
  resetStaffAnimation();
  $('endingModal').close();
  stockStatus='all';stockFilter='instrument';instrumentFilter='all';furnitureView='purchase';relationshipFilter='all';
}


// SOURCE: core/runtime
// Shared runtime state, initialized once by the generated application closure.
function asset(path) {
  const table = window.GameAssets;
  if (!table) return path;
  if (!table[path]) throw new Error('Missing embedded asset: ' + path);
  return table[path];
}
let people = S.guests ?? [],
  floaters = [],
  spawnTime = 0,
  paused = false,
  speed = 1,
  zoom = 1,
  toastTimer = 0,
  uiTime = 0,
  last = 0,
  renderDirty = true;
// The loader owns one decoded image per asset. Legacy/headless builds load directly.
function runtimeImage(key) {
  if (window.ShopAssets) return window.ShopAssets.image(key);
  const cache=runtimeImage.cache??=new Map();if(cache.has(key))return cache.get(key);
  const im = new Image(); im.src = asset(key);cache.set(key,im); return im;
}
const atlas = runtimeImage('assets/furniture.webp');
const backAtlas = runtimeImage('assets/furniture-back.webp');
const cabinetAtlas = runtimeImage('assets/empty-cabinet-v3.webp');
const goodsAtlas = runtimeImage('assets/goods-v3.webp');
const rackAtlas = runtimeImage('assets/empty-rack-v7.webp');
const accessoryAtlas = runtimeImage('assets/accessories-v370.webp');
const naturalWalkAtlases = NaturalWalkAtlasKeys.map(runtimeImage);
const instrumentAtlases = [0,1,2].map(n=>runtimeImage('assets/instruments-'+n+'-v340.webp'));instrumentAtlases.push(runtimeImage('assets/acoustics-v3200.webp'));
const drumFixtureAtlas = runtimeImage('assets/drum-fixtures-v350.webp');
const drumProductAtlas = runtimeImage('assets/drum-product-v350.webp');
const decorAtlas=runtimeImage('assets/decor-v3130.webp');
const auditionAtlas=runtimeImage('assets/audition-v3130.webp');
const AuditionClips=[[126, 48, 598, 800], [1042, 45, 597, 795]];
const DecorClips=[[[107,59,301,422],[523,173,488,258],[1106,44,338,452]],[[118,574,287,392],[531,599,471,347],[1106,540,330,453]]];
let doorOpen=0, shopLight=S.phase==='open'||S.phase==='closing'?1:S.phase==='settled'?0.68:0.88;
let titleActive=true,pendingNewGame=false;


// SOURCE: systems/assets
// World entry is transactional: images first, state changes only after success.
let assetBusy=false,assetGateToken=0;
function productAssetKeys(i){
  if(i===26)return ['assets/drum-product-v350.webp'];
  const art=InstrumentArtV340[i];
  return [art?(art.atlas===3?'assets/acoustics-v3200.webp':'assets/instruments-'+art.atlas+'-v340.webp'):AccessoryClips[i]?'assets/accessories-v370.webp':'assets/goods-v3.webp'];
}
function actorAssetKeys(actor){if(CheckoutPoses[actor])return [CheckoutAtlasKey];const frame=NaturalWalkFrames[actor];if(!frame)throw new RangeError('Unknown character identity');return [NaturalWalkAtlasKeys[frame.atlas]];}
function furnitureAssetKeys(f){
  if(f.t===12)return ['assets/premium-showcase-v3220.webp',...products.map((p,i)=>i).filter(i=>isInstrument(i)).flatMap(productAssetKeys)];
  if([15,16].includes(f.t))return ['assets/lounge-v3200.webp',...products.map((p,i)=>i).filter(i=>pVIPAsset(i)).flatMap(productAssetKeys)];
  if(f.t>=11)return ['assets/vip-v3180.webp','assets/atelier-v3180.webp',...productAssetKeys(0)];
  if(f.t===4)return ['assets/audition-v3130.webp'];
  if(f.t>=8)return ['assets/decor-v3130.webp'];
  if(f.t===FurnitureId.DRUM_DISPLAY||f.t===FurnitureId.DRUM_DEMO)return ['assets/drum-fixtures-v350.webp',...(f.t===FurnitureId.DRUM_DISPLAY?productAssetKeys(26):[])];
  if(f.t===FurnitureId.GUITAR_RACK)return ['assets/empty-rack-v7.webp',...[f.p,f.p2].filter(Number.isInteger).flatMap(productAssetKeys)];
  if(f.t===FurnitureId.ACCESSORY_CABINET)return ['assets/empty-cabinet-v3.webp',...(f.items??LegacyShelfItems).flatMap(productAssetKeys)];
  return ['assets/furniture.webp','assets/furniture-back.webp'];
}
function before23CriticalAssetKeys(state=S){
  const claimed=state.claimedMissions??[],features=new Set(MissionDefinitions.filter(m=>claimed.includes(m.id)).map(m=>m.reward.feature));
  const actors=[0,1,2,3,16,...Object.values(SpecialPeopleActors),
    ...CustomerProfiles.filter(p=>(p.unlockStage??p.tier)<=state.stage&&(!p.mission||claimed.includes(p.mission))&&(!p.feature||features.has(p.feature))).map(p=>p.actor===12?21:p.actor),
    ...(state.staffHired?[17,18]:[]),...(state.cashierHired?[19]:[]),...(state.cashierHired>1?[20]:[]),
    ...(state.guests??[]).map(visualActor)];
  const keys=['assets/horizontal-v3200.webp','assets/people-v3200.webp','assets/lounge-v3200.webp','assets/acoustics-v3200.webp','assets/wall-details-v3190.webp','assets/interior-v3180.webp','assets/furniture.webp','assets/furniture-back.webp','assets/empty-rack-v7.webp','assets/empty-cabinet-v3.webp',...actors.flatMap(actorAssetKeys)];
  for(const i of [0,1,2])keys.push(...productAssetKeys(i));
  for(const f of state.furniture)keys.push(...furnitureAssetKeys(f));
  for(const p of state.guests??[]){if(Number.isInteger(p.product))keys.push(...productAssetKeys(p.product));for(const i of p.basket??[])keys.push(...productAssetKeys(i));}
  if(state.stage>=4)keys.push('assets/vip-v3180.webp','assets/atelier-v3180.webp',...products.map((p,i)=>i).filter(i=>isInstrument(i)).flatMap(productAssetKeys));
  return [...new Set(keys)];
}
function assetGate(keys,action,label='매장에 필요한 그림을 준비하고 있어요'){
  keys=[...new Set(keys)];
  const service=window.ShopAssets;
  if(!service||service.ready(keys))return true;
  if(assetBusy)return false;
  assetBusy=true;last=0;
  const token=++assetGateToken,dialog=$('assetLoading'),message=$('assetStatus'),retry=$('assetRetry'),cancel=$('assetCancel');
  const before=document.activeElement,progress=$('assetProgress'),slow=$('assetSlow');
  let waiting=false,slowTimer=0;
  function refresh(){
    const stats=service.stats?.()??{};progress.max=Math.max(1,keys.length);
    progress.value=keys.filter(k=>stats[k]?.state==='ready').length;
    if(waiting)message.textContent=label+' · '+progress.value+' / '+keys.length;
  }
  const unsubscribe=service.subscribe?.(refresh)??(()=>{});
  function stopTimer(){clearTimeout(slowTimer);slow.hidden=true;}
  function close(){if(token!==assetGateToken)return;assetGateToken++;assetBusy=false;last=0;waiting=false;stopTimer();unsubscribe();dialog.close();before?.focus?.();}
  async function attempt(manual=false){
    stopTimer();waiting=true;retry.hidden=true;cancel.disabled=false;refresh();
    slowTimer=setTimeout(()=>{if(token===assetGateToken&&waiting)slow.hidden=false;},15000);
    try{
      await service.ensure(keys,{priority:0,retry:manual});
      if(token!==assetGateToken)return;
      close();action();
    }catch{
      if(token!==assetGateToken)return;
      waiting=false;stopTimer();refresh();
      message.textContent='그림을 준비하지 못했어요. 연결을 확인한 뒤 다시 시도해주세요. 현재 가게는 유지돼요.';retry.hidden=false;
    }
  }
  retry.onclick=()=>attempt(true);cancel.onclick=close;
  dialog.oncancel=e=>{e.preventDefault();close();};dialog.showModal();attempt();return false;
}
function menuArtReady(el,keys){
  const service=window.ShopAssets;if(!service||service.ready(keys))return true;
  const failed=service.failed(keys);el.replaceChildren();
  const note=document.createElement(failed?'button':'span');note.textContent=failed?'그림 다시 시도':'그림 준비 중';
  if(failed){note.type='button';note.onclick=e=>{e.stopPropagation();service.ensure(keys,{priority:1,retry:true}).catch(()=>{});};}
  el.append(note);
  if(!failed)service.ensure(keys,{priority:1}).catch(()=>{});
  return false;
}
if(window.ShopAssets)window.ShopAssets.subscribe(()=>{
  sceneCacheKey='';renderDirty=true;clearFurniturePickCache();clearFurnitureBodyCache();
  if(!titleActive){drawProductIcons();drawIcons();drawCatalogPictures();drawCustomerIcons();}
});


// SOURCE: render/camera
// Camera fit uses the actual room bounds at every expansion size.
const P = (x, y) => ({ x: 500 + (x - y) * 34, y: 198 + (x + y) * 17 });
let view = {
  w: 1000,
  h: 800,
  scale: 1,
  dpr: 1,
  panX: 0,
  panY: 0,
  centerX: 500,
  centerY: 304,
  midY: 400
};
function roomBounds() {
  const a = P(0, 0),
    b = P(N - 1, 0),
    c = P(0, M - 1),
    d = P(N - 1, M - 1);
  return { left: c.x - 50, right: b.x + 50, top: a.y - Math.max(ArtLayout.wallHeight, ArtLayout.rackHeight + 20, ArtLayout.characterHeight + 15) - 6, bottom: d.y + 88 };
}
function resizeView() {
  const r = canvas.getBoundingClientRect();
  view.w = r.width || 1000;
  view.h = r.height || 800;
  view.dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.round(view.w * view.dpr);
  canvas.height = Math.round(view.h * view.dpr);
  const b = roomBounds(),
    landscape = view.w > view.h && view.h <= 550,
    top = landscape ? 75 : 90,
    bottom = landscape ? 75 : 100;
  view.centerX = (b.left + b.right) / 2;
  view.centerY = (b.top + b.bottom) / 2;
  view.midY = (top + view.h - bottom) / 2;
  view.scale = Math.max(
    0.15,
    Math.min(
      (view.w - 28) / (b.right - b.left),
      Math.max(80, view.h - top - bottom) / (b.bottom - b.top)
    )
  );
}
function screenPosition(x, y) {
  const q = P(x, y),
    k = view.scale * zoom;
  return {
    x: view.w / 2 + view.panX + (q.x - view.centerX) * k,
    y: view.midY + view.panY + (q.y - view.centerY) * k
  };
}
window.addEventListener('resize', resizeView);
resizeView();


// SOURCE: ui/feedback
// Small shared UI messages.
function money(n) {
  const value = Math.round(n), amount = Math.abs(value);
  const whole = Math.floor(amount / 10000), rest = amount % 10000;
  return (value < 0 ? '−' : '') + (whole
    ? whole.toLocaleString('ko-KR') + '만' + (rest ? ' ' + rest.toLocaleString('ko-KR') : '')
    : amount.toLocaleString('ko-KR')) + ' 원';
}
function toast(message){const el=$('toast'),top=dialogStack.filter(d=>d.open).at(-1),host=top??document.body;if(el.parentElement!==host)host.append(el);el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3000);}
function log(s) {
  $('activity').textContent = s;
}

function compactMoney(n){if(!Number.isFinite(n))return '0원';const a=Math.abs(n),sign=n<0?'-':'';const fmt=x=>new Intl.NumberFormat('ko-KR',{maximumFractionDigits:1}).format(x);return a>=1e8?sign+fmt(a/1e8)+'억 원':a>=1e4?sign+fmt(a/1e4)+'만 원':Math.round(n).toLocaleString('ko-KR')+'원';}


// SOURCE: systems/navigation
// Navigation, interaction-facing validation and legacy entrance repair.
function checkoutConflicts(fs = S.furniture) {
  const groups = new Map();
  for (const f of fs.filter(f=>f.t===FurnitureId.CHECKOUT)) {
    const p=Furniture.front(f),key=p.x+','+p.y;
    if(!groups.has(key)) groups.set(key,[]);
    groups.get(key).push(f.id);
  }
  return [...groups.values()].filter(ids=>ids.length>1).flat();
}
// Keep the opening gate and its explanation on the same conditions.
function openingRequirements() {
  const racks = S.furniture.filter(f => [FurnitureId.GUITAR_RACK, 6].includes(f.t));
  const stocked = racks.filter(f => rackProducts(f).some(i => productUnlocked(i)));
  const reasons = [];
  if (!racks.length) reasons.push('악기 진열대를 배치하세요');
  else if (!stocked.length) reasons.push('진열대에 판매할 악기를 선택하세요');
  else if (!stocked.some(f => near(f, ENTRY))) reasons.push('악기 진열대까지 손님 통로를 확보하세요');
  if (!checkoutStations().length) reasons.push('계산대를 배치하세요');
  else if (!activeCheckouts().some(f => near(f, ENTRY))) reasons.push('운영 중인 계산대까지 손님 통로를 확보하세요');
  if (!['open', 'closing'].includes(S.phase) && checkoutConflicts().length)
    reasons.push('계산대 앞 손님 칸이 겹치지 않게 배치하세요');
  return reasons;
}
function shopReady() { return openingRequirements().length === 0; }
function openingLabel() {
  return openingRequirements()[0] ?? '가게 오픈 · 10:00';
}
function setupReserve(t) {
  return S.opened
    ? 0
    : [0, 1]
        .filter((kind) => kind !== t && !S.furniture.some((f) => f.t === kind || (kind===0 && f.t===6)) && !(kind===0 && t===6))
        .reduce((sum, kind) => sum + types[kind].cost, 0);
}
function canSellFurniture(f){
 return !!f&&S.phase==='prepare'&&editing===null&&!(f.t===11&&benchJob(f.id))&&
  (f.t!==FurnitureId.CHECKOUT||checkoutActor(f)===null)&&
  (![FurnitureId.GUITAR_RACK,FurnitureId.DRUM_DISPLAY].includes(f.t)||S.furniture.some(q=>q.id!==f.id&&[FurnitureId.GUITAR_RACK,FurnitureId.DRUM_DISPLAY].includes(q.t)));
}
function sellFurniture(id){
 const f=S.furniture.find(q=>q.id===id);if(!canSellFurniture(f)){if(f&&[0,6].includes(f.t))toast('영업에 필요한 마지막 악기 진열대는 유지해주세요.');return false;}
 const product=f.t===15?f.vipSlots?.[0]:null;if(Number.isInteger(product)){if(!Number.isSafeInteger(S.stock[product]+1))return false;S.stock[product]++;}
 if(f.t===11){ensureCraftState();delete S.custom.levels[f.id];delete S.custom.ready[f.id];}const value=Math.floor(types[f.t].cost*.5);S.money+=value;S.furnitureRevenue+=value;S.furniture=S.furniture.filter(q=>q!==f);for(const i of S.custom.items)if(i.displayId===id){i.displayId=null;i.displaySlot=null;}atelierSprites.clear();people=[];selected=null;sceneCacheKey='';hideFurnitureQuick();save();renderPanel();ui();toast('가구를 판매했어요'+(Number.isInteger(product)?' · 진열 악기는 보관으로 회수했어요':''));return true;
}
function canBuyFurniture(t) {
  return furnitureUnlocked(t) && (t!==1||checkoutStations().length<3) && S.money >= types[t].cost + setupReserve(t);
}
function blocked(x, y, fs = S.furniture) {
  if(!vipRouting&&inVIP({x,y}))return true;
  return x < 0 || y < 0 || x >= N || y >= M || fs.some((f) => Furniture.blocks(f,x,y));
}
// Screen-axis routing. u=x-y and v=x+y are screen horizontal/vertical.
// A quarter-tile world lattice permits orthogonal screen travel in narrow aisles.
const routeCache = new Map();
function axisUV(p) {
  return { u: (p.x - p.y) * 2, v: (p.x + p.y) * 2 };
}
function axisWorld(u, v) {
  return { x: (u + v) / 4, y: (v - u) / 4 };
}
function axisConnector(a, b) {
  const aa = axisUV(a),
    bb = axisUV(b),
    out = [];
  if (Math.abs(aa.u - bb.u) > 1e-8) out.push(axisWorld(bb.u, aa.v));
  if (Math.abs(aa.v - bb.v) > 1e-8) out.push({ ...b });
  return out;
}
function exitPoint(){const e=entrancePoints().find(e=>e.x===ENTRY.x&&e.y===ENTRY.y)??entryForPoint(ENTRY);return exitFor(e);}

function path(start, end, fs = S.furniture) {
  const legal = (p) => !blocked(Math.round(p.x), Math.round(p.y), fs);
  if (!legal(end)) return null;
  const outside = !legal(start),
    base = outside ? entryForPoint(start) : start,
    au = axisUV(base),
    bu = axisUV(end),
    b = { u: Math.round(bu.u), v: Math.round(bu.v) };
  let a = { u: Math.round(au.u), v: Math.round(au.v) };
  if (!legal(axisWorld(a.u, a.v))) {
    const choices = [];
    for (let du = -1; du <= 1; du++)
      for (let dv = -1; dv <= 1; dv++) {
        const p = axisWorld(a.u + du, a.v + dv);
        if (legal(p))
          choices.push({ u: a.u + du, v: a.v + dv, d: Math.hypot(p.x - base.x, p.y - base.y) });
      }
    choices.sort((x, y) => x.d - y.d);
    if (!choices.length) return null;
    a = choices[0];
  }
  if (!legal(axisWorld(b.u, b.v))) return null;
  const tag = [
    N,
    M,
    vipRouting,JSON.stringify(S.vip.zone),
    a.u,
    a.v,
    b.u,
    b.v,
    fs
      .map((f) => [f.x,f.y,f.t,Furniture.direction(f)].join(','))
      .sort()
      .join(';')
  ].join('|');
  let core = routeCache.get(tag);
  if (!core) {
    const heap = [],
      best = new Map(),
      key = (u, v) => u + ',' + v,
      heur = (u, v) => Math.abs(u - b.u) + Math.abs(v - b.v) * 0.5;
    function push(n) {
      heap.push(n);
      let i = heap.length - 1;
      while (i) {
        const p = (i - 1) >> 1;
        if (heap[p].f <= n.f) break;
        heap[i] = heap[p];
        i = p;
      }
      heap[i] = n;
    }
    function pop() {
      const first = heap[0],
        last = heap.pop();
      if (heap.length) {
        let i = 0;
        while (i * 2 + 1 < heap.length) {
          let j = i * 2 + 1;
          if (j + 1 < heap.length && heap[j + 1].f < heap[j].f) j++;
          if (heap[j].f >= last.f) break;
          heap[i] = heap[j];
          i = j;
        }
        heap[i] = last;
      }
      return first;
    }
    push({ ...a, g: 0, f: heur(a.u, a.v), dir: -1, parent: null });
    best.set(key(a.u, a.v), 0);
    let found = null;
    while (heap.length) {
      const n = pop();
      if (n.g > best.get(key(n.u, n.v)) + 1e-8) continue;
      if (n.u === b.u && n.v === b.v) {
        found = n;
        break;
      }
      const from = axisWorld(n.u, n.v);
      for (const [du, dv, dir] of [
        [1, 0, 0],
        [-1, 0, 1],
        [0, 1, 2],
        [0, -1, 3]
      ]) {
        const u = n.u + du,
          v = n.v + dv,
          p = axisWorld(u, v);
        if (!legal(p)||!vipEdgeLegal(from,p)) continue;
        const ax = Math.round(from.x),
          ay = Math.round(from.y),
          bx = Math.round(p.x),
          by = Math.round(p.y);
        if (ax !== bx && ay !== by && (blocked(ax, by, fs) || blocked(bx, ay, fs))) continue;
        const g = n.g + (du ? 1 : 0.5) + (n.dir !== -1 && n.dir !== dir ? 0.3 : 0),
          k = key(u, v);
        if (g >= (best.get(k) ?? Infinity) - 1e-8) continue;
        best.set(k, g);
        push({ u, v, g, f: g + heur(u, v), dir, parent: n });
      }
    }
    if (!found) return null;
    const nodes = [];
    for (let n = found; n.parent; n = n.parent) nodes.unshift(axisWorld(n.u, n.v));
    core = [];
    let previous = axisWorld(a.u, a.v);
    for (let i = 0; i < nodes.length; i++) {
      const p = nodes[i],
        next = nodes[i + 1];
      if (next) {
        const x = axisUV(previous),
          y = axisUV(p),
          z = axisUV(next);
        if (Math.abs((y.u - x.u) * (z.v - y.v) - (y.v - x.v) * (z.u - y.u)) < 1e-8) continue;
      }
      core.push(p);
      previous = p;
    }
    if (routeCache.size > 600) routeCache.clear();
    routeCache.set(tag, core);
  }
  const first = axisWorld(a.u, a.v),
    last = axisWorld(b.u, b.v);
  return [
    ...axisConnector(start, first),
    ...core.map((p) => ({ ...p })),
    ...axisConnector(last, end)
  ];
}
function near(f, start, fs = S.furniture) {
  const target = Furniture.front(f),
    route = path(start, target, fs);
  return route ? { target, path: route } : null;
}
function before23Valid(fs, allowCheckoutConflict = false) {
  return (
    fs.every((f,i)=>Furniture.cells(f).every(p=>p.x>=0&&p.y>=0&&p.x<N&&p.y<M&&!(p.x===ENTRY.x&&p.y===ENTRY.y)&&!fs.slice(i+1).some(q=>Furniture.conflicts(f,q)))) &&
    (allowCheckoutConflict || !checkoutConflicts(fs).length) &&
    !blocked(ENTRY.x, ENTRY.y, fs) &&
    fs.filter((f) => [0, 1, 4, 5, 6, 7].includes(f.t)).every((f) => near(f, ENTRY, fs))
  );
}
function before23SyncEntrance() {
  const initial = S.furniture.map((f) => f.dir);
  ENTRY.y = M - 1;
  for (let x = Math.min(N - 2, 9); x >= 0; x--) {
    ENTRY.x = x;
    S.furniture.forEach((f, i) => (f.dir = initial[i]));
    if (blocked(x, ENTRY.y)) continue;
    for (const f of S.furniture.filter((f) => [0, 1, 4, 5, 6, 7].includes(f.t))) {
      if (near(f, ENTRY)) continue;
      const d = Furniture.direction(f);
      for (let i = 1; i < 4; i++) {
        f.dir = (d + i) % 4;
        if (near(f, ENTRY)) break;
      }
    }
    if (valid(S.furniture, true)) return;
  }
  S.furniture.forEach((f, i) => (f.dir = initial[i]));
  ENTRY.x = Math.max(0, N - 2);
}
N = Stages[S.stage].w;
M = Stages[S.stage].h;
syncEntrance();

function repairGuestRoutes() {
  if (!S.repathGuests) return;
  for (const p of people) {
    if(p.state==='rest'&&['enter','sitting','rise','exit'].includes(p.seatPhase))continue;
    if (p.companion) {
      p.path = [];
      continue;
    }
    if (p.state === 'leave') {
      const route = path(p, ENTRY);
      p.path = route ? [...route, exitPoint()] : [];
      continue;
    }
    const f = S.furniture.find((f) => f.id === (p.state==='rest'?p.restChair:p.stationId)),
      n = f ? near(f, p) : null;
    if (n) {
      p.path = n.path;
      p.target = n.target;
      p.lookTarget = { x: f.x, y: f.y };
    } else if (p.state !== 'queue') {
      const route = path(p, ENTRY);
      p.path = route ? [...route, exitPoint()] : [];
      p.state = 'leave';
      p.timer = 0;
    }
  }
  S.repathGuests = false;
}
repairGuestRoutes();


// SOURCE: systems/day
// Preparation, opening, closing and an idempotent daily ledger.
function stageInfo() {
  return Stages[S.stage];
}
function before23ResizeShop() {
  const st = stageInfo();
  N = st.w;
  M = st.h;
  ENTRY.x = Math.min(N - 2, 9);
  ENTRY.y = M - 1;
  sceneCacheKey = '';
  resizeView();
}
function openShop() {
  if (S.phase !== 'prepare' || editing !== null) return false;
  if(checkoutConflicts().length){toast('계산대 앞 손님 칸이 겹쳐요. 준비 시간에 위치나 방향을 바꿔주세요');return false;}
  if (!shopReady()) {
    toast(openingRequirements().join(' · '));
    return false;
  }
  if(!assetGate(criticalAssetKeys(),openShop))return false;
  deliverOrders(0);
  staffRestock();
  staffTimer = 2;
  S.phase = 'open';
  S.opened = true;
  S.dayRent = stageInfo().rent;
  paused = false;
  spawnTime = 0.5;
  S.specialDone = false;
  $('management').close();
  sceneCacheKey = '';
  Sound.play('open');
  log('문을 열었어요. 오늘도 좋은 선율!');
  save();
  ui();
  return true;
}
function settleDay() {
  if (S.phase === 'settled') return S.settlement;
  if (S.phase !== 'closing' || people.length) return null;
  advanceCrafts();
  const wage = staffWage();
  S.money -= S.dayRent + wage;
  S.expenses += S.dayRent + wage;
  S.opened = false;
  S.phase = 'settled';
  gainReputation(Config.reputation.closing);
  S.missionStats.bestDay = Math.max(S.missionStats.bestDay, S.sold);
  S.time = Config.daySeconds;
  S.settlement = {
    day: S.day,
    income: S.revenue + S.furnitureRevenue + S.missionRevenue,
    expenses: S.expenses,
    net: S.revenue + S.furnitureRevenue + S.missionRevenue - S.expenses,
    rent: S.dayRent,
    wage
  };
  recordEnding();
  sceneCacheKey = '';
  Sound.play('close');
  save();
  showSettlement();
  ui();
  return S.settlement;
}
function showSettlement() {
  for(const id of ['missionDialog','dismissConfirm','staffSettings','staffManagement'])$(id).close();
  const r = S.settlement;
  if (!r) return;
  $('management').close();
  $('modal').close();
  $('settlementTitle').textContent = r.day + '일차 영업 마감';
  $('dailyIncome').textContent = '+' + money(r.income);
  $('dailyExpense').textContent = '−' + money(r.expenses);
  $('dailyNet').textContent = (r.net >= 0 ? '+' : '−') + money(Math.abs(r.net));
  $('nextDay').textContent=endingPending()?'엔딩 보기 →':'다음 날 준비하기 →';
  if (!$('settlement').open) $('settlement').showModal();
}
function restoreDayDialog() {
  $('endingModal').close();
  if (S.phase === 'settled' && endingPending() && S.ending.viewed)showEnding();
  else if (S.phase === 'settled') showSettlement();
  else $('settlement').close();
  if ((S.expansionNotice != null || S.featureNotices.length) && S.phase === 'prepare') showUnlockNotice();
  else $('unlockModal').close();
}
function nextDay() {
  if (S.phase !== 'settled') return false;
  if(endingPending()){showEnding();return false;}
  if(assetBusy||!assetGate(criticalAssetKeys({...S,day:S.day+1}),nextDay))return false;
  S.day++;
  deliverOrders(0);
  S.phase = 'prepare';
  releaseCompletedCrafts();
  S.opened = false;
  S.time = 0;
  S.revenue = 0;
  S.furnitureRevenue = 0;
  S.missionRevenue = 0;
  S.reputationDaily = { day: S.day, gained: 0 };
  S.expenses = 0;
  S.sold = 0;
  S.visitors = 0;
  S.ledgerStart = S.money;
  S.settlement = null;
  S.specialDone = false;
  people = [];
  paused = false;
  spawnTime = 0;
  doorOpen = 0;
  sceneCacheKey = '';
  $('settlement').close();
  log('가구와 재고를 준비하고 가게를 열어주세요.');
  save();
  ui();
  showUnlockNotice();
  return true;
}
function expandShop() {
  if (S.phase !== 'prepare' || editing !== null || S.stage >= Stages.length-1) return false;
  const next = Stages[S.stage + 1];
  const needed=S.stage===5?300:10;
  if (S.totalSales < needed) {
    toast('누적 '+needed+'개 판매 후 확장할 수 있어요');
    return false;
  }
  if (S.money < next.cost + setupReserve(-1)) {
    toast('확장 비용이 부족해요');
    return false;
  }
  if(!assetGate(criticalAssetKeys({...S,stage:S.stage+1}),expandShop))return false;
  $('expansion').close();
  S.money -= next.cost;
  S.expenses += next.cost;
  S.stage++;
  if (S.stage<6 && !S.introducedTiers.includes(S.stage) && !S.pendingIntroductions.includes(S.stage))
    S.pendingIntroductions.push(S.stage);
  S.expansionNotice = S.stage;
  if(S.stage===1){queueFeatureNotice('staff');queueFeatureNotice('delivery');}
  if(S.stage===2)queueFeatureNotice('cashier1');
  if(S.stage===3){queueFeatureNotice('cashier2');}
  resizeShop();
  syncEntrance();
  view.panX = view.panY = 0;
  save();
  renderPanel();
  ui();
  Sound.play('place');
  toast('새 공간이 열렸어요! ' + stageInfo().name);
  showUnlockNotice();
  return true;
}


// SOURCE: ui/ending
// The sales ledger qualifies the ending at settlement, never during an audition or order.
function endingPending(){return S.ending.day>0&&!S.ending.continued;}
function recordEnding(){
  if(S.ending.day||S.missionStats.sales[ProductId.ELECTRONIC_DRUMS]<30)return;
  S.ending={day:S.day,viewed:false,continued:false,records:{sales:S.totalSales,revenue:S.totalRevenue,regulars:regularCustomers().length,drums:S.missionStats.sales[ProductId.ELECTRONIC_DRUMS]}};
}
function showEnding(){
  if(S.phase!=='settled'||!endingPending()||titleActive)return false;
  for(const id of ['settlement','management','modal','expansion','unlockModal','saveBackup','staffSettings','staffManagement','rackPicker'])$(id).close();
  const r=S.ending.records;
  $('endingShop').textContent=S.shopName+' · 전자드럼 누적 '+r.drums+'세트 판매';
  $('endingRecords').innerHTML=[['함께한 영업일',S.ending.day+'일'],['누적 판매',r.sales.toLocaleString('ko-KR')+'개'],['누적 판매 매출',money(r.revenue)],['단골 손님',r.regulars+'명']].map(([label,value])=>'<div><dt>'+label+'</dt><dd>'+value+'</dd></div>').join('');
  S.ending.viewed=true;save();
  if(!$('endingModal').open)$('endingModal').showModal();
  $('endingHeading').focus?.({preventScroll:true});$('endingModal').scrollTop=0;return true;
}
function continueAfterEnding(){
  if(S.phase!=='settled'||!endingPending()||!S.ending.viewed||assetBusy)return false;
  if(!assetGate(criticalAssetKeys({...S,day:S.day+1}),continueAfterEnding))return false;
  S.ending.continued=true;$('endingModal').close();return nextDay();
}
$('continueEnding').onclick=continueAfterEnding;
$('endingModal').addEventListener('cancel',e=>e.preventDefault());
function endingGoalPanel(){
  if(!drumsUnlocked())return '';
  return '<section class="feature"><span class="tag">우리 가게의 이야기</span><h3>서른 개의 새로운 리듬</h3><p id="endingGoalText">'+endingGoalText()+'</p><small>30세트 판매 후 정산 시 이야기 완료 · 계속 운영 가능</small></section>';
}
function endingGoalText(){return S.ending.continued?'엔딩 완료 · 자유롭게 계속 운영 중':'전자드럼 판매 '+Math.min(30,S.missionStats.sales[26])+' / 30세트';}
function refreshEndingGoal(){const el=document.getElementById('endingGoalText');if(el)setLiveText(el,endingGoalText());}


// SOURCE: systems/customers
// Customers share inventory; each staffed checkout has its own exclusive approach tile.
function go(p, f, state) {
  if (!f) return false;
  let n = near(f, p);
  if (!n) return false;
  const occupied = (target) =>
    people.some(
      (q) =>
        q !== p &&
        !q.companion &&
        q.target &&
        q.target.x === target.x &&
        q.target.y === target.y &&
        q.state !== 'leave'
    );
  if (occupied(n.target)) {
    if (state !== 'browse') return false;
    const [dx, dy] = Furniture.vectors[Furniture.direction(f)],
      front = Furniture.front(f);
    let alternate = null;
    for (const side of [1, -1]) {
      const target = { x: front.x + dy * side, y: front.y - dx * side },
        route = path(p, target);
      if (route && !occupied(target)) {
        alternate = { target, path: route };
        break;
      }
    }
    if (!alternate) return false;
    n = alternate;
  }
  p.path = n.path;
  p.target = n.target;
  p.lookTarget = { x: f.x, y: f.y };
  p.stationId = f.id;
  p.state = state;
  p.timer = 0;
  if (state === 'try') {p.triedSound = false;delete p.drumSeatPhase;delete p.drumsSeated;}
  if (!p.path.length) p.facing = Motion.facing(f.x - p.x, f.y - p.y, p.facing);
  return true;
}
function leave(p, reason = null) {
  recordDeparture(p);
  p.target = null;
  p.stationId = null;
  p.lookTarget = null;
  const e=nearestEntrance(p),out=path(p,e);
  p.path = out ? [...out, exitFor(e)] : [];
  p.state = 'leave';
  p.timer = 0;
  p.bubble = reason ?? (p.bought ? '고마워요 ♡' : '다음에 또 올게요');
  if (reason) p.bubbleUntil = S.time + 3;
}
function shelfItems(f) {
  if(f.t===FurnitureId.DRUM_DISPLAY)return drumsUnlocked()?[26]:[];
  return f.t === FurnitureId.ACCESSORY_CABINET
    ? (f.items ?? LegacyShelfItems)
    : rackProducts(f);
}
function offers(accessory = null, inStock = true) {
  return [...S.furniture
    .filter((f) => f.t === FurnitureId.GUITAR_RACK || f.t === FurnitureId.ACCESSORY_CABINET || f.t === FurnitureId.DRUM_DISPLAY)
    .flatMap((f) =>
      shelfItems(f)
        .filter(
          (i) =>
            productUnlocked(i) &&
            (!inStock || S.stock[i] > 0) &&
            (accessory === null || !isInstrument(i) === accessory)
        )
        .map((i) => ({ f, i }))
    )
    .filter((o) => near(o.f, ENTRY)),...(accessory===true?[]:ordinaryCustomOffers())];
}
function specialKind() {
 if(S.day<3||S.specialDone||S.time<Config.daySeconds*(50/180))return null;
 const scheduled=scheduledSpecial();if(scheduled)return scheduled;
 if(!hasDecor(10))return null;
 if(S.posterRoll.day!==S.day){S.posterRoll={day:S.day,won:Math.random()<.1};save();}
 return S.posterRoll.won?'band':null;
}
function before23Spawn() {
  if (
    S.phase !== 'open' ||
    people.length >= stageInfo().capacity ||
    !shopReady() ||
    people.some(
      (p) =>
        Math.hypot(p.x - ENTRY.x, p.y - ENTRY.y) < 0.75 ||
        Math.hypot(p.x - ENTRY.x, p.y - (M + 0.35)) < 0.75
    )
  )
    return false;
  const firstDrummer=drumsUnlocked()&&!S.drummerIntroduced;
  const introTier = firstDrummer?null:S.pendingIntroductions.find((t) => t <= S.stage),
    missionActor = !firstDrummer && !introTier
      ? (S.pendingMissionGuests.find((a) => availableActors().includes(a)) ?? null)
      : null,
    special = firstDrummer || introTier || missionActor !== null ? null : specialKind();
  if (special === 'family' && people.length + 2 > stageInfo().capacity) return false;
  const pool = availableActors();
  let actor = firstDrummer?12:introTier
    ? introTier + 3
    : missionActor !== null
      ? missionActor
      : special
        ? S.customerSequence % 4
        : pool.length > 4 && S.customerSequence >= 4 && Math.random() < Config.specialistShare
          ? pool[4 + Math.floor(Math.random() * (pool.length - 4))]
          : S.customerSequence % 4;
  const hana = S.customerBook['actor-9'];
  const storyVisit = hana && (hana.satisfaction>=50||S.hanaStory.phase==='delivered') && ['locked','delivered'].includes(S.hanaStory.phase) && hana.lastVisitDay < S.day && !people.some((p) => p.actor === 9) ? hana : null;
  let returning =
    !firstDrummer && !introTier && missionActor === null && !special && Math.random() < returningVisitChance()
      ? returningCustomer()
      : null;
  const storyReturning = !firstDrummer && !introTier && missionActor === null && !special ? storyVisit : null;
  if (storyReturning) actor = storyReturning.actor;
  if (storyReturning) returning = storyReturning;
  if (returning) actor = returning.actor;
  const identity = customerIdentity(actor, special),
    baseProfile = profileForActor(actor),
    profile = returning
      ? { ...baseProfile, tier: returning.preferredTier, families: [returning.favoriteFamily] }
      : {...baseProfile,families:[...baseProfile.families]};
  if(special==='band'&&drumsUnlocked()){profile.budget=Math.max(profile.budget,6500000);profile.families=[...profile.families,'drums'];}
  if(isRegular(S.customerBook[identity.key]))profile.budget=Math.round(profile.budget*1.5);
  let list = offers(actor===12?false:Math.random() < 0.35, false);
  if (!list.length) list = offers(null, false);
  if (!list.length) return false;
  const wanted = (actor===12||special==='band'&&drumsUnlocked()&&Math.random()<.45)&&drumsUnlocked()?26:desiredProduct(profile),
    preferred = list.filter((o) => o.i === wanted),
    picked = chooseOffer(preferred.length ? preferred : list, profile);
  let choice = picked.choice;
  if (!choice) return false;
  let premiumAccepted = true;
  if (delayedProduct(choice.i) && Math.random() > Config.premiumDemand[products[choice.i].tier]) {
    const basics = offers(null, false).filter(
      (o) => products[o.i].unlock === 0 && products[o.i].price <= profile.budget && S.stock[o.i] > 0
    );
    if (basics.length && Math.random() < Config.premiumSwitch) {
      const alternative = chooseOffer(basics, profile);
      choice = alternative.choice;
    } else premiumAccepted = false;
  }
  const p = {
    id: S.customerSequence + 1,
    name: returning?.name ?? identity.name,
    customerKey: identity.key,
    returning: !!returning,
    x: exitPoint().x,
    y: exitPoint().y,
    actor,
    hair: actor,
    color: profile.color ?? colors[actor % 6],
    product: choice.i,
    customProductId:choice.customId??null,customBasket:[],
    wantedProduct: wanted,
    budget: profile.budget,
    special,
    path: [],
    timer: 0,
    gait: Math.random(),
    facing: 3,
    walkSpeed: 1.15 + Math.random() * 0.22,
    stride: 0.75,
    bought: false,
    basket: [],
    intent:
      offerPrice(choice) <= profile.budget &&
      premiumAccepted &&
      Math.random() < (returning ? 0.84 : 0.72),
    decorEligible: premiumAccepted,
    specialDemo: false
  };
  if (!go(p, choice.f, 'browse')) return false;
  p.bubble = special
    ? {
        band: '공연 준비하러 왔어요!',
        family: '첫 악기를 골라볼까?',
        musician: '오늘은 어떤 소리일까?'
      }[special]
    : picked.affordable
      ? profile.quote
      : '예산에 맞는 악기가 있는지 볼게요.';
  people.push(p);
  if(actor===12){S.drummerIntroduced=true;p.firstDrummer=firstDrummer;}
  recordVisit(p);
  if (returning) p.bubble = '또 왔어요! 오늘도 좋은 악기가 있네요.';
  S.visitors++;
  S.customerSequence++;
  if (introTier) {
    S.pendingIntroductions = S.pendingIntroductions.filter((t) => t !== introTier);
    if (!S.introducedTiers.includes(introTier)) S.introducedTiers.push(introTier);
    p.firstVisit = true;
    p.bubbleUntil = S.time + 5;
    log('첫 방문 · ' + profile.role + ' ' + p.name);
    toast(profile.role + ' 첫 방문! ' + p.name);
    save();
  }
  if (special) {
    S.specialDone = true;
    log(p.name + ' 방문 · ' + p.bubble);
    if (special === 'family') {
      people.push({
        id: p.id + 0.1,
        parent: p.id,
        companion: true,
        actor: 1,
        name: '하린',
        x: p.x + 0.25,
        y: p.y + 0.25,
        path: [],
        gait: 0,
        facing: 3,
        walkSpeed: 1.35,
        stride: 0.7,
        scale: 0.72,
        timer: 0,
        basket: [],
        state: 'follow',
        product: p.product,
        special: 'child'
      });
      S.visitors++;
    }
  }
  if (missionActor !== null) {
    S.pendingMissionGuests = S.pendingMissionGuests.filter((a) => a !== missionActor);
    if (!S.introducedMissionGuests.includes(missionActor))
      S.introducedMissionGuests.push(missionActor);
    p.bubble = '처음 뵙겠습니다! ' + profile.name + '입니다.';
    p.bubbleUntil = S.time + 5;
    log(profile.name + '님이 처음 방문했어요.');
    save();
  }
  Sound.play('bell');
  return true;
}
function finishBrowse(p){
 if(tryRest(p))return;applyDemoDecor(p);const customId=p.customProductId??null;if(!customerCanAfford(p,p.product,customId)){if(p.basket.length||(p.customBasket??[]).length)checkout(p);else leave(p,'예산에 맞는 악기를 다시 볼게요');return;}
 const available=customId?customSelectionAvailable(p):S.stock[p.product]>0;
 if(!available){p.stockout=true;if(!p.alternativeChecked&&p.intent){p.alternativeChecked=true;for(const o of offers())if((o.i!==p.product||o.customId!==customId)&&!p.basket.includes(o.i)&&!(p.customBasket??[]).includes(o.customId)&&customerCanAfford(p,o.i,o.customId)&&enoughShoppingTime(p,o)&&go(p,o.f,'browse')){activateOffer(p,o);return;}}if(p.basket.length||(p.customBasket??[]).length)checkout(p);else leave(p,'다음에 다시 올게요');return;}
 if(!p.intent){leave(p,'오늘은 구경만 할게요');return;}if(customId){p.customBasket??=[];if(!p.customBasket.includes(customId))p.customBasket.push(customId);}else if(!p.basket.includes(p.product))p.basket.push(p.product);if(chooseRegularExtra(p))return;
 if(isInstrument(p.product)&&!p.addonChecked){p.addonChecked=true;if(products[p.product].family!=='drums'&&Math.random()<.45){const choices=offers(true).filter(o=>addonCompatible(p.product,o.i)).sort(()=>Math.random()-.5);for(const o of choices)if(customerCanAfford(p,o.i,o.customId)&&enoughShoppingTime(p,o)&&go(p,o.f,'browse')){activateOffer(p,o);p.bubble='소품도 함께 살까?';return;}}}checkout(p);
}

function checkout(p) {
  const stations = activeCheckouts().map(f=>({f,n:near(f,p)})).filter(q=>q.n)
    .sort((a,b)=>a.n.path.length-b.n.path.length || a.f.id-b.f.id);
  if (!stations.some(({f})=>go(p,f,'checkout'))) {
    p.target = null;
    p.stationId = null;
    p.state = 'queue';
    p.path = [];
    p.timer = 0;
    p.bubble = '차례를 기다려요';
  } else p.bubble = '이걸로 할게요!';
}
// Transient crowd presentation: routes and logical service positions remain intact.
function updateCrowdMotion(dt) {
  const actors = [...people, ...staffTrips.slice(0, S.staffHired)];
  const heading = p => {
    const next=p.path?.find(q=>Math.hypot(q.x-p.x,q.y-p.y)>1e-5);
    if(!next)return null;
    const d=Math.hypot(next.x-p.x,next.y-p.y);
    return {x:(next.x-p.x)/d,y:(next.y-p.y)/d};
  };
  const snapshots=actors.map(p=>({p,x:p.x,y:p.y,dir:heading(p)}));
  const legalOffset=(p,x,y)=>{
    if(blocked(Math.round(p.x),Math.round(p.y)))return false;
    for(let i=1;i<=4;i++)if(blocked(Math.round(p.x+x*i/4),Math.round(p.y+y*i/4)))return false;
    return true;
  };
  for(const a of snapshots){
    const p=a.p;let ox=0,oy=0,pace=1;
    for(const b of snapshots){
      if(a===b)continue;
      const dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy);
      if(d>=1.1)continue;
      if(a.dir){
        const ahead=dx*a.dir.x+dy*a.dir.y,
          lateral=Math.abs(dx*a.dir.y-dy*a.dir.x),
          parallel=b.dir ? a.dir.x*b.dir.x+a.dir.y*b.dir.y : 0;
        // Slow followers gently. Opposing traffic keeps moving, preventing deadlocks.
        if(ahead>0 && lateral<.32 && parallel>.65)
          pace=Math.min(pace,Math.max(.4,Math.min(1,(ahead-.2)/.7)));
        if(ahead>-.35 && lateral<.65){
          const amount=.26*Math.max(0,1-d/1.1);
          ox+=a.dir.y*amount;oy-=a.dir.x*amount;
        }
      }
    }
    const length=Math.hypot(ox,oy);
    if(length>.26){ox*=.26/length;oy*=.26/length;}
    if(!legalOffset(p,ox,oy)){ox=0;oy=0;}
    const blend=1-Math.exp(-8*dt);
    const nx=(p.avoidX??0)+(ox-(p.avoidX??0))*blend,
      ny=(p.avoidY??0)+(oy-(p.avoidY??0))*blend;
    p.avoidX=legalOffset(p,nx,ny)?nx:0;
    p.avoidY=legalOffset(p,nx,ny)?ny:0;
    p.crowdSpeed=(p.crowdSpeed??1)+(pace-(p.crowdSpeed??1))*blend;
  }
}
function advanceCustomer(p, dt) { Motion.advance(p, dt); }
function update(dt) {
  if(assetBusy || gameplayBlocked())return;
  if (paused || editing !== null || !['open', 'closing'].includes(S.phase)) return;
  const clockDt = dt;
  updateVIP(dt);updateVIPEmployee(dt);
  updateCrowdMotion(dt);
  updateStaffAnimation(dt);
  dt *= Config.guestPace;
  if (S.phase === 'open') {
    S.time = Math.min(Config.daySeconds, S.time + clockDt);
    if(deliverOrders(S.time)){save();ui();refreshLivePanel();}
    spawnTime -= dt;
    staffTimer -= clockDt;
    if (staffTimer <= 0) {
      staffTimer = 2;
      staffRestock();
    }
    if (S.time >= Config.daySeconds) {
      S.phase = 'closing';
      S.time = Config.daySeconds;
      sceneCacheKey = '';
      Sound.play('close');
      toast('영업 마감 · 마지막 손님을 배웅해요');
      save();
    } else if (spawnTime <= 0) {
      const entered = spawn();
      spawnTime = entered
        ? (stageInfo().interval * (0.85 + Math.random() * 0.3)) / (visitorMultiplier() * adMultiplier())
        : 1;
    }
  }
  for (const p of [...people]) {
    if (p.companion) {
      const parent = people.find((q) => q.id === p.parent);
      if (!parent) {
        people = people.filter((q) => q !== p);
        continue;
      }
      p.state = 'follow';
      const distance = Math.hypot(p.x-parent.x,p.y-parent.y);
      // Hysteresis avoids repeatedly starting and stopping at one distance.
      p.following = distance > .85 || (p.following && distance > .48);
      p.followRepath = Math.max(0,(p.followRepath??0)-dt);
      if(p.following){
        if(!p.path.length || p.followRepath===0){
          const destination={x:parent.x+.22,y:parent.y+.22};
          const route=path(p,destination) ?? path(p,parent);
          if(route)p.path=route;
          p.followRepath=.3;
        }
        Motion.advance(p,dt);
      }else{
        p.path=[];
        Motion.settle(p,dt);
        if(!p.animationWeight)p.facing=parent.facing;
      }
      continue;
    }
    if(updateRest(p,dt))continue;
    if (p.path.length) {
      advanceCustomer(p, dt);
      continue;
    }
    Motion.settle(p, dt);
    p.timer += dt;
    if(p.state==='rest'){finishRest(p);continue;}
    if (p.state === 'browse') {
      if (p.timer > 1)
        p.bubble =
          !(p.customProductId?customSelectionAvailable(p):S.stock[p.product]>0)
            ? '아쉽다, 이 상품은 품절이네'
            : products[p.product].name + '를 볼까?';
      if (p.timer > profileForActor(p.actor).browse) {
        const seat = S.furniture.find(
          (f) =>
            (products[p.product].family==='drums' ? p.actor===12&&f.t===FurnitureId.DRUM_DEMO : f.t===FurnitureId.DEMO_SEAT) &&
            !people.some((q) => q !== p && q.stationId === f.id && q.state === 'try')
        );
        if (
          (p.customProductId?customSelectionAvailable(p):S.stock[p.product]>0) &&
          (isInstrument(p.product) || p.special === 'musician') &&
          seat &&
          !p.specialDemo &&
          go(p, seat, 'try')
        ) {
          p.specialDemo = true;
          p.bubble =
            p.special === 'musician' ? '한 소절 들려드릴게요 ♪' : profileForActor(p.actor).tryQuote;
        } else finishBrowse(p);
      }
    } else if (p.state === 'try') {
      const drum=products[p.product].family==='drums';
      if(drum){
        const seat=S.furniture.find(f=>f.id===p.stationId&&f.t===7);
        if(!seat){leave(p);continue;}
        if(!p.drumSeatPhase){p.drumSeatPhase='enter';p.path=[...axisConnector(p,Furniture.seatEntry(seat)),...axisConnector(Furniture.seatEntry(seat),Furniture.seat(seat))];p.target=Furniture.seat(seat);continue;}
        if(p.drumSeatPhase==='enter'){p.drumSeatPhase='playing';p.drumsSeated=true;p.timer=p.drumResumeTimer??0;delete p.drumResumeTimer;}
        if(p.drumSeatPhase==='exit'){delete p.drumSeatPhase;delete p.drumsSeated;finishBrowse(p);continue;}
      }
      if (!p.triedSound) {
        Sound.play(
          products[p.product].family==='drums'?'drums':'try',
          products[p.product].family === 'bass'
            ? 1
            : products[p.product].family === 'acoustic'
              ? 2
              : 0
        );
        p.triedSound = true;
      }
      p.bubble = p.special === 'band' ? '공연에 딱 맞는 소리!' : profileForActor(p.actor).tryQuote;
      if(p.timer>(p.special==='musician'?5:profileForActor(p.actor).play)){
        if(drum){if(!p.drumAuditioned){p.drumAuditioned=true;if(Math.random()<.25)p.intent=true;}p.drumSeatPhase='exit';p.drumsSeated=false;const seat=S.furniture.find(f=>f.id===p.stationId);p.target=Furniture.front(seat);p.path=[...axisConnector(p,Furniture.seatEntry(seat)),...axisConnector(Furniture.seatEntry(seat),p.target)];p.timer=0;}
        else finishBrowse(p);
      }
    } else if (p.state === 'queue') {
      p.queueWait = (p.queueWait ?? 0) + dt;
      if (p.queueWait > queuePatience() && S.phase === 'closing') leave(p);
      else if (p.timer > 0.7) checkout(p);
    } else if (p.state === 'checkout' && p.timer > 2) {
      if (p.checkoutCompleted || p.bought) {
        leave(p);
        save();
        continue;
      }
      p.checkoutCompleted = true;
      let value = 0;
      const soldItems = [];
      for (const i of p.basket)
        if (
          S.stock[i] > 0 &&
          productUnlocked(i) &&
          !isVIPProduct(i) && value + products[i].price <= (p.budget ?? Infinity)
        ) {
          S.stock[i]--;
          value += products[i].price;
          S.sold++;
          S.totalSales++;
          soldItems.push(i);
        }
      const customSale=sellCustomBasket(p,(p.budget??Infinity)-value);value+=customSale.value;soldItems.push(...customSale.bases);
      if (value) {
        S.money += value;
        S.revenue += value;
        S.totalRevenue += value;
        gainReputation(
          soldItems.some(delayedProduct) ? Config.reputation.premiumSale : Config.reputation.sale
        );
        recordMissionSale(soldItems);
        p.bought = true;
        recordPurchase(p, value, soldItems);
        for(const i of soldItems)noteStockChange(i);
        Sound.play('sale');
        const pt = P(p.x, p.y);
        floaters.push({ x: pt.x, y: pt.y - 70, text: '+' + compactMoney(value), life: 2.5 });
      }
      if (!value && p.basket.length) p.stockout = p.basket.some((i) => S.stock[i] <= 0);
      leave(p, value ? null : '방금 품절됐네, 다음에 올게요');
      save();
    } else if (p.state === 'leave' && p.timer > 0.3) {
      people = people.filter((q) => q !== p);
    }
  }
  const doorGoal = people.some((p) => Math.hypot(p.x - ENTRY.x, p.y - ENTRY.y) < 2.2) || (S.vip.guest&&Math.hypot(S.vip.guest.x-ENTRY.x,S.vip.guest.y-ENTRY.y)<2.2) ? 1 : 0;
  doorOpen += (doorGoal - doorOpen) * Math.min(1, dt * 7);
  for (const f of floaters) {
    f.life -= dt;
    f.y -= dt * 14;
  }
  floaters = floaters.filter((f) => f.life > 0);
  if (S.phase === 'closing' && !people.length && !S.vip.guest) settleDay();
}


// SOURCE: systems/stock
function displayedProductIds(){return [...new Set([...S.furniture.filter(f=>[0,5,6].includes(f.t)).flatMap(shelfItems),...S.furniture.filter(f=>f.t===15).flatMap(f=>(f.vipSlots??[]).filter(Number.isInteger))])];}
function staffCoversProduct(i){return S.staffHired>0&&S.staffPolicy.enabled&&S.staffPolicy.products[i].enabled&&(!delayedProduct(i)||S.staffHired>=2);}
function lowStockIds() {
  const plan=new Map(staffOrderPlan().map(row=>[row.i,row]));
  return displayedProductIds().filter(i=>{
    if(stockCount(i)>2)return false;
    if(S.staffHired>=1&&!delayedProduct(i))return false;
    if(!staffCoversProduct(i))return true;
    if(incomingQuantity(i)>0)return false;
    const row=plan.get(i);
    return !row || (!row.ready&&!['재고 충분','다음 영업 준비 때 주문'].includes(row.reason));
  });
}
function noteStockChange(i) {
  if (!displayedProductIds().includes(i)) return;
  if(lowStockIds().includes(i)){
    if (stockCount(i) === 0) toast(products[i].name + ' 품절 · 상품 주문에서 보충하세요');
    else if (stockCount(i) === 2) toast(products[i].name + ' 재고 2개 남았어요');
  }
  ui();
}
function inventoryStatus(i) {
  return (
    (displayedProductIds().includes(i) ? '진열 중' : '미진열') +
    ' · ' +
    (stockCount(i) === 0 ? '품절' : stockCount(i) <= 2 ? '재고 부족' : '판매 준비') +
    (incomingQuantity(i) ? ' · '+deliveryText(i) : '')
  );
}


// SOURCE: render/primitives
// Canvas primitives shared by furniture, characters and the scene.
function poly(points, fill, stroke) {
  ctx.beginPath();
  points.forEach((p, i) => (i ? ctx.lineTo(p.x, p.y) : ctx.moveTo(p.x, p.y)));
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  if (stroke) {
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 1;
    ctx.stroke();
  }
}
function diamond(x, y, fill, stroke) {
  const q = P(x, y);
  poly(
    [
      { x: q.x, y: q.y - 17 },
      { x: q.x + 34, y: q.y },
      { x: q.x, y: q.y + 17 },
      { x: q.x - 34, y: q.y }
    ],
    fill,
    stroke
  );
}
function rect(x, y, w, h, c) {
  ctx.fillStyle = c;
  ctx.fillRect(Math.round(x), Math.round(y), w, h);
}
function text(s, x, y, size, c, align = 'center',weight=400) {
  ctx.font = `${weight} ${size}px 'Noto Sans KR',sans-serif`;
  ctx.fillStyle = c;
  ctx.textAlign = align;
  ctx.fillText(s, x, y);
}
function ellipse(x, y, rx, ry, c) {
  ctx.fillStyle = c;
  ctx.beginPath();
  ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2);
  ctx.fill();
}


// SOURCE: render/products
// The catalog art is shared by menus and physical displays; rear rack views use rear art.
function drawProduct(c, i, x, y, w, h, rear = false, bottomAligned = false) {
  if(i===26){const im=drumProductAtlas,clip=DrumProductClips[rear?1:0];if(!im.complete||!im.naturalWidth)return;const height=Math.min(h,w*clip[3]/clip[2]),width=height*clip[2]/clip[3];c.drawImage(im,...clip,x+(w-width)/2,y+(bottomAligned?h-height:(h-height)/2),width,height);return;}
  const updated=typeof InstrumentArtV340==='undefined'?null:InstrumentArtV340[i];
  if(updated){const im=instrumentAtlases[updated.atlas],clip=updated.clips[rear?1:0];if(!im.complete||!im.naturalWidth)return;const height=Math.min(h,w*clip[3]/clip[2]),width=height*clip[2]/clip[3];c.drawImage(im,...clip,x+(w-width)/2,y+(bottomAligned?h-height:(h-height)/2),width,height);return;}
  const clip = AccessoryClips[i]?.[rear ? 1 : 0] ?? GoodsClips[i - 3],
    im = AccessoryClips[i] ? accessoryAtlas : goodsAtlas;
  if (!clip || !im.complete || !im.naturalWidth) return;
  const ratio = clip[2] / clip[3],
    height = Math.min(h, w / ratio),
    width = height * ratio;
  c.drawImage(
    im,
    ...clip,
    x + (w - width) / 2,
    y + (bottomAligned ? h - height : (h - height) / 2),
    width,
    height
  );
}
function drawProductIcons(root=document) {
  root.querySelectorAll('[data-product-art]').forEach((el) => {
    if(!menuArtReady(el,productAssetKeys(+el.dataset.productArt)))return;
    const c = document.createElement('canvas');
    const large = !!el.closest?.('[data-product-row]');
    c.width = large ? 208 : 112;
    c.height = large ? 344 : 112;
    el.innerHTML = '';
    el.append(c);
    drawProduct(c.getContext('2d'), +el.dataset.productArt, 5, 5, c.width-10, c.height-10);
  });
}
function shelfDisplay(f) {
  return (f.items ?? LegacyShelfItems).map((product, slot) => ({
    product,
    slot,
    count: Math.min(3, S.stock[product]),
    soldOut: S.stock[product] === 0
  }));
}
function drawRackContents(c, f, sp) {
  const ids = [f.p, f.p2].filter(Number.isInteger);
  if (!ids.length) return;
  const r = sp.rect, k = r.h / 104;
  const entries = ids.length === 1
    ? Array.from({length:Math.min(3,S.stock[ids[0]])}, (_,slot)=>({i:ids[0],slot}))
    : [f.p,f.p2].flatMap((i,slot)=> Number.isInteger(i) && S.stock[i]>0 ? [{i,slot:slot*2}] : []);
  for (const {i,slot} of entries) {
    const x = r.x + r.w * (0.28 + slot * 0.22), y = r.y + r.h * (0.59 + slot * 0.11);
    drawProduct(c,i,x-14*k,y-76*k,28*k,76*k,Furniture.direction(f)>=2,true);
  }
}
function sourcePolygon(c, r, points) {
  c.beginPath();
  points.forEach(([x, y], i) => {
    const xx = r.x + (x / 887) * r.w,
      yy = r.y + (y / 887) * r.h;
    i ? c.lineTo(xx, yy) : c.moveTo(xx, yy);
  });
  c.closePath();
}
function drawCabinetContents(c, f, sp) {
  // The rear wooden panel occludes products. Front products sit on the interior floor.
  if (Furniture.direction(f) >= 2) return;
  const r = sp.rect,
    k = r.w / 132;
  c.save();
  sourcePolygon(c, r, [
    [100, 245],
    [270, 150],
    [780, 390],
    [780, 575],
    [615, 650],
    [100, 410]
  ]);
  c.clip();
  // A fourth item (cabinet expansion reward) tightens the slot spacing so it stays inside the cabinet.
  const all = shelfDisplay(f),
    dx = all.length > 3 ? 135 : 175,
    dy = all.length > 3 ? 65 : 85;
  for (const { product, slot, count } of all) {
    const x = r.x + ((190 + slot * dx) / 887) * r.w,
      y = r.y + ((440 + slot * dy) / 887) * r.h;
    for (let n = count - 1; n >= 0; n--)
      drawProduct(c, product, x - 10 * k + n * 1.1 * k, y - 20 * k - n * 1.1 * k, 20 * k, 20 * k);
  }
  sourcePolygon(c, r, [
    [100, 245],
    [615, 490],
    [615, 650],
    [100, 410]
  ]);
  c.fillStyle = '#e9f8ef20';
  c.fill();
  c.restore();
  // Restore only the foreground frame from the same original artwork.
  c.save();
  sourcePolygon(c, r, [
    [70, 402],
    [615, 660],
    [650, 440],
    [660, 810],
    [610, 845],
    [65, 560]
  ]);
  c.clip();
  c.drawImage(sp.image, sp.sx, sp.sy, sp.sw, sp.sh, r.x, r.y, r.w, r.h);
  c.restore();
}

function drawRackForeground(c, sp) {
  const r = sp.rect,
    polygons = [
      [
        [0.01, 0.56],
        [0.74, 0.91],
        [1, 0.78],
        [1, 1],
        [0.74, 1],
        [0.01, 0.7]
      ],
      [
        [0.26, 0.12],
        [0.9, 0.38],
        [0.9, 0.45],
        [0.26, 0.2]
      ],
      [
        [0.79, 0.27],
        [0.92, 0.3],
        [0.99, 0.9],
        [0.76, 0.92]
      ]
    ];
  c.save();
  c.beginPath();
  for (const points of polygons) {
    points.forEach(([x, y], i) =>
      i ? c.lineTo(r.x + x * r.w, r.y + y * r.h) : c.moveTo(r.x + x * r.w, r.y + y * r.h)
    );
    c.closePath();
  }
  c.clip();
  c.drawImage(sp.image, sp.sx, sp.sy, sp.sw, sp.sh, r.x, r.y, r.w, r.h);
  c.restore();
}


// SOURCE: render/furniture
// A width-only check is insufficient for an isometric diamond. Fit every contact
// inside |dx|/34 + |dy|/17 <= .94, using the worst front/rear footprint.
function displayGroundRect(f, q, w, h) {
  const views = DisplayFeet[f.t],
    center = (points) =>
      points.reduce((s, p) => ({ x: s.x + p[0] / 4, y: s.y + p[1] / 4 }), { x: 0, y: 0 });
  const extent = Math.max(
    ...views.flatMap((points) => {
      const a = center(points);
      return points.map(
        ([x, y]) =>
          Math.abs((x - a.x) * w) / ArtLayout.grid.halfWidth +
          Math.abs((y - a.y) * h) / ArtLayout.grid.halfHeight
      );
    })
  );
  const k = Math.min(1, ArtLayout.grid.groundFit / extent) * (ArtLayout.furnitureScale[f.t] ?? 1),
    a = center(views[Furniture.direction(f) >= 2 ? 1 : 0]);
  w *= k;
  h *= k;
  return { x: q.x - a.x * w, y: q.y - a.y * h, w, h };
}
function furnitureGroundPoints(f, sp = furnitureSprite(f)) {
  const q = P(f.x, f.y),
    r = sp.rect;
  return (
    DisplayFeet[f.t]?.[Furniture.direction(f) >= 2 ? 1 : 0].map(([x, y]) => ({
      x: sp.flip ? q.x * 2 - (r.x + x * r.w) : r.x + x * r.w,
      y: r.y + y * r.h
    })) ?? null
  );
}
function drawFurnitureShadow(c, f, sp = furnitureSprite(f)) {
  const points = furnitureGroundPoints(f, sp);
  if (!points) {
    const q = P(f.x, f.y);
    c.save();
    c.fillStyle = '#48381c24';
    c.beginPath();
    c.ellipse(q.x, q.y + 4, 38, 13, 0, 0, Math.PI * 2);
    c.fill();
    c.restore();
    return;
  }
  c.save();
  c.fillStyle = '#48381c28';
  c.beginPath();
  points.forEach((p, i) => (i ? c.lineTo(p.x, p.y) : c.moveTo(p.x, p.y)));
  c.closePath();
  c.fill();
  // Small contact shadows touch each foot instead of forming a detached oval.
  c.fillStyle = '#3d301e24';
  for (const p of points) {
    c.beginPath();
    c.ellipse(
      p.x,
      p.y + 0.4,
      Math.min(3.8, sp.rect.w * 0.035),
      Math.min(1.7, sp.rect.h * 0.017),
      0,
      0,
      Math.PI * 2
    );
    c.fill();
  }
  c.restore();
}
// Geometry, artwork, menu previews and pointer masks share the same display sprites.
function proportionedRect(f,r){const k=({0:1.10,1:.92,5:1.03})[f.t]??1,q=P(f.x,f.y);return {...r,y:q.y+(r.y-q.y)*k,h:r.h*k};}
function furnitureSprite(f) {
  if([12,15,16].includes(f.t))return loungeFurnitureSprite(f);
  if(f.t>=11)return atelierFurnitureSprite(f);
  if(f.t===4){const q=P(f.x,f.y),dir=Furniture.direction(f),clip=AuditionClips[dir>=2?1:0],h=50,w=h*clip[2]/clip[3];return {image:auditionAtlas,sx:clip[0],sy:clip[1],sw:clip[2],sh:clip[3],flip:dir===1||dir===3,rect:{x:q.x-w/2,y:q.y+10-h,w,h}};}

  if(f.t>=8){const q=P(f.x,f.y),column={8:0,9:1,10:2}[f.t],dir=Furniture.direction(f),clip=DecorClips[dir>=2?1:0][column];
   const h=f.t===9?30:f.t===8?49:65,w=f.t===9?60:h*clip[2]/clip[3];
   return {image:decorAtlas,sx:clip[0],sy:clip[1],sw:clip[2],sh:clip[3],flip:dir===1||dir===3,rect:{x:q.x-w/2,y:f.t===9?q.y-h/2:q.y+8-h,w,h}};
  }
  if(f.t===6||f.t===7)return drumFurnitureSprite(f);
  const q = P(f.x, f.y),
    t = types[f.t],
    dir = Furniture.direction(f),
    flip = dir === 1 || dir === 3;
  if (f.t === FurnitureId.GUITAR_RACK) {
    const clip = RackClips[dir >= 2 ? 1 : 0],
      h = ArtLayout.rackHeight,
      w = (h * clip[2]) / clip[3];
    return {
      image: rackAtlas,
      sx: clip[0],
      sy: clip[1],
      sw: clip[2],
      sh: clip[3],
      flip,
      rect: proportionedRect(f,displayGroundRect(f, q, w, h))
    };
  }
  if (f.t === FurnitureId.ACCESSORY_CABINET)
    return {
      image: cabinetAtlas,
      sx: dir >= 2 ? 887 : 0,
      sy: 0,
      sw: 887,
      sh: 887,
      flip,
      rect: proportionedRect(f,displayGroundRect(f, q, ArtLayout.cabinetSize, ArtLayout.cabinetSize))
    };
  const cell=FurnitureClips[f.t][dir>=2?1:0];
  return {
    image: dir >= 2 && f.t !== FurnitureId.MONSTERA ? backAtlas : atlas,
    sx: cell[0],
    sy: cell[1],
    sw: cell[2],
    sh: cell[3],
    flip,
    rect: proportionedRect(f,displayGroundRect(f, q, ArtLayout.furnitureSize[f.t], ArtLayout.furnitureSize[f.t]))
  };
}
function displayBounds(f, sp = furnitureSprite(f)) {
  return f.t === FurnitureId.GUITAR_RACK && [f.p, f.p2].some((i)=>Number.isInteger(i) && S.stock[i]>0)
    ? { x: sp.rect.x - 2, y: sp.rect.y - 28, w: sp.rect.w + 4, h: sp.rect.h + 28 }
    : { ...sp.rect };
}
function paintDisplayFurniture(c, f, sp = furnitureSprite(f)) {
  if(f.t===6||f.t===7){paintFurnitureBodyDirect(c,f,sp);return;}
  if (!sp.image.complete || !sp.image.naturalWidth) return;
  const q = P(f.x, f.y);
  c.save();
  if (sp.flip) {
    c.translate(q.x * 2, 0);
    c.scale(-1, 1);
  }
  c.drawImage(sp.image, sp.sx, sp.sy, sp.sw, sp.sh, sp.rect.x, sp.rect.y, sp.rect.w, sp.rect.h);
  if (f.t === FurnitureId.GUITAR_RACK) {
    drawRackContents(c, f, sp);
    drawRackForeground(c, sp);
  }
  if (f.t === FurnitureId.ACCESSORY_CABINET) drawCabinetContents(c, f, sp);
  c.restore();
}
const furniturePickImages = new Map(),FurniturePickBudget=4*1024*1024;
let furniturePickBytes=0;
function clearFurniturePickCache(){furniturePickImages.clear();furniturePickBytes=0;}
function furniturePickStats(){return {entries:furniturePickImages.size,bytes:furniturePickBytes,budget:FurniturePickBudget};}
function furniturePickSprite(f) {
  const sp = furnitureSprite(f);
  if(f.t>=6)return sp;
  if (f.t !== FurnitureId.GUITAR_RACK && f.t !== FurnitureId.ACCESSORY_CABINET) return sp;
  if (!sp.image.complete || !sp.image.naturalWidth) return sp;
  const bounds = displayBounds(f, sp),
    key = [
      typeof instrumentAtlases==='undefined'?'legacy':instrumentAtlases.map(im=>im.complete&&im.naturalWidth?1:0).join(''),
      Boolean(accessoryAtlas.complete && accessoryAtlas.naturalWidth),
      Boolean(goodsAtlas.complete && goodsAtlas.naturalWidth),
      f.t,
      Furniture.direction(f),
      f.p ?? 'empty',
      f.p2 ?? 'empty',
      Number.isInteger(f.p2) ? Math.min(3,S.stock[f.p2]) : 0,
      Number.isInteger(f.p) ? Math.min(3, S.stock[f.p]) : 0,
      ...(f.items ?? LegacyShelfItems).flatMap((i) => [i, Math.min(3, S.stock[i])])
    ].join('|');
  let image = furniturePickImages.get(key);
  if (!image) {
    image = document.createElement('canvas');
    image.width = Math.ceil(bounds.w * 2);
    image.height = Math.ceil(bounds.h * 2);
    const c = image.getContext('2d');
    c.scale(2, 2);
    c.translate(-bounds.x, -bounds.y);
    paintDisplayFurniture(c, f, sp);
    const bytes=image.width*image.height*4;
    if(bytes<=FurniturePickBudget){
      while(furniturePickImages.size && (furniturePickBytes+bytes>FurniturePickBudget || furniturePickImages.size>=128)){const oldest=furniturePickImages.keys().next().value,old=furniturePickImages.get(oldest);furniturePickBytes-=old.width*old.height*4;furniturePickImages.delete(oldest);}
      furniturePickImages.set(key,image);furniturePickBytes+=bytes;
    }
  }
  if(furniturePickImages.has(key)){furniturePickImages.delete(key);furniturePickImages.set(key,image);}
  return { image, sx: 0, sy: 0, sw: image.width, sh: image.height, flip: false, rect: bounds };
}
function drawFurniture(f, preview = false, placeable = true) {
  const q = P(f.x, f.y),
    t = types[f.t],
    source = editing !== null && selected === f.id;
  ctx.save();
  if (source && !preview) ctx.globalAlpha = 0.24;
  if (preview) {
    for(const cell of Furniture.cells(f))diamond(cell.x, cell.y, placeable ? '#8dc487aa' : '#e37e6eaa', placeable ? '#e2ffbe' : '#ffcdc3');
    ctx.globalAlpha = 0.52;
  } else if(selected===f.id)for(const cell of Furniture.cells(f))diamond(cell.x,cell.y,'#eac98b99','#fff3c3');
  const sp = furnitureSprite(f);
  if(f.t<6)drawFurnitureShadow(ctx,f,sp);
  const dir = Furniture.direction(f),
    [dx, dy] = Furniture.vectors[dir],
    owner = () =>
      drawPerson(
        {
          x: f.x - dx * 0.55,
          y: f.y - dy * 0.55,
          teamActor: checkoutActor(f),
          color: '#416f62',
          hair: 1,
          walk: 0,
          elevation: 0,
          facing: dir
        },
        true
      );
  if (f.t === FurnitureId.CHECKOUT && !preview && checkoutActor(f) !== null && dir < 2) owner();
  paintFurnitureBody(ctx,f,sp,Math.max(2,Math.ceil(view.scale*zoom*view.dpr)));
  if (f.t === FurnitureId.CHECKOUT && !preview && checkoutActor(f) !== null && dir >= 2) owner();
  if ((preview || selected === f.id) && f.t !== FurnitureId.MONSTERA) {
    const approach=Furniture.front(f),fp=P(approach.x,approach.y);
    text(['↙', '↘', '↗', '↖'][dir], fp.x, fp.y + 4, 17, '#fff7c9');
  }
  const labelY = Math.max(q.y + 21, ...(furnitureGroundPoints(f, sp) ?? []).map((p) => p.y + 15));
  if (f.t === FurnitureId.GUITAR_RACK && !preview) {
    const ids = rackProducts(f);
    if (!ids.length) text('악기 선택', q.x, labelY, 8, '#6d7059');
  }
  if(f.t===FurnitureId.ACCESSORY_CABINET&&editing===null&&!shelfDisplay(f).length)text('소품 선택',q.x,labelY,8,'#6d7059');
  ctx.restore();
}

// Cache only each furniture body; people, shadows, selection and labels retain their layers.
const furnitureBodyCache=new Map(),FurnitureCacheBudget=12*1024*1024;
let furnitureBodyBytes=0,furnitureBodyBuilds=0,furnitureBodyHits=0;
function furnitureImageKey(){return [...(typeof drumFixtureAtlas==='undefined'?[]:[drumFixtureAtlas]),decorAtlas,auditionAtlas,atlas,backAtlas,rackAtlas,cabinetAtlas,accessoryAtlas,goodsAtlas,...(typeof instrumentAtlases==='undefined'?[]:instrumentAtlases)].map(im=>im.complete&&im.naturalWidth?im.naturalWidth:0).join(',');}
function paintFurnitureBodyDirect(c,f,sp=furnitureSprite(f)){
 if(f.t===FurnitureId.GUITAR_RACK||f.t===FurnitureId.ACCESSORY_CABINET){paintDisplayFurniture(c,f,sp);return;}
 if(!sp.image.complete||!sp.image.naturalWidth)return;
 c.save();if(sp.flip){c.translate(P(f.x,f.y).x*2,0);c.scale(-1,1);}
 c.drawImage(sp.image,sp.sx,sp.sy,sp.sw,sp.sh,sp.rect.x,sp.rect.y,sp.rect.w,sp.rect.h);c.restore();
}
function clearFurnitureBodyCache(){furnitureBodyCache.clear();furnitureBodyBytes=0;}
function furnitureBodyStats(){return {entries:furnitureBodyCache.size,bytes:furnitureBodyBytes,builds:furnitureBodyBuilds,hits:furnitureBodyHits,budget:FurnitureCacheBudget};}
function paintFurnitureBody(c,f,sp=furnitureSprite(f),resolution=2){
 if(f.t>=11){paintFurnitureBodyDirect(c,f,sp);return;}
 const local={...f,x:0,y:0},ls=furnitureSprite(local),origin=P(0,0),position=P(f.x,f.y),scale=Math.max(2,Math.ceil(resolution)),bounds=displayBounds(local,ls);
 if(ls.flip)bounds.x=origin.x*2-bounds.x-bounds.w;
 const right=Math.ceil((bounds.x+bounds.w+3)*scale)/scale,bottom=Math.ceil((bounds.y+bounds.h+3)*scale)/scale;
 bounds.x=Math.floor((bounds.x-3)*scale)/scale;bounds.y=Math.floor((bounds.y-3)*scale)/scale;bounds.w=right-bounds.x;bounds.h=bottom-bounds.y;
 const width=Math.ceil(bounds.w*scale),height=Math.ceil(bounds.h*scale),bytes=width*height*4;
 if(bytes>FurnitureCacheBudget/3){paintFurnitureBodyDirect(c,f,sp);return;}
 const ids=f.t===FurnitureId.GUITAR_RACK?[f.p,f.p2]:f.t===FurnitureId.ACCESSORY_CABINET?(f.items??LegacyShelfItems):[];
 const key=[furnitureImageKey(),f.t,Furniture.direction(f),scale,f.t>=6?drumFurnitureFrame(f):'',...ids.flatMap(i=>[i??'-',Number.isInteger(i)?Math.min(3,S.stock[i]):0])].join('|');
 let entry=furnitureBodyCache.get(key);
 if(entry){furnitureBodyHits++;furnitureBodyCache.delete(key);furnitureBodyCache.set(key,entry);}
 else{const image=document.createElement('canvas');image.width=width;image.height=height;const pc=image.getContext('2d');pc.scale(scale,scale);pc.translate(-bounds.x,-bounds.y);paintFurnitureBodyDirect(pc,local,ls);
 while(furnitureBodyBytes+bytes>FurnitureCacheBudget&&furnitureBodyCache.size){const oldest=furnitureBodyCache.keys().next().value;furnitureBodyBytes-=furnitureBodyCache.get(oldest).bytes;furnitureBodyCache.delete(oldest);}
 entry={image,bytes};furnitureBodyCache.set(key,entry);furnitureBodyBytes+=bytes;furnitureBodyBuilds++;}
 c.drawImage(entry.image,0,0,width,height,bounds.x+position.x-origin.x,bounds.y+position.y-origin.y,width/scale,height/scale);
}

function drumOccupant(f){return people.find(p=>p.actor===12&&p.product===26&&p.state==='try'&&p.stationId===f.id&&p.drumsSeated===true&&!p.path.length);}
function drumFurnitureFrame(f){return f.t===6?(S.stock[26]>0?1:0):(drumOccupant(f)?3:2);}
function drumFurnitureSprite(f){
 // Match the existing shop furniture (44px racks, 49px cabinets, 59–61px
 // counters/demo seats) rather than sizing the entire fixture around its person.
 const dir=Furniture.direction(f),clip=DrumFixtureClips[dir>=2?1:0][drumFurnitureFrame(f)],center=P(f.x,f.y),w=56,h=w*clip[3]/clip[2],offset=16;
 return {image:drumFixtureAtlas,sx:clip[0],sy:clip[1],sw:clip[2],sh:clip[3],flip:dir===1||dir===3,rect:{x:center.x-w/2,y:center.y+offset-h,w,h}};
}


// SOURCE: render/characters
// Whole painted poses only: no joints, body cutouts, limb stretching or ghost blends.
function walkSprite(actor,dir,phase=0,moving=true,playing=false){
 if(CheckoutPoses[actor])return checkoutSprite(actor,dir);
 const row=dir===4||dir===6?2:[2,3,7].includes(dir)?1:0,entry=NaturalWalkFrames[actor];if(!entry)throw new RangeError('Unknown character identity');const count=entry.rows[row].length,frame=moving?((Math.floor(phase*count)%count)+count)%count:1;
 return {image:naturalWalkAtlases[entry.atlas],...entry.rows[row][frame],flip:dir===1||dir===3||dir===6,frame,actor,dir,natural:true};
}
function makeWalkFrame(actor, dir, frame = 0, moving = true) {
  return walkSprite(actor, dir, frame / (NaturalWalkFrames[actor] ? 8 : 4), moving);
}
function drawFullCharacter(c, sprite, h = 77, phase = 0, moving = false, weight = 1) {
  const [sx, sy, sw, sh] = sprite.clip,
    k = h / (sprite.sourceHeight ?? sh),
    w = sw * k,
    dh = sh * k;
  c.save();
  if (sprite.flip) c.scale(-1, 1);
  // Tiny whole-body weight shift preserves the complete painted anatomy.
  const sway = !sprite.natural && moving ? Math.sin(phase * Math.PI * 2) * 0.35 * weight : 0,
    bob = !sprite.natural && moving ? -Math.abs(Math.sin(phase * Math.PI * 2)) * 0.45 * weight : 0;
  c.translate(sway, bob);
  if (sprite.exclude?.length) {
    c.beginPath();
    c.rect(-w * sprite.anchor, -dh, w, dh);
    for (const [x, y, ww, hh] of sprite.exclude)
      c.rect(-w * sprite.anchor + x * k, -dh + y * k, ww * k, hh * k);
    c.clip('evenodd');
  }
  const floor = (sprite.footMargin ?? 0) * k;
  c.drawImage(sprite.image, sx, sy, sw, sh, -w*sprite.anchor, -dh+floor, w, dh);
  c.restore();
}
function drawWalkingSprite(c, actor, dir, phase, h = 77) {
  drawFullCharacter(c, walkSprite(actor, dir, phase, true), h, phase, true);
}
function teamFigureHeight(actor){return ArtLayout.characterHeight;}
function drawPerson(p, cashier = false) {
  if(p.seated&&!p.path?.length){drawSeatedCustomer(p);return;}
  if(p.state==='try'&&products[p.product]?.family==='drums'&&p.drumsSeated===true&&!p.path?.length)return;
  const q = P(p.x + (p.avoidX ?? 0), p.y + (p.avoidY ?? 0));
  q.y -= p.elevation ?? 0;
  const actor = cashier ? (p.teamActor ?? 16) : visualActor(p),
    dir = p.facing ?? 0,
    scale = (p.scale ?? 1) * Config.characterScale,
    h = teamFigureHeight(actor);
  const walking = !!p.moving || (p.animationWeight ?? 0) > .04;
  ellipse(q.x, q.y + 1, 11 * scale, 3.7 * scale, '#403b2528');
  ctx.save();
  ctx.translate(q.x, q.y);
  ctx.scale(scale, scale);
  const acousticDemo = p.state === 'try' && !walking && isInstrument(p.product);
  const frame = cashier && typeof checkoutSprite==='function' ? checkoutSprite(actor,dir) : walkSprite(actor, dir, p.gait ?? 0, walking, p.state === 'try' && !walking && !acousticDemo);
  if (frame.image.complete && frame.image.naturalWidth)
    drawFullCharacter(ctx, frame, h, walking ? p.gait : 0, walking, p.animationWeight ?? 1);
  if (acousticDemo) {
    // Audition uses the same identity and the actual selected instrument on its stand.
    rect(17,-4,18,3,'#634c36');
    const custom=S.custom.items.find(i=>i.id===p.customProductId);if(custom){ctx.save();ctx.translate(22,-5);miniCustom(ctx,custom,52,[2,3,7].includes(dir));ctx.restore();}else drawProduct(ctx,p.product,13,-54,24,52,[2,3,7].includes(dir),true);
  }
  if(p.staffSorting) text('정리 중',0,-82,9,'#fff3c6');
  if (p.bought) {
    rect(11, -20, 13, 17, '#f6e8c2');
    ctx.strokeStyle = '#8d7955';
    ctx.strokeRect(14, -24, 7, 6);
    text('♫', 17, -7, 9, '#6a7450');
  }
  if (p.state === 'try' && !walking) text('♫', 29, -48 + Math.sin(S.time * 3) * 3, 16, '#fff3c6');
  if (isRegular(S.customerBook[p.customerKey])) text('♡', -18, -83, 11, '#b57364');
  if (p.special && !p.companion) text('★', 0, -86, 10, '#e1b34b');
  ctx.restore();
  if (!cashier && p.bubble && (!p.path?.length || (p.bubbleUntil ?? 0) > S.time) && people.filter(q=>q.bubble&&(!q.path?.length||(q.bubbleUntil??0)>S.time)).slice(-2).includes(p)) {
    const s = p.bubble,
      bw = Math.max(52, s.length * 8);
    ctx.fillStyle = '#fffdf1';
    ctx.strokeStyle = '#c8c3a7';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.roundRect(q.x - bw / 2, q.y - 105 * scale, bw, 22, 6);
    ctx.fill();
    ctx.stroke();
    text(s, q.x, q.y - 105 * scale + 15, 9, '#6b7258','center',700);
  }
}

function visualActor(p) {
  if (p.teamActor !== undefined) return p.teamActor;
  return SpecialPeopleActors[p.special] ?? (p.actor===12?21:((p.actor ?? p.hair ?? 0) % customerLooks.length));
}
// These decorative staff figures never enter customer queues, sales or saved guest arrays.
let teamLayoutKey = '', teamLayout = [];
function staffHomeFigures() {
  if (!S.staffHired || editing !== null) return [];
  const key = [N,M,S.staffHired,...S.furniture.map(f => [f.id,f.t,f.x,f.y,f.dir].join(','))].join('|');
  if (key !== teamLayoutKey) {
    const stations = S.furniture.filter(f => [FurnitureId.GUITAR_RACK,FurnitureId.ACCESSORY_CABINET].includes(f.t));
    // One flood fill replaces an A* search for every empty tile.
    const occupied = new Set(S.furniture.filter(f=>f.t!==9).flatMap(f=>Furniture.cells(f).map(p=>p.x+','+p.y))), reachable = new Set(), queue = [];
    const inside = (x,y) => x>=0 && y>=0 && x<N && y<M && !occupied.has(x+','+y);
    if (inside(ENTRY.x,ENTRY.y)) { reachable.add(ENTRY.x+','+ENTRY.y); queue.push({x:ENTRY.x,y:ENTRY.y}); }
    for(let at=0;at<queue.length;at++) {
      const p=queue[at];
      for(const [dx,dy] of [[1,0],[-1,0],[0,1],[0,-1]]) {
        const x=p.x+dx,y=p.y+dy,key=x+','+y;
        if(inside(x,y)&&!reachable.has(key)){reachable.add(key);queue.push({x,y});}
      }
    }
    const avoid = S.furniture.filter(f => [FurnitureId.CHECKOUT,FurnitureId.DEMO_SEAT].includes(f.t)).map(f => Furniture.front(f));
    const candidates = [];
    for (const {x,y} of queue) {
      if (Math.hypot(x-ENTRY.x,y-ENTRY.y)<1.5) continue;
      if (avoid.some(p => Math.hypot(p.x-x,p.y-y)<1.15)) continue;
      const distance = Math.min(...stations.map(f => Math.hypot(f.x-x,f.y-y)),N+M);
      candidates.push({x,y,score:distance+Math.min(x,y,N-1-x,M-1-y)*0.3});
    }
    candidates.sort((a,b)=>a.score-b.score || a.y-b.y || a.x-b.x);
    teamLayout=[];
    for(let i=0;i<Math.min(2,S.staffHired);i++) {
      const spot=candidates.find(p=>teamLayout.every(q=>Math.hypot(q.x-p.x,q.y-p.y)>1.2) && path(ENTRY,p));
      if (!spot) break;
      teamLayout.push({x:spot.x,y:spot.y,teamActor:17+i,facing:0,teamRole:i===0?'재고 담당':'주문 담당'});
    }
    teamLayoutKey=key;
  }
  return teamLayout;
}
function shopTeamFigures() {
  if(!S.staffHired || editing!==null)return [];
  const homes=staffHomeFigures();
  const figures=typeof animatedStaffFigures==='function'?animatedStaffFigures(homes):homes;
  return figures;
}


// SOURCE: systems/staff-animation
// Transient decoration only. Never changes inventory, money, customer state or RNG.
let staffTrips=[], staffTripQueue=[], staffTripKey='', staffRouteAttempts=0;
function resetStaffAnimation(){staffTrips=[];staffTripQueue=[];staffTripKey='';staffRouteAttempts=0;}
function queueStaffRestock(i){
 if(!S.staffHired || (delayedProduct(i)&&S.staffHired<2))return;
 const targets=S.furniture.filter(f=>rackProducts(f).includes(i) || (f.t===FurnitureId.ACCESSORY_CABINET&&(f.items??LegacyShelfItems).includes(i)));
 for(const f of targets){
  if(staffTripQueue.some(j=>j.id===f.id)||staffTrips.some(p=>p.targetId===f.id))continue;
  if(staffTripQueue.length<12)staffTripQueue.push({id:f.id,worker:delayedProduct(i)?1:0});
 }
}
function syncStaffFigures(homes=staffHomeFigures()){
 const key=[teamLayoutKey,S.day].join('|');
 if(key!==staffTripKey){
  staffTrips=homes.map(p=>({...p,home:{x:p.x,y:p.y},path:[],state:'idle',wait:0,sortTime:0,routeCooldown:0}));
  staffTripQueue=staffTripQueue.filter(j=>S.furniture.some(f=>f.id===j.id)&&j.worker<S.staffHired);
  staffTripKey=key;
 }
 return staffTrips;
}
function animatedStaffFigures(homes){return syncStaffFigures(homes);}
function staffAnimationSnapshot(){return {queued:staffTripQueue.map(j=>({...j})),routeAttempts:staffRouteAttempts,workers:staffTrips.map(p=>({x:p.x,y:p.y,state:p.state,targetId:p.targetId,facing:p.facing,path:p.path.map(q=>({...q}))}))};}
function updateStaffAnimation(dt){
 if(!dt||gameplayBlocked()||document.hidden||titleActive||assetBusy||paused||editing!==null||!['open','closing'].includes(S.phase)||!S.staffHired)return;
 const workers=syncStaffFigures();
 for(let index=0;index<workers.length;index++){
  const p=workers[index];p.routeCooldown=Math.max(0,p.routeCooldown-dt);
  if(p.state==='sorting'){
   Motion.settle(p,dt);
   p.sortTime-=dt;p.staffSorting=true;
   if(p.sortTime<=0){p.staffSorting=false;p.targetId=null;p.state='idle';p.routeCooldown=.5;}
   continue;
  }
  if(!p.path.length && !p.routeCooldown){
   const at=staffTripQueue.findIndex(j=>j.worker===index&&!workers.some(q=>q!==p&&q.targetId===j.id));
   if(at>=0){
    const job=staffTripQueue.splice(at,1)[0], f=S.furniture.find(f=>f.id===job.id);
    if(f){
     const target=Furniture.front(f);staffRouteAttempts++;
     const route=path(p,target);
     if(route){p.path=route.map(q=>({...q}));p.targetId=f.id;p.lookTarget={x:f.x,y:f.y};p.state='walking';p.wait=0;}
     else{p.state='blocked';p.routeCooldown=2;}
    }
   }else if(Math.hypot(p.x-p.home.x,p.y-p.home.y)>.1){
    staffRouteAttempts++;const route=path(p,p.home);p.path=(route??[]).map(q=>({...q}));p.targetId=null;p.lookTarget=null;p.state=route?'returning':'blocked';p.routeCooldown=2;
   }else{p.state='idle';p.routeCooldown=.5;}
  }
  if(p.path.length){
   Motion.advance(p,dt);
   p.wait=0;p.state=p.targetId!=null?'walking':'returning';
  }else Motion.settle(p,dt);
  if(!p.path.length&&p.targetId!=null){p.state='sorting';p.sortTime=1.1;p.staffSorting=true;const f=S.furniture.find(f=>f.id===p.targetId);if(f)p.facing=Furniture.direction(f);}
 }
}


// SOURCE: render/scene
// Cached architecture and the dynamic painter-order pass.
function drawScenery(){ctx.setTransform(view.dpr,0,0,view.dpr,0,0);ctx.clearRect(0,0,view.w,view.h);const grad=ctx.createLinearGradient(0,0,0,view.h);grad.addColorStop(0,'#cad1bd');grad.addColorStop(1,'#abb59e');ctx.fillStyle=grad;ctx.fillRect(0,0,view.w,view.h);ctx.save();ctx.translate(view.w/2+view.panX,view.midY+view.panY);ctx.scale(view.scale*zoom,view.scale*zoom);ctx.translate(-view.centerX,-view.centerY);const im=materialAtlas23,n=im?.naturalWidth/4;for(let y=-5;y<M+7;y++)for(let x=-5;x<N+7;x++){if(x>=0&&x<N&&y>=0&&y<M)continue;const road=x>N+2||y>M+2;if(road){diamond(x,y,'#7b7c75','#7b7c75');continue;}const p=P(x,y);ctx.save();ctx.transform(34/128,17/128,-34/128,17/128,p.x,p.y-17);if(im?.naturalWidth)ctx.drawImage(im,3*n+((x%4+4)%4)*n/4,n+((y%4+4)%4)*n/4,n/4,n/4,0,0,128,128);else{ctx.fillStyle='#bfb6a2';ctx.fillRect(0,0,128,128);}ctx.restore();}for(const side of ['bottom','right']){const a=side==='bottom'?P(-4,M+2.5):P(N+2.5,-4),b=side==='bottom'?P(N+6,M+2.5):P(N+2.5,M+6);ctx.strokeStyle='#d8cfba';ctx.lineWidth=5;ctx.beginPath();ctx.moveTo(a.x,a.y+8);ctx.lineTo(b.x,b.y+8);ctx.stroke();ctx.strokeStyle='#5b625735';ctx.lineWidth=1;ctx.stroke();}drawExteriorProps(false);const b=P(N-1,0),c=P(0,M-1),d=P(N-1,M-1);poly([{x:c.x-34,y:c.y},{x:d.x,y:d.y+17},{x:d.x,y:d.y+39},{x:c.x-34,y:c.y+22}],'#9b805c');poly([{x:d.x,y:d.y+17},{x:b.x+34,y:b.y},{x:b.x+34,y:b.y+22},{x:d.x,y:d.y+39}],'#806b50');window.ShopInteriorStyle=Atelier.walls[S.design.wall];Interior.backdrop(ctx,P,null,null,N,M);paintInteriorFloor();paintDesignWalls();paintWallDecor();paintWallItemPreview();}

let sceneCache = null,
  sceneCacheKey = '';
function draw() {
  const key = [
    view.w,
    view.h,
    view.dpr,
    view.panX,
    view.panY,
    zoom,
    editing !== null,
    S.shopName,
    N,
    M,
    S.phase,JSON.stringify(S.entrances),JSON.stringify(S.design),vipEditor,JSON.stringify(vipZoneDraft),JSON.stringify(entranceDraft)
  ].join('|');
  if (!sceneCache || key !== sceneCacheKey) {
    drawScenery();
    sceneCache ??= document.createElement('canvas');
    sceneCache.width = canvas.width;
    sceneCache.height = canvas.height;
    sceneCache.getContext('2d').drawImage(canvas, 0, 0);
    sceneCacheKey = key;
  } else {
    ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
    ctx.drawImage(sceneCache, 0, 0, canvas.width, canvas.height, 0, 0, view.w, view.h);
    ctx.save();
    ctx.translate(view.w / 2 + view.panX, view.midY + view.panY);
    ctx.scale(view.scale * zoom, view.scale * zoom);
    ctx.translate(-view.centerX, -view.centerY);
  }
  if(S.phase==='prepare'){for(const id of checkoutConflicts()){const f=S.furniture.find(f=>f.id===id),p=Furniture.front(f);diamond(p.x,p.y,'#cf4b4466','#a32c25');const q=P(f.x,f.y);text('!',q.x,q.y-60,18,'#a32c25');}}
  paintWallClockHands();
  const objects = [
    ...vipPartitions(),...(S.entrances??defaultEntrances()).filter(e=>['top','left'].includes(e.side)).map(e=>{const p=entrancePoint(e);return {depth:p.x+p.y-.2,draw:()=>drawStoreDoor(e)};}),
    ...S.furniture.map((f) => ({ depth: f.t===9?-1000:f.x + f.y, draw: () => drawFurniture(f) })),
    ...shopTeamFigures().map((p) => ({ depth: p.x + p.y + 0.15, draw: () => drawPerson(p) })),
    ...people.map((p) => ({ depth: p.x + p.y + 0.15, draw: () => drawPerson(p) }))
  ];
  objects.sort((a, b) => a.depth - b.depth).forEach((o) => o.draw());
  drawVIPDraft();drawEntranceDraft();drawBenchBadges();
  if (editing !== null && placementPreview) {
    drawFurniture(placementPreview.f, true, placementPreview.valid);
    const q = P(placementPreview.f.x, placementPreview.f.y);
    text(
      placementPreview.reason,
      q.x,
      q.y + 32,
      10,
      placementPreview.valid ? '#285d38' : '#ab3e31'
    );
  }
  for (let f of floaters) {
    ctx.globalAlpha = Math.min(1, f.life);
    text(f.text, f.x, f.y, 17, '#2d7151');
  }
  ctx.globalAlpha = 1;
  drawStoreFront();
  ctx.restore();
  if (shopLight < 0.999) {
    ctx.save();
    ctx.globalAlpha = 1 - shopLight;
    ctx.fillStyle = '#243e4b';
    ctx.fillRect(0, 0, view.w, view.h);
    ctx.restore();
  }
}


// SOURCE: ui/panels
let stockStatus='all';
let stockFilter = 'instrument', instrumentFilter = 'all', furnitureView = 'purchase', decorFilter='all', selectedProduct=0;
// Management sheets remain part of the game; opening and settlement use dedicated controls.
function setTab(t){closeMenu();Sound.play('click');tab=t;selected=null;if(t==='furniture')furnitureView='purchase';hideFurnitureQuick();$('sheetLabel').textContent={shop:'운영',furniture:'상점 · 꾸미기',craft:'상점 · 제작',stock:stockFilter==='effect'?'악기 · 이펙터':stockFilter==='strings'?'악기 · 소모품':'악기',guests:{visiting:'손님',regulars:'단골',story:'이야기',vip:'VIP'}[guestView],report:'설정'}[t]??'운영';if(!$('management').open)$('management').showModal();if(!document.body.classList.contains('menu-open')){document.body.classList.add('menu-open');resizeView();draw();}renderPanel();syncMenuLabels();$('management').scrollTop=0;}
function furnitureIcon(t) {
  return `<div class="item-icon" data-sprite="${t}"></div>`;
}
function stockWarning() {
  const ids = lowStockIds();
  return ids.length
    ? `<details class="stock-warning" data-section="stock-warning"><summary>재고 확인 · ${ids.length}종</summary><p>손님은 품절이어도 방문해요.</p>${ids.map((i) => `<div><span>${products[i].name} · ${stockCount(i) === 0 ? '품절' : stockCount(i) + '개 남음'}</span><button data-restock="${i}">주문하기</button></div>`).join('')}</details>`
    : '';
}

function guestUnlockInfo(p){
 const locked=p.tier>S.stage||!!(p.feature&&!featureUnlocked(p.feature));
 const introduced=p.feature==='drums'?S.drummerIntroduced:S.introducedTiers.includes(p.tier);
 return {locked,label:locked?(p.feature?'6단계 누적300개 판매 미션 보상으로 해금':p.tier+1+'단계 확장 시 등장'):introduced?'첫 만남 완료 · 계속 방문해요':'해금됨 · 다음 영업에 첫 방문 예정'};
}
function refreshGuestUnlocks(){
 for(const el of document.querySelectorAll('[data-guest-state]')){const p=CustomerProfiles.find(p=>p.actor===+el.dataset.guestState);if(!p)continue;const state=guestUnlockInfo(p);setLiveText(el,state.label);el.closest('.unlock-guest')?.querySelector('.guest-portrait')?.classList.toggle('silhouette',state.locked);}
}
function readyMissionCount(){return ['growth','challenge'].filter(l=>{const m=activeMission(l);return m&&missionStatus(m).ready;}).length;}
function operationsHome(){return `<div class="business-summary"><div><span>매장 단계</span><button data-action="expandPreview" title="매장 확장">${S.stage+1}단계</button></div><div><span>수입</span><b data-business-income>${compactMoney(S.revenue+S.furnitureRevenue+S.missionRevenue)}</b></div><div><span>지출</span><b data-business-expense>${compactMoney(S.expenses)}</b></div><div><span>남은 금액</span><b data-business-money>${compactMoney(S.money)}</b></div></div>`;}


function renderPanel() {
  $('stockFooter')?.remove();
  $('sheetMoney').textContent='보유금 '+compactMoney(S.money);
  $('management').classList.toggle('stock-sheet',tab==='stock');
  const scroll = $('panel').scrollTop, opened = new Set(Array.from(document.querySelectorAll('#panel details[open][data-section]')).map((el) => el.dataset.section));
  let h = '';
  if (tab === 'furniture') {
    h=furnitureCatalogHTML();
  } else if (tab === 'stock') {
    h =
      '<h2 class="stock-heading">상품 구매</h2>'+(products.some((p,i)=>delayedProduct(i)&&productUnlocked(i)&&p.kind===stockFilter)?'<p class="stock-intro">예약 입고: 준비 중 → 오늘 15시 · 영업 중 → 다음 날 오픈 전</p>':'');
    if (stockFilter === 'instrument') h += `<div class="filter-bar" aria-label="악기 종류">${[['all','전체 악기'],['electric','일렉'],['bass','베이스'],['acoustic','어쿠스틱'],['drums','전자드럼']].map(([key,label])=>`<button data-family-filter="${key}" aria-pressed="${instrumentFilter===key}">${label}</button>`).join('')}</div>`;
    let visibleProducts=0;
    for (const [label, kind] of [
      ['악기', 'instrument'],
      ['이펙터', 'effect'],
      ['기타줄', 'strings']
    ]) {
      if (stockFilter !== 'all' && stockFilter !== kind) continue;
      h += `<div class="section-label" data-stock-section="${kind}">${label}</div>`;
      h += products
        .map((p, i) => ({ p, i }))
        .filter(({ p, i }) => p.kind === kind && productUnlocked(i) && (stockFilter !== 'instrument' || instrumentFilter === 'all' || p.family === instrumentFilter))
        .map(({ p, i }) => {if(stockMatches(i))visibleProducts++;return productOrderCard(p, i);})
        .join('');
    }
    h+='<p id="stockEmpty" class="note" role="status" '+(visibleProducts?'hidden':'')+'>선택한 분류와 상태에 해당하는 상품이 없어요.</p>';
    const next = S.stage + 1;
    if (next < Stages.length)
      h += `<details class="locked-catalog"><summary>다음 확장 · ${next + 1}단계 해금 상품 보기</summary>${productsAtStage(
        next
      )
        .map(({ p, i }) => productOrderCard(p, i))
        .join('')}</details>`;
  } else if(tab==='craft'){h=craftHome();
  } else if(tab==='guests'){h=guestHome();
  } else if (tab === 'report') {
    h = '<h2>설정</h2>';
    h += `<details class="operation-card"><summary>운영 규칙</summary><p>10:00~20:00 · 하루 약 2분</p><p>임대료·일급은 마감 시 차감 · 주문비는 결제일 지출</p></details><button class="primary" data-action="saveManager">저장 관리</button><button class="secondary" data-action="title">타이틀로</button><button class="secondary" data-action="rename">가게 이름 변경</button><div class="audio-settings"><h3>사운드 설정</h3><label class="volume-row">배경음<input id="musicVolume" type="range" min="0" max="100" value="${Math.round(S.audio.music * 100)}"><output id="musicValue">${Math.round(S.audio.music * 100)}%</output></label><label class="volume-row">효과음<input id="effectsVolume" type="range" min="0" max="100" value="${Math.round(S.audio.effects * 100)}"><output id="effectsValue">${Math.round(S.audio.effects * 100)}%</output></label><button class="secondary" data-action="audio">${S.audio.muted ? '소리 켜기 ♪' : '전체 음소거'}</button></div>`;
  } else {
    h = operationsHome();
  }
  const names = [['shop','운영'],['stock','악기'],['furniture','상점'],['guests','손님']];

  if(tab==='report')h='<div class="settings-tools"><button data-control="fullscreen">전체 화면</button><button data-control="help">플레이 안내</button></div>'+h;
  $('panel').innerHTML = h;
  if(tab==='stock'){const footer=document.createElement('div');footer.id='stockFooter';footer.className='stock-footer';$('panel').after(footer);footer.onclick=e=>{const b=e.target.closest('[data-order]');if(b&&!b.disabled)orderProduct(+b.dataset.order,false,false,purchaseQuantity(+b.dataset.order));};}
  const pauseControl=$('panel').querySelector('[data-control=pause]'),speedControl=$('panel').querySelector('[data-control=speed]');if(pauseControl){pauseControl.disabled=!['open','closing'].includes(S.phase);pauseControl.textContent=paused?'계속하기':'일시정지';}if(speedControl)speedControl.textContent='속도 '+speed+'×';
  document.querySelectorAll('.sheet-nav [data-panel-tab]').forEach(b=>b.setAttribute('aria-current',b.dataset.panelTab===tab?'page':'false'));

  for (const el of document.querySelectorAll('#panel details[data-section]')) el.open = opened.has(el.dataset.section);
  $('panel').scrollTop = scroll;
  if(S.phase==='prepare' && checkoutConflicts().length){
    const warning=document.createElement('div');warning.className='setup-check';warning.setAttribute('role','alert');
    warning.innerHTML='<b>계산대 앞 손님 칸이 겹쳐요</b><p>표시된 계산대의 위치나 방향을 바꿔주세요. 기존 가구와 직원은 그대로 유지돼요.</p>';
    for(const id of checkoutConflicts()){const button=document.createElement('button');button.textContent='계산대 #'+id+' 조정';button.onclick=()=>edit(1,id);warning.append(button);}
    $('panel').prepend(warning);
  }
  refreshStockVisibility();
  refreshStockFooter();
  drawIcons();drawCatalogPictures();
  drawProductIcons();
  drawCustomerIcons();
  drawVIPPortraits();drawCraftHome();syncMenuLabels();
  renderCustomers();
  refreshTutorial();
  const relation=document.querySelector('#panel details[data-section=relationships]');if(relation)relation.addEventListener('toggle',()=>{if(relation.open)refreshRelationships();});
}
function drawIcons() {
  document.querySelectorAll('[data-sprite]').forEach((el) => {
    if(!menuArtReady(el,furnitureAssetKeys({t:+el.dataset.sprite})))return;
    const c = document.createElement('canvas');
    c.width = 320;
    c.height = 320;
    el.innerHTML = '';
    el.append(c);
    const f = { t: +el.dataset.sprite, x: 0, y: 0, dir: 0, p: null },
      sp = furnitureSprite(f),
      k = Math.min(288 / sp.rect.w, 288 / sp.rect.h),
      cx = c.getContext('2d');
    cx.save();
    cx.translate((320 - sp.rect.w * k) / 2, (320 - sp.rect.h * k) / 2);
    cx.scale(k, k);
    cx.translate(-sp.rect.x, -sp.rect.y);
    if (f.t === FurnitureId.GUITAR_RACK || f.t === FurnitureId.ACCESSORY_CABINET)
      paintDisplayFurniture(cx, f, sp);
    else if (sp.image.complete && sp.image.naturalWidth)
      cx.drawImage(
        sp.image,
        sp.sx,
        sp.sy,
        sp.sw,
        sp.sh,
        sp.rect.x,
        sp.rect.y,
        sp.rect.w,
        sp.rect.h
      );
    cx.restore();
    // Normalize menu-only artwork by visible pixels, preserving the source aspect ratio.
    // World sprites and furniture dimensions remain independent of thumbnail presentation.
    try{
      const pixels=cx.getImageData(0,0,320,320).data;
      let left=320,top=320,right=-1,bottom=-1;
      for(let y=0;y<320;y++)for(let x=0;x<320;x++)if(pixels[(y*320+x)*4+3]>16){left=Math.min(left,x);top=Math.min(top,y);right=Math.max(right,x);bottom=Math.max(bottom,y);}
      if(right>=left&&bottom>=top){
        left=Math.max(0,left-2);top=Math.max(0,top-2);right=Math.min(319,right+2);bottom=Math.min(319,bottom+2);
        const copy=document.createElement('canvas');copy.width=320;copy.height=320;copy.getContext('2d').drawImage(c,0,0);
        const w=right-left+1,h=bottom-top+1,scale=Math.min(144/w,144/h);
        c.width=160;c.height=160;
        cx.drawImage(copy,left,top,w,h,(160-w*scale)/2,(160-h*scale)/2,w*scale,h*scale);
      }
    }catch{/* Keep the complete fitted preview if pixel readback is unavailable. */}
  });
}
function renderCustomers() {
  if ($('guestCount')) $('guestCount').textContent = people.length + '명';
  const el = $('customerList');
  if (!el || !$('management').open || tab!=='guests') return;
  const details=el.closest?.('details');if(details&&!details.open)return;
  const signature=JSON.stringify(people.slice(0,12).map(p=>[p.id,p.state,p.bought,p.product,p.name,p.special,isRegular(S.customerBook[p.customerKey])]));
  if(el.dataset.customerState===signature)return;el.dataset.customerState=signature;
  el.innerHTML = people.length
    ? people
        .filter((p) => !p.companion)
        .slice(0, 12)
        .map(
          (p) =>
            `<div class="customer"><div class="avatar" style="background:${p.color}20">${p.special ? '★' : p.actor % 2 ? '👩' : '🧑'}</div><div><b>${escapeHTML(p.name)}${p.special ? ' · 특별 손님' : isRegular(S.customerBook[p.customerKey]) ? ' · 단골 ♡' : '님'}</b><small>${products[p.product].name}</small></div><em>${{ browse: '구경 중', try: '시연 중', rest:'휴식 중', checkout: '계산 중', queue: '대기 중', leave: p.bought ? '구매 완료' : '퇴장 중' }[p.state] ?? ''}</em></div>`
        )
        .join('')
    : `<p class="sub">${S.phase === 'prepare' ? '준비가 끝나면 가게를 열어주세요.' : S.phase === 'open' ? '곧 손님이 찾아올 거예요.' : '오늘도 수고했어요.'}</p>`;
}
function productOrderCard(p,i){
 const unlocked=productUnlocked(i),n=purchaseQuantity(i),total=purchaseCost(i)*n,short=Math.max(0,total+setupReserve(-1)-S.money);
 return `<div class="item product-order ${unlocked?'':'locked-product'}" data-product-row="${i}" ${unlocked&&!stockMatches(i)?'hidden':''}><div class="item-icon product-art" data-product-art="${i}"></div><div class="item-info"><h3>${p.name}</h3><p class="product-tier">${({electric:'일렉 기타',bass:'베이스',acoustic:'어쿠스틱',effect:'이펙터',strings:'기타줄',drums:'전자드럼'})[p.family]??p.tag} · ${TierNames[p.tier]}${isVIPProduct(i)?' · VIP 전용':''}</p><p class="product-cost" aria-label="매입 ${money(purchaseCost(i))} 판매 ${money(p.price)}">매입 ${purchaseCost(i)<p.cost?`<del>${compactMoney(p.cost)}</del> `:''}${compactMoney(purchaseCost(i))} <span>판매 ${compactMoney(p.price)}</span></p><small class="inventory-status ${stockCount(i)<=2?'low':''}">${unlocked?stockLabel(i)+' · '+(incomingQuantity(i)?deliveryText(i):'예정 0'):'🔒 '+productLockReason(i)}</small></div>${unlocked?`<div class="order-actions"><div class="purchase-controls">${quantityControl(i)}<div class="order-total" aria-label="총 구매금액"><span>합계</span><strong>${money(total)}</strong></div><p class="closing-warning" ${closingShortfall(total)?'':'hidden'}>${closingWarning(total)}</p><p class="order-short" ${short?'':'hidden'}>${money(short)} 부족</p></div><button data-order="${i}" ${short?'disabled':''}>${delayedProduct(i)?'일반 주문':'구매'}</button>${delayedProduct(i)?`<button class="express" data-express="${i}" ${S.money<expressCost(i)*n+setupReserve(-1)?'disabled':''}>긴급주문 <span>${compactMoney(expressCost(i)*n)}</span></button>`:''}</div>`:''}</div>`;
}
function drawCustomerIcons(root=document) {
  root.querySelectorAll('[data-customer-art]').forEach((el) => {
    const actor = SpecialPeopleActors[el.dataset.customerSpecial] ?? (+el.dataset.customerArt>=16&&+el.dataset.customerArt<=20?+el.dataset.customerArt:visualActor({actor:+el.dataset.customerArt})),
      c = document.createElement('canvas');
    if(!menuArtReady(el,actorAssetKeys(actor)))return;
    c.width = 100;
    c.height = 112;
    el.innerHTML = '';
    el.append(c);
    const sp = [16,19,20].includes(actor)?checkoutSprite(actor,1):walkSprite(actor,0,0,false);
    if (sp.image.complete && sp.image.naturalWidth) {
      const cx = c.getContext('2d');
      cx.translate(50, 108);
      drawFullCharacter(cx, sp, 102);
    }
  });
}

function replaceLiveContent(el,html){
 const opened=new Set(Array.from(el.querySelectorAll('details[open][data-section]')).map(d=>d.dataset.section));
 const existing=!!el.innerHTML;el.innerHTML=html;
 if(existing)for(const d of el.querySelectorAll('details[data-section]'))d.open=opened.has(d.dataset.section);
}
function setLiveText(el,value){if(el&&el.textContent!==String(value))el.textContent=value;}
function refreshStockFooter(){
 const footer=$('stockFooter');if(!footer||tab!=='stock')return;
 const rows=[...document.querySelectorAll('#panel .product-order:not(.locked-product)')].filter(row=>!row.hidden);
 if(!rows.length){footer.hidden=true;return;}footer.hidden=false;
 let row=rows.find(row=>+row.dataset.productRow===selectedProduct)??rows[0];selectedProduct=+row.dataset.productRow;
 for(const r of rows)r.classList.toggle('selected-product',r===row);
 const i=selectedProduct,n=purchaseQuantity(i),total=purchaseCost(i)*n;
 const input=row.querySelector('[data-quantity-input]'),valid=!input||input.value!==''&&Number.isInteger(Number(input.value))&&+input.value>=1&&+input.value<=999;
 const signature=[i,n,total,S.money,valid,setupReserve(-1)].join('|');if(footer.dataset.state===signature)return;footer.dataset.state=signature;
 footer.innerHTML=`<div><small>${products[i].name} · ${n}개</small><strong>합계 ${money(total)}</strong></div><button class="primary" data-order="${i}" ${!valid||S.money<total+setupReserve(-1)?'disabled':''}>선택 상품 구매</button>`;
}

function refreshStockWarnings(){
 const warning=document.getElementById('liveStockWarning');if(!warning)return;
 const h=stockWarning();if(warning.dataset.content===h)return;
 const expanded=warning.querySelector('details')?.open;
 warning.innerHTML=h;warning.dataset.content=h;
 const details=warning.querySelector('details');if(details)details.open=!!expanded;
}
function refreshOperations(){
 if(!$('management').open||tab!=='shop')return;
 setLiveText(document.querySelector('[data-operating-phase]'),{prepare:'오픈 준비',open:'영업 중',closing:'마감 중',settled:'영업 종료'}[S.phase]);
 setLiveText(document.querySelector('[data-operating-revenue]'),money(S.revenue));
 setLiveText(document.querySelector('[data-operating-sold]'),S.sold);
 setLiveText(document.querySelector('[data-operating-guests]'),'단골 '+regularCustomers().length+'명 · 요청 '+S.requests.filter(q=>!q.fulfilled).length+'건');
 const ready=readyMissionCount();setLiveText(document.querySelector('[data-operating-missions]'),(ready?'받을 보상 '+ready+'개':'목표와 보상 확인')+' ›');
}
function before23RefreshLivePanel(){
 if(!$('management').open)return;
 refreshOperations();refreshStockVisibility();refreshStockFooter();refreshCheckoutStatuses();refreshEndingGoal();
 if(tab==='stock')for(const row of document.querySelectorAll('#panel .product-order:not(.locked-product)')){
 const i=+row.dataset.productRow,stock=row.querySelector('.inventory-status');setLiveText(stock,stockLabel(i)+' · '+(incomingQuantity(i)?deliveryText(i):'예정 0'));stock?.classList.toggle('low',stockCount(i)<=2);const input=row.querySelector('[data-quantity-input]');if(input)syncQuantityInput(input);
 }else if(tab==='report'){
 const values=[S.stage+1+' / 7',money(S.revenue+S.furnitureRevenue+S.missionRevenue),money(S.expenses),money(S.revenue+S.furnitureRevenue+S.missionRevenue-S.expenses),S.visitors+'명',money(stageInfo().rent),money(staffWage())];
 for(const el of document.querySelectorAll('[data-report-value]'))setLiveText(el,values[+el.dataset.reportValue]);}
 refreshStockWarnings();
}

function stockMatches(i){
  if(stockStatus==='displayed')return displayedProductIds().includes(i);
  if(stockStatus==='soldout')return stockCount(i)===0;
  if(stockStatus==='incoming')return incomingQuantity(i)>0;
  return true;
}
function setStockStatus(value){
  if(!['all','displayed','soldout','incoming'].includes(value))return false;
  stockStatus=value;renderPanel();return true;
}
function furnitureContents(f){
  if(f.t===FurnitureId.CHECKOUT)return checkoutStatus(f);
  const ids=f.t===FurnitureId.ACCESSORY_CABINET?(f.items??LegacyShelfItems):f.t===FurnitureId.DRUM_DISPLAY?[26]:f.t===FurnitureId.GUITAR_RACK?rackProducts(f):[];
  return ids.length?ids.map(i=>products[i].name).join(' · '):f.t===FurnitureId.GUITAR_RACK||f.t===FurnitureId.ACCESSORY_CABINET?'진열 상품 없음':f.t===FurnitureId.DRUM_DEMO?'전자드럼 시연 공간':'';
}
function refreshStockVisibility(){
  if(tab!=='stock')return;
  let count=0;
  for(const row of document.querySelectorAll('#panel .product-order:not(.locked-product)')){row.hidden=!stockMatches(+row.dataset.productRow);if(!row.hidden)count++;}
  for(const section of document.querySelectorAll('[data-stock-section]')){
    section.hidden=!products.some((p,i)=>p.kind===section.dataset.stockSection&&productUnlocked(i)&&stockMatches(i)&&(stockFilter!=='instrument'||instrumentFilter==='all'||p.family===instrumentFilter));
  }
  const empty=document.getElementById('stockEmpty');if(empty)empty.hidden=count>0;
}
function refreshCheckoutStatuses(){
  for(const el of document.querySelectorAll('[data-checkout-status]')){
    const f=S.furniture.find(f=>f.id===+el.dataset.checkoutStatus);if(f)setLiveText(el,(el.closest('.checkout-status-list')?'계산대 #'+f.id+' · ':'')+checkoutStatus(f));
  }
}


// SOURCE: ui/missions
function missionRewardText(m) {
  if(m.reward.feature==='staff') return '재고 직원 운영 안내';
  return m.reward.money
    ? money(m.reward.money)
    : m.reward.feature
      ? FeatureNames[m.reward.feature]
      : m.reward.product !== undefined
      ? '특별 악기 · ' + products[m.reward.product].name
      : '새 손님 · ' + profileForActor(m.reward.actor).name;
}
function missionLaneCard(lane){
 const m=activeMission(lane),all=laneMissions(lane),count=all.filter(m=>S.claimedMissions.includes(m.id)).length,label=lane==='growth'?'성장 미션':'특별 악기 도전';
 if(!m)return `<section class="mission-card mission-lane"><span class="eyebrow">${label} · ${count} / ${all.length}</span><h3>${currentMission(lane)?'이 단계의 목표를 모두 이뤘어요':lane==='growth'?'성장 목표를 모두 이뤘어요':'특별 악기를 모두 해금했어요'}</h3><p>${currentMission(lane)?'매장을 확장하면 다음 목표가 열려요.':lane==='growth'?'특별 악기 도전과 자유로운 운영을 계속해보세요.':'해금한 악기는 상품 메뉴에서 주문할 수 있어요.'}</p></section>`;
 const status=missionStatus(m),preview=m.reward.product!==undefined?`<div class="mission-reward-art product-art" data-product-art="${m.reward.product}"></div>`:m.reward.actor!==undefined?`<div class="guest-portrait" data-customer-art="${m.reward.actor}"></div>`:'';
 return `<section class="mission-card mission-lane" data-mission-lane="${lane}"><span class="eyebrow">${label} · ${count} / ${all.length}</span><h3>${m.title}</h3><p>${lane==='growth'?'가게의 새로운 기능과 만남을 열어요.':'성장 미션과 동시에 진행 · 기한 없이 도전해요.'}</p><div class="mission-goals">${status.goals.map((g,index)=>`<div><span>${g.label}</span><b data-lane-goal="${lane}:${index}">${Math.min(g.value,g.min)} / ${g.min}</b></div>`).join('')}</div><div class="progress"><i data-lane-progress="${lane}" style="width:${Math.min(100,status.progress*100)}%"></i></div><div class="mission-reward">${preview}<div><small>달성 보상</small><b>${missionRewardText(m)}</b><small>명성 +${m.reward.money?1:2}${m.reward.product!==undefined?' · 주문 가능한 상품 해금':''}</small></div></div><button class="primary" data-claim-mission="${m.id}" ${status.ready?'':'disabled'}>${status.ready?'미션 완료 · 보상 받기':'운영하며 목표를 달성해보세요'}</button></section>`;
}
function missionPanel(){
 const active=['growth','challenge'].map(l=>activeMission(l)?.id),claimed=S.claimedMissions;
 return `<div class="mission-lanes">${missionLaneCard('growth')}${missionLaneCard('challenge')}</div><p class="sub">기존 누적 판매 기록이 반영돼요. 두 목표의 보상은 각각 받을 수 있어요.</p><details data-section="mission-history"><summary>전체 미션 · ${claimed.length} / ${MissionDefinitions.length} 완료</summary>${MissionDefinitions.map(m=>`<div class="mission-history"><b>${m.stage+1}단계 · ${m.title}</b><span>${claimed.includes(m.id)?'보상 수령 완료':active.includes(m.id)?(missionLane(m)==='growth'?'현재 성장 목표':'현재 악기 도전'):'앞으로의 목표 · '+(m.stage+1)+'단계부터'}</span><small>${missionRewardText(m)}</small><small>${m.goals.map(g=>g.label+' '+g.min+(g.kind==='distinctInstruments'?'종':'개')).join(' · ')}</small></div>`).join('')}</details>${S.missionStats.legacyImported?'<small class="mission-legacy">기존 누적 판매·현재 날짜의 판매 기록을 반영했어요. 상품별 목표는 기록된 판매량을 기준으로 해요.</small>':''}<div class="note"><span data-reputation-summary>명성 ${S.rep.toFixed(1)} / 100 · 추가 방문 +${((visitorMultiplier()-1)*100).toFixed(1)}%</span><br>일반 결제 +0.1 · 일반급 이상 결제 +0.3 · 정상 마감 +0.5 · 하루 최대 +3<br>미션 보상 명성은 일일 한도와 별도예요.</div>`;
}
let missionView='active';
function renderMissions(){if(!['active','story'].includes(missionView))missionView='active';const el=$('missionPanel');el.innerHTML=`<div class="mission-view-tabs"><button data-mission-view="active" aria-pressed="${missionView==='active'}">미션</button><button data-mission-view="story" aria-pressed="${missionView==='story'}">이야기</button></div>`+(missionView==='story'?'<div id="hanaStoryPanel">'+hanaStoryPanel()+'</div>'+endingGoalPanel():`<div class="mission-lanes">${missionLaneCard('growth')}${missionLaneCard('challenge')}</div>`);el.dataset.structure=JSON.stringify([S.stage,S.claimedMissions,missionView]);drawProductIcons(el);drawCustomerIcons(el);}

function openMissions(){hideFurnitureQuick();$('management').close();missionView='active';renderMissions();if(!$('missionDialog').open)$('missionDialog').showModal();}
$('closeMissions').onclick=()=>$('missionDialog').close();
$('missionPanel').onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;if(b.dataset.missionView){missionView=b.dataset.missionView;renderMissions();}else if(b.dataset.claimMission)claimMission(b.dataset.claimMission);};

function refreshMissionPanel() {
 if(!$('missionDialog').open)return;
 const el=document.getElementById('missionPanel');if(!el)return;
 const key=JSON.stringify([S.stage,S.claimedMissions,missionView]);
 if(el.dataset.structure!==key)renderMissions();
 for(const lane of ['growth','challenge']){
  const m=activeMission(lane);if(!m)continue;const status=missionStatus(m);
  status.goals.forEach((g,index)=>setLiveText(el.querySelector('[data-lane-goal="'+lane+':'+index+'"]'),Math.min(g.value,g.min)+' / '+g.min));
  const bar=el.querySelector('[data-lane-progress="'+lane+'"]');if(bar)bar.style.width=Math.min(100,status.progress*100)+'%';
  const button=el.querySelector('[data-claim-mission="'+m.id+'"]');if(button){button.disabled=!status.ready;setLiveText(button,status.ready?'미션 완료 · 보상 받기':'운영하며 목표를 달성해보세요');}
 }
 setLiveText(el.querySelector('[data-reputation-summary]'),'명성 '+S.rep.toFixed(1)+' / 100 · 추가 방문 +'+((visitorMultiplier()-1)*100).toFixed(1)+'%');
}
function operationsPanel(){return drumOperationsPanel();}

function drumOperationsPanel(){return `<div class="ops-row" id="drumOperations"><b>전자드럼</b>${featureBadge('drums')}${featureBadge('drumDemo')}<span>${drumsUnlocked()?'전자드럼 판매 가능 · 드러머 리온 방문':'6단계 누적300개 판매 미션 보상'}</span><small>매입400만 원 · 판매550만 원. 전용 진열대80만 원(1×1칸). 시연 공간120만 원(1×1칸)은 전자드럼3세트 판매 후 후속 미션 보상을 받으면 열려요.</small><div class="ops-actions"><button data-action="drumStock">전자드럼 주문</button><button data-action="furnTab">전용 가구 보기</button></div></div>`;}


// SOURCE: ui/hud
// HUD refresh.
function ui() {
  renderDirty = true;
  refreshTutorial();
  $('shopName').textContent = S.shopName;
  $('stageBadge').textContent=(S.stage+1)+'단계';
  refreshSaveManager();
  $('shopName').classList.toggle('long', Array.from(S.shopName).length > 8);
  document.title = S.shopName + ' · 악기점';
  updateSoundButton();
  const growth=activeMission('growth'),challenge=activeMission('challenge');
  function laneSummary(m,lane){const label=lane==='growth'?'성장':'도전';return m?label+' · '+(missionStatus(m).ready?'보상 받기':Math.round(missionStatus(m).progress*100)+'%'):label+' · '+(currentMission(lane)?'확장 후 시작':'완료');}
  $('questTitle').textContent=growth?.title??(currentMission('growth')?'새 목표는 매장 확장 후':'성장 목표 완료');
  $('questProgress').textContent=laneSummary(growth,'growth')+' / '+laneSummary(challenge,'challenge');
  if(growth){const status=missionStatus(growth),goal=status.goals.find(g=>g.value<g.min);$('questProgress').textContent=status.ready?'목표 달성 · 보상 받기':goal?goal.label+' · '+Math.min(goal.value,goal.min)+' / '+goal.min:laneSummary(growth,'growth');}
  const rewards=readyMissionCount();if(rewards){$('questTitle').textContent='미션 완료';$('questProgress').textContent='보상 '+rewards+'개 받기';}
  syncMissionToast();
  $('money').textContent = compactMoney(S.money);
  $('sheetMoney').textContent='보유금 '+compactMoney(S.money);
  $('money').title = money(S.money);
  $('day').textContent = S.day + '일차';
  const minute = Math.floor((S.time / Config.daySeconds) * 600) + 600;
  $('clock').textContent =
    String(Math.floor(minute / 60)).padStart(2, '0') + ':' + String(minute % 60).padStart(2, '0');
  $('revenue').textContent = compactMoney(S.revenue);
  $('sold').textContent = S.sold + '개';
  $('visitors').textContent = people.length + ' / ' + stageInfo().capacity + '명';
  $('rep').textContent = '명성 ' + S.rep.toFixed(1) + ' / 100';
  refreshRelationships();
  refreshOperations();
  if($('management').open&&tab==='guests')refreshGuestUnlocks();
  refreshMissionPanel();
  refreshHanaStory();
  const shortage = lowStockIds();
  $('stockAlert').hidden = !shortage.length || editing !== null;
  $('stockAlert').textContent = '재고 확인 ' + shortage.length + '종 · 상품 주문 ›';
  refreshStockWarnings();
  $('openTag').textContent =
    editing !== null
      ? '배치 중'
      : {
          prepare: '오픈 준비',
          open: paused||tutorialReading ? '일시정지' : '영업 중',
          closing: '마감 중',
          settled: '영업 종료'
        }[S.phase];
  $('openShop').hidden = S.phase !== 'prepare' || editing !== null;
  $('openShop').disabled = !shopReady();
  $('openShop').textContent = openingLabel();
  $('openShop').title = openingRequirements().join(' · ');
  $('openShop').setAttribute('aria-label', openingRequirements().join(' · ') || '가게 오픈 · 10:00');
  $('pause').textContent = paused||tutorialReading ? '▶' : 'Ⅱ';
  $('pause').setAttribute('aria-label', paused||tutorialReading ? '계속하기' : '일시정지');
  $('pause').disabled = !['open', 'closing'].includes(S.phase);
  const expansionCount = $('expansionSales');
  if (expansionCount) expansionCount.textContent = Math.min(10, S.totalSales) + ' / 10개 판매';
  const expansionBar = $('expansionSalesBar');
  if (expansionBar) expansionBar.style.width = Math.min(100, (S.totalSales / 10) * 100) + '%';
  renderCustomers();
}


// SOURCE: ui/expansion
function expansionPreview() {
  if (S.stage >= Stages.length-1) return;
  const current = stageInfo(),
    next = Stages[S.stage + 1];
  $('expansionText').textContent =
    `${current.w}×${current.h} → ${next.w}×${next.h}칸 · 동시 손님 ${current.capacity} → ${next.capacity}명`;
  $('expansionCost').textContent = money(next.cost);
  $('expansionRent').textContent = '하루 임대료 ' + money(current.rent) + ' → ' + money(next.rent);
  $('expansionUnlocks').innerHTML =
    '<h3>새로 열리는 상품과 손님</h3>' + unlockSummary(S.stage + 1, true);
  drawProductIcons();
  drawCustomerIcons();
  $('expansionGrid').innerHTML = Array.from({ length: next.h }, (_, y) =>
    Array.from(
      { length: next.w },
      (_, x) => `<i class="${x >= current.w || y >= current.h ? 'new' : ''}"></i>`
    ).join('')
  ).join('');
  $('expansionGrid').style.gridTemplateColumns = `repeat(${next.w},1fr)`;
  $('confirmExpansion').disabled =
    S.phase !== 'prepare' || S.money < next.cost + setupReserve(-1) || S.totalSales < (S.stage===5?300:10);
  $('expansionRequirement').textContent =
    S.totalSales < (S.stage===5?300:10)
      ? '누적 '+(S.stage===5?300:10)+'개 판매 후 확장할 수 있어요.'
      : '확장 후 보유 ' +
        money(S.money - next.cost) +
        ' · 권장 운영자금 ' +
        money(expansionReserve()) +
        ' (새 악기·기본 재고·임대료 3일분). 운영자금이 부족해도 확장은 선택할 수 있어요.';
  $('management').close();
  $('expansion').showModal();
}


// SOURCE: ui/relationships
let guestView='visiting';
function guestHome(){if(guestView==='vip')return vipGuestCards();if(guestView==='regulars')return '<h2>손님과의 인연</h2><div id="relationshipPanel">'+relationshipPanel()+'</div>';return '<h2>손님</h2><div id="customerList"></div>';}

let relationshipFilter='all';
function relationshipPanel(){const rows=Object.values(S.customerBook).filter(r=>r.visits>0).sort((a,b)=>Number(isRegular(b))-Number(isRegular(a))||b.satisfaction-a.satisfaction||b.purchases-a.purchases);return rows.length?rows.map(r=>`<article class="unlock-guest"><div class="guest-portrait" data-customer-art="${r.actor}" data-customer-special="${r.key.startsWith('special-')?r.key.slice(8):''}"></div><div><b>${escapeHTML(r.name)} · ${isRegular(r)?'단골 ♡':'방문 손님'}</b><p>방문 ${r.visits}회 · 구매 ${r.purchases}회</p><small>호감도 ${r.satisfaction} / 100</small><div class="affinity-track"><i style="width:${r.satisfaction}%"></i></div>${isRegular(r)?'':''}</div></article>`).join(''):'<p class="empty-note">첫 손님을 맞으면 방문 기록이 쌓여요.</p>';}

let relationshipRenderKey = '';
function refreshRelationships() {
  if (
    tab !== 'guests' ||
    !$('management').open ||
    (document.activeElement?.closest?.('#relationshipPanel')&&document.activeElement?.matches?.('input,textarea,select'))
  )
    return;
  const el = document.getElementById('relationshipPanel');
  if (!el || el.closest?.('details')?.open===false) return;
  const key = JSON.stringify([
    relationshipFilter,
    S.requests,
    S.customerBook,
    S.stock,
    S.furniture.map((f) => [f.id, f.p, f.p2, f.items])
  ]);
  if (key === relationshipRenderKey) return;
  relationshipRenderKey = key;
  replaceLiveContent(el,relationshipPanel());
  drawProductIcons(el);
  drawCustomerIcons(el);
}


// SOURCE: ui/rack-picker
// Racks choose one instrument; cabinets choose up to three accessories.
function openRackPicker(id, first = false, slot = 0) {
  const f = S.furniture.find(
    (f) => f.id === id && (f.t === FurnitureId.GUITAR_RACK || f.t === FurnitureId.ACCESSORY_CABINET)
  );
  if (!f) return false;
  rackPickerId = id;
  rackFilter = 'all';
  rackPickerSlot = slot === 1 && rackLimit() === 2 ? 1 : 0;
  $('management').close();
  $('rackPickerTitle').textContent =
    f.t === FurnitureId.ACCESSORY_CABINET
      ? first
        ? '어떤 소품을 진열할까요?'
        : '진열할 소품을 바꿀까요?'
      : first
        ? '어떤 악기를 진열할까요?'
        : '진열할 악기를 바꿀까요?';
  $('rackPickerDescription').textContent =
    f.t === FurnitureId.ACCESSORY_CABINET
      ? '이펙터·기타줄을 최대 ' + cabinetLimit() + '종 선택하세요. 선택은 바로 반영되며, 재고가 없으면 주문할 수 있어요.'
      : (first ? '배치 완료! 판매할 악기를 선택하면 진열대에 바로 반영돼요. ' : '') + '최대 ' + rackLimit() + '종 진열';
  renderRackPicker();
  if (!$('rackPicker').open) $('rackPicker').showModal();
  $('rackPicker').scrollTop = 0;
  return true;
}
function renderRackPicker() {
  const f = S.furniture.find(
    (f) =>
      f.id === rackPickerId &&
      (f.t === FurnitureId.GUITAR_RACK || f.t === FurnitureId.ACCESSORY_CABINET)
  );
  if (!f) return;
  const cabinet = f.t === FurnitureId.ACCESSORY_CABINET,
    items = f.items ?? [],
    field = rackPickerSlot === 1 ? 'p2' : 'p',
    otherField = rackPickerSlot === 1 ? 'p' : 'p2',
    chosen = (i) => (cabinet ? items.includes(i) : f[field] === i);
  $('skipRackPicker').textContent = cabinet
    ? items.length
      ? '선택 완료 · ' + items.length + ' / ' + cabinetLimit() + '종'
      : '나중에 선택 · 빈 소품장으로 두기'
    : Number.isInteger(f.p)
      ? '현재 진열 유지'
      : '나중에 선택 · 빈 거치대로 두기';
  const slots = !cabinet ? `<div class="rack-slots-summary">${[f.p,f.p2].slice(0,rackLimit()).map((i,slot) => `${slot+1}칸: ${Number.isInteger(i)?products[i].name:'비어 있음'}`).join('<br>')}</div>${rackLimit() === 2 ? `<div class="rack-slot-tabs">${[0,1].map(slot=>`<button data-rack-slot="${slot}" aria-pressed="${rackPickerSlot === slot}">${slot+1}번 칸 선택</button>`).join('')}</div>`:''}<button class="secondary rack-empty" data-clear-rack="${rackPickerSlot}">선택한 칸 비우기</button>` : '';
  const filters = cabinet ? '' : `<div class="rack-filters" aria-label="악기 종류">${[['all','전체'],['electric','기타'],['bass','베이스'],['acoustic','어쿠스틱']].map(([key,label])=>`<button data-rack-filter="${key}" aria-pressed="${rackFilter===key}">${label}</button>`).join('')}</div>`;
  const choices = products
    .map((p, i) => ({ p, i }))
    .filter(
      ({ p, i }) =>
        (cabinet ? p.kind !== 'instrument' : p.kind === 'instrument' && !isVIPProduct(i) && p.family!=='drums' && (rackFilter === 'all' || p.family === rackFilter)) && productUnlocked(i)
    )
    .sort((a,b)=>a.p.tier-b.p.tier || a.i-b.i)
    .map(
      ({ p, i }) =>
        `<div data-product-row="${i}" class="rack-choice ${chosen(i) ? 'chosen' : ''}"><div class="product-art" data-product-art="${i}"></div><div><b>${p.name}</b><p>${TierNames[p.tier]} · 판매 ${money(p.price)}</p><small class="picker-stock">${incomingQuantity(i) ? deliveryText(i)+' · ' : ''}${S.stock[i] > 0 ? '재고 ' + S.stock[i] + '개' : '재고 없음 · 선택 후 품절 표시'}</small>${S.stock[i]===0?quantityControl(i):''}<p class="closing-warning" ${closingShortfall(purchaseCost(i)*purchaseQuantity(i))?'':'hidden'}>${closingWarning(purchaseCost(i)*purchaseQuantity(i))}</p><div class="rack-choice-actions"><button class="${chosen(i) && cabinet ? 'secondary' : 'primary'}" data-pick-product="${i}" aria-pressed="${chosen(i)}" ${cabinet && !chosen(i) && items.length >= cabinetLimit() || !cabinet && f[otherField] === i ? 'disabled' : ''}>${cabinet ? (chosen(i) ? '선택 해제' : '이 소품 진열') : chosen(i) ? '진열 중' : f[otherField] === i ? '다른 칸에 진열 중' : '이 악기 진열'}</button>${true ? `<button ${S.stock[i]!==0?'hidden':''} class="secondary" data-picker-order="${i}" ${S.money < purchaseCost(i) * purchaseQuantity(i) + setupReserve(-1) ? 'disabled' : ''}>${purchaseQuantity(i)}개 주문 · ${money(purchaseCost(i) * purchaseQuantity(i))}</button>` : ''}${delayedProduct(i) ? `<button ${S.stock[i]!==0?'hidden':''} class="secondary" data-picker-express="${i}" ${S.money < expressCost(i) * purchaseQuantity(i) + setupReserve(-1) ? 'disabled' : ''}>긴급주문 · ${money(expressCost(i) * purchaseQuantity(i))}</button>` : ''}</div></div></div>`
    )
    .join('');
  $('rackPickerProducts').innerHTML = slots + filters + (choices || '<p class="note">아직 해금된 악기가 없어요.</p>');
  drawProductIcons();
}
function chooseRackProduct(i) {
  const f = S.furniture.find((f) => f.id === rackPickerId);
  if (!f) return false;
  if(Number.isInteger(i) && !(f.t===FurnitureId.ACCESSORY_CABINET && (f.items??[]).includes(i)) && !assetGate(productAssetKeys(i),()=>chooseRackProduct(i)))return false;
  if (f.t === FurnitureId.ACCESSORY_CABINET) {
    const items = f.items ?? [],
      next = items.includes(i) ? items.filter((j) => j !== i) : [...items, i];
    if (!setShelfItems(f.id, next)) return false;
    renderRackPicker();
    renderPanel();
    toast('소품 진열 ' + next.length + ' / ' + cabinetLimit() + '종');
    return true;
  }
  if (!setRackProduct(f.id, i, rackPickerSlot)) return false;
  if (rackLimit() === 1) closeRackPicker();
  else renderRackPicker();
  renderPanel();
  toast('판매할 악기를 선택했어요');
  return true;
}
function closeRackPicker() {
  $('rackPicker').close();
  rackPickerId = null;
  save();
  renderPanel();
  ui();
}
$('rackPickerProducts').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b || b.disabled) return;
  if (b.dataset.rackFilter !== undefined) { setRackFilter(b.dataset.rackFilter);return; }
  if (b.dataset.rackSlot !== undefined) { rackPickerSlot = +b.dataset.rackSlot; renderRackPicker(); return; }
  if (b.dataset.clearRack !== undefined) { const f = S.furniture.find(f=>f.id===rackPickerId); if (f) setRackProduct(f.id,null,rackPickerSlot); renderRackPicker(); renderPanel(); return; }
  if (b.dataset.quantity !== undefined) {
    const i = +b.dataset.quantity;selectedProduct=i;
    setPurchaseQuantity(i, purchaseQuantity(i) + Number(b.dataset.delta));
    const pos = $('rackPicker').scrollTop;
    renderRackPicker();
    $('rackPicker').scrollTop = pos;
  } else if (b.dataset.pickProduct !== undefined) chooseRackProduct(+b.dataset.pickProduct);
  else if (b.dataset.pickerOrder !== undefined) {
    if (orderProduct(+b.dataset.pickerOrder, false, false, purchaseQuantity(+b.dataset.pickerOrder))) renderRackPicker();
  } else if (b.dataset.pickerExpress !== undefined) {
    if (orderProduct(+b.dataset.pickerExpress, true, false, purchaseQuantity(+b.dataset.pickerExpress))) renderRackPicker();
  }
});
$('closeRackPicker').onclick = closeRackPicker;
$('skipRackPicker').onclick = closeRackPicker;
$('rackPicker').addEventListener('cancel', (e) => {
  e.preventDefault();
  closeRackPicker();
});

$('rackPickerProducts').addEventListener('input', (e) => { if (e.target.dataset.quantityInput !== undefined) syncQuantityInput(e.target); });
$('rackPickerProducts').addEventListener('change', (e) => { if (e.target.dataset.quantityInput !== undefined) syncQuantityInput(e.target, true); });

function setRackFilter(value) { if(!['all','electric','bass','acoustic'].includes(value)) return false; rackFilter=value;renderRackPicker();return true; }

function refreshRackPicker(){
 if(!$('rackPicker').open)return;
 for(const row of $('rackPickerProducts').querySelectorAll('[data-product-row]')){
  const i=+row.dataset.productRow,n=incomingQuantity(i);
  setLiveText(row.querySelector('.picker-stock'),(n?deliveryText(i)+' · ':'')+(S.stock[i]>0?'재고 '+S.stock[i]+'개':'재고 없음 · 선택 후 품절 표시'));
  for(const b of row.querySelectorAll('[data-picker-order],[data-picker-express]'))b.hidden=S.stock[i]!==0;
  const input=row.querySelector('[data-quantity-input]');if(input)syncQuantityInput(input);
 }
}


// SOURCE: systems/placement
// Transactional preview, rotate, confirm and cancel.
function previewAt(x, y) {
  if (editing === null) return null;
  hover = { x, y };
  const old = S.furniture.find((f) => f.id === selected),
    fs = S.furniture.filter((f) => f.id !== selected);
  const f = {
    id: old?.id ?? S.nextId,
    t: editing,
    x,
    y,
    p: old ? (old.p ?? null) : null,
    p2: old ? (old.p2 ?? null) : null,
    items: old?.items ?? [],
    rot: old?.rot ?? false,
    dir: placementDir,
    ...(editing===15?{vipSlots:old?.vipSlots??[null]}:{})
  };
  let reason = '배치 가능',
    ok = true;
  if (Furniture.cells(f).some(p=>p.x<0||p.y<0||p.x>=N||p.y>=M||fs.some(q=>Furniture.conflicts(f,q))||(p.x===ENTRY.x&&p.y===ENTRY.y))) {
    ok = false;
    reason = '빈 칸을 선택해주세요';
  } else if (f.t===FurnitureId.CHECKOUT && checkoutConflicts([...fs,f]).includes(f.id)) {
    ok=false; reason='계산대 앞 손님 칸이 겹쳐요. 위치나 방향을 바꿔주세요';
  } else if (atelierFacilityError(f)) {
    ok=false;reason=atelierFacilityError(f);
  } else if ([12,13,14,15].includes(f.t)&&!vipNear(f,ENTRY,[...fs,f])) {
    ok=false;reason='VIP 가구 앞 통로를 확보해주세요';
  } else if (!valid([...fs, f], true)) {
    ok = false;
    reason = '손님 통로가 막혀요';
  } else if (!old && !canBuyFurniture(editing)) {
    ok = false;
    reason = editing===1&&checkoutStations().length>=3?'계산대는 최대3개까지 배치할 수 있어요':!S.opened?'진열대·계산대 구입비를 남겨주세요':'보유 금액이 부족해요';
  }
  placementPreview = { f, valid: ok, reason };
  $('confirmPlacement').disabled = !ok;
  $('placementStatus').textContent =
    (ok ? '미리보기를 확인하고 배치하세요' : reason) + ' · ' + Furniture.labels[placementDir];
  return placementPreview;
}
function confirmPlacement() {
  if (!placementPreview || editing === null) return false;
  const v = previewAt(placementPreview.f.x, placementPreview.f.y);
  if (!v.valid) {
    toast(v.reason);
    return false;
  }
  const old = S.furniture.find((f) => f.id === selected);
  if (!old) {
    S.money -= types[editing].cost;
    S.expenses += types[editing].cost;
    S.nextId++;
  }
  S.furniture = [...S.furniture.filter((f) => f.id !== selected), v.f];
  people = [];
  spawnTime = 1;
  log(types[editing].name + '를 배치했어요. 준비가 끝나면 가게를 열어주세요.');
  const picker =
      (editing === FurnitureId.GUITAR_RACK || editing === FurnitureId.ACCESSORY_CABINET) && (!old || (editing === FurnitureId.GUITAR_RACK ? !rackProducts(v.f).length : !(v.f.items ?? []).length)),
    id = v.f.id;
  endEdit();
  Sound.play('place');
  toast('가구 배치를 완료했어요 ✓');
  if (picker) openRackPicker(id, true);
  return true;
}
function edit(t, id = null) {
  hideFurnitureQuick();
  if(t===1&&id===null&&checkoutStations().length>=3){toast('계산대는 최대3개까지 배치할 수 있어요');return false;}
  if(!furnitureUnlocked(t)){toast('운영 미션 보상으로 해금해주세요');return false;}
  if (S.phase !== 'prepare') {
    toast('가구 배치는 영업 준비 시간에 가능해요');
    return false;
  }
  if(!assetGate(furnitureAssetKeys({t}),()=>edit(t,id)))return false;
  $('management').close();
  const chosen = S.furniture.find((f) => f.id === id);
  placementDir = chosen ? Furniture.direction(chosen) : 0;
  $('rotatePreview').hidden = t === 3;
  editing = t;
  selected = id;
  hover = null;
  placementPreview = null;
  previewLocked = false;
  $('confirmPlacement').disabled = true;
  $('placementStatus').textContent = '원하는 위치를 눌러주세요';
  $('editHint').hidden = false;
  document.body.classList.add('editing');
  ui();
  const old = S.furniture.find((f) => f.id === id);
  if (old) previewAt(old.x, old.y);
  toast('위치를 고르고 미리보기를 확인해주세요');
}
function rotatePreview() {
  if (editing === null || editing === FurnitureId.MONSTERA) return;
  placementDir = (placementDir + 1) % 4;
  Sound.play('rotate');
  if (hover) previewAt(hover.x, hover.y);
  else $('placementStatus').textContent = Furniture.labels[placementDir] + ' · 위치를 선택해주세요';
}
function endEdit() {
  resetPlacementState();
  save();
  renderPanel();
  ui();
}


// SOURCE: ui/input
// Pointer routing and menu/control event bindings.
function worldAt(e) {
  const r = canvas.getBoundingClientRect(),
    k = view.scale * zoom;
  return {
    x: (e.clientX - r.left - view.w / 2 - view.panX) / k + view.centerX,
    y: (e.clientY - r.top - view.midY - view.panY) / k + view.centerY
  };
}
function tileAt(e) {
  const q = worldAt(e),
    u = (q.x - 500) / 34,
    v = (q.y - 198) / 17;
  return { x: Math.round((u + v) / 2), y: Math.round((v - u) / 2) };
}
const pickMasks = new WeakMap();
function maskFor(sprite) {
  const im = sprite.image;
  if (im.complete === false || !(im.naturalWidth ?? im.width)) return null;
  let masks = pickMasks.get(im);
  if (!masks) {
    masks = new Map();
    pickMasks.set(im, masks);
  }
  const key = sprite.sx + ',' + sprite.sy;
  if (masks.has(key)) return masks.get(key);
  try {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const cx = c.getContext('2d');
    cx.drawImage(im, sprite.sx, sprite.sy, sprite.sw, sprite.sh, 0, 0, 128, 128);
    const rgba = cx.getImageData(0, 0, 128, 128).data;
    const alpha = new Uint8Array(128 * 128);
    for (let i = 0; i < alpha.length; i++) alpha[i] = rgba[i * 4 + 3];
    const mask = { w: 128, h: 128, alpha };
    masks.set(key, mask);
    return mask;
  } catch {
    return null;
  }
}
function hitFurniture(e, p) {
  const q = worldAt(e),
    radius =
      (e.pointerType === 'touch' || lastPointerType === 'touch' ? 10 : 4) / (view.scale * zoom);
  return window.Picking.choose(
    S.furniture.map((f, order) => {
      const sprite = furniturePickSprite(f),
        mask = maskFor(sprite);
      let local = q;
      if (sprite.flip) local = { x: 2 * P(f.x, f.y).x - q.x, y: q.y };
      return {
        f,
        order,
        depth: f.t===9?-1000:f.x + f.y,
        distance: window.Picking.distance(local, sprite.rect, mask, radius)
      };
    })
  );
}
function hideFurnitureQuick(){const box=$('furnitureQuick');if(box)box.hidden=true;}
function legacyShowFurnitureQuick(f){
 selected=f.id;const box=$('furnitureQuick'),q=screenPosition(f.x,f.y),r=canvas.getBoundingClientRect();
 box.querySelector('b').textContent=types[f.t].name;let info=box.querySelector('.quick-stock');if(!info){info=document.createElement('p');info.className='quick-stock';box.querySelector('header').after(info);}info.textContent=shelfItems(f).map(i=>products[i].name+' · 재고 '+S.stock[i]).join(' / ');info.hidden=!info.textContent;
 box.querySelector('[data-quick="move"]').disabled=S.phase!=='prepare';
 box.querySelector('[data-quick="rotate"]').disabled=S.phase!=='prepare'||f.t===3;
 box.querySelector('[data-quick="sell"]').disabled=!canSellFurniture(f);
 box.style.left=Math.max(12,Math.min(innerWidth-252,r.left+q.x-120))+'px';
 box.style.top=Math.max(180,Math.min(innerHeight-220,r.top+q.y+12))+'px';box.hidden=false;renderDirty=true;
}
$('furnitureQuick').onclick=e=>{
 const b=e.target.closest('[data-quick]');if(!b||b.disabled)return;
 const f=S.furniture.find(f=>f.id===selected);if(!f){hideFurnitureQuick();return;}
 const action=b.dataset.quick;
 if(action==='close'){hideFurnitureQuick();selected=null;renderDirty=true;return;}
 if(action==='details'){setTab('furniture');selected=f.id;renderPanel();return;}
 if(action==='move'){edit(f.t,f.id);return;}
 if(action==='rotate'){edit(f.t,f.id);rotatePreview();return;}
 if(action==='sell')sellFurniture(f.id);
};

// Track all active fingers. Pinching cannot become a placement or selection tap.
let drag = null, wasDragged = false, lastPointerType = 'mouse';
const activePointers = new Map();
let pinch = null;
function zoomAt(value, x, y) {
  const before = worldAt({ clientX: x, clientY: y });
  zoom = Math.max(0.7, Math.min(2.6, value));
  const rect = canvas.getBoundingClientRect(), k = view.scale * zoom;
  view.panX = x - rect.left - view.w / 2 - (before.x - view.centerX) * k;
  view.panY = y - rect.top - view.midY - (before.y - view.centerY) * k;
}
function pointerPair() {
  const [a, b] = [...activePointers.values()];
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, distance: Math.hypot(a.x - b.x, a.y - b.y) };
}
canvas.addEventListener('pointerdown', (e) => {
  lastPointerType = e.pointerType || 'mouse';
  activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (activePointers.size === 1) {
    wasDragged = false;
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, px: view.panX, py: view.panY, threshold: e.pointerType === 'touch' ? 14 : 6 };
  } else {
    wasDragged = true;
    drag = null;
    if (activePointers.size === 2) {
      const pair = pointerPair();
      pinch = { ...pair, zoom, world: worldAt({ clientX: pair.x, clientY: pair.y }) };
    }
  }
  canvas.setPointerCapture?.(e.pointerId);
});
canvas.addEventListener('pointermove', (e) => {
  if (activePointers.has(e.pointerId)) activePointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (pinch && activePointers.size >= 2) {
    const pair = pointerPair(), rect = canvas.getBoundingClientRect();
    zoom = Math.max(0.7, Math.min(2.6, pinch.zoom * pair.distance / Math.max(1, pinch.distance)));
    const k = view.scale * zoom;
    view.panX = pair.x - rect.left - view.w / 2 - (pinch.world.x - view.centerX) * k;
    view.panY = pair.y - rect.top - view.midY - (pinch.world.y - view.centerY) * k;
    return;
  }
  if (drag && e.pointerId === drag.id) {
    const dx = e.clientX - drag.x, dy = e.clientY - drag.y;
    if (Math.hypot(dx, dy) > drag.threshold) wasDragged = true;
    if (wasDragged) {
      view.panX = Math.max(-view.w, Math.min(view.w, drag.px + dx));
      view.panY = Math.max(-view.h * 0.65, Math.min(view.h * 0.65, drag.py + dy));
    }
  }
  if (editing !== null && e.pointerType !== 'touch' && !wasDragged && !previewLocked) {
    const q = tileAt(e);
    if (!hover || q.x !== hover.x || q.y !== hover.y) previewAt(q.x, q.y);
  }
});
function endPointer(e, cancelled = false) {
  activePointers.delete(e.pointerId);
  drag = null;
  if (pinch || cancelled) wasDragged = true;
  if (activePointers.size === 0) pinch = null;
}
canvas.addEventListener('pointerup', (e) => endPointer(e));
canvas.addEventListener('pointercancel', (e) => endPointer(e, true));
canvas.addEventListener('lostpointercapture', (e) => {
  if (activePointers.has(e.pointerId)) endPointer(e, true);
});
canvas.addEventListener('pointerleave', () => { if (!drag && editing === null) hover = null; });
canvas.addEventListener('click', (e) => {
  if (wasDragged) return;
  const p = tileAt(e);
  if (editing !== null) {
    if (p.x < 0 || p.y < 0 || p.x >= N || p.y >= M) {
      toast('매장 바닥의 빈 칸을 눌러주세요');
      return;
    }
    const v = previewAt(p.x, p.y);
    previewLocked = true;
    if (!v.valid) toast(v.reason);
  } else {
    const f = hitFurniture(e, p);
    if (f) {
      showFurnitureQuick(f);
    } else {
      hideFurnitureQuick();selected=null;renderDirty=true;
      const q = worldAt(e),
        person = people.find((p) => {
          let a = P(p.x, p.y);
          return Math.abs(a.x - q.x) < 24 && q.y < a.y && q.y > a.y - 80;
        });
      if (person) {
        setTab('shop');
        toast(person.name + '님 · ' + products[person.product].name + '에 관심이 있어요');
      }
    }
  }
});


// SOURCE: ui/controls
// Management actions and game controls.
document.querySelector('.tabs').addEventListener('click', (e) => {
  const b = e.target.closest('[data-tab]');
  if (b) {
    if (editing !== null) endEdit();
    setTab(b.dataset.tab);
  }
});
$('panel').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (!b || b.disabled) {const row=e.target.closest('.product-order');if(row&&!e.target.closest('input')){selectedProduct=+row.dataset.productRow;refreshStockFooter();}return;}
  if(b.dataset.control){$(b.dataset.control).click();return;}
  if(b.dataset.decorDetail!==undefined){openDecorDetail(+b.dataset.decorDetail);return;}
  if(b.dataset.guestView){guestView=b.dataset.guestView;relationshipFilter=guestView==='regulars'?'regular':'all';renderPanel();return;}
  if(b.dataset.decorFilter){decorFilter=b.dataset.decorFilter;selected=null;renderPanel();return;}
  if(b.dataset.relationshipFilter!==undefined){relationshipFilter=b.dataset.relationshipFilter;renderPanel();return;}
  if (b.dataset.quantity !== undefined) {
    const i = +b.dataset.quantity;
    setPurchaseQuantity(i, purchaseQuantity(i) + Number(b.dataset.delta));
    renderPanel();
    return;
  }
  if (b.dataset.selectFurniture !== undefined) { selected = +b.dataset.selectFurniture; furnitureView = 'placed'; renderPanel(); return; }
  if (b.dataset.familyFilter !== undefined) { instrumentFilter = b.dataset.familyFilter; renderPanel(); return; }
  if (b.dataset.stockFilter !== undefined) { stockFilter = b.dataset.stockFilter; renderPanel(); return; }
  if (b.dataset.furnitureView !== undefined) { furnitureView = b.dataset.furnitureView; selected = null; renderPanel(); return; }
  if (b.dataset.panelTab !== undefined) { setTab(b.dataset.panelTab); return; }
  if (b.dataset.story !== undefined) { if (b.dataset.story === 'accept') acceptHanaStory(); else if (b.dataset.story === 'deliver') deliverHanaStory(); return; }
  if (b.dataset.claimMission !== undefined) {
    claimMission(b.dataset.claimMission);
    return;
  }
  if (b.dataset.build !== undefined) {
    edit(+b.dataset.build);
    return;
  }
  if (b.dataset.restock !== undefined) {
    const i = +b.dataset.restock;
    stockFilter = 'all';stockStatus='all';
    setTab('stock');
    setTimeout(
      () =>
        document
          .querySelector('[data-product-row="' + i + '"]')
          ?.scrollIntoView({ block: 'center', behavior: 'smooth' }),
      0
    );
    return;
  }
  if (b.dataset.order !== undefined) {
    selectedProduct=+b.dataset.order;orderProduct(selectedProduct, false, false, purchaseQuantity(selectedProduct));
    return;
  }
  if (b.dataset.cashier !== undefined) { if(b.dataset.cashier==='hire') hireCashier();else dismissCashier();return; }
  if (b.dataset.featureGo !== undefined) { visitFeature(b.dataset.featureGo);return; }
  if (b.dataset.staff !== undefined) {
    if (b.dataset.staff === 'hire') hireStaff();
    else dismissStaff();
    return;
  }
  if (b.dataset.ad !== undefined) {
    bookAd();
    return;
  }
  if (b.dataset.express !== undefined) {
    orderProduct(+b.dataset.express, true, false, purchaseQuantity(+b.dataset.express));
    return;
  }
  switch (b.dataset.action) {
    case 'saveManager':openSaveManager();break;
    case 'missions':openMissions();break;
    case 'staffManagement':
      openStaffManagement();
      break;
    case 'staffSettings':
      openStaffSettings();
      break;
    case 'chooseRack':
      openRackPicker(selected);
      break;
    case 'title':
      showTitle();
      break;
    case 'open':
      openShop();
      break;
    case 'expandPreview':
      expansionPreview();
      break;
    case 'export':
      downloadSave();
      break;
    case 'drumStock':setTab('stock');stockFilter='instrument';instrumentFilter='drums';renderPanel();break;
    case 'importCode':openSaveCode();break;
    case 'recover':previewPreviousSave();break;
    case 'import':
      $('importSaveFile').click();
      break;
    case 'rename':
      $('management').close();
      openName(false);
      break;
    case 'audio':
      toggleSound();
      renderPanel();
      break;
    case 'furnTab':
      setTab('furniture');
      break;
    case 'save':
      save();
      toast(storageOK ? '운영 기록을 저장했어요' : '저장 파일 내려받기를 이용해주세요');
      break;
    case 'move': {
      const f = S.furniture.find((f) => f.id === selected);
      if (f) edit(f.t, f.id);
      break;
    }
    case 'rotate': {
      const f = S.furniture.find((f) => f.id === selected);
      if (f && f.t !== FurnitureId.MONSTERA) {
        edit(f.t, f.id);
        rotatePreview();
      }
      break;
    }
    case 'sell': { sellFurniture(selected); break; }
  }
});
$('panel').addEventListener('change', (e) => {
  if(e.target.id==='stockStatus'){setStockStatus(e.target.value);return;}
  if (e.target.dataset.quantityInput !== undefined) {
    syncQuantityInput(e.target, true);
    return;
  }
  if (e.target.dataset?.shelf !== undefined) {
    const f = S.furniture.find((f) => f.id === selected);
    if (f?.t === 5) {
      const i = +e.target.dataset.shelf;
      if (!productUnlocked(i) || isInstrument(i)) {
        e.target.checked = false;
        return;
      }
      const items = new Set(f.items ?? LegacyShelfItems);
      if (e.target.checked) {
        if (items.size >= cabinetLimit()) {
          e.target.checked = false;
          toast('선반에는 최대 ' + cabinetLimit() + '종을 진열할 수 있어요');
          return;
        }
        items.add(i);
      } else items.delete(i);
      if (setShelfItems(f.id, [...items])) toast('선반 상품을 변경했어요');
      else e.target.checked=(f.items??LegacyShelfItems).includes(i);
    }
  }
  if (e.target.id === 'rackProduct') {
    const f = S.furniture.find((f) => f.id === selected);
    if (f && setRackProduct(f.id, e.target.value === '' ? null : +e.target.value))
      toast('진열 상품을 변경했어요');
    else if(f)e.target.value=f.p??'';
  }
});
$('closeSheet').onclick = () => {
  $('management').close();
  document.querySelectorAll('[data-tab]').forEach((b) => b.classList.remove('active'));
  selected = null;
};
$('management').addEventListener('click', (e) => {
  if (e.target === $('management')) {
    const r = $('management').getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom)
      $('closeSheet').onclick();
  }
});

const hud=document.querySelector('.hud');hud.insertBefore(document.querySelector('.day-badge'),document.querySelector('.wallet'));
$('settings').onclick=()=>setTab('report');
document.querySelector('.sheet-nav').addEventListener('click',e=>{const b=e.target.closest('[data-panel-tab]');if(b)setTab(b.dataset.panelTab);});
$('sheetSettings').onclick=()=>setTab('report');
const timeControls=$('timeControls'),timeAnchor=$('timeControlAnchor'),dialogStack=[];
function syncTimeControls(){
 const dialogs=dialogStack.filter(d=>d.open),top=dialogs.at(-1);
 const host=top&&['management','missionDialog','staffManagement','staffSettings','decorDetail','saveManager','saveBackup','importConfirm'].includes(top.id)?top:timeAnchor;
 if(timeControls.parentElement!==host)host.append(timeControls);
 const floating=host!==timeAnchor;timeControls.classList.toggle('floating-time-controls',floating);
 if(floating){const r=timeAnchor.getBoundingClientRect();Object.assign(timeControls.style,{left:r.left+'px',top:r.top+'px'});}else{timeControls.style.left='';timeControls.style.top='';}
 syncTutorialHost();
}
new MutationObserver(records=>{
 for(const {target:d} of records){if(d.tagName!=='DIALOG')continue;const i=dialogStack.indexOf(d);if(i>=0)dialogStack.splice(i,1);if(d.open)dialogStack.push(d);}
 syncTimeControls();
}).observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});
const timeObserver=new ResizeObserver(syncTimeControls);timeObserver.observe(timeAnchor);timeObserver.observe(document.querySelector('.hud'));
window.addEventListener('resize',syncTimeControls);
document.addEventListener('scroll',syncTimeControls,true);
$('management').addEventListener('close',()=>{if(!$('management').open){document.body.classList.remove('menu-open');resizeView();draw();syncTimeControls();}});
$('panel').addEventListener('input',()=>refreshStockFooter());
$('panel').addEventListener('change',()=>refreshStockFooter());

$('quest').onclick = openMissions;
$('homeView').onclick = () => {
  view.panX = 0;
  view.panY = 0;
  zoom = 1;
};
$('fullscreen').onclick = async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else if (document.documentElement.requestFullscreen)
      await document.documentElement.requestFullscreen();
    else toast('홈 화면에 추가하면 더 넓게 즐길 수 있어요');
  } catch {
    toast('현재 브라우저에서는 전체 화면을 열 수 없어요');
  }
};
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && editing !== null) endEdit();
});
$('cancelEdit').onclick = endEdit;
$('confirmPlacement').onclick = confirmPlacement;
$('rotatePreview').onclick = rotatePreview;
$('pause').onclick = () => {
  if(tutorialReading){tutorialReading=false;paused=false;ui();return;}
  paused = !paused;
  $('pause').textContent = paused ? '▶' : 'Ⅱ';
  $('pause').setAttribute('aria-label', paused ? '계속하기' : '일시정지');
  ui();
};
$('speed').onclick = () => {
  speed = speed === 1 ? 2 : speed === 2 ? 3 : 1;
  $('speed').textContent = speed + '×';
};
$('zoomIn').onclick = () => (zoom = Math.min(2.6, zoom + 0.15));
$('zoomOut').onclick = () => (zoom = Math.max(0.7, zoom - 0.15));
let pausedBeforeHelp = false;
function openHelp(){startTutorial();}
function showTutorialWelcome(){pausedBeforeHelp=paused;paused=true;$('modal').showModal();}
function closeHelp() {
  $('modal').close();
  paused = pausedBeforeHelp;
  $('pause').textContent = paused ? '▶' : 'Ⅱ';
  startTutorial();
}
$('help').onclick = openHelp;
$('start').onclick = closeHelp;
$('closeModal').onclick = closeHelp;
$('modal').addEventListener('cancel', () => {
  paused = pausedBeforeHelp;
  $('pause').textContent = paused ? '▶' : 'Ⅱ';
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) save();
  last = 0;
});
window.addEventListener('pagehide', save);

$('importSaveFile').addEventListener('change', async (e) => {
  const file = e.target.files?.[0];
  if (!file) return;
  try {
    requestSaveImport(await file.text());
  } catch {
    toast('저장 파일을 읽을 수 없어요.');
  }
  e.target.value = '';
});

$('stockAlert').onclick = () => {stockStatus='all';stockFilter='instrument';setTab('stock');};
$('openShop').onclick = openShop;
$('nextDay').onclick = nextDay;
$('settlement').addEventListener('cancel', (e) => e.preventDefault());
$('cancelExpansion').onclick = () => $('expansion').close();
$('confirmExpansion').onclick = () => {
  if (expandShop()) $('expansion').close();
};

$('closeUnlock').onclick = closeUnlockNotice;
$('unlockModal').addEventListener('cancel', (e) => {
  e.preventDefault();
  closeUnlockNotice();
});

$('panel').addEventListener('input', (e) => { if (e.target.dataset.quantityInput !== undefined) syncQuantityInput(e.target); });


// SOURCE: ui/settings
// First-run naming, rename and sound preferences.
function escapeHTML(value) {
  return String(value).replace(
    /[&<>"']/g,
    (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]
  );
}
function cleanName(raw) {
  const value = String(raw)
    .normalize('NFC')
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .trim();
  return value && Array.from(value).length <= 10 ? value : null;
}
let namingFirst = false,
  pausedBeforeName = false;
function namePreview() {
  const value = $('nameInput').value || '';
  $('namePreview').textContent = value.trim() || '나만의 악기점';
  $('nameCount').textContent = Array.from(value.normalize('NFC').trim()).length + ' / 10';
  $('nameError').textContent = cleanName(value) ? '' : '1~10자로 입력해주세요.';
}
function openName(first) {
  namingFirst = first;
  pausedBeforeName = paused;
  paused = true;
  $('pause').textContent = '▶';
  $('closeName').hidden = false;
  $('nameHeading').textContent = first ? '어떤 이름으로 문을 열까요?' : '새로운 간판을 달아볼까요?';
  $('createShop').textContent = first ? '이 이름으로 시작하기 →' : '이름 변경하기';
  $('nameInput').value = S.shopName;
  namePreview();
  $('nameModal').showModal();
}
function applyShopName(raw) {
  const name = cleanName(raw);
  if (!name) {
    $('nameError').textContent = '1~10자로 입력해주세요.';
    return false;
  }
  if (namingFirst && pendingNewGame && !assetGate(criticalAssetKeys(fresh()),()=>applyShopName(raw)))return false;
  if (namingFirst && pendingNewGame) commitNewGame();
  S.shopName = name;
  S.named = true;
  $('nameModal').close();
  paused = pausedBeforeName;
  $('pause').textContent = paused ? '▶' : 'Ⅱ';
  sceneCacheKey = '';
  save();
  ui();
  Sound.play('open');
  if (namingFirst) {
    log(name + '의 빈 매장을 꾸며보세요.');
    showTutorialWelcome();
  } else toast('가게 이름을 ' + name + '(으)로 변경했어요');
  return true;
}
function closeName() {
  if (namingFirst && pendingNewGame) {
    $('nameModal').close();
    pendingNewGame = false;
    showTitle();
    return;
  }
  if (namingFirst) return;
  $('nameModal').close();
  paused = pausedBeforeName;
  $('pause').textContent = paused ? '▶' : 'Ⅱ';
}
function updateSoundButton() {
  $('soundToggle').textContent = S.audio.muted ? '♩' : '♪';
  $('soundToggle').setAttribute('aria-label', S.audio.muted ? '소리 켜기' : '소리 끄기');
}
function toggleSound() {
  Sound.unlock();
  S.audio.muted = !S.audio.muted;
  Sound.apply();
  save();
  updateSoundButton();
}
$('soundToggle').onclick = toggleSound;
$('nameInput').addEventListener('input', namePreview);
$('nameForm').addEventListener('submit', (e) => {
  e.preventDefault();
  applyShopName($('nameInput').value);
});
$('closeName').onclick = closeName;
$('nameModal').addEventListener('cancel', (e) => {
  e.preventDefault();
  closeName();
});
$('panel').addEventListener('input', (e) => {
  const key =
    e.target.id === 'musicVolume' ? 'music' : e.target.id === 'effectsVolume' ? 'effects' : null;
  if (!key) return;
  S.audio[key] = Math.max(0, Math.min(1, Number(e.target.value) / 100));
  Sound.apply();
  $(key + 'Value').textContent = Math.round(S.audio[key] * 100) + '%';
  save();
});
document.addEventListener('pointerdown', () => Sound.unlock(), { once: true });
document.addEventListener('visibilitychange', () =>
  Sound.setRunning(!document.hidden && !titleActive && !gameplayBlocked() && !paused && editing === null)
);


// SOURCE: ui/staff-settings
let staffSettingsScope='displayed',employeeTab='inventory',selectedEmployee=0,pendingDismiss=null;
function staffManagementShortcut(){return `<section class="employee-shortcut operation-card"><div><b>직원</b><small>재고 ${S.staffHired}명 · 계산 ${S.cashierHired}명 · VIP ${Number(S.vip.hired)}명 · 하루 ${money(staffWage())}</small></div><button data-action="staffManagement">관리 ›</button></section>`;}
function reserveSummary(){return `<div class="reserve-summary"><b>확보할 운영비 ${money(operatingReserve())}</b><small>임대료 + 전체 직원 일급 · 10일분</small></div>`;}
function autoToggle(){return `<label class="auto-toggle"><span>전체 직원 자동 주문</span><input type="checkbox" data-staff-auto ${S.staffPolicy.enabled?'checked':''} aria-label="전체 직원 자동 주문 켜기"></label>`;}
function staffPreviewHtml(rows=staffOrderPlan()){return rows.length?rows.map(row=>`<div class="staff-preview"><b>${products[row.i].name}</b><span>${row.quantity}개 · ${money(row.cost)}</span><small>${row.reason}</small></div>`).join(''):'<p class="empty-note">진열 상품을 선택해주세요.</p>';}
function renderStaffSettings(){
 const showDetails=$('staffSettingsContent').querySelector('details[data-products]')?.open??false;
 $('staffSettingsContent').innerHTML=`${autoToggle()}${reserveSummary()}<button class="secondary" data-staff-recommend>추천 기준 적용 · 기본 3 / 예약 1</button><p class="settings-hint">수량과 상품별 켜짐 상태는 유지해요.</p><details data-products ${showDetails?'open':''}><summary>상품별 설정</summary><div class="employee-tabs">${[['displayed','진열 중'],['all','해금 전체']].map(([k,label])=>`<button data-staff-scope="${k}" aria-pressed="${staffSettingsScope===k}">${label}</button>`).join('')}</div>${products.map((p,i)=>({p,i})).filter(({i})=>productUnlocked(i)&&(staffSettingsScope==='all'||displayedProductIds().includes(i))).map(({p,i})=>`<article class="staff-product simple-product"><div class="staff-product-name"><b>${p.name}</b><small>${stockLabel(i)} · ${incomingQuantity(i)?deliveryText(i):'입고 예정 0'}</small><label><input type="checkbox" data-staff-enabled="${i}" ${S.staffPolicy.products[i].enabled?'checked':''}>자동 주문</label></div><div class="staff-rule"><label><input type="number" inputmode="numeric" min="0" max="99" data-staff-at="${i}" aria-label="${p.name} 주문 기준 재고" value="${staffReorderAt(i)}">개 이하일 때</label><span>→</span><label><input type="number" inputmode="numeric" min="1" max="999" data-staff-quantity="${i}" aria-label="${p.name} 자동 주문 수량" value="${S.staffPolicy.products[i].quantity}">개 주문</label></div></article>`).join('')||'<p class="empty-note">해당 상품이 없어요.</p>'}</details><details><summary>주문 예정 확인</summary><div id="staffOrderPreview">${staffPreviewHtml()}</div></details>`;
}
function openStaffSettings(){if(!staffSlots())return false;staffSettingsScope='displayed';renderStaffSettings();if(!$('staffSettings').open)$('staffSettings').showModal();return true;}
$('closeStaffSettings').onclick=()=>$('staffSettings').close();
function setAutoOrder(value){S.staffPolicy.enabled=!!value;save();ui();document.querySelectorAll('[data-staff-auto]').forEach(el=>el.checked=S.staffPolicy.enabled);const preview=$('staffOrderPreview');if(preview)preview.innerHTML=staffPreviewHtml();refreshStaffManagement();}
function applyStaffSetting(e,commit){
 const d=e.target.dataset;if(d.staffAuto!==undefined){if(commit)setAutoOrder(e.target.checked);return;}
 if(d.staffEnabled!==undefined&&!commit)return;let ok=true;
 if(d.staffEnabled!==undefined){const i=+d.staffEnabled;ok=setStaffProduct(i,e.target.checked,S.staffPolicy.products[i].quantity);}
 else if(d.staffQuantity!==undefined){const i=+d.staffQuantity;ok=e.target.value!==''&&setStaffProduct(i,S.staffPolicy.products[i].enabled,+e.target.value);}
 else if(d.staffAt!==undefined){const i=+d.staffAt,r=S.staffPolicy.products[i];ok=e.target.value!==''&&setStaffProduct(i,r.enabled,r.quantity,+e.target.value);}
 else return;
 if(!ok&&commit){if(d.staffQuantity!==undefined)e.target.value=S.staffPolicy.products[+d.staffQuantity].quantity;if(d.staffAt!==undefined)e.target.value=staffReorderAt(+d.staffAt);}
 const preview=$('staffOrderPreview');if(preview)preview.innerHTML=staffPreviewHtml();if(commit)toast(ok?'설정을 저장했어요.':'기준은 0~99개, 수량은 1~999개로 입력해주세요.');
}
$('staffSettingsContent').addEventListener('input',e=>applyStaffSetting(e,false));
$('staffSettingsContent').addEventListener('change',e=>applyStaffSetting(e,true));
$('staffSettingsContent').addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.dataset.staffScope){staffSettingsScope=b.dataset.staffScope;renderStaffSettings();}if(b.hasAttribute('data-staff-recommend'))applyRecommendedStaffSettings();});
function employeeStatus(index){
 if(index>=S.staffHired)return '미채용';
 if(!S.staffPolicy.enabled)return '자동 주문 꺼짐';
 if(S.phase==='prepare')return '영업 준비';
 if(S.phase==='settled')return '업무 종료';
 const rows=staffOrderPlan().filter(r=>index===0?!delayedProduct(r.i):delayedProduct(r.i));
 if(rows.length && !rows.some(r=>r.ready)){const important=rows.find(r=>r.reason==='10일 운영비 보호')??rows.find(r=>r.reason==='입고 대기 중')??rows.find(r=>r.reason==='자동 주문 꺼짐');if(important)return important.reason;}
 const p=staffTrips[index];
 return ({walking:'진열대로 이동 중',returning:'자리로 복귀 중',sorting:'진열 정리 중',waiting:'손님 통로 양보 중',blocked:'통로 막힘 · 연출 대기'})[p?.state]??'재고 확인 중';
}

function employeeCards(){
 const inventory=employeeTab==='inventory',count=inventory?S.staffHired:S.cashierHired,slots=inventory?staffSlots():cashierSlots(),ready=S.phase==='prepare'&&editing===null;
 return [0,1].map(i=>{const active=i<count,unlocked=i<slots,cost=inventory?inventoryHireCost(i):Config.staff.hireCost,wage=inventory?inventoryDailyWage(i):Config.staff.wage,counter=checkoutStations()[i+1];
 const state=active?(inventory?employeeStatus(i):counter?checkoutStatus(counter):'계산대 필요'):!unlocked?(inventory?(i?'5단계 미션 해금':'매장 2단계 해금'):(i?'매장 4단계 해금':'매장 3단계 해금')):!inventory&&!counter?'추가 계산대 필요':'채용 가능';
 const canHire=ready&&unlocked&&i===count&&(inventory||counter)&&S.money>=cost+setupReserve(-1)+settlementCushion(wage);
 return `<article class="employee-card ${active&&i===selectedEmployee?'selected-employee':''}"><div class="guest-portrait" data-customer-art="${(inventory?17:19)+i}"></div><div class="employee-description"><h3>${inventory?'재고':'계산'} 직원 ${i+1}</h3><p data-employee-status="${employeeTab}:${i}">${escapeHTML(state)}</p><small>일급 ${money(wage)}${active?'':' · 채용비 '+money(cost)}</small></div><div class="employee-actions">${active?`<button data-employee-select="${i}" aria-pressed="${i===selectedEmployee}">관리</button>`:`<button data-employee-action="hire" ${canHire?'':'disabled'}>채용하기</button>`}</div></article>`;
 }).join('');
}
function renderBaseStaffManagement(){
 const inventory=employeeTab==='inventory',count=inventory?S.staffHired:S.cashierHired;if(selectedEmployee>=count)selectedEmployee=Math.max(0,count-1);
 const ready=S.phase==='prepare'&&editing===null;
 const detail=count?`<section class="employee-detail"><h3>${inventory?'재고':'계산'} 직원 ${selectedEmployee+1} 관리</h3>${inventory?`${autoToggle()}${reserveSummary()}<button class="secondary" data-staff-recommend>추천 기준 적용 · 기본 3 / 예약 1</button><button class="primary" id="employeeOrderSettings">상품별 주문 설정</button><details><summary>담당 업무</summary><p>${selectedEmployee===0?'입문 악기·소품 보충':'일반급 이상 악기·전자드럼 예약 주문'}</p></details>`:`<p>담당 계산대 ${selectedEmployee+2}</p><p>${checkoutStations()[selectedEmployee+1]?checkoutStatus(checkoutStations()[selectedEmployee+1]):'계산대 필요'}</p>`}<div class="dismiss-area"><button data-employee-action="dismiss" ${!ready||selectedEmployee!==count-1?'disabled':''}>퇴사 처리</button>${selectedEmployee!==count-1?'<small>두 번째 직원부터 퇴사할 수 있어요.</small>':''}</div></section>`:'';
 $('staffManagementContent').innerHTML=`<div class="employee-payroll"><b>직원 ${S.staffHired+S.cashierHired}명</b><span>하루 일급 ${money(staffWage())}</span></div><div class="employee-tabs">${[['inventory','재고 직원'],['cashier','계산 직원']].map(([key,label])=>`<button data-employee-tab="${key}" aria-pressed="${employeeTab===key}">${label}</button>`).join('')}</div>${employeeCards()}${detail}`;
 drawCustomerIcons($('staffManagementContent'));if($('employeeOrderSettings'))$('employeeOrderSettings').onclick=openStaffSettings;
}
function openStaffManagement(kind){if(['inventory','cashier','vip'].includes(kind))employeeTab=kind;selectedEmployee=0;renderStaffManagement();if(!$('staffManagement').open)$('staffManagement').showModal();return true;}
function refreshStaffManagement(){if(!$('staffManagement').open)return;for(const el of document.querySelectorAll('[data-employee-status]')){const[k,n]=el.dataset.employeeStatus.split(':'),i=+n;if(k==='inventory'&&i<S.staffHired)setLiveText(el,employeeStatus(i));if(k==='cashier'&&i<S.cashierHired){const f=checkoutStations()[i+1];if(f)setLiveText(el,checkoutStatus(f));}}}
$('closeStaffManagement').onclick=()=>$('staffManagement').close();
$('staffManagementContent').addEventListener('change',e=>{if(e.target.hasAttribute('data-staff-auto'))setAutoOrder(e.target.checked);});
$('staffManagementContent').onclick=e=>{const b=e.target.closest('button');if(!b||b.disabled)return;
 if(b.dataset.employeeTab){employeeTab=b.dataset.employeeTab;selectedEmployee=0;renderStaffManagement();return;}
 if(b.dataset.employeeSelect!==undefined){selectedEmployee=+b.dataset.employeeSelect;renderStaffManagement();return;}
 if(b.hasAttribute('data-staff-recommend')){applyRecommendedStaffSettings();return;}
 if(b.dataset.employeeAction==='hire'){if(employeeTab==='inventory'?hireStaff():hireCashier())renderStaffManagement();}
 if(b.dataset.employeeAction==='dismiss'){pendingDismiss={kind:employeeTab,index:selectedEmployee};$('dismissSummary').textContent=(employeeTab==='inventory'?'재고':'계산')+' 직원 '+(selectedEmployee+1)+'을 퇴사 처리할까요?';$('dismissConfirm').showModal();}
};
$('cancelDismiss').onclick=()=>{pendingDismiss=null;$('dismissConfirm').close();};
$('confirmDismiss').onclick=()=>{const job=pendingDismiss;pendingDismiss=null;$('dismissConfirm').close();if(!job)return;const count=job.kind==='inventory'?S.staffHired:S.cashierHired;if(job.index!==count-1||S.phase!=='prepare'){toast('현재 직원 상태를 다시 확인해주세요.');return;}if(job.kind==='inventory'?dismissStaff():dismissCashier())renderStaffManagement();};

// SOURCE: ui/title
// The title owns entry into the session; no simulation or autosave runs behind it.
function titleSaveAvailable() {
  return !storageReadFailed && S.named;
}
function showTitle() {
  if (!titleActive) save();
  titleActive = true;
  pendingNewGame = false;
  paused = true;
  for (const id of [
    'management',
    'modal',
    'nameModal',
    'settlement',
    'expansion',
    'unlockModal',
    'rackPicker',
    'staffSettings',
    'staffManagement',
    'saveBackup',
    'endingModal',
    'recoveryModal'
  ])
    $(id).close();
  if (editing !== null) endEdit();
  resetInteractionState();
  document.querySelector('.app').inert = true;
  $('titleScreen').hidden = false;
  $('newGameConfirm').hidden = true;
  $('titleMenu').hidden = false;
  $('titleArt').style.backgroundImage = 'url("' + asset('assets/title-v1.webp') + '")';
  const available = titleSaveAvailable();
  $('continueGame').disabled = !available;
  $('titleSave').textContent = available
    ? S.shopName +
      ' · ' +
      S.day +
      '일차 · ' +
      { prepare: '오픈 준비', open: '영업 중', closing: '마감 중', settled: '정산 완료' }[S.phase]
    : storageReadFailed
      ? '기존 저장을 읽지 못했어요. 새로 시작하기 전까지 원본을 유지해요.'
      : '아직 저장된 가게가 없어요';
  Sound.setRunning(false);
  $('newGame').focus?.();
}
function beginNewGame() {
  pendingNewGame = true;
  $('titleScreen').hidden = true;
  openName(true);
  $('nameInput').value = '작은 선율';
  namePreview();
}
function commitNewGame() {
  // Preserve the previous raw save, including a damaged save, before the first write.
  try {
    const previous = localStorage.getItem(KEY);
    if (previous) localStorage.setItem(KEY + ':backup', previous);
  } catch {}
  S = fresh();
  people = [];
  floaters = [];
  spawnTime = 0;
  doorOpen = 0;
  resetInteractionState();
  speed = 1;
  $('speed').textContent = '1×';
  document.body.classList.remove('editing');
  $('editHint').hidden = true;
  Sound.settings = S.audio;
  Sound.apply();
  storageReadFailed = false;
  sceneCacheKey = '';
  shopLight = 0.88;
  resizeShop();
  syncEntrance();
  view.panX = 0;
  view.panY = 0;
  titleActive = false;
  pendingNewGame = false;
  pausedBeforeName = false;
  document.querySelector('.app').inert = false;
  last = 0;
}
function continueGame() {
  if (!titleSaveAvailable()) return false;
  if(!assetGate(criticalAssetKeys(),continueGame))return false;
  titleActive = false;
  pendingNewGame = false;
  paused = false;
  $('titleScreen').hidden = true;
  document.querySelector('.app').inert = false;
  $('pause').textContent = 'Ⅱ';
  last = 0;
  ui();
  restoreDayDialog();
  return true;
}
$('newGame').onclick = () => {
  if (titleSaveAvailable() || storageReadFailed) {
    $('newGameConfirm').hidden = false;
    $('titleMenu').hidden = true;
    $('cancelNewGame').focus?.();
  } else beginNewGame();
};
$('confirmNewGame').onclick = beginNewGame;
$('cancelNewGame').onclick = () => {
  $('newGameConfirm').hidden = true;
  $('titleMenu').hidden = false;
  $('newGame').focus?.();
};
$('continueGame').onclick = continueGame;


// SOURCE: ui/recovery
let recoveryRaw=null;
function previewPreviousSave(){
 try{const raw=localStorage.getItem(KEY+':backup');if(!raw)throw Error('이전 저장이 없어요.');const s=SaveStore.decode(raw,fresh(),saveRules());recoveryRaw=raw;
 $('recoverySummary').textContent=s.shopName+' · '+s.day+'일차 · 매장 '+(s.stage+1)+'단계 · 보유 '+money(s.money);
 $('recoveryStatus').textContent='복원하면 현재 가게를 이 저장으로 바꿔요. 현재 진행은 먼저 백업해두세요.';
 $('confirmRecovery').disabled=false;$('recoveryModal').showModal();return true;
 }catch(e){toast(e.message||'이전 저장을 읽을 수 없어요.');return false;}
}
function restorePreviousSave(){if(!recoveryRaw)return false;const ok=importSaveData(recoveryRaw,false);if(ok){$('recoveryModal').close();recoveryRaw=null;toast('이전 저장으로 복원했어요.');}else $('recoveryStatus').textContent='복원하지 못했어요. 현재 가게와 이전 저장은 유지돼요.';return ok;}
$('titleRecover').onclick=previewPreviousSave;
$('confirmRecovery').onclick=restorePreviousSave;
$('cancelRecovery').onclick=()=>{$('recoveryModal').close();recoveryRaw=null;};


// Unified save actions. Confirmation is required only for a human-initiated restore.
let pendingImportRaw=null,tutorialReading=false,lastTutorialStep=-1,tutorialRenderKey='';
function refreshSaveManager(){const el=$('saveManagerStatus');if(el)el.textContent=storageOK?'자동 저장 사용 중 · '+S.shopName+' · '+S.day+'일차':'자동 저장을 사용할 수 없어요. 파일이나 코드로 백업해주세요.';}
function openSaveManager(){refreshSaveManager();if(!$('saveManager').open)$('saveManager').showModal();}
function requestSaveImport(raw){
 try{const restored=SaveStore.decode(raw,fresh(),saveRules());pendingImportRaw=raw;$('importSummary').textContent=restored.shopName+' · '+restored.day+'일차 · '+(restored.stage+1)+'단계 · 보유금 '+money(restored.money);$('importConfirm').showModal();return true;}
 catch{pendingImportRaw=null;backupStatus('올바른 저장 파일 또는 코드를 넣어주세요. 현재 가게는 유지돼요.');toast('저장 내용을 확인해주세요. 현재 가게는 유지돼요.');return false;}
}
$('closeSaveManager').onclick=()=>$('saveManager').close();
$('saveManagerNow').onclick=()=>{save();refreshSaveManager();toast(storageOK?'지금 진행을 저장했어요.':'파일 또는 코드로 백업해주세요.');};
$('saveManagerExport').onclick=downloadSave;
$('saveManagerFile').onclick=()=>$('importSaveFile').click();
$('saveManagerCode').onclick=openSaveCode;
$('cancelImport').onclick=()=>{pendingImportRaw=null;$('importConfirm').close();};
$('confirmImport').onclick=()=>{if(pendingImportRaw!==null){const raw=pendingImportRaw;pendingImportRaw=null;if(importSaveData(raw))$('importConfirm').close();}};
$('importConfirm').addEventListener('cancel',()=>pendingImportRaw=null);
$('closeDecorDetail').onclick=()=>$('decorDetail').close();
// First trading day: detect completed actions, highlight the next control, never reset the shop.
const TutorialSteps=[
 ['계산대를 놓아보세요','상점 → 꾸미기에서 계산대를 골라 바닥의 빈 칸을 누르고 ‘여기에 배치’를 눌러요.'],
 ['악기 진열대를 놓아보세요','상점 → 꾸미기에서 기타 진열대를 골라 배치해요. 위치와 방향은 나중에도 바꿀 수 있어요.'],
 ['판매할 악기를 골라보세요','진열대의 악기 선택창에서 판매할 악기를 선택해요. 처음에는 기본 악기로 시작해보세요.'],
 ['첫 영업을 시작해보세요','준비가 끝났어요. 매장 화면의 ‘가게 오픈’을 눌러 첫 손님을 맞이해요.'],
 ['첫 판매를 지켜보세요','손님은 진열대를 보고 시연하거나 계산해요. 안내를 확인하고 영업을 계속해주세요.'],
 ['재고를 구매해보세요','악기 메뉴에서 수량을 정하고 구매해요. 기본 상품은 즉시 입고돼요.'],
 ['첫 정산을 확인해보세요','마감 후 매출·상품 매입비·임대료를 확인해요. 매입비는 주문한 날 지출로 기록돼요.']
];
function tutorialGoal(step){return [()=>checkoutStations().length>0,()=>S.furniture.some(f=>[0,6].includes(f.t)),()=>S.furniture.some(f=>[0,6].includes(f.t)&&shelfItems(f).some(productUnlocked)),()=>S.opened||S.phase!=='prepare'||S.totalSales>0,()=>S.totalSales>0,()=>S.tutorial.purchased,()=>S.phase==='settled'||S.day>S.tutorial.startDay][step]?.()??false;}
function before231SyncTutorialHost(){
 const card=$('tutorialCard');if(!card)return;
 const top=dialogStack.filter(d=>d.open).at(-1);
 if(top?.id==='management'){if(card.parentElement!==top)top.insertBefore(card,$('panel'));}
 else if(top?.id==='rackPicker'){if(card.parentElement!==top)top.insertBefore(card,$('rackPickerProducts'));}
 else if(card.parentElement!==$('tutorialHome'))$('tutorialHome').append(card);
}
function refreshTutorial(){
 const card=$('tutorialCard');if(!card)return;
 if(titleActive||!S.tutorial?.active){card.hidden=true;document.body.classList.remove('tutorial-active');document.querySelectorAll('.tutorial-focus').forEach(e=>e.classList.remove('tutorial-focus'));return;}
 let changed=false;while(S.tutorial.step<7&&tutorialGoal(S.tutorial.step)){S.tutorial.step++;changed=true;}
 if(S.tutorial.step>=7){S.tutorial.active=false;S.tutorial.completed=true;tutorialReading=false;save();card.hidden=true;document.body.classList.remove('tutorial-active');document.querySelectorAll('.tutorial-focus').forEach(e=>e.classList.remove('tutorial-focus'));toast('첫 영업 안내 완료 · 이제 자유롭게 운영해보세요.');return;}
 if(changed)save();const step=S.tutorial.step;
 if(lastTutorialStep!==step){lastTutorialStep=step;tutorialReading=['open','closing'].includes(S.phase);}
 card.hidden=false;card.classList.toggle('tutorial-reading',tutorialReading);document.body.classList.add('tutorial-active');syncTutorialHost();
 const editingHelp=editing!==null&&step<3;
 const key=[step,tutorialReading,editingHelp].join('|');
 if(key!==tutorialRenderKey){tutorialRenderKey=key;const [title,copy]=TutorialSteps[step];card.innerHTML=`<div class="tutorial-heading"><b>첫 영업 · ${step+1}/7</b><button id="tutorialSkip" aria-label="첫 영업 안내 건너뛰기">건너뛰기</button></div><strong>${title}</strong><p>${editingHelp?'바닥의 빈 칸을 눌러 미리보기를 확인한 뒤 ‘여기에 배치’를 누르세요.':copy}</p><div class="tutorial-actions">${tutorialReading?'<button id="tutorialContinue" class="primary">확인하고 영업 계속</button>':`<button id="tutorialGo" class="secondary">${step===4||step===6?'매장 보기':'해당 조작으로 가기'}</button>`}</div>${tutorialReading?'<small>안내를 읽는 동안 영업이 잠시 멈춰 있어요.</small>':''}`;
 $('tutorialSkip').onclick=skipTutorial;if($('tutorialContinue'))$('tutorialContinue').onclick=()=>{tutorialReading=false;if([4,6].includes(S.tutorial.step))$('management').close();refreshTutorial();ui();};if($('tutorialGo'))$('tutorialGo').onclick=tutorialGo;
 }
 const selector=editingHelp?'#confirmPlacement':step===0?'#panel [data-catalog="f:1"]':step===1?'#panel [data-catalog="f:0"]':step===2?'#rackPickerProducts [data-pick-product]':step===3?'#openShop':step===5?'#panel .product-order [data-order]':null;
 const target=selector?document.querySelector(selector):null;
 document.querySelectorAll('.tutorial-focus').forEach(e=>{if(e!==target)e.classList.remove('tutorial-focus')});if(target&&target.getClientRects().length)target.classList.add('tutorial-focus');
}
function startTutorial(){S.tutorial={active:true,step:0,purchased:false,startDay:S.day,completed:false};lastTutorialStep=-1;tutorialRenderKey='';tutorialReading=false;save();refreshTutorial();ui();if($('management').open)tutorialGo();}
function skipTutorial(){if(S.tutorial)S.tutorial.active=false;tutorialReading=false;tutorialRenderKey='';save();refreshTutorial();ui();}
function tutorialGo(){
 const step=S.tutorial.step;if(editing!==null&&step<3){toast('바닥의 빈 칸을 누르고 배치를 확정해주세요.');return;}
 if(step===0||step===1){setTab('furniture');document.querySelector('#panel [data-catalog="f:'+ (step===0?1:0)+'"]')?.scrollIntoView({block:'center'});}
 else if(step===2){const rack=S.furniture.find(f=>f.t===0);if(rack)openRackPicker(rack.id);}
 else if(step===5){setTab('stock');document.querySelector('#panel .product-order')?.scrollIntoView({block:'center'});}
 else $('management').close();refreshTutorial();
}
$('startTutorialSkip').onclick=()=>{$('modal').close();paused=pausedBeforeHelp;skipTutorial();};
$('closeModal').onclick=()=>{$('modal').close();paused=pausedBeforeHelp;skipTutorial();};

document.body.insertAdjacentHTML('beforeend',`<dialog id="interiorDialog" class="atelier-dialog" aria-labelledby="interiorHeading"><header class="atelier-header"><h2 id="interiorHeading">인테리어 · VIP 구역</h2><button data-atelier-close="interiorDialog" aria-label="닫기">×</button></header><div id="interiorBody"></div></dialog><dialog id="workshopDialog" class="atelier-dialog workshop-dialog" aria-labelledby="workshopHeading"><header class="atelier-header"><h2 id="workshopHeading">커스텀 제작대</h2><button data-atelier-close="workshopDialog" aria-label="닫기">×</button></header><div id="workshopBody"></div></dialog><dialog id="customDisplayDialog" class="atelier-dialog" aria-labelledby="displayHeading"><header class="atelier-header"><h2 id="displayHeading">커스텀 악기 진열</h2><button data-atelier-close="customDisplayDialog" aria-label="닫기">×</button></header><div id="customDisplayBody"></div></dialog><aside id="vipEditBar" hidden><b>VIP 구역 지정</b><p id="vipEditStatus" role="status"></p><div><button id="vipEditCancel">취소</button><button id="vipEditConfirm" class="primary" disabled>구역 확정</button></div></aside>`);
vipSpriteImage=runtimeImage('assets/vip-v3180.webp');atelierFurnitureAtlas=runtimeImage('assets/atelier-v3180.webp');interiorArtAtlas=runtimeImage('assets/interior-v3180.webp');wallDetailAtlas=runtimeImage('assets/wall-details-v3190.webp');
$('vipEditCancel').onclick=()=>finishVIPEdit(false);$('vipEditConfirm').onclick=()=>finishVIPEdit(true);
canvas.addEventListener('click',e=>{if(wasDragged)return;if(vipEditor||entranceEditor!==null){e.stopImmediatePropagation();return;}if(editing===null){const f=hitFurniture(e,tileAt(e));if(f?.t===11){e.stopImmediatePropagation();openWorkshop(f.id);}else if(f?.t===12){e.stopImmediatePropagation();showFurnitureQuick(f);}}},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&vipEditor){e.preventDefault();finishVIPEdit(false);}});
document.addEventListener('click',e=>{
 const close=e.target.closest('[data-atelier-close]');if(close){$(close.dataset.atelierClose).close();renderDirty=true;return;}
 const b=e.target.closest('[data-atelier]');if(b&&!b.disabled){const action=b.dataset.atelier;
 if(action==='design')openInterior();if(action==='workshop')openWorkshop(S.furniture.find(f=>f.id===selected&&f.t===11)?.id??null);if(action==='zone')beginVIPEdit();if(action==='zone-remove'){removeVIPZone();renderInterior();}
 if(action==='door-apply'){const z=S.vip.zone,side=$('vipDoorSide').value,at=Number($('vipDoorAt').value)-1;if(z&&setVIPZone({...z,doorSide:side,doorAt:at}))renderInterior();}
 if(action==='wall-add'){addWallItem($('wallSide').value,Number($('wallSlot').value),$('wallType').value);renderInterior();}
 if(action==='craft-finish'){finishCustom();drawCustomInventory();}if(action==='bench-upgrade')upgradeWorkbench();if(action==='displays')openCustomDisplays();
 }
 const rem=e.target.closest('[data-wall-remove]');if(rem&&!rem.disabled&&S.phase==='prepare'){const [wall,slot]=rem.dataset.wallRemove.split(':');recallWallItem(wall,+slot);renderInterior();}
 const turn=e.target.closest('[data-model-turn]');if(turn){workshopAngle=turn.dataset.modelTurn==='0'?0:workshopAngle+Number(turn.dataset.modelTurn);drawCustomModel();}
});
document.addEventListener('change',e=>{const el=e.target;
 if(el.id==='wallSide'){$('wallSlot').innerHTML=Array.from({length:Math.floor(((el.value==='x'?N:M)-1)/2)},(_,i)=>`<option value="${i}">${i+1}번 자리</option>`).join('');}
 if(el.id==='vipDoorSide'&&S.vip.zone){$('vipDoorAt').max=(['left','right'].includes(el.value)?S.vip.zone.h:S.vip.zone.w)-1;$('vipDoorAt').value=Math.min(Number($('vipDoorAt').value),Number($('vipDoorAt').max));}
 if(el.id==='customBase'&&workshopDraft){const n=Number(el.value);if(customBases().includes(n))setCustomDraftOption('base',n);}
 if(el.dataset.customOption&&workshopDraft){const key=el.dataset.customOption;if(customOptionsFor(workshopDraft.base)[key]?.some(o=>o[0]===el.value&&customOptionAvailable(o))){setCustomDraftOption(key,el.value);}}
 if(el.dataset.customDisplay){const parts=el.value.split(':'),value=el.value===''?null:Number(parts[0]);setCustomDisplay(Number(el.dataset.customDisplay),value,Number(parts[1]??0));if($('workshopDialog').open)renderWorkshop();else if($('customDisplayDialog').open)openCustomDisplays();}
});

document.body.insertAdjacentHTML('beforeend','<nav id="menuPopover" popover="manual" class="menu-popover" aria-label="하위 메뉴" hidden></nav>');
for(const group of document.querySelectorAll('.tabs,.sheet-nav'))group.addEventListener('click',e=>{const b=e.target.closest('[data-tab],[data-panel-tab]');if(!b)return;e.preventDefault();e.stopImmediatePropagation();toggleMenu(b.dataset.tab??b.dataset.panelTab,b);},true);
$('menuPopover').onclick=e=>{const b=e.target.closest('[data-menu-section]');if(b)openMenuSection(b.dataset.menuSection);};
document.addEventListener('click',e=>{if(!navExpanded||e.target.closest('#menuPopover,.tabs,.sheet-nav'))return;closeMenu();e.stopPropagation();e.preventDefault();},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&navExpanded){closeMenu();e.preventDefault();}});
window.addEventListener('resize',closeMenu);
$('money').parentElement.setAttribute('role','button');$('money').parentElement.tabIndex=0;$('money').parentElement.setAttribute('aria-label','정확한 보유 금액 확인');$('money').parentElement.onclick=()=>toast('보유금 '+Math.round(S.money).toLocaleString('ko-KR')+'원');$('money').parentElement.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();$('money').parentElement.click();}};
for(const b of document.querySelectorAll('.tabs [data-tab],.sheet-nav [data-panel-tab]')){b.setAttribute('aria-haspopup','menu');b.setAttribute('aria-expanded','false');}
for(const b of document.querySelectorAll('[data-tab="stock"],[data-panel-tab="stock"]'))b.querySelector('b').textContent='악기';
for(const b of document.querySelectorAll('[data-tab="furniture"],[data-panel-tab="furniture"]'))b.querySelector('b').textContent='상점';
document.addEventListener('input',e=>{const el=e.target;if(el.dataset.customOption)setCustomDraftOption(el.dataset.customOption,el.value);else if(el.id==='customBase')setCustomDraftOption('base',el.value);});

const menuIcons319={shop:'<path fill="#e8cf91" d="M9 5h24v30H9z"/><path fill="#fff4d6" d="M6 3h24v29H6z"/><path fill="#78916c" d="M10 8h16v4H10z"/><path d="M6 3h24v29H6zM10 17h5m4 0h7M10 23h5m4 0h7M9 35h24V6"/>',furniture:'<path fill="#e8cf91" d="M7 16h26v19H7z"/><path fill="#698466" d="m5 16 4-10h22l4 10z"/><path fill="#fff4d6" d="M13 6h5l-1 10h-7zm12 0h5l3 10h-7z"/><path d="M7 17v18h26V17M5 16l4-10h22l4 10zM11 22h8v8h-8zm13 13V22h6v13M4 35h32"/>'};for(const b of document.querySelectorAll('.tabs [data-tab],.sheet-nav [data-panel-tab]')){const key=b.dataset.tab??b.dataset.panelTab;if(menuIcons319[key])b.querySelector('svg').innerHTML=menuIcons319[key];}

document.addEventListener('click',e=>{const b=e.target.closest('[data-atelier="vip-design"]');if(b&&!b.disabled){openInterior();$('interiorBody').querySelector('.interior-section:last-of-type')?.scrollIntoView({block:'start'});}});

loungeAtlas=runtimeImage('assets/lounge-v3200.webp');people320Atlas=runtimeImage('assets/people-v3200.webp');horizontalAtlas=runtimeImage('assets/horizontal-v3200.webp');
document.addEventListener('click',e=>{const b=e.target.closest('[data-atelier="vip-displays"]');if(b&&!b.disabled)openVIPDisplays();const staff=e.target.closest('[data-vip-staff="manage"]');if(staff)openStaffManagement('vip');});
document.addEventListener('change',e=>{const a=e.target.dataset.vipDisplay;if(a===undefined)return;const [id,slot]=a.split(':').map(Number);if(!setVIPDisplay(id,slot,e.target.value===''?null:Number(e.target.value)))toast(S.phase!=='prepare'?'영업 준비 중에 변경할 수 있어요.':'진열할 보관 재고와 VIP 구역을 확인해주세요.');openVIPDisplays();});
canvas.addEventListener('click',e=>{if(wasDragged||editing!==null||vipEditor||entranceEditor!==null)return;const f=hitFurniture(e,tileAt(e));if(f?.t===15){e.stopImmediatePropagation();openVIPDisplays();}},true);
$('staffManagementContent').addEventListener('click',e=>{if(employeeTab!=='vip')return;const b=e.target.closest('[data-employee-action]');if(!b||b.disabled)return;e.stopImmediatePropagation();if(b.dataset.employeeAction==='hire'){if(hireVIPStaff())renderStaffManagement();}else if(b.dataset.employeeAction==='dismiss'){pendingDismiss={kind:'vip',index:0};$('dismissSummary').textContent='VIP 전용 직원을 퇴사 처리할까요? VIP 영업이 중단돼요.';$('dismissConfirm').showModal();}},true);
$('confirmDismiss').addEventListener('click',e=>{if(pendingDismiss?.kind!=='vip')return;e.stopImmediatePropagation();pendingDismiss=null;$('dismissConfirm').close();if(dismissVIPStaff())renderStaffManagement();},true);

// SOURCE: core/loop
// Final initialization, frame scheduler and the small test/debug interface.

resizeShop();
ui();
showTitle();
let lastPaint=0,stationaryKey='',lastScenePaint=0,wasMenuCovered=false;
function gameplayBlocked(){return entranceEditor!==null||!!designEditor||$('catalogDetail')?.open||vipEditor || ['interiorDialog','workshopDialog','customDisplayDialog'].some(id=>$(id)?.open) || tutorialReading || $('staffSettings').open || $('recoveryModal').open || $('saveManager').open || $('importConfirm').open;}
function largeMenuOpen(){return $('catalogDetail')?.open||['interiorDialog','workshopDialog','customDisplayDialog','decorDetail','saveManager','importConfirm','missionDialog','dismissConfirm','management','rackPicker','saveBackup','staffSettings','staffManagement','unlockModal','expansion','modal','settlement','assetLoading','endingModal','recoveryModal'].some(id=>$(id).open);}
function frame(now) {
  if (document.hidden || titleActive) {
    last = 0; lastPaint = 0; uiTime = 0; Sound.setRunning(false);
    requestAnimationFrame(frame); return;
  }
  const mobile = view.w <= 650 || (window.matchMedia?.('(pointer:coarse)').matches ?? false);
  if (mobile && lastPaint && now-lastPaint < 1000/30-0.1) { requestAnimationFrame(frame); return; }
  lastPaint = now;
  const dt = last ? Math.min(0.1,(now-last)/1000) : 0; last = now;
  const running = !assetBusy && !gameplayBlocked() && !paused && editing === null && ['open','closing'].includes(S.phase);
  Sound.setRunning(running);
  const targetLight = ['open','closing'].includes(S.phase) ? 1 : S.phase === 'settled' ? 0.68 : 0.88;
  const lighting = Math.abs(shopLight-targetLight)>0.001;
  shopLight = lighting ? shopLight+(targetLight-shopLight)*Math.min(1,dt*4) : targetLight;
  refreshTutorial();
  update(dt*speed);
  if (running) {
    uiTime += dt;
    if (uiTime>1) {
      uiTime=0; ui();
      refreshLivePanel();
      refreshRackPicker();
      refreshStaffManagement();
    }
  }
  const key = JSON.stringify([view.w,view.h,view.dpr,view.scale,view.panX,view.panY,zoom,editing,selected,hover,placementPreview,S.phase,sceneCacheKey]);
  const covered=largeMenuOpen(),changed=covered!==wasMenuCovered,eligible=!covered||now-lastScenePaint>=100-.1||changed;wasMenuCovered=covered;
  if(eligible&&(running||lighting||renderDirty||key!==stationaryKey||changed)){draw();lastScenePaint=now;renderDirty=false;stationaryKey=key;}
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
setInterval(save, 15000);
window.Game = {
  entrancePoints,setEntrance,beginEntranceEdit,finishEntranceEdit,entranceAt,entryForPoint,nearestEntrance,exitFor,materialTexture,
  InteriorCatalog,beginDesignEdit,designQuote,commitDesign,resetDesignEditor,selectDesignTargets,designTargetAt,openCatalogDetail,recallWallItem,chooseRegularExtra,recordPurchase,spawn,
  get designEditor(){return designEditor;},
  benchLevel,currentWorkbench,benchJob,benchBadge,advanceCrafts,releaseCompletedCrafts,normalizedCustomOptions,quoteCustomAt,ordinaryCustomOffers,offerPrice,basketValue,customDisplayAllowed,isVIPCustom,enoughShoppingTime,clearDisplay,showFurnitureQuick,canSellFurniture,
  Config,MenuSections,closeMenu,toggleMenu,openMenuSection,setCustomDraftOption,refreshCustomPreview,customTexture,compactMoney,paintWallClockHands,
  stockCount,stockLabel,vipReservedCount,vipDeskCandidates,vipDeskFor,advanceSeating,drawVIP,
  TierNames,VIPStaff,isVIPProduct,setVIPDisplay,vipOffers,vipDailyLimit,hireVIPStaff,dismissVIPStaff,openVIPDisplays,vipEmployee,tryRest,finishRest,customTexture,customOptionsFor,
  zoneDraft:()=>vipZoneDraft,
  Atelier,saveRules,customDefaults,customBases,customQuote,finishCustom,upgradeWorkbench,setCustomDisplay,displayedCustoms,vipRequirements,vipReady,setVIPZone,removeVIPZone,zoneError,vipPath,vipDoor,inVIP,spawnVIP,updateVIP,openInterior,beginVIPEdit,finishVIPEdit,selectVIPTile,openWorkshop,renderWorkshop,openCustomDisplays,addWallItem,drawCustomModel,
  skipTutorial,startTutorial,refreshTutorial,deliveryText,orderDue,requestSaveImport,openSaveManager,
  MissionDefinitions, missionLane, laneMissions, missionLaneCard,
  staffReorderAt,addonCompatible,closingShortfall,previewPreviousSave,restorePreviousSave,
  currentMission,
  missionStatus,
  claimMission,
  recordMissionSale,
  gainReputation,
  visitorMultiplier,
  isRegular,
  returningVisitChance,
  returningCustomer,
  ProductId,
  FurnitureId,
  ArtLayout,
  incomingQuantity,
  delayedProduct,
  expressCost,
  featureUnlocked,
  cabinetLimit,
  rackLimit,
  rackProducts,
  visitHanaStory,
  acceptHanaStory,
  deliverHanaStory,
  checkoutStations, checkoutActor, activeCheckouts, cashierSlots, hireCashier, dismissCashier, checkout, unlockSummary, operationsPanel,
  openStaffManagement, renderStaffManagement, staffManagementShortcut, inventoryWage, inventoryHireCost, inventoryDailyWage,
  queueStaffRestock, updateStaffAnimation, resetStaffAnimation, staffAnimationSnapshot,
  staffSlots,
  staffWage,
  settlementCushion,
  setTab,
  renderPanel,
  staffRestock,
  staffOrderPlan,
  operatingReserve, applyRecommendedStaffSettings, openMissions, renderMissions,
  setStaffProduct,
  purchaseQuantity,
  setPurchaseQuantity,
  zoomAt,
  hireStaff,
  dismissStaff,
  showcaseUnlocked,
  setShowcase,
  showcaseWeight,
  adUnlocked,
  adCost,
  adMultiplier,
  bookAd,
  activeMission,
  missionPhase,
  productLockReason,
  deliverOrders,
  expansionReserve,
  get camera() {
    return { ...view, zoom };
  },
  fitCamera: resizeView,
  tileAt,
  worldAt,
  furniturePickStats,clearFurniturePickCache,
  furnitureBodyStats,clearFurnitureBodyCache,paintFurnitureBody,paintFurnitureBodyDirect,refreshLivePanel,
  drumsUnlocked,furnitureUnlocked,openSaveCode,largeMenuOpen,
  furnitureSprite,
  furniturePickSprite,
  paintDisplayFurniture,
  displayBounds,
  drawProduct,
  screenPosition,
  roomBounds,
  setRackFilter,
  openRackPicker,
  chooseRackProduct,
  closeRackPicker,
  get rackPickerId() {
    return rackPickerId;
  },
  customerIdentity,
  recordVisit,
  recordPurchase,
  recordDeparture,
  rememberRequest,
  requestStatus,
  regularCustomers,
  productUnlocked,
  isInstrument,
  productsAtStage,
  orderQuantity,
  orderProduct,
  setRackProduct,
  setShelfItems,
  CustomerProfiles,
  availableActors,
  profileForActor,
  customerCanAfford,
  closeUnlockNotice,
  showTitle,
  beginNewGame,
  continueGame,
  get titleActive() {
    return titleActive;
  },
  get state() {
    return S;
  },
  get customers() {
    return people;
  },
  path,
  valid, checkoutConflicts, criticalAssetKeys, get assetBusy(){return assetBusy;},
  update,
  spawn,
  draw,
  save,
  exportSaveData,
  importSaveData,
  types,
  products,
  Stages,
  stageInfo,
  openShop,
  nextDay, endingPending, showEnding, continueAfterEnding, stockMatches, setStockStatus, checkoutStatus,
  settleDay,
  expandShop,
  expansionPreview,
  showFurnitureQuick, hideFurnitureQuick,
  shopReady, purchaseCost, queuePatience, demoDecorBonus, applyDemoDecor, decorStatus, scheduledSpecial, specialKind,
  makeWalkFrame,
  offers,
  shelfDisplay,
  walkSprite,
  drawFullCharacter,
  drawWalkingSprite,
  displayedProductIds,
  lowStockIds, staffCoversProduct, canSellFurniture, sellFurniture,
  inventoryStatus,
  advanceCustomer,
  hitFurniture,
  Motion,
  Furniture,
  Sound,
  cleanName,
  applyShopName,
  rotatePreview,
  go,
  get entry() {
    return ENTRY;
  },
  drawPerson, checkoutSprite, teamFigureHeight,
  visualActor,
  shopTeamFigures,
  PeopleFrames,
  PeopleAtlasKeys, NaturalWalkFrames, NaturalWalkAtlasKeys,
  edit,
  endEdit,
  previewAt,
  confirmPlacement,
  get placementPreview() {
    return placementPreview;
  },
  get paused() {
    return paused;
  },
  get editing() {
    return editing;
  }
};

// Catalog actions share the same quote/commit paths used by simulation.
document.body.insertAdjacentHTML('beforeend',`<dialog id="catalogDetail" aria-labelledby="catalogDetailTitle"><header class="atelier-header"><h2 id="catalogDetailTitle">아이템</h2><button id="catalogDetailClose" aria-label="닫기">×</button></header><div id="catalogDetailBody"></div></dialog><aside id="designEditBar" hidden><div><b id="designEditName"></b><span id="designEditCost" role="status"></span></div><div><button id="designEditCancel">취소</button><button id="designEditConfirm" class="primary" disabled>적용</button></div></aside>`);
$('catalogDetailClose').onclick=()=>$('catalogDetail').close();$('designEditCancel').onclick=()=>{resetDesignEditor();setTab('furniture');};$('designEditConfirm').onclick=()=>{if(commitDesign())setTab('furniture');};
document.addEventListener('click',e=>{
 const card=e.target.closest('[data-catalog]');if(card){e.preventDefault();e.stopImmediatePropagation();if(!suppressCatalogClick)openCatalogDetail(card.dataset.catalog,card.dataset.installed);return;}
 const build=e.target.closest('[data-catalog-build]');if(build&&!build.disabled){$('catalogDetail').close();edit(+build.dataset.catalogBuild);return;}
 const start=e.target.closest('[data-design-start]');if(start&&!start.disabled){beginDesignEdit(start.dataset.designStart,start.dataset.designMoving);return;}
 const recall=e.target.closest('[data-wall-recall]');if(recall){const [,wall,slot]=recall.dataset.wallRecall.split(':');if(recallWallItem(wall,+slot)){$('catalogDetail').close();renderPanel();}return;}
},true);
function designPointerFinish(e,cancelled){
 if(!designEditor||!designStroke||e.pointerId!==designStroke.id)return false;const start=designStroke.start;if(!cancelled){const target=designTargetAt(e);if(target&&start)selectDesignTargets(start,target);}else {designEditor.keys=[];updateDesignBar();invalidateDesign();}designStroke=null;catalogDrag=null;return true;
}
document.addEventListener('pointerdown',e=>{
 const card=e.target.closest('[data-catalog]');if(card&&!card.dataset.installed&&!card.dataset.catalog.startsWith('f:')&&S.phase==='prepare'){catalogDrag={key:card.dataset.catalog,x:e.clientX,y:e.clientY,id:e.pointerId};}
 if(!designEditor||e.target!==canvas)return;e.preventDefault();e.stopImmediatePropagation();const target=designTargetAt(e);designStroke={id:e.pointerId,start:target};if(target)selectDesignTargets(target);
},true);
document.addEventListener('pointermove',e=>{
 if(catalogDrag&&e.pointerId===catalogDrag.id&&!designEditor&&Math.hypot(e.clientX-catalogDrag.x,e.clientY-catalogDrag.y)>10&&(e.pointerType!=='touch'||Math.abs(e.clientX-catalogDrag.x)>Math.abs(e.clientY-catalogDrag.y)*1.3)){const pending={...catalogDrag};if(beginDesignEdit(pending.key)){catalogDrag=pending;suppressCatalogClick=true;designStroke={id:e.pointerId,start:null};}}
 if(!designEditor||!designStroke||e.pointerId!==designStroke.id)return;e.preventDefault();e.stopImmediatePropagation();const target=designTargetAt(e);if(target){designStroke.start??=target;selectDesignTargets(designStroke.start,target);}
},true);
document.addEventListener('pointerup',e=>{if(designPointerFinish(e,false)){e.preventDefault();e.stopImmediatePropagation();setTimeout(()=>suppressCatalogClick=false,0);}else catalogDrag=null;},true);
document.addEventListener('pointercancel',e=>{if(designPointerFinish(e,true)){e.preventDefault();e.stopImmediatePropagation();}catalogDrag=null;suppressCatalogClick=false;},true);
canvas.addEventListener('click',e=>{if(designEditor){e.preventDefault();e.stopImmediatePropagation();}},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&designEditor){e.preventDefault();e.stopImmediatePropagation();resetDesignEditor();setTab('furniture');}},true);

document.querySelector('.title-footer').innerHTML='LITTLE TONE <span>·</span> v'+Config.version;
document.body.append($('furnitureQuick'));
premiumShowcaseAtlas=runtimeImage('assets/premium-showcase-v3220.webp');
document.addEventListener('click',e=>{const wb=e.target.closest('[data-workbench]');if(wb){openWorkshop(+wb.dataset.workbench);return;}const choice=e.target.closest('[data-case-item]');if(choice){if(setCustomDisplay(+choice.dataset.caseItem,+choice.dataset.caseId,0))$('customDisplayDialog').close();return;}},true);
$('furnitureQuick').addEventListener('click',e=>{const b=e.target.closest('[data-quick]');if(!b||b.disabled)return;const f=S.furniture.find(f=>f.id===selected);if(!f)return;if(b.dataset.quick==='choose'){hideFurnitureQuick();if([0,5].includes(f.t))openRackPicker(f.id);else if(f.t===12)openCustomDisplays(f.id);else if(f.t===15)openVIPDisplays();else setTab('stock');}if(b.dataset.quick==='clear')clearDisplay(f);});

// Runtime atlas readiness invalidates thumbnails and static world caches once.
for(const [key,set]of [['materials',im=>{materialAtlas23=im;materialTexture.cache.clear();}],['props',im=>{propAtlas23=im;propCache23.clear();}]]){const im=new Image();im.onload=()=>{set(im);sceneCacheKey='';clearFurnitureBodyCache();premiumCaseCache.clear();renderDirty=true;if($('management').open)renderPanel();};im.src=GameAssets['assets/'+key+'-v3230.webp'];}
document.body.insertAdjacentHTML('beforeend','<div id="entranceEditBar" class="world-edit-bar" hidden><span id="entranceEditStatus"></span><button id="entranceEditCancel">취소</button><button id="entranceEditConfirm" disabled>확정</button></div>');
$('entranceEditCancel').onclick=()=>finishEntranceEdit(false);$('entranceEditConfirm').onclick=()=>finishEntranceEdit(true);
document.addEventListener('click',e=>{const b=e.target.closest('[data-entrance-edit],[data-unlock-go]');if(!b)return;e.stopImmediatePropagation();if(b.dataset.entranceEdit!==undefined)beginEntranceEdit(+b.dataset.entranceEdit);else{closeUnlockNotice();openMenuSection(b.dataset.unlockGo);}},true);
for(const type of ['pointerdown','pointermove','pointerup','pointercancel'])canvas.addEventListener(type,e=>{if(!vipEditor&&entranceEditor===null)return;e.stopImmediatePropagation();e.preventDefault();if(type==='pointerdown'){canvas.setPointerCapture?.(e.pointerId);if(vipEditor){vipDragStart=tileAt(e);selectVIPTile(vipDragStart);}else previewEntrance(e);}if(type==='pointermove'&&e.buttons){if(vipEditor&&vipDragStart)selectVIPTile(tileAt(e));else if(entranceEditor!==null)previewEntrance(e);}if(type==='pointerup'||type==='pointercancel'){if(vipEditor&&vipDragStart&&type==='pointerup')selectVIPTile(tileAt(e));vipDragStart=null;wasDragged=true;activePointers.clear();drag=null;pinch=null;}},true);
canvas.addEventListener('click',e=>{if(vipEditor||entranceEditor!==null){e.preventDefault();e.stopImmediatePropagation();}},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&entranceEditor!==null){e.preventDefault();finishEntranceEdit(false);}},true);
// Status summaries remain live while the business sheet is open.
const originalRefresh23=Game.refreshLivePanel;Game.refreshLivePanel=refreshLivePanel;

$('vipEditBar').querySelector('b').textContent='VIP구역 설정';
$('vipEditStatus').insertAdjacentHTML('afterend','<div class="vip-door-tools"><label>문 방향 <select id="vipDraftSide"><option value="left">왼쪽</option><option value="top">위쪽</option><option value="right">오른쪽</option><option value="bottom">아래쪽</option></select></label><label>위치 <input id="vipDraftAt" type="number" min="2" max="9" value="3"></label></div>');
$('vipDraftSide').onchange=updateVIPDraftDoor;$('vipDraftAt').onchange=updateVIPDraftDoor;
$('missionPanel').addEventListener('click',e=>{const b=e.target.closest('[data-story]');if(!b||b.disabled)return;e.stopImmediatePropagation();if(b.dataset.story==='accept')acceptHanaStory();else if(b.dataset.story==='deliver')deliverHanaStory();renderMissions();},true);

$('closeUnlock').textContent='확인';

// Cached masks are computed once at build time, so local/cross-origin artwork
// never needs a pixel read at runtime.

function positionTutorial231(){
 const card=$('tutorialCard'),home=$('tutorialHome');if(!card||!home||card.hidden)return;
 if(card.parentElement!==home){card.style.maxHeight='';card.style.overflowY='';return;}
 const vv=window.visualViewport,w=vv?.width??innerWidth,h=vv?.height??innerHeight,left=vv?.offsetLeft??0,top=vv?.offsetTop??0;
 const width=Math.max(80,Math.min(390,w-24));home.style.position='fixed';home.style.transform='none';home.style.left=(left+12)+'px';home.style.width=width+'px';home.style.maxWidth=width+'px';
 card.style.maxHeight=Math.max(80,h-24)+'px';card.style.overflowY='auto';
 const preferred=innerWidth<=650?134:126,cardHeight=card.getBoundingClientRect().height;
 home.style.top=Math.max(top+12,Math.min(top+preferred,top+h-cardHeight-12))+'px';
}
function syncTutorialHost(){before231SyncTutorialHost();positionTutorial231();}
// Decorative atlases have solid-color / no-prop fallbacks and must not block play.


window.addEventListener('resize',positionTutorial231);window.visualViewport?.addEventListener('resize',positionTutorial231);window.visualViewport?.addEventListener('scroll',positionTutorial231);
})();
