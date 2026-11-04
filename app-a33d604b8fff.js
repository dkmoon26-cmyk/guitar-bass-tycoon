window.GameBuild=Object.freeze({"version":"3.19.0","schema":{"version":23,"storageKey":"little-tone-v1","legacyStageSizes":[[7,6],[9,6],[9,8],[11,8],[11,10],[13,10]],"legacyShelfItems":[3,6,7]},"art":{"grid":{"halfWidth":34,"halfHeight":17,"groundFit":0.94},"wallHeight":84,"furnitureFeet":{"0":[[[0.033,0.627],[0.735,0.976],[0.967,0.823],[0.265,0.475]],[[0.036,0.63],[0.713,0.981],[0.961,0.824],[0.287,0.497]]],"1":[[[0.08,0.75],[0.67,0.99],[0.98,0.84],[0.39,0.6]],[[0.08,0.75],[0.67,0.99],[0.98,0.84],[0.39,0.6]]],"2":[[[0.2,0.8],[0.62,0.99],[0.91,0.86],[0.49,0.67]],[[0.2,0.8],[0.62,0.99],[0.91,0.86],[0.49,0.67]]],"3":[[[0.4,0.93],[0.55,0.95],[0.64,0.89],[0.49,0.87]],[[0.4,0.93],[0.55,0.95],[0.64,0.89],[0.49,0.87]]],"4":[[[0.01,0.75],[0.6,0.98],[0.94,0.81],[0.35,0.58]],[[0.01,0.75],[0.6,0.98],[0.94,0.81],[0.35,0.58]]],"5":[[[0.075,0.614],[0.681,0.946],[0.919,0.812],[0.313,0.48]],[[0.075,0.614],[0.681,0.946],[0.919,0.812],[0.313,0.48]]]},"furnitureScale":{"2":0.78,"3":0.72},"furnitureSize":[0,76,68,74,72,81.84],"rackHeight":70.72,"cabinetSize":81.84,"characterHeight":77,"cashierHeight":73,"metadata":{"characterFrames":"src/js/data/sprites.js","productClips":"src/js/data/sprites.js","furnitureFeet":"config/art-layout.json"}},"missions":[{"id":"s1-sales","stage":0,"title":"첫 다섯 번의 선율","goals":[{"label":"상품 판매","kind":"total","min":5}],"reward":{"money":150000}},{"id":"s1-core","stage":0,"title":"입문자의 선택","goals":[{"label":"데이브레이크 ST","kind":"products","min":1,"ids":[0]},{"label":"딥 포레스트 JB","kind":"products","min":1,"ids":[1]},{"label":"모닝 어쿠스틱","kind":"products","min":1,"ids":[2]}],"reward":{"actor":9}},{"id":"s2-sales","stage":1,"title":"새로운 음색","goals":[{"label":"중급 기타·베이스 판매","kind":"products","min":3,"ids":[9,10]}],"reward":{"money":250000}},{"id":"s2-core","stage":1,"title":"중급 악기의 두 얼굴","goals":[{"label":"블루 아워 ST","kind":"products","min":5,"ids":[9]},{"label":"앰버 그루브 JB","kind":"products","min":5,"ids":[10]}],"reward":{"product":21}},{"id":"s3-sales","stage":2,"title":"소품까지 꼼꼼하게","goals":[{"label":"기타줄 판매","kind":"products","min":10,"ids":[6,7,8]}],"reward":{"feature":"cabinet"}},{"id":"s3-rack","stage":2,"title":"취향을 넓히는 진열","goals":[{"label":"일렉 기타 판매","kind":"family","family":"electric","min":10},{"label":"베이스 판매","kind":"family","family":"bass","min":10},{"label":"어쿠스틱 판매","kind":"family","family":"acoustic","min":10}],"reward":{"feature":"rack2"}},{"id":"s3-core","stage":2,"title":"나만의 페달 보드","goals":[{"label":"오버드라이브","kind":"products","min":1,"ids":[3]},{"label":"디스토션","kind":"products","min":1,"ids":[4]},{"label":"딜레이","kind":"products","min":1,"ids":[5]}],"reward":{"actor":10}},{"id":"s4-sales","stage":3,"title":"바쁜 하루의 보람","goals":[{"label":"하루 최고 판매","kind":"bestDay","min":10}],"reward":{"money":150000}},{"id":"s4-core","stage":3,"title":"프리미엄의 울림","goals":[{"label":"와인 세미할로우","kind":"products","min":3,"ids":[13]},{"label":"아이보리 세션 5","kind":"products","min":3,"ids":[14]},{"label":"두 모델 합계 판매","kind":"products","min":12,"ids":[13,14]}],"reward":{"product":22}},{"id":"s5-sales","stage":4,"title":"다양한 악기가 있는 가게","goals":[{"label":"판매한 악기 종류","kind":"distinctInstruments","min":8}],"reward":{"feature":"staff2"}},{"id":"s5-core","stage":4,"title":"전문가의 무대 준비","goals":[{"label":"에메랄드 마스터","kind":"products","min":1,"ids":[15]},{"label":"차콜 마스터 5","kind":"products","min":1,"ids":[16]},{"label":"고급 이펙터","kind":"products","min":1,"ids":[19,20]}],"reward":{"actor":11}},{"id":"s6-sales","stage":5,"title":"우리 동네 음악 명소","goals":[{"label":"누적 상품 판매","kind":"total","min":300}],"reward":{"feature":"drums"}},{"id":"s6-core","stage":5,"title":"마지막 특별한 한 대","goals":[{"label":"바이올렛 리미티드","kind":"products","min":3,"ids":[17]},{"label":"미드나잇 리미티드 5","kind":"products","min":3,"ids":[18]},{"label":"두 모델 합계 판매","kind":"products","min":15,"ids":[17,18]},{"label":"전자드럼 세트 판매","kind":"products","min":5,"ids":[26]}],"reward":{"product":23}},{"id":"s6-drums","stage":5,"title":"첫 리듬을 함께","goals":[{"label":"전자드럼 세트 판매","kind":"products","min":3,"ids":[26]}],"reward":{"feature":"drumDemo"}}]});
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
  root.Interior = Interior;
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
  function front(f) {const [dx,dy]=vectors[direction(f)];return {x:f.x+dx,y:f.y+dy};}
  function seatEntry(f) {const [dx,dy]=vectors[direction(f)];return {x:f.x+dx*.25,y:f.y+dy*.25};}
  function seat(f) {const [x,y]=[[.4,.2],[.2,.4],[-.15,-.15],[-.15,-.15]][direction(f)];return {x:f.x+x,y:f.y+y};}
  function migrate(f) {
    return { ...f, dir: direction(f) };
  }
  function cells(f){return [{x:f.x,y:f.y}];}
  function covers(f,x,y){return f.x===x&&f.y===y;}
  function blocks(f,x,y){return f.t!==9 && covers(f,x,y);}
  function conflicts(a,b){return a.x===b.x && a.y===b.y && (a.t===9)===(b.t===9);}
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
        cells.has((f.t===9?'floor:':'solid:')+f.x+','+f.y)
      )
        throw Error('가구 위치');
      if(f.dir!==undefined&&(!Number.isInteger(f.dir)||f.dir<0||f.dir>3))throw Error('가구 방향');
      seen.add(f.id);
      const span=1;
      if(f.x+span>size[0]||f.y+span>size[1])throw Error('가구 범위');
      for(let dy=0;dy<span;dy++)for(let dx=0;dx<span;dx++){const cell=(f.t===9?'floor:':'solid:')+(f.x+dx)+','+(f.y+dy);if(cells.has(cell))throw Error('가구 겹침');cells.add(cell);}
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
          !['browse', 'try', 'queue', 'checkout', 'leave', 'follow'].includes(p.state) ||
          !Number.isFinite(p.timer) ||
          p.timer < 0 ||
          !Array.isArray(p.basket ?? []) ||
          (p.basket ?? []).length > 2 ||
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
    s.repathGuests = version < 6 || (version < 15 && furniture.some(f=>f.t===6||f.t===7));
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
            (![r.affinityDay, r.affinityGain, r.lastStockoutDay, r.stockoutStreak].every(integer) ||
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
    if (story.phase !== 'locked' && (!story.startedDay || !s.customerBook['actor-9']?.regular)) throw Error('하나 이야기 해금');
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
  ELECTRONIC_DRUMS: 26
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
  POSTER: 10, WORKBENCH:11, CUSTOM_DISPLAY:12, VIP_SEAT:13, VIP_DESK:14
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
  initialStock: [3, 3, 3, ...Array(24).fill(0)],
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
    purchase: 5,
    premiumPurchase: 8,
    preference: 2,
    request: 3,
    dailyCap: 10,
    stockoutPenalty: 2,
    regular: 100
  }
});
const Stages = [
  { name: '작은 악기점', w: 9, h: 7, cost: 0, rent: 30000, capacity: 6, interval: 7.5 },
  { name: '여유 있는 매장', w: 10, h: 8, cost: 2000000, rent: 40000, capacity: 7, interval: 6.2 },
  { name: '동네 악기점', w: 11, h: 9, cost: 4500000, rent: 50000, capacity: 8, interval: 5.3 },
  { name: '전문 악기점', w: 12, h: 10, cost: 10000000, rent: 65000, capacity: 9, interval: 4.6 },
  { name: '대형 악기점', w: 13, h: 11, cost: 22000000, rent: 80000, capacity: 10, interval: 4 },
  {
    name: '우리 동네 음악 명소',
    w: 15,
    h: 12,
    cost: 40000000,
    rent: 100000,
    capacity: 12,
    interval: 3.5
  },
  {name:'커스텀 악기 아틀리에',w:20,h:14,cost:65000000,rent:125000,capacity:12,interval:3.5}
];
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
const TierNames = ['입문용', '중급형', '고급형', '프리미엄', '최상급', '한정판'];
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
    tag: '중급 일렉 기타',
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
    tag: '중급 베이스',
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
    tag: '고급 일렉 기타',
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
    tag: '고급 5현 베이스',
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
    tag: '프리미엄 일렉 기타',
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
    tag: '프리미엄 5현 베이스',
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
    tag: '최상급 일렉 기타',
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
    tag: '최상급 헤드리스 5현 베이스',
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
    tag: '한정판 일렉 기타',
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
    tag: '한정판 5현 베이스',
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
    tag: '미션 특별 중급 V형 기타',
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
    tag: '미션 특별 프리미엄 베이스',
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
    tag: '미션 특별 한정판 기타',
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
 { id: ProductId.WALNUT_PARLOR, key: 'WALNUT_PARLOR', name: '월넛 팔러', tag: '중급 어쿠스틱 · 하나의 첫 무대', family: 'acoustic', kind: 'instrument', unlock: 1, story: 'hana', cost: 400000, price: 590000, color: '#6e432e' },
 { id: ProductId.DAWN_CUTAWAY, key: 'DAWN_CUTAWAY', name: '새벽빛 컷어웨이', tag: '고급 어쿠스틱 · 컷어웨이 바디', family: 'acoustic', kind: 'instrument', unlock: 2, cost: 780000, price: 1100000, color: '#d7b37b' }
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
const InstrumentArtV340=Object.freeze({"0":{"atlas":0,"clips":[[785,2,183,494],[813,508,192,485]]},"1":{"atlas":0,"clips":[[188,2,180,502],[2,508,184,491]]},"2":{"atlas":0,"clips":[[372,2,218,499],[388,508,227,486]]},"9":{"atlas":0,"clips":[[972,2,182,494],[190,508,194,487]]},"10":{"atlas":0,"clips":[[2,2,182,502],[619,508,190,486]]},"11":{"atlas":0,"clips":[[594,2,187,496],[1009,508,193,484]]},"12":{"atlas":1,"clips":[[609,2,191,511],[609,523,186,471]]},"13":{"atlas":1,"clips":[[804,2,222,507],[1030,2,230,481]]},"14":{"atlas":1,"clips":[[2,2,195,517],[2,523,192,481]]},"15":{"atlas":1,"clips":[[201,2,206,514],[198,523,204,478]]},"16":{"atlas":1,"clips":[[406,523,199,473],[989,523,199,438]]},"17":{"atlas":1,"clips":[[411,2,194,511],[799,523,186,471]]},"18":{"atlas":2,"clips":[[840,2,201,491],[843,505,200,473]]},"21":{"atlas":2,"clips":[[1045,2,214,490],[1047,505,221,470]]},"22":{"atlas":2,"clips":[[2,2,211,499],[231,505,214,479]]},"23":{"atlas":2,"clips":[[448,2,195,492],[643,505,196,476]]},"24":{"atlas":2,"clips":[[647,2,189,492],[449,505,190,477]]},"25":{"atlas":2,"clips":[[217,2,227,497],[2,505,225,480]]}});


// SOURCE: data/drums-v350
const DrumFixtureClips=[[[17, 188, 422, 255], [455, 28, 424, 422], [899, 30, 430, 416], [1340, 31, 426, 414]], [[17, 604, 421, 247], [455, 458, 425, 404], [898, 458, 431, 401], [1337, 442, 427, 428]]];
const DrumProductClips=[[35, 55, 852, 768], [887, 71, 863, 753]];


// SOURCE: data/people-v310
// Whole painted identities, lossless packed in v3.11. Stable actor IDs.
const NaturalWalkAtlasKeys=["assets/walk-everyday-a-v3120.webp","assets/walk-everyday-b-v3120.webp","assets/walk-regulars-a-v3120.webp","assets/walk-regulars-b-v3120.webp","assets/walk-story-a-v3120.webp","assets/walk-story-b-v3120.webp","assets/walk-special-a-v3120.webp","assets/walk-special-b-v3120.webp","assets/walk-team-v3120.webp","assets/walk-drummer-v3120.webp"];
const NaturalWalkFrames={"0":{"atlas":0,"rows":[[{"clip":[86.276,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[278.774,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[470.694,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[662.874,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[854.881,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[1047.072,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[1238.944,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[1431.114,28,81,148],"anchor":0.5,"sourceHeight":142,"footMargin":3}],[{"clip":[85.85,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[278.72,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[470.613,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[662.536,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[855.06,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1047.097,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1238.693,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1430.451,198,81,149],"anchor":0.5,"sourceHeight":143,"footMargin":3}],[{"clip":[82.638,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[275.478,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[467.275,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[659.476,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[852.057,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[1044.6,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[1236.752,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[1428.802,361,84,146],"anchor":0.5,"sourceHeight":140,"footMargin":3}]]},"1":{"atlas":0,"rows":[[{"clip":[77.869,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[270.203,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[462.352,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[654.56,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[847.32,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[1039.519,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[1231.174,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3},{"clip":[1423.896,526,95,136],"anchor":0.5,"sourceHeight":130,"footMargin":3}],[{"clip":[78.819,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[271.528,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[463.112,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[655.291,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[847.752,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1039.812,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1231.952,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1424.26,683,96,144],"anchor":0.5,"sourceHeight":138,"footMargin":3}],[{"clip":[75.946,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[268.788,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[460.233,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[652.605,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[845.007,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[1037.081,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[1229.616,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3},{"clip":[1421.493,852,105,137],"anchor":0.5,"sourceHeight":131,"footMargin":3}]]},"2":{"atlas":1,"rows":[[{"clip":[71.575,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[262.755,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[454.876,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[645.525,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[836.225,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[1027.356,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[1218.701,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3},{"clip":[1410.162,29,99,169],"anchor":0.5,"sourceHeight":163,"footMargin":3}],[{"clip":[66.62,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[259.131,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[451.39,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[642.339,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[833.616,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1025.165,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1216.855,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1408.161,209,105,172],"anchor":0.5,"sourceHeight":166,"footMargin":3}],[{"clip":[63.701,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[255.338,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[447.726,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[640.37,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[831.441,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[1023.882,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[1215.951,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[1407.366,388,103,163],"anchor":0.5,"sourceHeight":157,"footMargin":3}]]},"3":{"atlas":1,"rows":[[{"clip":[64.61,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[257.024,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[448.949,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[639.458,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[832.641,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1024.089,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1215.474,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1407.087,569,99,144],"anchor":0.5,"sourceHeight":138,"footMargin":3}],[{"clip":[67.317,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[260.24,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[452.067,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[643.753,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[835.506,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1027.06,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1219.462,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[1410.333,720,95,144],"anchor":0.5,"sourceHeight":138,"footMargin":3}],[{"clip":[65.535,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[257.871,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[449.174,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[640.894,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[833.216,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[1025.011,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[1216.929,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[1408.417,873,97,141],"anchor":0.5,"sourceHeight":135,"footMargin":3}]]},"4":{"atlas":2,"rows":[[{"clip":[38.906,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[166.692,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[292.036,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[417.343,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[543.403,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[669.712,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[796.307,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[921.485,6,84,142],"anchor":0.5,"sourceHeight":136,"footMargin":3}],[{"clip":[37.299,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[164.408,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[290.866,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[415.398,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[541.368,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[666.431,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[793.393,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3},{"clip":[918.571,151,86,143],"anchor":0.5,"sourceHeight":137,"footMargin":3}],[{"clip":[36.711,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[162.807,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[289.373,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[415.456,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[542.17,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[667.504,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[795.153,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[921.897,296,85,141],"anchor":0.5,"sourceHeight":135,"footMargin":3}]]},"5":{"atlas":2,"rows":[[{"clip":[30.871,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[158.483,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[284.663,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[410.751,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[537.112,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[663.277,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[789.748,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[915.83,444,98,141],"anchor":0.5,"sourceHeight":135,"footMargin":3}],[{"clip":[33.52,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[161.036,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[286.492,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[412.534,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[539.175,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[664.536,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[791.134,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[917.098,588,93,142],"anchor":0.5,"sourceHeight":136,"footMargin":3}],[{"clip":[30.042,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[157.501,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[283.941,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[409.561,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[536.39,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[662.697,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[789.327,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[915.319,733,93,134],"anchor":0.5,"sourceHeight":128,"footMargin":3}]]},"6":{"atlas":3,"rows":[[{"clip":[112.691,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[287.101,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[464.06,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[640.292,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[814.841,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[990.803,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[1167.276,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3},{"clip":[1344.213,21,98,163],"anchor":0.5,"sourceHeight":157,"footMargin":3}],[{"clip":[114.977,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[292.225,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[469.034,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[643.275,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[819.761,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[996.573,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[1172.48,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3},{"clip":[1348.619,194,88,160],"anchor":0.5,"sourceHeight":154,"footMargin":3}],[{"clip":[110.621,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[289.256,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[464.481,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[640.462,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[817.304,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[993.768,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[1169.975,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[1345.974,363,94,153],"anchor":0.5,"sourceHeight":147,"footMargin":3}]]},"7":{"atlas":3,"rows":[[{"clip":[107.392,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[283.559,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[461.107,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[636.586,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[812.754,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[989.154,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1165.471,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1341.734,529,101,149],"anchor":0.5,"sourceHeight":143,"footMargin":3}],[{"clip":[108.966,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[286.269,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[463.275,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[638.879,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[813.844,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[991.458,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[1167.155,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[1342.888,687,98,148],"anchor":0.5,"sourceHeight":142,"footMargin":3}],[{"clip":[107.556,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[285.779,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[461.835,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[637.356,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[813.739,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[991.447,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1165.704,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1341.88,845,99,149],"anchor":0.5,"sourceHeight":143,"footMargin":3}]]},"8":{"atlas":4,"rows":[[{"clip":[50.21,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[178.208,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[306.542,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[434.243,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[562.101,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[690.826,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[818.934,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[434.243,7,88,153],"anchor":0.5,"sourceHeight":147,"footMargin":3}],[{"clip":[49.946,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[179.795,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[307.343,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[435.816,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[563.412,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[692.421,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[819.692,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3},{"clip":[435.816,159,82,148],"anchor":0.5,"sourceHeight":142,"footMargin":3}],[{"clip":[49.513,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[178.311,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[306.324,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[433.77,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[561.223,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[690.391,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[818.588,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3},{"clip":[433.77,309,88,142],"anchor":0.5,"sourceHeight":136,"footMargin":3}]]},"9":{"atlas":4,"rows":[[{"clip":[34.314,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[165.55,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[293.524,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[421.889,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[549.198,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[678.528,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[806.316,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3},{"clip":[421.889,452,98,144],"anchor":0.5,"sourceHeight":138,"footMargin":3}],[{"clip":[46.08,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[176.002,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[304.581,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[432.814,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[560.351,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[688.997,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[817.333,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3},{"clip":[432.814,599,87,145],"anchor":0.5,"sourceHeight":139,"footMargin":3}],[{"clip":[34.245,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[163.047,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[291.218,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[419.378,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[548.1,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[676.731,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[803.929,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3},{"clip":[419.378,748,101,135],"anchor":0.5,"sourceHeight":129,"footMargin":3}]]},"10":{"atlas":5,"rows":[[{"clip":[80.585,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[272.815,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[465.008,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[656.796,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[848.905,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[1040.581,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[1233.395,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3},{"clip":[1425.433,11,92,170],"anchor":0.5,"sourceHeight":164,"footMargin":3}],[{"clip":[82.2,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[274.851,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[466.86,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[659.22,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[851.184,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[1043.25,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[1235.207,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3},{"clip":[1427.598,192,86,165],"anchor":0.5,"sourceHeight":159,"footMargin":3}],[{"clip":[72.207,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[264.24,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[456.489,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[648.949,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[840.89,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[1033.843,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[1225.655,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3},{"clip":[1417.698,363,104,153],"anchor":0.5,"sourceHeight":147,"footMargin":3}]]},"11":{"atlas":5,"rows":[[{"clip":[73.66,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[266.296,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[458.709,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[650.865,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[843.272,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[1034.927,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[1227.329,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3},{"clip":[1419.839,522,100,156],"anchor":0.5,"sourceHeight":150,"footMargin":3}],[{"clip":[76.376,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[269.498,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[461.529,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[653.724,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[845.609,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1037.8,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1230.481,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1423.23,684,95,154],"anchor":0.5,"sourceHeight":148,"footMargin":3}],[{"clip":[66.237,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[259.592,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[451.29,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[643.364,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[835.325,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[1027.606,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[1219.81,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3},{"clip":[1411.928,850,112,157],"anchor":0.5,"sourceHeight":151,"footMargin":3}]]},"12":{"atlas":6,"rows":[[{"clip":[23.187,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[150.411,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[277.84,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[405.363,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[533.048,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[661.103,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[789.441,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[916.594,8,91,149],"anchor":0.5,"sourceHeight":143,"footMargin":3}],[{"clip":[18.575,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[147.544,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[275.407,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[403.123,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[530.643,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[658.754,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[787.03,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3},{"clip":[915.444,160,92,146],"anchor":0.5,"sourceHeight":140,"footMargin":3}],[{"clip":[20.607,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[148.533,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[279.379,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[406.732,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[534.176,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[662.409,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[790.513,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3},{"clip":[918.722,309,91,147],"anchor":0.5,"sourceHeight":141,"footMargin":3}]]},"13":{"atlas":6,"rows":[[{"clip":[24.281,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[151.732,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[280.426,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[408.418,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[536.26,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[664.548,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[792.828,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3},{"clip":[921.272,465,82,141],"anchor":0.5,"sourceHeight":135,"footMargin":3}],[{"clip":[24.299,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[152.02,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[280.404,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[409.254,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[536.623,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[664.652,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[793.157,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3},{"clip":[921.525,610,79,140],"anchor":0.5,"sourceHeight":134,"footMargin":3}],[{"clip":[20.418,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[147.863,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[276.189,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[404.053,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[532.562,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[660.635,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[789.686,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3},{"clip":[917.285,753,88,134],"anchor":0.5,"sourceHeight":128,"footMargin":3}]]},"14":{"atlas":7,"rows":[[{"clip":[70.7,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[262.448,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[453.559,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[646.057,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[838.42,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[1029.931,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[1222.049,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[1413.659,8,115,179],"anchor":0.5,"sourceHeight":173,"footMargin":3}],[{"clip":[68.837,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[261.489,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[452.799,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[645.212,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[837.402,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[1029.513,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[1221.4,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3},{"clip":[1413.358,195,116,176],"anchor":0.5,"sourceHeight":170,"footMargin":3}],[{"clip":[72.835,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[265.699,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[458.233,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[650.509,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[841.612,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1034.425,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1226.971,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3},{"clip":[1418.629,375,109,172],"anchor":0.5,"sourceHeight":166,"footMargin":3}]]},"15":{"atlas":7,"rows":[[{"clip":[70.778,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[263.599,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[455.188,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[647.876,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[839.556,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1031.952,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1223.832,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3},{"clip":[1415.998,554,112,154],"anchor":0.5,"sourceHeight":148,"footMargin":3}],[{"clip":[72.527,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[265.305,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[457.31,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[649.372,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[840.575,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[1033.144,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[1225.198,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3},{"clip":[1417.019,711,109,152],"anchor":0.5,"sourceHeight":146,"footMargin":3}],[{"clip":[69.331,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[262.472,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[454.433,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[646.071,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[838.539,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1031.184,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1223.048,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3},{"clip":[1415.081,868,110,149],"anchor":0.5,"sourceHeight":143,"footMargin":3}]]},"17":{"atlas":8,"rows":[[{"clip":[47.419,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[228.385,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[409.201,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[590.068,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[771.016,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[952.46,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[1133.101,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3},{"clip":[1314.024,7,105,187],"anchor":0.5,"sourceHeight":181,"footMargin":3}],[{"clip":[48.16,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[229.731,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[410.117,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[590.884,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[772.337,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[953.865,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[1134.482,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3},{"clip":[1315.711,200,102,179],"anchor":0.5,"sourceHeight":173,"footMargin":3}],[{"clip":[45.18,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[227.548,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[408.835,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[589.535,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[770.687,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[952.316,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[1132.383,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[1314.833,382,104,164],"anchor":0.5,"sourceHeight":158,"footMargin":3}]]},"18":{"atlas":8,"rows":[[{"clip":[46.509,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[227.165,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[408.148,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[589.445,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[770.13,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[951.717,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[1132.742,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3},{"clip":[1313.817,547,107,189],"anchor":0.5,"sourceHeight":183,"footMargin":3}],[{"clip":[47.945,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[229.518,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[410.423,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[590.795,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[772.058,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[953.519,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[1134.129,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3},{"clip":[1315.291,741,103,182],"anchor":0.5,"sourceHeight":176,"footMargin":3}],[{"clip":[46.332,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[228.226,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[409.497,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[590.545,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[770.778,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[952.071,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[1133.595,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3},{"clip":[1315.093,924,101,164],"anchor":0.5,"sourceHeight":158,"footMargin":3}]]},"21":{"atlas":9,"rows":[[{"clip":[108.945,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[354.226,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[599.903,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[843.804,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[1087.872,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[1332.046,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[1575.932,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3},{"clip":[1821.994,12,114,234],"anchor":0.5,"sourceHeight":228,"footMargin":3}],[{"clip":[107.647,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[352.441,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[596.739,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[841.611,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[1087.011,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[1331.588,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[1575.308,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3},{"clip":[1821.487,263,116,233],"anchor":0.5,"sourceHeight":227,"footMargin":3}],[{"clip":[100.063,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[345.404,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[589.117,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[834.327,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[1079.436,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[1324.341,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[1569.021,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3},{"clip":[1814.323,515,127,237],"anchor":0.5,"sourceHeight":231,"footMargin":3}]]}};
const PeopleAtlasKeys=["assets/people-everyday-v310.webp","assets/people-regulars-v310.webp","assets/people-story-v310.webp","assets/people-special-v310.webp","assets/people-team-v310.webp","assets/drummer-v350.webp","assets/team-checkout-v3100.webp"];
const SpecialPeopleActors=Object.freeze({band:12,family:13,musician:14,child:15});
const PeopleFrames=[{"atlas":0,"rows":[[{"clip":[2,508,121,239],"anchor":0.5,"sourceHeight":239},{"clip":[127,508,121,239],"anchor":0.5,"sourceHeight":239},{"clip":[397,508,125,238],"anchor":0.5,"sourceHeight":238},{"clip":[127,508,121,239],"anchor":0.5,"sourceHeight":239}],[{"clip":[1042,258,122,241],"anchor":0.5,"sourceHeight":241},{"clip":[1427,258,117,240],"anchor":0.5,"sourceHeight":240},{"clip":[1168,258,127,240],"anchor":0.5,"sourceHeight":240},{"clip":[1427,258,117,240],"anchor":0.5,"sourceHeight":240}],[{"clip":[1299,258,124,240],"anchor":0.5,"sourceHeight":240},{"clip":[1548,258,124,239],"anchor":0.5,"sourceHeight":239},{"clip":[910,258,128,241],"anchor":0.5,"sourceHeight":241},{"clip":[1548,258,124,239],"anchor":0.5,"sourceHeight":239}]]},{"atlas":0,"rows":[[{"clip":[1395,2,150,247],"anchor":0.5,"sourceHeight":247},{"clip":[1239,2,152,247],"anchor":0.5,"sourceHeight":247},{"clip":[2,258,144,246],"anchor":0.5,"sourceHeight":246},{"clip":[1239,2,152,247],"anchor":0.5,"sourceHeight":247}],[{"clip":[840,2,138,248],"anchor":0.5,"sourceHeight":248},{"clip":[150,258,141,246],"anchor":0.5,"sourceHeight":246},{"clip":[452,258,152,245],"anchor":0.5,"sourceHeight":245},{"clip":[150,258,141,246],"anchor":0.5,"sourceHeight":246}],[{"clip":[758,258,148,244],"anchor":0.5,"sourceHeight":244},{"clip":[608,258,146,245],"anchor":0.5,"sourceHeight":245},{"clip":[295,258,153,245],"anchor":0.5,"sourceHeight":245},{"clip":[608,258,146,245],"anchor":0.5,"sourceHeight":245}]]},{"atlas":0,"rows":[[{"clip":[280,2,133,250],"anchor":0.5,"sourceHeight":250},{"clip":[140,2,136,250],"anchor":0.5,"sourceHeight":250},{"clip":[417,2,140,249],"anchor":0.5,"sourceHeight":249},{"clip":[140,2,136,250],"anchor":0.5,"sourceHeight":250}],[{"clip":[2,2,134,252],"anchor":0.5,"sourceHeight":252},{"clip":[982,2,132,248],"anchor":0.5,"sourceHeight":248},{"clip":[701,2,135,249],"anchor":0.5,"sourceHeight":249},{"clip":[982,2,132,248],"anchor":0.5,"sourceHeight":248}],[{"clip":[1549,2,126,247],"anchor":0.5,"sourceHeight":247},{"clip":[1118,2,117,248],"anchor":0.5,"sourceHeight":248},{"clip":[561,2,136,249],"anchor":0.5,"sourceHeight":249},{"clip":[1118,2,117,248],"anchor":0.5,"sourceHeight":248}]]},{"atlas":0,"rows":[[{"clip":[252,508,141,238],"anchor":0.5,"sourceHeight":238},{"clip":[672,508,137,235],"anchor":0.5,"sourceHeight":235},{"clip":[526,508,142,236],"anchor":0.5,"sourceHeight":236},{"clip":[672,508,137,235],"anchor":0.5,"sourceHeight":235}],[{"clip":[813,508,133,235],"anchor":0.5,"sourceHeight":235},{"clip":[1088,508,133,233],"anchor":0.5,"sourceHeight":233},{"clip":[1225,508,133,233],"anchor":0.5,"sourceHeight":233},{"clip":[1088,508,133,233],"anchor":0.5,"sourceHeight":233}],[{"clip":[1497,508,131,232],"anchor":0.5,"sourceHeight":232},{"clip":[1362,508,131,233],"anchor":0.5,"sourceHeight":233},{"clip":[950,508,134,233],"anchor":0.5,"sourceHeight":233},{"clip":[1362,508,131,233],"anchor":0.5,"sourceHeight":233}]]},{"atlas":1,"rows":[[{"clip":[1476,507,122,231],"anchor":0.5,"sourceHeight":231},{"clip":[1222,507,121,232],"anchor":0.5,"sourceHeight":232},{"clip":[830,507,123,233],"anchor":0.5,"sourceHeight":233},{"clip":[1222,507,121,232],"anchor":0.5,"sourceHeight":232}],[{"clip":[1096,507,122,232],"anchor":0.5,"sourceHeight":232},{"clip":[579,507,115,235],"anchor":0.5,"sourceHeight":235},{"clip":[698,507,128,233],"anchor":0.5,"sourceHeight":233},{"clip":[579,507,115,235],"anchor":0.5,"sourceHeight":235}],[{"clip":[1347,507,125,231],"anchor":0.5,"sourceHeight":231},{"clip":[957,507,135,232],"anchor":0.5,"sourceHeight":232},{"clip":[1602,507,136,230],"anchor":0.5,"sourceHeight":230},{"clip":[957,507,135,232],"anchor":0.5,"sourceHeight":232}]]},{"atlas":1,"rows":[[{"clip":[145,507,147,239],"anchor":0.5,"sourceHeight":239},{"clip":[1364,259,144,241],"anchor":0.5,"sourceHeight":241},{"clip":[1063,259,143,242],"anchor":0.5,"sourceHeight":242},{"clip":[1364,259,144,241],"anchor":0.5,"sourceHeight":241}],[{"clip":[2,507,139,240],"anchor":0.5,"sourceHeight":240},{"clip":[1120,2,146,247],"anchor":0.5,"sourceHeight":247},{"clip":[912,259,147,242],"anchor":0.5,"sourceHeight":242},{"clip":[1120,2,146,247],"anchor":0.5,"sourceHeight":247}],[{"clip":[1512,259,140,241],"anchor":0.5,"sourceHeight":241},{"clip":[439,507,136,237],"anchor":0.5,"sourceHeight":237},{"clip":[296,507,139,239],"anchor":0.5,"sourceHeight":239},{"clip":[439,507,136,237],"anchor":0.5,"sourceHeight":237}]]},{"atlas":1,"rows":[[{"clip":[2,2,135,253],"anchor":0.5,"sourceHeight":253},{"clip":[691,2,136,250],"anchor":0.5,"sourceHeight":250},{"clip":[831,2,142,249],"anchor":0.5,"sourceHeight":249},{"clip":[691,2,136,250],"anchor":0.5,"sourceHeight":250}],[{"clip":[417,2,129,251],"anchor":0.5,"sourceHeight":251},{"clip":[141,2,131,253],"anchor":0.5,"sourceHeight":253},{"clip":[276,2,137,252],"anchor":0.5,"sourceHeight":252},{"clip":[141,2,131,253],"anchor":0.5,"sourceHeight":253}],[{"clip":[1270,2,138,247],"anchor":0.5,"sourceHeight":247},{"clip":[977,2,139,249],"anchor":0.5,"sourceHeight":249},{"clip":[550,2,137,250],"anchor":0.5,"sourceHeight":250},{"clip":[977,2,139,249],"anchor":0.5,"sourceHeight":249}]]},{"atlas":1,"rows":[[{"clip":[1210,259,150,241],"anchor":0.5,"sourceHeight":241},{"clip":[2,259,145,244],"anchor":0.5,"sourceHeight":244},{"clip":[300,259,148,243],"anchor":0.5,"sourceHeight":243},{"clip":[2,259,145,244],"anchor":0.5,"sourceHeight":244}],[{"clip":[151,259,145,244],"anchor":0.5,"sourceHeight":244},{"clip":[1412,2,146,245],"anchor":0.5,"sourceHeight":245},{"clip":[452,259,146,243],"anchor":0.5,"sourceHeight":243},{"clip":[1412,2,146,245],"anchor":0.5,"sourceHeight":245}],[{"clip":[602,259,151,242],"anchor":0.5,"sourceHeight":242},{"clip":[1562,2,146,244],"anchor":0.5,"sourceHeight":244},{"clip":[757,259,151,242],"anchor":0.5,"sourceHeight":242},{"clip":[1562,2,146,244],"anchor":0.5,"sourceHeight":244}]]},{"atlas":2,"rows":[[{"clip":[358,1015,115,235],"anchor":0.5,"sourceHeight":235},{"clip":[241,1015,113,236],"anchor":0.5,"sourceHeight":236},{"clip":[591,1015,115,234],"anchor":0.5,"sourceHeight":234},{"clip":[241,1015,113,236],"anchor":0.5,"sourceHeight":236}],[{"clip":[826,1015,111,233],"anchor":0.5,"sourceHeight":233},{"clip":[477,1015,110,235],"anchor":0.5,"sourceHeight":235},{"clip":[710,1015,112,233],"anchor":0.5,"sourceHeight":233},{"clip":[477,1015,110,235],"anchor":0.5,"sourceHeight":235}],[{"clip":[736,770,124,238],"anchor":0.5,"sourceHeight":238},{"clip":[123,1015,114,236],"anchor":0.5,"sourceHeight":236},{"clip":[2,1015,117,236],"anchor":0.5,"sourceHeight":236},{"clip":[123,1015,114,236],"anchor":0.5,"sourceHeight":236}]]},{"atlas":2,"rows":[[{"clip":[153,770,146,240],"anchor":0.5,"sourceHeight":240},{"clip":[688,517,128,242],"anchor":0.5,"sourceHeight":242},{"clip":[2,770,147,241],"anchor":0.5,"sourceHeight":241},{"clip":[688,517,128,242],"anchor":0.5,"sourceHeight":242}],[{"clip":[303,770,143,240],"anchor":0.5,"sourceHeight":240},{"clip":[450,770,125,240],"anchor":0.5,"sourceHeight":240},{"clip":[864,770,143,237],"anchor":0.5,"sourceHeight":237},{"clip":[450,770,125,240],"anchor":0.5,"sourceHeight":240}],[{"clip":[526,517,158,242],"anchor":0.5,"sourceHeight":242},{"clip":[579,770,153,239],"anchor":0.5,"sourceHeight":239},{"clip":[820,517,154,241],"anchor":0.5,"sourceHeight":241},{"clip":[579,770,153,239],"anchor":0.5,"sourceHeight":239}]]},{"atlas":2,"rows":[[{"clip":[574,261,117,250],"anchor":0.5,"sourceHeight":250},{"clip":[816,261,114,250],"anchor":0.5,"sourceHeight":250},{"clip":[448,261,122,250],"anchor":0.5,"sourceHeight":250},{"clip":[816,261,114,250],"anchor":0.5,"sourceHeight":250}],[{"clip":[695,261,117,250],"anchor":0.5,"sourceHeight":250},{"clip":[271,517,114,249],"anchor":0.5,"sourceHeight":249},{"clip":[320,261,124,250],"anchor":0.5,"sourceHeight":250},{"clip":[271,517,114,249],"anchor":0.5,"sourceHeight":249}],[{"clip":[2,517,132,249],"anchor":0.5,"sourceHeight":249},{"clip":[138,517,129,249],"anchor":0.5,"sourceHeight":249},{"clip":[389,517,133,248],"anchor":0.5,"sourceHeight":248},{"clip":[138,517,129,249],"anchor":0.5,"sourceHeight":249}]]},{"atlas":2,"rows":[[{"clip":[283,2,140,254],"anchor":0.5,"sourceHeight":254},{"clip":[150,2,129,255],"anchor":0.5,"sourceHeight":255},{"clip":[2,2,144,255],"anchor":0.5,"sourceHeight":255},{"clip":[150,2,129,255],"anchor":0.5,"sourceHeight":255}],[{"clip":[720,2,131,253],"anchor":0.5,"sourceHeight":253},{"clip":[427,2,115,254],"anchor":0.5,"sourceHeight":254},{"clip":[165,261,151,251],"anchor":0.5,"sourceHeight":251},{"clip":[427,2,115,254],"anchor":0.5,"sourceHeight":254}],[{"clip":[546,2,170,253],"anchor":0.5,"sourceHeight":253},{"clip":[855,2,162,252],"anchor":0.5,"sourceHeight":252},{"clip":[2,261,159,252],"anchor":0.5,"sourceHeight":252},{"clip":[855,2,162,252],"anchor":0.5,"sourceHeight":252}]]},{"atlas":3,"rows":[[{"clip":[138,268,130,248],"anchor":0.5,"sourceHeight":248},{"clip":[272,268,127,248],"anchor":0.5,"sourceHeight":248},{"clip":[542,268,129,247],"anchor":0.5,"sourceHeight":247},{"clip":[272,268,127,248],"anchor":0.5,"sourceHeight":248}],[{"clip":[1551,2,127,249],"anchor":0.5,"sourceHeight":249},{"clip":[1419,2,128,249],"anchor":0.5,"sourceHeight":249},{"clip":[403,268,135,247],"anchor":0.5,"sourceHeight":247},{"clip":[1419,2,128,249],"anchor":0.5,"sourceHeight":249}],[{"clip":[675,268,129,247],"anchor":0.5,"sourceHeight":247},{"clip":[808,268,128,247],"anchor":0.5,"sourceHeight":247},{"clip":[2,268,132,248],"anchor":0.5,"sourceHeight":248},{"clip":[808,268,128,247],"anchor":0.5,"sourceHeight":247}]]},{"atlas":3,"rows":[[{"clip":[2,520,123,241],"anchor":0.5,"sourceHeight":241},{"clip":[940,268,119,244],"anchor":0.5,"sourceHeight":244},{"clip":[129,520,123,241],"anchor":0.5,"sourceHeight":241},{"clip":[940,268,119,244],"anchor":0.5,"sourceHeight":244}],[{"clip":[1338,268,126,242],"anchor":0.5,"sourceHeight":242},{"clip":[1468,268,119,242],"anchor":0.5,"sourceHeight":242},{"clip":[256,520,132,240],"anchor":0.5,"sourceHeight":240},{"clip":[1468,268,119,242],"anchor":0.5,"sourceHeight":242}],[{"clip":[1063,268,134,242],"anchor":0.5,"sourceHeight":242},{"clip":[1201,268,133,242],"anchor":0.5,"sourceHeight":242},{"clip":[1591,268,129,241],"anchor":0.5,"sourceHeight":241},{"clip":[1201,268,133,242],"anchor":0.5,"sourceHeight":242}]]},{"atlas":3,"rows":[[{"clip":[476,2,150,262],"anchor":0.5,"sourceHeight":262},{"clip":[321,2,151,262],"anchor":0.5,"sourceHeight":262},{"clip":[946,2,151,259],"anchor":0.5,"sourceHeight":259},{"clip":[321,2,151,262],"anchor":0.5,"sourceHeight":262}],[{"clip":[162,2,155,262],"anchor":0.5,"sourceHeight":262},{"clip":[2,2,156,262],"anchor":0.5,"sourceHeight":262},{"clip":[785,2,157,259],"anchor":0.5,"sourceHeight":259},{"clip":[2,2,156,262],"anchor":0.5,"sourceHeight":262}],[{"clip":[1101,2,157,258],"anchor":0.5,"sourceHeight":258},{"clip":[1262,2,153,257],"anchor":0.5,"sourceHeight":257},{"clip":[630,2,151,261],"anchor":0.5,"sourceHeight":261},{"clip":[1262,2,153,257],"anchor":0.5,"sourceHeight":257}]]},{"atlas":3,"rows":[[{"clip":[392,520,141,233],"anchor":0.5,"sourceHeight":233},{"clip":[537,520,138,231],"anchor":0.5,"sourceHeight":231},{"clip":[821,520,137,231],"anchor":0.5,"sourceHeight":231},{"clip":[537,520,138,231],"anchor":0.5,"sourceHeight":231}],[{"clip":[962,520,134,231],"anchor":0.5,"sourceHeight":231},{"clip":[679,520,138,231],"anchor":0.5,"sourceHeight":231},{"clip":[1100,520,137,230],"anchor":0.5,"sourceHeight":230},{"clip":[679,520,138,231],"anchor":0.5,"sourceHeight":231}],[{"clip":[1241,520,132,228],"anchor":0.5,"sourceHeight":228},{"clip":[1377,520,131,228],"anchor":0.5,"sourceHeight":228},{"clip":[1512,520,133,227],"anchor":0.5,"sourceHeight":227},{"clip":[1377,520,131,228],"anchor":0.5,"sourceHeight":228}]]},{"atlas":6,"rows":[[{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479}],[{"clip":[233,1013,210,478],"anchor":0.5,"sourceHeight":478},{"clip":[233,1013,210,478],"anchor":0.5,"sourceHeight":478},{"clip":[233,1013,210,478],"anchor":0.5,"sourceHeight":478},{"clip":[233,1013,210,478],"anchor":0.5,"sourceHeight":478}],[{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479}]]},{"atlas":4,"rows":[[{"clip":[591,630,144,304],"anchor":0.5,"sourceHeight":304},{"clip":[741,317,142,306],"anchor":0.5,"sourceHeight":306},{"clip":[440,630,147,304],"anchor":0.5,"sourceHeight":304},{"clip":[741,317,142,306],"anchor":0.5,"sourceHeight":306}],[{"clip":[296,630,140,305],"anchor":0.5,"sourceHeight":305},{"clip":[739,630,139,304],"anchor":0.5,"sourceHeight":304},{"clip":[151,630,141,305],"anchor":0.5,"sourceHeight":305},{"clip":[739,630,139,304],"anchor":0.5,"sourceHeight":304}],[{"clip":[446,317,146,307],"anchor":0.5,"sourceHeight":307},{"clip":[141,317,145,308],"anchor":0.5,"sourceHeight":308},{"clip":[2,630,145,305],"anchor":0.5,"sourceHeight":305},{"clip":[141,317,145,308],"anchor":0.5,"sourceHeight":308}]]},{"atlas":4,"rows":[[{"clip":[2,2,141,311],"anchor":0.5,"sourceHeight":311},{"clip":[733,2,136,309],"anchor":0.5,"sourceHeight":309},{"clip":[147,2,146,310],"anchor":0.5,"sourceHeight":310},{"clip":[733,2,136,309],"anchor":0.5,"sourceHeight":309}],[{"clip":[2,317,135,309],"anchor":0.5,"sourceHeight":309},{"clip":[592,2,137,309],"anchor":0.5,"sourceHeight":309},{"clip":[297,2,139,310],"anchor":0.5,"sourceHeight":310},{"clip":[592,2,137,309],"anchor":0.5,"sourceHeight":309}],[{"clip":[440,2,148,309],"anchor":0.5,"sourceHeight":309},{"clip":[596,317,141,307],"anchor":0.5,"sourceHeight":307},{"clip":[290,317,152,307],"anchor":0.5,"sourceHeight":307},{"clip":[596,317,141,307],"anchor":0.5,"sourceHeight":307}]]},{"atlas":6,"rows":[[{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500}],[{"clip":[227,509,220,499],"anchor":0.5,"sourceHeight":499},{"clip":[227,509,220,499],"anchor":0.5,"sourceHeight":499},{"clip":[227,509,220,499],"anchor":0.5,"sourceHeight":499},{"clip":[227,509,220,499],"anchor":0.5,"sourceHeight":499}],[{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500}]]},{"atlas":6,"rows":[[{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503}],[{"clip":[2,509,221,500],"anchor":0.5,"sourceHeight":500},{"clip":[2,509,221,500],"anchor":0.5,"sourceHeight":500},{"clip":[2,509,221,500],"anchor":0.5,"sourceHeight":500},{"clip":[2,509,221,500],"anchor":0.5,"sourceHeight":500}],[{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503}]]},{"atlas":5,"rows":[[{"clip":[365,2,196,400],"anchor":0.5,"sourceHeight":400},{"clip":[2,2,180,401],"anchor":0.5,"sourceHeight":401},{"clip":[565,2,200,397],"anchor":0.5,"sourceHeight":397},{"clip":[2,2,180,401],"anchor":0.5,"sourceHeight":401}],[{"clip":[769,2,223,396],"anchor":0.5,"sourceHeight":396},{"clip":[186,2,175,401],"anchor":0.5,"sourceHeight":401},{"clip":[996,2,214,395],"anchor":0.5,"sourceHeight":395},{"clip":[186,2,175,401],"anchor":0.5,"sourceHeight":401}],[{"clip":[1391,2,202,385],"anchor":0.5,"sourceHeight":385},{"clip":[1214,2,173,390],"anchor":0.5,"sourceHeight":390},{"clip":[1597,2,188,384],"anchor":0.5,"sourceHeight":384},{"clip":[1214,2,173,390],"anchor":0.5,"sourceHeight":390}]]}];


// SOURCE: data/team-v3100
// Complete isometric checkout poses. Column0 faces down-right, column1 faces up-right.
const CheckoutAtlasKey='assets/checkout-v3130.webp';
const checkoutAtlas=runtimeImage(CheckoutAtlasKey);
const CheckoutPoses={"16":[{"clip":[185,77,247,448],"anchor":0.5,"sourceHeight":442,"footMargin":3},{"clip":[587,77,246,446],"anchor":0.5,"sourceHeight":440,"footMargin":3}],"19":[{"clip":[188,546,255,437],"anchor":0.5,"sourceHeight":431,"footMargin":3},{"clip":[583,546,253,437],"anchor":0.5,"sourceHeight":431,"footMargin":3}],"20":[{"clip":[187,1002,248,477],"anchor":0.5,"sourceHeight":471,"footMargin":3},{"clip":[586,1005,256,474],"anchor":0.5,"sourceHeight":468,"footMargin":3}]};
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
function openDecorDetail(i){if(!DecorDefinitions[i])return;const el=$('decorDetailBody');el.innerHTML=`${furnitureIcon(i)}<h3>${types[i].name}</h3>${decorDetails(i)}<p>같은 장식 효과는 중복되지 않아요.</p>`;drawIcons();$('decorDetail').showModal();}
function furnitureCategory(t){if(t>=11)return t===12?'display':'facility';return [0,5,6].includes(t)?'display':[1,4,7].includes(t)?'facility':'decor';}

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
function staffWage() { return inventoryWage()+S.cashierHired*Config.staff.wage; }
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
function furnitureUnlocked(t){if(t>=11)return S.stage>=6;return t===6?drumsUnlocked():t===7?drumsUnlocked()&&featureUnlocked('drumDemo'):true;}
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
function rackProducts(f) { return f.t===6&&drumsUnlocked()?[26]:[f.p, f.p2].filter(Number.isInteger); }
function setRackProduct(id, i, slot = 0) {
 const f = S.furniture.find((f) => f.id === id);
 if (!f || f.t !== FurnitureId.GUITAR_RACK || !Number.isInteger(slot) || slot < 0 || slot >= rackLimit() || (i !== null && (!isInstrument(i) || products[i].family==='drums' || !productUnlocked(i)))) return false;
 const field = slot === 0 ? 'p' : 'p2', other = slot === 0 ? 'p2' : 'p';
 if (i !== null && f[other] === i) return false;
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
function customerCanAfford(p, i) {
  return (
    productUnlocked(i) &&
    products[i].price +
      (p.basket ?? []).reduce((n, j) => n + (j === i ? 0 : products[j].price), 0) <=
      (p.budget ?? 600000)
  );
}
function addonCompatible(instrument, addon) {
 const p=products[instrument],a=products[addon];
 if(!p||!a||p.family==='drums')return false;
 if(a.kind==='strings')return ({electric:6,acoustic:7,bass:8})[p.family]===addon;
 return a.kind==='effect';
}
function chooseOffer(list, profile) {
  const affordable = list.filter((o) => products[o.i].price <= profile.budget);
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
function unlockSummary(stage, silhouette = false) {
 if(stage===6)return '<div class="note"><b>커스텀 제작 · VIP 공간</b><p>제작대 3등급, 특별 전시대, VIP 시연석과 상담 테이블이 열려요. VIP 구역을 완성하면 서린·태오·은채가 일반 손님과 별도로 방문해요.</p></div>';
  const profile = CustomerProfiles.find((p) => p.tier === stage);
  return `<div class="unlock-products">${productsAtStage(stage)
    .map(
      ({ p, i }) =>
        `<div><div class="unlock-art" data-product-art="${i}"></div><b>${p.name}</b><small>판매 ${money(p.price)}</small></div>`
    )
    .join(
      ''
    )}</div>${profile ? `<div class="unlock-guest"><div class="guest-portrait ${silhouette ? 'silhouette' : ''}" data-customer-art="${profile.actor}"></div><div><b>${profile.role}</b><p>${silhouette ? '확장하면 새로운 손님이 찾아와요.' : escapeHTML(profile.quote)}</p><small>${TierNames[stage]} 악기를 주로 찾아요.</small></div></div>` : ''}`;
}

const FeatureGuides = {
 delivery:['예약 악기 입고','준비 중 주문하면 오늘 15시, 영업 중 주문하면 내일 오픈 전 입고돼요. 긴급주문은 즉시 입고예요.'],
 staff:['자동 주문 직원','2단계부터 채용비 50만 원·일급 3만 원. 입문 악기·이펙터·기타줄을 자동 주문해요. 관리 → 직원 관리에서 채용하세요.'],
 staff2:['두 번째 자동 주문 직원','중급 이상 악기도 예약 주문해요. 준비 중 주문은 오늘 15시, 영업 중 주문은 내일 오픈 전 입고예요.'],
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
function featureBadge(key) { return S.newFeatures.includes(key)?`<button class="feature-new" data-feature-go="${key}" aria-label="${FeatureGuides[key][0]} 새 기능 안내">NEW · 안내</button>`:''; }
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
function showUnlockNotice() {
 if(titleActive || (S.expansionNotice==null && !S.featureNotices.length))return;
 $('management').close();
 const stage=S.expansionNotice;
 $('unlockHeading').textContent=stage==null?'새 운영 기능이 열렸어요':'매장 '+(stage+1)+'단계 · '+(stage===6?'커스텀 공방':TierNames[stage])+' 해금';
 $('unlockContent').innerHTML=(stage==null?'':unlockSummary(stage)+'<p class="sub">상품 주문에서 입고하고 진열대에 지정해주세요. 새 손님은 영업을 열면 찾아와요.</p>')+
 (S.featureNotices.length?'<h3>새 기능과 사용 방법</h3>'+featureCards(S.featureNotices):'');
 drawProductIcons();drawCustomerIcons();
 if(!$('unlockModal').open)$('unlockModal').showModal();
}
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
    Config.affinity.dailyCap - r.affinityGain,
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
 if (p.actor !== 9 || p.special || !isRegular(S.customerBook['actor-9'])) return;
 const story = S.hanaStory;
 if (story.phase === 'locked') {
  story.phase = 'offered'; story.startedDay = S.day;
  p.bubble = '첫 공연 준비를 함께 해주실래요?'; p.bubbleUntil = S.time + 6;
  log('하나의 이야기 · 첫 작은 무대'); toast('하나의 단골 이야기가 열렸어요 · 매장 메뉴'); save();
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
 if (q.phase === 'locked') body = `<p>입문자 하나의 호감도 100 달성 후 다음 방문에 이야기가 시작돼요.</p><small>현재 호감도 ${r?.satisfaction ?? 0} / 100 · 기한 없이 진행</small>`;
 if (q.phase === 'offered') body = '<p>“첫 작은 공연을 앞두고 있어요. 가게에서 고른 악기로 무대에 서고 싶어요.”</p><p>모닝 어쿠스틱 1대와 어쿠스틱 기타줄 1개를 선물로 준비해요. 수락해도 재고가 바로 차감되지는 않아요.</p><button class="primary" data-story="accept">공연 준비 돕기</button>';
 if (q.phase === 'accepted') body = `<p>모닝 어쿠스틱 1대 (${S.stock[2]}대 보유)<br>어쿠스틱 기타줄 1개 (${S.stock[7]}개 보유)</p><p>전달하면 재고를 사용해요. 판매 수익·판매 횟수는 발생하지 않아요.</p><button class="primary" data-story="deliver" ${S.phase !== 'prepare' || S.stock[2] < 1 || S.stock[7] < 1 ? 'disabled' : ''}>재고를 사용해 전달하기</button><small>영업 준비 중에 전달할 수 있어요. 기한은 없어요.</small>`;
 if (q.phase === 'delivered') body = '<p>공연 준비를 마쳤어요. 다음 날 이후 하나가 다시 찾아오면 공연 이야기를 들을 수 있어요.</p>';
 if (q.phase === 'done') body = `<p>“그날의 첫 무대를 오래 기억할 거예요.”</p><b>${S.stage >= 1 ? '중급 어쿠스틱 · 월넛 팔러 주문 가능' : '매장 2단계에서 월넛 팔러 주문 가능'}</b>`;
 return `<section class="hana-story"><span class="eyebrow">REGULAR CUSTOMER STORY</span><h3>하나의 첫 작은 무대</h3>${body}<p class="story-reward">완료 보상: 월넛 팔러 구매 해금 · 매장 2단계 필요</p></section>`;
}

let hanaRenderKey = '';
function refreshHanaStory() {
 if (tab !== 'guests' || !$('management').open) return;
 const el = document.getElementById('hanaStoryPanel');
 if (!el) return;
 const key = JSON.stringify([S.hanaStory,S.stage,S.phase,S.stock[2],S.stock[7],S.customerBook['actor-9']?.satisfaction]);
 if (key === hanaRenderKey) return;
 hanaRenderKey = key;
 el.innerHTML = hanaStoryPanel();
}


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
    validateExpansion: validateExpansionSave,
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
function expansionDefaults(){return {design:{wall:'original',floor:'original',vipFloor:'walnut',vipWall:'sage',wallItems:[]},vip:{zone:null,visitedDay:0,nextProfile:0,lastProfile:-1,guest:null,visits:0,sales:0,revenue:0,lastResult:''},custom:{benchLevel:1,nextId:1,items:[],crafted:0,sold:0,totalCost:0,totalRevenue:0}};}
function inVIP(p,z=S.vip.zone){return !!z&&p.x>=z.x-.5&&p.x<z.x+z.w-.5&&p.y>=z.y-.5&&p.y<z.y+z.h-.5;}
function vipDoor(z=S.vip.zone){if(!z)return null;const a=z.doorAt;return z.doorSide==='left'?{inside:{x:z.x,y:z.y+a},outside:{x:z.x-1,y:z.y+a},axis:'x',boundary:z.x-.5}:z.doorSide==='right'?{inside:{x:z.x+z.w-1,y:z.y+a},outside:{x:z.x+z.w,y:z.y+a},axis:'x',boundary:z.x+z.w-.5}:z.doorSide==='top'?{inside:{x:z.x+a,y:z.y},outside:{x:z.x+a,y:z.y-1},axis:'y',boundary:z.y-.5}:{inside:{x:z.x+a,y:z.y+z.h-1},outside:{x:z.x+a,y:z.y+z.h},axis:'y',boundary:z.y+z.h-.5};}
let vipRouting=false,vipZoneDraft=null,vipEditor=false,vipAnchor=null,workshopDraft=null,workshopAngle=0;
function vipEdgeLegal(a,b){const z=S.vip.zone;if(!z||inVIP(a,z)===inVIP(b,z))return true;const d=vipDoor(z),v=b[d.axis]-a[d.axis];if(Math.abs(v)<1e-9)return false;const t=(d.boundary-a[d.axis])/v,other=d.axis==='x'?'y':'x';return t>=0&&t<=1&&Math.abs(a[other]+(b[other]-a[other])*t-d.inside[other])<=.44;}
function vipPath(a,b,fs=S.furniture){const old=vipRouting;vipRouting=true;try{return path(a,b,fs)}finally{vipRouting=old}}
function vipNear(f,a=ENTRY,fs=S.furniture){const target=Furniture.front(f),route=vipPath(a,target,fs);return route?{target,path:route}:null;}
function zoneError(z,fs=S.furniture){
 if(!z||!['x','y','w','h','doorAt'].every(k=>Number.isInteger(z[k]))||z.w<4||z.h<4||z.w>8||z.h>8||z.x<0||z.y<0||z.x+z.w>N||z.y+z.h>M)return '4×4~8×8칸으로 매장 안에 지정해주세요';
 if(!['left','right','top','bottom'].includes(z.doorSide)||z.doorAt<1||z.doorAt>(['left','right'].includes(z.doorSide)?z.h:z.w)-2)return '문은 모서리에서 한 칸 떨어진 곳에 놓아주세요';
 const d=vipDoor(z);if(d.outside.x<0||d.outside.y<0||d.outside.x>=N||d.outside.y>=M)return '문 바깥에 매장 통로가 필요해요';
 if(inVIP(ENTRY,z))return '매장 입구는 VIP 구역 밖에 있어야 해요';
 if(fs.some(f=>inVIP(f,z)&&[0,1,4,5,6,7,11].includes(f.t)))return '일반 판매 시설과 제작대는 VIP 구역 밖에 놓아주세요';
 if([d.inside,d.outside].some(p=>fs.some(f=>Furniture.blocks(f,p.x,p.y))))return '문 양쪽 한 칸을 비워주세요';
 const prior=S.vip.zone;S.vip.zone=z;routeCache.clear();let ok;try{ok=!!vipPath(ENTRY,d.inside,fs)&&valid(fs,true);}finally{S.vip.zone=prior;routeCache.clear();}
 return ok?'':'매장 입구와 일반 판매 시설의 통로를 확보해주세요';
}
function setVIPZone(z){if(S.phase!=='prepare'||S.stage<6||editing!==null||S.vip.guest)return false;const error=zoneError(z);if(error){toast(error);return false}S.vip.zone={...z};S.vip.lastResult='전시대·시연석·상담대를 구역 안에 배치하세요';expansionChanged();return true;}
function removeVIPZone(){if(S.phase!=='prepare'||S.vip.guest)return false;S.vip.zone=null;expansionChanged();return true;}
function vipRequirements(){
 if(S.stage<6)return ['7단계에서 열려요'];if(!S.vip.zone)return ['VIP 구역을 지정하세요'];const err=zoneError(S.vip.zone);if(err)return [err];
 const out=[];for(const [t,label]of [[12,'특별 전시대'],[13,'VIP 시연석'],[14,'상담 테이블']]){const fs=S.furniture.filter(f=>f.t===t&&inVIP(f)&&inVIP(Furniture.front(f)));if(!fs.length)out.push(label+'를 구역 안에 배치하세요');else if(!fs.some(f=>vipNear(f)))out.push(label+' 앞 통로를 비워주세요');}return out;
}
function vipReady(){return vipRequirements().length===0;}
function expansionChanged(){sceneCacheKey='';routeCache.clear();clearFurnitureBodyCache();atelierSprites.clear();renderDirty=true;save();ui();if($('management').open)renderPanel();}
function atelierFacilityError(f){const z=S.vip.zone;if(z){const d=vipDoor(z);if([d.inside,d.outside].some(p=>Furniture.blocks(f,p.x,p.y)))return 'VIP 문 양쪽 통로를 비워주세요';if(inVIP(f)&&[0,1,4,5,6,7,11].includes(f.t))return '일반 판매 시설과 제작대는 VIP 구역 밖에 놓아주세요';}if([12,13,14].includes(f.t)&&(!inVIP(f)||!inVIP(Furniture.front(f))))return 'VIP 구역 안에 놓고 앞 통로를 확보해주세요';return '';}
function customDefaults(){return {color:'wine',wood:'alder',pickup:'standard',hardware:'chrome',finish:'satin'};}
function customBases(level=S.custom.benchLevel){return products.map((p,i)=>({p,i})).filter(({p,i})=>['electric','bass'].includes(p.family)&&!p.mission&&productUnlocked(i)&&(level===3||p.tier<=(level===2?1:0))).map(r=>r.i);}
function customOptionAvailable(option){return option[3]<S.custom.benchLevel&&S.stage>=6;}
function customQuote(draft){
 if(!draft||!customBases().includes(draft.base))return null;let extra=0;for(const [key,rows]of Object.entries(Atelier.options)){const o=rows.find(o=>o[0]===draft.options?.[key]);if(!o||!customOptionAvailable(o))return null;extra+=o[2];}
 const p=products[draft.base],craftCost=100000+Math.round(p.cost*.12)+extra,cost=p.cost+craftCost,price=Math.round(cost*1.32/1000)*1000;return {craftCost,cost,price,profit:price-cost};
}
function finishCustom(draft=workshopDraft){
 if(S.stage<6||S.phase!=='prepare'||editing!==null||!S.furniture.some(f=>f.t===11)||S.custom.items.length>=12)return false;
 const q=customQuote(draft);if(!q)return false;if(!assetGate(productAssetKeys(draft.base),()=>finishCustom(draft)))return false;if(S.stock[draft.base]<1){toast('기본 악기 재고 1개가 필요해요');return false;}if(S.money<q.craftCost){toast('제작비가 부족해요');return false;}
 // Only this commit path spends stock and cash; rotating/changing options/canceling is free.
 S.stock[draft.base]--;S.money-=q.craftCost;S.expenses+=q.craftCost;const item={id:S.custom.nextId++,base:draft.base,options:{...draft.options},cost:q.cost,price:q.price,day:S.day,displayId:null};S.custom.items.push(item);S.custom.crafted++;S.custom.totalCost+=q.cost;noteStockChange(draft.base);expansionChanged();toast('커스텀 악기를 완성했어요 · 특별 전시대에 진열하세요');if($('workshopDialog').open)renderWorkshop();return item;
}
function upgradeWorkbench(){const l=S.custom.benchLevel;if(l>=3||S.stage<6||S.phase!=='prepare'||editing!==null||!S.furniture.some(f=>f.t===11))return false;const cost=Atelier.upgrades[l];if(S.money<cost)return false;S.money-=cost;S.expenses+=cost;S.custom.benchLevel++;expansionChanged();if($('workshopDialog').open)renderWorkshop();return true;}
function setCustomDisplay(itemId,displayId){if(S.phase!=='prepare'||editing!==null)return false;const item=S.custom.items.find(i=>i.id===itemId);if(!item)return false;if(displayId!==null){const f=S.furniture.find(f=>f.id===displayId&&f.t===12);if(!f||!inVIP(f))return false;for(const i of S.custom.items)if(i.displayId===displayId)i.displayId=null;}item.displayId=displayId;expansionChanged();return true;}
function displayedCustoms(){return S.custom.items.filter(i=>i.displayId!==null&&S.furniture.some(f=>f.id===i.displayId&&f.t===12&&inVIP(f)&&inVIP(Furniture.front(f))&&vipNear(f)));}
function vipMatch(profile,item){const family=products[item.base].family;return (profile.family===null||profile.family===family)&&item.price<=profile.budget;}
function spawnVIP(){
 if(S.phase!=='open'||S.time<20||S.time>100||S.vip.guest||S.vip.visitedDay===S.day||!vipReady())return false;
 const index=S.vip.nextProfile,profile=Atelier.profiles[index],d=vipDoor(),route=vipPath(ENTRY,d.inside);if(!route)return false;
 S.vip.guest={profile:index,x:ENTRY.x,y:ENTRY.y,path:route,state:'enter',timer:0,gait:0,facing:5,velocity:0,walkSpeed:1.18,bought:false};S.vip.nextProfile=(index+1)%3;S.vip.lastProfile=index;S.vip.visitedDay=S.day;S.vip.visits++;S.visitors++;S.vip.lastResult=profile.name+' 방문 중';toast('VIP '+profile.name+'님이 별도로 방문했어요');save();renderDirty=true;return true;
}
function vipGo(g,f,state){const n=vipNear(f,g);if(!n)return false;g.path=n.path;g.stationId=f.id;g.state=state;g.timer=0;g.lookTarget={x:f.x,y:f.y};return true;}
function vipLeave(g,result){g.state='leave';g.path=[...(vipPath(g,ENTRY)??[]),exitPoint()];g.timer=0;S.vip.lastResult=result;save();}
function updateVIP(dt){
 if(S.phase==='open')spawnVIP();const g=S.vip.guest;if(!g)return;Motion.advance(g,dt);if(g.path.length)return;g.timer+=dt;const profile=Atelier.profiles[g.profile];
 if(S.phase==='closing'&&!['leave','consult'].includes(g.state)){vipLeave(g,profile.name+' · 영업 마감으로 다음 방문 예정');return;}
 if(g.state==='enter'&&g.timer>1){const items=displayedCustoms().filter(i=>vipMatch(profile,i));items.sort((a,b)=>vipPreference(profile,b)-vipPreference(profile,a)||a.price-b.price);const item=items[0];if(!item){vipLeave(g,profile.name+' · 취향과 예산에 맞는 전시 악기 없음');return;}g.itemId=item.id;const f=S.furniture.find(f=>f.id===item.displayId);if(!vipGo(g,f,'browse'))vipLeave(g,'전시대 통로 확인 필요');}
 else if(g.state==='browse'&&g.timer>3){const f=S.furniture.find(f=>f.t===13&&inVIP(f)&&vipNear(f,g));if(!f||!vipGo(g,f,'try'))vipLeave(g,'시연석 통로 확인 필요');}
 else if(g.state==='try'&&g.timer>5){Sound.play('try',profile.family==='bass'?1:0);const f=S.furniture.find(f=>f.t===14&&inVIP(f)&&vipNear(f,g));if(!f||!vipGo(g,f,'consult'))vipLeave(g,'상담 테이블 통로 확인 필요');}
 else if(g.state==='consult'&&g.timer>4){const item=S.custom.items.find(i=>i.id===g.itemId);if(item&&item.displayId!==null&&vipMatch(profile,item)&&!g.bought){S.custom.items=S.custom.items.filter(i=>i!==item);S.money+=item.price;S.revenue+=item.price;S.totalRevenue+=item.price;S.sold++;S.totalSales++;S.custom.sold++;S.custom.totalRevenue+=item.price;S.vip.sales++;S.vip.revenue+=item.price;g.bought=true;gainReputation(.3);clearFurnitureBodyCache();atelierSprites.clear();Sound.play('sale');floaters.push({x:P(g.x,g.y).x,y:P(g.x,g.y).y-65,text:'+'+compactMoney(item.price),life:2.5});vipLeave(g,profile.name+' · 커스텀 악기 구매 '+money(item.price));}else vipLeave(g,profile.name+' · 다음 방문 예정');ui();}
 else if(g.state==='leave'&&g.timer>.3){S.vip.guest=null;save();renderDirty=true;}
}
function vipPreference(p,i){return ['color','wood','pickup'].reduce((n,k)=>n+Number(i.options[k]===p[k]),0);}
function validateExpansionSave(v,s,rules){
 const def=expansionDefaults(),safe=n=>Number.isSafeInteger(n)&&n>=0&&n<=1e15,fail=t=>{throw Error(t)},design=v.design??def.design;
 if(!design||!Atelier.walls[design.wall]||!Atelier.walls[design.vipWall]||!Atelier.floors[design.floor]||!Atelier.floors[design.vipFloor]||!Array.isArray(design.wallItems)||design.wallItems.length>20)fail('인테리어 저장');
 const used=new Set();const size=rules.stageSizes[s.stage];s.design={wall:design.wall,floor:design.floor,vipFloor:design.vipFloor,vipWall:design.vipWall,wallItems:design.wallItems.map(i=>{const key=i.wall+':'+i.slot;if(!['x','y'].includes(i.wall)||!Number.isInteger(i.slot)||i.slot<0||i.slot>=Math.floor((size[i.wall==='x'?0:1]-1)/2)||!Atelier.decorations[i.type]||used.has(key))fail('벽 장식 위치');used.add(key);return {wall:i.wall,slot:i.slot,type:i.type};})};
 const vip=v.vip??def.vip;if(!vip||!['visitedDay','visits','sales','revenue'].every(k=>safe(vip[k]))||vip.visitedDay>s.day||!Number.isInteger(vip.nextProfile)||vip.nextProfile<0||vip.nextProfile>2||!Number.isInteger(vip.lastProfile)||vip.lastProfile< -1||vip.lastProfile>2||typeof vip.lastResult!=='string'||vip.lastResult.length>150||vip.sales>vip.visits)fail('VIP 기록');
 let z=null;if(vip.zone!==null){z=vip.zone;if(s.stage<6||!z||!['x','y','w','h','doorAt'].every(k=>Number.isInteger(z[k]))||z.w<4||z.h<4||z.w>8||z.h>8||z.x<0||z.y<0||z.x+z.w>size[0]||z.y+z.h>size[1]||!['left','right','top','bottom'].includes(z.doorSide)||z.doorAt<1||z.doorAt>(['left','right'].includes(z.doorSide)?z.h:z.w)-2)fail('VIP 구역');z={x:z.x,y:z.y,w:z.w,h:z.h,doorSide:z.doorSide,doorAt:z.doorAt};const d=vipDoor(z);if(d.outside.x<0||d.outside.y<0||d.outside.x>=size[0]||d.outside.y>=size[1]||s.furniture.some(f=>[d.inside,d.outside].some(p=>Furniture.blocks(f,p.x,p.y)))||s.furniture.some(f=>inVIP(f,z)&&[0,1,4,5,6,7,11].includes(f.t)))fail('VIP 출입 통로');}
 const c=v.custom??def.custom;if(!c||!Number.isInteger(c.benchLevel)||c.benchLevel<1||c.benchLevel>3||!Number.isSafeInteger(c.nextId)||c.nextId<1||!['crafted','sold','totalCost','totalRevenue'].every(k=>safe(c[k]))||!Array.isArray(c.items)||c.items.length>12||c.crafted!==c.items.length+c.sold||(s.stage<6&&(c.crafted||c.benchLevel!==1||s.furniture.some(f=>f.t>=11))))fail('커스텀 기록');
 const itemIds=new Set(),displays=new Set();s.custom={benchLevel:c.benchLevel,nextId:c.nextId,crafted:c.crafted,sold:c.sold,totalCost:c.totalCost,totalRevenue:c.totalRevenue,items:c.items.map(i=>{
  const p=products[i.base];if(!Number.isSafeInteger(i.id)||i.id<1||i.id>=c.nextId||itemIds.has(i.id)||!p||!['electric','bass'].includes(p.family)||p.mission||p.unlock>s.stage||p.tier>(c.benchLevel===3?5:c.benchLevel-1)||!safe(i.day)||i.day<1||i.day>s.day)fail('커스텀 악기');itemIds.add(i.id);let extra=0;const options={};for(const [key,rows]of Object.entries(Atelier.options)){const o=rows.find(o=>o[0]===i.options?.[key]);if(!o||o[3]>=c.benchLevel)fail('제작 옵션');extra+=o[2];options[key]=o[0];}const cost=p.cost+100000+Math.round(p.cost*.12)+extra,price=Math.round(cost*1.32/1000)*1000;if(i.cost!==cost||i.price!==price)fail('제작 가격');if(i.displayId!==null){if(!Number.isSafeInteger(i.displayId)||displays.has(i.displayId)||!s.furniture.some(f=>f.id===i.displayId&&f.t===12))fail('특별 전시 연결');displays.add(i.displayId);}return {id:i.id,base:i.base,options,cost,price,day:i.day,displayId:i.displayId};})};
 if(c.totalCost<s.custom.items.reduce((n,i)=>n+i.cost,0)||vip.sales!==c.sold||vip.revenue!==c.totalRevenue)fail('커스텀 거래 기록');
 let guest=null;if(vip.guest!==null){const g=vip.guest,point=p=>p&&Number.isFinite(p.x)&&Number.isFinite(p.y)&&p.x>=-1&&p.x<=size[0]+1&&p.y>=-1&&p.y<=size[1]+1;if(!z||!['open','closing'].includes(s.phase)||!g||!Number.isInteger(g.profile)||g.profile<0||g.profile>2||!point(g)||!Array.isArray(g.path)||g.path.length>256||!g.path.every(point)||!['enter','browse','try','consult','leave'].includes(g.state)||!Number.isFinite(g.timer)||g.timer<0||g.timer>1000||typeof g.bought!=='boolean'||vip.visitedDay!==s.day)fail('VIP 방문 상태');if(g.itemId!==undefined&&(!Number.isSafeInteger(g.itemId)||g.itemId<1||g.itemId>=c.nextId))fail('VIP 선택 악기');guest={profile:g.profile,x:g.x,y:g.y,path:g.path.map(p=>({x:p.x,y:p.y})),state:g.state,timer:g.timer,bought:g.bought,walkSpeed:1.18,gait:Number.isFinite(g.gait)?g.gait:0,facing:Number.isInteger(g.facing)?g.facing:5,stationId:g.stationId,itemId:g.itemId,velocity:0};}
 s.vip={zone:z,visitedDay:vip.visitedDay,nextProfile:vip.nextProfile,lastProfile:vip.lastProfile,guest,visits:vip.visits,sales:vip.sales,revenue:vip.revenue,lastResult:vip.lastResult};
}
function paintInteriorFloor(){
 const z=S.vip.zone;for(let y=0;y<M;y++)for(let x=0;x<N;x++){const id=inVIP({x,y},z)?S.design.vipFloor:S.design.floor,def=Atelier.floors[id];if(!def.tint)continue;const q=P(x,y),points=[{x:q.x,y:q.y-17},{x:q.x+34,y:q.y},{x:q.x,y:q.y+17},{x:q.x-34,y:q.y}];ctx.save();ctx.globalCompositeOperation='multiply';poly(points,def.tint);ctx.restore();if(id==='herringbone'){ctx.strokeStyle='#805b3e55';ctx.lineWidth=.7;for(let n=-12;n<=12;n+=8){ctx.beginPath();ctx.moveTo(q.x-24,q.y+n*.45);ctx.lineTo(q.x,q.y+n*.45+10);ctx.lineTo(q.x+24,q.y+n*.45-2);ctx.stroke();}}}
}
function vipPartitions(){const z=S.vip.zone;if(!z)return [];const objects=[],d=vipDoor(z);for(const side of ['left','right','top','bottom']){const n=['left','right'].includes(side)?z.h:z.w;for(let i=0;i<n;i++){let a,b;if(side==='left'||side==='right'){const x=side==='left'?z.x-.5:z.x+z.w-.5;a={x,y:z.y+i-.5};b={x,y:z.y+i+.5};if(x===-.5||x===N-.5)continue;}else{const y=side==='top'?z.y-.5:z.y+z.h-.5;a={x:z.x+i-.5,y};b={x:z.x+i+.5,y};if(y===-.5||y===M-.5)continue;}const door=side===z.doorSide&&i===z.doorAt;objects.push({depth:(a.x+a.y+b.x+b.y)/2+.08,draw:()=>paintPartition(a,b,door)});}}
 if(S.vip.guest){const g=S.vip.guest;objects.push({depth:g.x+g.y+.15,draw:()=>drawVIP(g)});}return objects;
}
let vipSpriteImage=null;const vipSpriteClips=[[[[18,33,150,306],[182,34,148,304],[346,34,149,305]],[[519,34,149,306],[691,34,144,304],[858,34,149,306]],[[1025,34,170,303],[1195,35,146,302],[1366,34,149,303]]],[[[19,366,150,304],[192,366,124,302],[345,368,149,301]],[[522,368,135,304],[698,367,121,302],[856,368,168,304]],[[1024,368,171,300],[1195,370,144,299],[1367,369,150,299]]],[[[18,689,150,312],[182,693,145,307],[345,691,150,310]],[[522,694,140,309],[688,694,142,306],[854,695,170,307]],[[1024,696,171,304],[1195,697,137,304],[1365,697,150,303]]]];
function vipFrame(profile,dir,gait,moving){const row=dir===4||dir===6?2:dir===2||dir===3||dir===7?1:0,frames=[0,1,2,1],n=moving?frames[((Math.floor(gait*4)%4)+4)%4]:1,clip=vipSpriteClips[profile][row][n];return {image:vipSpriteImage,clip,anchor:.5,sourceHeight:clip[3],footMargin:0,flip:dir===1||dir===3||dir===6,natural:true};}
function drawVIP(g){if(!vipSpriteImage?.complete||!vipSpriteImage.naturalWidth)return;const q=P(g.x,g.y);ellipse(q.x,q.y+1,9,3,'#403b2528');ctx.save();ctx.translate(q.x,q.y);ctx.scale(.8,.8);drawFullCharacter(ctx,vipFrame(g.profile,g.facing,g.gait,!!g.moving),77,g.gait,g.moving,1);text('VIP',0,-85,10,'#af8b35');if(g.state==='try'&&!g.moving){const item=S.custom.items.find(i=>i.id===g.itemId);if(item){ctx.save();ctx.translate(22,-4);miniCustom(ctx,item,42);ctx.restore();}text('♫',28,-62,14,'#d4b66a');}if(g.bought){rect(14,-23,12,17,'#ead6aa');}ctx.restore();}
const atelierSprites=new Map();
function atelierFurnitureSprite(f){const item=f.t===12?S.custom.items.find(i=>i.displayId===f.id):null,key=[f.t,f.dir??0,S.custom.benchLevel,item?JSON.stringify([item.base,item.options]):'empty'].join('|');let im=atelierSprites.get(key);if(!im){im=document.createElement('canvas');im.width=300;im.height=360;const c=im.getContext('2d');c.scale(3,3);c.translate(50,95);paintAtelierFurniture(c,f,item);im.complete=true;im.naturalWidth=300;im.naturalHeight=360;atelierSprites.set(key,im);}const q=P(f.x,f.y);return {image:im,sx:0,sy:0,sw:300,sh:360,flip:false,rect:{x:q.x-50,y:q.y-95,w:100,h:120}};}
let atelierFurnitureAtlas=null;const AtelierFurnitureClips=[[[37,70,348,404],[442,70,279,393],[782,135,320,328],[1140,98,361,391]],[[37,539,352,411],[435,539,280,375],[776,637,322,304],[1141,593,360,368]]];const AtelierCalibration=[[{"anchor":[173.5,303.5],"sx":1.044,"sy":0.11599999999999999,"axes":[0.406,-0.638]},{"anchor":[140.5,342.5],"sx":1.221,"sy":-0.025500000000000023,"axes":[0.636,-0.585]},{"anchor":[161,275],"sx":0.998,"sy":0.11299999999999999,"axes":[0.386,-0.612]},{"anchor":[185,289],"sx":0.9850000000000001,"sy":0.04450000000000001,"axes":[0.448,-0.537]}],[{"anchor":[174,308.5],"sx":1.09,"sy":0.139,"axes":[0.406,-0.684]},{"anchor":[144.5,325.5],"sx":1.216,"sy":-0.03700000000000003,"axes":[0.645,-0.571]},{"anchor":[165,228],"sx":1.003,"sy":0.0875,"axes":[0.414,-0.589]},{"anchor":[178.5,271.5],"sx":1.023,"sy":0.06449999999999997,"axes":[0.447,-0.576]}]];
function paintAtelierFurniture(c,f,item){const im=atelierFurnitureAtlas;if(!im?.complete||!im.naturalWidth)return;const dir=Furniture.direction(f),row=dir>=2?1:0,col=f.t-11,clip=AtelierFurnitureClips[row][col],cal=AtelierCalibration[row][col],h=({11:64,12:76,13:58,14:55})[f.t],k=Math.min(h/(clip[3]+Math.abs(cal.sy)*clip[2]),76/(cal.sx*clip[2])),[ax,ay]=cal.anchor;c.save();if(dir===1||dir===3)c.scale(-1,1);c.save();c.transform(k*cal.sx,k*cal.sy,0,k,-k*cal.sx*ax,-k*(ay+cal.sy*ax));c.drawImage(im,...clip,0,0,clip[2],clip[3]);c.restore();if(f.t===12&&item){c.save();c.translate(1,-12);miniCustom(c,item,48,dir>=2);c.restore();}c.restore();}
function atelierPanel(){const locked=S.stage<6,ready=vipReady(),p=Atelier.profiles[S.vip.nextProfile];return `<section class="atelier-summary operation-card"><div class="operation-title"><b>VIP · 커스텀 공방</b><small>${locked?'7단계 해금':ready?'VIP 운영 가능':'VIP 준비 중'}</small></div>${locked?'<p>7단계에서 전용 구역과 제작대를 사용할 수 있어요.</p>':`<p>${escapeHTML(S.vip.guest?Atelier.profiles[S.vip.guest.profile].name+' 방문 중':S.vip.visitedDay===S.day?S.vip.lastResult:'다음 VIP · '+p.name+' / '+p.role)}</p><small>${ready?'일반 손님과 별도 · 하루 최대 1명 · 11:40 이후 방문':escapeHTML(vipRequirements()[0])}</small>`}<div class="atelier-actions"><button data-atelier="design">인테리어 · VIP 구역</button><button data-atelier="workshop" ${locked?'disabled':''}>커스텀 제작</button></div></section>`;}
function renderInterior(){const z=S.vip.zone,d=S.design,prep=S.phase==='prepare'&&editing===null,options=(obj,current)=>Object.entries(obj).map(([id,o])=>`<option value="${id}" ${id===current?'selected':''}>${o.name}</option>`).join('');$('interiorBody').innerHTML=`<p class="sub">색상·바닥·벽 장식은 능력치 없이 자유롭게 변경해요.</p><section class="interior-section"><h3>매장 스타일</h3><div class="interior-grid"><label>매장 벽지<select data-design="wall" ${!prep?'disabled':''}>${options(Atelier.walls,d.wall)}</select></label><label>매장 바닥<select data-design="floor" ${!prep?'disabled':''}>${options(Atelier.floors,d.floor)}</select></label><label>VIP 칸막이<select data-design="vipWall" ${!prep?'disabled':''}>${options(Atelier.walls,d.vipWall)}</select></label><label>VIP 바닥<select data-design="vipFloor" ${!prep?'disabled':''}>${options(Atelier.floors,d.vipFloor)}</select></label></div><small>영업 준비 중 변경 가능 · 인테리어 비용 없음</small></section>
 <section class="interior-section"><h3>뒤쪽 벽 장식</h3><p class="sub">높은 뒤쪽 벽에 설치해 가구 위로 보이게 해요.</p><div class="interior-grid"><label>벽<select id="wallSide"><option value="x">뒤쪽 오른벽</option><option value="y">뒤쪽 왼벽</option></select></label><label>위치<select id="wallSlot">${Array.from({length:Math.floor((N-1)/2)},(_,i)=>`<option value="${i}">${i+1}번 자리</option>`).join('')}</select></label><label>장식<select id="wallType">${Object.entries(Atelier.decorations).map(([k,v])=>`<option value="${k}">${v}</option>`).join('')}</select></label><button data-atelier="wall-add" ${!prep?'disabled':''}>설치 / 교체</button></div><div class="wall-installed">${d.wallItems.length?d.wallItems.map(i=>`<div>${i.wall==='x'?'오른벽':'왼벽'} ${i.slot+1} · ${Atelier.decorations[i.type]}<button data-wall-remove="${i.wall}:${i.slot}" ${!prep?'disabled':''}>제거</button></div>`).join(''):'<small>아직 설치한 벽 장식이 없어요.</small>'}</div></section>
 <section class="interior-section"><h3>VIP 구역</h3>${S.stage<6?'<p>7단계 확장 후 사용할 수 있어요.</p>':`<p>${z?z.w+'×'+z.h+'칸 · '+(z.x+1)+', '+(z.y+1)+' 위치':'원하는 위치에 4×4~8×8칸으로 지정하세요.'}</p><p class="vip-condition">${escapeHTML(vipRequirements().join(' · ')||'운영 가능 · 별도 VIP 방문')}</p><div class="atelier-actions"><button data-atelier="zone" ${!prep?'disabled':''}>${z?'위치 · 크기 다시 지정':'지도에서 구역 지정'}</button>${z?'<button data-atelier="zone-remove" '+(!prep?'disabled':'')+'>구역 해제</button>':''}</div>${z?`<div class="interior-grid"><label>문 방향<select id="vipDoorSide" ${!prep?'disabled':''}>${[['left','왼쪽 경계'],['right','오른쪽 경계'],['top','위쪽 경계'],['bottom','아래쪽 경계']].map(([id,label])=>`<option value="${id}" ${z.doorSide===id?'selected':''}>${label}</option>`).join('')}</select></label><label>문 위치<input id="vipDoorAt" type="number" min="2" max="${(['left','right'].includes(z.doorSide)?z.h:z.w)-1}" value="${z.doorAt+1}" ${!prep?'disabled':''}></label><button data-atelier="door-apply" ${!prep?'disabled':''}>문 위치 적용</button></div>`:''}<small>문 양쪽 한 칸을 비워주세요. 필수 가구 3종을 구역 안에 놓으면 VIP가 방문해요.</small>`}</section>`;}
function openInterior(){hideFurnitureQuick();renderInterior();$('interiorDialog').showModal();}
function beginVIPEdit(){if(S.stage<6||S.phase!=='prepare'||editing!==null)return false;$('interiorDialog').close();$('management').close();hideFurnitureQuick();vipEditor=true;vipAnchor=null;vipZoneDraft=null;$('vipEditBar').hidden=false;$('vipEditStatus').textContent='구역의 첫 번째 모서리를 눌러주세요';$('vipEditConfirm').disabled=true;renderDirty=true;return true;}
function finishVIPEdit(commit){if(commit&&!setVIPZone(vipZoneDraft))return false;vipEditor=false;vipAnchor=null;vipZoneDraft=null;$('vipEditBar').hidden=true;renderDirty=true;openInterior();return true;}
function drawVIPDraft(){if(!vipEditor)return;const z=vipZoneDraft;if(z){const error=zoneError(z);for(let y=z.y;y<z.y+z.h;y++)for(let x=z.x;x<z.x+z.w;x++)diamond(x,y,error?'#bc5d4c55':'#72a97c66',error?'#bd6b59':'#467654');const d=vipDoor(z);diamond(d.inside.x,d.inside.y,'#e5cb7c88','#705f3c');}else if(vipAnchor)diamond(vipAnchor.x,vipAnchor.y,'#e5cb7c88','#705f3c');}
function selectVIPTile(p){if(!vipEditor)return;if(p.x<0||p.y<0||p.x>=N||p.y>=M)return;if(!vipAnchor){vipAnchor=p;vipZoneDraft=null;$('vipEditStatus').textContent='반대쪽 모서리를 눌러주세요';}else{const x=Math.min(p.x,vipAnchor.x),y=Math.min(p.y,vipAnchor.y),w=Math.abs(p.x-vipAnchor.x)+1,h=Math.abs(p.y-vipAnchor.y)+1;let side=x>0?'left':y>0?'top':x+w<N?'right':'bottom';vipZoneDraft={x,y,w,h,doorSide:side,doorAt:Math.max(1,Math.floor((['left','right'].includes(side)?h:w)/2))};const error=zoneError(vipZoneDraft);$('vipEditStatus').textContent=w+'×'+h+'칸 · '+(error||'배치 가능 · 문 위치는 다음 화면에서 조절');$('vipEditConfirm').disabled=!!error;vipAnchor=null;}renderDirty=true;}
function addWallItem(wall,slot,type){if(S.phase!=='prepare'||editing!==null||!['x','y'].includes(wall)||!Number.isInteger(slot)||slot<0||slot>=Math.floor(((wall==='x'?N:M)-1)/2)||!Atelier.decorations[type])return false;S.design.wallItems=S.design.wallItems.filter(i=>i.wall!==wall||i.slot!==slot);S.design.wallItems.push({wall,slot,type});expansionChanged();return true;}
function openWorkshop(){if(S.stage<6)return false;if(!S.furniture.some(f=>f.t===11)){setTab('furniture');toast('커스텀 제작대를 먼저 배치하세요');return false;}if(!assetGate(customBases().flatMap(productAssetKeys),openWorkshop))return false;hideFurnitureQuick();workshopDraft={base:customBases()[0],options:customDefaults()};workshopAngle=0;renderWorkshop();$('workshopDialog').showModal();return true;}
function renderWorkshop(){if(!workshopDraft)return;const draft=workshopDraft,q=customQuote(draft),prep=S.phase==='prepare'&&editing===null,l=S.custom.benchLevel,labels={color:'바디 색상',wood:'목재',pickup:'픽업',hardware:'하드웨어',finish:'마감'};$('workshopBody').innerHTML=`<div class="workshop-layout"><section class="instrument-view"><canvas id="customModel" width="720" height="840" aria-label="드래그해서 회전해서 보는 기존 악기 이미지 기반 미리보기"></canvas><p>드래그해서 회전 · 기존 악기 원본 사용</p><small>2D 원본 기반 · 정면 / 뒷면 보기</small><div><button data-model-turn="-30" aria-label="왼쪽으로 회전">↶</button><button data-model-turn="0">정면</button><button data-model-turn="30" aria-label="오른쪽으로 회전">↷</button></div></section><section class="workshop-options"><div class="operation-title"><b>제작대 ${l}등급</b><small>${['입문용','중급형까지','모든 등급'][l-1]}</small></div><label>기본 악기<select id="customBase">${customBases().map(i=>`<option value="${i}" ${draft.base===i?'selected':''}>${products[i].name} · 재고 ${S.stock[i]}</option>`).join('')}</select></label>${Object.entries(Atelier.options).map(([key,rows])=>`<label>${labels[key]}<select data-custom-option="${key}">${rows.filter(customOptionAvailable).map(o=>`<option value="${o[0]}" ${draft.options[key]===o[0]?'selected':''}>${o[1]}${o[2]?' · +'+compactMoney(o[2]):''}</option>`).join('')}</select></label>`).join('')}<div class="custom-price"><span>완료 시 제작비 <b>${q?money(q.craftCost):'옵션 확인'}</b></span><span>사용할 재고 <b>기본 악기 1개</b></span><span>전시 판매가 <b>${q?money(q.price):'-'}</b></span><small>기본 악기 기준 원가 포함 32% 가산 · 제작비만 현금 차감</small></div><button class="primary" data-atelier="craft-finish" ${!prep||!q||S.stock[draft.base]<1||S.money<(q?.craftCost??Infinity)||S.custom.items.length>=12?'disabled':''}>제작 완료</button><small>옵션 변경과 회전은 무료 · 완성품 최대 12개 보관</small>${l<3?`<button class="secondary" data-atelier="bench-upgrade" ${!prep||S.money<Atelier.upgrades[l]?'disabled':''}>${l+1}등급 업그레이드 · ${money(Atelier.upgrades[l])}</button><small>${l===1?'중급 악기 · 월넛 · 노이즈리스 · 블랙 · 글로스':'모든 등급 · 마호가니 · 액티브 · 골드 · 에이징'} 추가</small>`:''}</section></div><section class="custom-inventory"><h3>완성 악기 ${S.custom.items.length}/12</h3>${customInventoryHTML()}</section>`;bindModelDrag();drawCustomModel();}
function customInventoryHTML(){return S.custom.items.length?S.custom.items.map(i=>`<div class="custom-item"><canvas data-custom-art="${i.id}" width="100" height="140"></canvas><div><b>${products[i.base].name} #${i.id}</b><small>${Atelier.options.color.find(o=>o[0]===i.options.color)[1]} · ${Atelier.options.wood.find(o=>o[0]===i.options.wood)[1]}</small><strong>${money(i.price)}</strong></div><label>진열<select data-custom-display="${i.id}" ${S.phase!=='prepare'?'disabled':''}><option value="">보관</option>${S.furniture.filter(f=>f.t===12&&inVIP(f)).map(f=>`<option value="${f.id}" ${i.displayId===f.id?'selected':''}>전시대 #${f.id}${S.custom.items.some(q=>q.id!==i.id&&q.displayId===f.id)?' · 교체':''}</option>`).join('')}</select></label></div>`).join(''):'<p class="sub">완성한 커스텀 악기를 이곳에서 특별 전시대에 연결하세요.</p>';}
function drawCustomInventory(){document.querySelectorAll('[data-custom-art]').forEach(el=>{const item=S.custom.items.find(i=>i.id===+el.dataset.customArt);if(!item)return;const c=el.getContext('2d');c.clearRect(0,0,el.width,el.height);c.save();c.translate(50,125);miniCustom(c,item,110);c.restore();});}
function openCustomDisplays(){hideFurnitureQuick();$('customDisplayBody').innerHTML='<p class="sub">전시대 하나에 악기 한 대를 진열해요. 교체하면 기존 악기는 보관됩니다.</p>'+customInventoryHTML();drawCustomInventory();$('customDisplayDialog').showModal();}
function vipGuestCards(){return `<section class="vip-guest-list"><h3>별도 방문 VIP</h3><p class="sub">7단계 · VIP 구역 완성 후 하루 최대 1명. 호감도와 별도로 방문해요.</p>${Atelier.profiles.map((p,i)=>`<div class="vip-profile"><canvas data-vip-portrait="${i}" width="100" height="120"></canvas><div><b>${p.name} · ${p.role}</b><small>${p.family==='electric'?'일렉 기타':p.family==='bass'?'베이스':'기타·베이스 모두'} · 예산 ${money(p.budget)}</small><small>선호 ${Atelier.options.color.find(o=>o[0]===p.color)[1]} · ${Atelier.options.wood.find(o=>o[0]===p.wood)[1]} · ${Atelier.options.pickup.find(o=>o[0]===p.pickup)[1]}</small><span>${S.vip.guest?.profile===i?'현재 방문 중':S.vip.nextProfile===i?'다음 방문 예정':''}</span></div></div>`).join('')}<p class="sub">${escapeHTML(S.vip.lastResult||'아직 VIP 방문 기록이 없어요.')}</p></section>`;}
function drawVIPPortraits(){if(!vipSpriteImage?.complete||!vipSpriteImage.naturalWidth)return;for(const el of document.querySelectorAll('[data-vip-portrait]')){const c=el.getContext('2d');c.clearRect(0,0,100,120);c.save();c.translate(50,117);drawFullCharacter(c,vipFrame(+el.dataset.vipPortrait,0,0,false),110);c.restore();}}
function bindModelDrag(){const el=$('customModel');let drag=null;el.onpointerdown=e=>{drag={x:e.clientX,angle:workshopAngle};el.setPointerCapture(e.pointerId);};el.onpointermove=e=>{if(!drag)return;workshopAngle=drag.angle+(e.clientX-drag.x)*.8;drawCustomModel();};el.onpointerup=el.onpointercancel=()=>drag=null;}

// Source instrument pixels remain the art for both the workshop and finished display.
// Layered customization: source art, pigments, wood grain, pickups, metal and finish.
// No pixel readback or external image URLs; works with an origin-tainted source canvas too.
const customTextureCache=new Map();
const CustomCoverage={"0:0":{"w":183,"h":494,"rows":[[241,[36,5]],[242,[36,1,39,4]],[243,[36,2,41,4]],[244,[36,3,41,4]],[245,[35,10]],[246,[34,3,39,6]],[247,[31,6,38,5]],[248,[28,15]],[249,[26,17]],[250,[25,18]],[251,[24,20]],[252,[23,7,31,13]],[253,[22,7,30,15]],[254,[21,7,29,16]],[255,[21,24]],[256,[20,6,27,19]],[257,[19,6,26,20]],[258,[19,27]],[259,[18,6,25,21]],[260,[18,28]],[261,[18,5,24,22]],[262,[17,29]],[263,[17,5,23,23]],[264,[17,5,23,23]],[265,[16,30]],[266,[16,30]],[267,[16,5,22,24]],[268,[16,5,22,24]],[269,[16,30]],[270,[15,31]],[271,[15,32]],[272,[15,32]],[273,[15,32]],[274,[15,33]],[275,[15,33]],[276,[15,34,150,9]],[277,[15,34,148,13]],[278,[15,35,147,15]],[279,[15,36,146,17]],[280,[15,37,146,18]],[281,[15,38,73,1,145,6,152,13]],[282,[15,39,72,2,145,5,151,14]],[283,[15,40,71,3,144,22]],[284,[15,42,69,5,144,22]],[285,[15,45,67,7,144,11,156,11]],[286,[15,59,144,10,157,10]],[287,[15,59,144,9,157,11]],[288,[15,59,143,10,158,10]],[289,[15,59,143,10,158,10]],[290,[16,58,110,1,143,10,158,11]],[291,[16,58,110,1,143,10,159,10]],[292,[16,58,110,1,143,9,159,10]],[293,[16,58,110,1,142,10,159,10]],[294,[16,58,110,1,142,10,159,11]],[295,[16,58,110,1,141,11,160,10]],[296,[17,57,110,1,141,11,160,10]],[297,[17,47,69,5,110,1,141,10,160,10]],[298,[17,45,71,3,110,1,140,11,160,10]],[299,[17,45,73,1,110,1,140,11,160,10]],[300,[17,45,110,1,139,11,160,10]],[301,[18,44,110,2,138,12,160,10]],[302,[18,44,110,2,138,11,160,10]],[303,[18,44,110,2,137,12,160,10]],[304,[18,44,110,3,136,12,160,10]],[305,[19,44,110,3,135,6,142,6,160,10]],[306,[19,44,110,4,133,7,141,6,160,10]],[307,[19,44,110,6,132,7,140,6,160,10]],[308,[20,44,110,7,130,8,139,6,159,10]],[309,[20,44,110,11,126,18,159,10]],[310,[20,44,110,33,159,10]],[311,[21,43,110,32,159,10]],[312,[21,43,110,31,159,9]],[313,[22,43,111,29,158,10]],[314,[22,43,112,26,158,10]],[315,[22,43,115,21,158,10]],[316,[23,42,117,16,157,10]],[317,[23,42,123,4,157,10]],[318,[23,42,157,10]],[319,[24,42,157,9]],[320,[24,42,156,10]],[321,[24,42,155,10]],[322,[25,41,155,10]],[323,[25,41,155,10]],[324,[25,41,154,10]],[325,[26,40,154,10]],[326,[26,40,153,11]],[327,[26,40,153,10]],[328,[27,39,153,10]],[329,[27,39,152,11]],[330,[27,39,152,10]],[331,[27,39,152,10]],[332,[28,38,151,11]],[333,[28,38,151,10]],[334,[28,38,151,10]],[335,[28,37,150,11]],[336,[28,37,150,10]],[337,[29,36,149,11]],[338,[29,36,149,11]],[339,[29,36,149,10]],[340,[29,35,148,11]],[341,[29,35,148,11]],[342,[29,35,148,10]],[343,[29,35,148,10]],[344,[29,35,148,10]],[345,[29,34,148,9]],[346,[29,34,148,9]],[347,[28,35,148,9]],[348,[28,34,148,9]],[349,[28,34,147,10]],[350,[28,34,147,10]],[351,[28,33,147,10]],[352,[27,34,147,10]],[353,[27,33,147,10]],[354,[27,33,147,10]],[355,[26,34,147,10]],[356,[26,33,148,9]],[357,[26,33,148,10]],[358,[25,33,148,10]],[359,[25,33,148,10]],[360,[24,33,148,11]],[361,[24,33,149,10]],[362,[24,33,149,10]],[363,[23,33,149,11]],[364,[23,33,149,11]],[365,[22,33,150,10]],[366,[22,33,150,11]],[367,[21,33,150,11]],[368,[20,34,151,10]],[369,[20,34,151,11]],[370,[19,35,151,11]],[371,[19,34,152,11]],[372,[18,35,152,11]],[373,[18,35,153,11]],[374,[17,35,153,11]],[375,[17,35,154,11]],[376,[16,36,154,12]],[377,[16,36,155,11]],[378,[15,36,155,12]],[379,[14,37,156,11]],[380,[14,37,157,11]],[381,[13,38,157,11]],[382,[13,37,157,12]],[383,[13,37,158,11]],[384,[12,38,158,12]],[385,[12,38,159,11]],[386,[11,39,159,12]],[387,[11,39,160,11]],[388,[10,40,160,12]],[389,[10,40,161,11]],[390,[9,41,161,12]],[391,[9,41,134,1,162,11]],[392,[8,43,133,1,162,12]],[393,[8,43,163,11]],[394,[7,44,132,1,163,12]],[395,[7,44,109,1,164,11]],[396,[7,45,164,12]],[397,[6,46,165,11]],[398,[6,46,165,12]],[399,[6,47,166,11]],[400,[5,48,166,11]],[401,[5,49,167,11]],[402,[5,50,127,1,167,11]],[403,[4,51,168,10]],[404,[4,52,168,10]],[405,[4,53,112,1,168,11]],[406,[3,55,169,10]],[407,[3,56,113,1,169,10]],[408,[3,58,113,1,169,11]],[409,[2,61,113,1,170,10]],[410,[2,66,113,2,170,10]],[411,[2,70,113,4,120,9,170,11]],[412,[2,70,113,3,119,14,171,10]],[413,[1,71,112,2,118,17,171,10]],[414,[1,71,117,20,172,9]],[415,[1,71,116,23,172,10]],[416,[1,71,116,25,172,10]],[417,[1,71,117,26,172,10]],[418,[1,71,117,28,172,10]],[419,[0,72,112,2,117,29,172,10]],[420,[0,72,112,1,117,31,173,10]],[421,[0,72,106,1,112,1,117,32,173,10]],[422,[0,72,117,33,173,10]],[423,[0,72,117,35,173,10]],[424,[0,72,117,36,173,10]],[425,[0,72,117,37,173,10]],[426,[0,73,117,38,174,9]],[427,[0,132,136,21,174,9]],[428,[0,130,138,20,173,10]],[429,[0,129,141,18,173,10]],[430,[0,128,143,18,173,10]],[431,[0,128,145,17,172,11]],[432,[0,128,146,19,169,1,171,12]],[433,[0,127,148,35]],[434,[0,127,149,34]],[435,[0,128,150,33]],[436,[0,128,151,32]],[437,[0,128,152,31]],[438,[0,129,150,1,153,30]],[439,[0,129,150,2,154,29]],[440,[0,130,151,2,155,28]],[441,[1,130,153,1,156,27]],[442,[1,131,157,26]],[443,[1,132,157,26]],[444,[1,133,158,25]],[445,[1,134,159,23]],[446,[2,134,159,23]],[447,[2,135,160,22]],[448,[2,137,160,22]],[449,[2,138,161,21]],[450,[3,139,161,20]],[451,[3,140,161,20]],[452,[3,142,162,19]],[453,[4,143,162,18]],[454,[4,145,161,19]],[455,[5,146,161,18]],[456,[5,150,159,20]],[457,[6,173]],[458,[7,171]],[459,[7,171]],[460,[8,169]],[461,[9,168]],[462,[9,167]],[463,[10,165]],[464,[11,164]],[465,[12,162]],[466,[12,161]],[467,[13,159]],[468,[14,158]],[469,[15,156]],[470,[17,153]],[471,[18,150]],[472,[19,148]],[473,[21,145]],[474,[22,143]],[475,[24,139]],[476,[25,137]],[477,[27,134]],[478,[29,131]],[479,[31,127]],[480,[33,122]],[481,[35,118]],[482,[38,112]],[483,[41,107]],[484,[45,100]],[485,[50,91]],[486,[56,78]],[487,[67,56]],[488,[88,4,93,5]],[489,[89,8]],[490,[87,11]],[491,[86,4,93,6]],[492,[87,12]],[493,[88,10]]]},"0:1":{"w":192,"h":485,"rows":[[224,[151,1]],[225,[148,6]],[226,[146,2,151,3]],[227,[145,2,151,3]],[228,[144,4,151,3]],[229,[144,5,150,5]],[230,[146,3,152,8]],[231,[147,2,152,10]],[232,[147,17]],[233,[147,18]],[234,[146,20]],[235,[145,22]],[236,[145,6,152,16]],[237,[145,6,152,17]],[238,[144,6,151,18]],[239,[144,26]],[240,[144,27]],[241,[144,28]],[242,[144,28]],[243,[144,29]],[244,[144,29]],[245,[144,30]],[246,[144,30]],[247,[144,30]],[248,[144,30]],[249,[144,31]],[250,[144,31]],[251,[144,31]],[252,[144,31]],[253,[144,32]],[254,[143,33]],[255,[143,33]],[256,[143,33]],[257,[143,33]],[258,[142,34]],[259,[142,34]],[260,[32,8,142,34]],[261,[30,12,141,35]],[262,[29,14,141,36]],[263,[28,16,140,37]],[264,[27,17,140,36]],[265,[26,19,139,37]],[266,[25,20,138,38]],[267,[24,7,32,14,137,39]],[268,[24,6,31,15,136,40]],[269,[23,6,30,16,135,41]],[270,[23,23,116,1,134,42]],[271,[22,24,116,2,133,43]],[272,[22,25,116,3,131,45]],[273,[21,26,116,7,126,50]],[274,[21,26,116,60]],[275,[21,26,116,59]],[276,[21,27,116,59]],[277,[20,28,116,59]],[278,[20,28,116,59]],[279,[20,28,116,59]],[280,[20,29,116,58]],[281,[20,29,116,58]],[282,[20,29,116,58]],[283,[20,30,116,58]],[284,[20,30,116,57]],[285,[20,31,116,57]],[286,[20,32,116,57]],[287,[20,32,116,57]],[288,[20,33,116,56]],[289,[20,34,76,1,116,56]],[290,[20,36,75,2,116,56]],[291,[20,38,73,4,116,55]],[292,[20,40,72,5,116,55]],[293,[20,42,69,8,116,55]],[294,[20,57,116,54]],[295,[20,57,116,54]],[296,[21,56,116,54]],[297,[21,56,116,53]],[298,[21,56,116,53]],[299,[21,56,116,53]],[300,[21,56,116,52]],[301,[22,55,116,52]],[302,[22,55,116,52]],[303,[22,55,116,51]],[304,[22,55,116,51]],[305,[23,54,116,51]],[306,[23,54,116,50]],[307,[24,53,116,50]],[308,[24,53,116,50]],[309,[24,53,116,49]],[310,[25,52,116,49]],[311,[25,52,116,49]],[312,[25,52,116,49]],[313,[26,51,116,48]],[314,[26,51,116,48]],[315,[26,51,116,48]],[316,[27,137]],[317,[27,136]],[318,[27,136]],[319,[28,135]],[320,[28,135]],[321,[28,135]],[322,[29,134]],[323,[29,134]],[324,[30,132]],[325,[30,132]],[326,[30,132]],[327,[30,132]],[328,[31,131]],[329,[31,132]],[330,[31,132]],[331,[31,132]],[332,[31,132]],[333,[31,132]],[334,[31,132]],[335,[31,133]],[336,[31,133]],[337,[31,133]],[338,[30,134]],[339,[30,135]],[340,[30,135]],[341,[30,135]],[342,[30,136]],[343,[29,137]],[344,[29,138]],[345,[29,138]],[346,[28,41,112,55]],[347,[28,38,116,52]],[348,[27,38,116,52]],[349,[27,38,117,52]],[350,[27,38,117,52]],[351,[26,39,117,53]],[352,[26,39,117,54]],[353,[25,40,117,54]],[354,[24,41,117,55]],[355,[24,41,117,55]],[356,[23,42,117,56]],[357,[23,42,117,56]],[358,[22,43,117,57]],[359,[22,43,117,57]],[360,[21,44,117,58]],[361,[21,44,117,58]],[362,[20,45,117,59]],[363,[20,45,117,59]],[364,[19,46,117,60]],[365,[19,46,117,61]],[366,[18,47,117,61]],[367,[18,47,117,62]],[368,[17,48,117,62]],[369,[16,49,117,62]],[370,[16,49,117,63]],[371,[15,50,117,63]],[372,[14,51,117,64]],[373,[14,51,117,64]],[374,[13,52,117,65]],[375,[13,52,117,65]],[376,[12,53,117,65]],[377,[12,53,117,66]],[378,[11,54,117,66]],[379,[11,54,117,67]],[380,[10,55,117,67]],[381,[10,55,117,68]],[382,[9,56,117,68]],[383,[9,56,117,69]],[384,[8,57,117,69]],[385,[8,57,117,69]],[386,[7,58,117,70]],[387,[7,58,117,70]],[388,[6,59,117,70]],[389,[6,59,117,71]],[390,[6,59,117,71]],[391,[5,60,117,71]],[392,[5,60,117,72]],[393,[5,60,117,72]],[394,[4,61,117,72]],[395,[4,61,117,73]],[396,[4,61,117,73]],[397,[3,62,117,73]],[398,[3,62,117,74]],[399,[3,62,117,74]],[400,[3,62,117,74]],[401,[2,63,117,74]],[402,[2,63,117,75]],[403,[2,63,117,75]],[404,[1,64,117,75]],[405,[1,64,117,75]],[406,[1,64,117,75]],[407,[1,64,117,75]],[408,[1,64,117,75]],[409,[0,65,93,1,117,75]],[410,[0,65,77,1,92,2,100,1,117,75]],[411,[0,65,77,1,92,2,117,75]],[412,[0,65,92,1,117,75]],[413,[0,65,117,75]],[414,[0,65,117,75]],[415,[0,65,117,75]],[416,[0,65,117,75]],[417,[0,65,117,75]],[418,[0,65,117,75]],[419,[0,65,117,75]],[420,[0,65,117,75]],[421,[0,65,117,75]],[422,[0,65,117,75]],[423,[0,65,117,75]],[424,[0,65,117,75]],[425,[0,66,116,76]],[426,[0,67,115,77]],[427,[0,192]],[428,[0,192]],[429,[0,192]],[430,[0,192]],[431,[0,191]],[432,[0,191]],[433,[1,190]],[434,[1,189]],[435,[1,189]],[436,[1,189]],[437,[2,188]],[438,[2,187]],[439,[2,187]],[440,[2,186]],[441,[3,185]],[442,[3,185]],[443,[3,184]],[444,[4,183]],[445,[4,182]],[446,[5,181]],[447,[5,180]],[448,[5,179]],[449,[6,178]],[450,[7,176]],[451,[7,175]],[452,[8,173]],[453,[9,172]],[454,[9,171]],[455,[10,169]],[456,[11,167]],[457,[12,166]],[458,[12,165]],[459,[13,163]],[460,[14,160]],[461,[15,158]],[462,[17,155]],[463,[18,152]],[464,[19,150]],[465,[21,146]],[466,[22,143]],[467,[24,140]],[468,[25,137]],[469,[27,133]],[470,[29,129]],[471,[32,123]],[472,[34,119]],[473,[36,114]],[474,[39,108]],[475,[43,101]],[476,[48,91]],[477,[53,80]],[478,[61,65]],[479,[82,19]],[480,[91,9]],[481,[89,3,93,1,96,5]],[482,[89,3,98,4]],[483,[89,3,95,2,98,4]],[484,[90,11]]]},"1:0":{"w":180,"h":502,"rows":[[241,[35,2,38,1]],[242,[34,2,40,2]],[243,[34,2,42,1]],[244,[35,2]],[245,[34,3,42,1]],[246,[33,3,39,1,41,1]],[247,[30,6,41,1]],[248,[28,4,33,3,38,4]],[249,[26,16]],[250,[25,19]],[251,[24,20]],[252,[23,7,33,10,44,1]],[253,[22,7,31,15]],[254,[21,6,30,14,45,1]],[255,[20,6,28,16,45,2]],[256,[20,5,27,18,46,1]],[257,[19,6,27,18,46,1]],[258,[19,6,26,19,46,2]],[259,[18,6,25,20,46,2]],[260,[18,5,25,23]],[261,[17,6,24,22,47,1]],[262,[17,6,24,22,47,1]],[263,[17,5,23,23,47,1]],[264,[16,6,23,23,47,1]],[265,[16,5,23,23,47,1]],[266,[16,5,22,26]],[267,[16,5,22,26]],[268,[15,34]],[269,[15,1,17,32]],[270,[15,1,17,30,48,1]],[271,[15,32,48,1]],[272,[15,32,48,1]],[273,[15,32,48,1]],[274,[15,34]],[275,[14,34,49,1]],[276,[14,34,49,1]],[277,[14,1,16,34]],[278,[14,37]],[279,[14,37]],[280,[14,36,51,1]],[281,[14,39]],[282,[14,39]],[283,[14,1,16,39]],[284,[14,1,16,40]],[285,[14,1,16,41]],[286,[14,44,71,2]],[287,[14,46,68,1,71,2]],[288,[14,54,69,4]],[289,[15,50,67,6]],[290,[15,54,71,2,146,3]],[291,[15,53,70,3,149,2]],[292,[15,1,17,56,142,12]],[293,[15,1,17,56,140,1,142,14]],[294,[15,1,17,56,139,1,141,16]],[295,[15,58,139,5,147,11]],[296,[16,57,138,1,140,3,146,12]],[297,[16,57,139,4,144,15]],[298,[16,44,63,10,139,3,143,17]],[299,[16,43,66,7,137,5,143,18]],[300,[16,42,68,5,137,10,150,11]],[301,[17,41,70,3,136,1,138,8,151,10]],[302,[17,40,136,10,152,9]],[303,[17,40,136,10,152,9]],[304,[17,40,136,10,153,8]],[305,[18,39,136,9,153,10]],[306,[18,40,135,10,153,10]],[307,[18,40,135,10,154,10]],[308,[18,40,135,10,154,9]],[309,[19,1,21,38,134,11,155,8]],[310,[19,1,21,38,134,10,155,8]],[311,[19,40,133,11,155,8]],[312,[20,39,133,10,155,9]],[313,[20,40,132,1,134,9,156,9]],[314,[20,40,132,11,156,9]],[315,[21,39,131,11,156,9]],[316,[21,40,108,1,130,11,156,9]],[317,[21,40,108,2,129,6,136,5,156,9]],[318,[22,39,108,3,128,6,135,5,156,9]],[319,[22,39,108,4,126,7,134,5,156,8]],[320,[23,39,108,6,124,8,133,6,156,8]],[321,[23,39,108,22,132,5,156,8]],[322,[23,39,108,21,131,6,156,8]],[323,[24,38,108,19,129,5,156,8]],[324,[24,39,108,26,156,8]],[325,[24,39,108,25,156,8]],[326,[25,38,109,22,156,8]],[327,[25,1,27,36,111,18,156,8]],[328,[26,37,114,12,156,8]],[329,[26,37,156,8]],[330,[26,37,155,9]],[331,[27,36,155,8]],[332,[27,1,29,34,155,8]],[333,[27,36,155,8]],[334,[27,36,155,8]],[335,[28,35,155,8]],[336,[28,1,30,33,155,8]],[337,[28,1,30,33,155,7]],[338,[28,35,154,8]],[339,[28,35,154,8]],[340,[29,33,154,9]],[341,[29,33,154,9]],[342,[29,33,153,8,162,1]],[343,[29,32,153,8]],[344,[29,32,153,8]],[345,[29,32,153,7]],[346,[29,32,152,8]],[347,[29,31,152,8]],[348,[28,32,152,7]],[349,[28,32,151,8]],[350,[28,31,151,8]],[351,[28,31,151,7]],[352,[28,30,151,7]],[353,[28,1,30,28,150,8]],[354,[28,30,150,9]],[355,[27,30,149,8]],[356,[27,1,29,28,149,9]],[357,[27,1,29,28,149,9]],[358,[26,2,29,27,148,8]],[359,[26,1,28,28,148,9]],[360,[26,1,28,27,148,7,156,1]],[361,[25,30,147,8]],[362,[25,1,27,28,147,7,155,1]],[363,[24,30,147,7,155,1]],[364,[24,1,26,28,146,8]],[365,[23,30,145,8]],[366,[23,30,145,8]],[367,[22,31,145,8]],[368,[22,31,145,8]],[369,[21,31,144,9]],[370,[21,1,23,29,144,8]],[371,[20,32,144,8]],[372,[20,1,22,30,143,9]],[373,[19,32,143,8]],[374,[19,1,21,30,143,8]],[375,[18,1,20,31,143,8]],[376,[18,33,143,8]],[377,[17,34,143,9]],[378,[16,34,143,9]],[379,[16,1,18,4,23,27,143,9]],[380,[15,6,22,28,143,9]],[381,[15,35,142,10]],[382,[14,6,21,29,143,9]],[383,[14,1,16,34,143,9]],[384,[13,6,20,30,143,9]],[385,[13,1,15,36,143,9]],[386,[12,1,14,4,19,32,143,9]],[387,[11,2,14,3,18,33,143,9]],[388,[11,1,13,4,18,33,143,10]],[389,[11,1,13,38,143,10]],[390,[10,1,12,39,143,10]],[391,[9,43,143,10]],[392,[9,1,11,42,143,11]],[393,[8,45,144,10]],[394,[8,46,144,11]],[395,[7,48,144,11]],[396,[7,49,144,11]],[397,[6,51,145,11]],[398,[6,52,145,11]],[399,[6,1,8,52,145,10,156,1]],[400,[5,56,146,11]],[401,[5,1,7,56,146,10]],[402,[5,1,7,58,147,10]],[403,[4,70,148,9]],[404,[4,1,6,68,76,3,147,12]],[405,[4,1,6,69,76,8,85,8,149,11]],[406,[4,1,6,69,76,8,85,9,149,11]],[407,[3,1,5,70,76,8,85,16,150,11]],[408,[3,1,5,70,76,8,85,21,150,12]],[409,[3,1,5,70,76,8,85,25,150,12]],[410,[2,2,5,70,76,8,85,27,151,12]],[411,[2,1,4,71,76,8,85,29,152,11]],[412,[2,1,4,71,76,8,85,30,152,12]],[413,[2,72,76,8,85,32,153,12]],[414,[1,1,3,71,76,8,85,34,153,11,165,1]],[415,[1,1,3,71,75,9,85,35,154,12]],[416,[1,1,3,71,76,8,85,36,156,9]],[417,[1,1,3,71,76,8,85,37,155,11]],[418,[1,1,3,71,76,8,85,38,157,9,167,1]],[419,[1,73,78,6,85,9,95,5,104,20,157,10]],[420,[0,1,2,72,79,5,85,9,95,3,104,21,158,11]],[421,[0,1,2,71,79,5,85,8,96,1,106,20,158,10,169,1]],[422,[0,1,2,70,80,3,87,6,110,16,158,11]],[423,[0,1,2,63,112,15,159,10]],[424,[0,1,2,64,112,16,160,10,171,1]],[425,[0,1,2,64,113,16,160,12]],[426,[0,1,2,64,113,17,162,9,172,1]],[427,[0,66,81,1,113,17,162,11]],[428,[0,1,2,64,81,1,113,18,162,10,173,1]],[429,[0,66,81,1,113,19,164,10]],[430,[0,1,2,64,80,3,113,20,163,10,174,1]],[431,[0,1,2,64,81,2,113,19,165,8,174,1]],[432,[0,1,2,64,78,2,81,1,98,1,100,1,112,22,164,10,175,1]],[433,[0,1,2,69,79,1,91,1,96,6,107,28,166,8,175,1]],[434,[0,1,2,70,77,3,81,1,83,1,92,1,97,5,106,29,144,1,166,9]],[435,[0,1,2,72,78,6,85,1,87,7,95,8,104,32,167,8,176,1]],[436,[0,1,2,72,78,6,85,9,95,42,166,9,176,1]],[437,[0,1,2,72,75,9,85,9,95,43,167,9]],[438,[0,1,2,72,75,9,85,9,95,43,167,9]],[439,[0,1,3,71,75,9,85,9,95,44,167,10]],[440,[3,71,75,9,85,9,95,45,168,9]],[441,[1,1,3,71,75,9,85,9,95,45,168,9,178,1]],[442,[1,1,3,71,75,9,85,9,95,46,169,8,178,1]],[443,[1,1,3,71,75,9,85,9,95,47,169,10]],[444,[1,73,75,9,85,9,95,48,169,9]],[445,[2,1,4,70,75,9,85,9,95,49,169,9]],[446,[2,1,4,70,75,9,85,9,95,49,169,9,179,1]],[447,[2,1,4,70,75,9,85,9,95,50,170,8,179,1]],[448,[2,2,5,69,75,9,85,9,95,51,170,10]],[449,[3,1,5,69,75,9,85,9,95,52,170,10]],[450,[3,1,5,69,75,9,85,9,97,5,103,1,106,42,170,10]],[451,[3,2,6,62,111,38,170,10]],[452,[4,1,6,61,112,38,170,9]],[453,[4,63,113,38,170,9]],[454,[5,1,7,60,113,38,170,9]],[455,[5,62,113,40,169,10]],[456,[6,1,8,59,113,41,169,10]],[457,[6,61,113,43,168,11]],[458,[7,1,9,58,113,45,168,11]],[459,[8,1,10,57,113,47,166,14]],[460,[8,1,10,57,113,67]],[461,[9,1,11,56,113,67]],[462,[9,2,12,55,113,65,179,1]],[463,[10,1,12,55,113,65,179,1]],[464,[11,1,13,54,112,66,179,1]],[465,[12,1,14,53,112,67]],[466,[13,1,15,52,112,65,178,1]],[467,[13,2,16,51,112,65,178,1]],[468,[14,1,17,50,112,65,178,1]],[469,[15,1,18,49,112,64,177,2]],[470,[16,1,19,48,112,64,177,1]],[471,[17,1,20,47,112,63,177,1]],[472,[18,1,21,46,112,63]],[473,[19,2,22,45,112,63]],[474,[20,2,23,44,113,61,175,2]],[475,[22,1,25,42,113,61,175,1]],[476,[23,2,26,41,113,60,174,1]],[477,[24,2,28,40,111,62,174,1]],[478,[26,2,30,39,85,1,110,1,112,60,173,1]],[479,[28,2,31,39,71,3,77,1,83,1,85,1,87,2,90,8,101,3,109,62,172,2]],[480,[29,2,33,137,171,2]],[481,[32,1,35,134,171,1]],[482,[33,2,38,130,169,2]],[483,[34,3,40,127,168,2]],[484,[36,3,42,124,168,1]],[485,[39,3,45,120,166,2]],[486,[42,3,48,116,165,2]],[487,[44,4,51,111,164,2]],[488,[55,106,163,1]],[489,[61,98,161,2]],[490,[64,93,159,2]],[491,[67,88,157,2]],[492,[74,78,155,2]],[493,[73,2,84,65,152,2]],[494,[88,1,91,53,149,2]],[495,[100,37,144,4]],[496,[139,6]],[497,[106,34]],[498,[113,1,117,1,119,3,123,6]]]},"1:1":{"w":184,"h":491,"rows":[[232,[145,2,150,3]],[233,[143,1,145,6,153,2]],[234,[143,10,155,1]],[235,[141,17]],[236,[139,20]],[237,[139,21]],[238,[138,4,144,17]],[239,[137,22,160,1]],[240,[137,23,161,1]],[241,[137,23,161,1]],[242,[135,1,137,24,162,1]],[243,[136,25,162,2]],[244,[134,1,136,26,163,1]],[245,[134,1,136,26,163,2]],[246,[134,1,136,27,164,1]],[247,[134,1,136,27,164,1]],[248,[134,1,136,28,165,1]],[249,[134,1,136,28,165,1]],[250,[134,1,136,28,165,1]],[251,[134,31,166,1]],[252,[133,32,166,1]],[253,[134,33]],[254,[133,32]],[255,[133,1,135,31,167,1]],[256,[135,31,167,1]],[257,[133,1,135,31,167,1]],[258,[132,2,135,31,167,1]],[259,[133,33,167,1]],[260,[132,1,134,32]],[261,[132,34]],[262,[131,35]],[263,[131,36]],[264,[131,36,168,1]],[265,[130,37,168,1]],[266,[130,37,168,1]],[267,[129,38,168,1]],[268,[128,7,136,31,168,1]],[269,[128,1,130,4,135,32,168,1]],[270,[127,1,129,4,135,32,168,1]],[271,[126,1,129,4,134,33]],[272,[125,1,128,4,133,33]],[273,[111,1,123,8,133,33,167,1]],[274,[32,8,111,4,120,4,125,5,132,34,167,1]],[275,[29,9,111,18,131,35,167,1]],[276,[30,10,111,16,130,36,167,1]],[277,[25,16,111,15,128,38,167,1]],[278,[24,18,111,14,127,39,167,1]],[279,[24,7,34,9,45,1,111,55,167,1]],[280,[23,7,33,11,45,1,111,56]],[281,[22,7,31,13,45,1,111,54,166,1]],[282,[22,7,30,14,45,2,111,54,166,1]],[283,[21,7,29,16,46,1,111,54,166,1]],[284,[21,6,28,17,46,1,111,54,166,1]],[285,[20,25,46,1,111,54]],[286,[20,25,46,1,111,55]],[287,[20,25,46,2,111,53,165,1]],[288,[19,29,111,53,165,1]],[289,[19,27,47,1,111,53,165,1]],[290,[19,29,111,54]],[291,[19,30,111,52,164,1]],[292,[18,31,111,52,164,1]],[293,[18,32,111,52]],[294,[18,32,111,51,163,1]],[295,[17,34,111,51,163,1]],[296,[17,1,19,32,111,51,163,1]],[297,[17,1,19,33,73,1,111,50,162,1]],[298,[19,33,73,1,111,50,162,1]],[299,[17,1,19,34,72,2,111,50,162,1]],[300,[17,1,19,33,53,1,71,3,111,49,161,2]],[301,[17,1,19,33,54,1,70,4,111,49,161,1]],[302,[17,1,19,34,55,2,69,5,111,49,161,1]],[303,[17,1,19,36,57,2,67,2,70,4,111,48,160,2]],[304,[17,1,19,37,59,9,69,5,111,48,160,1]],[305,[17,1,19,39,63,3,67,6,111,50]],[306,[17,1,19,53,111,50]],[307,[17,1,19,51,72,2,111,47,159,1]],[308,[17,1,19,50,71,3,111,47,159,1]],[309,[17,1,19,55,111,46,158,1]],[310,[17,1,19,55,111,46,158,1]],[311,[17,1,19,55,111,46,158,1]],[312,[17,1,19,55,111,45,157,2]],[313,[17,1,19,55,111,45,157,1]],[314,[17,1,19,55,111,45,157,1]],[315,[17,1,19,55,111,44,156,2]],[316,[17,57,111,44,156,1]],[317,[18,56,111,44,156,1]],[318,[18,1,20,54,111,44,156,1]],[319,[18,1,20,54,111,43,155,2]],[320,[18,1,20,134,155,1]],[321,[18,1,20,134,155,1]],[322,[18,1,20,133,155,1]],[323,[19,1,21,132,155,1]],[324,[19,1,21,132,154,1]],[325,[19,1,21,132,154,1]],[326,[19,134,154,1]],[327,[20,1,22,131,154,1]],[328,[20,1,22,131,154,1]],[329,[20,1,22,131,154,1]],[330,[20,133,154,1]],[331,[21,132,154,1]],[332,[21,132,154,1]],[333,[21,132,154,1]],[334,[21,132,154,1]],[335,[22,1,24,129,154,1]],[336,[22,131,154,1]],[337,[22,2,25,128,154,1]],[338,[23,1,25,128,154,1]],[339,[23,130,154,1]],[340,[24,1,26,127,155,1]],[341,[24,1,26,127,155,1]],[342,[24,2,27,127,155,1]],[343,[25,1,27,127,155,1]],[344,[25,1,27,127,155,1]],[345,[26,1,28,127,156,1]],[346,[26,1,28,127,156,1]],[347,[26,124,151,4,156,1]],[348,[27,1,29,121,151,5,157,1]],[349,[27,1,29,121,152,4,157,1]],[350,[27,124,152,4,158,1]],[351,[28,123,153,4,158,1]],[352,[28,1,30,121,153,4,158,1]],[353,[28,123,154,4,159,1]],[354,[29,1,31,121,154,4,159,2]],[355,[29,1,31,122,155,4,160,1]],[356,[29,124,155,4,161,1]],[357,[30,123,155,4,161,1]],[358,[30,123,156,4,161,2]],[359,[30,1,32,122,156,5,162,1]],[360,[30,1,32,122,157,4,162,2]],[361,[30,125,157,5,163,1]],[362,[30,125,158,4,163,2]],[363,[30,2,33,124,159,4,164,1]],[364,[30,2,33,124,159,7]],[365,[30,2,33,124,160,4,165,1]],[366,[30,2,33,125,160,7]],[367,[30,2,33,126,161,4,166,1]],[368,[30,2,33,127,161,5,167,1]],[369,[30,2,33,127,162,4,167,1]],[370,[30,1,32,129,162,5,168,1]],[371,[30,1,32,130,163,4,168,1]],[372,[30,140]],[373,[29,139,169,2]],[374,[29,140,170,1]],[375,[29,1,31,133,165,7]],[376,[29,1,31,133,165,7]],[377,[28,137,166,7]],[378,[28,1,30,141,172,1]],[379,[28,144,173,1]],[380,[27,145,173,1]],[381,[27,1,29,144,174,1]],[382,[26,27,54,121]],[383,[26,1,28,20,58,1,60,116]],[384,[25,21,60,117]],[385,[25,1,27,18,61,114,176,1]],[386,[24,20,61,108,170,5,176,1]],[387,[23,2,26,17,62,107,171,7]],[388,[23,19,62,107,171,5,177,1]],[389,[22,2,25,16,64,112,177,2]],[390,[22,1,24,15,64,115]],[391,[21,18,64,113,178,1]],[392,[21,18,64,113,178,2]],[393,[20,18,64,114,179,1]],[394,[19,18,64,114,179,1]],[395,[19,18,64,117]],[396,[18,1,20,16,64,117]],[397,[18,1,20,15,64,115,180,1]],[398,[17,1,19,14,64,117]],[399,[16,1,18,15,64,116,181,1]],[400,[16,1,18,15,64,116,181,1]],[401,[15,1,17,15,64,116,181,1]],[402,[14,17,64,117]],[403,[13,17,64,117,182,1]],[404,[13,1,15,14,64,117,182,1]],[405,[12,17,64,117,182,1]],[406,[12,1,14,14,64,117]],[407,[11,1,13,14,64,118,183,1]],[408,[10,1,13,14,64,118,183,1]],[409,[10,1,12,14,64,118,183,1]],[410,[9,1,12,13,64,118,183,1]],[411,[9,1,11,14,64,118,183,1]],[412,[8,1,10,14,64,109,174,10]],[413,[8,1,10,13,64,119]],[414,[7,1,9,14,64,119]],[415,[6,2,9,13,64,119]],[416,[6,1,8,13,64,119]],[417,[6,1,8,13,64,119]],[418,[5,1,7,13,64,119]],[419,[5,1,7,12,64,119]],[420,[4,1,6,13,64,119]],[421,[4,1,6,12,64,119]],[422,[3,2,6,12,64,119]],[423,[3,1,5,12,64,119]],[424,[3,1,5,12,64,119]],[425,[5,11,64,119]],[426,[2,1,4,12,64,119]],[427,[2,1,4,11,64,118,183,1]],[428,[2,13,64,118,183,1]],[429,[3,12,64,118,183,1]],[430,[1,1,3,12,64,118,183,1]],[431,[1,1,3,11,64,118,183,1]],[432,[1,1,3,11,64,118]],[433,[0,1,2,12,64,119]],[434,[0,1,2,12,62,1,64,117,182,1]],[435,[0,1,2,12,62,1,64,117,182,1]],[436,[0,1,2,12,62,1,64,117]],[437,[0,1,2,12,64,118]],[438,[0,1,2,12,63,117,181,1]],[439,[0,1,2,12,62,118,181,1]],[440,[0,1,2,12,63,116,180,1]],[441,[0,14,62,117,180,1]],[442,[0,14,60,118,180,1]],[443,[0,14,60,118,179,1]],[444,[0,14,59,1,61,116,179,1]],[445,[2,12,58,119,178,1]],[446,[2,12,57,1,59,117,177,2]],[447,[0,1,2,12,56,119,177,1]],[448,[0,1,2,12,55,1,57,118,177,1]],[449,[0,1,2,12,56,118,176,1]],[450,[0,1,2,12,51,1,55,118,175,1]],[451,[2,12,50,1,52,121,175,1]],[452,[3,11,49,123,174,1]],[453,[1,1,3,11,49,1,51,120,173,1]],[454,[1,1,3,11,47,2,50,120,172,1]],[455,[3,12,46,124]],[456,[2,1,4,11,45,124,170,2]],[457,[2,1,4,12,44,124,169,2]],[458,[4,12,44,123,169,1]],[459,[3,1,5,11,43,123,167,2]],[460,[3,1,5,12,40,1,42,122,166,2]],[461,[4,1,6,11,41,123,165,2]],[462,[4,1,6,12,39,123,164,2]],[463,[5,1,7,11,38,1,40,121,163,2]],[464,[5,1,8,12,35,1,37,1,39,120,161,3]],[465,[6,1,8,13,30,1,37,121,160,2]],[466,[7,1,9,16,29,1,31,1,34,1,36,120,159,2]],[467,[7,1,10,18,30,125,157,2]],[468,[8,1,11,142,155,2]],[469,[8,2,12,139,154,1]],[470,[9,2,12,138,152,1]],[471,[10,2,13,134,150,2]],[472,[11,2,14,131,148,2]],[473,[12,2,15,128,146,2]],[474,[13,2,17,123,143,3]],[475,[15,1,18,118,141,3]],[476,[16,1,20,113,138,3]],[477,[18,1,21,109,135,3]],[478,[19,2,23,102,131,4]],[479,[21,2,25,95,127,4]],[480,[22,3,27,89,122,5]],[481,[24,3,30,77,116,6]],[482,[27,4,35,65,109,8]],[483,[31,3,39,50,104,6]],[484,[35,4,49,34,90,4,96,7]],[485,[40,5,82,6,92,2,95,1]],[486,[48,33,90,1,92,2,95,1]],[487,[87,1,91,1,96,2]],[488,[86,1,88,1,97,1]],[489,[86,1,92,1,97,1]],[490,[87,7,96,1]]]},"9:0":{"w":182,"h":494,"rows":[[235,[37,3]],[236,[36,6]],[237,[36,2,40,3]],[238,[36,3,42,2]],[239,[36,2,44,1]],[240,[35,2,42,1,44,1]],[241,[31,6,40,5]],[242,[29,9,41,2]],[243,[28,15]],[244,[26,16]],[245,[25,18]],[246,[24,19]],[247,[23,20]],[248,[22,21]],[249,[22,21]],[250,[21,22]],[251,[21,22]],[252,[20,23]],[253,[20,5,26,17]],[254,[19,24]],[255,[19,24]],[256,[18,25]],[257,[18,25]],[258,[18,25]],[259,[17,26]],[260,[17,26]],[261,[17,26]],[262,[16,27]],[263,[16,27]],[264,[16,27]],[265,[15,28]],[266,[15,28]],[267,[15,29]],[268,[15,29]],[269,[15,29]],[270,[15,29]],[271,[15,29]],[272,[15,30]],[273,[14,31]],[274,[14,31]],[275,[14,32,153,4]],[276,[14,32,152,7]],[277,[14,33,151,9]],[278,[14,33,72,1,150,11]],[279,[14,34,72,1,150,12]],[280,[14,35,71,2,149,14]],[281,[14,36,71,2,149,15]],[282,[14,37,71,2,149,15]],[283,[14,37,70,3,149,16]],[284,[15,37,70,3,149,16]],[285,[15,38,69,4,149,16]],[286,[15,40,68,5,149,17]],[287,[15,41,66,7,149,17]],[288,[15,45,63,10,149,17]],[289,[15,58,148,18]],[290,[15,58,148,19]],[291,[16,57,148,19]],[292,[16,57,148,19]],[293,[16,57,148,19]],[294,[16,57,147,20]],[295,[17,56,147,20]],[296,[17,56,147,20]],[297,[17,56,146,22]],[298,[17,56,146,22]],[299,[18,55,145,23]],[300,[18,55,145,23]],[301,[18,55,144,23]],[302,[18,55,143,24]],[303,[19,54,110,1,143,24]],[304,[19,54,110,1,142,25]],[305,[19,54,110,1,141,26]],[306,[20,53,110,2,141,26]],[307,[20,53,110,2,140,27]],[308,[20,53,110,3,139,28]],[309,[20,53,110,4,138,28]],[310,[21,52,110,5,136,30]],[311,[21,52,110,6,135,31]],[312,[21,52,110,8,133,33]],[313,[22,51,110,9,130,36]],[314,[22,51,110,55]],[315,[22,51,110,28,139,26]],[316,[23,50,110,55]],[317,[23,50,110,55]],[318,[23,50,110,54]],[319,[24,49,110,54]],[320,[24,49,110,54]],[321,[24,49,110,53]],[322,[25,50,106,57]],[323,[25,48,107,3,114,49]],[324,[25,41,107,1,115,47]],[325,[26,40,115,47]],[326,[26,40,109,1,111,1,114,47]],[327,[26,43,110,1,114,47]],[328,[27,40,115,45]],[329,[27,40,115,45]],[330,[27,40,115,44]],[331,[28,39,115,44]],[332,[28,39,115,43]],[333,[28,39,116,42]],[334,[28,39,116,42]],[335,[28,38,116,41]],[336,[29,37,116,41]],[337,[29,37,67,1,116,41]],[338,[29,40,116,40]],[339,[29,37,68,1,116,40]],[340,[29,37,70,1,116,40]],[341,[29,37,70,1,116,39]],[342,[29,37,70,1,110,1,116,39]],[343,[29,37,67,4,102,1,109,1,115,40]],[344,[29,37,97,1,106,1,108,2,115,40]],[345,[29,37,73,2,79,2,95,4,108,1,114,41]],[346,[29,47,77,29,107,47]],[347,[29,125]],[348,[29,125]],[349,[28,126]],[350,[28,126]],[351,[28,126]],[352,[28,126]],[353,[27,127]],[354,[27,128]],[355,[27,128]],[356,[27,128]],[357,[26,129]],[358,[26,113,141,14]],[359,[26,113,141,15]],[360,[25,114,141,15]],[361,[25,113,141,15]],[362,[24,114,140,17]],[363,[24,114,140,17]],[364,[23,114,140,18]],[365,[23,114,140,18]],[366,[23,114,140,18]],[367,[22,115,140,19]],[368,[22,115,140,20]],[369,[21,116,140,20]],[370,[21,116,140,21]],[371,[20,116,140,21]],[372,[20,56,77,59,139,23]],[373,[19,56,78,3,83,4,89,5,95,10,106,30,139,23]],[374,[19,47,116,20,139,24]],[375,[18,50,108,1,116,19,138,25]],[376,[18,51,108,1,116,19,138,26]],[377,[17,52,116,19,137,27]],[378,[16,53,116,19,137,28]],[379,[16,53,116,18,136,30]],[380,[15,54,116,18,135,31]],[381,[15,53,116,17,135,32]],[382,[14,53,116,17,135,32]],[383,[14,52,116,16,134,33]],[384,[13,53,116,16,134,34]],[385,[13,53,116,15,133,36]],[386,[12,55,116,15,133,36]],[387,[12,56,116,14,132,38]],[388,[11,58,116,13,131,39]],[389,[11,58,116,13,131,40]],[390,[10,59,116,12,130,41]],[391,[10,59,116,11,129,13,148,24]],[392,[9,60,116,11,129,11,149,23]],[393,[9,62,108,1,115,11,129,10,149,24]],[394,[8,63,108,2,115,10,128,11,148,25]],[395,[8,61,71,2,86,1,108,2,115,10,127,12,146,28]],[396,[7,68,77,30,108,16,127,12,144,30]],[397,[7,116,126,13,145,30]],[398,[7,116,125,15,144,31]],[399,[6,116,125,15,145,31]],[400,[6,69,77,45,124,18,147,29]],[401,[5,70,77,30,109,12,123,20,146,30]],[402,[5,59,103,2,116,4,123,54]],[403,[5,59,116,3,122,55]],[404,[5,59,116,2,121,57]],[405,[4,60,116,1,120,58]],[406,[4,60,116,1,120,58]],[407,[4,60,119,60]],[408,[3,61,119,60]],[409,[3,61,118,61]],[410,[3,61,118,62]],[411,[2,62,118,62]],[412,[2,62,118,62]],[413,[2,62,118,62]],[414,[2,62,118,63]],[415,[1,63,118,63]],[416,[1,63,118,63]],[417,[1,63,118,63]],[418,[1,63,118,63]],[419,[1,64,118,41,162,20]],[420,[1,64,118,37,163,19]],[421,[0,65,115,1,118,36,164,18]],[422,[0,66,114,1,117,37,165,17]],[423,[0,69,114,40,166,16]],[424,[0,71,112,42,166,16]],[425,[0,72,111,43,166,16]],[426,[0,72,111,43,166,16]],[427,[0,71,112,42,165,17]],[428,[0,71,112,42,165,17]],[429,[0,71,112,44,164,18]],[430,[0,71,112,45,163,19]],[431,[0,71,112,48,162,20]],[432,[0,71,112,70]],[433,[0,71,110,1,112,70]],[434,[0,71,110,1,112,70]],[435,[0,71,110,1,112,70]],[436,[0,71,110,1,112,70]],[437,[0,71,109,73]],[438,[0,72,109,73]],[439,[0,72,111,71]],[440,[0,72,111,71]],[441,[1,71,110,72]],[442,[1,71,75,2,85,2,88,3,92,1,94,8,108,74]],[443,[1,181]],[444,[1,181]],[445,[1,181]],[446,[2,180]],[447,[2,179]],[448,[2,179]],[449,[2,179]],[450,[3,178]],[451,[3,178]],[452,[3,177]],[453,[4,176]],[454,[4,176]],[455,[5,174]],[456,[5,174]],[457,[6,172]],[458,[6,172]],[459,[7,170]],[460,[7,170]],[461,[8,168]],[462,[9,167]],[463,[10,162,173,3]],[464,[10,162,173,2]],[465,[11,160,172,2]],[466,[12,162]],[467,[13,160]],[468,[14,158]],[469,[15,153,169,2]],[470,[16,153]],[471,[17,151]],[472,[18,146,165,2]],[473,[20,146]],[474,[21,144]],[475,[22,141]],[476,[23,139]],[477,[25,136]],[478,[27,132]],[479,[29,128]],[480,[31,124]],[481,[33,120]],[482,[35,115]],[483,[37,111]],[484,[40,105]],[485,[44,96]],[486,[49,86]],[487,[55,73]],[488,[66,25,92,18]],[489,[87,8]],[490,[85,4,91,5]],[491,[85,3,91,6]],[492,[85,3,91,6]],[493,[85,11]]]},"9:1":{"w":194,"h":487,"rows":[[224,[117,2,150,2,156,3]],[225,[117,2,150,3,154,5]],[226,[117,2,150,10]],[227,[117,2,152,2,157,6]],[228,[117,2,151,4,156,9]],[229,[117,2,151,16]],[230,[117,2,151,17]],[231,[117,2,150,19]],[232,[117,2,150,20]],[233,[117,2,149,7,157,14]],[234,[117,2,149,22]],[235,[117,2,149,23]],[236,[117,2,149,24]],[237,[117,2,149,24]],[238,[117,2,148,26]],[239,[117,2,148,26]],[240,[117,2,148,27]],[241,[117,2,148,27]],[242,[117,2,148,28]],[243,[117,2,148,28]],[244,[117,2,148,28]],[245,[117,2,148,29]],[246,[117,2,148,29]],[247,[117,2,148,29]],[248,[117,2,147,31]],[249,[117,2,147,31]],[250,[117,2,147,31]],[251,[117,2,147,31]],[252,[117,2,147,31]],[253,[117,2,146,33]],[254,[117,2,146,33]],[255,[117,2,146,33]],[256,[117,2,145,34]],[257,[35,2,117,2,145,34]],[258,[32,8,117,2,144,35]],[259,[30,11,117,2,144,35]],[260,[29,13,117,2,143,36]],[261,[28,14,117,2,143,36]],[262,[27,15,117,2,143,36]],[263,[26,7,34,8,117,3,142,37]],[264,[26,6,33,10,117,3,142,37]],[265,[25,18,117,3,141,7,149,30]],[266,[25,18,117,3,140,39]],[267,[24,19,117,3,139,8,148,31]],[268,[24,19,117,4,138,8,147,32]],[269,[23,20,117,5,137,42]],[270,[23,20,117,6,135,44]],[271,[23,20,117,7,133,46]],[272,[22,22,117,61]],[273,[22,22,117,24,142,36]],[274,[22,22,117,23,141,37]],[275,[22,23,117,61]],[276,[21,24,117,61]],[277,[21,24,117,60]],[278,[21,24,117,60]],[279,[21,25,117,60]],[280,[21,25,117,60]],[281,[21,25,117,59]],[282,[20,27,117,59]],[283,[20,27,117,59]],[284,[20,28,117,59]],[285,[20,28,117,59]],[286,[20,29,117,58]],[287,[20,30,117,58]],[288,[21,29,117,58]],[289,[21,30,117,57]],[290,[21,31,117,57]],[291,[21,33,77,1,117,57]],[292,[21,34,75,3,117,56]],[293,[21,36,73,5,117,56]],[294,[22,39,71,7,117,55]],[295,[22,56,117,55]],[296,[22,56,117,55]],[297,[22,56,117,54]],[298,[23,55,117,54]],[299,[23,55,117,54]],[300,[23,55,117,53]],[301,[23,55,117,53]],[302,[24,54,117,52]],[303,[24,54,117,52]],[304,[24,54,117,52]],[305,[25,53,117,51]],[306,[25,53,117,51]],[307,[26,52,117,51]],[308,[26,52,117,50]],[309,[26,52,117,50]],[310,[27,51,117,50]],[311,[27,51,117,49]],[312,[28,50,117,49]],[313,[28,50,117,49]],[314,[28,50,117,49]],[315,[29,49,117,48]],[316,[29,49,117,48]],[317,[29,136]],[318,[29,136]],[319,[30,135]],[320,[30,134]],[321,[30,134]],[322,[31,133]],[323,[31,133]],[324,[31,133]],[325,[31,133]],[326,[32,132]],[327,[32,132]],[328,[32,132]],[329,[32,132]],[330,[32,132]],[331,[32,132]],[332,[32,132]],[333,[32,132]],[334,[32,132]],[335,[32,132]],[336,[32,132]],[337,[32,133]],[338,[32,133]],[339,[32,133]],[340,[32,134]],[341,[32,134]],[342,[32,134]],[343,[32,135]],[344,[31,136]],[345,[31,43,77,1,94,6,117,1,120,48]],[346,[31,42,123,45]],[347,[31,42,123,45]],[348,[30,43,123,46]],[349,[30,43,123,46]],[350,[30,43,123,47]],[351,[29,44,123,47]],[352,[29,44,75,1,123,48]],[353,[28,45,123,48]],[354,[28,45,123,49]],[355,[27,46,123,49]],[356,[27,46,123,50]],[357,[26,47,123,51]],[358,[25,48,123,51]],[359,[25,22,49,24,123,51]],[360,[24,20,55,18,123,52]],[361,[24,18,44,2,57,16,123,52]],[362,[23,18,58,15,123,53]],[363,[23,16,59,14,123,53]],[364,[22,16,61,12,123,54]],[365,[21,17,61,12,123,54]],[366,[21,16,63,10,123,55]],[367,[20,16,64,9,123,56]],[368,[19,17,64,9,123,56]],[369,[19,16,65,8,123,57]],[370,[18,16,65,8,123,57]],[371,[17,17,65,8,123,58]],[372,[16,17,65,8,123,59]],[373,[16,16,65,8,123,59]],[374,[15,17,65,8,123,60]],[375,[15,16,65,8,123,60]],[376,[14,16,65,8,123,61]],[377,[14,16,65,8,123,61]],[378,[13,16,65,8,123,62]],[379,[13,16,65,8,123,62]],[380,[13,15,65,8,123,62]],[381,[12,16,65,8,123,63]],[382,[12,15,65,8,123,63]],[383,[11,15,65,8,123,64]],[384,[11,15,65,8,123,64]],[385,[10,15,65,8,123,65]],[386,[9,15,27,1,65,8,123,65]],[387,[9,15,65,8,123,65]],[388,[8,15,65,8,123,66]],[389,[8,15,65,8,123,66]],[390,[7,15,65,8,123,66]],[391,[7,15,65,8,123,67]],[392,[7,14,65,8,123,67]],[393,[6,15,65,8,123,67]],[394,[6,14,65,8,123,68]],[395,[5,15,65,8,123,68]],[396,[5,14,65,8,123,68]],[397,[5,14,65,8,123,68]],[398,[4,15,65,8,123,69]],[399,[4,14,65,8,123,69]],[400,[4,14,65,8,123,69]],[401,[3,15,64,9,123,69]],[402,[3,14,64,9,123,70]],[403,[3,14,63,10,123,70]],[404,[3,14,63,10,123,70]],[405,[2,14,62,11,123,70]],[406,[2,14,60,13,123,70]],[407,[2,13,59,14,123,70]],[408,[2,13,57,16,123,71]],[409,[1,14,56,17,123,71]],[410,[1,14,54,19,123,71]],[411,[1,13,53,20,123,71]],[412,[1,13,52,21,123,71]],[413,[0,14,51,22,123,71]],[414,[0,14,49,24,123,71]],[415,[0,14,48,25,123,71]],[416,[0,14,46,27,123,71]],[417,[0,14,45,28,123,71]],[418,[0,14,43,30,123,71]],[419,[0,14,38,1,43,30,123,71]],[420,[0,14,38,35,123,71]],[421,[0,14,39,34,123,71]],[422,[0,14,38,35,123,71]],[423,[0,14,37,36,123,71]],[424,[0,15,35,38,123,71]],[425,[0,15,34,38,123,71]],[426,[0,15,32,40,123,71]],[427,[0,17,31,42,123,71]],[428,[0,18,30,43,123,71]],[429,[0,20,28,47,123,71]],[430,[0,193]],[431,[0,193]],[432,[0,193]],[433,[1,192]],[434,[1,191]],[435,[1,1,3,189]],[436,[1,191]],[437,[2,189]],[438,[2,189]],[439,[2,189]],[440,[2,188]],[441,[2,188]],[442,[3,186]],[443,[3,186]],[444,[3,186]],[445,[4,184]],[446,[4,184]],[447,[5,182]],[448,[5,181]],[449,[6,180]],[450,[6,179]],[451,[7,177]],[452,[8,175]],[453,[8,175]],[454,[9,173]],[455,[10,171]],[456,[10,170]],[457,[11,168]],[458,[12,166]],[459,[13,164]],[460,[14,162]],[461,[14,161]],[462,[15,159]],[463,[16,157]],[464,[17,155]],[465,[18,153]],[466,[20,149]],[467,[21,146]],[468,[23,142]],[469,[25,139]],[470,[26,136]],[471,[28,132]],[472,[30,128]],[473,[31,125]],[474,[33,121]],[475,[36,115]],[476,[38,7,46,102]],[477,[42,103]],[478,[46,8,57,84]],[479,[51,84]],[480,[57,21,82,26,110,18]],[481,[66,52]],[482,[80,16,97,5]],[483,[92,9]],[484,[90,7,99,3]],[485,[90,5,97,1,99,3]],[486,[90,6,97,5]]]},"10:0":{"w":182,"h":502,"rows":[[239,[37,1]],[240,[33,1,38,3]],[241,[33,2,40,2]],[242,[34,2,37,6]],[243,[34,1,39,3]],[244,[33,1,39,1]],[245,[39,1]],[246,[27,1,39,2]],[247,[25,1,33,1,36,1,39,3]],[248,[36,1,39,1,41,2]],[249,[28,1,37,1,40,1]],[250,[22,1,26,1,37,1,39,1,43,1,72,1]],[251,[21,1,30,1,33,2,38,2,72,1]],[252,[20,1,23,1,31,1,33,1,36,1,39,2,44,1,72,1]],[253,[22,1,29,2,35,1,37,1,39,2,44,2,72,1]],[254,[19,1,21,2,35,1,40,1,43,1,45,1,72,1]],[255,[18,1,21,1,29,1,35,1,43,1,45,1,72,1]],[256,[18,1,20,3,30,1,45,2,72,1]],[257,[41,2,46,1,72,1]],[258,[19,2,39,1,46,1,72,1]],[259,[19,1,25,1,39,1,42,1,44,1,46,1,72,1]],[260,[24,1,42,1,44,1,46,1,72,1]],[261,[27,4,42,1,46,1,72,1]],[262,[26,5,46,1,72,1]],[263,[18,1,23,8,42,1,46,1,72,1]],[264,[23,12,46,1,72,1]],[265,[25,11,47,1,72,1]],[266,[24,15,47,1,72,1]],[267,[23,16,47,1,72,1]],[268,[23,16,47,1,72,1]],[269,[22,18,47,1,72,1]],[270,[22,17,47,1,72,1]],[271,[13,1,23,16,47,1,72,1]],[272,[22,16,48,1,72,1]],[273,[23,14,46,1,48,1,72,1]],[274,[13,1,23,14,45,1,48,1,72,1]],[275,[13,1,24,14,42,1,44,1,48,1,72,1]],[276,[13,1,24,15,47,1,49,1,72,1]],[277,[13,1,24,15,46,2,49,1,72,1]],[278,[13,1,24,15,45,1,72,1]],[279,[13,1,24,16,50,1,72,1]],[280,[13,1,24,16,46,1,51,1,71,2]],[281,[13,1,15,1,24,18,49,1,51,1,71,2]],[282,[13,1,15,2,24,18,49,2,52,1,71,2]],[283,[13,1,15,2,24,19,49,2,52,2,70,2]],[284,[13,1,15,2,24,19,46,1,50,2,53,2,69,2,72,1]],[285,[13,1,15,2,24,20,50,1,52,1,54,2,69,1,72,1]],[286,[13,1,16,1,24,20,50,4,55,3,68,1]],[287,[16,1,24,21,55,1,57,3,66,2]],[288,[13,1,24,22,52,1,57,8]],[289,[13,1,25,22]],[290,[25,22,51,1]],[291,[25,23,144,5,150,1]],[292,[14,1,25,25,142,2,151,2]],[293,[25,26,141,1,144,1,148,1,150,1,153,2]],[294,[25,28,72,1,140,1,142,1,153,1,155,1]],[295,[25,29,65,1,72,1,139,1,141,1,153,2,156,1]],[296,[14,1,25,31,65,1,72,1,138,1,140,1,154,2,157,1]],[297,[15,1,18,1,26,32,66,1,68,1,71,2,138,1,154,3,158,1]],[298,[15,1,18,1,26,32,59,5,65,3,70,3,138,1,156,1,158,1]],[299,[15,1,26,33,61,1,64,2,67,2,70,3,137,1,139,1,155,3,159,1]],[300,[15,1,18,1,26,32,59,5,66,7,137,1,139,1,156,2,159,1]],[301,[26,40,67,6,137,1,139,2,158,1,160,1]],[302,[16,1,18,1,27,30,58,9,69,1,71,2,136,2,139,1,148,2,153,1]],[303,[16,1,27,41,70,3,136,2,139,1,147,4,152,1,161,1]],[304,[16,1,19,1,27,30,58,12,72,1,136,1,138,2,142,1,147,4,159,1,161,1]],[305,[17,1,19,1,26,31,58,15,136,4,147,1,150,2,158,1,160,2]],[306,[17,1,20,1,27,46,135,4,144,1,147,5,153,1,160,1,162,1]],[307,[17,1,20,1,28,45,135,4,144,1,146,7,159,2,162,1]],[308,[17,1,20,1,27,46,135,4,146,7,161,1]],[309,[18,1,28,45,134,5,146,7,154,1,161,1]],[310,[18,1,29,44,134,1,136,2,145,9,163,1]],[311,[18,1,29,44,134,1,136,2,140,1,145,9]],[312,[19,1,22,1,29,44,133,1,136,2,145,9,163,1]],[313,[19,1,22,2,29,44,132,2,135,2,144,10,163,1]],[314,[22,1,29,44,131,2,136,1,144,10,164,1]],[315,[20,1,22,2,29,44,130,2,134,1,143,12,164,1]],[316,[20,1,29,44,129,3,133,1,141,1,143,12,164,1]],[317,[29,1,31,42,129,2,133,1,140,1,142,13,164,1]],[318,[21,1,30,1,32,41,110,1,128,2,131,1,142,13,164,1]],[319,[21,1,28,1,33,40,111,1,126,3,130,2,141,14,164,1]],[320,[33,40,111,3,125,2,129,2,138,1,140,15,164,1]],[321,[22,1,34,39,110,2,114,11,128,1,137,1,139,16,156,1,164,1]],[322,[22,1,34,39,110,1,116,5,125,2,136,1,139,16,156,1,164,1]],[323,[23,1,34,39,110,1,114,1,116,9,135,1,138,17,156,1,164,1]],[324,[23,1,34,39,110,1,118,7,136,19,164,1]],[325,[23,2,26,1,34,39,110,2,135,20,164,1]],[326,[24,1,35,38,111,3,131,1,134,21,164,1]],[327,[24,2,27,1,35,73,119,2,128,2,132,24,164,1]],[328,[25,1,35,74,112,2,125,2,130,25,164,1]],[329,[25,1,35,78,116,1,128,23,152,3,164,1]],[330,[35,82,124,27,153,1,164,1]],[331,[26,1,36,118,155,1,164,1]],[332,[26,1,36,31,68,40,110,44,155,1]],[333,[37,41,79,1,81,73,163,1]],[334,[27,1,37,117,163,1]],[335,[27,1,37,117,160,1,163,1]],[336,[27,1,37,116,160,1]],[337,[28,1,37,116,154,1,160,1,163,1]],[338,[38,115,154,1,160,1,162,1]],[339,[28,1,38,115,159,1,162,1]],[340,[28,1,38,115,162,1]],[341,[28,1,38,114,160,1,162,1]],[342,[28,2,38,114,153,1,162,1]],[343,[28,2,38,114,161,1]],[344,[28,2,38,113,161,1]],[345,[28,2,39,112,158,1,161,1]],[346,[28,2,38,113,158,1,160,1]],[347,[28,2,38,113,157,2,160,1]],[348,[28,2,39,111,151,1,157,2,160,1]],[349,[28,1,38,112,151,1,157,1,159,2]],[350,[28,1,38,22,61,89,154,1,157,1,159,1]],[351,[28,1,38,111,156,2,159,1]],[352,[28,1,38,111,156,1,158,2]],[353,[28,1,36,113,158,1]],[354,[27,3,37,111,149,1,158,1]],[355,[27,1,29,1,37,111,149,1,158,1]],[356,[27,1,29,1,33,1,37,111,157,2]],[357,[27,1,29,1,37,20,58,89,155,1,157,1]],[358,[26,1,28,3,36,111,155,1,157,1]],[359,[26,1,29,1,36,111,156,2]],[360,[26,1,29,1,36,20,57,89,147,1,156,1]],[361,[25,1,28,2,36,110,156,1]],[362,[25,1,28,1,36,106,143,2,155,2]],[363,[24,1,27,2,34,111,146,1,155,1]],[364,[24,1,26,3,34,111,155,1]],[365,[23,2,26,2,34,110,154,2]],[366,[23,1,25,3,33,111,145,1,154,1]],[367,[22,2,25,1,33,111,153,2]],[368,[22,1,24,2,33,110,153,2]],[369,[22,1,24,2,32,111,151,1,153,1]],[370,[21,1,23,3,32,111,144,1,151,1,153,1]],[371,[20,2,23,2,31,112,147,1,149,1,152,2]],[372,[20,1,22,3,31,112,152,1]],[373,[19,1,22,2,30,71,104,40,152,1]],[374,[19,1,21,3,30,47,80,21,104,40,152,1]],[375,[18,1,21,2,25,1,30,45,76,3,80,3,86,15,104,40,152,1]],[376,[18,1,20,2,29,45,81,1,87,6,94,1,97,3,105,38,152,1]],[377,[17,1,28,46,81,1,88,4,94,1,103,5,112,31,152,1]],[378,[16,2,20,1,28,38,69,2,80,2,88,1,90,2,103,3,112,31,152,1]],[379,[16,1,19,2,27,39,76,2,81,2,88,1,91,1,103,3,113,30,151,1]],[380,[15,2,18,2,26,40,71,3,76,3,81,2,88,1,90,2,98,1,104,2,113,30,151,2]],[381,[15,1,17,1,19,1,26,40,76,1,81,1,98,1,105,1,113,30,151,1]],[382,[14,1,17,1,25,41,76,1,98,1,105,1,113,30,151,1]],[383,[14,1,16,1,25,41,72,1,114,29,152,1]],[384,[13,2,24,42,71,3,114,30]],[385,[13,1,15,1,22,44,70,4,91,1,104,1,114,30,152,1]],[386,[12,1,15,2,23,50,91,2,103,1,107,3,113,31,152,1]],[387,[12,1,14,2,22,51,78,1,83,1,85,1,87,6,104,40,152,1]],[388,[11,1,14,2,22,52,76,1,78,18,97,1,99,2,103,41,152,1]],[389,[11,1,13,3,21,53,75,27,103,40,153,1]],[390,[13,1,21,121,153,1]],[391,[10,1,21,121,153,1]],[392,[9,1,12,2,20,119,154,1]],[393,[9,1,11,2,20,114,140,1,144,1]],[394,[11,2,19,111]],[395,[8,1,10,2,18,32,52,74]],[396,[10,2,14,1,18,33,53,70,141,1,145,1,147,1,155,1]],[397,[7,1,9,2,14,2,18,34,54,69,131,2,147,1,155,2]],[398,[9,2,14,1,17,35,55,15,71,51,146,2]],[399,[6,1,9,2,13,1,17,36,55,66,126,1,148,1,157,1]],[400,[5,1,8,2,13,1,15,38,56,64,125,1,148,1,154,1,157,1]],[401,[5,1,8,2,12,1,15,37,53,2,57,6,64,10,75,45,125,1,132,1,134,1,147,1,154,1]],[402,[5,1,7,2,12,1,15,40,58,2,66,3,73,10,84,35,125,2,130,2,134,3,152,1,156,1]],[403,[11,2,14,41,58,1,60,1,66,5,72,5,85,8,94,25,125,1,135,2,148,1,155,1,158,1]],[404,[4,1,7,2,12,43,62,2,67,10,85,34,135,2,153,1,155,1,157,1]],[405,[4,1,12,43,61,2,67,2,70,11,84,17,104,14,126,1,135,1,149,1,156,1,159,1]],[406,[3,1,12,46,62,1,67,2,71,2,74,7,84,13,98,20,125,1,132,1,135,1,157,2,160,1]],[407,[3,1,5,1,12,43,68,1,75,5,85,12,98,19,134,1,150,1,159,1]],[408,[3,1,5,1,12,43,67,2,75,5,85,5,93,24,135,1,158,4]],[409,[5,1,12,39,53,2,62,4,67,2,76,4,85,5,94,7,102,14,151,3,156,1]],[410,[2,1,12,39,53,2,61,8,76,4,84,6,94,6,102,14,119,1,152,2,159,1]],[411,[2,1,12,39,53,2,61,4,66,3,76,4,84,6,94,6,102,15,119,1,152,6]],[412,[1,2,4,1,12,43,61,3,67,2,76,4,85,5,94,5,102,14,153,4,158,1]],[413,[11,44,61,2,68,1,76,5,85,5,94,4,103,16,154,4,159,1]],[414,[3,2,11,44,61,2,68,1,75,6,85,5,94,3,103,6,110,11,154,4,159,1,161,1]],[415,[3,1,10,44,61,2,68,1,75,6,86,4,94,3,103,6,111,6,119,3,155,4,164,1,166,1]],[416,[1,1,3,2,11,43,61,2,68,1,74,7,86,4,95,3,103,2,106,1,108,1,111,6,119,4,156,2]],[417,[1,1,3,2,11,38,50,4,55,1,61,2,68,1,72,10,86,4,95,4,103,4,111,2,115,1,120,4,156,1,158,1,161,1,165,1,167,1]],[418,[0,2,3,2,11,42,55,2,61,2,68,1,71,7,80,1,86,5,94,6,103,4,111,2,116,1,123,2,162,1,164,2]],[419,[0,1,3,1,11,38,51,2,55,2,61,2,71,10,85,6,93,6,103,2,111,2,114,2,124,2,140,1,157,1,165,1]],[420,[0,1,3,1,11,39,51,1,55,2,61,3,71,5,78,3,85,6,93,6,103,1,105,1,112,3,116,1,125,2,136,1,158,1]],[421,[0,1,2,2,11,39,51,1,55,2,61,1,64,2,71,12,86,5,93,6,103,12,117,2,126,2,142,1]],[422,[0,1,2,2,11,39,51,2,55,2,60,3,64,10,75,8,85,7,93,2,104,11,116,3,126,2,137,1,140,2,170,1]],[423,[0,1,2,2,11,39,51,2,55,2,59,3,64,3,73,1,77,10,89,2,93,1,105,10,116,6,127,2,160,1,169,1]],[424,[0,1,2,2,11,38,51,3,55,2,59,3,64,2,77,6,105,20,127,3,139,1,169,2]],[425,[2,1,11,43,55,2,59,3,64,1,72,1,77,6,88,2,91,1,94,1,100,1,106,5,112,11,124,1,127,4,140,6,163,1,170,3]],[426,[2,1,11,46,59,3,64,1,76,7,88,4,99,1,112,9,123,3,128,3,162,1,164,1,170,3]],[427,[0,1,2,1,11,46,59,3,64,1,72,1,77,4,88,4,112,9,123,3,129,3,164,1,170,4]],[428,[0,1,2,1,11,46,59,2,64,1,78,3,88,4,112,9,123,4,129,4,171,2]],[429,[0,1,10,48,59,3,64,1,70,1,77,3,81,2,94,1,98,2,111,7,119,1,123,11,165,1,173,1]],[430,[0,1,10,47,59,3,64,2,68,3,73,1,75,1,77,2,91,1,95,1,97,3,111,5,123,11,166,1,169,1,175,1]],[431,[0,1,10,48,59,3,63,4,68,3,75,1,78,1,87,1,94,7,105,1,111,5,123,12,165,1,175,1]],[432,[0,1,11,42,54,8,63,4,68,3,75,1,77,2,81,1,88,5,95,2,99,2,107,2,110,6,123,13,147,1,167,1,170,1]],[433,[0,1,11,63,76,7,90,3,96,2,99,1,103,1,107,2,111,5,123,14,147,3,152,1,157,1,166,1]],[434,[0,1,2,1,11,63,75,18,94,4,99,3,103,1,105,11,123,14,147,4,152,1,157,1,168,1,171,1]],[435,[0,1,2,1,11,58,70,40,111,6,123,15,147,4,154,1,157,1]],[436,[0,1,2,1,11,51,65,53,123,16,148,3,153,1]],[437,[0,1,2,1,10,52,65,56,123,17,149,2,168,1,170,1]],[438,[0,1,12,51,64,5,71,37,109,12,123,17,149,2,170,1]],[439,[3,1,12,51,64,5,71,50,122,19,169,1]],[440,[0,2,3,1,12,57,71,20,93,49,177,1,179,1]],[441,[1,1,3,2,10,1,12,69,84,8,93,50]],[442,[1,1,3,1,10,70,84,59,170,1]],[443,[1,1,4,1,11,70,83,61,172,1]],[444,[1,1,4,1,12,69,83,62,172,1]],[445,[2,1,4,1,13,69,83,63,172,1]],[446,[2,1,13,67,81,65,171,2]],[447,[2,1,14,66,81,1,83,64,171,1,173,1]],[448,[2,1,14,66,81,1,83,65,159,2,173,1,181,1]],[449,[3,1,13,1,15,76,93,56,159,4,164,1,173,1,175,1]],[450,[3,1,8,1,15,75,93,57,158,1,160,3,173,1,175,1,181,1]],[451,[4,1,16,74,94,57,173,1,175,1,181,1]],[452,[4,1,16,74,94,58,160,2]],[453,[5,1,16,52,76,1,104,1,111,42]],[454,[5,1,8,1,17,51,111,43]],[455,[8,1,18,50,76,1,111,44]],[456,[6,1,19,49,75,2,111,45,173,1]],[457,[19,49,75,2,111,46,171,3]],[458,[7,1,20,48,111,48,171,3,175,1]],[459,[8,1,20,48,104,1,106,1,111,50,170,4,175,1,181,1]],[460,[8,1,12,1,22,46,97,2,102,5,111,52,168,8,181,1]],[461,[9,1,21,47,94,4,101,2,104,1,111,63,181,1]],[462,[10,1,23,45,83,1,86,1,91,7,101,2,104,1,111,63,181,1]],[463,[10,1,16,1,24,44,76,2,82,1,86,1,90,2,93,4,102,1,111,64,181,1]],[464,[11,1,25,43,75,2,86,2,92,1,95,2,102,1,111,64]],[465,[12,1,25,43,75,2,86,1,111,61,176,1]],[466,[13,1,27,41,75,1,111,59,180,1]],[467,[13,1,27,41,75,1,111,59,178,1,180,1]],[468,[14,1,29,39,75,1,111,59,180,1]],[469,[15,2,28,40,111,58]],[470,[16,2,32,36,75,1,95,1,104,2,111,58,179,1]],[471,[17,2,34,34,75,1,95,1,104,2,111,58,174,2]],[472,[18,1,25,1,35,33,74,2,85,1,101,1,104,2,111,57]],[473,[19,2,38,30,76,1,86,1,96,1,101,1,111,56,178,1]],[474,[20,2,25,1,39,29,96,1,112,55,177,1]],[475,[22,1,27,1,39,28,111,54,175,1,177,1]],[476,[23,2,28,2,40,27,111,53,172,1,176,1]],[477,[25,2,29,1,42,1,46,22,111,52,176,1]],[478,[26,2,48,20,75,1,78,1,85,1,110,52,175,1]],[479,[27,2,40,1,50,1,52,19,72,33,110,50,174,2]],[480,[29,2,39,2,57,102,169,1,171,1,174,1]],[481,[31,1,39,3,59,100,173,2]],[482,[32,3,40,2,43,1,48,1,63,93,168,1,172,1]],[483,[34,3,40,2,51,1,63,91,172,1]],[484,[36,3,55,2,64,3,68,84,171,1]],[485,[38,3,47,1,58,1,75,75,169,2]],[486,[40,4,51,1,55,1,78,70,168,2]],[487,[43,4,52,2,66,1,81,2,87,8,96,46,158,1,167,1]],[488,[46,4,110,26,165,2]],[489,[50,4,120,12,164,1]],[490,[53,5,85,1,87,2,125,2,132,3,151,2,162,2]],[491,[57,4,93,1,96,1,147,2,151,2,160,2]],[492,[62,1,64,2,107,4,126,5,142,1,144,1,158,2]],[493,[65,6,91,4,98,1,138,1,146,1,148,2,155,3]],[494,[71,7,128,7,143,1,153,3]],[495,[78,1,83,1,133,3,148,5]],[496,[83,5,91,1,143,5]],[497,[85,3,91,1,93,2,96,13,111,1,134,9]],[498,[84,5,90,1,93,7,101,36]],[499,[93,1]],[500,[85,1]],[501,[85,5,91,4]]]},"10:1":{"w":190,"h":486,"rows":[[223,[141,5,148,1]],[224,[142,4,148,3]],[225,[143,2,149,4]],[226,[142,3,148,1,154,2]],[227,[142,5,148,5,156,2]],[228,[141,2,146,1,149,2,158,2]],[229,[140,2,145,1,148,1,159,2]],[230,[140,1,158,1,160,2]],[231,[139,1,150,3,161,1]],[232,[138,2,162,1]],[233,[138,1,140,1,163,1]],[234,[138,1,161,1]],[235,[138,1,164,1]],[236,[137,2,165,1]],[237,[137,1]],[238,[137,1,140,1,166,1]],[239,[137,1,141,1,166,1]],[240,[137,1,164,1,167,1]],[241,[137,1,167,1]],[242,[137,1,164,1,168,1]],[243,[136,2,165,1,168,1]],[244,[136,1,139,1,168,1]],[245,[136,1,139,1,165,1,168,1]],[246,[136,1,138,2,151,4]],[247,[136,1,138,2,150,6,169,1]],[248,[136,1,138,1,152,4]],[249,[135,2,138,2,151,6,169,1]],[250,[135,2,138,1,151,5]],[251,[135,1,137,2,152,4]],[252,[135,1,137,2,152,5]],[253,[134,2,137,1,139,1,147,1,151,5,158,1]],[254,[134,1,137,1,146,3,150,5,158,1]],[255,[133,2,146,4,151,3,158,2]],[256,[133,2,136,1,146,9,159,1]],[257,[133,1,135,1,145,10,159,1]],[258,[132,1,134,3,144,11,159,1]],[259,[132,1,135,1,144,10]],[260,[131,1,135,1,141,1,143,2,146,8]],[261,[131,1,135,1,143,2,148,1,150,4,159,2]],[262,[130,1,134,1,142,3,148,7,156,5,170,1]],[263,[129,2,132,1,141,5,148,7,156,1,158,3,170,1]],[264,[128,1,131,1,141,13,156,5]],[265,[127,1,130,1,140,14,156,5,170,1]],[266,[114,1,125,2,129,1,140,15,156,1,158,4]],[267,[114,3,123,3,128,2,138,17,156,1,158,4,170,1]],[268,[114,13,128,1,133,1,138,23]],[269,[114,12,127,2,138,22]],[270,[36,4,114,13,139,21,170,1]],[271,[33,5,39,4,121,2,130,1,140,19,170,1]],[272,[31,2,37,1,42,3,134,2,137,22]],[273,[29,2,34,8,44,2,133,4,138,21,169,1]],[274,[28,2,32,2,40,1,45,2,132,1,134,20,156,2,169,1]],[275,[28,1,30,4,39,1,41,1,46,1,132,23,156,2,162,1]],[276,[26,1,46,2,127,29,162,1]],[277,[26,1,47,1,114,3,118,1,123,30,154,1,158,1,162,1,164,1]],[278,[47,1,114,1,117,7,125,29,164,2,168,1]],[279,[44,1,48,1,118,7,127,27,164,2,168,1]],[280,[41,1,45,1,48,1,114,39,165,1,168,1]],[281,[45,2,48,1,114,38,154,2,161,1]],[282,[44,3,48,1,114,39,154,4,164,1,167,1]],[283,[22,1,25,1,46,1,48,2,114,44,164,1,167,1]],[284,[22,1,25,1,46,2,49,1,114,43,162,1,164,1,166,1]],[285,[24,1,45,3,49,1,114,43,162,2,166,1]],[286,[47,1,49,1,114,43,166,1]],[287,[34,4,114,42,163,1]],[288,[34,5,50,1,114,42,162,2,165,1]],[289,[33,5,39,1,50,1,76,1,114,42,162,1,165,1]],[290,[32,5,40,1,76,1,114,41,162,1,164,1]],[291,[32,6,51,1,76,1,114,41,164,1]],[292,[31,5,41,1,52,1,75,2,114,41,164,1]],[293,[30,7,40,2,50,1,52,1,75,2,114,41,161,1,163,1]],[294,[30,5,37,5,50,1,53,1,74,3,114,38,154,1]],[295,[30,4,37,5,50,1,54,1,74,1,114,39]],[296,[30,13,51,2,55,1,72,2,75,1,114,38,158,1,162,1]],[297,[30,13,52,1,56,1,71,4,114,40,159,1,162,1]],[298,[30,2,33,11,54,1,58,1,69,6,114,39,159,1,162,1]],[299,[30,2,33,10,44,1,59,2,65,5,71,3,114,39,159,1,161,1]],[300,[30,2,34,6,55,4,62,10,114,38,161,1]],[301,[30,11,54,1,56,6,66,5,114,39,161,1]],[302,[21,1,30,13,44,1,56,1,58,13,114,38,154,1,160,1]],[303,[21,1,30,16,57,12,114,37,154,1,156,1,160,1]],[304,[21,1,30,16,114,36,160,1]],[305,[21,1,30,14,45,1,47,1,49,1,58,1,114,37,159,2]],[306,[19,1,21,1,23,1,31,1,33,17,53,1,74,1,114,37,156,1,159,1]],[307,[21,1,33,1,35,15,53,2,71,2,74,3,114,36,156,1,159,1]],[308,[22,1,33,19,53,1,69,4,74,3,114,36,156,1,158,2]],[309,[22,1,33,20,59,2,66,11,114,36,158,2]],[310,[22,1,35,21,64,13,114,36,158,1]],[311,[22,1,35,1,37,20,65,12,114,32,158,1]],[312,[22,1,35,1,37,21,63,14,114,33,148,2,158,1]],[313,[23,2,30,3,34,43,114,36]],[314,[20,1,23,1,30,47,114,36,154,1,157,1]],[315,[20,1,23,1,30,47,114,35,154,1,157,1]],[316,[23,1,31,118,153,2,157,1]],[317,[23,1,31,4,36,113,154,1,157,1]],[318,[23,1,32,117,157,1]],[319,[32,117,157,1]],[320,[31,118,156,1]],[321,[31,118,156,1]],[322,[31,118,156,1]],[323,[22,1,32,117,156,1]],[324,[22,1,32,117,156,1]],[325,[33,116,156,1]],[326,[23,1,33,112,146,2]],[327,[33,116,154,1]],[328,[30,1,34,114,154,1,157,1]],[329,[24,1,34,114,157,1]],[330,[24,1,35,113,151,1,154,1]],[331,[25,1,31,1,35,115,154,1,157,2]],[332,[36,113,154,2,158,1]],[333,[25,1,37,113,154,1,158,1]],[334,[38,112,152,1,154,3,158,1]],[335,[26,1,37,110,148,2,152,1,155,2,158,2]],[336,[38,113,155,1,159,1]],[337,[27,1,37,1,39,112,153,1]],[338,[38,113,153,1,157,1,160,1]],[339,[38,114,160,1]],[340,[30,1,38,112,160,2]],[341,[38,112,161,1]],[342,[29,1,31,1,42,111,157,3,161,1]],[343,[29,1,42,111,159,1,162,1]],[344,[29,1,41,113,158,3,162,1]],[345,[39,1,41,113,160,1,163,1]],[346,[40,1,43,112,159,1,161,1]],[347,[34,1,40,113,154,1,164,1]],[348,[40,116,165,1]],[349,[40,115,156,1,162,1,165,1]],[350,[31,1,40,115,163,1,166,1]],[351,[40,114,162,2,166,2]],[352,[31,1,40,115,162,1,164,1,167,1]],[353,[40,115,163,3,167,2]],[354,[31,1,40,116,157,1,168,2]],[355,[31,1,40,117,162,1,169,1]],[356,[31,1,40,119,169,2]],[357,[31,1,40,117,158,2,163,1,170,1]],[358,[34,1,40,121,168,1,170,2]],[359,[40,119,168,1,171,2]],[360,[34,1,40,120,169,1,172,1]],[361,[39,123,169,2,172,2]],[362,[39,1,41,119,170,1,173,1]],[363,[30,1,41,119,169,1,171,1,174,1]],[364,[42,118,167,1,171,1,174,1]],[365,[32,1,42,120,163,1,175,1]],[366,[35,1,38,1,41,125]],[367,[31,1,38,1,41,125]],[368,[31,1,38,2,41,126,176,1]],[369,[31,1,34,1,38,129,177,1]],[370,[27,1,30,1,38,129,178,1]],[371,[30,2,38,130,175,1,178,1]],[372,[29,1,39,11,52,2,55,114,174,2]],[373,[25,1,28,3,36,1,38,7,46,2,56,113,179,1]],[374,[25,1,36,10,47,1,56,109,166,3,176,1]],[375,[27,1,35,8,44,1,55,112,177,1,180,1]],[376,[24,1,27,1,34,8,43,1,55,114]],[377,[34,7,42,1,44,1,55,6,62,109,181,1]],[378,[25,2,34,8,55,6,63,110,178,1]],[379,[25,1,35,6,52,1,57,3,63,110,182,1]],[380,[24,2,35,6,52,1,57,1,63,110,179,1,182,1]],[381,[24,2,35,5,57,1,63,110,183,1]],[382,[23,1,27,1,35,4,63,111,183,1]],[383,[22,1,32,3,36,1,38,1,63,105,169,5,184,1]],[384,[22,2,32,4,63,106,170,4,184,1]],[385,[32,4,63,110,175,1,184,1]],[386,[30,1,34,2,63,111,185,1]],[387,[29,1,32,2,63,110,174,2,178,1,185,1]],[388,[23,1,27,1,30,3,34,1,63,110,175,1,178,1,181,2,186,1]],[389,[30,4,63,110,181,1,186,1]],[390,[27,2,30,3,63,114,179,1,181,2,186,1]],[391,[26,5,63,114,182,2,186,2]],[392,[25,5,63,115,182,1,186,2]],[393,[23,4,28,3,63,115,182,1,187,1]],[394,[15,2,23,5,63,112,176,2,182,1,187,1]],[395,[14,1,16,1,23,5,29,1,63,113,177,2,180,1,183,1,187,2]],[396,[14,1,22,6,63,116,180,1,183,1,188,1]],[397,[14,1,22,5,63,115,179,1,183,1,188,1]],[398,[22,6,63,112,178,2,184,2,188,1]],[399,[16,1,22,5,63,114,178,3,188,2]],[400,[20,1,22,3,63,118,184,1,188,2]],[401,[20,4,25,1,63,115,180,1,184,1,189,1]],[402,[20,5,26,1,63,116,180,1,184,1,189,1]],[403,[20,3,24,2,63,116,184,1,189,1]],[404,[19,3,23,1,63,115,184,1,189,1]],[405,[17,1,19,4,24,1,63,115,184,2,189,1]],[406,[17,4,26,1,63,115,184,2,189,1]],[407,[16,4,21,1,23,4,63,115,184,3,189,1]],[408,[16,5,22,3,63,116,184,3,189,1]],[409,[18,3,22,2,63,115,181,1,185,2,189,1]],[410,[15,2,18,2,63,116,180,2,184,3]],[411,[15,4,63,118,185,2,189,1]],[412,[14,4,63,118,186,1]],[413,[13,5,63,117,181,1]],[414,[14,3,64,116,183,1]],[415,[14,3,64,114,182,2,185,1]],[416,[14,3,64,113,182,1,184,2,189,1]],[417,[12,2,15,2,64,112,182,1,184,1,189,1]],[418,[12,5,63,114,178,1,182,1,185,1,189,1]],[419,[12,5,64,112,178,1,182,1,184,2,189,1]],[420,[11,6,63,114,178,1,184,2]],[421,[11,6,63,113,178,1,182,1,184,2,189,1]],[422,[11,6,63,116,189,1]],[423,[10,5,16,1,56,2,63,115,189,1]],[424,[6,1,10,5,16,2,55,6,63,115,188,1]],[425,[6,1,9,6,16,1,55,7,63,115,188,1]],[426,[9,8,55,7,63,113,177,1,181,1,188,1]],[427,[9,7,55,119,176,2,188,1]],[428,[9,7,56,4,61,112,174,2]],[429,[9,7,61,116,180,1,187,1]],[430,[9,8,62,113,176,2,187,1]],[431,[9,8,59,117,186,1]],[432,[9,8,59,115,175,1,179,1,186,1]],[433,[9,8,57,118,186,1]],[434,[9,3,13,4,56,116,173,2,185,1]],[435,[9,3,13,4,52,122,182,1,185,1]],[436,[9,3,13,4,53,121]],[437,[9,3,13,4,52,121,181,1,184,1]],[438,[9,8,51,122,184,1]],[439,[9,8,49,123,180,1,183,1]],[440,[6,1,10,7,49,122,179,2,182,1]],[441,[10,7,47,116,164,1,167,3,179,1,182,1]],[442,[10,7,47,1,49,115,165,2,168,1,179,1,181,1]],[443,[11,1,13,4,45,2,48,117,168,1,180,2]],[444,[7,1,11,1,13,4,45,1,47,118,180,1]],[445,[11,1,13,4,43,122,167,1,179,1]],[446,[12,5,36,2,40,124,165,1,178,2]],[447,[12,5,22,4,37,1,39,123,164,1,178,1]],[448,[14,3,20,7,39,123,163,1,171,1,173,2,177,1]],[449,[16,2,21,6,38,2,41,122,173,1,176,1]],[450,[13,1,15,1,17,2,20,7,37,2,40,119,170,1,175,2]],[451,[14,1,17,9,35,125,165,1,174,2]],[452,[16,10,35,117,153,5,169,1,173,2]],[453,[15,1,17,9,33,2,36,122,165,1,172,2]],[454,[16,1,18,9,31,3,35,123,164,3,172,1]],[455,[17,1,19,135,163,1,165,2,170,2]],[456,[18,2,21,131,164,2,169,1]],[457,[13,1,18,1,20,1,23,127,157,1,162,3,168,1]],[458,[21,4,30,119,155,1,166,2]],[459,[14,1,22,4,27,109,137,9,154,1,165,1]],[460,[13,1,15,1,23,113,137,6,155,1]],[461,[14,1,16,1,22,112,135,1,137,4,154,2,157,1,162,1]],[462,[25,113,161,1]],[463,[26,105,132,5,145,1,159,1]],[464,[27,106,142,1,147,1,157,1]],[465,[29,101,140,1]],[466,[33,5,39,88,143,1]],[467,[35,3,39,1,42,1,44,1,46,1,48,75,140,2]],[468,[37,1,39,2,42,67,110,1,112,5,122,1,131,2,136,2,148,2]],[469,[27,3,41,68,110,2,114,1,125,1,131,4]],[470,[26,1,45,3,49,9,59,10,74,27,105,1,129,3,143,3]],[471,[20,1,28,1,33,1,50,8,74,23,116,1,126,1,139,4]],[472,[37,1,58,1,66,12,110,2,119,1,122,1,137,3]],[473,[23,1,41,1,102,3,116,2,133,3]],[474,[36,2,46,1,108,3,128,4]],[475,[27,1,40,2,82,6,123,5]],[476,[47,1,67,11,85,4,116,6]],[477,[54,1,57,1,67,17,110,1,113,3]],[478,[36,3,102,8]],[479,[40,2,43,2,93,3,98,4]],[480,[49,1,85,8,95,1,97,1]],[481,[59,2,62,8,72,2,91,1,93,3,98,1]],[482,[89,2,94,1,98,2]],[483,[89,1,98,1,100,1]],[484,[89,1,94,6]],[485,[90,2,93,6]]]},"11:0":{"w":187,"h":496,"rows":[[251,[74,1]],[252,[74,1]],[253,[53,7,74,1]],[254,[51,9,74,1]],[255,[50,10,74,1]],[256,[49,11,71,4]],[257,[49,11,64,11]],[258,[50,25]],[259,[50,10,62,7]],[260,[50,15,69,1,71,4]],[261,[49,4,54,21]],[262,[49,26]],[263,[46,17,66,7,74,1]],[264,[45,6,52,10,68,1,72,3]],[265,[43,4,49,8,67,6,74,1]],[266,[42,1,44,2,48,7,68,3,74,1]],[267,[41,1,43,1,46,5,53,1,63,1,65,2,68,1,70,1,74,1]],[268,[40,3,45,5,63,1,67,2,74,1]],[269,[38,3,43,7,55,1,64,1,66,2]],[270,[38,2,43,5,64,4]],[271,[36,3,41,6,63,5]],[272,[35,3,40,7,49,6,63,5]],[273,[34,3,39,7,49,6,63,5]],[274,[33,2,39,2,42,2]],[275,[32,2,35,1,38,2,42,3]],[276,[32,3,37,2,41,2,44,1,46,1]],[277,[31,3,36,4,42,2,45,1]],[278,[31,1,33,1,36,11,73,1]],[279,[30,3,35,2,39,8,50,1,73,1]],[280,[30,1,34,3,41,6,73,1,146,7]],[281,[30,2,34,3,41,16,72,2,145,9]],[282,[29,3,33,4,44,13,61,3,71,3,144,1,146,1,148,7]],[283,[29,2,33,2,42,16,59,1,62,4,70,3,143,13]],[284,[28,3,32,2,35,1,42,18,64,1,70,3,143,13]],[285,[28,3,32,2,42,18,64,1,70,4,142,1,144,6,151,6]],[286,[28,6,39,1,41,20,63,1,67,7,141,10,152,5]],[287,[28,6,42,20,64,1,67,7,113,1,141,7,152,6]],[288,[29,5,40,22,67,7,113,1,140,7,153,5]],[289,[27,1,29,5,41,9,51,11,67,7,114,1,139,1,141,5,152,6]],[290,[27,6,39,1,41,21,71,1,113,3,137,10,152,6]],[291,[27,5,39,2,42,19,71,1,113,5,135,3,139,5,146,1,154,5]],[292,[27,5,40,1,42,19,113,3,117,2,132,12,145,1,154,3]],[293,[27,5,42,18,113,4,119,3,128,7,136,9,153,4]],[294,[27,5,42,18,113,6,121,2,131,2,134,8,153,4,158,1]],[295,[28,4,42,18,113,8,125,3,132,9,153,4,158,1]],[296,[28,4,42,18,113,28,153,4,158,1]],[297,[28,4,43,14,58,1,114,1,116,22,139,1,153,4,158,1]],[298,[27,5,44,11,57,1,116,1,118,21,152,1,154,3,158,1]],[299,[27,5,46,1,48,5,55,1,113,2,118,1,121,10,136,1,152,5,158,1]],[300,[27,5,47,3,52,3,113,3,120,1,122,10,152,7]],[301,[27,6,113,2,116,3,122,1,152,6]],[302,[27,1,29,3,36,1,113,1,123,1,125,1,152,6]],[303,[27,1,29,3,35,2,113,1,121,1,124,1,153,5]],[304,[28,5,35,2,71,2,74,1,113,1,122,1,124,1,153,3,157,1]],[305,[28,6,35,2,71,4,126,1,152,4,157,1]],[306,[28,3,32,2,71,4,123,1,125,1,144,1,152,6]],[307,[28,1,30,4,70,1,74,1,113,2,122,2,144,1,152,3,156,1]],[308,[29,5,70,5,113,1,122,2,127,1,145,1,150,5,156,1]],[309,[29,6,70,5,113,2,126,2,145,1,151,6]],[310,[29,5,70,5,113,2,123,2,126,1,147,1,151,3,155,1]],[311,[30,5,70,5,113,2,123,2,148,1,150,4,155,1]],[312,[30,1,32,4,70,5,113,2,127,1,148,1,150,6]],[313,[30,1,32,3,70,5,113,2,124,2,129,1,149,4,154,1]],[314,[31,6,47,2,69,6,113,2,125,1,129,1,133,2,142,2,145,1,149,4,154,1]],[315,[31,1,33,3,37,1,47,2,63,1,67,1,71,4,128,1,133,2,143,2,148,4,153,1]],[316,[32,6,47,2,63,1,72,3,126,1,128,1,133,2,143,1,148,6]],[317,[32,1,34,3,47,2,67,1,70,1,72,3,114,1,133,2,143,1,147,4,152,1]],[318,[32,7,47,2,68,1,70,1,72,3,113,1,127,1,129,1,131,1,147,6]],[319,[35,3,39,1,47,2,70,5,113,1,126,2,146,4,151,1]],[320,[35,5,47,2,70,5,126,1,144,1,146,4,151,1]],[321,[34,1,36,3,47,2,70,5,128,1,130,1,144,5,150,1]],[322,[34,1,36,6,43,4,51,2,70,5,128,1,130,1,145,5]],[323,[35,1,37,5,43,4,70,42,129,1,144,6]],[324,[35,1,37,5,70,42,129,1,131,1,144,4,149,1]],[325,[36,6,70,42,128,1,142,7]],[326,[36,6,71,41,132,1,143,4,148,1]],[327,[36,7,72,10,83,29,130,1,132,1,143,6]],[328,[37,1,39,5,73,4,78,4,83,2,88,2,91,22,131,1,133,1,142,6]],[329,[37,1,39,3,80,1,106,3,130,2,133,3,141,5,147,1]],[330,[37,7,91,2,102,1,107,3,130,2,134,1,142,6]],[331,[38,6,91,2,107,2,134,1,139,2,142,6]],[332,[38,1,40,4,91,1,93,1,102,1,107,2,131,2,134,1,139,2,142,5]],[333,[38,6,91,2,107,2,131,2,139,2,142,5]],[334,[38,1,40,4,91,1,93,1,107,2,133,1,135,1,139,8]],[335,[38,1,40,4,92,2,107,2,133,1,139,6,146,1]],[336,[38,1,40,4,92,2,107,2,136,1,140,7]],[337,[38,1,40,4,92,2,107,2,134,1,136,1,141,6]],[338,[38,1,40,4,78,1,86,1,93,1,107,2,134,1,141,7]],[339,[38,1,40,4,78,1,80,2,86,1,93,1,107,2,135,1,137,1,139,2,142,6]],[340,[38,1,40,4,78,1,80,2,91,1,107,2,134,2,140,1,142,6]],[341,[38,6,76,1,78,1,80,2,91,1,107,2,138,1,140,1,142,6]],[342,[39,5,76,1,78,1,80,2,84,1,91,2,107,2,136,1,138,1,142,7]],[343,[39,5,76,1,78,1,80,2,84,1,91,2,107,2,140,1,142,7]],[344,[37,6,76,1,78,1,80,2,84,1,92,1,107,2,137,1,139,1,141,1,143,6]],[345,[36,8,76,1,78,1,80,2,84,1,92,1,107,2,137,1,143,7]],[346,[36,1,38,4,46,1,71,4,76,1,78,1,84,1,106,3,140,1,144,7]],[347,[36,6,45,2,71,4,76,1,78,1,84,1,106,4,138,1,140,1,144,7]],[348,[35,1,37,5,46,1,71,4,78,1,84,1,106,4,145,7]],[349,[34,1,36,5,71,4,78,1,84,1,106,4,138,2,145,8]],[350,[34,1,36,4,71,4,84,1,106,4,138,2,146,7]],[351,[33,1,35,6,71,4,84,1,106,4,138,1,142,1,147,7]],[352,[34,6,71,4,84,1,106,4,139,2,147,8]],[353,[32,6,70,5,84,1,106,4,139,1,143,1,146,10]],[354,[31,1,33,5,63,12,78,1,82,1,84,1,99,1,105,5,141,1,145,12]],[355,[30,1,32,5,63,12,80,1,82,1,84,1,87,1,99,1,104,6,146,12]],[356,[28,2,31,6,63,4,78,1,82,1,84,1,89,1,94,1,99,1,104,7,142,1,144,15]],[357,[27,2,30,6,75,1,78,5,84,4,89,6,96,4,101,10,142,1,144,16]],[358,[27,1,29,5,43,4,65,1,78,3,85,3,89,5,95,5,101,4,106,4,143,18]],[359,[26,1,28,6,43,4,63,1,71,41,142,19]],[360,[25,1,27,1,29,5,43,4,63,1,69,2,72,40,143,19]],[361,[24,1,26,2,29,4,43,4,70,42,143,2,146,5,152,1,154,9]],[362,[23,1,25,2,28,5,63,1,70,42,135,1,143,8,154,10]],[363,[25,5,63,1,70,42,135,1,144,2,147,1,149,1,154,11]],[364,[22,8,63,1,70,42,133,2,143,3,148,3,153,1,155,12]],[365,[21,1,23,5,67,46,131,1,133,4,143,4,148,1,150,2,153,4,158,9]],[366,[20,1,22,6,67,48,116,1,130,1,132,6,144,3,151,1,159,9]],[367,[19,1,21,1,23,3,27,1,67,51,131,1,133,5,144,1,146,1,149,1,160,9]],[368,[18,1,20,1,23,3,29,1,70,43,115,3,131,1,133,5,147,1,154,2,160,10]],[369,[18,2,22,3,26,1,28,1,71,40,115,1,133,4,147,1,150,1,156,1,161,10]],[370,[16,2,19,1,22,2,25,1,70,42,114,2,133,3,147,2,150,1,162,10]],[371,[16,1,18,1,20,5,70,42,113,3,147,2,162,11]],[372,[17,1,20,2,70,42,114,2,151,1,163,10]],[373,[16,2,19,3,70,42,113,2,117,1,149,1,164,10]],[374,[14,1,16,1,18,3,70,42,113,2,117,1,165,9]],[375,[13,1,15,2,18,2,70,42,113,1,117,2,152,1,167,8]],[376,[12,1,14,6,70,43,117,2,150,1,152,1,166,9]],[377,[12,7,70,44,117,1,150,1,152,1,166,10]],[378,[13,6,63,1,69,44,149,2,152,1,168,8]],[379,[10,1,12,7,63,1,65,1,69,43,150,1,152,1,168,8]],[380,[10,1,12,7,65,1,69,43,116,1,125,4,148,1,154,1,170,7]],[381,[11,7,65,1,67,4,72,24,99,3,103,8,113,1,115,3,126,5,132,4,147,1,149,1,151,1,168,1,171,6]],[382,[11,5,66,17,84,6,91,2,94,1,97,1,99,4,105,5,117,1,130,8,146,1,148,1,150,1,154,1,171,5,177,1]],[383,[8,1,10,5,76,1,82,1,86,2,99,1,105,2,108,2,114,1,123,8,139,9,150,1,167,1,172,6]],[384,[8,7,76,1,86,2,89,1,99,1,105,2,130,5,143,3,167,1,171,8]],[385,[9,1,11,3,76,1,87,1,89,1,99,1,105,2,111,1,113,2,127,1,129,3,138,10,171,1,173,7]],[386,[6,7,76,1,85,2,89,1,92,1,105,2,127,8,171,7,179,1]],[387,[6,1,8,4,74,1,76,2,82,8,94,2,100,2,103,4,108,8,127,7,171,10]],[388,[6,3,10,2,68,7,76,41,127,6,171,8,180,2]],[389,[7,1,9,3,65,53,127,5,172,2,175,7]],[390,[6,5,64,54,127,4,152,11,174,8]],[391,[5,6,65,54,152,12,176,7]],[392,[4,1,6,4,65,54,152,12,175,8]],[393,[4,6,65,53,152,13,175,8]],[394,[5,5,65,53,156,5,163,2,176,8]],[395,[5,5,65,53,152,9,163,3,177,5,183,1]],[396,[3,1,5,5,66,51,151,14,176,6,183,1]],[397,[4,4,67,34,106,1,112,2,151,15,176,1,178,7]],[398,[2,1,4,4,22,1,68,5,76,2,82,2,86,1,88,2,91,6,100,2,105,2,150,3,154,12,167,3,175,8,184,1]],[399,[2,1,4,4,22,1,82,1,94,2,105,1,153,8,162,5,170,1,175,8,184,1]],[400,[2,6,22,1,73,2,82,1,94,2,105,1,109,2,152,9,163,5,170,1,175,3,179,7]],[401,[1,1,3,4,73,2,82,1,94,2,105,1,107,1,109,8,152,7,160,1,164,4,170,1,176,2,179,7]],[402,[3,5,69,6,105,1,107,1,109,9,147,4,152,7,164,6,171,5,178,6,185,1]],[403,[1,1,3,4,67,8,105,1,107,1,109,9,147,4,152,4,164,4,169,1,171,4,180,4,185,1]],[404,[0,2,3,3,67,8,101,1,105,1,107,1,109,9,147,4,152,4,164,6,171,4,180,4,185,1]],[405,[0,1,2,4,67,8,101,1,105,1,107,1,109,9,147,4,152,5,162,6,171,4,180,4,185,2]],[406,[0,1,2,4,63,13,107,1,109,10,152,6,161,8,178,1,180,7]],[407,[0,1,2,4,64,12,107,11,153,7,162,6,172,1,178,7,186,1]],[408,[0,1,2,4,63,13,108,11,154,14,172,1,178,7,186,1]],[409,[0,1,2,4,63,2,67,11,82,2,88,2,94,2,100,2,103,1,105,3,109,9,119,1,140,1,155,11,167,1,179,1,181,4,186,1]],[410,[0,1,2,4,63,1,65,54,133,7,157,7,181,4,186,1]],[411,[0,1,2,4,64,56,131,10,181,6]],[412,[0,6,63,57,130,12,181,6]],[413,[0,6,63,13,77,44,129,14,181,6]],[414,[1,5,63,58,129,5,136,8,181,6]],[415,[1,5,63,58,126,8,136,1,140,4,181,6]],[416,[0,6,63,58,123,4,128,5,140,4,181,6]],[417,[1,5,63,58,123,4,128,5,141,4,181,5]],[418,[1,5,63,57,121,1,123,4,128,4,141,4,181,5]],[419,[1,5,64,56,121,6,128,4,141,3,181,5]],[420,[1,5,65,54,123,10,140,4,181,5]],[421,[1,5,67,50,123,4,128,6,139,5,181,5]],[422,[0,6,63,3,123,13,138,6,181,5]],[423,[0,6,63,1,123,3,128,15,181,6]],[424,[0,6,103,5,109,4,121,3,129,12,181,6]],[425,[0,6,87,1,103,4,108,1,111,2,121,3,131,9,181,6]],[426,[0,1,2,4,133,1,175,2,181,6]],[427,[0,1,2,3,175,2,181,6]],[428,[0,1,2,3,159,3,181,6]],[429,[0,1,2,3,143,4,155,10,180,5,186,1]],[430,[0,1,2,4,155,11,177,2,180,7]],[431,[0,1,2,4,154,13,177,2,180,7]],[432,[0,6,7,1,153,15,177,2,180,7]],[433,[1,1,3,3,7,1,153,9,163,5,169,1,176,3,180,6]],[434,[1,1,3,3,7,2,152,10,164,7,175,4,180,4,185,1]],[435,[3,5,152,7,160,1,164,7,175,9,185,1]],[436,[2,6,152,5,164,9,177,1,179,7]],[437,[2,1,4,3,150,1,152,5,164,6,171,1,177,1,179,4,184,1]],[438,[2,1,4,5,150,7,164,6,171,2,179,4,184,1]],[439,[2,1,4,4,151,9,163,5,171,1,178,7]],[440,[3,1,5,3,151,17,178,4,183,1]],[441,[3,1,5,5,151,15,168,1,176,1,178,4,183,1]],[442,[5,4,133,1,150,1,152,14,171,2,176,8]],[443,[4,1,6,3,153,2,156,9,166,1,171,4,177,6]],[444,[4,6,132,8,153,4,162,1,164,3,169,5,176,7]],[445,[4,2,7,3,127,2,130,12,169,6,176,6]],[446,[5,1,7,5,127,2,130,13,154,2,169,3,173,2,176,4,181,1]],[447,[6,5,128,6,138,5,170,3,175,7]],[448,[6,1,8,5,127,1,129,4,140,4,145,1,170,4,175,4,180,1]],[449,[6,6,13,1,128,5,140,4,172,1,174,7]],[450,[9,5,128,5,140,5,174,4,179,1]],[451,[8,1,10,6,128,4,140,5,173,4,178,2]],[452,[8,1,10,5,128,4,140,5,173,4,178,1]],[453,[9,1,11,5,23,1,128,4,140,4,172,4,177,1]],[454,[11,5,23,1,127,1,129,4,137,7,170,8]],[455,[10,1,12,6,23,1,128,8,138,6,168,1,170,7]],[456,[10,8,22,1,130,13,167,10]],[457,[11,1,13,6,129,1,131,10,166,11]],[458,[12,1,14,4,130,11,166,10]],[459,[13,6,166,9]],[460,[13,8,132,1,138,1,165,10]],[461,[14,1,16,4,21,1,135,1,164,10]],[462,[15,1,17,4,22,1,163,11]],[463,[16,1,18,4,23,1,162,11]],[464,[16,2,19,4,162,9]],[465,[17,2,20,4,26,1,33,3,160,10]],[466,[18,2,21,4,27,1,29,1,33,2,153,1,159,1,161,8]],[467,[19,2,22,4,28,3,33,2,151,3,157,2,160,8]],[468,[20,2,23,4,29,1,150,4,157,1,159,7]],[469,[21,2,24,5,30,1,150,4,156,7,164,1]],[470,[23,1,25,5,150,1,154,1,156,6,163,1]],[471,[24,1,26,6,33,1,152,2,155,6,162,1]],[472,[25,2,28,5,34,1,154,5,160,2]],[473,[26,2,29,7,144,3,149,2,152,6,159,2]],[474,[28,8,43,2,56,7,139,1,147,2,151,6,158,2]],[475,[29,9,43,4,55,8,145,2,149,6,156,2]],[476,[30,2,34,6,42,6,49,14,147,6,155,2]],[477,[32,10,43,5,49,14,142,1,145,7,153,3]],[478,[33,12,46,4,54,1,59,4,143,7,151,3]],[479,[34,13,48,7,59,4,135,2,141,7,150,2]],[480,[36,14,51,12,134,2,138,8,148,2]],[481,[39,3,43,10,54,9,128,4,135,13]],[482,[42,2,45,11,58,1,66,3,83,4,131,15]],[483,[44,3,48,12,63,6,72,1,83,4,112,3,119,4,127,12,140,3]],[484,[47,2,51,14,87,7,115,1,121,15,137,4]],[485,[49,3,54,17,79,1,83,20,115,19,135,3]],[486,[52,5,59,25,101,27,131,3]],[487,[55,1,57,3,63,61,127,4]],[488,[60,5,69,49,119,1,121,5]],[489,[66,6,77,29,112,9]],[490,[72,13,90,23]],[491,[79,8,88,1,90,11]],[492,[86,3,90,7]],[493,[86,12]],[494,[86,1,88,10]],[495,[87,11]]]},"11:1":{"w":193,"h":484,"rows":[[241,[116,1]],[242,[116,1,132,6]],[243,[116,1,132,8]],[244,[116,1,132,9]],[245,[116,1,132,10]],[246,[116,6,131,12]],[247,[120,22]],[248,[116,25]],[249,[116,16,133,8]],[250,[116,18,135,7]],[251,[116,20,138,1,140,2,143,1]],[252,[116,24,141,4]],[253,[117,3,123,1,127,15,144,3]],[254,[132,12,146,2]],[255,[136,10,147,2]],[256,[138,10,149,2]],[257,[137,2,141,11]],[258,[140,1,142,12]],[259,[141,11,153,2]],[260,[143,10,154,2]],[261,[137,12,150,6]],[262,[136,21]],[263,[131,3,137,5,145,6,152,4,157,1]],[264,[134,6,141,2,147,5,153,6]],[265,[130,13,150,2,154,6]],[266,[128,17,152,1,154,7]],[267,[124,1,127,6,134,12,153,1,155,6]],[268,[36,6,126,5,133,2,143,4,152,1,154,1,156,6]],[269,[34,10,125,2,128,3,134,4,143,5,153,1,157,3,161,1]],[270,[33,1,35,10,77,1,124,4,129,1,134,2,137,1,145,4,153,1,155,1,157,6]],[271,[32,1,34,1,37,9,77,1,118,2,121,1,123,4,128,3,146,4,154,1,156,1,158,5]],[272,[31,1,33,1,36,10,77,1,118,2,122,4,127,2,148,2,156,1,158,6]],[273,[30,1,32,1,35,12,77,1,122,3,126,2,147,4,155,1,157,7]],[274,[29,4,35,13,76,1,121,4,148,3,157,7]],[275,[29,1,31,1,34,14,75,2,121,4,148,4,158,7]],[276,[28,3,33,3,40,9,75,3,121,4,149,3,158,7]],[277,[28,1,30,1,32,3,36,1,38,1,40,10,74,2,77,1,119,5,149,3,158,7]],[278,[28,3,32,3,37,1,39,1,41,9,73,5,119,4,149,3,159,6]],[279,[27,7,40,1,42,9,73,5,120,3,149,3,159,6]],[280,[27,1,29,4,42,2,45,7,71,3,75,3,117,1,119,4,149,3,159,7]],[281,[27,1,29,4,41,12,70,3,74,4,119,4,149,3,159,7]],[282,[27,6,41,11,53,1,69,9,120,4,149,3,159,7]],[283,[27,6,41,1,44,9,54,2,68,2,71,7,119,1,121,3,149,3,158,8]],[284,[27,6,45,10,56,4,64,4,70,8,121,4,144,4,149,3,159,7]],[285,[27,6,46,11,67,10,121,4,126,5,143,5,149,4,159,7]],[286,[26,8,35,1,47,3,52,24,122,5,129,3,143,5,149,4,159,7]],[287,[28,5,34,2,48,27,120,1,122,5,129,2,143,9,160,6]],[288,[27,6,34,2,48,24,120,2,123,7,135,3,143,7,151,1,157,2,160,6]],[289,[27,6,35,1,48,22,74,1,122,1,124,6,144,4,150,1,156,2,159,7]],[290,[27,6,35,1,49,1,53,14,122,1,125,5,143,2,146,1,148,1,150,1,157,1,159,7]],[291,[27,6,34,1,54,1,56,9,71,1,123,7,143,3,147,1,159,7]],[292,[27,1,29,4,34,1,124,1,126,8,138,4,143,4,157,1,159,7]],[293,[27,1,29,4,125,2,128,5,135,10,157,1,159,6]],[294,[27,1,29,4,129,15,157,1,159,6]],[295,[27,6,128,1,132,10,157,6,164,1]],[296,[28,5,155,2,158,7]],[297,[28,1,30,3,132,2,155,2,158,7]],[298,[30,5,156,1,158,6]],[299,[28,6,153,3,157,7]],[300,[29,1,31,3,153,3,157,7]],[301,[29,1,31,4,152,2,155,8]],[302,[29,6,36,1,152,1,156,7]],[303,[30,1,32,5,151,1,156,7]],[304,[31,5,38,1,40,1,150,2,155,7]],[305,[31,1,33,4,40,1,150,2,155,7]],[306,[31,1,33,5,151,1,154,1,156,5]],[307,[32,1,34,3,152,1,154,7]],[308,[32,1,34,5,148,10,159,1]],[309,[33,1,35,3,39,2,150,2,153,5,159,1]],[310,[33,1,35,4,40,2,149,2,152,5,158,1]],[311,[34,5,40,2,149,2,152,5,158,1]],[312,[34,1,36,5,149,9]],[313,[35,5,149,1,151,7]],[314,[35,1,37,5,149,6,156,2]],[315,[35,6,148,1,150,7]],[316,[36,1,38,3,42,1,148,1,150,7]],[317,[36,1,38,5,149,5,155,2]],[318,[36,6,147,1,149,5,155,1]],[319,[37,1,39,3,142,1,145,11]],[320,[37,1,39,4,142,1,145,8,154,2]],[321,[37,1,39,4,145,2,148,5,154,2]],[322,[37,6,44,1,144,3,148,7]],[323,[37,6,44,1,146,1,148,5,154,1]],[324,[37,6,44,1,146,1,148,5,154,1]],[325,[37,2,40,3,44,1,143,1,146,1,148,7]],[326,[37,2,40,3,44,1,143,1,146,1,148,7]],[327,[37,2,40,3,148,7]],[328,[37,1,39,4,148,7]],[329,[37,1,39,4,147,8]],[330,[37,1,39,4,147,6,154,1]],[331,[37,1,39,3,147,1,149,7]],[332,[39,3,147,1,149,7]],[333,[38,1,40,2,149,7]],[334,[38,4,150,7]],[335,[37,4,42,1,149,9]],[336,[35,1,37,4,149,9]],[337,[34,6,41,1,149,10]],[338,[34,1,36,5,150,1,152,8]],[339,[33,1,35,6,151,10]],[340,[32,8,151,10]],[341,[31,2,34,5,40,2,151,11]],[342,[31,1,33,6,40,2,153,10]],[343,[30,1,32,7,155,8]],[344,[29,1,31,6,156,8]],[345,[28,9,155,10]],[346,[27,8,156,10]],[347,[26,2,29,6,157,10]],[348,[25,2,28,1,30,3,157,10]],[349,[24,2,27,1,29,4,157,11]],[350,[23,2,26,1,28,5,157,3,161,1,163,6]],[351,[23,1,25,7,160,1,164,6]],[352,[21,2,24,7,165,7]],[353,[21,11,164,1,166,7]],[354,[20,1,22,2,25,4,163,1,165,1,167,6]],[355,[19,1,21,2,24,4,168,6]],[356,[18,2,21,6,165,2,169,6]],[357,[17,2,20,6,32,1,164,1,166,2,169,7]],[358,[17,1,19,6,168,1,170,6]],[359,[16,1,18,6,167,1,169,1,171,6]],[360,[15,1,17,7,26,2,168,1,170,1,172,6]],[361,[15,1,17,6,26,3,169,3,173,4,178,1]],[362,[14,1,16,6,168,4,173,4,178,1]],[363,[13,1,15,7,169,2,172,8]],[364,[12,9,171,9]],[365,[12,8,172,9]],[366,[11,1,13,6,21,2,173,8]],[367,[10,2,13,5,21,1,173,7,181,1]],[368,[10,1,12,5,20,1,174,9]],[369,[9,1,11,6,174,10]],[370,[8,2,11,5,31,1,175,7,183,1]],[371,[8,1,10,6,20,1,23,7,175,10]],[372,[7,2,10,5,18,1,21,11,35,1,176,9]],[373,[7,1,9,5,19,6,28,7,172,1,176,10]],[374,[6,2,9,5,18,6,29,8,38,2,177,7,185,1]],[375,[6,1,8,6,17,4,23,2,30,2,33,6,40,1,177,9]],[376,[5,2,8,5,16,5,24,1,33,8,42,2,179,8]],[377,[5,1,7,6,16,4,22,2,34,9,179,6,186,1]],[378,[5,1,7,4,16,3,37,8,179,9]],[379,[5,1,7,4,15,4,37,10,179,7,187,1]],[380,[4,1,6,4,15,4,42,7,51,1,179,10]],[381,[4,1,6,4,14,4,42,3,46,6,179,10]],[382,[3,1,5,5,14,3,41,1,46,7,55,1,180,7,188,1]],[383,[3,1,5,4,14,3,46,3,50,6,181,9]],[384,[3,1,5,4,14,3,52,6,59,1,181,7,189,1]],[385,[3,6,14,3,51,2,54,6,181,7,189,1]],[386,[2,1,4,4,14,3,56,6,63,1,183,8]],[387,[2,1,4,5,14,3,56,1,58,6,184,7]],[388,[2,7,14,3,60,5,184,7]],[389,[1,7,14,3,59,9,183,8]],[390,[1,1,3,5,14,3,61,5,183,1,185,7]],[391,[1,1,3,6,14,3,61,6,182,2,185,5,191,1]],[392,[1,1,3,4,8,1,14,3,60,7,183,1,185,5]],[393,[1,6,13,4,60,7,183,1,185,5,191,1]],[394,[1,6,13,4,62,2,65,4,186,4,191,2]],[395,[0,1,2,5,14,3,63,1,65,4,186,4,191,2]],[396,[0,1,2,5,14,3,63,1,65,4,186,7]],[397,[0,1,2,5,14,3,63,1,65,3,186,7]],[398,[0,1,2,5,14,3,63,1,65,3,186,7]],[399,[2,5,14,3,18,2,63,1,65,2,186,5,192,1]],[400,[0,1,2,5,14,8,65,2,186,5,192,1]],[401,[0,1,2,4,14,9,65,2,186,5,192,1]],[402,[0,1,2,4,14,9,65,2,186,5,192,1]],[403,[0,7,14,9,65,3,182,2,186,5,192,1]],[404,[0,7,14,3,18,5,65,3,182,2,186,5,192,1]],[405,[0,1,2,3,14,3,18,3,65,3,182,2,186,5,192,1]],[406,[0,1,2,3,14,3,65,3,182,2,186,5,192,1]],[407,[0,1,2,4,14,3,65,3,180,2,186,5,192,1]],[408,[0,1,2,3,14,3,65,3,186,5,192,1]],[409,[0,1,2,3,14,3,65,3,186,5,192,1]],[410,[0,6,14,3,65,3,186,5,192,1]],[411,[0,1,2,4,14,3,65,2,186,5,192,1]],[412,[0,1,2,4,14,3,65,2,186,5,192,1]],[413,[0,1,2,4,14,3,65,2,186,7]],[414,[0,1,2,4,14,3,63,1,65,2,186,4,191,2]],[415,[0,1,2,4,13,4,65,3,186,4,191,1]],[416,[2,4,13,4,65,3,185,5,191,1]],[417,[1,5,13,4,63,1,65,3,185,5,191,1]],[418,[1,1,3,3,13,4,63,1,65,3,185,7]],[419,[1,1,3,4,13,4,63,1,65,3,183,1,185,6]],[420,[1,1,3,4,13,4,63,1,65,3,183,1,185,4,190,1]],[421,[1,1,3,4,13,4,63,1,65,3,184,5,190,1]],[422,[3,4,14,3,20,1,63,1,65,3,184,5,190,1]],[423,[2,6,14,3,21,2,63,1,65,3,184,7]],[424,[2,1,4,4,14,3,18,5,63,1,65,3,182,8]],[425,[2,1,4,4,14,9,63,1,65,3,183,5,189,1]],[426,[3,1,5,3,11,1,14,3,18,5,63,1,65,3,181,1,183,7]],[427,[3,1,5,4,13,1,15,8,63,1,65,3,180,9]],[428,[3,1,5,4,10,1,15,3,19,4,63,1,65,3,179,2,182,5,188,1]],[429,[4,1,6,5,16,7,63,1,65,3,179,2,182,5,188,1]],[430,[4,1,6,4,16,8,63,1,65,3,179,7,187,1]],[431,[6,4,16,1,18,6,63,1,65,3,174,2,179,1,181,5,187,1]],[432,[5,1,7,4,14,1,16,10,65,3,173,3,178,7]],[433,[5,1,7,4,12,4,18,2,21,7,65,3,173,3,177,8,186,1]],[434,[5,1,8,8,23,9,38,1,43,1,65,3,174,5,180,5,186,1]],[435,[8,4,13,3,21,3,25,7,35,5,65,2,174,10]],[436,[6,2,9,6,26,14,65,2,175,9]],[437,[7,1,9,7,23,1,26,1,28,12,65,2,175,2,178,5,184,1]],[438,[7,2,10,6,30,5,36,4,58,2,63,1,65,2,175,8,184,1]],[439,[8,1,10,7,18,1,28,2,31,6,38,2,57,4,63,1,65,2,68,1,175,1,177,5,183,1]],[440,[8,2,11,4,16,1,18,1,32,1,34,5,40,2,56,2,60,2,63,1,65,2,172,1,176,7]],[441,[9,2,12,5,19,1,34,1,36,7,55,13,176,7]],[442,[10,1,12,4,17,1,36,1,38,5,44,2,55,8,64,2,67,1,175,5,181,1]],[443,[10,2,13,4,18,1,36,11,57,5,63,5,174,7]],[444,[11,7,20,1,39,8,48,1,58,3,62,3,66,2,171,8,180,1]],[445,[12,7,20,1,40,9,59,1,61,7,171,1,173,5,179,1]],[446,[13,1,15,6,42,1,44,7,52,5,59,8,169,2,172,6,179,1]],[447,[14,1,16,4,44,1,48,14,63,2,169,10]],[448,[14,2,17,4,22,1,49,12,62,1,165,2,168,1,170,6,177,1]],[449,[15,2,18,4,23,1,44,1,48,1,52,5,60,2,164,11,176,1]],[450,[16,1,18,6,166,11]],[451,[17,1,19,5,25,1,46,1,165,1,167,6,174,2]],[452,[18,1,20,5,26,1,46,2,164,1,166,6,173,2]],[453,[19,1,21,5,163,1,165,6,172,2]],[454,[20,2,23,7,161,2,164,6,172,1]],[455,[21,1,23,6,34,2,148,2,157,4,162,7,170,2]],[456,[21,2,24,14,148,1,157,3,161,7,169,2]],[457,[23,2,26,9,150,4,157,2,160,7,168,1]],[458,[23,3,27,6,34,2,151,3,155,2,158,8,167,1]],[459,[25,2,28,7,36,2,157,10]],[460,[26,3,30,6,38,1,155,8,164,2]],[461,[27,3,31,7,42,2,148,1,154,7,162,2]],[462,[29,10,41,3,148,2,152,8,161,2]],[463,[31,2,34,7,50,1,124,3,143,1,145,1,149,9,159,3]],[464,[33,2,36,8,46,2,124,1,126,1,142,4,147,13]],[465,[34,2,38,8,48,1,56,3,124,3,132,2,142,1,145,13]],[466,[36,2,40,8,52,6,139,1,142,11,154,2]],[467,[37,3,42,10,54,1,56,1,125,6,132,1,140,14]],[468,[39,3,44,10,58,1,126,7,137,12,150,3]],[469,[41,3,46,12,127,2,134,12,148,3]],[470,[44,2,49,14,68,5,117,7,129,14,145,3]],[471,[47,3,52,16,90,2,100,2,124,16,141,5]],[472,[50,2,56,19,88,18,107,1,116,21,139,4]],[473,[52,4,60,34,96,37,136,4]],[474,[55,5,65,63,132,5]],[475,[59,7,71,51,125,8]],[476,[65,6,80,1,82,30,121,6]],[477,[71,10,108,1,110,10]],[478,[80,3,84,5,91,17]],[479,[92,1,94,6]],[480,[90,2,94,4,99,3]],[481,[90,13]],[482,[90,12]],[483,[91,10]]]},"12:0":{"w":191,"h":511,"rows":[[235,[25,29,115,3]],[236,[24,30,115,3]],[237,[24,30,115,3]],[238,[24,30,115,3]],[239,[23,31,115,3]],[240,[23,31,115,3]],[241,[23,31,115,3]],[242,[23,31,115,3]],[243,[22,32,115,3]],[244,[22,32,115,3]],[245,[22,32,115,3]],[246,[22,32,116,2]],[247,[21,33,115,3]],[248,[21,33,115,3]],[249,[21,33,115,3]],[250,[21,33,115,3]],[251,[21,33,115,3]],[252,[21,33,115,3]],[253,[21,33,115,3]],[254,[20,34,115,3]],[255,[20,34,115,3]],[256,[21,34,115,3]],[257,[21,34,115,3]],[258,[21,34,116,2]],[259,[20,35,116,2]],[260,[20,35,115,3]],[261,[20,36,115,3]],[262,[21,35,115,3]],[263,[21,35,115,3]],[264,[21,35,115,3]],[265,[21,36,115,3]],[266,[21,36,115,3]],[267,[21,36,115,4]],[268,[21,37,115,4]],[269,[21,37,115,4]],[270,[21,37,115,4]],[271,[22,36,116,3]],[272,[22,37,115,4]],[273,[22,37,115,4]],[274,[22,38,115,4]],[275,[22,38,115,4]],[276,[23,38,115,4]],[277,[23,38,115,4]],[278,[23,39,115,4]],[279,[23,39,115,4]],[280,[24,39,115,4]],[281,[24,40,115,4]],[282,[24,40,116,3]],[283,[24,41,115,4]],[284,[25,41,115,4]],[285,[25,42,115,4]],[286,[25,43,115,4]],[287,[25,44,115,4]],[288,[26,45,115,4]],[289,[26,51,115,4]],[290,[26,51,115,4]],[291,[27,50,115,4]],[292,[27,50,115,2,118,1]],[293,[27,50,117,2]],[294,[27,50,115,4]],[295,[28,49,115,4]],[296,[28,49,115,4]],[297,[29,48,115,4]],[298,[29,48,115,4]],[299,[29,48,115,4]],[300,[30,47,115,4]],[301,[30,47,115,4]],[302,[30,47,115,4]],[303,[31,46,116,4]],[304,[31,46,115,5]],[305,[31,46,115,5]],[306,[31,46,115,5]],[307,[32,45,115,5]],[308,[32,45,115,5,165,2]],[309,[32,45,115,5,162,8]],[310,[33,44,115,5,161,10]],[311,[33,44,115,5,160,12]],[312,[33,44,117,3,159,14]],[313,[34,43,115,5,158,16]],[314,[34,43,115,5,157,17]],[315,[34,43,115,5,157,18]],[316,[34,43,115,5,156,19]],[317,[35,42,115,5,155,20]],[318,[35,42,115,5,155,20]],[319,[35,42,115,5,154,21]],[320,[35,42,115,5,154,21]],[321,[35,42,117,3,153,22]],[322,[36,41,115,5,152,23]],[323,[36,41,115,5,151,24]],[324,[36,41,115,5,151,24]],[325,[36,41,115,5,150,25]],[326,[37,40,115,5,149,26]],[327,[37,40,115,6,148,27]],[328,[37,40,115,6,147,27]],[329,[38,39,115,6,146,28]],[330,[38,39,117,5,145,29]],[331,[38,39,115,7,144,29]],[332,[38,39,115,8,144,29]],[333,[38,43,84,7,93,9,104,10,115,8,143,30]],[334,[38,42,83,8,93,9,104,10,115,9,141,31]],[335,[38,43,83,8,93,10,104,10,115,11,140,32]],[336,[39,42,83,8,93,9,104,10,115,12,137,34]],[337,[39,42,83,8,93,10,104,10,115,56]],[338,[39,42,83,8,93,10,104,7,116,32,149,21]],[339,[39,42,83,8,93,6,104,1,116,31,148,22]],[340,[39,42,83,1,93,10,104,10,115,31,147,23]],[341,[39,42,83,8,93,8,102,1,104,10,115,54]],[342,[39,42,83,8,93,10,104,10,115,54]],[343,[38,43,83,8,93,10,104,10,115,53]],[344,[38,43,83,8,93,9,104,10,115,52]],[345,[38,43,83,8,93,8,102,1,104,10,115,52]],[346,[38,43,84,7,93,8,104,2,117,49]],[347,[38,43,83,4,89,2,97,3,104,2,112,2,115,51]],[348,[38,42,84,2,90,1,93,10,104,10,115,1,117,49]],[349,[38,42,82,1,84,7,94,7,104,10,115,1,117,48]],[350,[37,43,82,9,93,9,104,10,115,1,117,48]],[351,[37,43,82,9,94,9,104,10,115,1,117,47]],[352,[37,43,82,9,94,9,104,10,115,1,117,47]],[353,[37,43,82,9,94,9,104,10,115,1,117,46]],[354,[36,43,82,8,94,9,104,10,115,48]],[355,[36,43,82,1,85,6,94,1,99,4,104,59]],[356,[36,44,82,9,94,1,97,6,104,58]],[357,[35,45,82,9,94,9,104,58]],[358,[35,45,82,9,94,9,104,58]],[359,[35,45,82,9,92,11,104,58]],[360,[34,46,82,9,92,11,104,57]],[361,[34,46,82,9,92,11,104,57]],[362,[33,47,82,9,92,11,104,57]],[363,[33,47,82,9,92,11,104,57]],[364,[32,48,82,9,92,69]],[365,[32,48,82,9,92,69]],[366,[31,49,81,10,92,69]],[367,[31,49,81,10,92,69]],[368,[30,50,81,10,92,68]],[369,[29,51,81,10,92,69]],[370,[29,51,81,10,92,69]],[371,[28,52,81,10,92,69]],[372,[27,53,81,10,92,69]],[373,[27,53,81,10,92,69]],[374,[26,54,81,10,92,69]],[375,[25,55,81,10,92,69]],[376,[25,55,81,10,92,70]],[377,[24,56,81,10,92,70]],[378,[23,57,81,81]],[379,[23,57,81,40,129,33]],[380,[22,58,81,10,92,11,104,8,116,1,131,32]],[381,[21,59,81,10,92,10,104,1,116,1,131,32]],[382,[21,59,81,10,92,4,104,1,113,1,116,1,131,32]],[383,[20,59,81,1,83,2,104,1,116,1,131,33]],[384,[19,53,73,6,81,1,113,1,116,1,131,33]],[385,[19,51,78,1,82,3,113,1,116,1,131,34]],[386,[18,48,76,2,83,2,113,1,131,34]],[387,[18,47,82,2,113,1,131,35]],[388,[17,48,82,2,113,1,131,35]],[389,[17,48,82,2,113,1,131,36]],[390,[16,49,82,2,113,1,131,36]],[391,[15,50,78,1,82,2,131,37]],[392,[15,50,78,1,89,1,105,1,107,1,131,38]],[393,[14,51,78,1,89,1,105,1,107,1,131,39]],[394,[13,52,78,1,89,1,105,1,107,1,131,39]],[395,[13,52,89,1,105,1,107,1,131,40]],[396,[12,53,89,1,105,1,129,1,131,41]],[397,[12,53,89,1,105,1,128,1,131,41]],[398,[11,54,105,1,127,1,129,1,131,42]],[399,[11,54,104,1,113,1,125,1,127,2,130,43]],[400,[10,55,89,1,93,1,104,2,108,1,116,1,127,47]],[401,[9,56,77,1,81,1,89,1,99,1,102,1,104,1,114,1,116,1,121,54]],[402,[9,56,77,1,81,1,102,1,104,1,108,7,116,59]],[403,[8,57,77,1,102,1,104,11,116,60]],[404,[8,58,72,5,94,9,104,72]],[405,[8,59,73,4,80,1,87,2,93,84]],[406,[7,59,72,7,80,10,92,86]],[407,[7,72,80,10,91,87]],[408,[6,73,80,99]],[409,[6,73,80,99]],[410,[5,74,80,100]],[411,[5,74,80,101]],[412,[4,75,80,101]],[413,[4,75,80,102]],[414,[4,75,80,102]],[415,[3,76,80,103]],[416,[3,76,80,103]],[417,[3,76,80,10,91,61,159,25]],[418,[2,88,91,60,160,24]],[419,[2,88,91,59,152,2,161,23]],[420,[2,88,91,59,151,1,154,1,161,24]],[421,[2,88,91,24,116,34,151,1,154,2,161,24]],[422,[1,89,91,24,116,5,129,21,161,25]],[423,[1,89,91,12,104,7,129,21,160,26]],[424,[1,89,91,12,104,2,129,21,160,27]],[425,[1,77,79,11,91,6,130,21,160,27]],[426,[1,77,83,7,101,1,104,1,129,23,153,1,159,29]],[427,[1,77,92,1,129,23,153,2,158,30]],[428,[0,71,77,1,129,59]],[429,[0,65,76,2,81,1,129,60]],[430,[0,64,74,4,101,1,129,60]],[431,[0,64,75,3,101,1,130,59]],[432,[0,64,76,2,130,60]],[433,[0,64,76,2,130,60]],[434,[0,64,76,1,130,60]],[435,[0,64,76,2,130,60]],[436,[0,64,76,1,130,60]],[437,[0,64,76,1,130,61]],[438,[0,64,76,1,130,35,168,23]],[439,[0,64,76,1,101,1,131,31,164,3,170,21]],[440,[0,64,76,1,101,1,104,1,128,1,131,30,163,2,169,22]],[441,[0,64,76,1,88,1,91,1,101,1,104,1,117,8,130,31,169,1,171,20]],[442,[0,64,76,1,88,1,91,1,101,1,104,1,118,1,130,30,171,20]],[443,[0,64,76,1,88,1,91,1,101,1,104,1,118,5,126,2,129,31,172,19]],[444,[0,64,76,1,88,1,100,1,104,1,118,42,172,19]],[445,[1,63,76,1,88,1,91,1,102,1,104,1,112,2,116,44,171,20]],[446,[1,63,76,1,84,2,87,1,91,1,100,1,102,1,104,1,106,55,171,20]],[447,[1,64,74,2,81,2,85,3,94,9,104,60,165,1,170,21]],[448,[1,63,65,1,81,8,91,76,169,1,171,20]],[449,[1,67,70,7,80,10,91,100]],[450,[2,75,79,87,167,24]],[451,[2,189]],[452,[2,189]],[453,[2,189]],[454,[3,188]],[455,[3,74,78,12,91,100]],[456,[4,73,78,113]],[457,[4,73,78,113]],[458,[5,72,78,11,90,101]],[459,[5,72,78,11,91,12,104,49,158,33]],[460,[6,71,78,11,91,12,104,12,117,5,124,28,160,31]],[461,[6,71,78,11,91,12,104,7,114,1,117,1,124,27,160,30]],[462,[7,70,78,11,91,11,114,1,117,4,124,1,126,25,161,29]],[463,[7,70,78,1,80,1,82,4,88,1,91,1,108,1,114,1,117,1,119,3,125,26,161,29]],[464,[8,68,78,3,88,1,92,1,95,7,105,4,110,1,114,1,117,3,121,1,125,26,162,28]],[465,[9,61,72,1,78,10,92,1,101,1,104,2,107,2,114,1,117,5,126,24,162,27]],[466,[9,60,71,3,75,1,78,5,84,1,92,1,97,1,99,3,105,3,117,1,126,24,162,27]],[467,[10,60,71,2,75,1,78,7,88,1,92,2,99,3,104,2,108,3,126,24,161,28]],[468,[10,60,75,1,78,5,87,1,92,1,94,1,97,3,108,3,117,3,121,1,126,25,160,28]],[469,[11,59,73,1,75,1,80,3,95,2,98,2,108,3,112,1,117,1,119,1,121,1,125,29,159,29]],[470,[12,57,71,4,79,2,82,1,84,2,95,1,97,2,101,2,108,1,117,1,126,29,157,1,159,29]],[471,[13,56,71,1,78,1,82,4,88,1,92,4,98,2,102,1,105,1,108,1,111,1,115,1,118,1,126,61]],[472,[14,54,78,1,88,1,91,1,110,1,125,62]],[473,[15,53,71,1,73,1,75,1,78,1,87,2,91,1,111,1,125,61]],[474,[16,52,73,1,75,1,78,1,80,1,86,3,91,1,99,1,125,61]],[475,[16,52,75,1,78,2,85,4,91,1,125,60]],[476,[17,51,75,1,78,1,85,2,99,1,111,2,126,15,143,42]],[477,[18,50,78,1,85,2,88,1,91,1,99,1,112,1,126,14,143,1,146,38]],[478,[19,49,126,13,147,37]],[479,[20,48,75,1,88,1,91,1,126,12,147,36]],[480,[22,46,71,1,105,1,120,1,125,13,148,34]],[481,[23,45,71,1,75,1,92,1,101,1,104,1,113,1,120,1,125,13,148,34]],[482,[24,44,71,2,76,3,103,1,125,13,147,34]],[483,[25,44,75,4,88,1,90,1,113,1,116,3,125,13,147,33]],[484,[27,42,72,1,76,3,83,1,113,1,115,1,119,2,125,14,147,33]],[485,[28,41,78,1,114,2,125,15,147,32]],[486,[30,39,78,1,114,2,118,1,120,1,125,16,147,31]],[487,[31,38,76,3,80,1,85,2,100,1,113,2,116,2,125,19,146,31]],[488,[33,35,71,1,85,1,99,1,125,51]],[489,[34,34,69,1,83,1,99,1,104,3,125,50]],[490,[36,32,69,1,72,1,82,3,92,1,102,1,107,1,109,1,116,1,126,48]],[491,[38,30,71,1,83,4,94,1,106,2,119,1,126,47]],[492,[39,29,70,1,72,1,75,1,83,5,91,1,100,4,109,1,113,6,120,2,126,46]],[493,[41,32,74,9,84,3,88,4,98,1,104,18,125,46]],[494,[44,36,85,2,89,1,98,3,105,11,123,47]],[495,[46,43,95,73]],[496,[48,119]],[497,[50,116]],[498,[52,112]],[499,[54,109]],[500,[57,104]],[501,[60,100]],[502,[63,95]],[503,[66,90]],[504,[69,84]],[505,[73,77]],[506,[77,71]],[507,[81,64]],[508,[85,56]],[509,[90,47]],[510,[96,11,116,2,119,12]]]},"12:1":{"w":186,"h":471,"rows":[[216,[112,1,141,23]],[217,[112,1,141,24]],[218,[112,1,141,24]],[219,[112,1,141,24]],[220,[112,1,141,25]],[221,[112,1,141,25]],[222,[112,1,141,26]],[223,[112,1,141,26]],[224,[112,1,141,26]],[225,[112,1,141,27]],[226,[112,1,141,27]],[227,[112,2,141,27]],[228,[112,2,141,27]],[229,[112,2,140,29]],[230,[112,2,140,29]],[231,[112,2,140,29]],[232,[112,2,140,29]],[233,[112,2,140,29]],[234,[112,1,140,29]],[235,[112,2,139,31]],[236,[112,2,139,31]],[237,[112,2,139,31]],[238,[112,2,139,31]],[239,[112,2,138,32]],[240,[112,2,138,32]],[241,[112,2,137,33]],[242,[112,2,137,33]],[243,[112,2,137,32]],[244,[112,2,136,33]],[245,[112,2,136,33]],[246,[112,2,135,34]],[247,[112,2,135,34]],[248,[112,2,134,35]],[249,[112,2,134,34]],[250,[112,2,133,35]],[251,[112,2,133,35]],[252,[112,2,132,36]],[253,[112,2,131,36]],[254,[112,3,131,36]],[255,[112,3,130,37]],[256,[112,3,129,37]],[257,[112,4,128,38]],[258,[112,5,126,39]],[259,[112,6,125,40]],[260,[112,53]],[261,[112,52]],[262,[112,52]],[263,[30,6,112,52]],[264,[28,9,112,51]],[265,[27,11,112,51]],[266,[26,13,112,51]],[267,[25,15,112,50]],[268,[24,16,112,50]],[269,[24,17,112,50]],[270,[23,8,32,9,112,49]],[271,[23,19,112,49]],[272,[23,19,112,48]],[273,[22,21,112,48]],[274,[22,22,112,47]],[275,[22,22,112,47]],[276,[22,23,112,46]],[277,[22,24,74,1,112,46]],[278,[22,24,74,1,112,46]],[279,[22,25,74,1,112,45]],[280,[22,26,74,1,112,45]],[281,[22,27,73,2,112,44]],[282,[22,27,73,2,112,44]],[283,[22,28,72,3,112,44]],[284,[22,29,71,4,112,43]],[285,[23,29,70,5,112,43]],[286,[23,30,69,6,112,42]],[287,[23,32,68,7,112,42]],[288,[24,33,66,9,112,42]],[289,[24,51,112,41]],[290,[24,51,112,41]],[291,[25,50,112,41]],[292,[25,50,112,40]],[293,[25,50,112,40]],[294,[26,49,112,40]],[295,[26,49,112,39]],[296,[27,48,112,39]],[297,[27,48,112,39]],[298,[27,48,112,39]],[299,[28,47,112,39]],[300,[28,47,112,39]],[301,[28,47,112,38]],[302,[29,46,112,38]],[303,[29,46,112,38]],[304,[30,45,112,38]],[305,[30,45,112,38]],[306,[31,44,112,38]],[307,[31,119]],[308,[31,119]],[309,[32,118]],[310,[32,118]],[311,[32,118]],[312,[32,118]],[313,[33,117]],[314,[33,117]],[315,[33,117]],[316,[33,118]],[317,[33,118]],[318,[33,118]],[319,[34,117]],[320,[34,118]],[321,[34,118]],[322,[34,118]],[323,[34,119]],[324,[34,119]],[325,[34,120]],[326,[34,120]],[327,[33,121]],[328,[33,122]],[329,[33,122]],[330,[33,123]],[331,[33,123]],[332,[32,125]],[333,[32,125]],[334,[32,126]],[335,[31,127]],[336,[31,128]],[337,[31,129]],[338,[30,130]],[339,[30,131]],[340,[29,132]],[341,[29,133]],[342,[28,134]],[343,[28,135]],[344,[27,136]],[345,[26,138]],[346,[26,139]],[347,[25,140]],[348,[24,142]],[349,[24,143]],[350,[23,144]],[351,[22,146]],[352,[22,147]],[353,[21,148]],[354,[20,150]],[355,[20,20,46,125]],[356,[19,19,43,2,48,123]],[357,[19,18,42,4,49,123]],[358,[18,18,37,1,41,7,49,123]],[359,[17,18,36,1,41,6,50,123]],[360,[17,17,42,5,50,123]],[361,[16,17,42,4,50,124]],[362,[15,17,51,124]],[363,[15,16,51,124]],[364,[14,16,51,125]],[365,[13,17,51,125]],[366,[13,16,50,127]],[367,[12,16,50,127]],[368,[11,17,50,128]],[369,[11,16,50,128]],[370,[10,16,50,128]],[371,[9,17,50,129]],[372,[9,16,50,129]],[373,[8,17,50,130]],[374,[8,16,50,130]],[375,[7,16,50,130]],[376,[7,16,50,131]],[377,[6,16,50,131]],[378,[6,16,50,132]],[379,[6,16,50,132]],[380,[5,16,50,132]],[381,[5,16,50,133]],[382,[4,16,50,133]],[383,[4,16,50,133]],[384,[4,15,50,134]],[385,[3,16,20,1,50,134]],[386,[3,15,19,2,50,134]],[387,[3,19,50,134]],[388,[3,19,50,135]],[389,[2,20,50,135]],[390,[2,20,50,135]],[391,[2,14,18,3,50,135]],[392,[2,14,50,135]],[393,[1,15,50,136]],[394,[1,15,50,136]],[395,[1,15,50,136]],[396,[1,14,50,136]],[397,[1,14,45,3,50,136]],[398,[0,15,44,5,50,136]],[399,[0,14,44,5,50,136]],[400,[0,14,44,5,50,136]],[401,[0,14,45,3,50,136]],[402,[0,14,45,3,50,136]],[403,[0,14,46,2,50,136]],[404,[0,14,49,137]],[405,[0,14,49,137]],[406,[0,14,49,137]],[407,[0,14,49,137]],[408,[0,14,49,137]],[409,[0,14,49,137]],[410,[0,14,49,137]],[411,[0,14,49,137]],[412,[0,14,49,137]],[413,[0,14,49,136]],[414,[0,14,49,92,142,43]],[415,[0,15,49,85,137,5,146,39]],[416,[0,15,49,83,134,7,147,38]],[417,[1,15,19,1,49,82,132,3,138,1,149,36]],[418,[1,15,19,2,49,81,131,3,148,1,150,34]],[419,[1,15,18,4,49,80,130,3,148,2,151,33]],[420,[1,15,17,5,49,79,129,1,132,1,149,2,152,32]],[421,[1,21,49,78,129,1,132,1,153,31]],[422,[2,19,49,77,131,1,151,1,154,29]],[423,[2,16,49,77,151,1,154,29]],[424,[2,16,49,77,154,28]],[425,[3,15,48,77,154,28]],[426,[3,16,48,77,155,26]],[427,[3,16,49,76,155,26]],[428,[4,16,48,77,156,24]],[429,[4,17,48,76,156,24]],[430,[4,18,48,76,156,24]],[431,[5,18,49,75,155,24]],[432,[5,18,36,1,49,75,156,23]],[433,[6,18,35,2,49,75,155,23]],[434,[7,17,48,76,127,3,155,22]],[435,[7,19,48,76,127,3,155,22]],[436,[8,19,41,1,48,77,127,2,154,22]],[437,[9,19,40,4,48,19,71,7,83,5,92,8,102,8,113,13,149,3,154,21]],[438,[9,19,39,6,48,19,72,6,83,5,93,6,104,6,116,10,149,26]],[439,[10,20,39,6,47,18,72,6,83,4,94,4,104,6,116,9,130,2,149,1,151,23]],[440,[10,21,40,5,46,20,73,3,82,6,93,5,104,6,114,1,116,10,127,6,149,1,152,21]],[441,[11,22,41,24,73,3,83,5,93,7,101,2,104,6,116,14,132,1,149,23]],[442,[12,22,41,26,71,5,82,8,93,7,103,7,114,1,116,17,150,21]],[443,[13,24,41,37,79,31,113,1,115,17,149,21]],[444,[14,98,113,18,148,21]],[445,[15,119,146,22]],[446,[16,120,143,24]],[447,[17,146,164,2]],[448,[18,144,163,1]],[449,[19,144]],[450,[20,142]],[451,[21,140]],[452,[22,138]],[453,[23,135]],[454,[25,131]],[455,[26,129]],[456,[27,123,151,2]],[457,[29,122]],[458,[30,119]],[459,[32,115]],[460,[34,106,141,4]],[461,[35,103,139,4]],[462,[37,103]],[463,[40,97]],[464,[42,91]],[465,[45,85]],[466,[49,77]],[467,[51,71]],[468,[54,64]],[469,[58,54]],[470,[64,11,78,2,81,25]]]},"13:0":{"w":222,"h":507,"rows":[[266,[170,4]],[267,[46,9,167,10]],[268,[44,13,166,13]],[269,[42,7,53,5,165,5,172,1,174,6]],[270,[41,4,55,4,164,4,178,3]],[271,[40,5,56,3,164,3,179,3]],[272,[39,4,47,6,57,3,163,4,169,7,180,3]],[273,[38,5,46,8,58,2,163,2,169,8,181,3]],[274,[38,3,44,11,59,2,162,3,167,12,182,3]],[275,[37,4,43,13,59,2,162,2,167,13,183,3]],[276,[36,3,42,14,59,3,161,3,167,13,184,2]],[277,[36,3,41,16,60,2,161,2,167,14,185,2]],[278,[35,3,41,16,60,3,160,3,166,16,185,3]],[279,[35,2,40,18,61,3,160,3,165,18,185,3]],[280,[34,3,39,19,61,3,159,4,165,18,186,3]],[281,[34,3,39,20,61,4,159,3,165,18,187,2]],[282,[33,4,39,20,62,3,158,3,164,20,187,3]],[283,[33,3,38,21,63,3,157,4,163,22,187,3]],[284,[33,2,37,23,63,4,157,3,163,22,187,3]],[285,[32,3,37,24,64,3,156,3,162,23,187,4]],[286,[32,3,37,24,65,3,155,4,161,24,188,3]],[287,[32,3,37,25,65,4,154,3,161,25,188,3]],[288,[32,3,37,26,67,3,153,4,160,27,189,2]],[289,[31,4,37,26,67,4,152,4,159,28,189,3]],[290,[31,4,37,28,69,3,88,1,134,1,150,5,158,29,189,3]],[291,[31,4,37,28,70,4,86,3,134,2,149,5,157,30,189,3]],[292,[31,3,36,30,71,6,84,5,134,5,146,6,156,31,189,3]],[293,[31,3,36,31,73,16,135,15,155,32,189,3]],[294,[31,2,36,33,76,10,138,9,154,33,189,3]],[295,[31,2,36,35,79,1,81,4,140,1,153,34,190,2]],[296,[31,2,36,38,87,2,134,2,150,37,190,2]],[297,[31,2,36,39,86,3,134,4,148,39,189,3]],[298,[31,2,36,53,134,53,189,3]],[299,[31,2,36,53,134,53,189,3]],[300,[31,2,36,53,134,53,189,3]],[301,[31,3,37,52,134,52,189,3]],[302,[31,3,37,52,134,52,189,3]],[303,[31,4,37,52,134,52,189,3]],[304,[32,3,37,52,134,52,189,3]],[305,[32,3,37,52,138,48,189,2]],[306,[32,3,37,48,134,2,139,46,188,3]],[307,[32,3,37,48,134,3,138,47,188,3]],[308,[33,2,38,48,87,2,134,1,137,48,187,4]],[309,[33,3,39,47,87,2,134,1,136,49,187,3]],[310,[33,3,39,47,87,2,134,3,138,46,187,3]],[311,[34,3,39,47,88,1,134,3,139,45,187,3]],[312,[34,3,39,47,88,1,135,48,186,3]],[313,[35,2,39,48,88,1,135,48,186,3]],[314,[35,3,40,49,135,48,185,3]],[315,[35,4,41,48,137,1,139,43,185,3]],[316,[36,3,41,46,88,1,139,42,184,4]],[317,[36,3,41,46,88,1,139,42,184,3]],[318,[36,3,42,46,139,42,183,4]],[319,[37,3,43,45,134,1,139,41,183,3]],[320,[37,3,43,43,134,1,140,39,182,4]],[321,[37,4,44,42,140,39,182,3]],[322,[38,4,45,41,134,1,140,39,181,4]],[323,[38,5,45,41,134,1,140,38,181,3]],[324,[39,4,46,40,140,37,180,4]],[325,[39,4,46,40,88,1,139,38,180,3]],[326,[40,4,47,39,140,36,179,3]],[327,[41,4,47,39,139,36,179,3]],[328,[42,3,47,39,134,1,139,36,178,3]],[329,[42,3,48,38,139,36,177,4]],[330,[43,3,49,37,90,5,101,1,127,3,137,37,177,4]],[331,[43,3,49,38,91,4,98,5,108,2,118,2,127,4,137,37,177,3]],[332,[43,4,49,41,98,1,103,2,107,8,116,10,127,46,176,4]],[333,[44,3,49,48,98,75,176,4]],[334,[44,3,49,124,176,3]],[335,[44,3,50,123,175,4]],[336,[44,3,50,123,175,4]],[337,[44,4,50,123,176,3]],[338,[45,3,50,123,175,4]],[339,[44,3,50,123,175,4]],[340,[44,3,50,123,176,3]],[341,[44,3,50,123,176,3]],[342,[44,3,49,124,176,3]],[343,[43,4,49,125,177,3]],[344,[43,4,49,125,177,3]],[345,[42,4,49,126,177,3]],[346,[42,3,49,126,177,4]],[347,[41,4,48,127,178,3]],[348,[40,4,47,129,179,3]],[349,[40,4,47,130,179,4]],[350,[39,4,46,131,180,4]],[351,[38,4,45,133,181,3]],[352,[37,4,44,135,182,3]],[353,[36,5,43,136,183,3]],[354,[35,4,42,138,184,3]],[355,[35,3,41,140,185,3]],[356,[33,4,41,141,186,3]],[357,[32,4,40,26,68,87,159,24,187,3]],[358,[31,4,39,24,64,2,68,86,159,25,188,4]],[359,[30,4,38,22,61,1,69,2,72,81,161,2,164,21,189,4]],[360,[29,4,36,26,68,3,72,80,161,2,165,21,190,4]],[361,[28,4,35,26,67,4,73,23,97,18,119,8,128,2,139,14,158,6,165,22,191,4]],[362,[27,4,34,24,59,1,63,1,66,5,73,21,135,2,139,14,155,10,166,22,192,4]],[363,[26,4,34,25,63,2,67,4,72,13,89,1,139,13,153,4,159,30,193,4]],[364,[25,4,32,24,63,1,72,13,87,3,140,19,160,2,165,25,194,4]],[365,[24,5,31,25,57,2,62,1,65,20,87,3,138,1,140,20,161,1,165,2,168,23,195,3]],[366,[23,4,30,26,59,3,64,21,88,2,134,1,139,28,169,23,196,3]],[367,[22,4,29,26,60,26,88,2,134,1,139,25,165,1,169,24,197,3]],[368,[21,4,28,28,59,3,63,22,89,1,139,29,169,25,198,3]],[369,[21,4,27,27,55,1,57,4,62,23,86,4,139,23,163,1,165,2,169,26,199,3]],[370,[20,4,26,28,56,1,58,3,62,28,139,23,163,6,170,26,199,4]],[371,[19,4,25,30,56,29,87,3,139,30,171,26,200,4]],[372,[18,4,25,60,88,2,139,24,164,5,171,27,201,3]],[373,[17,4,24,30,55,5,61,24,89,1,139,24,164,6,171,28,201,4]],[374,[17,3,23,29,53,6,61,24,86,3,134,1,138,25,164,5,172,27,203,3]],[375,[16,3,23,29,53,1,55,4,60,26,87,2,134,1,137,27,165,4,170,1,173,27,203,4]],[376,[15,4,22,31,56,3,60,26,88,1,134,1,137,27,165,4,173,28,204,4]],[377,[14,4,21,31,58,1,60,25,88,1,134,2,137,30,170,2,173,29,205,4]],[378,[14,3,20,32,53,1,58,27,88,1,112,1,134,2,139,27,169,1,171,1,173,29,206,3]],[379,[13,4,19,31,51,1,53,1,56,1,58,27,134,2,139,27,169,1,174,29,206,4]],[380,[12,4,18,34,53,32,134,1,138,28,175,29,207,4]],[381,[12,3,17,35,53,5,59,26,134,3,139,27,167,4,173,1,175,29,207,4]],[382,[11,3,17,31,49,2,52,4,59,26,134,1,139,35,175,30,208,4]],[383,[10,3,17,31,49,7,59,26,134,1,139,67,209,3]],[384,[10,3,15,32,48,9,59,26,133,2,139,26,166,9,176,31,209,4]],[385,[9,4,15,31,48,9,59,26,89,1,105,2,119,1,134,1,139,26,166,41,210,3]],[386,[9,3,15,30,47,10,59,26,93,1,97,6,105,4,112,1,115,3,120,2,125,2,138,28,167,41,211,3]],[387,[8,3,14,31,46,11,59,27,88,1,90,1,93,2,97,6,105,12,119,5,125,1,129,4,136,29,167,42,211,3]],[388,[8,3,14,30,45,12,59,35,97,7,106,60,167,11,180,29,211,4]],[389,[7,3,13,30,44,2,47,10,59,37,97,7,105,61,167,12,181,28,212,3]],[390,[7,3,13,29,43,14,58,38,97,7,105,61,167,43,213,3]],[391,[6,3,12,30,43,14,58,46,105,61,167,44,213,3]],[392,[6,3,11,31,43,14,58,46,105,106,214,3]],[393,[5,4,11,31,44,13,58,153,214,3]],[394,[5,4,11,32,44,13,59,58,119,7,129,6,136,44,181,31,215,2]],[395,[5,3,10,33,44,14,59,37,97,6,105,4,112,4,138,41,181,31,215,3]],[396,[4,3,9,34,44,42,89,2,139,39,181,32,215,3]],[397,[4,3,9,34,44,41,139,38,178,1,181,32,216,3]],[398,[4,3,9,34,44,13,59,26,94,1,97,1,139,26,167,12,181,32,216,3]],[399,[3,4,9,34,45,11,58,26,97,1,140,26,168,11,181,33,217,2]],[400,[3,2,9,34,44,11,57,27,140,27,169,8,178,1,181,33,217,2]],[401,[3,2,8,35,45,7,53,1,56,28,140,27,170,9,181,33,217,3]],[402,[3,2,8,35,45,8,55,29,105,2,139,30,170,9,181,34,217,3]],[403,[2,3,7,36,44,6,51,2,55,29,94,1,97,1,105,1,139,30,171,8,180,35,217,3]],[404,[2,3,7,35,44,6,51,1,54,31,137,33,172,43,218,3]],[405,[2,3,7,35,44,7,53,33,119,52,172,43,218,3]],[406,[1,3,7,35,43,6,50,1,52,43,96,7,105,66,173,43,219,2]],[407,[1,3,7,34,43,6,52,120,173,6,180,36,219,2]],[408,[1,3,7,34,43,1,45,5,51,166,219,3]],[409,[1,3,6,35,45,154,201,16,219,3]],[410,[1,2,6,35,42,1,47,1,50,131,182,13,204,13,219,3]],[411,[0,3,6,35,42,1,48,1,50,124,175,6,182,12,205,12,219,3]],[412,[0,3,6,34,43,1,48,126,175,6,182,11,206,11,219,3]],[413,[0,3,5,35,44,130,175,7,183,10,207,10,219,3]],[414,[0,3,5,34,44,4,49,125,176,6,183,10,207,10,220,2]],[415,[0,3,5,34,44,3,49,126,176,6,184,9,207,10,220,2]],[416,[0,3,5,34,43,4,48,127,177,6,184,9,207,10,220,2]],[417,[0,3,5,34,43,4,48,128,177,6,185,8,207,10,220,2]],[418,[0,3,5,33,42,2,45,1,48,128,177,6,185,8,206,11,220,2]],[419,[0,3,5,32,39,1,41,2,45,1,47,137,185,8,205,12,220,2]],[420,[0,3,5,32,39,6,47,36,86,3,95,1,97,2,128,2,133,5,141,43,185,9,205,12,220,2]],[421,[0,3,5,32,38,7,46,36,142,36,179,3,184,1,186,9,203,14,220,2]],[422,[0,3,5,31,38,1,41,40,143,35,179,2,187,10,201,16,220,2]],[423,[0,3,5,30,37,2,42,39,143,37,181,1,187,30,220,2]],[424,[0,3,5,23,29,3,38,1,45,36,143,39,186,1,191,26,220,2]],[425,[0,3,5,21,28,1,30,2,36,4,44,37,143,37,181,2,185,3,190,27,220,2]],[426,[0,3,6,20,27,1,29,13,43,38,144,36,181,3,186,10,198,19,220,2]],[427,[0,3,6,19,27,1,29,13,43,38,143,38,182,2,187,10,199,18,220,2]],[428,[0,3,6,21,29,12,43,37,143,18,165,16,183,2,187,10,199,18,219,3]],[429,[0,3,6,19,26,14,42,39,143,16,166,16,184,1,187,10,199,18,219,3]],[430,[1,2,6,19,26,13,41,40,142,15,167,16,184,13,198,19,219,3]],[431,[1,2,6,19,27,1,29,9,41,42,141,16,167,17,185,11,197,19,219,3]],[432,[1,3,6,20,28,1,30,7,39,118,168,17,186,7,194,1,197,19,219,3]],[433,[1,3,7,20,29,6,38,119,164,1,168,18,188,6,196,20,219,3]],[434,[1,3,7,21,36,121,168,20,194,22,219,3]],[435,[1,4,7,23,34,123,168,21,192,23,218,3]],[436,[2,3,7,150,167,48,218,3]],[437,[2,3,7,150,167,48,218,3]],[438,[2,3,7,152,166,49,217,4]],[439,[2,3,8,153,164,50,217,3]],[440,[3,2,8,206,217,3]],[441,[3,3,9,205,217,3]],[442,[3,3,9,177,191,22,216,3]],[443,[4,3,9,175,192,21,216,3]],[444,[4,3,9,174,194,19,215,4]],[445,[4,3,9,173,195,18,215,3]],[446,[4,3,10,171,195,18,215,3]],[447,[5,3,11,170,195,17,215,3]],[448,[5,3,11,170,195,16,214,3]],[449,[5,3,11,170,188,1,195,16,214,3]],[450,[6,3,12,169,195,15,213,3]],[451,[6,3,13,168,195,15,213,3]],[452,[7,3,13,168,195,14,212,3]],[453,[7,3,13,169,195,14,211,4]],[454,[8,3,14,169,194,14,211,3]],[455,[8,3,15,169,193,15,211,3]],[456,[9,3,15,175,192,15,210,3]],[457,[10,3,15,191,210,3]],[458,[10,3,16,190,209,3]],[459,[11,3,17,188,209,3]],[460,[11,3,17,146,165,39,208,3]],[461,[12,3,17,144,169,35,207,4]],[462,[13,3,19,140,170,33,207,3]],[463,[13,4,19,139,171,31,206,3]],[464,[14,3,20,137,172,30,205,4]],[465,[15,3,21,136,172,29,205,3]],[466,[16,3,22,135,172,28,204,3]],[467,[16,3,23,134,172,27,203,3]],[468,[17,4,23,134,172,26,202,4]],[469,[18,3,25,132,172,25,201,4]],[470,[19,4,26,132,172,25,200,4]],[471,[20,3,27,132,171,25,199,4]],[472,[20,4,27,132,171,24,199,3]],[473,[21,4,28,132,161,1,170,24,198,3]],[474,[22,4,29,137,168,25,196,4]],[475,[23,4,30,162,195,4]],[476,[24,4,32,159,194,4]],[477,[25,4,33,156,193,4]],[478,[26,4,33,155,192,4]],[479,[27,4,35,152,191,4]],[480,[28,5,36,150,190,4]],[481,[29,4,38,146,189,4]],[482,[31,4,39,144,187,5]],[483,[32,4,40,141,186,5]],[484,[33,5,42,138,184,5]],[485,[35,4,43,135,183,4]],[486,[36,4,45,132,181,5]],[487,[37,5,46,130,180,4]],[488,[39,5,49,124,178,4]],[489,[40,6,50,122,176,5]],[490,[42,6,53,116,174,6]],[491,[44,5,54,113,173,5]],[492,[46,6,57,107,170,7]],[493,[48,5,58,104,169,6]],[494,[50,6,62,97,166,7]],[495,[52,5,64,93,164,7]],[496,[53,10,69,84,161,7]],[497,[55,8,70,80,159,7]],[498,[58,7,76,70,154,10]],[499,[61,8,78,63,152,9]],[500,[64,12,87,48,148,10]],[501,[67,10,97,28,144,11]],[502,[71,14,86,1,138,12]],[503,[76,13,133,13]],[504,[80,18,117,2,120,21]],[505,[85,50]],[506,[92,36]]]},"13:1":{"w":230,"h":481,"rows":[[232,[175,3]],[233,[50,7,172,10]],[234,[47,12,171,13]],[235,[45,7,54,6,169,5,178,7]],[236,[44,6,56,5,168,4,179,7]],[237,[43,5,58,4,167,4,183,4]],[238,[41,6,52,2,60,2,167,3,175,3,184,4]],[239,[41,3,48,8,60,3,166,4,172,9,186,3]],[240,[40,4,47,10,61,2,166,3,172,10,186,4]],[241,[39,3,46,12,61,3,165,3,172,12,187,3]],[242,[38,4,45,14,62,3,165,3,171,14,188,3]],[243,[37,4,44,15,62,3,164,4,170,15,189,3]],[244,[37,3,43,17,63,3,164,3,170,16,189,4]],[245,[36,4,42,18,63,3,163,3,170,17,190,3]],[246,[36,3,42,19,64,3,163,3,169,19,190,4]],[247,[35,3,41,21,64,4,162,3,168,20,191,3]],[248,[35,3,40,22,64,4,161,4,168,21,192,3]],[249,[34,4,40,22,65,4,160,4,167,23,192,3]],[250,[34,3,40,23,66,4,160,3,166,24,192,4]],[251,[34,3,39,25,66,4,159,4,166,24,192,4]],[252,[34,2,38,26,67,4,158,4,166,24,193,3]],[253,[33,3,38,27,68,4,157,4,164,27,194,2]],[254,[33,3,38,28,69,5,156,4,164,27,194,3]],[255,[33,3,38,28,70,5,92,1,155,5,163,28,194,3]],[256,[33,3,38,29,71,5,91,2,154,5,162,30,194,3]],[257,[32,4,38,31,73,5,89,4,138,2,151,6,161,31,194,3]],[258,[32,4,38,32,74,8,86,7,138,18,160,32,194,3]],[259,[32,4,38,33,76,16,138,16,158,34,194,3]],[260,[32,4,38,34,77,13,140,13,158,34,195,2]],[261,[32,4,38,36,156,36,195,2]],[262,[32,3,38,38,92,1,153,39,195,2]],[263,[32,3,38,55,138,54,194,3]],[264,[32,3,38,55,138,54,194,3]],[265,[32,3,38,55,138,54,195,2]],[266,[32,4,38,55,138,54,194,3]],[267,[32,4,38,55,138,54,194,3]],[268,[33,3,38,55,138,54,194,3]],[269,[33,3,38,55,138,53,194,3]],[270,[33,3,38,55,138,53,194,3]],[271,[33,3,39,54,138,53,194,3]],[272,[34,2,39,54,138,52,194,2]],[273,[34,2,40,53,138,52,193,3]],[274,[34,3,40,53,138,52,192,4]],[275,[34,3,40,53,138,52,192,4]],[276,[35,3,40,53,138,51,192,3]],[277,[35,3,40,53,138,51,192,3]],[278,[35,3,41,52,138,50,192,3]],[279,[36,3,42,51,138,50,191,3]],[280,[36,4,42,51,138,50,191,3]],[281,[37,3,42,51,138,49,190,3]],[282,[37,3,43,50,138,49,190,3]],[283,[38,2,44,49,138,48,189,3]],[284,[38,3,44,49,138,48,188,4]],[285,[38,3,44,49,138,47,188,3]],[286,[39,3,45,48,138,47,188,3]],[287,[40,2,46,47,138,46,187,3]],[288,[40,3,46,47,138,46,187,3]],[289,[41,3,46,47,138,45,186,3]],[290,[41,4,47,46,138,44,186,3]],[291,[42,4,48,45,138,44,185,3]],[292,[43,3,48,45,138,43,184,4]],[293,[43,3,49,44,138,43,184,3]],[294,[44,3,50,43,138,42,183,4]],[295,[44,4,50,43,138,42,183,3]],[296,[44,4,51,42,138,41,182,4]],[297,[45,3,51,42,138,41,182,3]],[298,[45,3,52,41,138,40,182,3]],[299,[45,3,52,41,138,40,181,4]],[300,[46,3,52,41,138,40,181,3]],[301,[46,3,52,41,138,40,181,3]],[302,[46,3,52,41,138,40,181,3]],[303,[46,3,52,41,138,40,181,3]],[304,[46,3,52,41,138,40,181,3]],[305,[46,3,52,41,138,40,181,3]],[306,[46,3,52,41,138,40,181,3]],[307,[45,3,52,41,138,40,181,4]],[308,[45,3,51,42,138,41,182,3]],[309,[45,3,51,42,138,41,182,3]],[310,[44,4,50,43,138,41,182,4]],[311,[44,4,50,43,138,42,183,3]],[312,[43,4,50,43,138,42,183,4]],[313,[42,4,48,133,184,4]],[314,[42,3,48,134,184,4]],[315,[41,3,48,134,185,4]],[316,[40,4,47,136,186,4]],[317,[39,4,46,137,187,4]],[318,[38,4,45,139,188,4]],[319,[37,4,44,142,189,4]],[320,[36,4,43,143,190,4]],[321,[35,4,42,145,191,4]],[322,[33,5,41,147,192,4]],[323,[32,4,40,149,194,3]],[324,[31,5,39,151,194,5]],[325,[30,4,37,154,196,4]],[326,[29,5,36,156,196,5]],[327,[28,4,35,159,197,5]],[328,[27,5,34,161,198,5]],[329,[26,4,33,163,199,5]],[330,[25,5,32,165,200,5]],[331,[24,4,31,167,202,3]],[332,[23,5,30,169,202,4]],[333,[22,4,29,171,203,4]],[334,[21,5,28,173,204,4]],[335,[21,4,28,174,205,4]],[336,[20,4,26,176,206,4]],[337,[19,4,26,177,207,4]],[338,[18,4,25,179,208,4]],[339,[17,4,24,182,208,5]],[340,[16,5,23,183,210,3]],[341,[15,5,22,185,210,4]],[342,[14,5,21,187,211,4]],[343,[14,4,20,189,212,4]],[344,[13,5,19,191,213,4]],[345,[12,4,19,191,214,3]],[346,[12,4,18,193,214,4]],[347,[11,4,17,195,215,4]],[348,[11,3,17,195,216,3]],[349,[10,4,16,197,216,4]],[350,[10,4,16,197,217,3]],[351,[9,3,15,199,217,4]],[352,[8,4,15,200,218,3]],[353,[8,4,14,202,218,4]],[354,[7,4,14,202,219,3]],[355,[7,3,13,204,220,3]],[356,[6,4,12,20,45,172,220,3]],[357,[6,4,12,18,48,170,221,3]],[358,[5,4,12,16,51,167,221,3]],[359,[5,3,11,16,29,2,33,1,53,165,222,3]],[360,[4,4,10,16,29,1,33,1,56,163,222,3]],[361,[4,4,10,15,29,1,33,2,57,163,222,4]],[362,[4,4,10,14,29,1,34,1,60,160,222,4]],[363,[3,4,10,13,62,158,222,4]],[364,[3,3,9,13,64,157,223,4]],[365,[3,3,9,13,65,156,224,3]],[366,[3,3,8,13,67,155,224,3]],[367,[2,4,8,13,67,155,224,4]],[368,[2,3,8,12,67,155,224,4]],[369,[2,3,8,12,67,155,224,4]],[370,[1,3,7,12,67,155,225,3]],[371,[1,3,7,12,68,155,225,4]],[372,[1,3,7,12,68,155,226,3]],[373,[1,3,6,12,68,155,226,3]],[374,[0,4,6,12,68,155,226,3]],[375,[0,4,6,12,68,155,226,4]],[376,[0,3,6,11,68,156,226,4]],[377,[0,3,6,11,68,156,226,4]],[378,[0,3,6,11,68,156,226,4]],[379,[0,3,6,11,68,156,227,3]],[380,[0,3,6,11,69,155,227,3]],[381,[0,2,5,11,69,155,227,3]],[382,[0,2,4,12,69,155,227,3]],[383,[0,2,4,12,69,156,228,2]],[384,[0,2,4,12,69,156,228,2]],[385,[0,2,4,12,69,156,228,2]],[386,[0,2,4,12,69,156,228,2]],[387,[0,2,4,12,69,156,228,2]],[388,[0,2,4,12,69,156,228,2]],[389,[0,2,4,12,69,156,228,2]],[390,[0,2,4,12,69,156,228,2]],[391,[0,2,4,12,69,156,228,2]],[392,[0,2,5,11,69,156,228,2]],[393,[0,2,5,13,69,155,227,3]],[394,[0,2,5,12,69,155,227,3]],[395,[0,2,5,11,69,155,227,3]],[396,[0,3,6,10,69,155,227,3]],[397,[0,3,6,11,69,155,227,3]],[398,[0,4,6,11,65,2,69,155,226,4]],[399,[0,4,6,11,69,155,226,4]],[400,[0,4,6,11,69,155,226,3]],[401,[0,4,6,11,69,154,226,3]],[402,[1,3,6,11,69,154,226,3]],[403,[1,3,7,10,69,154,226,3]],[404,[1,3,7,10,69,154,226,3]],[405,[1,3,7,11,69,153,225,3]],[406,[2,2,7,12,69,153,224,4]],[407,[2,3,8,11,69,153,224,4]],[408,[2,3,8,11,69,153,224,3]],[409,[2,4,8,11,69,153,224,3]],[410,[3,3,8,11,69,152,224,3]],[411,[3,3,8,12,69,151,223,3]],[412,[3,3,9,11,69,151,223,3]],[413,[4,2,10,11,69,151,222,4]],[414,[4,3,10,11,69,151,222,4]],[415,[4,3,10,11,69,150,222,3]],[416,[5,3,11,11,70,148,222,3]],[417,[5,3,11,12,70,148,221,3]],[418,[6,3,12,11,70,147,221,3]],[419,[6,3,12,12,31,1,70,147,220,3]],[420,[6,4,12,12,29,1,31,2,70,146,220,3]],[421,[7,4,13,12,27,6,70,146,219,3]],[422,[8,4,14,12,27,4,32,1,70,145,218,4]],[423,[8,4,14,12,28,3,71,144,218,3]],[424,[9,3,15,12,71,143,217,4]],[425,[9,4,16,13,71,143,217,3]],[426,[10,4,16,13,71,142,216,4]],[427,[11,3,17,13,71,141,216,3]],[428,[11,3,18,12,71,140,215,4]],[429,[12,3,18,13,71,140,214,4]],[430,[12,4,19,14,71,139,214,3]],[431,[13,3,20,13,71,139,213,4]],[432,[14,3,20,14,71,138,212,4]],[433,[14,4,21,14,71,137,211,4]],[434,[15,4,22,15,71,136,210,4]],[435,[16,4,23,16,71,135,209,4]],[436,[17,4,24,16,71,134,208,5]],[437,[17,5,25,16,66,1,71,133,208,4]],[438,[18,4,26,17,65,2,70,133,207,4]],[439,[19,4,27,17,63,1,65,2,70,132,206,4]],[440,[20,4,28,18,62,1,64,3,69,132,205,4]],[441,[21,4,28,19,63,4,69,131,204,4]],[442,[22,4,29,21,63,136,203,4]],[443,[23,5,30,22,65,133,202,4]],[444,[24,4,31,25,63,134,201,4]],[445,[25,5,33,27,61,135,200,4]],[446,[26,5,34,160,199,4]],[447,[28,5,36,157,197,5]],[448,[29,4,37,155,196,6]],[449,[30,5,39,151,194,7]],[450,[31,5,40,149,194,5]],[451,[32,5,42,145,191,7]],[452,[34,4,43,143,190,6]],[453,[35,6,45,139,189,5]],[454,[37,5,47,136,188,5]],[455,[38,6,48,133,185,6]],[456,[40,5,50,129,184,6]],[457,[42,5,52,125,182,6]],[458,[43,5,53,122,181,6]],[459,[44,7,56,116,178,7]],[460,[46,6,57,113,177,6]],[461,[48,8,61,107,174,8]],[462,[50,7,63,103,173,7]],[463,[52,9,67,95,169,9]],[464,[54,8,68,92,168,7]],[465,[57,8,75,80,164,9]],[466,[59,9,76,75,162,9]],[467,[62,11,83,63,157,11]],[468,[65,10,86,1,88,55,154,10]],[469,[68,16,96,36,148,13]],[470,[73,11,99,24,126,2,129,1,145,12]],[471,[77,20,132,1,134,19]],[472,[82,17,130,18]],[473,[87,55]],[474,[95,41]],[475,[106,21]],[476,[111,2,117,2]],[477,[109,4,116,5]],[478,[108,4,119,2]],[479,[108,3,119,3]],[480,[109,2,115,6]]]},"14:0":{"w":195,"h":517,"rows":[[237,[28,10]],[238,[26,12]],[239,[24,14]],[240,[23,16]],[241,[22,6,32,8]],[242,[21,5,34,7]],[243,[20,6,35,7]],[244,[20,5,36,6]],[245,[19,6,30,3,37,6]],[246,[18,6,28,6,37,6]],[247,[18,6,27,9,37,7]],[248,[17,6,27,10,38,6]],[249,[17,6,26,18]],[250,[17,5,25,20]],[251,[16,5,25,20]],[252,[16,5,25,20]],[253,[16,5,25,21]],[254,[15,6,24,22]],[255,[15,6,24,22]],[256,[15,6,24,22]],[257,[15,6,24,23]],[258,[15,6,23,24]],[259,[15,6,23,24]],[260,[15,6,23,25]],[261,[14,7,22,26]],[262,[14,6,22,26]],[263,[14,6,22,27]],[264,[14,6,22,20,43,6]],[265,[14,6,22,20,43,6]],[266,[14,6,22,20,43,7]],[267,[14,6,22,21,44,6]],[268,[14,6,22,21,44,7]],[269,[14,6,22,30]],[270,[14,6,23,29]],[271,[14,6,23,30]],[272,[14,6,23,30,78,1]],[273,[14,7,23,31,78,1]],[274,[14,7,23,31,78,1]],[275,[15,6,23,32,78,1]],[276,[15,6,23,32,78,1]],[277,[15,6,23,33,78,1]],[278,[15,6,23,33,78,1]],[279,[15,6,23,26,50,7,78,1]],[280,[15,6,23,26,51,7,78,1]],[281,[15,6,23,27,52,7,78,1]],[282,[15,6,24,27,53,7,77,2]],[283,[16,5,24,27,54,7,76,3]],[284,[16,6,24,28,55,8,75,4]],[285,[16,6,25,28,56,9,73,6]],[286,[16,6,25,29,58,21]],[287,[16,7,25,30,59,20]],[288,[17,6,25,30,61,18]],[289,[17,6,25,31,62,17]],[290,[17,6,25,32,64,15]],[291,[17,6,25,34,66,7,76,3]],[292,[17,7,25,37,75,4]],[293,[18,6,25,40,74,5]],[294,[18,7,26,53]],[295,[18,7,27,52]],[296,[19,6,27,52]],[297,[19,6,27,41,69,10]],[298,[19,6,27,33,61,8,73,6]],[299,[19,7,27,32,60,3,67,4,74,5]],[300,[20,6,28,30,59,2,70,3,75,4]],[301,[20,7,28,30,59,1,64,2,67,2,72,2,76,3]],[302,[20,7,29,28,58,2,61,3,65,2,70,1,73,3,78,1]],[303,[21,6,29,28,58,1,61,2,65,2,75,2,78,1]],[304,[21,6,29,27,58,1,61,7,76,3]],[305,[21,7,29,27,58,1,61,7,77,2]],[306,[21,7,30,26,58,1,62,5,78,1]],[307,[22,7,30,26,58,1,63,3,78,1,157,8]],[308,[22,7,31,25,58,1,78,1,154,14]],[309,[22,7,31,26,58,1,78,1,153,16]],[310,[23,6,31,26,58,1,78,1,151,7,159,12]],[311,[23,7,31,26,59,1,78,1,150,6,163,9]],[312,[23,7,32,25,59,1,78,1,149,6,166,7]],[313,[24,7,32,25,59,1,78,1,117,1,148,6,167,6]],[314,[24,7,33,24,59,1,78,1,117,1,147,6,159,7,168,6]],[315,[24,7,33,24,60,1,78,1,117,2,146,7,157,10,169,6]],[316,[25,7,33,25,60,1,117,2,146,6,155,20]],[317,[25,7,34,25,60,1,117,2,144,7,154,22]],[318,[26,6,34,25,60,2,78,1,117,3,143,6,153,9,165,12]],[319,[26,7,35,24,61,1,78,1,117,3,142,7,152,12,166,11]],[320,[26,7,35,24,61,1,78,1,117,4,141,6,151,8,164,1,167,10]],[321,[27,6,35,25,61,1,78,1,117,4,140,6,151,6,161,1,165,1,167,11]],[322,[27,6,35,25,61,2,78,1,117,6,138,7,149,7,162,1,165,2,168,10]],[323,[28,6,36,24,61,2,78,1,117,7,136,8,149,6,159,4,166,12]],[324,[28,6,37,23,62,1,78,1,117,9,134,9,148,3,152,2,158,6,166,13]],[325,[28,7,37,24,62,1,77,2,117,25,147,3,151,2,158,6,167,12]],[326,[29,6,37,24,62,1,77,2,117,24,144,4,150,2,158,6,167,12]],[327,[29,6,37,24,62,2,77,2,117,22,143,4,149,2,159,4,167,13]],[328,[29,7,38,23,62,2,77,2,117,16,140,6,148,1,167,13]],[329,[30,6,38,23,63,1,77,2,117,6,126,3,139,6,147,1,167,13]],[330,[30,7,39,25,77,2,117,8,136,8,145,2,149,1,167,13]],[331,[30,7,39,23,63,1,77,2,117,9,135,7,144,2,168,12]],[332,[31,6,39,23,63,1,77,2,117,23,142,2,167,13]],[333,[31,6,39,23,63,1,77,2,117,25,167,13]],[334,[31,6,39,23,63,2,77,2,117,19,137,3,167,12]],[335,[32,6,40,22,64,1,77,2,117,2,120,9,130,8,167,12]],[336,[32,6,40,23,64,1,77,2,117,5,124,10,167,12]],[337,[32,6,40,23,64,1,77,4,82,9,92,10,103,9,113,1,115,4,121,2,167,12]],[338,[33,6,41,22,64,1,77,4,82,9,92,10,103,9,113,6,122,2,168,11]],[339,[33,6,41,22,64,1,77,2,80,1,82,9,92,10,103,9,113,6,121,2,167,12]],[340,[33,6,41,22,64,1,78,1,82,9,92,10,103,9,113,5,166,13]],[341,[33,6,41,22,64,1,69,1,78,1,82,9,92,10,103,9,113,5,166,13]],[342,[33,6,41,22,64,1,68,3,82,7,90,1,92,1,94,8,103,1,105,7,113,2,166,13]],[343,[33,6,41,22,64,1,67,2,70,1,79,1,83,5,95,5,107,5,113,1,166,13]],[344,[34,5,41,22,64,1,68,3,79,1,82,1,85,5,92,1,96,3,101,1,104,1,106,1,111,1,166,13]],[345,[34,5,41,22,64,1,68,2,79,1,85,5,92,1,101,1,165,14]],[346,[34,5,41,22,64,1,68,1,79,1,89,1,92,1,99,2,165,13]],[347,[34,5,42,21,64,1,79,1,92,2,166,12]],[348,[34,5,42,21,64,1,79,1,89,1,92,1,164,1,166,12]],[349,[34,5,42,21,79,1,82,1,92,1,164,13]],[350,[34,5,42,21,64,1,79,1,82,1,92,1,165,12]],[351,[34,5,41,22,64,1,67,4,79,1,82,1,92,1,165,12]],[352,[34,5,41,22,64,1,67,5,79,1,82,1,89,1,92,1,163,13]],[353,[34,5,41,22,67,5,79,1,89,1,92,1,163,13]],[354,[34,5,41,22,64,1,67,3,79,1,89,1,92,1,162,14]],[355,[34,5,41,22,64,1,79,1,89,1,92,1,162,14]],[356,[34,5,41,22,64,1,79,1,89,1,92,1,111,1,162,13]],[357,[33,6,41,22,64,1,79,1,82,1,89,1,92,1,111,1,162,13]],[358,[33,6,41,22,64,1,79,1,89,1,92,1,111,1,161,14]],[359,[33,5,41,22,64,1,79,1,89,1,92,1,111,1,162,12]],[360,[33,5,41,21,64,1,79,1,89,1,92,1,111,1,160,14]],[361,[33,5,40,22,64,1,79,1,89,1,92,1,111,1,160,13]],[362,[32,5,40,22,64,1,79,1,89,1,92,1,111,1,161,12]],[363,[32,5,40,22,63,2,79,1,89,1,92,1,111,1,159,14]],[364,[31,6,39,23,78,2,89,1,92,1,111,1,159,13]],[365,[31,6,39,23,63,1,78,2,89,1,92,1,111,1,114,1,159,13]],[366,[31,5,39,23,63,1,78,2,89,1,92,1,111,1,114,1,158,13]],[367,[30,5,39,23,63,1,78,2,89,1,92,1,111,1,114,1,159,12]],[368,[30,5,38,23,63,1,78,2,89,1,92,1,111,1,114,1,159,12]],[369,[30,5,38,23,63,1,78,2,89,1,92,1,111,1,114,1,157,13]],[370,[29,5,37,24,62,1,78,1,89,1,92,1,111,1,114,1,158,12]],[371,[29,4,37,24,62,1,78,1,81,1,89,1,101,1,111,1,114,1,156,14]],[372,[28,5,37,24,62,1,78,2,81,1,89,1,92,1,111,1,114,1,156,13]],[373,[28,5,36,24,62,1,78,2,81,1,89,1,92,1,101,1,111,1,114,1,157,12]],[374,[27,5,36,24,62,1,78,2,81,1,89,1,92,1,101,1,111,1,114,1,157,11]],[375,[27,4,35,25,62,1,78,2,81,1,89,1,92,1,101,1,114,1,155,13]],[376,[26,5,35,25,61,1,64,1,79,1,81,1,89,1,92,1,101,1,114,1,155,13]],[377,[26,5,34,28,81,1,89,1,92,1,101,1,114,1,156,12]],[378,[25,5,34,26,61,1,81,1,89,1,92,1,101,1,114,1,155,12]],[379,[24,6,33,26,60,2,81,1,89,1,101,1,114,1,154,13]],[380,[24,5,33,26,60,1,81,1,89,1,112,1,114,1,154,13]],[381,[23,6,32,27,60,1,81,1,89,1,92,1,101,1,112,1,114,1,154,13]],[382,[23,5,32,27,60,1,69,1,77,1,87,2,93,1,95,6,104,9,114,1,124,1,155,11]],[383,[22,5,31,27,60,1,68,1,78,1,89,1,92,1,101,1,104,1,155,11]],[384,[22,5,31,27,59,1,92,1,155,11]],[385,[21,6,30,28,59,1,68,1,70,1,89,1,93,1,100,2,105,2,111,2,155,11]],[386,[21,5,29,29,59,1,78,1,89,1,92,1,153,13]],[387,[20,5,29,28,59,1,89,1,92,1,101,1,153,13]],[388,[20,5,28,29,59,1,68,1,78,1,89,1,92,1,101,1,112,1,153,13]],[389,[19,5,28,29,68,1,89,1,92,1,101,1,112,1,153,13]],[390,[18,6,27,30,68,1,89,1,101,1,112,1,154,12]],[391,[18,5,27,30,58,1,68,1,89,1,101,1,112,1,115,1,154,12]],[392,[17,5,26,31,58,1,68,1,101,1,104,1,112,1,155,11]],[393,[17,5,25,32,58,1,68,1,101,1,155,11]],[394,[16,5,25,31,58,1,68,1,78,1,101,1,104,1,155,12]],[395,[15,6,24,33,58,1,68,1,78,1,101,1,104,1,155,12]],[396,[15,6,24,33,58,1,78,1,101,1,104,1,155,12]],[397,[14,6,23,33,58,1,68,1,78,1,101,1,104,1,154,13]],[398,[14,5,23,34,58,1,63,2,68,1,70,1,78,1,101,1,104,1,154,13]],[399,[13,5,22,35,58,2,62,3,68,1,70,1,78,1,101,1,155,13]],[400,[13,5,21,36,58,2,61,2,64,2,77,2,101,1,104,1,155,2,158,10]],[401,[12,5,21,36,58,2,61,6,77,2,101,1,104,1,155,2,158,3,162,6]],[402,[12,5,21,37,59,1,61,4,67,1,77,2,101,1,115,1,155,2,158,3,163,6]],[403,[11,5,21,37,59,2,62,1,68,2,76,1,78,1,96,1,100,1,105,1,107,4,116,3,156,2,159,2,163,6]],[404,[11,5,20,39,60,1,68,1,78,1,100,1,156,2,159,4,164,5]],[405,[10,5,20,39,60,1,69,3,111,1,156,2,159,4,164,6]],[406,[10,5,20,40,61,1,87,2,157,2,160,4,165,5]],[407,[9,6,21,44,80,1,157,2,160,11]],[408,[9,5,21,45,78,1,80,1,89,1,101,1,157,14]],[409,[8,5,21,47,75,1,77,2,80,1,82,1,89,1,101,1,158,14]],[410,[8,5,21,44,66,13,80,2,89,1,92,1,101,1,104,1,158,14]],[411,[7,6,21,45,70,9,80,1,82,7,91,1,93,8,102,2,105,8,115,1,158,15]],[412,[7,5,21,49,71,8,80,35,116,5,158,16]],[413,[6,6,14,2,21,58,80,1,82,5,89,37,145,4,158,16]],[414,[6,6,13,4,21,66,89,39,144,6,157,18]],[415,[6,5,13,4,21,66,89,35,126,3,130,1,144,7,157,18]],[416,[5,12,21,67,89,38,128,5,144,7,156,20]],[417,[5,12,21,67,89,40,132,1,134,1,145,5,156,21]],[418,[4,14,21,67,89,1,91,41,133,3,146,4,156,21]],[419,[4,14,21,67,89,1,91,22,114,20,135,3,139,1,155,23]],[420,[4,15,22,66,89,1,91,22,114,22,137,3,154,17,172,6]],[421,[3,16,22,66,91,22,114,23,138,4,150,29]],[422,[3,16,22,66,91,22,114,32,148,32]],[423,[3,16,23,65,91,49,141,39]],[424,[2,17,23,65,91,60,152,29]],[425,[2,17,23,65,89,1,91,90]],[426,[2,18,23,67,91,91]],[427,[2,18,23,56,80,8,89,1,91,1,93,8,102,81]],[428,[1,19,24,52,77,1,80,1,82,6,89,1,91,1,93,90]],[429,[1,20,25,42,68,10,81,9,91,4,96,88]],[430,[1,20,25,41,68,1,81,1,88,2,92,1,101,1,105,1,115,1,124,60]],[431,[1,20,25,41,67,1,89,1,91,2,124,61]],[432,[0,21,25,41,67,2,76,1,88,2,91,1,95,2,115,2,124,3,128,57]],[433,[0,22,25,41,67,2,77,1,89,1,101,1,115,1,124,62]],[434,[0,22,26,40,67,2,77,1,88,2,101,1,105,2,115,1,124,62]],[435,[0,22,26,40,67,2,77,1,88,2,101,1,105,2,115,1,125,62]],[436,[0,23,26,40,67,2,77,1,88,2,115,1,125,62]],[437,[0,23,26,40,67,2,77,1,88,2,101,1,115,1,125,63]],[438,[0,23,27,39,67,2,77,1,88,2,115,1,124,64]],[439,[0,23,27,39,67,2,77,1,88,2,115,1,124,65]],[440,[0,23,27,39,67,2,77,1,88,2,91,2,101,1,104,1,115,1,124,65]],[441,[0,23,28,38,67,2,77,1,88,2,92,1,101,1,104,1,115,2,124,65]],[442,[0,23,28,38,67,2,77,1,88,2,92,1,124,66]],[443,[0,24,28,38,67,2,77,1,88,2,91,2,104,1,116,1,126,64]],[444,[0,24,29,37,67,2,88,2,91,2,101,1,104,2,115,2,124,1,126,65]],[445,[0,25,29,37,67,2,88,1,91,2,101,1,104,2,113,1,115,2,124,1,126,37,164,27]],[446,[0,25,29,37,67,2,76,1,91,2,104,2,113,1,116,1,124,1,126,66]],[447,[0,25,29,37,67,2,80,1,91,2,104,1,113,1,116,1,124,68]],[448,[0,26,29,37,67,2,92,1,104,1,113,1,116,1,124,68]],[449,[0,26,29,39,69,1,73,4,93,1,105,2,108,6,115,1,117,5,124,69]],[450,[0,27,30,39,77,1,91,1,115,1,124,69]],[451,[0,27,30,48,79,1,81,9,91,10,102,1,104,89]],[452,[0,27,30,48,79,11,91,102]],[453,[1,26,31,47,79,115]],[454,[1,27,31,47,79,11,91,103]],[455,[1,27,31,47,79,11,91,1,93,101]],[456,[1,28,31,47,79,11,91,1,93,101]],[457,[1,28,31,47,79,11,91,103]],[458,[2,27,31,46,79,11,91,104]],[459,[2,28,31,47,79,11,91,104]],[460,[2,28,32,46,79,116]],[461,[2,29,32,46,79,116]],[462,[3,28,33,162]],[463,[3,28,33,45,79,116]],[464,[4,27,34,44,79,34,114,2,117,78]],[465,[4,27,34,44,79,116]],[466,[4,27,34,44,79,116]],[467,[5,27,34,161]],[468,[5,27,35,139,175,20]],[469,[6,27,35,140,176,19]],[470,[6,27,35,160]],[471,[6,27,35,160]],[472,[7,188]],[473,[7,188]],[474,[8,187]],[475,[8,187]],[476,[9,185]],[477,[10,184]],[478,[11,183]],[479,[11,183]],[480,[12,182]],[481,[13,180]],[482,[14,179]],[483,[14,179]],[484,[15,24,40,153]],[485,[16,176]],[486,[17,175]],[487,[18,173]],[488,[19,172]],[489,[20,170]],[490,[21,169]],[491,[22,19,42,147]],[492,[24,165]],[493,[25,163]],[494,[26,16,43,144]],[495,[28,159]],[496,[30,156]],[497,[31,154]],[498,[33,151]],[499,[35,149]],[500,[37,146]],[501,[39,143]],[502,[41,140]],[503,[42,138]],[504,[45,134]],[505,[48,130]],[506,[50,126]],[507,[53,121]],[508,[57,115]],[509,[61,109]],[510,[65,103]],[511,[69,97]],[512,[75,89]],[513,[81,80]],[514,[86,72]],[515,[95,58]],[516,[107,39]]]},"14:1":{"w":192,"h":481,"rows":[[221,[144,6,153,17]],[222,[143,6,152,19]],[223,[143,6,151,20]],[224,[143,6,151,20]],[225,[143,6,151,21]],[226,[143,6,151,21]],[227,[143,5,151,21]],[228,[142,6,151,21]],[229,[142,6,151,22]],[230,[142,6,150,23]],[231,[142,5,150,23]],[232,[142,5,150,23]],[233,[141,6,149,24]],[234,[141,6,149,24]],[235,[141,6,149,25]],[236,[141,6,149,25]],[237,[140,7,148,26]],[238,[140,7,148,26]],[239,[139,7,147,27]],[240,[139,6,147,27]],[241,[138,7,147,27]],[242,[138,6,147,27]],[243,[138,5,147,27]],[244,[137,6,146,28]],[245,[136,7,146,28]],[246,[136,6,145,29]],[247,[135,6,145,29]],[248,[134,7,144,30]],[249,[116,1,133,7,143,30]],[250,[116,1,132,7,143,30]],[251,[116,1,131,7,142,31]],[252,[116,2,130,7,141,32]],[253,[116,3,128,8,141,32]],[254,[116,5,126,9,139,34]],[255,[116,18,139,34]],[256,[116,17,137,35]],[257,[116,16,137,35]],[258,[117,12,135,37]],[259,[116,12,134,38]],[260,[116,1,118,2,132,40]],[261,[116,4,131,40]],[262,[116,10,127,44]],[263,[116,55]],[264,[116,55]],[265,[116,54]],[266,[32,7,116,54]],[267,[30,12,116,54]],[268,[28,16,116,54]],[269,[26,19,116,53]],[270,[25,7,38,9,116,53]],[271,[24,6,39,9,116,53]],[272,[23,6,41,8,116,52]],[273,[23,6,42,7,116,52]],[274,[22,6,33,6,43,8,116,52]],[275,[22,5,32,9,44,8,76,1,116,52]],[276,[21,6,31,12,46,7,75,2,116,51]],[277,[20,6,29,14,47,7,74,3,116,51]],[278,[20,5,29,16,48,8,73,4,116,51]],[279,[19,6,28,18,49,9,71,6,116,50]],[280,[19,6,27,20,51,12,68,9,116,50]],[281,[19,5,27,21,52,25,116,49]],[282,[18,6,27,22,55,20,116,49]],[283,[18,5,27,23,57,16,116,49]],[284,[18,5,26,26,60,10,116,48]],[285,[18,5,26,27,64,2,76,1,116,48]],[286,[18,5,25,31,75,2,116,47]],[287,[17,6,25,33,73,4,116,47]],[288,[17,6,25,52,116,47]],[289,[17,6,25,52,116,46]],[290,[17,6,25,52,116,46]],[291,[17,6,25,52,116,46]],[292,[17,6,25,52,116,45]],[293,[17,6,25,52,116,45]],[294,[17,6,25,52,116,45]],[295,[17,6,25,52,116,44]],[296,[17,6,25,52,116,44]],[297,[17,6,25,52,116,44]],[298,[17,60,116,44]],[299,[17,60,116,43]],[300,[17,60,116,43]],[301,[17,60,116,43]],[302,[18,59,116,43]],[303,[18,59,116,42]],[304,[18,59,116,42]],[305,[18,59,116,42]],[306,[18,59,116,42]],[307,[19,58,116,42]],[308,[19,58,116,42]],[309,[19,58,116,41]],[310,[20,57,116,41]],[311,[20,7,28,49,116,41]],[312,[20,7,28,49,116,41]],[313,[21,6,29,128]],[314,[21,6,29,128]],[315,[21,7,29,128]],[316,[22,7,30,127]],[317,[22,7,30,127]],[318,[22,7,30,127]],[319,[23,6,31,126]],[320,[23,7,31,126]],[321,[23,134]],[322,[24,133]],[323,[24,134]],[324,[25,7,33,125]],[325,[25,7,33,125]],[326,[26,7,34,124]],[327,[26,7,34,125]],[328,[26,7,35,124]],[329,[27,7,35,124]],[330,[27,132]],[331,[28,132]],[332,[28,7,36,124]],[333,[28,7,36,124]],[334,[29,6,36,125]],[335,[29,132]],[336,[29,132]],[337,[29,133]],[338,[29,7,37,125]],[339,[30,6,37,126]],[340,[30,6,37,126]],[341,[30,6,38,99,138,26]],[342,[30,6,38,99,138,26]],[343,[30,6,38,99,138,27]],[344,[30,6,38,100,139,27]],[345,[30,6,38,100,139,27]],[346,[30,6,38,100,139,28]],[347,[30,5,38,129]],[348,[30,5,38,130]],[349,[30,5,38,130]],[350,[30,5,37,102,140,29]],[351,[29,6,37,102,140,30]],[352,[29,6,37,102,140,30]],[353,[29,6,37,102,141,30]],[354,[29,5,37,103,141,31]],[355,[29,5,36,104,141,31]],[356,[28,5,36,105,142,31]],[357,[28,5,35,106,142,31]],[358,[27,6,35,106,143,31]],[359,[26,6,35,14,51,91,143,31]],[360,[26,6,35,12,48,7,58,84,143,32]],[361,[25,6,35,10,46,11,59,83,144,32]],[362,[25,6,34,9,44,3,56,3,60,83,145,31]],[363,[25,5,34,8,43,2,51,3,58,2,61,83,145,32]],[364,[24,6,33,8,42,2,50,6,59,1,62,82,145,32]],[365,[24,5,33,7,41,2,50,5,60,1,62,82,147,31]],[366,[23,6,32,7,40,2,50,5,60,2,63,82,147,31]],[367,[22,6,31,10,50,5,61,1,63,82,147,32]],[368,[22,5,31,9,41,1,51,3,61,1,63,83,149,30]],[369,[21,6,30,10,41,1,51,2,61,2,64,82,149,31]],[370,[20,6,30,9,61,2,64,83,150,30]],[371,[20,6,29,9,61,2,64,83,150,31]],[372,[19,6,29,6,36,1,61,2,64,84,151,30]],[373,[18,6,28,8,61,1,64,85,151,31]],[374,[18,5,27,6,34,1,37,1,64,85,152,31]],[375,[17,6,27,5,33,2,60,2,64,86,152,31]],[376,[16,7,26,8,60,2,63,87,153,31]],[377,[16,6,25,8,60,2,63,88,153,31]],[378,[15,6,25,5,31,2,60,2,63,88,154,31]],[379,[15,6,24,5,30,2,60,1,63,89,154,31]],[380,[14,6,23,6,30,1,60,1,63,90,154,32]],[381,[14,6,23,5,29,2,63,123]],[382,[14,5,22,5,60,1,63,123]],[383,[13,5,21,6,28,1,63,92,158,29]],[384,[13,5,21,5,27,2,60,1,62,93,158,29]],[385,[12,5,21,5,59,2,62,94,159,29]],[386,[11,6,20,5,26,1,59,2,62,95,159,29]],[387,[11,5,20,7,59,2,62,95,160,28]],[388,[10,6,19,7,59,2,62,97,160,29]],[389,[10,5,18,5,24,2,60,1,62,97,161,28]],[390,[9,6,17,6,62,98,161,28]],[391,[9,5,17,5,23,1,62,99,162,28]],[392,[8,5,17,4,59,1,61,101,163,27]],[393,[8,5,16,5,22,1,59,1,61,129]],[394,[7,6,16,4,22,1,58,2,61,129]],[395,[7,5,15,5,21,1,58,2,61,130]],[396,[7,4,15,4,20,2,61,130]],[397,[6,5,14,5,20,1,61,130]],[398,[6,5,13,6,23,3,61,130]],[399,[5,5,13,5,19,2,23,3,60,131]],[400,[5,5,13,6,22,5,58,1,60,131]],[401,[4,5,12,5,18,1,22,5,58,1,60,132]],[402,[4,5,12,5,23,3,58,1,60,132]],[403,[4,5,11,7,57,2,60,132]],[404,[3,6,11,7,58,1,60,132]],[405,[3,5,11,6,58,1,60,132]],[406,[3,5,11,6,60,132]],[407,[2,6,10,5,16,2,59,133]],[408,[2,6,9,6,16,1,59,133]],[409,[2,5,9,7,57,1,59,133]],[410,[1,6,9,5,15,2,56,2,59,133]],[411,[1,6,9,5,15,1,56,2,59,133]],[412,[1,6,9,6,57,1,59,133]],[413,[1,6,8,7,57,1,59,133]],[414,[1,5,8,7,57,1,59,133]],[415,[0,6,8,8,57,135]],[416,[0,6,7,9,58,134]],[417,[0,6,7,6,14,2,58,134]],[418,[0,6,7,6,14,1,56,1,58,134]],[419,[0,6,7,6,14,1,56,1,58,133]],[420,[0,13,56,1,58,133]],[421,[0,14,56,1,58,133]],[422,[0,14,58,133]],[423,[0,14,57,134]],[424,[0,14,57,133]],[425,[0,15,55,1,57,133]],[426,[0,14,54,2,57,133]],[427,[0,14,54,2,57,132]],[428,[0,13,14,1,54,2,57,132]],[429,[0,13,14,1,55,1,57,132]],[430,[0,15,57,131]],[431,[0,16,57,131]],[432,[0,13,14,2,18,4,56,131]],[433,[0,15,18,2,21,2,54,1,56,131]],[434,[0,15,17,6,54,1,56,130]],[435,[0,17,18,5,54,1,56,130]],[436,[0,17,19,3,54,1,56,129]],[437,[1,14,54,1,56,128]],[438,[1,14,16,2,55,21,78,9,89,20,111,73]],[439,[1,14,16,2,55,20,76,2,79,104]],[440,[1,15,17,2,55,20,76,2,79,104]],[441,[2,14,17,2,55,54,111,10,122,60]],[442,[2,15,18,1,53,1,55,126]],[443,[2,15,18,2,55,71,127,53]],[444,[3,15,19,1,55,124]],[445,[3,15,20,1,55,34,90,33,124,55]],[446,[3,16,20,2,55,123]],[447,[4,16,21,2,55,122]],[448,[4,17,22,2,55,121]],[449,[4,17,22,1,43,1,52,1,54,121]],[450,[5,17,23,1,43,4,52,1,54,120]],[451,[5,18,24,2,42,5,51,2,54,118]],[452,[6,18,25,2,42,6,54,117]],[453,[7,18,26,3,41,7,51,1,53,117]],[454,[7,19,27,3,42,6,53,115]],[455,[8,19,29,1,42,6,49,2,52,115]],[456,[9,20,30,2,45,5,52,113]],[457,[9,22,33,1,46,3,51,112]],[458,[10,22,35,1,38,1,43,4,50,112]],[459,[11,23,38,7,49,111]],[460,[12,24,46,112]],[461,[13,143]],[462,[14,140]],[463,[14,137]],[464,[15,134]],[465,[16,130]],[466,[17,126]],[467,[18,122]],[468,[20,115]],[469,[22,108]],[470,[24,102]],[471,[26,95]],[472,[29,87]],[473,[31,80]],[474,[34,71]],[475,[38,64]],[476,[42,48,93,10]],[477,[49,27,92,12]],[478,[92,13]],[479,[92,12]],[480,[92,11]]]},"15:0":{"w":206,"h":514,"rows":[[260,[46,2]],[261,[43,6]],[262,[41,9]],[263,[40,10]],[264,[39,11]],[265,[37,13]],[266,[36,14]],[267,[36,14]],[268,[36,14]],[269,[35,15]],[270,[35,15]],[271,[34,16]],[272,[34,16]],[273,[33,17]],[274,[33,17]],[275,[33,17]],[276,[33,17]],[277,[32,19]],[278,[32,7,40,11]],[279,[32,7,41,10]],[280,[32,7,41,10]],[281,[31,8,41,11]],[282,[31,8,41,11]],[283,[31,8,41,11]],[284,[31,8,41,12]],[285,[31,9,41,12,161,4]],[286,[31,9,41,13,159,8]],[287,[31,10,42,12,158,9]],[288,[31,10,42,13,157,11]],[289,[31,25,157,12]],[290,[31,26,157,13]],[291,[31,11,44,13,157,13]],[292,[32,11,45,13,157,13]],[293,[32,11,45,14,156,15]],[294,[32,11,45,15,156,15]],[295,[32,11,46,15,156,15]],[296,[33,11,46,16,155,17]],[297,[33,11,47,16,155,17]],[298,[34,11,47,18,154,18]],[299,[34,11,47,20,154,18]],[300,[34,12,48,20,153,19]],[301,[35,12,50,20,152,20]],[302,[35,12,50,23,151,21]],[303,[35,12,51,32,150,21]],[304,[36,12,51,32,149,22]],[305,[36,13,51,32,148,23]],[306,[36,14,51,32,143,2,146,25]],[307,[37,46,143,28]],[308,[37,46,126,1,134,6,142,28]],[309,[38,45,125,45]],[310,[38,45,124,46]],[311,[39,44,124,45]],[312,[40,43,124,45]],[313,[40,43,124,44]],[314,[40,43,124,44]],[315,[41,42,124,21,146,21]],[316,[42,41,124,19,144,23]],[317,[42,41,124,42]],[318,[42,41,129,37]],[319,[43,30,130,36]],[320,[43,30,130,35]],[321,[44,29,130,34]],[322,[44,29,131,33]],[323,[44,29,130,34]],[324,[45,28,131,32]],[325,[45,28,130,33]],[326,[46,27,130,32]],[327,[46,27,129,33]],[328,[46,27,129,32]],[329,[46,27,129,31]],[330,[47,26,130,30]],[331,[47,26,130,30]],[332,[48,25,130,29]],[333,[48,25,131,28]],[334,[48,25,75,3,131,28]],[335,[48,25,75,2,131,27]],[336,[48,25,75,2,131,27]],[337,[48,25,75,3,131,27]],[338,[48,25,75,3,131,27]],[339,[48,25,75,2,131,27]],[340,[48,25,75,2,131,26]],[341,[48,25,75,2,130,27]],[342,[48,25,131,26]],[343,[48,25,131,26]],[344,[48,16,65,7,131,26]],[345,[48,15,65,8,131,26]],[346,[48,15,65,9,75,2,131,26]],[347,[48,16,65,15,95,1,97,4,110,4,115,2,130,27]],[348,[47,16,65,19,92,1,94,24,119,7,129,28]],[349,[47,15,65,19,88,69]],[350,[47,15,65,20,88,69]],[351,[46,16,65,20,87,70]],[352,[46,16,64,21,87,71]],[353,[46,15,64,22,87,71]],[354,[46,15,64,94]],[355,[46,14,64,94]],[356,[45,15,63,96]],[357,[45,14,63,96]],[358,[44,15,63,97]],[359,[44,15,63,97]],[360,[43,16,63,97]],[361,[43,14,63,23,87,74]],[362,[42,15,63,23,87,74]],[363,[42,15,63,23,87,75]],[364,[41,16,63,23,87,75]],[365,[40,17,59,27,87,76]],[366,[40,124]],[367,[39,16,61,24,86,78]],[368,[38,17,61,24,87,78]],[369,[38,16,61,24,87,79]],[370,[37,17,61,24,87,80]],[371,[36,18,60,25,87,81]],[372,[35,19,59,25,88,6,97,71]],[373,[35,17,53,2,58,15,82,2,130,39]],[374,[34,17,53,2,58,14,130,40]],[375,[33,17,54,1,58,15,130,41]],[376,[32,17,58,20,129,43]],[377,[32,17,58,20,129,44]],[378,[30,19,57,21,129,1,131,43]],[379,[30,18,51,23,129,1,131,43]],[380,[29,18,50,24,131,44]],[381,[28,18,51,23,131,45]],[382,[28,17,52,1,54,20,131,46]],[383,[27,17,54,19,131,25,158,20]],[384,[26,17,54,19,131,25,159,19]],[385,[25,18,48,25,131,48]],[386,[24,19,48,25,131,49]],[387,[23,19,50,23,131,50]],[388,[23,18,51,22,130,52]],[389,[22,19,50,23,129,53]],[390,[22,18,47,27,75,2,128,55]],[391,[20,19,45,28,75,2,129,55]],[392,[20,19,46,27,76,1,128,56]],[393,[19,20,48,25,75,2,127,58]],[394,[19,19,48,25,127,59]],[395,[18,22,44,29,126,60]],[396,[17,56,128,59]],[397,[17,56,129,34,171,17]],[398,[16,57,130,32,172,17]],[399,[15,58,130,30,173,16]],[400,[14,59,104,1,131,28,174,16]],[401,[14,60,75,3,103,3,110,5,116,1,118,5,127,2,130,29,175,16]],[402,[14,70,93,1,95,1,97,5,103,3,109,6,116,2,119,39,175,16]],[403,[13,19,35,49,88,1,90,4,95,20,116,2,119,39,176,16]],[404,[13,17,38,47,89,26,116,2,119,39,176,16]],[405,[12,18,37,48,88,27,116,42,176,16]],[406,[12,18,36,49,88,1,90,25,116,1,120,38,176,17]],[407,[12,18,34,51,87,2,90,18,128,30,176,18]],[408,[11,20,32,52,130,29,175,19]],[409,[10,20,31,44,131,28,175,19]],[410,[10,64,131,29,175,20]],[411,[10,63,132,29,173,22]],[412,[9,63,132,30,172,24]],[413,[9,20,32,40,132,32,171,25]],[414,[9,21,31,41,132,64]],[415,[8,64,132,65]],[416,[8,64,132,65]],[417,[8,64,133,64]],[418,[8,64,132,66]],[419,[8,65,132,66]],[420,[7,66,117,3,123,3,131,67]],[421,[7,67,113,2,116,82]],[422,[6,72,86,1,92,13,107,2,111,4,116,83]],[423,[6,75,84,1,86,1,91,14,107,70,185,14]],[424,[6,75,84,1,86,1,90,5,96,79,187,12]],[425,[6,79,86,88,188,12]],[426,[6,77,84,1,86,87,188,12]],[427,[6,79,86,86,189,11]],[428,[6,79,86,86,189,11]],[429,[6,79,86,86,190,10]],[430,[5,144,155,16,190,10]],[431,[5,142,156,15,190,10]],[432,[5,71,87,4,92,3,98,3,107,1,131,15,157,14,190,10]],[433,[5,67,133,13,157,15,190,10]],[434,[5,66,134,12,158,14,190,10]],[435,[5,65,134,11,158,14,189,11]],[436,[5,64,135,10,158,15,189,11]],[437,[5,64,135,11,158,16,188,12]],[438,[5,64,135,11,157,18,187,13]],[439,[5,64,135,12,156,20,186,14]],[440,[5,64,135,13,155,24,180,20]],[441,[6,63,135,15,154,46]],[442,[6,63,135,65]],[443,[6,64,135,65]],[444,[6,64,135,65]],[445,[6,65,134,66]],[446,[6,68,130,3,134,66]],[447,[6,77,85,12,103,97]],[448,[6,194]],[449,[6,193]],[450,[7,192]],[451,[7,192]],[452,[7,192]],[453,[8,190]],[454,[8,151,166,32]],[455,[8,148,168,30]],[456,[8,147,169,29]],[457,[9,145,170,27]],[458,[9,145,170,27]],[459,[10,143,171,26]],[460,[10,143,171,25]],[461,[10,143,172,24]],[462,[11,142,172,23]],[463,[11,142,172,23]],[464,[12,141,171,23]],[465,[12,141,171,23]],[466,[13,141,171,22]],[467,[13,141,170,23]],[468,[14,141,170,22]],[469,[15,141,170,21]],[470,[15,142,167,24]],[471,[16,143,166,24]],[472,[17,172]],[473,[18,171]],[474,[18,170]],[475,[19,168]],[476,[20,166]],[477,[20,166]],[478,[22,163]],[479,[22,162]],[480,[23,160]],[481,[24,158]],[482,[25,156]],[483,[26,154]],[484,[27,152]],[485,[28,150]],[486,[30,146]],[487,[31,144]],[488,[32,142]],[489,[33,140]],[490,[35,136]],[491,[36,134]],[492,[38,130]],[493,[39,128]],[494,[41,124]],[495,[43,121]],[496,[45,116]],[497,[47,113]],[498,[50,106]],[499,[52,103]],[500,[54,97]],[501,[57,93]],[502,[60,87]],[503,[63,81]],[504,[67,72]],[505,[71,65]],[506,[78,51]],[507,[84,38]]]},"15:1":{"w":204,"h":478,"rows":[[226,[159,6]],[227,[158,8]],[228,[158,9]],[229,[157,12]],[230,[157,13]],[231,[157,14]],[232,[157,14]],[233,[157,15]],[234,[157,16]],[235,[157,16]],[236,[157,16]],[237,[156,18]],[238,[156,18,179,1]],[239,[156,18]],[240,[156,18]],[241,[150,1,155,20]],[242,[150,1,155,20]],[243,[149,1,154,21]],[244,[154,21]],[245,[148,1,153,22]],[246,[153,22]],[247,[37,3,47,1,152,23]],[248,[35,7,48,1,152,23]],[249,[34,9,151,24]],[250,[33,10,144,1,150,25]],[251,[32,12,150,24]],[252,[32,12,149,25]],[253,[31,13,148,26]],[254,[31,13,147,27]],[255,[30,15,51,1,146,27]],[256,[30,15,145,28]],[257,[30,16,51,1,134,1,143,30]],[258,[29,18,124,2,131,3,142,31]],[259,[29,19,55,1,81,1,125,7,142,30]],[260,[29,19,55,2,80,2,128,4,142,30]],[261,[29,20,56,2,80,2,125,6,141,31]],[262,[29,21,57,2,79,2,126,2,140,31]],[263,[29,22,58,2,77,3,137,34]],[264,[29,23,59,3,76,3,135,36]],[265,[30,23,60,4,74,6,131,39]],[266,[30,24,60,19,123,47]],[267,[30,25,61,16,123,46]],[268,[30,25,62,14,81,1,123,46]],[269,[31,26,68,4,78,4,123,13,140,29]],[270,[31,28,69,1,77,5,123,13,141,1,143,25]],[271,[31,30,67,1,73,9,123,7,131,3,143,25]],[272,[31,34,71,11,123,5,129,1,145,22]],[273,[32,50,123,6,146,21]],[274,[32,50,123,4,149,17]],[275,[33,49,123,3,149,17]],[276,[33,49,123,2,151,14]],[277,[34,48,150,14]],[278,[34,48,123,1,152,12]],[279,[35,47,123,1,151,12]],[280,[35,47,151,12]],[281,[36,46,151,12]],[282,[36,46,151,11]],[283,[37,45,151,11]],[284,[37,45,152,9]],[285,[38,44,151,10]],[286,[38,44,151,10]],[287,[39,43,151,9]],[288,[39,43,151,9]],[289,[40,42,123,1,151,8]],[290,[40,42,123,1,152,7]],[291,[41,41,123,2,151,8]],[292,[41,41,123,2,151,8]],[293,[42,40,123,2,150,8]],[294,[42,40,123,3,149,9]],[295,[42,40,123,4,148,10]],[296,[43,39,123,6,145,13]],[297,[43,39,123,8,144,13]],[298,[43,39,123,12,141,2,144,13]],[299,[43,39,123,12,140,17]],[300,[43,39,123,34]],[301,[44,38,123,34]],[302,[44,38,123,34]],[303,[44,38,123,34]],[304,[44,38,123,34]],[305,[44,38,123,34]],[306,[44,38,123,34]],[307,[44,38,123,34]],[308,[44,38,123,34]],[309,[44,38,123,35]],[310,[44,38,123,35]],[311,[44,114]],[312,[43,115]],[313,[43,116]],[314,[43,116]],[315,[43,116]],[316,[43,116]],[317,[42,118]],[318,[42,118]],[319,[42,118]],[320,[41,120]],[321,[41,120]],[322,[41,121]],[323,[40,123]],[324,[40,123]],[325,[39,125]],[326,[39,125]],[327,[38,127]],[328,[37,129]],[329,[36,131]],[330,[36,131]],[331,[35,133]],[332,[34,135]],[333,[34,136]],[334,[33,138]],[335,[32,140]],[336,[31,142]],[337,[31,143]],[338,[30,144]],[339,[29,146]],[340,[28,148]],[341,[27,134,163,13]],[342,[27,133,165,12]],[343,[25,135,165,13]],[344,[25,136,166,12]],[345,[24,137,166,13]],[346,[23,138,166,14]],[347,[22,140,167,14]],[348,[22,142,167,14]],[349,[21,161]],[350,[20,163]],[351,[19,14,39,2,42,141]],[352,[18,13,41,143]],[353,[18,11,32,1,44,141]],[354,[17,11,30,2,44,141]],[355,[17,10,45,141]],[356,[16,11,46,141]],[357,[16,10,46,141]],[358,[15,10,47,141]],[359,[15,10,47,141]],[360,[14,10,47,142]],[361,[13,11,47,143]],[362,[13,11,48,142]],[363,[12,12,49,142]],[364,[12,11,49,142]],[365,[11,12,48,143]],[366,[11,12,49,143]],[367,[11,12,49,143]],[368,[10,13,49,144]],[369,[10,12,49,144]],[370,[9,13,49,144]],[371,[9,13,49,145]],[372,[9,12,49,145]],[373,[8,12,49,146]],[374,[8,13,50,145]],[375,[8,13,50,145]],[376,[7,14,50,145]],[377,[7,12,20,1,50,146]],[378,[7,12,51,145]],[379,[7,13,53,143]],[380,[7,13,54,142]],[381,[6,13,54,143]],[382,[6,13,55,142]],[383,[6,14,55,1,57,140]],[384,[6,14,58,139]],[385,[5,14,59,138]],[386,[5,14,59,138]],[387,[5,14,60,137]],[388,[5,14,61,137]],[389,[5,14,62,136]],[390,[5,14,63,135]],[391,[5,14,64,134]],[392,[5,14,65,133]],[393,[5,14,67,131]],[394,[5,14,68,130]],[395,[5,14,69,129]],[396,[5,14,70,128]],[397,[5,14,71,127]],[398,[5,14,72,126]],[399,[5,14,74,124]],[400,[5,14,74,124]],[401,[5,14,75,123]],[402,[5,14,75,122]],[403,[5,14,75,122]],[404,[6,13,76,121]],[405,[6,13,76,121]],[406,[6,13,77,120]],[407,[6,14,77,120]],[408,[6,14,78,119]],[409,[6,14,79,117]],[410,[7,14,79,117]],[411,[7,14,79,117]],[412,[7,14,79,116]],[413,[7,14,79,116]],[414,[8,14,79,116]],[415,[8,15,80,115]],[416,[8,15,81,114]],[417,[9,13,23,1,81,113]],[418,[9,15,81,113]],[419,[9,16,82,111]],[420,[10,14,82,111]],[421,[10,16,82,110]],[422,[11,17,82,110]],[423,[11,18,83,108]],[424,[12,18,83,108]],[425,[12,20,83,107]],[426,[13,20,83,1,85,105]],[427,[13,22,85,104]],[428,[14,22,85,103]],[429,[15,21,85,103]],[430,[15,24,85,102]],[431,[16,25,85,102]],[432,[16,27,85,101]],[433,[17,27,85,100]],[434,[18,27,85,99]],[435,[19,27,85,98]],[436,[19,29,85,98]],[437,[20,30,51,1,85,97]],[438,[21,33,84,97]],[439,[22,34,83,97]],[440,[23,35,83,96]],[441,[24,35,83,95]],[442,[25,38,82,95]],[443,[26,36,63,1,80,96]],[444,[27,37,65,4,76,98]],[445,[28,49,78,95]],[446,[29,143]],[447,[31,140]],[448,[32,138]],[449,[33,135]],[450,[35,132]],[451,[37,128]],[452,[39,124]],[453,[40,122]],[454,[42,118]],[455,[44,114]],[456,[46,110]],[457,[48,105]],[458,[51,100]],[459,[53,95]],[460,[56,88]],[461,[60,82]],[462,[64,74]],[463,[68,66]],[464,[73,56]],[465,[79,45]],[466,[94,3,101,4]]]},"16:0":{"w":199,"h":473,"rows":[[217,[9,1,11,5,17,17,71,1,73,1,76,4]],[218,[9,1,11,23,36,1,71,1,73,1,76,4]],[219,[9,1,12,23,71,1,73,1,75,5]],[220,[10,1,12,5,18,17,37,1,71,1,73,1,75,5]],[221,[10,1,12,24,37,1,71,1,73,1,77,3]],[222,[10,1,12,24,38,1,70,1,73,1,76,4]],[223,[10,1,13,5,19,17,38,1,70,1,72,1,75,2,120,1]],[224,[13,24,70,1,72,2,120,1]],[225,[11,1,13,24,39,1,70,1,73,1,76,4,120,1]],[226,[11,1,13,6,20,18,70,1,73,1,76,4,120,1]],[227,[14,5,20,18,40,1,70,1,76,4,120,1]],[228,[14,25,70,1,76,4,120,1]],[229,[12,1,14,25,41,1,70,1,76,4,120,1]],[230,[12,1,14,6,21,19,70,1,76,4,120,1]],[231,[15,5,21,19,42,1,70,1,76,4,120,1]],[232,[15,26,70,1,76,4,120,1]],[233,[13,1,15,6,22,19,43,1,70,1,76,4,120,1]],[234,[13,1,15,6,22,20,70,1,73,1,76,4,120,1]],[235,[16,26,44,1,70,1,72,1,74,1,76,3,120,1]],[236,[16,6,23,20,70,3,74,1,76,4,120,1]],[237,[14,1,16,6,23,20,45,1,70,1,74,1,120,1]],[238,[14,1,16,28,70,1,74,1,76,4,120,1]],[239,[14,1,17,28,46,1,70,1,74,1,76,4,120,1]],[240,[17,6,24,21,70,1,74,1,76,4,120,1]],[241,[15,1,17,29,70,1,74,1,76,4,120,1]],[242,[15,1,17,29,48,1,70,1,74,1,76,4,120,1]],[243,[15,1,18,29,49,1,70,1,74,1,76,4,120,1]],[244,[16,1,18,30,69,1,72,1,74,1,76,4,120,1]],[245,[16,1,18,31,51,1,68,2,71,2,74,1,76,4]],[246,[16,1,18,32,51,2,68,2,71,2,74,1,76,4]],[247,[16,1,19,31,53,1,67,3,71,1,74,4]],[248,[17,1,19,32,54,1,66,2,69,1,71,2,74,1,76,4]],[249,[17,1,19,34,55,1,65,2,68,2,71,2,74,1,76,4]],[250,[17,1,19,35,57,2,63,2,67,3,71,2,74,1,76,4]],[251,[17,1,20,36,66,3,72,1,74,1,76,4,121,1]],[252,[18,1,20,39,63,6,72,1,74,1,76,4,121,1]],[253,[18,1,20,49,72,1,74,1,76,4,121,1]],[254,[18,1,20,50,72,1,74,1,76,4,121,1]],[255,[18,1,21,48,72,1,74,6,121,1]],[256,[21,44,66,3,72,1,74,6,121,1]],[257,[19,1,21,43,65,4,72,1,74,1,76,4,121,1]],[258,[19,1,21,42,64,5,71,2,74,6,121,1]],[259,[19,1,22,40,63,6,71,1,74,6,121,1]],[260,[20,1,22,37,62,7,72,1,121,1]],[261,[20,1,22,47,72,1,74,6,121,1]],[262,[20,1,22,47,70,1,72,1,74,6,121,1]],[263,[23,46,72,1,74,1,76,4,121,1]],[264,[21,1,23,46,72,1,74,6,121,1]],[265,[21,1,23,46,72,1,74,6,121,1]],[266,[21,1,23,46,70,1,72,1,74,6,121,1]],[267,[24,45,72,1,75,5,121,1]],[268,[22,1,24,45,72,1,77,3,121,1]],[269,[22,1,24,8,33,36,70,3,74,6,121,1]],[270,[22,1,24,45,70,2,74,6,121,1]],[271,[25,44,70,1,72,1,121,1]],[272,[23,1,25,8,34,35,72,1,75,5,121,1]],[273,[23,1,25,44,72,1,75,5,121,1]],[274,[23,1,26,43,70,1,72,1,75,5,121,1]],[275,[26,43,70,1,75,5,121,1]],[276,[24,1,26,43,70,1,75,5,121,1]],[277,[24,1,26,43,70,1,75,5]],[278,[27,8,36,33,70,2,75,5]],[279,[27,42,70,2,75,5]],[280,[25,1,27,42,70,2,74,4]],[281,[25,1,27,42,70,2,73,1,76,4]],[282,[25,1,28,41,73,1,75,5]],[283,[28,41,73,1,75,5,165,2,171,2]],[284,[28,41,71,1,73,1,75,5,163,1,173,1]],[285,[26,1,28,41,70,1,73,1,75,5,122,1,161,2,165,7,175,1]],[286,[26,1,29,40,71,1,73,1,75,5,122,1,161,1,164,10,176,1]],[287,[26,1,29,40,71,1,73,1,75,5,122,1,160,1,163,12,177,1]],[288,[29,40,73,1,79,1,122,1,159,1,162,5,168,8]],[289,[27,1,29,40,70,2,73,7,158,1,161,5,168,9,178,1]],[290,[27,1,29,40,70,2,73,7,120,1,123,1,157,1,160,5,166,11]],[291,[29,40,70,1,73,1,120,1,123,1,156,1,159,5,165,12,179,1]],[292,[30,39,70,1,73,1,75,5,120,1,124,1,155,1,158,5,164,14]],[293,[28,1,30,39,73,1,75,1,77,3,124,1,154,1,157,5,163,15]],[294,[28,1,30,39,70,1,73,1,75,5,122,1,125,1,153,1,156,5,162,16]],[295,[31,38,71,1,73,1,75,5,122,2,125,1,152,1,155,5,162,16]],[296,[31,38,70,2,73,1,75,5,122,2,126,1,150,2,154,5,161,13,175,3]],[297,[29,1,31,38,70,2,73,1,77,3,122,3,127,1,149,2,153,5,160,13,174,3]],[298,[29,1,31,38,70,2,73,5,122,3,127,1,148,1,151,6,159,18,179,1]],[299,[29,1,31,38,70,2,73,7,122,4,128,1,146,2,150,6,158,17,176,1,179,1]],[300,[32,37,70,2,73,1,75,5,122,5,129,1,145,2,149,6,157,15,174,2]],[301,[32,37,71,1,73,7,122,6,130,2,143,2,147,7,156,16,175,1,178,1]],[302,[30,1,32,37,71,1,73,7,122,7,131,4,140,3,146,7,155,16]],[303,[30,1,32,37,71,1,73,1,75,5,121,9,134,7,144,8,153,17,171,2,174,1,177,1]],[304,[30,1,32,37,71,1,73,7,120,13,142,9,152,18,173,2,177,1]],[305,[30,1,32,37,71,1,73,1,75,5,120,30,151,18,170,2,173,1]],[306,[30,1,33,37,71,1,73,1,120,28,150,18,171,1,176,1]],[307,[30,1,33,37,71,1,120,27,149,19,170,1,172,1]],[308,[31,1,33,37,71,1,83,1,92,2,101,3,105,1,107,1,109,36,147,20,170,3,175,1]],[309,[31,1,33,37,71,1,74,1,83,1,87,3,92,2,100,4,105,38,146,20,170,2]],[310,[31,1,33,10,44,26,71,1,73,3,78,3,83,1,85,1,87,4,92,2,99,5,105,35,144,22,170,2,174,1]],[311,[31,1,33,10,44,26,71,1,73,4,78,3,83,1,85,1,87,4,92,2,96,2,99,5,105,32,140,25,170,1]],[312,[31,1,33,10,44,26,71,1,73,8,83,1,85,1,87,4,92,2,95,3,99,5,105,60,170,1,173,1]],[313,[31,1,33,10,44,26,71,1,73,8,83,1,85,1,87,4,92,2,95,3,99,5,105,59]],[314,[31,1,33,10,44,26,71,1,73,8,83,1,85,1,87,4,92,2,95,3,99,5,105,3,109,55,169,1,172,1]],[315,[31,1,33,10,44,26,71,1,73,8,83,1,85,1,87,4,92,1,95,3,99,5,105,58,169,1]],[316,[31,1,33,10,44,26,71,1,73,8,83,3,87,4,92,1,95,3,99,5,105,3,109,54,168,1,171,1]],[317,[31,1,33,37,71,1,73,8,83,3,87,4,92,1,95,3,99,5,105,3,109,54,168,1,171,1]],[318,[31,1,33,10,44,26,71,1,73,9,83,3,87,4,92,1,95,3,99,5,105,3,109,52,162,1,167,1,170,1]],[319,[31,1,33,37,71,1,74,8,83,3,87,4,92,1,95,9,105,3,109,52,162,1,167,1,170,1]],[320,[31,1,33,37,71,1,74,8,83,3,87,4,92,1,95,9,105,3,109,51,162,1,166,1]],[321,[31,1,33,37,71,1,74,8,83,3,87,4,92,1,95,9,105,3,109,53,163,1,166,1,169,1]],[322,[33,37,71,1,74,8,83,3,87,4,92,1,95,13,109,50,160,2,163,1,165,1]],[323,[33,9,43,27,71,1,74,8,83,3,87,4,92,1,95,13,109,49,160,1,162,2,165,1,168,1]],[324,[30,1,33,37,71,1,74,8,83,3,87,4,92,1,95,13,109,49,163,1,168,1]],[325,[30,1,32,38,71,1,74,8,83,3,87,4,92,1,95,13,109,48,162,1,164,1]],[326,[30,1,32,9,42,28,71,1,74,8,83,3,87,4,92,1,95,13,109,12,122,35,158,1,164,1,167,1]],[327,[32,9,42,28,71,1,74,8,83,3,87,4,92,1,95,13,109,12,122,36,163,2]],[328,[29,1,32,38,74,8,83,8,92,1,95,13,109,12,122,34,157,1,163,1,166,1]],[329,[29,1,31,39,74,8,83,8,92,1,95,13,109,12,122,34,157,1,163,1,166,1]],[330,[31,9,41,29,74,1,76,6,83,8,92,1,95,9,105,3,109,12,122,33,156,1,163,1]],[331,[28,1,31,39,74,1,76,6,83,8,92,2,95,9,105,3,109,46,159,1,162,1]],[332,[28,1,30,9,40,30,74,8,83,8,92,2,95,9,105,16,128,1,130,25,156,1,159,2,162,1,165,1]],[333,[30,40,73,9,83,8,92,2,95,9,105,8,116,2,121,9,131,23,157,4,162,1,165,1]],[334,[27,1,29,41,73,9,83,8,92,1,95,8,105,1,107,1,113,17,132,22,155,1,157,6]],[335,[27,1,29,9,39,31,73,9,83,8,92,2,105,16,122,8,132,22,158,4]],[336,[26,1,29,9,39,31,72,10,83,2,92,2,97,7,105,10,116,2,119,11,133,21,157,5,164,1]],[337,[26,1,28,9,38,32,72,8,81,1,83,1,87,6,94,10,105,1,107,1,109,21,133,21,157,5,164,1]],[338,[28,9,38,32,72,1,81,1,83,11,95,1,99,4,105,1,107,23,133,21,156,6,164,1]],[339,[25,1,27,9,37,23,69,1,72,1,74,8,83,1,87,4,92,2,96,7,105,1,107,1,109,21,133,20,156,6,164,1]],[340,[27,9,37,20,60,10,72,8,83,1,87,4,92,2,95,8,105,1,107,1,109,9,119,11,133,20,154,8,164,1]],[341,[24,1,26,9,37,19,58,12,72,1,74,1,76,4,81,1,83,1,87,4,92,2,95,8,105,1,107,1,109,9,119,11,133,20,154,8,164,1]],[342,[26,9,36,20,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,105,1,107,1,109,9,119,11,133,29,164,1]],[343,[23,1,25,9,36,20,58,12,72,1,76,4,81,1,83,1,87,4,92,2,95,8,105,1,107,1,109,9,119,11,133,29,164,1]],[344,[23,1,25,9,36,20,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,105,1,107,1,109,9,119,11,133,30]],[345,[22,1,24,10,35,21,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,104,2,107,1,109,9,119,11,133,30]],[346,[22,1,24,9,35,21,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,104,2,107,1,109,9,119,11,133,30,165,1]],[347,[21,1,24,9,34,22,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,104,2,107,1,109,9,119,11,133,30,165,1]],[348,[21,1,23,10,34,22,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,104,2,107,1,110,8,119,11,132,31,165,1]],[349,[23,9,33,23,58,12,72,1,75,5,81,1,83,1,87,4,92,2,95,8,104,2,107,1,110,8,120,10,132,32]],[350,[20,1,22,10,33,23,58,12,72,1,75,5,81,1,83,1,86,5,92,1,95,8,104,2,107,1,110,8,120,10,132,32,166,1]],[351,[22,9,33,23,58,12,72,1,75,7,83,1,86,5,92,1,95,2,98,5,104,2,107,1,110,8,120,6,129,1,132,32,166,1]],[352,[19,1,21,10,32,24,58,11,72,1,74,8,83,1,86,5,92,2,95,8,104,2,107,9,117,1,132,33]],[353,[21,9,32,24,58,11,70,1,72,1,74,8,83,1,86,5,92,2,95,8,104,2,107,1,117,1,132,33,167,1]],[354,[18,1,20,10,31,25,58,11,70,1,72,1,74,8,83,1,85,6,92,2,95,8,104,2,117,1,130,36]],[355,[17,2,20,9,31,25,58,11,70,1,72,1,74,8,83,1,85,8,104,2,117,1,130,36,168,1]],[356,[17,1,19,10,30,26,58,11,70,1,72,1,74,8,83,1,85,3,92,2,104,2,117,1,122,4,129,38,169,1]],[357,[16,2,19,10,30,26,58,11,70,1,72,1,74,4,79,1,83,1,92,2,104,2,114,1,117,51,169,1]],[358,[16,1,19,9,30,26,58,11,70,1,72,1,83,1,92,1,104,2,111,1,113,2,117,4,122,46,170,1]],[359,[15,2,18,10,29,27,58,2,70,1,72,1,83,1,92,2,99,4,104,2,107,1,111,10,122,47]],[360,[15,1,18,9,29,28,70,1,72,1,81,1,83,1,87,1,90,1,92,1,99,4,104,2,107,2,110,59,171,1]],[361,[15,1,17,10,28,29,70,1,72,1,79,1,81,1,83,1,87,4,92,1,95,11,107,63,172,1]],[362,[14,1,17,9,28,30,70,1,72,1,78,2,81,1,83,1,85,6,92,1,95,11,107,63,172,1]],[363,[14,1,16,10,27,33,62,7,70,1,72,1,76,6,83,10,95,11,107,64,173,1]],[364,[16,9,27,42,70,1,72,3,76,6,83,10,95,76,173,1]],[365,[13,1,15,10,26,45,72,3,76,6,83,3,87,6,95,11,107,65,174,1]],[366,[15,10,26,45,72,3,76,6,83,3,87,6,95,78]],[367,[12,1,14,10,25,46,72,3,76,6,83,3,87,6,95,3,99,7,107,66,175,1]],[368,[12,1,14,10,25,44,70,1,72,3,76,6,83,3,87,6,94,12,107,67]],[369,[11,1,13,10,25,44,70,1,72,3,76,6,83,3,87,6,95,79,176,1]],[370,[11,1,13,10,24,45,70,1,72,3,76,6,83,3,87,6,95,80]],[371,[10,1,12,11,24,45,70,1,72,3,76,6,83,3,87,4,92,1,95,80]],[372,[10,1,12,10,23,46,70,1,73,2,76,6,83,3,87,6,94,82,178,1]],[373,[9,1,12,10,23,46,70,1,73,2,76,6,83,3,87,6,94,83]],[374,[9,1,11,58,70,1,73,2,76,6,83,3,87,6,94,4,99,78,179,1]],[375,[8,1,11,10,22,47,70,1,73,2,76,6,83,3,87,6,94,4,99,79,180,1]],[376,[8,1,10,11,22,47,70,1,73,2,76,6,83,3,87,6,94,4,99,22,127,2,131,47,180,1]],[377,[10,59,70,1,73,9,83,3,87,6,95,3,99,10,110,6,117,2,120,10,131,48,181,1]],[378,[7,1,9,11,21,48,70,1,73,9,83,3,87,6,94,12,107,1,113,17,131,49,181,1]],[379,[7,1,9,11,21,48,70,1,73,9,84,2,87,6,94,4,104,2,107,9,117,2,122,8,132,48,182,1]],[380,[9,10,20,49,70,1,73,9,83,3,87,4,92,2,99,6,106,10,117,2,122,8,132,49,183,1]],[381,[6,1,8,11,20,49,70,1,73,9,83,1,92,1,95,11,107,1,110,6,117,2,122,8,133,48,183,1]],[382,[6,1,8,11,20,49,70,1,73,4,81,1,87,6,94,9,104,2,107,2,110,6,117,2,122,8,133,49,184,1]],[383,[5,1,7,11,19,50,70,1,77,5,83,8,92,2,100,6,107,1,110,6,117,2,122,8,133,49]],[384,[5,1,7,11,19,40,68,1,70,1,73,9,83,1,89,2,92,1,96,2,99,6,107,1,110,6,117,2,122,8,133,50,185,1]],[385,[7,10,19,38,60,11,73,7,81,1,83,1,87,4,92,1,96,2,99,6,107,1,110,6,117,2,122,8,133,51]],[386,[4,1,6,11,18,39,58,11,70,1,75,7,83,1,87,4,92,1,96,2,99,6,107,1,110,6,117,2,122,8,133,51,186,1]],[387,[4,1,6,11,18,38,58,11,70,1,74,6,81,1,83,1,87,4,92,1,96,2,99,6,107,1,110,6,117,2,122,8,133,52]],[388,[3,1,6,11,18,38,58,11,74,6,81,1,83,1,87,4,92,1,96,2,100,5,107,1,110,6,117,2,122,8,133,31,168,17,187,1]],[389,[3,1,5,11,17,39,58,11,74,6,81,1,83,1,87,6,96,2,99,6,106,2,110,6,117,2,122,8,133,29,164,4,170,16,188,1]],[390,[5,11,17,39,58,11,74,6,81,1,87,6,94,4,99,6,106,2,110,6,117,2,120,1,122,8,133,28,163,1,165,5,171,15,188,1]],[391,[2,1,5,11,17,39,58,11,75,5,81,1,87,6,94,4,99,6,106,2,110,6,117,2,122,8,133,27,162,1,164,23,189,1]],[392,[2,1,4,11,17,39,58,11,74,6,81,1,87,6,94,4,99,6,106,2,110,6,117,2,122,8,133,26,161,11,173,15]],[393,[4,11,16,40,58,11,71,1,74,6,81,1,87,6,94,4,100,5,106,2,110,6,117,2,120,1,122,8,133,26,160,28,190,1]],[394,[1,1,4,11,16,41,58,11,71,1,75,5,81,1,86,7,94,4,100,5,106,2,110,6,117,2,120,10,133,26,160,12,174,15]],[395,[1,1,3,12,16,41,58,11,71,1,75,5,81,1,85,8,94,4,100,5,106,2,110,6,117,2,120,9,133,26,160,11,174,15,191,1]],[396,[1,1,3,12,16,41,58,11,71,1,75,5,81,1,85,8,94,4,100,5,106,2,110,9,120,1,133,26,160,12,174,16]],[397,[0,1,3,12,16,41,58,11,71,1,75,5,81,1,85,8,94,4,100,5,106,2,110,6,117,2,133,26,161,8,170,1,173,17]],[398,[0,1,3,11,15,42,58,11,71,1,75,5,81,1,84,9,94,11,106,1,117,2,129,2,133,27,161,7,169,2,173,18]],[399,[0,1,2,12,15,41,58,11,71,1,75,5,81,1,84,9,94,5,105,1,117,2,128,2,132,28,162,2,168,2,173,1,175,16]],[400,[0,1,2,12,15,42,58,11,71,1,74,8,84,9,94,1,105,2,117,2,123,4,129,32,165,3,173,1,175,17]],[401,[0,1,2,12,15,42,58,11,71,1,74,8,84,2,105,2,117,2,120,1,124,38,174,18]],[402,[0,1,2,55,58,11,71,1,74,6,81,1,92,1,94,1,105,2,115,1,117,46,173,1,175,18]],[403,[0,1,2,54,58,11,71,1,81,1,92,1,105,2,112,52,166,3,172,2,175,18]],[404,[0,1,2,54,58,2,71,1,81,1,92,1,94,1,97,7,105,62,172,22]],[405,[0,1,2,55,71,1,81,1,89,2,92,1,94,1,96,8,105,89,196,1]],[406,[0,1,2,55,71,1,81,1,85,1,87,6,94,1,96,9,106,40,151,44]],[407,[0,1,3,55,71,1,73,7,81,1,88,5,94,11,106,38,146,5,153,42,197,1]],[408,[0,1,3,57,63,5,71,1,73,7,81,1,84,2,87,6,94,11,106,37,144,2,147,6,154,42,197,1]],[409,[3,57,61,8,71,1,73,9,83,10,94,11,106,36,143,1,146,8,155,41]],[410,[1,1,4,66,71,11,83,10,94,11,106,36,143,11,155,41,198,1]],[411,[1,1,4,66,71,11,83,10,94,11,106,43,150,1,153,1,156,17,175,21,198,1]],[412,[2,1,5,53,136,5,142,10,153,1,156,13,171,4,177,19]],[413,[2,1,5,53,136,5,142,7,153,1,157,11,169,8,178,19]],[414,[3,1,6,52,136,5,143,9,157,10,168,1,171,7,179,18]],[415,[3,1,7,51,136,6,143,9,158,9,168,10,180,17]],[416,[4,1,7,51,136,6,144,4,151,1,158,9,168,11,180,17]],[417,[5,1,8,50,136,7,145,2,150,2,158,8,167,12,180,12,193,4]],[418,[5,1,8,50,136,8,155,1,157,9,167,12,181,13,195,1]],[419,[6,1,9,49,136,9,153,1,156,10,167,12,180,13,195,1]],[420,[9,49,136,10,151,15,168,10,180,10,191,1,195,1]],[421,[7,1,10,48,136,31,169,9,180,10,191,1]],[422,[8,1,11,47,136,31,170,7,179,12,197,1]],[423,[11,47,136,32,172,3,179,12,193,1]],[424,[9,1,12,46,136,34,178,12]],[425,[10,1,13,45,136,35,179,10]],[426,[13,45,136,38,178,8,187,1]],[427,[11,1,14,44,136,35,177,8,186,1]],[428,[12,1,15,43,136,36,176,9]],[429,[15,43,136,38,175,9,189,1]],[430,[13,1,16,42,136,47]],[431,[14,1,17,41,136,16,158,24]],[432,[17,41,136,14,152,6,160,22]],[433,[15,1,18,40,136,14,151,1,153,6,161,20]],[434,[16,1,19,39,136,13,150,1,152,8,161,19,189,1]],[435,[20,38,136,12,149,1,151,7,159,2,162,17,180,1]],[436,[17,1,20,38,136,12,149,2,152,9,162,17,184,1]],[437,[18,1,21,37,136,12,150,6,157,2,160,1,163,15,183,1]],[438,[22,36,136,11,148,1,150,6,157,1,160,1,163,14]],[439,[22,36,136,11,148,1,151,6,159,1,163,13]],[440,[20,1,23,35,136,11,149,1,152,4,159,1,164,12]],[441,[24,34,136,12,150,1,153,3,158,1,164,11]],[442,[24,34,136,13,150,2,154,4,162,1,164,10]],[443,[22,1,25,33,136,13,155,3,163,10]],[444,[26,32,136,14,161,11]],[445,[27,31,136,16,160,12,181,1]],[446,[24,1,27,31,136,35]],[447,[28,30,136,22,159,11]],[448,[29,29,136,34,175,1]],[449,[26,1,29,29,136,33,178,1]],[450,[30,28,136,33]],[451,[31,27,136,32,169,1]],[452,[31,27,136,32]],[453,[29,1,32,26,136,31,171,1,175,1]],[454,[33,25,137,28,171,1]],[455,[33,25,136,1,139,27,170,1]],[456,[34,24,141,23,169,1,173,1]],[457,[35,23,138,1,140,2,143,20,172,1]],[458,[36,22,137,1,139,1,142,21,168,1]],[459,[36,22,137,1,141,21,167,1]],[460,[34,1,37,21,141,1,143,4,148,13]],[461,[35,1,38,20,142,6,149,11]],[462,[39,19,142,8,151,8]],[463,[36,1,40,18,144,3,149,8,164,1]],[464,[37,1,40,17,147,3,151,3,163,1]],[465,[38,1,41,9,51,3,142,1,148,6,162,1]],[466,[42,8,150,4,161,1]],[467,[39,1,42,7,151,3]],[468,[40,1,43,5,148,1,153,1]],[469,[41,1,45,2]],[470,[42,1]]]},"16:1":{"w":199,"h":438,"rows":[[201,[120,5,163,1,166,5,172,15,188,1,190,1,193,1]],[202,[120,5,162,1,165,6,172,17]],[203,[120,5,162,1,164,6,171,19]],[204,[120,5,161,1,164,5,170,20,192,1]],[205,[120,5,163,6,170,20,192,1]],[206,[120,5,160,1,162,6,169,16,186,3]],[207,[120,5,159,1,162,5,168,16,186,3,191,1]],[208,[120,5,158,1,161,6,168,16,185,4,191,1]],[209,[120,5,127,1,158,1,160,6,167,16,184,5]],[210,[120,5,127,1,157,1,160,5,166,17,184,4,190,1]],[211,[120,5,127,1,156,1,159,6,166,18,186,2,190,1]],[212,[120,5,127,1,155,1,158,6,165,17,186,2]],[213,[120,5,127,1,155,1,157,6,164,18,186,1]],[214,[120,5,127,1,154,1,157,6,164,17,186,1]],[215,[120,5,127,1,153,1,156,6,163,18,185,2]],[216,[120,6,127,1,152,1,155,25,181,1,185,1,188,1]],[217,[120,6,127,1,151,1,154,7,162,18,185,1]],[218,[120,6,127,1,151,1,153,7,161,19,184,2]],[219,[120,6,150,1,152,7,160,21,184,1,187,1]],[220,[120,6,128,1,149,1,152,7,160,19,181,1,184,1]],[221,[120,6,128,1,148,1,151,7,159,20,183,1]],[222,[120,7,146,1,150,7,158,20,183,1,186,1]],[223,[120,7,129,1,145,1,149,7,157,22,183,1]],[224,[125,3,130,1,144,1,147,8,156,23,182,1]],[225,[120,1,131,1,142,1,146,8,156,23,182,1,185,1]],[226,[120,5,132,1,139,3,145,8,155,23,181,2,185,1]],[227,[120,8,134,5,143,9,154,24,181,1]],[228,[120,11,140,11,153,24,178,1,180,2,184,1]],[229,[121,14,137,13,152,25,178,1,180,2,184,1]],[230,[120,2,123,25,151,25,180,1]],[231,[120,27,150,27,180,1,183,1]],[232,[120,26,148,26,178,1,180,1,183,1]],[233,[120,24,146,27,179,1]],[234,[121,20,144,28,178,2,182,1]],[235,[121,16,140,31,179,1,182,1]],[236,[120,51,178,1]],[237,[120,50,178,1]],[238,[120,50,181,1]],[239,[120,49]],[240,[120,48,177,1]],[241,[120,48,180,1]],[242,[120,47,168,2]],[243,[120,48,176,1]],[244,[121,44,166,1,169,1,172,1]],[245,[30,3,35,3,120,1,122,45,169,1,172,1,175,1]],[246,[28,1,38,2,120,2,123,41,165,1,169,1,172,1,175,1]],[247,[27,1,31,6,40,1,120,2,123,40,172,1,175,1]],[248,[26,1,29,10,41,1,121,1,124,38,166,1,169,2,174,1]],[249,[25,1,28,12,42,1,120,3,124,38,166,1,169,2,174,1]],[250,[24,1,27,5,35,6,43,1,120,2,123,39,169,2,173,2]],[251,[26,5,33,9,120,1,122,39,170,1,173,1]],[252,[23,1,26,4,31,12,44,1,79,1,121,41,165,1,169,5]],[253,[25,18,45,1,79,1,120,42,165,2,169,5,176,1]],[254,[25,19,46,1,79,1,120,41,165,2,168,5]],[255,[25,20,47,1,78,1,120,41,165,1,167,1,169,4]],[256,[25,21,48,1,78,1,120,40,161,5,168,5]],[257,[25,22,49,1,120,46,167,5]],[258,[25,23,50,1,77,1,120,46,167,5]],[259,[25,24,51,1,77,1,79,1,120,46,167,5]],[260,[23,1,26,24,52,1,76,1,79,1,120,37,158,3,163,9]],[261,[26,25,53,1,78,2,120,51]],[262,[24,1,27,25,54,1,75,1,78,2,120,51]],[263,[24,1,27,26,55,1,74,1,77,3,120,35,157,14]],[264,[27,27,56,1,73,1,76,4,120,35,156,14]],[265,[25,1,28,27,58,1,72,1,75,4,120,33,155,15]],[266,[28,28,59,2,70,1,74,5,120,33,155,15]],[267,[26,1,29,29,61,3,67,3,73,5,79,1,120,33,154,15]],[268,[26,1,29,31,71,6,79,1,120,49]],[269,[27,1,30,33,68,8,78,2,120,32,153,16,171,1]],[270,[27,1,30,45,77,3,120,49]],[271,[28,1,31,43,76,4,120,49]],[272,[28,1,31,42,75,5,120,48]],[273,[32,40,74,6,120,48,170,1]],[274,[29,1,32,38,72,8,120,48]],[275,[30,1,33,35,70,10,120,48]],[276,[30,1,33,47,120,48]],[277,[34,46,120,47]],[278,[34,46,120,47]],[279,[34,46,120,47]],[280,[35,45,120,47]],[281,[35,45,120,47]],[282,[33,1,36,44,120,47]],[283,[36,44,120,47]],[284,[34,1,37,43,120,47]],[285,[34,1,37,130]],[286,[37,130]],[287,[35,1,38,129]],[288,[38,129]],[289,[36,1,39,128]],[290,[39,128]],[291,[39,128,169,1]],[292,[37,1,40,127,169,1]],[293,[40,127,169,1]],[294,[40,127,169,1]],[295,[40,128,169,1]],[296,[38,1,41,127]],[297,[38,1,41,127]],[298,[41,127,170,1]],[299,[41,128,170,1]],[300,[41,128]],[301,[41,128,171,1]],[302,[41,129,171,1]],[303,[38,1,40,130]],[304,[38,1,40,130,172,1]],[305,[38,1,40,131]],[306,[40,131,173,1]],[307,[40,132]],[308,[37,1,39,133,174,1]],[309,[39,7,47,123,171,1]],[310,[36,1,39,134,175,1]],[311,[36,1,38,7,46,125,172,1,175,1]],[312,[38,136,176,1]],[313,[35,1,37,7,45,127,173,1,176,1]],[314,[37,6,44,131,177,1]],[315,[34,1,36,7,44,131,177,1]],[316,[36,6,43,133]],[317,[33,1,35,6,42,134,178,1]],[318,[35,5,42,135,178,1]],[319,[32,1,34,6,41,12,54,123,179,1]],[320,[31,1,34,5,40,10,52,4,59,118,179,1]],[321,[33,6,40,8,49,10,61,117,180,1]],[322,[30,1,33,5,39,7,47,5,56,4,62,116,180,1]],[323,[29,1,32,5,38,7,46,3,50,3,54,3,59,2,62,117,181,1]],[324,[29,1,31,13,45,2,48,4,53,1,55,1,57,5,63,116,181,1]],[325,[28,1,31,5,37,6,44,2,47,5,53,9,64,116,182,1]],[326,[27,2,30,5,36,6,43,2,46,11,58,5,64,116,182,1]],[327,[27,1,30,4,35,6,42,2,45,11,57,6,64,117,183,1]],[328,[26,1,29,5,35,5,41,2,44,9,56,7,64,117,183,1]],[329,[26,1,28,5,34,5,41,22,65,117]],[330,[25,1,28,5,34,5,40,2,43,20,64,118,184,1]],[331,[27,5,33,5,39,2,42,21,64,119]],[332,[24,1,27,4,32,6,39,24,64,119,185,1]],[333,[26,5,32,5,38,2,41,22,64,120,185,1]],[334,[23,1,25,5,31,5,38,1,40,23,64,120]],[335,[22,1,25,4,30,6,37,25,64,121,186,1]],[336,[24,5,30,5,36,2,39,23,63,122]],[337,[21,1,24,4,29,6,36,26,63,122,187,1]],[338,[23,5,29,5,35,2,38,24,63,123]],[339,[20,1,22,5,28,6,35,1,37,24,62,124,188,1]],[340,[19,1,22,4,27,6,34,2,37,24,62,125]],[341,[19,1,21,5,27,5,33,2,36,25,62,125,189,1]],[342,[18,1,21,4,26,6,33,2,36,25,62,126,189,1]],[343,[20,11,32,2,35,25,61,127,190,1]],[344,[17,1,19,5,25,6,32,28,61,128,190,1]],[345,[16,1,19,4,24,6,31,29,61,128,191,1]],[346,[16,1,18,5,24,5,31,1,33,27,61,128,191,1]],[347,[15,1,18,4,23,6,30,29,61,129]],[348,[15,1,17,11,29,2,32,27,60,130,192,1]],[349,[14,1,17,4,22,6,29,1,32,27,60,131,192,1]],[350,[14,1,16,11,28,31,60,131,193,1]],[351,[13,1,16,4,21,11,33,25,60,131,193,1]],[352,[15,4,20,6,27,5,33,25,59,133]],[353,[12,1,15,4,20,8,29,2,33,25,59,133,194,1]],[354,[14,4,19,6,26,2,31,27,59,134,194,1]],[355,[11,1,13,5,19,5,26,1,28,29,59,134]],[356,[13,4,18,6,25,3,29,28,58,135,195,1]],[357,[10,1,12,11,25,32,58,136]],[358,[9,1,12,4,17,6,24,2,27,29,58,136,196,1]],[359,[9,1,11,11,24,1,26,30,57,137,196,1]],[360,[8,1,11,4,16,6,23,33,57,138,196,1]],[361,[8,1,10,11,23,1,25,31,57,103,167,28]],[362,[7,1,10,4,15,6,22,30,53,2,57,101,160,7,169,26,197,1]],[363,[7,1,9,11,22,1,24,26,54,1,56,101,159,3,163,6,170,26,197,1]],[364,[6,1,9,4,14,6,21,2,24,26,51,3,56,100,158,2,161,3,166,4,171,25]],[365,[6,1,8,11,21,1,23,31,56,100,157,2,160,11,172,24]],[366,[5,1,8,4,13,6,20,2,23,27,51,1,56,99,156,2,159,13,174,22,198,1]],[367,[5,1,7,5,13,5,20,1,22,29,55,100,156,1,158,5,165,5,171,2,175,21,198,1]],[368,[4,1,7,11,19,2,22,32,55,99,156,6,164,7,172,2,175,21,198,1]],[369,[4,1,6,5,12,5,19,1,21,30,55,99,155,17,173,2,176,20,198,1]],[370,[6,11,18,2,21,32,55,99,155,18,174,2,178,16,195,1,198,1]],[371,[3,1,5,11,18,1,20,33,54,100,155,19,175,2,178,16,195,1,198,1]],[372,[5,11,17,36,54,100,155,20,176,2,179,14,195,1,198,1]],[373,[2,1,4,12,17,35,54,100,155,21,177,2,180,13,195,1]],[374,[2,1,4,11,17,35,54,100,155,24,181,12,195,1]],[375,[1,1,4,11,17,35,53,101,155,21,181,11,194,1,197,1]],[376,[1,1,3,12,16,36,53,101,155,21,177,3,181,12]],[377,[3,12,16,3,21,30,53,101,155,20,176,4,182,10,193,1]],[378,[0,1,3,12,16,35,52,102,155,20,176,2,179,1,182,10,193,1,196,1]],[379,[0,1,2,13,18,1,21,30,52,102,155,20,176,4,182,6,189,1,192,1]],[380,[2,13,17,34,52,102,155,21,177,2,182,6,191,1,195,1]],[381,[2,13,17,4,22,28,52,102,155,23,182,4,187,2,191,1,194,1]],[382,[2,14,17,33,51,103,155,22,178,1,181,5,190,1,194,1]],[383,[2,14,18,32,51,103,155,25,181,5,189,1,193,1]],[384,[2,15,18,31,51,103,155,21,177,1,181,4,189,1]],[385,[2,16,19,30,51,103,155,23,180,4,188,1,192,1]],[386,[0,1,3,16,20,29,50,104,155,23,179,5,188,1,191,1]],[387,[3,16,21,28,50,103,155,22,179,4,187,1]],[388,[4,2,8,1,10,10,22,26,50,104,155,22,178,5,186,2,190,1]],[389,[1,1,4,2,8,1,11,10,23,25,49,105,155,1,157,19,177,5,186,1]],[390,[10,1,12,10,23,25,49,105,155,20,177,4,185,1]],[391,[7,1,10,1,13,10,24,23,49,105,155,19,176,6]],[392,[14,10,25,22,49,104,155,19,175,5,184,1]],[393,[8,1,14,10,26,1,28,1,30,17,48,105,155,18,174,6,183,1]],[394,[14,1,16,9,27,1,29,18,48,105,155,17,174,5]],[395,[16,10,27,2,30,17,48,105,155,17,173,6,182,1]],[396,[17,10,28,5,34,5,41,6,48,105,155,16,172,6]],[397,[13,1,18,10,29,9,40,6,48,31,81,72,155,4,160,10,172,5,184,1]],[398,[13,1,18,10,30,8,39,1,41,1,43,3,47,34,82,71,155,6,162,8,171,5]],[399,[10,1,18,1,20,9,31,14,47,31,79,3,84,8,94,59,155,3,161,8,170,6,183,1]],[400,[11,1,18,12,32,13,46,29,76,3,81,2,84,9,96,57,155,3,159,9,170,5,182,1]],[401,[12,1,18,3,22,9,33,11,46,29,76,2,82,1,85,5,91,2,94,1,97,5,103,2,107,46,155,3,159,1,161,1,163,5,169,5]],[402,[13,1,18,14,34,5,40,3,45,30,76,1,82,2,85,3,89,2,95,1,97,3,101,5,108,7,116,38,155,4,162,5,168,6,181,1]],[403,[14,1,18,16,36,6,44,31,76,2,81,1,83,1,85,5,95,2,98,2,101,2,106,1,108,9,120,6,130,24,156,10,167,6,180,1]],[404,[15,1,19,2,22,13,42,33,76,5,83,1,85,3,89,1,95,2,98,4,106,2,109,8,120,10,132,23,157,8,166,6,176,1,179,1]],[405,[20,1,22,16,40,36,77,3,81,7,89,2,94,1,96,1,98,1,100,2,104,1,107,1,109,2,112,2,121,7,129,2,132,24,158,6,165,6,175,1]],[406,[20,1,22,55,82,7,90,3,95,1,97,2,101,1,106,1,108,3,112,2,119,1,121,2,124,2,130,2,133,25,164,7,174,1]],[407,[21,1,24,66,92,2,96,4,101,5,107,4,112,2,118,2,121,4,131,1,133,37,173,1]],[408,[22,1,24,68,93,8,102,3,106,1,108,3,112,2,117,3,121,2,124,1,130,2,133,36,173,1]],[409,[23,1,25,77,104,1,107,5,113,6,120,3,124,2,129,1,131,1,133,35]],[410,[23,90,115,3,119,5,125,4,131,37]],[411,[21,1,24,5,30,85,118,7,126,41,171,1]],[412,[25,5,31,96,130,36,170,1]],[413,[26,4,31,39,74,91,169,1]],[414,[27,4,32,33,79,85,169,1,172,1]],[415,[28,1,30,2,33,31,83,81,168,1]],[416,[28,34,64,1,86,77]],[417,[29,31,61,2,92,70,170,1]],[418,[26,1,30,29,86,4,96,66]],[419,[27,1,30,26,58,3,62,1,86,3,91,2,100,61,169,1]],[420,[31,1,33,21,60,3,69,1,74,2,88,1,105,55,162,1,164,1,168,1]],[421,[32,1,35,18,59,1,66,1,109,50]],[422,[29,1,32,3,36,15,58,1,96,1,105,1,112,47]],[423,[33,2,36,13,62,1,101,1,104,2,118,40,162,1,166,1]],[424,[34,1,37,11,60,1,92,1,104,3,112,1,114,1,122,35,165,1]],[425,[35,11,96,2,114,1,125,31]],[426,[35,6,42,2,57,1,100,2,113,1,122,2,129,26,164,1]],[427,[35,4,46,1,55,1,104,2,125,2,132,23,163,1]],[428,[36,2,108,1,126,1,130,2,138,16,159,1]],[429,[52,1,112,1,126,1,138,1,140,1,142,11]],[430,[115,3,128,3,138,2,145,7,161,1]],[431,[48,1,120,1,133,1,138,1,142,2,160,1]],[432,[124,1,135,2,147,2,150,1,156,1]],[433,[42,1,140,1,146,2,150,1,154,2,159,1]],[434,[132,2,146,1]],[435,[136,1,148,2]],[437,[144,1]]]},"17:0":{"w":194,"h":511,"rows":[[238,[24,5]],[239,[23,2,28,3]],[240,[22,2,30,2]],[241,[22,2,29,3]],[242,[23,2,28,3]],[243,[23,2,29,2]],[244,[22,10]],[245,[20,14]],[246,[19,16]],[247,[18,19]],[248,[17,21]],[249,[16,23]],[250,[16,24]],[251,[16,25]],[252,[15,27]],[253,[15,28]],[254,[15,29]],[255,[14,31]],[256,[14,32]],[257,[14,33]],[258,[14,33]],[259,[14,34]],[260,[14,35]],[261,[14,36]],[262,[14,37]],[263,[14,38]],[264,[14,40]],[265,[14,41]],[266,[14,42]],[267,[14,43]],[268,[14,44,73,1]],[269,[14,46,72,2]],[270,[14,48,71,5]],[271,[14,51,69,8]],[272,[14,63]],[273,[14,63]],[274,[15,25,43,34]],[275,[15,23,46,25,72,5]],[276,[15,22,48,29]],[277,[15,21,49,28]],[278,[15,21,50,27]],[279,[16,20,52,24]],[280,[16,20,53,23]],[281,[16,20,54,22]],[282,[16,20,55,21]],[283,[16,20,57,19]],[284,[17,19,58,18]],[285,[17,20,59,17]],[286,[17,20,61,15]],[287,[17,20,62,14]],[288,[18,19,64,12]],[289,[18,19,68,7]],[290,[18,20]],[291,[18,20]],[292,[19,19]],[293,[19,19]],[294,[19,20]],[295,[20,19,146,12]],[296,[20,19,143,17]],[297,[21,18,141,21]],[298,[21,19,117,1,138,25]],[299,[21,19,117,3,136,13,150,14]],[300,[22,18,117,5,133,13,149,16]],[301,[22,19,117,26,145,21]],[302,[22,19,117,25,143,24]],[303,[23,18,117,51]],[304,[23,18,117,51]],[305,[24,18,117,30,156,13]],[306,[24,18,117,28,157,13]],[307,[24,18,117,26,159,11]],[308,[25,18,117,23,160,11]],[309,[25,18,118,19,161,10]],[310,[25,18,122,11,161,10]],[311,[26,17,162,10]],[312,[26,18,162,10]],[313,[27,17,163,9]],[314,[27,17,163,10]],[315,[27,18,164,9]],[316,[28,17,164,9]],[317,[28,17,164,9]],[318,[28,17,164,10]],[319,[29,16,164,10]],[320,[29,17,165,9]],[321,[29,17,165,9]],[322,[29,18,165,9]],[323,[30,17,165,9]],[324,[30,17,165,9]],[325,[30,17,165,9]],[326,[30,18,165,9]],[327,[31,17,165,9]],[328,[31,17,165,9]],[329,[31,18,165,9]],[330,[31,18,165,9]],[331,[31,19,165,9]],[332,[31,19,164,10]],[333,[31,19,164,10]],[334,[31,19,164,9]],[335,[31,20,164,9]],[336,[31,20,164,9]],[337,[31,20,164,9]],[338,[31,21,163,9]],[339,[31,21,163,9]],[340,[31,21,163,9]],[341,[31,22,163,9]],[342,[31,22,163,9]],[343,[30,23,162,10]],[344,[30,24,162,9]],[345,[30,24,162,9]],[346,[29,25,161,10]],[347,[29,26,161,9]],[348,[29,26,161,9]],[349,[29,26,161,9]],[350,[28,28,160,9]],[351,[28,28,160,9]],[352,[28,28,160,8]],[353,[27,30,159,9]],[354,[27,30,159,9]],[355,[26,31,159,8]],[356,[26,32,159,8]],[357,[26,32,158,9]],[358,[25,33,157,9]],[359,[25,34,157,9]],[360,[24,35,157,9]],[361,[24,35,156,10]],[362,[23,36,156,9]],[363,[23,36,156,9]],[364,[22,38,156,8]],[365,[22,6,29,31,155,9]],[366,[21,7,29,31,155,9]],[367,[21,6,28,32,155,9]],[368,[20,40,155,9]],[369,[20,40,154,10]],[370,[19,41,154,9]],[371,[19,41,154,9]],[372,[18,42,154,9]],[373,[18,42,154,9]],[374,[17,43,154,9]],[375,[17,43,154,9]],[376,[16,44,154,9]],[377,[16,44,154,9]],[378,[15,45,154,9]],[379,[15,45,154,9]],[380,[14,46,154,9]],[381,[13,47,154,9]],[382,[13,9,23,37,154,9]],[383,[12,48,154,9]],[384,[12,48,154,9]],[385,[11,49,155,8]],[386,[11,49,155,9]],[387,[11,49,155,9]],[388,[10,50,155,9]],[389,[10,50,155,10]],[390,[9,51,156,9]],[391,[9,51,156,10]],[392,[8,52,156,10]],[393,[8,52,157,10]],[394,[7,53,157,10]],[395,[7,53,158,10]],[396,[7,53,158,10]],[397,[6,20,27,33,158,11]],[398,[6,54,158,11]],[399,[6,55,159,11]],[400,[5,56,160,10]],[401,[5,56,160,11]],[402,[4,57,161,10]],[403,[4,58,161,11]],[404,[4,58,162,11]],[405,[3,59,162,12]],[406,[3,60,163,11]],[407,[3,61,164,11]],[408,[2,63,164,11]],[409,[2,64,165,11]],[410,[2,65,165,11]],[411,[2,67,166,11]],[412,[1,71,73,4,80,6,87,13,104,4,109,8,166,12]],[413,[1,77,79,42,167,11]],[414,[1,121,168,11]],[415,[1,122,168,11]],[416,[1,123,169,11]],[417,[0,123,169,11]],[418,[0,123,170,11]],[419,[0,122,127,1,171,10]],[420,[0,122,125,4,171,11]],[421,[0,121,123,1,125,5,172,11]],[422,[0,121,124,7,172,11]],[423,[0,120,124,8,173,11]],[424,[0,78,109,11,123,10,173,11]],[425,[0,78,112,7,121,13,174,11]],[426,[0,76,113,6,121,14,175,11]],[427,[0,75,114,4,120,16,175,11]],[428,[0,74,115,2,120,16,176,11]],[429,[0,73,120,17,176,11]],[430,[0,72,119,19,176,11]],[431,[0,72,120,19,177,11]],[432,[0,71,119,20,177,11]],[433,[0,71,119,21,178,11]],[434,[0,70,118,23,179,10]],[435,[0,69,119,22,179,10]],[436,[0,69,119,23,179,11]],[437,[0,69,120,23,180,10]],[438,[0,68,120,24,180,10]],[439,[0,68,120,24,181,10]],[440,[0,68,120,25,181,10]],[441,[1,67,121,25,181,10]],[442,[1,66,121,25,181,11]],[443,[1,66,121,26,182,10]],[444,[1,66,121,27,182,10]],[445,[2,65,122,26,182,10]],[446,[2,65,122,27,183,10]],[447,[2,64,122,28,183,10]],[448,[2,64,122,29,183,10]],[449,[3,63,122,29,183,10]],[450,[3,63,122,30,183,10]],[451,[3,63,122,31,184,9]],[452,[4,62,122,32,184,10]],[453,[4,62,122,33,184,10]],[454,[5,61,122,33,184,10]],[455,[5,61,122,34,184,10]],[456,[6,60,122,35,184,10]],[457,[6,61,122,36,184,10]],[458,[7,60,121,38,184,10]],[459,[7,60,121,39,184,10]],[460,[8,59,121,40,184,10]],[461,[8,59,121,41,184,10]],[462,[9,59,121,42,184,10]],[463,[10,58,121,44,183,11]],[464,[10,58,120,46,183,11]],[465,[11,58,120,47,182,12]],[466,[12,57,120,49,181,13]],[467,[13,57,119,52,180,14]],[468,[13,59,119,56,176,18]],[469,[14,61,115,79]],[470,[15,68,84,1,109,3,115,79]],[471,[16,74,91,1,101,1,109,85]],[472,[17,177]],[473,[18,175]],[474,[19,174]],[475,[19,174]],[476,[20,173]],[477,[22,171]],[478,[23,169]],[479,[24,168]],[480,[26,166]],[481,[27,164]],[482,[28,163]],[483,[30,160]],[484,[31,159]],[485,[33,156]],[486,[35,154]],[487,[36,152]],[488,[39,149]],[489,[41,146]],[490,[43,143]],[491,[45,141]],[492,[47,138]],[493,[49,135]],[494,[51,132]],[495,[54,129]],[496,[57,125]],[497,[60,121]],[498,[63,117]],[499,[66,112]],[500,[69,108]],[501,[73,103]],[502,[78,96]],[503,[82,90]],[504,[86,84]],[505,[91,76]],[506,[93,1,96,69]],[507,[91,8,104,58]],[508,[89,5,95,6,110,49]],[509,[89,3,98,3,120,35]],[510,[90,10,131,14]]]},"17:1":{"w":186,"h":471,"rows":[[220,[154,6]],[221,[152,3,159,2]],[222,[152,3,160,2]],[223,[152,9]],[224,[153,3,158,2]],[225,[152,3,158,3]],[226,[150,13]],[227,[149,15]],[228,[147,18]],[229,[145,21]],[230,[144,23]],[231,[143,24]],[232,[142,26]],[233,[141,27]],[234,[141,28]],[235,[140,29]],[236,[139,30]],[237,[138,32]],[238,[137,8,146,24]],[239,[136,8,145,25]],[240,[135,8,144,26]],[241,[133,9,143,27]],[242,[132,9,142,28]],[243,[131,39]],[244,[130,9,140,30]],[245,[112,1,129,9,139,31]],[246,[112,2,128,9,138,32]],[247,[112,3,126,44]],[248,[112,5,124,46]],[249,[112,21,134,36]],[250,[112,57]],[251,[112,57]],[252,[112,17,130,39]],[253,[112,15,129,40]],[254,[112,57]],[255,[112,56]],[256,[112,56]],[257,[112,56]],[258,[112,56]],[259,[112,56]],[260,[112,55]],[261,[112,55]],[262,[112,55]],[263,[112,55]],[264,[34,8,112,54]],[265,[30,15,74,1,112,54]],[266,[29,18,74,1,112,54]],[267,[27,22,73,2,112,53]],[268,[26,25,72,3,112,53]],[269,[25,28,71,4,112,53]],[270,[24,11,36,18,69,6,112,52]],[271,[23,9,34,23,68,7,112,52]],[272,[22,9,32,43,112,52]],[273,[22,53,112,51]],[274,[21,53,112,51]],[275,[21,54,112,50]],[276,[20,55,112,50]],[277,[20,55,112,50]],[278,[19,56,112,49]],[279,[19,56,112,49]],[280,[19,56,112,48]],[281,[18,57,112,48]],[282,[18,57,112,48]],[283,[18,57,112,47]],[284,[18,57,112,47]],[285,[17,58,112,46]],[286,[17,58,112,46]],[287,[17,58,112,46]],[288,[17,58,112,46]],[289,[17,58,112,45]],[290,[17,58,112,45]],[291,[17,58,112,45]],[292,[17,58,112,44]],[293,[18,57,112,44]],[294,[18,57,112,44]],[295,[18,57,112,44]],[296,[18,57,112,43]],[297,[18,57,112,43]],[298,[18,57,112,43]],[299,[18,57,112,43]],[300,[18,57,112,43]],[301,[18,57,112,43]],[302,[18,57,112,42]],[303,[19,56,112,42]],[304,[19,56,112,42]],[305,[19,56,112,42]],[306,[19,56,112,42]],[307,[20,134]],[308,[20,134]],[309,[20,134]],[310,[21,133]],[311,[21,133]],[312,[21,134]],[313,[22,133]],[314,[22,133]],[315,[22,133]],[316,[23,132]],[317,[23,133]],[318,[23,133]],[319,[24,132]],[320,[24,132]],[321,[24,133]],[322,[25,132]],[323,[25,132]],[324,[26,132]],[325,[26,132]],[326,[26,133]],[327,[27,132]],[328,[27,132]],[329,[27,133]],[330,[27,133]],[331,[28,133]],[332,[28,134]],[333,[28,134]],[334,[28,135]],[335,[28,135]],[336,[28,136]],[337,[28,136]],[338,[28,137]],[339,[28,138]],[340,[28,138]],[341,[28,139]],[342,[28,24,60,107]],[343,[28,22,62,106]],[344,[28,20,63,106]],[345,[28,19,64,105]],[346,[27,19,65,105]],[347,[27,18,65,105]],[348,[27,17,66,105]],[349,[27,16,66,105]],[350,[26,16,66,106]],[351,[26,16,66,106]],[352,[26,15,66,107]],[353,[25,15,66,107]],[354,[25,15,66,108]],[355,[24,15,67,107]],[356,[24,14,67,107]],[357,[23,14,67,108]],[358,[23,14,67,108]],[359,[22,14,67,109]],[360,[22,13,67,109]],[361,[21,14,67,110]],[362,[21,13,67,110]],[363,[20,14,67,111]],[364,[19,14,67,111]],[365,[19,13,67,112]],[366,[18,14,67,112]],[367,[17,14,67,113]],[368,[17,13,67,113]],[369,[16,14,67,113]],[370,[15,14,67,114]],[371,[15,14,67,114]],[372,[14,14,67,115]],[373,[14,14,67,115]],[374,[13,14,67,115]],[375,[13,13,67,116]],[376,[12,14,67,116]],[377,[12,13,67,116]],[378,[11,14,67,117]],[379,[11,13,67,117]],[380,[10,13,67,117]],[381,[10,13,67,117]],[382,[9,13,67,118]],[383,[9,13,67,118]],[384,[8,13,67,118]],[385,[8,13,67,118]],[386,[7,13,67,118]],[387,[7,13,67,119]],[388,[6,13,67,119]],[389,[6,13,67,119]],[390,[5,13,67,119]],[391,[5,13,67,119]],[392,[4,14,67,119]],[393,[4,13,67,119]],[394,[4,13,67,119]],[395,[3,13,67,119]],[396,[3,13,67,119]],[397,[3,13,67,119]],[398,[2,13,67,119]],[399,[2,13,67,119]],[400,[2,12,67,119]],[401,[2,12,67,119]],[402,[1,13,67,119]],[403,[1,13,67,119]],[404,[1,12,67,119]],[405,[0,13,67,119]],[406,[0,13,67,119]],[407,[0,13,67,118]],[408,[0,12,67,118]],[409,[0,12,67,118]],[410,[0,12,67,118]],[411,[0,12,67,118]],[412,[0,12,67,117]],[413,[0,12,67,117]],[414,[0,12,67,117]],[415,[0,12,67,117]],[416,[0,12,67,116]],[417,[0,12,67,116]],[418,[0,12,67,115]],[419,[0,12,67,115]],[420,[0,12,67,115]],[421,[0,12,66,115]],[422,[0,12,66,115]],[423,[0,12,66,114]],[424,[0,12,65,115]],[425,[0,12,65,114]],[426,[0,13,64,115]],[427,[0,13,63,115]],[428,[0,13,62,115]],[429,[0,14,60,117]],[430,[0,14,58,118]],[431,[1,13,56,119]],[432,[1,14,54,121]],[433,[1,14,52,122]],[434,[2,14,49,124]],[435,[2,15,47,125]],[436,[3,15,45,126]],[437,[3,16,43,127]],[438,[4,16,40,129]],[439,[4,17,37,131]],[440,[4,19,35,132]],[441,[5,22,31,135]],[442,[5,160]],[443,[6,157]],[444,[7,155]],[445,[7,154]],[446,[8,151]],[447,[9,148]],[448,[10,146]],[449,[11,143]],[450,[12,140]],[451,[12,137]],[452,[13,134]],[453,[15,130]],[454,[16,126]],[455,[17,123]],[456,[18,120]],[457,[20,115]],[458,[21,110]],[459,[23,104]],[460,[25,99]],[461,[27,93]],[462,[29,86]],[463,[32,78]],[464,[35,71]],[465,[39,52,95,4]],[466,[44,47,95,2]],[467,[55,19,89,3,95,3]],[468,[88,4,95,4]],[469,[87,3,97,2]],[470,[88,10]]]},"18:0":{"w":201,"h":491,"rows":[[239,[183,3]],[240,[183,2,190,4]],[241,[181,2,189,7]],[242,[180,2,188,8]],[243,[179,2,187,9]],[244,[178,2,181,1,185,11]],[245,[177,2,184,12,199,1]],[246,[176,2,183,12,199,1]],[247,[174,3,182,13]],[248,[173,3,181,13,198,1]],[249,[172,3,179,15,198,1]],[250,[171,2,178,16]],[251,[170,2,177,16,197,1]],[252,[169,2,176,17,197,1]],[253,[168,2,175,17,197,1]],[254,[167,2,174,18,196,1]],[255,[165,3,172,20,196,1]],[256,[164,2,171,21]],[257,[163,2,170,21]],[258,[163,1,169,22,195,1]],[259,[161,2,168,22,195,1]],[260,[160,2,167,23,194,1]],[261,[159,2,166,24,194,1]],[262,[158,2,165,24,194,1]],[263,[157,1,164,25,193,1]],[264,[155,2,162,26,193,1]],[265,[154,2,161,27,192,2]],[266,[153,2,160,28,192,1]],[267,[152,2,159,28,191,2]],[268,[151,2,158,29,191,1]],[269,[150,1,157,29,191,1]],[270,[149,1,156,30]],[271,[148,1,154,32,190,1]],[272,[146,2,153,32,190,1]],[273,[145,2,148,1,152,33,189,1]],[274,[71,1,80,1,143,1,151,33,189,1]],[275,[70,1,77,4,140,4,150,34,188,1]],[276,[69,1,76,5,148,36,188,1]],[277,[74,7,147,36,188,1]],[278,[68,2,74,7,146,37,187,1]],[279,[68,1,73,8,133,4,143,39,187,1]],[280,[68,1,73,8,132,50,186,1]],[281,[68,1,73,8,132,50,186,1]],[282,[72,9,132,49,186,1]],[283,[68,1,73,8,132,49,185,1]],[284,[68,1,73,8,132,48,185,1]],[285,[68,1,73,8,132,48,184,1]],[286,[68,1,73,8,132,48,184,1]],[287,[68,2,73,8,132,47,184,1]],[288,[68,2,73,8,132,47,183,1]],[289,[68,2,74,7,132,47,183,1]],[290,[68,2,74,7,132,46,182,1]],[291,[69,1,74,7,132,46,182,1]],[292,[69,1,74,7,132,46,182,1]],[293,[69,1,74,7,132,45,181,1]],[294,[69,2,74,7,132,45,181,1]],[295,[69,1,74,7,132,44]],[296,[69,2,74,7,132,44,180,1]],[297,[70,1,75,6,132,44]],[298,[70,1,75,6,132,43,179,1]],[299,[70,1,75,6,132,43,179,1]],[300,[70,1,75,6,132,42,178,2]],[301,[70,1,75,6,132,42,178,1]],[302,[70,1,75,6,132,41,178,1]],[303,[71,1,76,5,130,43,177,2]],[304,[71,1,76,5,124,3,129,44,177,2]],[305,[71,1,76,5,121,51,176,2]],[306,[71,1,76,5,121,51,176,2]],[307,[71,1,76,5,121,51,176,1]],[308,[71,2,76,5,121,50,176,1]],[309,[72,1,76,5,121,50,175,1]],[310,[72,1,77,4,121,50,175,1]],[311,[72,1,77,4,121,49,174,1]],[312,[72,1,77,4,121,49,174,1]],[313,[72,1,77,4,121,48,174,1]],[314,[77,4,121,48,173,1]],[315,[73,1,77,4,121,47,173,1]],[316,[73,1,78,3,121,47,172,1]],[317,[73,1,78,3,121,47,172,1]],[318,[73,1,78,3,121,46,171,2]],[319,[73,1,78,3,121,46,171,1]],[320,[73,2,78,21,100,8,111,7,119,48,171,1]],[321,[73,2,78,21,100,8,111,7,119,47,170,2]],[322,[74,1,78,20,100,8,111,7,119,47,170,1]],[323,[74,1,79,19,100,8,111,7,119,47,170,1]],[324,[74,1,79,19,100,8,111,7,119,46,169,1]],[325,[74,1,79,19,101,7,111,7,119,46,169,1]],[326,[74,1,79,19,100,8,111,7,119,45,168,2]],[327,[74,2,79,19,101,7,111,7,119,45,168,1]],[328,[74,2,79,19,101,7,111,7,119,45,168,1]],[329,[74,2,79,19,101,7,111,7,119,44,167,2]],[330,[75,1,80,18,101,7,111,7,119,44,167,1]],[331,[75,1,80,18,101,7,111,7,119,44,167,1]],[332,[75,1,80,18,101,7,111,7,119,44,167,1]],[333,[75,1,80,18,101,7,111,7,119,44,166,2]],[334,[75,1,80,18,100,8,111,7,119,44,166,2]],[335,[74,1,80,18,101,7,111,7,119,44,166,2]],[336,[74,1,79,19,101,7,111,7,119,44,167,1]],[337,[74,1,79,19,101,7,111,7,119,44,167,1]],[338,[74,1,79,19,101,7,111,7,119,44,167,1]],[339,[73,2,78,20,101,7,111,7,119,44,167,1]],[340,[73,1,78,20,101,7,111,7,119,45,167,2]],[341,[72,2,78,20,101,7,111,7,119,45,168,1]],[342,[71,2,77,21,101,7,111,7,119,45,168,1]],[343,[71,2,77,21,101,7,111,7,119,45,169,1]],[344,[70,2,76,22,101,7,111,7,119,46,169,1]],[345,[70,1,76,22,101,7,111,7,119,46,169,1]],[346,[69,2,75,23,101,7,111,7,120,8,129,37,169,2]],[347,[69,2,75,22,102,5,112,3,116,1,132,34,170,1]],[348,[68,2,74,15,138,28,170,2]],[349,[68,1,73,16,138,29,171,1]],[350,[67,2,73,15,139,28,171,1]],[351,[67,1,72,17,139,29,171,2]],[352,[67,1,72,17,139,29,172,1]],[353,[66,1,71,18,139,29,173,1]],[354,[66,1,71,18,139,30,173,1]],[355,[65,1,70,19,139,30,173,1]],[356,[64,2,70,18,139,31,174,1]],[357,[64,1,69,19,139,31,174,1]],[358,[63,1,69,19,139,32,175,1]],[359,[63,1,68,20,139,32,175,1]],[360,[62,2,67,21,140,31,175,2]],[361,[62,1,67,21,139,33,176,1]],[362,[61,1,66,22,139,33,176,1]],[363,[60,2,66,21,139,33,177,1]],[364,[60,1,65,22,139,34,177,1]],[365,[59,2,65,22,138,35,177,1]],[366,[59,1,64,23,138,36,178,1]],[367,[58,2,64,25,138,36,178,1]],[368,[58,1,63,26,138,36,178,2]],[369,[57,1,63,27,136,39,179,1]],[370,[56,2,62,34,102,4,111,7,121,7,130,45,179,1]],[371,[56,1,62,34,100,7,110,8,119,57,180,1]],[372,[55,2,61,36,100,7,110,8,119,57,180,1]],[373,[55,1,60,37,100,8,110,8,119,57,180,2]],[374,[54,2,60,37,100,8,110,8,119,9,129,48,181,1]],[375,[54,1,59,38,100,8,110,8,119,9,129,48,181,2]],[376,[53,1,59,38,100,8,110,8,119,9,129,26,159,18,182,1]],[377,[53,1,58,39,100,7,110,8,119,9,129,24,162,16,182,1]],[378,[52,2,58,39,100,7,110,8,119,9,129,23,163,15,182,2]],[379,[52,1,57,40,100,7,110,8,119,9,129,22,164,15,183,1]],[380,[51,2,57,40,100,7,110,8,119,9,129,22,164,15,183,2]],[381,[51,1,56,41,99,8,110,8,119,9,129,22,165,14,183,2]],[382,[50,1,56,41,99,8,110,8,119,9,129,21,165,15,184,1]],[383,[50,1,55,42,99,8,110,8,119,9,129,21,165,15,184,2]],[384,[49,1,55,42,99,8,110,8,119,9,129,21,165,15,185,1]],[385,[49,1,54,43,98,9,110,8,119,9,129,21,165,16,185,1]],[386,[48,1,54,43,98,9,110,8,119,9,129,22,165,16,185,1]],[387,[47,2,53,43,98,9,110,8,119,9,129,22,164,18,186,1]],[388,[47,1,52,44,99,8,110,8,120,8,129,23,164,18]],[389,[46,2,52,43,102,4,121,4,131,2,134,19,163,19]],[390,[46,1,51,39,139,16,161,22,187,1]],[391,[45,2,51,38,139,17,160,22,188,1]],[392,[44,2,50,38,140,44,188,1]],[393,[44,1,50,38,139,44,188,1]],[394,[43,2,49,39,139,45,189,1]],[395,[43,1,49,39,140,44,189,1]],[396,[42,2,48,40,139,45,190,1]],[397,[42,1,48,40,139,46,190,1]],[398,[41,2,47,41,139,22,166,20,190,1]],[399,[41,1,47,40,139,20,169,17,191,1]],[400,[40,2,46,41,139,19,170,17,191,1]],[401,[40,1,46,41,139,18,170,17]],[402,[39,2,46,41,139,18,171,16,192,1]],[403,[38,2,44,43,139,18,171,17,192,1]],[404,[38,2,44,43,139,18,172,16,193,1]],[405,[37,2,43,45,139,18,172,16,193,1]],[406,[37,2,43,45,139,18,172,17,194,1]],[407,[36,2,42,45,140,17,172,17,194,1]],[408,[36,2,42,46,140,18,172,18,194,1]],[409,[35,2,41,47,140,18,172,18]],[410,[35,1,41,48,99,1,139,20,171,19]],[411,[35,1,40,49,99,7,124,4,130,1,139,21,171,20,195,1]],[412,[34,2,40,51,99,7,110,8,121,7,129,34,171,19,196,1]],[413,[33,2,39,56,99,7,109,7,117,1,120,8,129,35,169,22,196,1]],[414,[33,1,39,56,99,8,108,6,116,1,120,8,129,63,196,1]],[415,[32,2,38,57,98,9,108,6,115,3,119,9,129,63,197,1]],[416,[32,1,38,57,99,7,109,4,120,8,129,63,197,1]],[417,[31,2,37,55,105,1,109,1,134,59]],[418,[31,1,36,55,135,33,173,20,198,1]],[419,[30,2,36,54,136,30,175,19,198,1]],[420,[30,1,35,55,136,29,176,18,199,1]],[421,[29,1,35,55,136,28,177,17,199,1]],[422,[28,2,34,56,137,27,178,17,199,1]],[423,[28,2,34,56,136,27,178,17]],[424,[27,2,33,56,136,27,178,18,200,1]],[425,[27,1,33,56,137,26,178,18]],[426,[26,2,32,57,137,26,178,18]],[427,[26,1,32,57,137,26,178,18]],[428,[25,2,31,58,137,27,178,18]],[429,[25,2,30,59,137,27,178,18]],[430,[24,2,30,59,137,28,178,17]],[431,[24,1,29,60,137,29,178,16]],[432,[23,2,29,60,137,30,177,15]],[433,[23,1,28,61,137,32,177,12]],[434,[22,2,28,61,137,34,177,9,196,1]],[435,[22,1,27,62,137,47]],[436,[21,2,27,62,137,45]],[437,[21,1,26,63,137,41]],[438,[20,1,26,63,137,39]],[439,[20,1,25,64,137,35]],[440,[19,2,25,64,137,33]],[441,[19,1,25,64,137,30]],[442,[18,1,24,65,137,28]],[443,[18,1,23,66,136,25]],[444,[17,1,23,67,136,23]],[445,[17,1,22,69,136,19]],[446,[16,1,22,69,136,16]],[447,[15,2,21,71,120,2,135,15,161,3]],[448,[15,2,21,78,104,5,110,2,116,31,158,4]],[449,[14,2,20,123]],[450,[14,1,19,122]],[451,[13,2,19,119]],[452,[13,2,18,117]],[453,[12,2,18,113]],[454,[12,1,18,110]],[455,[11,2,18,106]],[456,[11,1,17,105]],[457,[10,2,16,102]],[458,[10,1,16,100]],[459,[9,1,15,97]],[460,[9,1,14,95]],[461,[8,2,14,91]],[462,[8,1,13,89]],[463,[7,1,13,85]],[464,[7,1,12,83]],[465,[6,2,12,79]],[466,[6,1,11,77]],[467,[5,2,11,73]],[468,[5,1,10,71]],[469,[4,2,10,66,92,2]],[470,[4,1,9,64,87,2]],[471,[3,1,9,60,84,2]],[472,[3,1,8,58,80,2]],[473,[2,1,8,53,76,3]],[474,[2,1,8,49,72,3]],[475,[1,2,8,45,69,1,71,1]],[476,[1,1,7,43,64,3]],[477,[1,1,6,39,61,3]],[478,[0,1,6,35,57,2]],[479,[0,1,5,32,53,3]],[480,[5,29,49,3]],[481,[4,25,46,1,48,1]],[482,[4,22,41,3]],[483,[5,16,39,1]],[484,[5,12,33,4]],[485,[6,7,29,4]],[486,[25,3]],[487,[21,4]],[488,[18,2]],[489,[4,2,14,2]],[490,[5,2,8,1,10,1,12,1]]]},"18:1":{"w":200,"h":473,"rows":[[217,[77,4]],[218,[77,2,80,1]],[219,[77,1,80,1]],[220,[77,1,80,1]],[221,[77,1,80,1]],[222,[77,1,80,1]],[223,[11,7,77,1,80,1]],[224,[10,3,17,4,77,1,80,1]],[225,[9,2,19,3,77,1,80,1]],[226,[8,2,21,3,77,1,80,1]],[227,[8,1,14,1,22,3,77,1,79,2]],[228,[7,1,13,4,23,3,77,1,79,2]],[229,[7,1,12,7,24,3,77,1,80,1]],[230,[7,1,11,9,26,2,77,1,80,1]],[231,[7,1,11,10,26,3,77,1,80,1]],[232,[7,1,11,11,28,2,77,1,79,2]],[233,[7,1,12,12,29,3,77,1,79,2]],[234,[7,1,12,13,31,2,77,1,79,2]],[235,[7,2,12,15,32,2,77,1,79,2]],[236,[7,2,12,16,33,3,77,1,79,2]],[237,[8,1,13,16,34,3,76,2,79,2]],[238,[8,2,13,17,35,4,76,2,79,2]],[239,[8,2,13,19,37,3,76,2,79,2]],[240,[9,1,11,1,14,19,38,3,76,2,79,2]],[241,[9,1,14,20,39,3,76,2,79,2]],[242,[9,2,14,22,41,2,76,2,79,2]],[243,[9,2,15,22,42,2,76,2,79,2]],[244,[10,1,15,23,44,1,76,2,79,2]],[245,[10,2,16,23,45,2,76,2,79,2]],[246,[10,2,16,24,46,2,76,2,79,2]],[247,[11,2,16,26,48,1,76,5]],[248,[11,2,17,26,49,2,76,5]],[249,[11,2,17,28,50,2,76,5]],[250,[12,1,17,29,51,2,76,5]],[251,[12,2,18,29,53,2,76,5]],[252,[13,1,18,30,54,2,75,6]],[253,[13,2,19,31,55,2,75,6]],[254,[13,2,19,32,56,2,75,6]],[255,[14,1,19,33,57,2,75,6,120,1]],[256,[14,1,20,33,58,3,74,6,120,1]],[257,[15,1,20,34,59,3,73,6]],[258,[15,1,20,35,61,3,72,5]],[259,[15,2,21,36,62,4,70,6,80,1,129,1]],[260,[16,1,21,37,64,9,80,1,120,1,129,3]],[261,[16,1,21,39,67,4,79,2,120,3,131,2]],[262,[16,2,22,39,77,4,120,5,133,2]],[263,[17,1,22,40,76,5,120,7,134,2]],[264,[17,2,22,42,73,8,120,9,136,1]],[265,[17,2,23,58,120,11,136,2]],[266,[18,1,23,58,120,12,137,1]],[267,[18,1,24,57,120,13,137,2]],[268,[18,2,24,57,120,14,138,1]],[269,[19,1,24,57,120,14,138,1]],[270,[19,2,24,57,120,15,138,1]],[271,[20,1,25,56,120,15,138,1]],[272,[20,1,25,56,120,15]],[273,[26,55,120,15]],[274,[21,1,26,55,120,15,138,1]],[275,[21,1,26,55,120,15,138,1]],[276,[26,55,120,14,136,1,138,1]],[277,[22,1,27,54,120,14,138,1]],[278,[22,1,27,54,120,14,138,1]],[279,[23,1,28,53,120,14,138,1]],[280,[23,1,28,53,120,14,137,2]],[281,[23,2,28,53,120,13,137,1]],[282,[24,1,29,52,120,13,137,1]],[283,[24,1,29,52,120,13,137,1]],[284,[24,2,29,52,120,13,137,1]],[285,[25,1,30,51,120,12,137,1]],[286,[25,1,30,51,120,12,136,2]],[287,[25,2,30,51,120,12,136,1]],[288,[26,1,31,50,120,12,136,1]],[289,[26,2,31,50,120,12,136,1]],[290,[26,2,32,49,120,11,136,1]],[291,[27,1,32,49,120,11,135,1]],[292,[27,2,32,49,120,11,135,1]],[293,[28,1,33,48,120,11,134,2]],[294,[28,1,33,48,120,10,134,2]],[295,[28,1,33,48,120,10,134,2]],[296,[28,2,34,47,120,10,134,1]],[297,[29,1,34,47,120,10,134,1]],[298,[29,2,35,46,120,10,133,2]],[299,[30,1,35,46,120,9,133,2]],[300,[30,1,35,46,120,9,133,1]],[301,[30,2,36,45,120,9,133,1]],[302,[31,1,36,45,120,9,133,1]],[303,[31,1,36,45,120,8,133,1]],[304,[32,1,37,44,120,8,132,1]],[305,[32,1,37,44,120,8,132,1]],[306,[32,2,37,44,120,8,132,1]],[307,[33,1,38,43,120,8,132,1]],[308,[33,1,38,89,131,1]],[309,[33,2,38,89,131,1]],[310,[34,1,39,88,131,1]],[311,[34,1,39,88,131,1]],[312,[34,2,40,87,130,2]],[313,[35,1,40,86,130,2]],[314,[35,1,40,86,130,1]],[315,[36,1,41,85,130,1]],[316,[36,1,41,85,130,1]],[317,[36,2,41,85,130,1]],[318,[37,1,42,84,130,1]],[319,[37,1,42,84,130,1]],[320,[37,2,42,84,130,1]],[321,[38,1,43,83,130,1]],[322,[38,1,43,83,130,2]],[323,[38,1,43,84,131,1]],[324,[38,2,43,84,131,1]],[325,[38,2,43,84,131,2]],[326,[38,2,44,84,131,2]],[327,[38,2,44,84,131,3]],[328,[38,1,43,85,132,2]],[329,[38,1,43,86,133,2]],[330,[38,1,43,86,133,2]],[331,[37,2,43,87,134,2]],[332,[37,1,42,88,134,2]],[333,[36,2,42,89,135,2]],[334,[36,2,42,89,135,2]],[335,[35,2,41,91,135,3]],[336,[35,2,41,91,136,2]],[337,[34,2,40,93,137,1]],[338,[34,2,40,93,138,1]],[339,[33,3,39,95,138,1]],[340,[33,2,39,95,139,1]],[341,[32,2,38,97,139,1]],[342,[32,2,38,97,140,1]],[343,[32,1,37,99,140,1]],[344,[31,2,37,99,141,1]],[345,[31,1,36,101,141,1]],[346,[30,2,36,101,141,2]],[347,[30,1,35,103]],[348,[29,2,35,103,143,1]],[349,[29,1,34,105,143,1]],[350,[28,2,34,105,143,2]],[351,[28,1,33,107,142,1,144,2]],[352,[27,2,33,107,145,1]],[353,[27,2,32,14,60,81,145,2]],[354,[26,2,32,12,61,80,146,1]],[355,[26,2,31,10,62,80,146,2]],[356,[25,2,31,10,62,80,147,1]],[357,[25,2,30,10,63,80,148,1]],[358,[24,2,30,10,63,81,148,1]],[359,[24,2,29,10,64,80,146,1,148,2]],[360,[23,2,29,9,64,81,149,1]],[361,[23,2,28,10,64,81,149,2]],[362,[22,2,28,10,64,82,149,2]],[363,[22,2,28,8,65,81,150,2]],[364,[21,2,27,10,65,81,150,2]],[365,[21,2,26,9,65,82,151,2]],[366,[20,2,26,10,64,83,151,2]],[367,[20,2,25,9,64,84,152,2]],[368,[19,2,25,10,64,84,153,1]],[369,[19,2,24,10,64,85,153,2]],[370,[18,2,24,9,64,85,153,2]],[371,[18,2,23,9,64,86,154,2]],[372,[17,2,23,10,65,85,155,1]],[373,[17,2,22,9,65,86,155,1]],[374,[16,2,22,10,65,86,156,1]],[375,[16,2,21,10,65,87,156,2]],[376,[15,2,21,10,65,87,156,2]],[377,[15,1,20,11,65,88,157,2]],[378,[14,2,20,10,65,89,158,1]],[379,[14,2,19,11,65,89,158,2]],[380,[13,2,19,9,65,89,159,1]],[381,[13,1,18,10,65,90,159,2]],[382,[12,2,18,10,65,91,159,2]],[383,[12,1,18,8,65,91,160,2]],[384,[11,2,17,10,65,92,160,3]],[385,[11,2,17,9,65,92,161,2]],[386,[10,2,16,10,65,93,162,2]],[387,[10,2,16,9,65,93,163,1]],[388,[10,1,15,10,65,94,163,2]],[389,[9,2,15,10,65,94,163,2]],[390,[9,1,14,10,65,95,165,1]],[391,[8,2,14,10,65,95,165,1]],[392,[8,1,13,10,65,96,166,1]],[393,[7,2,13,10,65,96,165,2]],[394,[7,1,12,10,65,97,166,2]],[395,[6,2,12,10,65,97,167,1]],[396,[6,1,11,10,65,98,167,2]],[397,[5,2,11,10,65,98,168,1]],[398,[5,1,10,9,65,99,168,2]],[399,[4,2,10,10,65,99,169,1]],[400,[4,2,9,9,65,100,169,2]],[401,[3,2,9,10,65,100,170,1]],[402,[3,1,8,10,65,101,170,1]],[403,[2,2,8,10,65,101,170,2]],[404,[2,2,7,11,65,102,171,1]],[405,[1,2,7,11,65,102,172,1]],[406,[1,1,6,12,65,103,172,1]],[407,[1,1,6,11,65,103,173,1]],[408,[0,2,6,11,65,104,173,1]],[409,[0,1,5,13,65,104,173,2]],[410,[0,1,5,13,65,105,174,1]],[411,[0,1,5,14,65,105,175,1]],[412,[0,1,4,16,65,106,175,1]],[413,[4,18,65,106,176,1]],[414,[5,17,24,1,65,107,176,1]],[415,[0,1,5,19,27,1,65,107,177,1]],[416,[0,1,6,21,29,2,65,108,177,2]],[417,[1,1,7,24,32,2,63,1,65,108,178,1]],[418,[1,2,9,25,35,2,63,111,178,2]],[419,[2,1,12,25,39,1,63,111,179,1]],[420,[3,2,14,27,42,1,62,113,179,2]],[421,[5,2,17,26,45,1,61,1,64,111,180,1]],[422,[7,2,19,28,48,1,61,1,64,112]],[423,[9,3,22,27,52,4,59,2,63,113,181,1]],[424,[12,3,25,28,56,2,61,116,181,2]],[425,[14,3,28,29,58,119,182,1]],[426,[17,3,30,148,180,1,182,2]],[427,[19,4,33,145,183,1]],[428,[22,3,35,144,183,2]],[429,[24,4,38,141,184,1]],[430,[27,4,41,139,184,2]],[431,[30,2,44,136,185,1]],[432,[33,3,46,135,185,2]],[433,[36,2,50,131,186,1]],[434,[39,2,52,130,184,1,186,2]],[435,[41,2,55,127,187,1]],[436,[43,3,58,125]],[437,[46,3,54,1,61,122,188,1]],[438,[48,4,64,120]],[439,[51,4,67,117,189,1]],[440,[54,3,70,115,189,2]],[441,[57,2,73,112,190,1]],[442,[60,4,76,110,188,1,190,2]],[443,[63,3,80,106,190,2]],[444,[66,4,83,104,191,2]],[445,[70,2,87,100,192,1]],[446,[73,4,90,98,191,2]],[447,[76,4,94,94,192,2]],[448,[80,3,89,1,97,92,193,1]],[449,[83,5,101,88,194,1]],[450,[87,3,106,84,195,1]],[451,[91,2,102,1,111,79,195,1]],[452,[115,76,195,1]],[453,[101,1,119,72,196,1]],[454,[102,6,124,68,196,2]],[455,[106,6,118,1,129,63,197,1]],[456,[111,5,132,61,197,2]],[457,[116,5,137,56,198,1]],[458,[120,5,132,1,140,54]],[459,[124,5,146,48]],[460,[129,5,150,45]],[461,[133,5,155,40,199,1]],[462,[137,7,159,36]],[463,[142,7,154,2,164,31,199,1]],[464,[147,6,168,27,199,1]],[465,[153,3,173,21,199,1]],[466,[157,3,178,15]],[467,[161,3,185,7,195,1,198,1]],[468,[166,4,198,1]],[469,[170,4,197,1]],[470,[175,1,178,2,196,1]],[471,[180,3,184,1,194,1]],[472,[186,8]]]}};const customCoverageCache=new Map();
function makeCustomMask(W,H,rear,bass,base){const key=base+':'+Number(rear);if(customCoverageCache.has(key))return customCoverageCache.get(key);const path=new Path2D(),data=CustomCoverage[key];if(data)for(const [y,runs]of data.rows)for(let i=0;i<runs.length;i+=2)path.rect(runs[i]/W,y/H,runs[i+1]/W,1/H);customCoverageCache.set(key,path);return path;}
function paintCustomMetal(c,W,H,rear,bass,hardware){if(hardware==='chrome')return;const path=new Path2D();if(!rear){path.rect((bass?.34:.38)*W,(bass?.902:.82)*H,(bass?.31:.27)*W,(bass?.051:.05)*H);for(const [x,y]of(bass?[[.77,.81],[.82,.842],[.86,.87]]:[[.77,.78],[.83,.817],[.88,.852]])){path.moveTo((x+.027)*W,y*H);path.ellipse(x*W,y*H,.027*W,.011*H,0,0,Math.PI*2);}}for(let n=0;n<(bass?4:6);n++){const x=rear?.60+n*.022:(bass?.285:.47)-n*.026,y=.018+n*(bass?.035:.025);path.moveTo((x+.028)*W,y*H);path.ellipse(x*W,y*H,.028*W,.010*H,0,0,Math.PI*2);}c.save();c.clip(path);c.globalCompositeOperation=hardware==='black'?'multiply':'color';c.fillStyle=hardware==='black'?'#414c4b':'#c6a149';c.fillRect(0,0,W,H);c.globalCompositeOperation='soft-light';c.globalAlpha=.25;c.fillStyle=hardware==='black'?'#37403e':'#ebcd78';c.fillRect(0,0,W,H);c.restore();}
function paintCustomPickups(c,W,H,bass,kind,source){if(kind==='standard')return;const ys=bass?[.754,.845]:[.661,.723,.785],x=bass?.33:.34,w=bass?.28:.30;for(let idx=0;idx<ys.length;idx++){const y=ys[idx],x0=!bass&&idx===0?.39:x,w0=!bass&&idx===0?.24:w;const sy=bass?(idx===0?y+.04:y-.03):(idx===2?y-.025:y+.032);c.drawImage(source,(x0-.008)*W,sy*H,(w0+.016)*W,.015*H,(x0-.008)*W,(y-.005)*H,(w0+.016)*W,.031*H);}const positions=kind==='active'?[bass?.752:.675,bass?.839:.77]:ys;for(let idx=0;idx<positions.length;idx++){const y=positions[idx],x0=!bass&&idx===0&&kind!=='active'?.39:x,w0=!bass&&idx===0&&kind!=='active'?.24:w;const active=kind==='active',h=(active?.029:.017)*H,g=c.createLinearGradient(0,(y-.005)*H,0,y*H+h);g.addColorStop(0,kind==='vintage'?'#f2ddaa':kind==='standard'&&!bass?'#f4efdc':'#687173');g.addColorStop(1,kind==='vintage'?'#b79a62':kind==='standard'&&!bass?'#bcb59d':'#1e2829');c.fillStyle=g;c.strokeStyle='#4b4d42';c.lineWidth=.8;c.beginPath();c.roundRect(x0*W,y*H,w0*W,h,2.5);c.fill();c.stroke();if(kind==='standard'||kind==='vintage'){for(let n=0;n<(bass?4:6);n++){c.fillStyle=kind==='vintage'?'#a68442':'#5a625e';c.beginPath();c.arc((x0+.035+n*(w0-.07)/(bass?3:5))*W,(y+.008)*H,.007*W,0,Math.PI*2);c.fill();}}if(kind==='noiseless'){c.strokeStyle='#b4beb7';c.beginPath();c.moveTo((x0+.04)*W,(y+.008)*H);c.lineTo((x0+w0-.04)*W,(y+.008)*H);c.stroke();}}}
function customTexture(item,rear=false){const key=JSON.stringify([item.base,item.options,rear]);if(customTextureCache.has(key))return customTextureCache.get(key);const art=InstrumentArtV340[item.base],clip=art?.clips[rear?1:0],im=art?instrumentAtlases[art.atlas]:null;if(!clip||!im?.complete||!im.naturalWidth)return null;const out=document.createElement('canvas');out.width=clip[2];out.height=clip[3];const W=out.width,H=out.height,c=out.getContext('2d'),source=document.createElement('canvas');source.width=W;source.height=H;source.getContext('2d').drawImage(im,...clip,0,0,W,H);c.drawImage(source,0,0);const o=item.options,bass=products[item.base].family==='bass',mask=makeCustomMask(W,H,rear,bass,item.base),pigment=Atelier.options.color.find(v=>v[0]===o.color)[4],wood={alder:{light:'#c59b67',dark:'#795439',step:.063,wave:4},ash:{light:'#e0c793',dark:'#805f41',step:.037,wave:7},walnut:{light:'#96724c',dark:'#382c22',step:.028,wave:3},mahogany:{light:'#bd7d58',dark:'#653b2d',step:.048,wave:9}}[o.wood];
 c.save();c.scale(W,H);c.clip(mask,'evenodd');c.globalCompositeOperation='color';c.fillStyle=pigment;c.fillRect(0,.49,1,.51);c.globalCompositeOperation='soft-light';c.globalAlpha=.55;c.fillStyle=wood.light;c.fillRect(0,.49,1,.51);c.globalCompositeOperation='multiply';c.globalAlpha=o.wood==='walnut'?.5:o.wood==='ash'?.4:.3;c.strokeStyle=wood.dark;c.lineWidth=o.wood==='ash'?.010:.005;for(let x=-.1;x<1.1;x+=wood.step){c.beginPath();for(let n=0;n<=30;n++){const y=.49+n*.017,xx=x+Math.sin(y*wood.wave*6+x*8)*.014; n?c.lineTo(xx,y):c.moveTo(xx,y);}c.stroke();}c.globalAlpha=1;c.globalCompositeOperation='source-over';if(o.finish==='satin'){c.fillStyle='#ece8d315';c.fillRect(0,.49,1,.51);}if(o.finish==='gloss'){const g=c.createLinearGradient(0,.5,.8,1);g.addColorStop(0,'#ffffff00');g.addColorStop(.35,'#ffffff08');g.addColorStop(.43,'#ffffff65');g.addColorStop(.51,'#ffffff00');g.addColorStop(1,'#ffffff00');c.fillStyle=g;c.fillRect(0,.49,1,.51);}if(o.finish==='relic'){c.fillStyle=wood.light;c.strokeStyle=wood.dark;c.lineWidth=.003;for(const [x,y,r]of[[.11,.88,.038],[.16,.64,.023],[.82,.94,.028],[.09,.84,.02],[.88,.62,.018]]){c.beginPath();c.ellipse(x,y,r,r*.35,-.5,0,Math.PI*2);c.fill();c.stroke();}c.strokeStyle='#f0d6a6';c.lineWidth=.003;for(let n=0;n<12;n++){const x=.07+n*.008,y=.85+Math.sin(n)*.045;c.beginPath();c.moveTo(x,y);c.lineTo(x+.025,y-.018);c.stroke();}}c.restore();
 c.save();c.scale(W,H);c.beginPath();c.rect(rear?.43:.41,.20,.18,.38);c.clip();c.globalCompositeOperation='color';c.globalAlpha=.75;c.fillStyle=wood.dark;c.fillRect(0,0,1,1);c.restore();
 if(!rear)paintCustomPickups(c,W,H,bass,o.pickup,out);paintCustomMetal(c,W,H,rear,bass,o.hardware);c.globalCompositeOperation='destination-in';c.drawImage(source,0,0);c.globalCompositeOperation='source-over';
 if(customTextureCache.size>=72)customTextureCache.delete(customTextureCache.keys().next().value);customTextureCache.set(key,out);return out;}

function miniCustom(c,item,height=50,rear=false){const im=customTexture(item,rear);if(!im)return;const w=height*im.width/im.height;c.drawImage(im,-w/2,-height,w,height);}
function drawCustomModel(){const el=$('customModel');if(!el||!workshopDraft)return;const c=el.getContext('2d'),W=el.width,H=el.height,angle=workshopAngle*Math.PI/180,rear=Math.cos(angle)<0,im=customTexture(workshopDraft,rear);c.clearRect(0,0,W,H);const bg=c.createRadialGradient(W*.5,H*.45,20,W*.5,H*.45,H*.7);bg.addColorStop(0,'#fff8e5');bg.addColorStop(1,'#e9dabc');c.fillStyle=bg;c.fillRect(0,0,W,H);if(!im)return;const h=H*.78,w=h*im.width/im.height,squeeze=Math.max(.035,Math.abs(Math.cos(angle))),thickness=Math.sin(angle)*8;c.fillStyle='#5d4b2e15';c.beginPath();c.ellipse(W/2,H*.9,w*.6,14,0,0,Math.PI*2);c.fill();c.save();c.translate(W/2,H*.89);c.transform(squeeze,Math.sin(angle)*.025,0,1,0,0);
 // A shallow, source-image turntable. Front/rear use the shipped source views, never a substitute model.
 if(Math.abs(thickness)>1){c.save();c.globalAlpha=.8;for(let n=0;n<4;n++)c.drawImage(im,-w/2+thickness*n/(4*squeeze),-h,w,h);c.restore();}c.drawImage(im,-w/2,-h,w,h);c.restore();c.fillStyle='#77674c';c.textAlign='center';c.font='20px sans-serif';c.fillText(products[workshopDraft.base].name,W/2,H-32);drawCustomInventory();}

let interiorArtAtlas=null;const InteriorArtClips=[[127,19,312,432],[597,54,341,365],[1152,19,206,432],[64,627,437,207],[651,484,234,514],[1136,485,235,513]];
function paintWallDecor(){for(const i of S.design.wallItems){wallClockTransform(i,()=>{if(i.type==='clock'||i.type==='lamp'){if(!wallDetailAtlas?.complete||!wallDetailAtlas.naturalWidth)return;const clock=i.type==='clock',clip=WallDetailClips[clock?0:1],h=clock?34:39,w=h*clip[2]/clip[3];ctx.drawImage(wallDetailAtlas,...clip,-w/2,-80,w,h);return;}if(!interiorArtAtlas?.complete||!interiorArtAtlas.naturalWidth)return;const d={poster:{clip:0,w:30,h:42},record:{clip:1,w:34,h:36},guitar:{clip:2,w:21,h:43},logo:{clip:3,w:43,h:21}}[i.type];ctx.drawImage(interiorArtAtlas,...InteriorArtClips[d.clip],-d.w/2,-80,d.w,d.h);if(i.type==='logo'){ctx.fillStyle='#35594b';ctx.fillRect(-18,-65,36,5);ctx.fillStyle='#f5dfaa';ctx.textAlign='center';ctx.font='3.5px "Noto Sans KR"';ctx.fillText(S.shopName,0,-61,34);}});}}
function paintPartition(a,b,door){const p=P(a.x,a.y),q=P(b.x,b.y),colors=Atelier.walls[S.design.vipWall].colors;
 if(door){paintVIPDoor(p,q);return;}const h=28;poly([p,q,{x:q.x,y:q.y-h},{x:p.x,y:p.y-h}],colors[0],'#526b5b');poly([{x:p.x,y:p.y-h},{x:q.x,y:q.y-h},{x:q.x,y:q.y-h-3},{x:p.x,y:p.y-h-3}],'#a48a5c','#75603d');for(const v of[p,q]){ctx.fillStyle='#8b7048';ctx.fillRect(v.x-1.5,v.y-h,3,h);}}
function paintVIPDoor(p,q){const im=interiorArtAtlas;if(!im?.complete||!im.naturalWidth)return;const start=p.x<q.x?p:q,end=p.x<q.x?q:p,w=end.x-start.x,h=76,clip=InteriorArtClips[S.vip.zone&&['top','right'].includes(S.vip.zone.doorSide)?5:4],g=S.vip.guest,center={x:(p.x+q.x)/2,y:(p.y+q.y)/2},near=g?Math.hypot(P(g.x,g.y).x-center.x,P(g.x,g.y).y-center.y):Infinity,open=Math.max(0,Math.min(1,(60-near)/35));ctx.save();ctx.translate(start.x,start.y);ctx.transform(1,(end.y-start.y)/w,0,1,0,0);const [sx,sy,sw,sh]=clip;
 // Keep the wooden frame fixed and swing the glass leaf inside it.
 const left=.15,right=.87,top=.08,bottom=.98;function part(x,y,ww,hh){ctx.drawImage(im,sx+x*sw,sy+y*sh,ww*sw,hh*sh,x*w,-h+y*h,ww*w,hh*h);}part(0,0,left,1);part(right,0,1-right,1);part(left,0,right-left,top);part(left,bottom,right-left,1-bottom);
 ctx.save();ctx.translate(left*w,-h+top*h);ctx.transform(Math.cos(open*1.05),Math.sin(open*1.05)*.35,0,1,0,0);ctx.drawImage(im,sx+left*sw,sy+top*sh,(right-left)*sw,(bottom-top)*sh,0,0,(right-left)*w,(bottom-top)*h);ctx.restore();ctx.restore();}

// v3.19 compact navigation and live workshop previews.
const MenuSections={shop:[['영업','business'],['직원','employees'],['미션','missions'],['기록','records']],stock:[['악기','instruments'],['이펙터','effects'],['소모품','supplies']],furniture:[['꾸미기','decor'],['제작','craft']],guests:[['손님','visitors'],['단골','relationships'],['이야기','stories'],['VIP','vips']]};
let navExpanded=null,readyGoalKey=null;
function normalizeMenuTab(t){return t==='craft'?'furniture':t;}
function syncMenuLabels(){for(const b of document.querySelectorAll('.tabs [data-tab],.sheet-nav [data-panel-tab]')){const key=b.dataset.tab??b.dataset.panelTab,label=b.querySelector('b');if(label)label.textContent={shop:'운영',stock:'악기',furniture:'상점',guests:'손님'}[key];const active=key===normalizeMenuTab(tab);b.classList.toggle('active',active);b.setAttribute('aria-current',active?'page':'false');}}
function closeMenu(){navExpanded=null;const el=$('menuPopover');if(!el)return;if(el.matches(':popover-open'))el.hidePopover();el.hidden=true;document.querySelectorAll('[data-tab],[data-panel-tab]').forEach(b=>b.setAttribute('aria-expanded','false'));}
function toggleMenu(key,anchor){if(!MenuSections[key])return false;if(navExpanded===key){closeMenu();return false;}closeMenu();const el=$('menuPopover');const dialog=anchor.closest('dialog[open]');(dialog??document.body).append(el);el.innerHTML=MenuSections[key].map(([name,action])=>`<button data-menu-section="${action}">${name}</button>`).join('');el.hidden=false;navExpanded=key;el.style.width='max-content';el.style.maxWidth=(innerWidth-24)+'px';el.style.left='12px';el.style.bottom='12px';el.showPopover();const r=anchor.getBoundingClientRect(),w=el.getBoundingClientRect().width;el.style.left=Math.max(12,Math.min(innerWidth-w-12,r.x+r.width/2-w/2))+'px';el.style.bottom=Math.max(12,innerHeight-r.top+8)+'px';anchor.setAttribute('aria-expanded','true');return true;}
function openMenuSection(section){closeMenu();for(const d of document.querySelectorAll('dialog[open]'))if(d.id!=='management'&&!['settlement','endingModal'].includes(d.id))d.close();if(section==='employees'){setTab('shop');openStaffManagement();return true;}if(section==='missions'){openMissions();return true;}if(section==='business'){setTab('shop');return true;}if(section==='records'){setTab('report');return true;}if(['instruments','effects','supplies'].includes(section)){stockFilter={instruments:'instrument',effects:'effect',supplies:'strings'}[section];instrumentFilter='all';setTab('stock');return true;}if(section==='decor'){setTab('furniture');return true;}if(section==='craft'){setTab('craft');return true;}if(['visitors','relationships','stories','vips'].includes(section)){guestView={visitors:'visiting',relationships:'regulars',stories:'story',vips:'vip'}[section];setTab('guests');return true;}return false;}
function craftHome(){if(S.stage<6)return '<h2>커스텀 공방</h2><div class="note">7단계에서 나만의 기타와 베이스를 만들 수 있어요.</div>';const bench=S.furniture.find(f=>f.t===11),l=S.custom.benchLevel,stored=S.custom.items.filter(i=>i.displayId===null).length;return `<h2>커스텀 제작</h2><section class="craft-home-hero"><canvas id="craftHero" width="150" height="240"></canvas><div><h3>나만의 한 대를 만들어요</h3><p>기타 · 베이스<br>색상·목재·부품을 내 취향대로</p>${bench?'<button class="primary" data-atelier="workshop">새 악기 제작 ＋</button>':`<button class="primary" data-build="11" ${!canBuyFurniture(11)||S.phase!=='prepare'?'disabled':''}>제작대 설치 · ${compactMoney(types[11].cost)}</button>`}</div></section><div class="craft-home-counts"><button data-atelier="displays">보관 중 <b>${stored}개</b></button><button data-atelier="displays">진열 중 <b>${S.custom.items.length-stored}개</b></button></div><section class="operation-card"><div class="operation-title"><b>제작대 ${l}등급</b><small>${['입문용','중급형까지','모든 등급'][l-1]}</small></div>${l<3?`<p>${l===1?'중급 악기·목재·픽업 옵션 추가':'모든 등급·고급 재료와 부품 추가'}</p><button data-atelier="bench-upgrade" ${!bench||S.phase!=='prepare'||S.money<Atelier.upgrades[l]?'disabled':''}>${l+1}등급 업그레이드 · ${compactMoney(Atelier.upgrades[l])}</button>`:'<p>모든 제작 옵션을 사용할 수 있어요.</p>'}</section><h3>완성 악기 ${S.custom.items.length}/12</h3>${customInventoryHTML()}`;}
function drawCraftHome(){const el=$('craftHero');if(el){const c=el.getContext('2d');c.clearRect(0,0,150,240);c.save();c.translate(75,225);miniCustom(c,{base:0,options:customDefaults()},210);c.restore();}drawCustomInventory();}
function syncMissionToast(){const completed=['growth','challenge'].map(l=>activeMission(l)).filter(m=>m&&missionStatus(m).ready).map(m=>m.id).join('|');if(readyGoalKey===null){readyGoalKey=completed;return;}if(completed&&completed!==readyGoalKey)toast('미션 목표 달성 · 운영 → 미션에서 보상을 받으세요');readyGoalKey=completed;}
function refreshCustomPreview(){if(!workshopDraft||!$('customModel'))return;drawCustomModel();const q=customQuote(workshopDraft),el=$('workshopBody').querySelector('.custom-price');if(el)el.innerHTML=`<span>완료 시 제작비 <b>${q?money(q.craftCost):'옵션 확인'}</b></span><span>사용할 재고 <b>기본 악기 1개</b></span><span>전시 판매가 <b>${q?money(q.price):'-'}</b></span><small>기본 악기 원가 포함 · 완료할 때 제작비만 차감</small>`;const b=$('workshopBody').querySelector('[data-atelier="craft-finish"]');if(b)b.disabled=S.phase!=='prepare'||editing!==null||!q||S.stock[workshopDraft.base]<1||S.money<(q?.craftCost??Infinity)||S.custom.items.length>=12;}
function setCustomDraftOption(key,value){if(!workshopDraft)return false;if(key==='base'){const n=Number(value);if(!customBases().includes(n))return false;workshopDraft.base=n;}else{if(!Atelier.options[key]?.some(o=>o[0]===value&&customOptionAvailable(o)))return false;workshopDraft.options[key]=value;}refreshCustomPreview();return true;}

let wallDetailAtlas=null;const WallDetailClips=[[138,82,690,713],[1103,108,449,632]];
function wallClockTransform(i,paint){const q=i.wall==='x'?P(i.slot*2+1,-.5):P(-.5,i.slot*2+1);ctx.save();ctx.translate(q.x,q.y);ctx.transform(1,i.wall==='x'?.5:-.5,0,1,0,0);paint();ctx.restore();}
function paintWallClockHands(){for(const i of S.design.wallItems.filter(i=>i.type==='clock'))wallClockTransform(i,()=>{const minute=Math.floor(S.time/Config.daySeconds*600)+600,hour=minute/60;ctx.save();ctx.translate(0,-63);ctx.strokeStyle='#574432';ctx.lineCap='round';function hand(angle,length,width){ctx.save();ctx.rotate(angle);ctx.lineWidth=width;ctx.beginPath();ctx.moveTo(0,1);ctx.lineTo(0,-length);ctx.stroke();ctx.restore();}hand((hour%12)/12*Math.PI*2,7,1.1);hand((minute%60)/60*Math.PI*2,10,.8);ctx.fillStyle='#ae8b46';ctx.beginPath();ctx.arc(0,0,1.3,0,Math.PI*2);ctx.fill();ctx.restore();});}

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
 closeMenu();readyGoalKey=null;
 vipEditor=false;vipZoneDraft=null;vipAnchor=null;workshopDraft=null;if($('vipEditBar'))$('vipEditBar').hidden=true;for(const id of ['interiorDialog','workshopDialog','customDisplayDialog'])$(id)?.close();
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
const peopleAtlases = PeopleAtlasKeys.map(runtimeImage);
const naturalWalkAtlases = NaturalWalkAtlasKeys.map(runtimeImage);
const instrumentAtlases = [0,1,2].map(n=>runtimeImage('assets/instruments-'+n+'-v340.webp'));
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
  return [art?'assets/instruments-'+art.atlas+'-v340.webp':AccessoryClips[i]?'assets/accessories-v370.webp':'assets/goods-v3.webp'];
}
function actorAssetKeys(actor){if([16,19,20].includes(actor))return [CheckoutAtlasKey];return [PeopleAtlasKeys[PeopleFrames[actor]?.atlas??0],...(NaturalWalkFrames[actor]?[NaturalWalkAtlasKeys[NaturalWalkFrames[actor].atlas]]:[])];}
function furnitureAssetKeys(f){
  if(f.t>=11)return ['assets/vip-v3180.webp','assets/atelier-v3180.webp',...productAssetKeys(0)];
  if(f.t===4)return ['assets/audition-v3130.webp'];
  if(f.t>=8)return ['assets/decor-v3130.webp'];
  if(f.t===FurnitureId.DRUM_DISPLAY||f.t===FurnitureId.DRUM_DEMO)return ['assets/drum-fixtures-v350.webp',...(f.t===FurnitureId.DRUM_DISPLAY?productAssetKeys(26):[])];
  if(f.t===FurnitureId.GUITAR_RACK)return ['assets/empty-rack-v7.webp',...[f.p,f.p2].filter(Number.isInteger).flatMap(productAssetKeys)];
  if(f.t===FurnitureId.ACCESSORY_CABINET)return ['assets/empty-cabinet-v3.webp',...(f.items??LegacyShelfItems).flatMap(productAssetKeys)];
  return ['assets/furniture.webp','assets/furniture-back.webp'];
}
function criticalAssetKeys(state=S){
  const claimed=state.claimedMissions??[],features=new Set(MissionDefinitions.filter(m=>claimed.includes(m.id)).map(m=>m.reward.feature));
  const actors=[0,1,2,3,16,...Object.values(SpecialPeopleActors),
    ...CustomerProfiles.filter(p=>(p.unlockStage??p.tier)<=state.stage&&(!p.mission||claimed.includes(p.mission))&&(!p.feature||features.has(p.feature))).map(p=>p.actor===12?21:p.actor),
    ...(state.staffHired?[17,18]:[]),...(state.cashierHired?[19]:[]),...(state.cashierHired>1?[20]:[]),
    ...(state.guests??[]).map(visualActor)];
  const keys=['assets/wall-details-v3190.webp','assets/interior-v3180.webp','assets/furniture.webp','assets/furniture-back.webp','assets/empty-rack-v7.webp','assets/empty-cabinet-v3.webp',...actors.flatMap(actorAssetKeys)];
  for(const i of [0,1,2])keys.push(...productAssetKeys(i));
  for(const f of state.furniture)keys.push(...furnitureAssetKeys(f));
  for(const p of state.guests??[]){if(Number.isInteger(p.product))keys.push(...productAssetKeys(p.product));for(const i of p.basket??[])keys.push(...productAssetKeys(i));}
  if(state.stage>=6)keys.push('assets/vip-v3180.webp','assets/atelier-v3180.webp',...products.map((p,i)=>i).filter(i=>isInstrument(i)).flatMap(productAssetKeys));
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
  if(!titleActive){drawProductIcons();drawIcons();drawCustomerIcons();}
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
 return !!f&&S.phase==='prepare'&&editing===null&&
  (f.t!==FurnitureId.CHECKOUT||checkoutActor(f)===null)&&
  (![FurnitureId.GUITAR_RACK,FurnitureId.DRUM_DISPLAY].includes(f.t)||S.furniture.some(q=>q.id!==f.id&&[FurnitureId.GUITAR_RACK,FurnitureId.DRUM_DISPLAY].includes(q.t)));
}
function sellFurniture(id){
 const f=S.furniture.find(q=>q.id===id);
 if(!canSellFurniture(f)){if(f&&[0,6].includes(f.t))toast('영업에 필요한 마지막 악기 진열대는 유지해주세요.');return false;}
 const value=Math.floor(types[f.t].cost*.5);S.money+=value;S.furnitureRevenue+=value;
 S.furniture=S.furniture.filter(q=>q!==f);for(const i of S.custom.items)if(i.displayId===id)i.displayId=null;atelierSprites.clear();people=[];selected=null;sceneCacheKey='';hideFurnitureQuick();
 save();renderPanel();ui();toast('가구를 판매했어요');return true;
}
function canBuyFurniture(t) {
  if(t===11&&S.furniture.some(f=>f.t===11))return false;
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
function exitPoint() {
  return { x: ENTRY.x + 0.9, y: ENTRY.y + 0.9 };
}
function path(start, end, fs = S.furniture) {
  const legal = (p) => !blocked(Math.round(p.x), Math.round(p.y), fs);
  if (!legal(end)) return null;
  const outside = !legal(start),
    base = outside ? ENTRY : start,
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
function valid(fs, allowCheckoutConflict = false) {
  return (
    fs.every((f,i)=>Furniture.cells(f).every(p=>p.x>=0&&p.y>=0&&p.x<N&&p.y<M&&!(p.x===ENTRY.x&&p.y===ENTRY.y)&&!fs.slice(i+1).some(q=>Furniture.conflicts(f,q)))) &&
    (allowCheckoutConflict || !checkoutConflicts(fs).length) &&
    !blocked(ENTRY.x, ENTRY.y, fs) &&
    fs.filter((f) => [0, 1, 4, 5, 6, 7].includes(f.t)).every((f) => near(f, ENTRY, fs))
  );
}
function syncEntrance() {
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
    if (p.companion) {
      p.path = [];
      continue;
    }
    if (p.state === 'leave') {
      const route = path(p, ENTRY);
      p.path = route ? [...route, exitPoint()] : [];
      continue;
    }
    const f = S.furniture.find((f) => f.id === p.stationId),
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
function resizeShop() {
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
  return '<section class="feature"><span class="tag">우리 가게의 이야기</span><h3>서른 개의 새로운 리듬</h3><p id="endingGoalText">'+endingGoalText()+'</p><small>전자드럼 실제 누적 판매 30세트 달성 후, 그날 정산을 마치면 엔딩이 열려요. 엔딩 후에도 계속 운영할 수 있어요.</small></section>';
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
  const out = path(p, ENTRY);
  p.path = out ? [...out, exitPoint()] : [];
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
  return S.furniture
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
    .filter((o) => near(o.f, ENTRY));
}
function specialKind() {
 if(S.day<3||S.specialDone||S.time<Config.daySeconds*(50/180))return null;
 const scheduled=scheduledSpecial();if(scheduled)return scheduled;
 if(!hasDecor(10))return null;
 if(S.posterRoll.day!==S.day){S.posterRoll={day:S.day,won:Math.random()<.1};save();}
 return S.posterRoll.won?'band':null;
}
function spawn() {
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
  const storyVisit = hana?.regular && ['locked','delivered'].includes(S.hanaStory.phase) && hana.lastVisitDay < S.day && !people.some((p) => p.actor === 9) ? hana : null;
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
      products[choice.i].price <= profile.budget &&
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
function finishBrowse(p) {
  applyDemoDecor(p);
  if (!customerCanAfford(p, p.product)) {
    if (p.basket.length) checkout(p);
    else leave(p, '예산보다 비싸네요. 다음에 다시 올게요.');
    return;
  }
  if (S.stock[p.product] <= 0) {
    p.stockout = true;

    p.bubble = '품절이네, 다른 것도 볼까?';
    p.bubbleUntil = S.time + 3;
    if (!p.alternativeChecked && p.intent) {
      p.alternativeChecked = true;
      for (const item of offers())
        if (
          item.i !== p.product &&
          !p.basket.includes(item.i) &&
          customerCanAfford(p, item.i) &&
          go(p, item.f, 'browse')
        ) {
          p.product = item.i;
          return;
        }
    }
    if (p.basket.length) {
      checkout(p);
      return;
    }
    leave(p, '품절이네, 다음에 다시 와야겠다');
    return;
  }
  if (!p.intent) {
    leave(p, '오늘은 구경만 할게요');
    return;
  }
  if (!p.basket.includes(p.product)) p.basket.push(p.product);
  if (isInstrument(p.product) && !p.addonChecked) {
    p.addonChecked = true;
    if (products[p.product].family!=='drums' && Math.random() < 0.45) {
      const items = offers(true).filter(o=>addonCompatible(p.product,o.i)).sort(() => Math.random() - 0.5);
      for (const item of items)
        if (customerCanAfford(p, item.i) && go(p, item.f, 'browse')) {
          p.product = item.i;
          p.bubble = products[item.i].kind==='strings'?'줄도 함께 살까?':'페달도 살펴볼까?';
          return;
        }
    }
  }
  checkout(p);
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
  updateVIP(dt);
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
    if (p.path.length) {
      advanceCustomer(p, dt);
      continue;
    }
    Motion.settle(p, dt);
    p.timer += dt;
    if (p.state === 'browse') {
      if (p.timer > 1)
        p.bubble =
          S.stock[p.product] === 0
            ? '아쉽다, 이 상품은 품절이네'
            : products[p.product].name + '를 볼까?';
      if (p.timer > profileForActor(p.actor).browse) {
        const seat = S.furniture.find(
          (f) =>
            (products[p.product].family==='drums' ? p.actor===12&&f.t===FurnitureId.DRUM_DEMO : f.t===FurnitureId.DEMO_SEAT) &&
            !people.some((q) => q !== p && q.stationId === f.id && q.state === 'try')
        );
        if (
          S.stock[p.product] > 0 &&
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
          value + products[i].price <= (p.budget ?? Infinity)
        ) {
          S.stock[i]--;
          value += products[i].price;
          S.sold++;
          S.totalSales++;
          soldItems.push(i);
        }
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
function displayedProductIds() {
  return [
    ...new Set(
      S.furniture
        .filter((f) => (f.t === FurnitureId.GUITAR_RACK || f.t === FurnitureId.DRUM_DISPLAY) || f.t === FurnitureId.ACCESSORY_CABINET)
        .flatMap(shelfItems)
    )
  ];
}
function staffCoversProduct(i){return S.staffHired>0&&S.staffPolicy.enabled&&S.staffPolicy.products[i].enabled&&(!delayedProduct(i)||S.staffHired>=2);}
function lowStockIds() {
  const plan=new Map(staffOrderPlan().map(row=>[row.i,row]));
  return displayedProductIds().filter(i=>{
    if(S.stock[i]>2)return false;
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
    if (S.stock[i] === 0) toast(products[i].name + ' 품절 · 상품 주문에서 보충하세요');
    else if (S.stock[i] === 2) toast(products[i].name + ' 재고 2개 남았어요');
  }
  ui();
}
function inventoryStatus(i) {
  return (
    (displayedProductIds().includes(i) ? '진열 중' : '미진열') +
    ' · ' +
    (S.stock[i] === 0 ? '품절' : S.stock[i] <= 2 ? '재고 부족' : '판매 준비') +
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
function text(s, x, y, size, c, align = 'center') {
  ctx.font = `${size}px 'Noto Sans KR',sans-serif`;
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
function walkSprite(actor, dir, phase = 0, moving = true, playing = false) {
  const row = dir === 4 || dir === 6 ? 2 : dir === 2 || dir === 3 || dir === 7 ? 1 : 0;
  const natural = NaturalWalkFrames[actor];
  const entry = natural ?? PeopleFrames[actor];
  if (!entry) throw new RangeError('Unknown character identity');
  const count = entry.rows[row].length,
    frame = moving ? ((Math.floor(phase * count) % count) + count) % count : 1,
    part = entry.rows[row][frame];
  return { image: natural ? naturalWalkAtlases[entry.atlas] : peopleAtlases[entry.atlas],
    ...part, flip: dir === 1 || dir === 3 || dir === 6, frame, actor, dir,
    natural: !!natural };
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
    drawProduct(ctx,p.product,13,-54,24,52,[2,3,7].includes(dir),true);
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
    text(s, q.x, q.y - 105 * scale + 15, 9, '#6b7258');
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
function drawScenery() {
  ctx.setTransform(view.dpr, 0, 0, view.dpr, 0, 0);
  ctx.clearRect(0, 0, view.w, view.h);
  const grad = ctx.createLinearGradient(0, 0, 0, view.h);
  grad.addColorStop(0, '#d8ddc6');
  grad.addColorStop(1, '#c4c2a8');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, view.w, view.h);
  ctx.save();
  ctx.translate(view.w / 2 + view.panX, view.midY + view.panY);
  ctx.scale(view.scale * zoom, view.scale * zoom);
  ctx.translate(-view.centerX, -view.centerY);
  for (let y = -8; y < 20; y++)
    for (let x = -8; x < 20; x++) diamond(x, y, (x + y) % 2 ? '#b4b8a0' : '#bdc1a8', '#a7ad9325');
  for (let y = M; y < M + 3; y++)
    for (let x = -2; x < N + 1; x++)
      diamond(x, y, (x + y) % 2 ? '#c6bfa3' : '#d0c6aa', '#a9a18a55');
  const b = P(N - 1, 0),
    c = P(0, M - 1),
    d = P(N - 1, M - 1);
  ellipse(500, 465, 350, 125, '#66542e20');
  poly(
    [
      { x: c.x - 34, y: c.y },
      { x: d.x, y: d.y + 17 },
      { x: d.x, y: d.y + 39 },
      { x: c.x - 34, y: c.y + 22 }
    ],
    '#a17e55'
  );
  poly(
    [
      { x: d.x, y: d.y + 17 },
      { x: b.x + 34, y: b.y },
      { x: b.x + 34, y: b.y + 22 },
      { x: d.x, y: d.y + 39 }
    ],
    '#876a4c'
  );
  window.ShopInteriorStyle=Atelier.walls[S.design.wall];
  Interior.backdrop(ctx, P, null, null, N, M);
  Interior.floor(ctx, P, editing !== null, N, M);
  paintInteriorFloor();paintWallDecor();
  for (let x = ENTRY.x - 1; x <= ENTRY.x + 1; x++)
    if (x >= 0 && x < N) diamond(x, M - 1, '#6e7660', '#c9ad73');
  const mat = P(ENTRY.x, M - 1);
  text(S.shopName, mat.x, mat.y, 7, '#eaddb4');
}
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
    S.phase
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
    ...vipPartitions(),
    ...S.furniture.map((f) => ({ depth: f.t===9?-1000:f.x + f.y, draw: () => drawFurniture(f) })),
    ...shopTeamFigures().map((p) => ({ depth: p.x + p.y + 0.15, draw: () => drawPerson(p) })),
    ...people.map((p) => ({ depth: p.x + p.y + 0.15, draw: () => drawPerson(p) }))
  ];
  objects.sort((a, b) => a.depth - b.depth).forEach((o) => o.draw());
  drawVIPDraft();
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
  Interior.front(ctx, P, ENTRY, doorOpen, S.shopName, N, M, ['open', 'closing'].includes(S.phase));
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
function setTab(t){closeMenu();Sound.play('click');tab=t;selected=null;if(t==='furniture')furnitureView='purchase';hideFurnitureQuick();$('sheetLabel').textContent={shop:'운영',furniture:'상점 · 꾸미기',craft:'상점 · 제작',stock:stockFilter==='effect'?'악기 · 이펙터':stockFilter==='strings'?'악기 · 소모품':'악기',guests:{visiting:'손님',regulars:'단골',story:'이야기',vip:'VIP'}[guestView],report:'운영 기록 · 설정'}[t]??'운영';if(!$('management').open)$('management').showModal();if(!document.body.classList.contains('menu-open')){document.body.classList.add('menu-open');resizeView();draw();}renderPanel();syncMenuLabels();$('management').scrollTop=0;}
function furnitureIcon(t) {
  return `<div class="item-icon" data-sprite="${t}"></div>`;
}
function stockWarning() {
  const ids = lowStockIds();
  return ids.length
    ? `<details class="stock-warning" data-section="stock-warning"><summary>재고 확인 · ${ids.length}종</summary><p>손님은 품절이어도 방문해요.</p>${ids.map((i) => `<div><span>${products[i].name} · ${S.stock[i] === 0 ? '품절' : S.stock[i] + '개 남음'}</span><button data-restock="${i}">주문하기</button></div>`).join('')}</details>`
    : '';
}
function expansionCard() {
  const st = stageInfo(),
    next = Stages[S.stage + 1];
  return `<div class="feature"><span class="tag">매장 ${S.stage + 1} / 7단계</span><h3>${st.name}</h3><p>${N}×${M}칸 · 동시 손님 ${st.capacity}명 · 하루 임대료 ${money(st.rent)}</p>${next ? `<button class="secondary" data-action="expandPreview" ${S.phase !== 'prepare' ? 'disabled' : ''}>다음 공간 살펴보기 · ${compactMoney(next.cost)}</button>` : '<p>우리 동네 음악 명소가 되었어요!</p>'}</div>`;
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
function operationsHome(){const prepare=S.phase==='prepare',next=Stages[S.stage+1];return `<h2>오늘 운영</h2><section class="operation-card"><div class="operation-title"><b data-operating-phase>${{prepare:'오픈 준비',open:'영업 중',closing:'마감 중',settled:'영업 종료'}[S.phase]}</b><small>${S.day}일차</small></div>${prepare?`<p>${openingRequirements().join(' · ')||'오픈 준비 완료'}</p><button class="primary" data-action="open" ${!shopReady()?'disabled':''}>${openingLabel()}</button>`:`<p>오늘 매출 <span data-operating-revenue>${compactMoney(S.revenue)}</span> · 판매 <span data-operating-sold>${S.sold}</span>개</p>`}</section>${staffManagementShortcut()}<section class="operation-card"><div class="operation-title"><b>매장 확장</b><small>${S.stage+1} / 7단계</small></div>${next?`<p>${compactMoney(next.cost)} · 누적 ${S.stage===5?300:10}개 판매 후 확장</p><button data-action="expandPreview">다음 매장 보기</button>`:'<p>최종 확장 완료</p>'}</section><button class="operation-missions" data-action="missions"><b>미션 보기</b><span data-operating-missions>${readyMissionCount()?'받을 보상 '+readyMissionCount()+'개':'목표와 보상 확인'} ›</span></button><details class="operation-card"><summary>전자드럼</summary>${drumOperationsPanel()}</details><button class="secondary" data-panel-tab="report">영업 기록 보기</button>`;}

function renderPanel() {
  $('stockFooter')?.remove();
  $('sheetMoney').textContent='보유금 '+compactMoney(S.money);
  $('management').classList.toggle('stock-sheet',tab==='stock');
  const scroll = $('panel').scrollTop, opened = new Set(Array.from(document.querySelectorAll('#panel details[open][data-section]')).map((el) => el.dataset.section));
  let h = '';
  if (tab === 'furniture') {
    h = `<span class="eyebrow">MAKE IT YOURS</span><h2>나만의 공간을 만들어요</h2><p class="sub">가구 배치와 확장은 영업 준비 중에 가능해요.<br>기존 가구를 눌러 이동·회전·판매할 수 있어요.</p><div id="liveStockWarning">${stockWarning()}</div>${featureBadge('cabinet')}${featureBadge('rack2')}<div class="filter-bar"><button data-furniture-view="purchase" aria-pressed="${!selected && furnitureView === 'purchase'}">가구 구매</button><button data-furniture-view="placed" aria-pressed="${!!selected || furnitureView === 'placed'}">배치한 가구</button></div>`;
    h+=`<div class="decor-quick-links"><button data-atelier="design">벽지 · 바닥 · 벽 장식</button><button data-atelier="vip-design" ${S.stage<6?'disabled':''}>VIP 구역</button></div>`;
    if(!selected)h+=`<div class="filter-bar decor-filters">${[['all','전체'],['display','진열'],['facility','운영 시설'],['decor','장식']].map(([key,label])=>`<button data-decor-filter="${key}" aria-pressed="${decorFilter===key}">${label}</button>`).join('')}</div>`;
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
        if(f.t>=11)h+=`<button data-atelier="${f.t===11?'workshop':'displays'}">${f.t===11?'제작대 열기':'커스텀 악기 진열 관리'}</button>`;
        h += decorDetails(f.t,f)+'</div>';
      }
    }
    if (!selected && furnitureView === 'placed') h += S.furniture.length ? S.furniture.filter(f=>decorFilter==='all'||furnitureCategory(f.t)===decorFilter).map((f) => `<button class="placed-furniture" data-select-furniture="${f.id}">${types[f.t].name} · ${f.x + 1}, ${f.y + 1}<small>${escapeHTML(furnitureContents(f))}</small> <span>관리 ›</span></button>`).join('') : '<p class="sub">아직 배치한 가구가 없어요.</p>';
    if (!selected && furnitureView === 'purchase') h += types
      .map(
        (t, i) => decorFilter!=='all'&&furnitureCategory(i)!==decorFilter?'':i>=11?`<article class="item compact-furniture">${furnitureIcon(i)}<div class="item-info"><h3>${t.name}</h3><p>${['기본 악기 재고로 나만의 악기 제작','커스텀 악기 한 대를 VIP에게 전시','VIP가 전시 악기를 시연하는 자리','VIP와 구매를 상담하는 자리'][i-11]}</p><strong>${money(t.cost)}</strong><button data-build="${i}" ${S.phase!=='prepare'||!canBuyFurniture(i)?'disabled':''}>${S.stage<6?'7단계 해금':'배치하기'}</button></div></article>`:DecorDefinitions[i]?decorCard(t,i):
          `<div class="item">${furnitureIcon(i)}<div class="item-info"><h3>${t.name}</h3><p>${['악기 최대 ' + rackLimit() + '종 선택 진열', '손님의 구매를 계산하는 자리예요', '공간을 채우는 앰프', '초록빛 매장 장식', '손님이 악기를 직접 연주해요', '이펙터·기타줄 최대 ' + cabinetLimit() + '종 진열','전자드럼을 판매하는 전용 진열대예요','손님이 전자드럼을 연주해요'][i]}</p><strong>${money(t.cost)}</strong>${!furnitureUnlocked(i)?'<small>🔒 운영 미션 보상으로 해금</small>':''}<button data-build="${i}" ${S.phase !== 'prepare' || !canBuyFurniture(i) ? 'disabled' : ''}>배치 ＋</button></div></div>`
      )
      .join('');
  } else if (tab === 'stock') {
    h =
      '<h2 class="stock-heading">상품 구매</h2><p class="stock-intro">준비 중 예약하면 오늘 15시, 영업 중 예약하면 내일 오픈 전에 입고돼요.</p>';
    if (stockFilter === 'instrument') h += `<div class="filter-bar" aria-label="악기 종류">${[['all','전체 악기'],['electric','일렉'],['bass','베이스'],['acoustic','어쿠스틱'],['drums','전자드럼']].map(([key,label])=>`<button data-family-filter="${key}" aria-pressed="${instrumentFilter===key}">${label}</button>`).join('')}</div>`;
    h+=`<label class="stock-status-filter">재고 상태 <select id="stockStatus" aria-label="재고 상태"><option value="all" ${stockStatus==='all'?'selected':''}>전체 상품</option><option value="displayed" ${stockStatus==='displayed'?'selected':''}>진열 중</option><option value="soldout" ${stockStatus==='soldout'?'selected':''}>품절</option><option value="incoming" ${stockStatus==='incoming'?'selected':''}>입고 대기</option></select></label>`;
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
    h = staffManagementShortcut()+`<span class="eyebrow">EVERY LITTLE PROGRESS</span><h2>${escapeHTML(S.shopName)} 운영 기록</h2>`;
    h += [
      ['매장 단계', S.stage + 1 + ' / 7'],
      ['오늘 수입', money(S.revenue + S.furnitureRevenue + S.missionRevenue)],
      ['오늘 지출', money(S.expenses)],
      ['오늘 수지', money(S.revenue + S.furnitureRevenue + S.missionRevenue - S.expenses)],
      ['오늘 방문', S.visitors + '명'],
      ['하루 임대료', money(stageInfo().rent)],
      ['하루 직원 일급', money(staffWage())]
    ]
      .map(([a, b],i) => `<div class="report-row"><span>${a}</span><b data-report-value="${i}">${b}</b></div>`)
      .join('');

    h += `<div class="note">영업 10:00~20:00 · 하루 약 2분<br>임대료와 직원 일급은 마감 정산 때 한 번 차감돼요.<br>정산은 현금 기준이에요. 주문비는 결제한 날 지출에 포함돼요.</div><button class="primary" data-action="saveManager">저장 관리</button><button class="secondary" data-action="title">타이틀로</button><button class="secondary" data-action="rename">가게 이름 변경</button><div class="audio-settings"><h3>사운드 설정</h3><label class="volume-row">배경음<input id="musicVolume" type="range" min="0" max="100" value="${Math.round(S.audio.music * 100)}"><output id="musicValue">${Math.round(S.audio.music * 100)}%</output></label><label class="volume-row">효과음<input id="effectsVolume" type="range" min="0" max="100" value="${Math.round(S.audio.effects * 100)}"><output id="effectsValue">${Math.round(S.audio.effects * 100)}%</output></label><button class="secondary" data-action="audio">${S.audio.muted ? '소리 켜기 ♪' : '전체 음소거'}</button></div>`;
  } else {
    h = operationsHome();
  }
  const names = [['shop','운영'],['stock','악기'],['furniture','상점'],['guests','손님']];

  if(tab==='report')h='<div class="settings-tools"><button data-control="fullscreen">전체 화면</button><button data-control="help">플레이 안내</button></div>'+h;
  $('panel').innerHTML = (tab === 'shop' ? '<div id="liveStockWarning">'+stockWarning()+'</div>' : '') + h;
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
  drawIcons();
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
            `<div class="customer"><div class="avatar" style="background:${p.color}20">${p.special ? '★' : p.actor % 2 ? '👩' : '🧑'}</div><div><b>${escapeHTML(p.name)}${p.special ? ' · 특별 손님' : isRegular(S.customerBook[p.customerKey]) ? ' · 단골 ♡' : '님'}</b><small>${products[p.product].name}</small></div><em>${{ browse: '구경 중', try: '시연 중', checkout: '계산 중', queue: '대기 중', leave: p.bought ? '구매 완료' : '퇴장 중' }[p.state] ?? ''}</em></div>`
        )
        .join('')
    : `<p class="sub">${S.phase === 'prepare' ? '준비가 끝나면 가게를 열어주세요.' : S.phase === 'open' ? '곧 손님이 찾아올 거예요.' : '오늘도 수고했어요.'}</p>`;
}
function productOrderCard(p,i){
 const unlocked=productUnlocked(i),n=purchaseQuantity(i),total=purchaseCost(i)*n,short=Math.max(0,total+setupReserve(-1)-S.money);
 return `<div class="item product-order ${unlocked?'':'locked-product'}" data-product-row="${i}" ${unlocked&&!stockMatches(i)?'hidden':''}><div class="item-icon product-art" data-product-art="${i}"></div><div class="item-info"><h3>${p.name}</h3><p class="product-tier">${({electric:'일렉 기타',bass:'베이스',acoustic:'어쿠스틱',effect:'이펙터',strings:'기타줄',drums:'전자드럼'})[p.family]??p.tag} · ${TierNames[p.tier]}</p><p class="product-cost" aria-label="매입 ${money(purchaseCost(i))} 판매 ${money(p.price)}">매입 ${purchaseCost(i)<p.cost?`<del>${compactMoney(p.cost)}</del> `:''}${compactMoney(purchaseCost(i))} <span>판매 ${compactMoney(p.price)}</span></p><small class="inventory-status ${S.stock[i]<=2?'low':''}">${unlocked?'재고 '+S.stock[i]+' · '+(incomingQuantity(i)?deliveryText(i):'예정 0'):'🔒 '+productLockReason(i)}</small></div>${unlocked?`<div class="order-actions"><div class="purchase-controls">${quantityControl(i)}<div class="order-total" aria-label="총 구매금액"><span>합계</span><strong>${money(total)}</strong></div><p class="closing-warning" ${closingShortfall(total)?'':'hidden'}>${closingWarning(total)}</p><p class="order-short" ${short?'':'hidden'}>${money(short)} 부족</p></div><button data-order="${i}" ${short?'disabled':''}>${delayedProduct(i)?'일반 주문':'구매'}</button>${delayedProduct(i)?`<button class="express" data-express="${i}" ${S.money<expressCost(i)*n+setupReserve(-1)?'disabled':''}>긴급주문 <span>${compactMoney(expressCost(i)*n)}</span></button>`:''}</div>`:''}</div>`;
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
function refreshLivePanel(){
 if(!$('management').open)return;
 refreshOperations();refreshStockVisibility();refreshStockFooter();refreshCheckoutStatuses();refreshEndingGoal();
 if(tab==='stock')for(const row of document.querySelectorAll('#panel .product-order:not(.locked-product)')){
 const i=+row.dataset.productRow,stock=row.querySelector('.inventory-status');setLiveText(stock,'재고 '+S.stock[i]+' · '+(incomingQuantity(i)?deliveryText(i):'예정 0'));stock?.classList.toggle('low',S.stock[i]<=2);const input=row.querySelector('[data-quantity-input]');if(input)syncQuantityInput(input);
 }else if(tab==='report'){
 const values=[S.stage+1+' / 7',money(S.revenue+S.furnitureRevenue+S.missionRevenue),money(S.expenses),money(S.revenue+S.furnitureRevenue+S.missionRevenue-S.expenses),S.visitors+'명',money(stageInfo().rent),money(staffWage())];
 for(const el of document.querySelectorAll('[data-report-value]'))setLiveText(el,values[+el.dataset.reportValue]);}
 refreshStockWarnings();
}

function stockMatches(i){
  if(stockStatus==='displayed')return displayedProductIds().includes(i);
  if(stockStatus==='soldout')return S.stock[i]===0;
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
 return `<div class="mission-lanes">${missionLaneCard('growth')}${missionLaneCard('challenge')}</div><p class="sub">기존 누적 판매 기록이 반영돼요. 두 목표의 보상은 각각 받을 수 있어요.</p><details data-section="mission-history"><summary>전체 미션 · ${claimed.length} / ${MissionDefinitions.length} 완료</summary>${MissionDefinitions.map(m=>`<div class="mission-history"><b>${m.stage+1}단계 · ${m.title}</b><span>${claimed.includes(m.id)?'보상 수령 완료':active.includes(m.id)?(missionLane(m)==='growth'?'현재 성장 목표':'현재 악기 도전'):'앞으로의 목표 · '+(m.stage+1)+'단계부터'}</span><small>${missionRewardText(m)}</small><small>${m.goals.map(g=>g.label+' '+g.min+(g.kind==='distinctInstruments'?'종':'개')).join(' · ')}</small></div>`).join('')}</details>${S.missionStats.legacyImported?'<small class="mission-legacy">기존 누적 판매·현재 날짜의 판매 기록을 반영했어요. 상품별 목표는 기록된 판매량을 기준으로 해요.</small>':''}<div class="note"><span data-reputation-summary>명성 ${S.rep.toFixed(1)} / 100 · 추가 방문 +${((visitorMultiplier()-1)*100).toFixed(1)}%</span><br>일반 결제 +0.1 · 중급 이상 결제 +0.3 · 정상 마감 +0.5 · 하루 최대 +3<br>미션 보상 명성은 일일 한도와 별도예요.</div>`;
}
let missionView='active';
function renderMissions(){
 const el=$('missionPanel');
 const content=missionView==='active'?`<div class="mission-lanes">${missionLaneCard('growth')}${missionLaneCard('challenge')}</div>`:
  (S.claimedMissions.length?MissionDefinitions.filter(m=>S.claimedMissions.includes(m.id)).map(m=>`<article class="completed-mission"><b>✓ ${m.title}</b><span>${missionRewardText(m)}</span><small>보상 수령 완료</small></article>`).join(''):'<p class="empty-note">아직 완료한 미션이 없어요.</p>');
 el.innerHTML=`<div class="mission-view-tabs"><button data-mission-view="active" aria-pressed="${missionView==='active'}">진행 중</button><button data-mission-view="completed" aria-pressed="${missionView==='completed'}">완료 ${S.claimedMissions.length}</button></div>${content}`;
 el.dataset.structure=JSON.stringify([S.stage,S.claimedMissions,missionView]);drawProductIcons(el);drawCustomerIcons(el);
}
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
function guestHome(){if(guestView==='vip')return vipGuestCards();if(guestView==='story')return '<h2>손님의 이야기</h2><div id="hanaStoryPanel">'+hanaStoryPanel()+'</div>'+endingGoalPanel();if(guestView==='regulars')return '<h2>손님과의 인연</h2><p class="sub">방문·구매로 쌓인 호감도와 기록이에요.</p><div id="relationshipPanel">'+relationshipPanel()+'</div>';return '<h2>손님</h2><p class="sub">현재 매장을 방문한 손님이에요.</p><div id="customerList"></div>';}
let relationshipFilter='all';
function relationshipPanel(){const rows=Object.values(S.customerBook).filter(r=>r.visits>0).sort((a,b)=>Number(isRegular(b))-Number(isRegular(a))||b.satisfaction-a.satisfaction||b.purchases-a.purchases);return rows.length?rows.map(r=>`<article class="unlock-guest"><div class="guest-portrait" data-customer-art="${r.actor}" data-customer-special="${r.key.startsWith('special-')?r.key.slice(8):''}"></div><div><b>${escapeHTML(r.name)} · ${isRegular(r)?'단골 ♡':'방문 손님'}</b><p>방문 ${r.visits}회 · 구매 ${r.purchases}회</p><small>호감도 ${r.satisfaction} / 100</small><div class="affinity-track"><i style="width:${r.satisfaction}%"></i></div>${isRegular(r)?'<p class="regular-letter">“다시 찾아오고 싶은 가게예요.”</p>':''}</div></article>`).join(''):'<p class="empty-note">첫 손님을 맞으면 방문 기록이 쌓여요.</p>';}

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
      : (first ? '배치 완료! 판매할 악기를 선택하면 진열대에 바로 반영돼요. ' : '') + '서로 다른 악기를 최대 ' + rackLimit() + '종 진열할 수 있어요. 재고는 창고에서 함께 관리해요.';
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
        (cabinet ? p.kind !== 'instrument' : p.kind === 'instrument' && p.family!=='drums' && (rackFilter === 'all' || p.family === rackFilter)) && productUnlocked(i)
    )
    .sort((a,b)=>a.p.tier-b.p.tier || a.i-b.i)
    .map(
      ({ p, i }) =>
        `<div data-product-row="${i}" class="rack-choice ${chosen(i) ? 'chosen' : ''}"><div class="product-art" data-product-art="${i}"></div><div><b>${p.name}</b><p>${TierNames[p.tier]} · 판매 ${money(p.price)}</p><small class="picker-stock">${incomingQuantity(i) ? deliveryText(i)+' · ' : ''}${S.stock[i] > 0 ? '재고 ' + S.stock[i] + '개' : '재고 없음 · 선택 후 품절 표시'}</small>${quantityControl(i)}<p class="closing-warning" ${closingShortfall(purchaseCost(i)*purchaseQuantity(i))?'':'hidden'}>${closingWarning(purchaseCost(i)*purchaseQuantity(i))}</p><div class="rack-choice-actions"><button class="${chosen(i) && cabinet ? 'secondary' : 'primary'}" data-pick-product="${i}" aria-pressed="${chosen(i)}" ${cabinet && !chosen(i) && items.length >= cabinetLimit() || !cabinet && f[otherField] === i ? 'disabled' : ''}>${cabinet ? (chosen(i) ? '선택 해제' : '이 소품 진열') : chosen(i) ? '진열 중' : f[otherField] === i ? '다른 칸에 진열 중' : '이 악기 진열'}</button>${true ? `<button ${S.stock[i]!==0?'hidden':''} class="secondary" data-picker-order="${i}" ${S.money < purchaseCost(i) * purchaseQuantity(i) + setupReserve(-1) ? 'disabled' : ''}>${purchaseQuantity(i)}개 주문 · ${money(purchaseCost(i) * purchaseQuantity(i))}</button>` : ''}${delayedProduct(i) ? `<button ${S.stock[i]!==0?'hidden':''} class="secondary" data-picker-express="${i}" ${S.money < expressCost(i) * purchaseQuantity(i) + setupReserve(-1) ? 'disabled' : ''}>긴급주문 · ${money(expressCost(i) * purchaseQuantity(i))}</button>` : ''}</div></div></div>`
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
    dir: placementDir
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
  } else if ([12,13,14].includes(f.t)&&!vipNear(f,ENTRY,[...fs,f])) {
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
function showFurnitureQuick(f){
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
function staffManagementShortcut(){return `<section class="employee-shortcut operation-card"><div><b>직원</b><small>재고 ${S.staffHired}명 · 계산 ${S.cashierHired}명 · 하루 ${money(staffWage())}</small></div><button data-action="staffManagement">관리 ›</button></section>`;}
function reserveSummary(){return `<div class="reserve-summary"><b>확보할 운영비 ${money(operatingReserve())}</b><small>임대료 + 전체 직원 일급 · 10일분</small></div>`;}
function autoToggle(){return `<label class="auto-toggle"><span>전체 직원 자동 주문</span><input type="checkbox" data-staff-auto ${S.staffPolicy.enabled?'checked':''} aria-label="전체 직원 자동 주문 켜기"></label>`;}
function staffPreviewHtml(rows=staffOrderPlan()){return rows.length?rows.map(row=>`<div class="staff-preview"><b>${products[row.i].name}</b><span>${row.quantity}개 · ${money(row.cost)}</span><small>${row.reason}</small></div>`).join(''):'<p class="empty-note">진열 상품을 선택해주세요.</p>';}
function renderStaffSettings(){
 const showDetails=$('staffSettingsContent').querySelector('details[data-products]')?.open??false;
 $('staffSettingsContent').innerHTML=`${autoToggle()}${reserveSummary()}<button class="secondary" data-staff-recommend>추천 기준 적용 · 기본 3 / 예약 1</button><p class="settings-hint">수량과 상품별 켜짐 상태는 유지해요.</p><details data-products ${showDetails?'open':''}><summary>상품별 설정</summary><div class="employee-tabs">${[['displayed','진열 중'],['all','해금 전체']].map(([k,label])=>`<button data-staff-scope="${k}" aria-pressed="${staffSettingsScope===k}">${label}</button>`).join('')}</div>${products.map((p,i)=>({p,i})).filter(({i})=>productUnlocked(i)&&(staffSettingsScope==='all'||displayedProductIds().includes(i))).map(({p,i})=>`<article class="staff-product simple-product"><div class="staff-product-name"><b>${p.name}</b><small>재고 ${S.stock[i]} · ${incomingQuantity(i)?deliveryText(i):'입고 예정 0'}</small><label><input type="checkbox" data-staff-enabled="${i}" ${S.staffPolicy.products[i].enabled?'checked':''}>자동 주문</label></div><div class="staff-rule"><label><input type="number" inputmode="numeric" min="0" max="99" data-staff-at="${i}" aria-label="${p.name} 주문 기준 재고" value="${staffReorderAt(i)}">개 이하일 때</label><span>→</span><label><input type="number" inputmode="numeric" min="1" max="999" data-staff-quantity="${i}" aria-label="${p.name} 자동 주문 수량" value="${S.staffPolicy.products[i].quantity}">개 주문</label></div></article>`).join('')||'<p class="empty-note">해당 상품이 없어요.</p>'}</details><details><summary>주문 예정 확인</summary><div id="staffOrderPreview">${staffPreviewHtml()}</div></details>`;
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
function renderStaffManagement(){
 const inventory=employeeTab==='inventory',count=inventory?S.staffHired:S.cashierHired;if(selectedEmployee>=count)selectedEmployee=Math.max(0,count-1);
 const ready=S.phase==='prepare'&&editing===null;
 const detail=count?`<section class="employee-detail"><h3>${inventory?'재고':'계산'} 직원 ${selectedEmployee+1} 관리</h3>${inventory?`${autoToggle()}${reserveSummary()}<button class="secondary" data-staff-recommend>추천 기준 적용 · 기본 3 / 예약 1</button><button class="primary" id="employeeOrderSettings">상품별 주문 설정</button><details><summary>담당 업무</summary><p>${selectedEmployee===0?'입문 악기·소품 보충':'중급 이상 악기·전자드럼 예약 주문'}</p></details>`:`<p>담당 계산대 ${selectedEmployee+2}</p><p>${checkoutStations()[selectedEmployee+1]?checkoutStatus(checkoutStations()[selectedEmployee+1]):'계산대 필요'}</p>`}<div class="dismiss-area"><button data-employee-action="dismiss" ${!ready||selectedEmployee!==count-1?'disabled':''}>퇴사 처리</button>${selectedEmployee!==count-1?'<small>두 번째 직원부터 퇴사할 수 있어요.</small>':''}</div></section>`:'';
 $('staffManagementContent').innerHTML=`<div class="employee-payroll"><b>직원 ${S.staffHired+S.cashierHired}명</b><span>하루 일급 ${money(staffWage())}</span></div><div class="employee-tabs">${[['inventory','재고 직원'],['cashier','계산 직원']].map(([key,label])=>`<button data-employee-tab="${key}" aria-pressed="${employeeTab===key}">${label}</button>`).join('')}</div>${employeeCards()}${detail}`;
 drawCustomerIcons($('staffManagementContent'));if($('employeeOrderSettings'))$('employeeOrderSettings').onclick=openStaffSettings;
}
function openStaffManagement(kind){if(['inventory','cashier'].includes(kind))employeeTab=kind;selectedEmployee=0;renderStaffManagement();if(!$('staffManagement').open)$('staffManagement').showModal();return true;}
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
function syncTutorialHost(){
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
 const selector=editingHelp?'#confirmPlacement':step===0?'#panel [data-build="1"]':step===1?'#panel [data-build="0"]':step===2?'#rackPickerProducts [data-pick-product]':step===3?'#openShop':step===5?'#panel .product-order [data-order]':null;
 const target=selector?document.querySelector(selector):null;
 document.querySelectorAll('.tutorial-focus').forEach(e=>{if(e!==target)e.classList.remove('tutorial-focus')});if(target&&target.getClientRects().length)target.classList.add('tutorial-focus');
}
function startTutorial(){S.tutorial={active:true,step:0,purchased:false,startDay:S.day,completed:false};lastTutorialStep=-1;tutorialRenderKey='';tutorialReading=false;save();refreshTutorial();ui();if($('management').open)tutorialGo();}
function skipTutorial(){if(S.tutorial)S.tutorial.active=false;tutorialReading=false;tutorialRenderKey='';save();refreshTutorial();ui();}
function tutorialGo(){
 const step=S.tutorial.step;if(editing!==null&&step<3){toast('바닥의 빈 칸을 누르고 배치를 확정해주세요.');return;}
 if(step===0||step===1){setTab('furniture');document.querySelector('#panel [data-build="'+(step===0?1:0)+'"]')?.scrollIntoView({block:'center'});}
 else if(step===2){const rack=S.furniture.find(f=>f.t===0);if(rack)openRackPicker(rack.id);}
 else if(step===5){setTab('stock');document.querySelector('#panel .product-order')?.scrollIntoView({block:'center'});}
 else $('management').close();refreshTutorial();
}
$('startTutorialSkip').onclick=()=>{$('modal').close();paused=pausedBeforeHelp;skipTutorial();};
$('closeModal').onclick=()=>{$('modal').close();paused=pausedBeforeHelp;skipTutorial();};

document.body.insertAdjacentHTML('beforeend',`<dialog id="interiorDialog" class="atelier-dialog" aria-labelledby="interiorHeading"><header class="atelier-header"><h2 id="interiorHeading">인테리어 · VIP 구역</h2><button data-atelier-close="interiorDialog" aria-label="닫기">×</button></header><div id="interiorBody"></div></dialog><dialog id="workshopDialog" class="atelier-dialog workshop-dialog" aria-labelledby="workshopHeading"><header class="atelier-header"><h2 id="workshopHeading">커스텀 제작대</h2><button data-atelier-close="workshopDialog" aria-label="닫기">×</button></header><div id="workshopBody"></div></dialog><dialog id="customDisplayDialog" class="atelier-dialog" aria-labelledby="displayHeading"><header class="atelier-header"><h2 id="displayHeading">커스텀 악기 진열</h2><button data-atelier-close="customDisplayDialog" aria-label="닫기">×</button></header><div id="customDisplayBody"></div></dialog><aside id="vipEditBar" hidden><b>VIP 구역 지정</b><p id="vipEditStatus" role="status"></p><div><button id="vipEditCancel">취소</button><button id="vipEditConfirm" class="primary" disabled>구역 확정</button></div></aside>`);
vipSpriteImage=runtimeImage('assets/vip-v3180.webp');atelierFurnitureAtlas=runtimeImage('assets/atelier-v3180.webp');interiorArtAtlas=runtimeImage('assets/interior-v3180.webp');wallDetailAtlas=runtimeImage('assets/wall-details-v3190.webp');
$('vipEditCancel').onclick=()=>finishVIPEdit(false);$('vipEditConfirm').onclick=()=>finishVIPEdit(true);
canvas.addEventListener('click',e=>{if(wasDragged)return;if(vipEditor){e.stopImmediatePropagation();selectVIPTile(tileAt(e));return;}if(editing===null){const f=hitFurniture(e,tileAt(e));if(f?.t===11){e.stopImmediatePropagation();setTab('craft');}else if(f?.t===12){e.stopImmediatePropagation();openCustomDisplays();}}},true);
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&vipEditor){e.preventDefault();finishVIPEdit(false);}});
document.addEventListener('click',e=>{
 const close=e.target.closest('[data-atelier-close]');if(close){$(close.dataset.atelierClose).close();renderDirty=true;return;}
 const b=e.target.closest('[data-atelier]');if(b&&!b.disabled){const action=b.dataset.atelier;
 if(action==='design')openInterior();if(action==='workshop')openWorkshop();if(action==='zone')beginVIPEdit();if(action==='zone-remove'){removeVIPZone();renderInterior();}
 if(action==='door-apply'){const z=S.vip.zone,side=$('vipDoorSide').value,at=Number($('vipDoorAt').value)-1;if(z&&setVIPZone({...z,doorSide:side,doorAt:at}))renderInterior();}
 if(action==='wall-add'){addWallItem($('wallSide').value,Number($('wallSlot').value),$('wallType').value);renderInterior();}
 if(action==='craft-finish'){finishCustom();drawCustomInventory();}if(action==='bench-upgrade')upgradeWorkbench();if(action==='displays')openCustomDisplays();
 }
 const rem=e.target.closest('[data-wall-remove]');if(rem&&!rem.disabled&&S.phase==='prepare'){const [wall,slot]=rem.dataset.wallRemove.split(':');S.design.wallItems=S.design.wallItems.filter(i=>i.wall!==wall||i.slot!==+slot);expansionChanged();renderInterior();}
 const turn=e.target.closest('[data-model-turn]');if(turn){workshopAngle=turn.dataset.modelTurn==='0'?0:workshopAngle+Number(turn.dataset.modelTurn);drawCustomModel();}
});
document.addEventListener('change',e=>{const el=e.target;
 if(el.dataset.design&&S.phase==='prepare'&&editing===null){const key=el.dataset.design,table=key.toLowerCase().includes('wall')?Atelier.walls:Atelier.floors;if(table[el.value]){S.design[key]=el.value;expansionChanged();}}
 if(el.id==='wallSide'){$('wallSlot').innerHTML=Array.from({length:Math.floor(((el.value==='x'?N:M)-1)/2)},(_,i)=>`<option value="${i}">${i+1}번 자리</option>`).join('');}
 if(el.id==='vipDoorSide'&&S.vip.zone){$('vipDoorAt').max=(['left','right'].includes(el.value)?S.vip.zone.h:S.vip.zone.w)-1;$('vipDoorAt').value=Math.min(Number($('vipDoorAt').value),Number($('vipDoorAt').max));}
 if(el.id==='customBase'&&workshopDraft){const n=Number(el.value);if(customBases().includes(n))setCustomDraftOption('base',n);}
 if(el.dataset.customOption&&workshopDraft){const key=el.dataset.customOption;if(Atelier.options[key]?.some(o=>o[0]===el.value&&customOptionAvailable(o))){setCustomDraftOption(key,el.value);}}
 if(el.dataset.customDisplay){const value=el.value===''?null:Number(el.value);setCustomDisplay(Number(el.dataset.customDisplay),value);if($('workshopDialog').open)renderWorkshop();else if($('customDisplayDialog').open)openCustomDisplays();}
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

// SOURCE: core/loop
// Final initialization, frame scheduler and the small test/debug interface.

resizeShop();
ui();
showTitle();
let lastPaint=0,stationaryKey='',lastScenePaint=0,wasMenuCovered=false;
function gameplayBlocked(){return vipEditor || ['interiorDialog','workshopDialog','customDisplayDialog'].some(id=>$(id)?.open) || tutorialReading || $('staffSettings').open || $('recoveryModal').open || $('saveManager').open || $('importConfirm').open;}
function largeMenuOpen(){return ['interiorDialog','workshopDialog','customDisplayDialog','decorDetail','saveManager','importConfirm','missionDialog','dismissConfirm','management','rackPicker','saveBackup','staffSettings','staffManagement','unlockModal','expansion','modal','settlement','assetLoading','endingModal','recoveryModal'].some(id=>$(id).open);}
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
  Config,MenuSections,closeMenu,toggleMenu,openMenuSection,setCustomDraftOption,refreshCustomPreview,customTexture,compactMoney,paintWallClockHands,
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

})();
