window.GameBuild=Object.freeze({"version":"3.11.0","schema":{"version":18,"storageKey":"little-tone-v1","legacyStageSizes":[[7,6],[9,6],[9,8],[11,8],[11,10],[13,10]],"legacyShelfItems":[3,6,7]},"art":{"grid":{"halfWidth":34,"halfHeight":17,"groundFit":0.94},"wallHeight":42,"furnitureFeet":{"0":[[[0.033,0.627],[0.735,0.976],[0.967,0.823],[0.265,0.475]],[[0.036,0.63],[0.713,0.981],[0.961,0.824],[0.287,0.497]]],"1":[[[0.08,0.75],[0.67,0.99],[0.98,0.84],[0.39,0.6]],[[0.08,0.75],[0.67,0.99],[0.98,0.84],[0.39,0.6]]],"2":[[[0.2,0.8],[0.62,0.99],[0.91,0.86],[0.49,0.67]],[[0.2,0.8],[0.62,0.99],[0.91,0.86],[0.49,0.67]]],"3":[[[0.4,0.93],[0.55,0.95],[0.64,0.89],[0.49,0.87]],[[0.4,0.93],[0.55,0.95],[0.64,0.89],[0.49,0.87]]],"4":[[[0.01,0.75],[0.6,0.98],[0.94,0.81],[0.35,0.58]],[[0.01,0.75],[0.6,0.98],[0.94,0.81],[0.35,0.58]]],"5":[[[0.075,0.614],[0.681,0.946],[0.919,0.812],[0.313,0.48]],[[0.075,0.614],[0.681,0.946],[0.919,0.812],[0.313,0.48]]]},"furnitureScale":{"2":0.78,"3":0.72},"furnitureSize":[0,76,68,74,72,81.84],"rackHeight":70.72,"cabinetSize":81.84,"characterHeight":77,"cashierHeight":73,"metadata":{"characterFrames":"src/js/data/sprites.js","productClips":"src/js/data/sprites.js","furnitureFeet":"config/art-layout.json"}},"missions":[{"id":"s1-sales","stage":0,"title":"첫 다섯 번의 선율","goals":[{"label":"상품 판매","kind":"total","min":5}],"reward":{"money":150000}},{"id":"s1-core","stage":0,"title":"입문자의 선택","goals":[{"label":"데이브레이크 ST","kind":"products","min":1,"ids":[0]},{"label":"딥 포레스트 JB","kind":"products","min":1,"ids":[1]},{"label":"모닝 어쿠스틱","kind":"products","min":1,"ids":[2]}],"reward":{"actor":9}},{"id":"s2-sales","stage":1,"title":"새로운 음색","goals":[{"label":"중급 기타·베이스 판매","kind":"products","min":3,"ids":[9,10]}],"reward":{"money":250000}},{"id":"s2-core","stage":1,"title":"중급 악기의 두 얼굴","goals":[{"label":"블루 아워 ST","kind":"products","min":5,"ids":[9]},{"label":"앰버 그루브 JB","kind":"products","min":5,"ids":[10]}],"reward":{"product":21}},{"id":"s3-sales","stage":2,"title":"소품까지 꼼꼼하게","goals":[{"label":"기타줄 판매","kind":"products","min":10,"ids":[6,7,8]}],"reward":{"feature":"cabinet"}},{"id":"s3-rack","stage":2,"title":"취향을 넓히는 진열","goals":[{"label":"일렉 기타 판매","kind":"family","family":"electric","min":10},{"label":"베이스 판매","kind":"family","family":"bass","min":10},{"label":"어쿠스틱 판매","kind":"family","family":"acoustic","min":10}],"reward":{"feature":"rack2"}},{"id":"s3-core","stage":2,"title":"나만의 페달 보드","goals":[{"label":"오버드라이브","kind":"products","min":1,"ids":[3]},{"label":"디스토션","kind":"products","min":1,"ids":[4]},{"label":"딜레이","kind":"products","min":1,"ids":[5]}],"reward":{"actor":10}},{"id":"s4-sales","stage":3,"title":"바쁜 하루의 보람","goals":[{"label":"하루 최고 판매","kind":"bestDay","min":10}],"reward":{"money":150000}},{"id":"s4-core","stage":3,"title":"프리미엄의 울림","goals":[{"label":"와인 세미할로우","kind":"products","min":3,"ids":[13]},{"label":"아이보리 세션 5","kind":"products","min":3,"ids":[14]},{"label":"두 모델 합계 판매","kind":"products","min":12,"ids":[13,14]}],"reward":{"product":22}},{"id":"s5-sales","stage":4,"title":"다양한 악기가 있는 가게","goals":[{"label":"판매한 악기 종류","kind":"distinctInstruments","min":8}],"reward":{"feature":"staff2"}},{"id":"s5-core","stage":4,"title":"전문가의 무대 준비","goals":[{"label":"에메랄드 마스터","kind":"products","min":1,"ids":[15]},{"label":"차콜 마스터 5","kind":"products","min":1,"ids":[16]},{"label":"고급 이펙터","kind":"products","min":1,"ids":[19,20]}],"reward":{"actor":11}},{"id":"s6-sales","stage":5,"title":"우리 동네 음악 명소","goals":[{"label":"누적 상품 판매","kind":"total","min":300}],"reward":{"feature":"drums"}},{"id":"s6-core","stage":5,"title":"마지막 특별한 한 대","goals":[{"label":"바이올렛 리미티드","kind":"products","min":3,"ids":[17]},{"label":"미드나잇 리미티드 5","kind":"products","min":3,"ids":[18]},{"label":"두 모델 합계 판매","kind":"products","min":15,"ids":[17,18]},{"label":"전자드럼 세트 판매","kind":"products","min":5,"ids":[26]}],"reward":{"product":23}},{"id":"s6-drums","stage":5,"title":"첫 리듬을 함께","goals":[{"label":"전자드럼 세트 판매","kind":"products","min":3,"ids":[26]}],"reward":{"feature":"drumDemo"}}]});
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
  function advance(p, dt) {
    p.velocity ??= 0;
    p.gait ??= 0;
    p.facing ??= 0;
    p.stride ??= 0.75;
    if (!p.path.length) {
      p.velocity = 0;
      p.moving = false;
      return 0;
    }
    let remain = 0,
      from = p;
    for (const point of p.path) {
      remain += projectedDistance(point.x - from.x, point.y - from.y);
      from = point;
    }
    const top = p.walkSpeed ?? 1.18,
      accel = 4.8,
      target = Math.min(top, Math.sqrt(2 * accel * remain));
    const old = p.velocity;
    p.velocity += Math.max(-accel * dt, Math.min(accel * dt, target - p.velocity));
    p.animationWeight = Math.min(1, p.velocity / top);
    let budget = (old + p.velocity) * 0.5 * dt,
      distance = 0;
    for (let safety = 0; safety < 32 && p.path.length && budget > 1e-9; safety++) {
      const next = p.path[0],
        dx = next.x - p.x,
        dy = next.y - p.y,
        d = projectedDistance(dx, dy);
      if (d < 1e-8) {
        p.path.shift();
        continue;
      }
      p.facing = facing(dx, dy, p.facing);
      const travel = Math.min(d, budget);
      p.x += (dx / d) * travel;
      p.y += (dy / d) * travel;
      distance += travel;
      budget -= travel;
      if (travel >= d - 1e-8) {
        p.x = next.x;
        p.y = next.y;
        p.path.shift();
        if (p.path.length && facing(p.path[0].x - p.x, p.path[0].y - p.y, p.facing) !== p.facing)
          break;
      }
    }
    p.gait += distance / p.stride;
    p.moving = distance > 1e-7;
    if (!p.path.length) {
      p.velocity = 0;
      p.moving = false;
      if (p.lookTarget) p.facing = facing(p.lookTarget.x - p.x, p.lookTarget.y - p.y, p.facing);
    }
    return distance;
  }
  const api = { advance, facing };
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
    box(c, 0, -height, length, height, side === 1 ? '#668477' : '#789185');
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
    c.transform(1, 0.5, 0, 1, 0, 0);
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
  function blocks(f,x,y){return covers(f,x,y);}
  const api = { vectors, labels, direction, front, migrate, seatEntry, seat, cells, covers, blocks };
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
    if (
      !Array.isArray(v.stock) ||
      v.stock.length !== rules.productCount ||
      v.stock.some((n) => !Number.isSafeInteger(n) || n < 0)
    )
      throw Error('재고 데이터');
    if (!Number.isInteger(v.stage) || v.stage < 0 || v.stage > 5) throw Error('매장 단계');
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
        cells.has(f.x + ',' + f.y)
      )
        throw Error('가구 위치');
      if(f.dir!==undefined&&(!Number.isInteger(f.dir)||f.dir<0||f.dir>3))throw Error('가구 방향');
      seen.add(f.id);
      const span=1;
      if(f.x+span>size[0]||f.y+span>size[1])throw Error('가구 범위');
      for(let dy=0;dy<span;dy++)for(let dx=0;dx<span;dx++){const cell=(f.x+dx)+','+(f.y+dy);if(cells.has(cell))throw Error('가구 겹침');cells.add(cell);}
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
        (v.pendingOrders ?? []).length > rules.productCount
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
          ordered.has(o.product) ||
          !Number.isSafeInteger(o.quantity) ||
          o.quantity < 1 ||
          o.quantity > 1000000 ||
          !Number.isSafeInteger(o.dueDay) ||
          o.dueDay < 1 ||
          o.dueDay > s.day + 1
        )
          throw Error('입고 내용');
        ordered.add(o.product);
        return { ...o };
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
    s.staffPolicy = { reserve: policy.reserve, products: policy.products.map((p) => ({ enabled: p.enabled, quantity: p.quantity, at: p.at ?? null })) };
    s.showcase=null;
    s.drummerIntroduced=v.drummerIntroduced??false;
    if(typeof s.drummerIntroduced!=='boolean'||(s.drummerIntroduced&&!has('drums')))throw Error('드러머 첫 방문');
    if((furniture.some(f=>f.t>=6)||s.pendingOrders.some(o=>o.product===26))&&!has('drums'))throw Error('전자드럼 미해금');
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
    const featureKeys = ['staff','staff2','cabinet','rack2','drums','drumDemo','ad','cashier1','cashier2'];
    for (const field of ['featureNotices','newFeatures']) {
      const values = v[field] ?? [];
      if (!Array.isArray(values) || values.length > featureKeys.length || new Set(values).size !== values.length || values.some(k=>!featureKeys.includes(k) || !(k==='staff' ? (s.stage>=1 || has(k)) : k==='ad' ? s.stage>=3 : k==='cashier1' ? s.stage>=2 : k==='cashier2' ? s.stage>=3 : has(k)))) throw Error('새 기능 안내 데이터');
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
    s.saveVersion = VERSION;
    return s;
  }
  const api = {
    version: VERSION,
    decode,
    encode: (s) => JSON.stringify({ ...s, saveVersion: VERSION }),
    file: (s, version) =>
      JSON.stringify(
        {
          format: 'little-tone-save',
          appVersion: version,
          saveVersion: VERSION,
          state: { ...s, saveVersion: VERSION }
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
  DRUM_DEMO: 7
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
  width: 15,
  height: 12,
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
  }
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
 {id:7,key:'DRUM_DEMO',name:'전자드럼 시연 공간',cost:1200000,icon:'🥁',w:240,h:185}
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
const PeopleAtlasKeys=["assets/people-everyday-v310.webp","assets/people-regulars-v310.webp","assets/people-story-v310.webp","assets/people-special-v310.webp","assets/people-team-v310.webp","assets/drummer-v350.webp","assets/team-checkout-v3100.webp"];
const SpecialPeopleActors=Object.freeze({band:12,family:13,musician:14,child:15});
const PeopleFrames=[{"atlas":0,"rows":[[{"clip":[2,508,121,239],"anchor":0.5,"sourceHeight":239},{"clip":[127,508,121,239],"anchor":0.5,"sourceHeight":239},{"clip":[397,508,125,238],"anchor":0.5,"sourceHeight":238},{"clip":[127,508,121,239],"anchor":0.5,"sourceHeight":239}],[{"clip":[1042,258,122,241],"anchor":0.5,"sourceHeight":241},{"clip":[1427,258,117,240],"anchor":0.5,"sourceHeight":240},{"clip":[1168,258,127,240],"anchor":0.5,"sourceHeight":240},{"clip":[1427,258,117,240],"anchor":0.5,"sourceHeight":240}],[{"clip":[1299,258,124,240],"anchor":0.5,"sourceHeight":240},{"clip":[1548,258,124,239],"anchor":0.5,"sourceHeight":239},{"clip":[910,258,128,241],"anchor":0.5,"sourceHeight":241},{"clip":[1548,258,124,239],"anchor":0.5,"sourceHeight":239}]]},{"atlas":0,"rows":[[{"clip":[1395,2,150,247],"anchor":0.5,"sourceHeight":247},{"clip":[1239,2,152,247],"anchor":0.5,"sourceHeight":247},{"clip":[2,258,144,246],"anchor":0.5,"sourceHeight":246},{"clip":[1239,2,152,247],"anchor":0.5,"sourceHeight":247}],[{"clip":[840,2,138,248],"anchor":0.5,"sourceHeight":248},{"clip":[150,258,141,246],"anchor":0.5,"sourceHeight":246},{"clip":[452,258,152,245],"anchor":0.5,"sourceHeight":245},{"clip":[150,258,141,246],"anchor":0.5,"sourceHeight":246}],[{"clip":[758,258,148,244],"anchor":0.5,"sourceHeight":244},{"clip":[608,258,146,245],"anchor":0.5,"sourceHeight":245},{"clip":[295,258,153,245],"anchor":0.5,"sourceHeight":245},{"clip":[608,258,146,245],"anchor":0.5,"sourceHeight":245}]]},{"atlas":0,"rows":[[{"clip":[280,2,133,250],"anchor":0.5,"sourceHeight":250},{"clip":[140,2,136,250],"anchor":0.5,"sourceHeight":250},{"clip":[417,2,140,249],"anchor":0.5,"sourceHeight":249},{"clip":[140,2,136,250],"anchor":0.5,"sourceHeight":250}],[{"clip":[2,2,134,252],"anchor":0.5,"sourceHeight":252},{"clip":[982,2,132,248],"anchor":0.5,"sourceHeight":248},{"clip":[701,2,135,249],"anchor":0.5,"sourceHeight":249},{"clip":[982,2,132,248],"anchor":0.5,"sourceHeight":248}],[{"clip":[1549,2,126,247],"anchor":0.5,"sourceHeight":247},{"clip":[1118,2,117,248],"anchor":0.5,"sourceHeight":248},{"clip":[561,2,136,249],"anchor":0.5,"sourceHeight":249},{"clip":[1118,2,117,248],"anchor":0.5,"sourceHeight":248}]]},{"atlas":0,"rows":[[{"clip":[252,508,141,238],"anchor":0.5,"sourceHeight":238},{"clip":[672,508,137,235],"anchor":0.5,"sourceHeight":235},{"clip":[526,508,142,236],"anchor":0.5,"sourceHeight":236},{"clip":[672,508,137,235],"anchor":0.5,"sourceHeight":235}],[{"clip":[813,508,133,235],"anchor":0.5,"sourceHeight":235},{"clip":[1088,508,133,233],"anchor":0.5,"sourceHeight":233},{"clip":[1225,508,133,233],"anchor":0.5,"sourceHeight":233},{"clip":[1088,508,133,233],"anchor":0.5,"sourceHeight":233}],[{"clip":[1497,508,131,232],"anchor":0.5,"sourceHeight":232},{"clip":[1362,508,131,233],"anchor":0.5,"sourceHeight":233},{"clip":[950,508,134,233],"anchor":0.5,"sourceHeight":233},{"clip":[1362,508,131,233],"anchor":0.5,"sourceHeight":233}]]},{"atlas":1,"rows":[[{"clip":[1476,507,122,231],"anchor":0.5,"sourceHeight":231},{"clip":[1222,507,121,232],"anchor":0.5,"sourceHeight":232},{"clip":[830,507,123,233],"anchor":0.5,"sourceHeight":233},{"clip":[1222,507,121,232],"anchor":0.5,"sourceHeight":232}],[{"clip":[1096,507,122,232],"anchor":0.5,"sourceHeight":232},{"clip":[579,507,115,235],"anchor":0.5,"sourceHeight":235},{"clip":[698,507,128,233],"anchor":0.5,"sourceHeight":233},{"clip":[579,507,115,235],"anchor":0.5,"sourceHeight":235}],[{"clip":[1347,507,125,231],"anchor":0.5,"sourceHeight":231},{"clip":[957,507,135,232],"anchor":0.5,"sourceHeight":232},{"clip":[1602,507,136,230],"anchor":0.5,"sourceHeight":230},{"clip":[957,507,135,232],"anchor":0.5,"sourceHeight":232}]]},{"atlas":1,"rows":[[{"clip":[145,507,147,239],"anchor":0.5,"sourceHeight":239},{"clip":[1364,259,144,241],"anchor":0.5,"sourceHeight":241},{"clip":[1063,259,143,242],"anchor":0.5,"sourceHeight":242},{"clip":[1364,259,144,241],"anchor":0.5,"sourceHeight":241}],[{"clip":[2,507,139,240],"anchor":0.5,"sourceHeight":240},{"clip":[1120,2,146,247],"anchor":0.5,"sourceHeight":247},{"clip":[912,259,147,242],"anchor":0.5,"sourceHeight":242},{"clip":[1120,2,146,247],"anchor":0.5,"sourceHeight":247}],[{"clip":[1512,259,140,241],"anchor":0.5,"sourceHeight":241},{"clip":[439,507,136,237],"anchor":0.5,"sourceHeight":237},{"clip":[296,507,139,239],"anchor":0.5,"sourceHeight":239},{"clip":[439,507,136,237],"anchor":0.5,"sourceHeight":237}]]},{"atlas":1,"rows":[[{"clip":[2,2,135,253],"anchor":0.5,"sourceHeight":253},{"clip":[691,2,136,250],"anchor":0.5,"sourceHeight":250},{"clip":[831,2,142,249],"anchor":0.5,"sourceHeight":249},{"clip":[691,2,136,250],"anchor":0.5,"sourceHeight":250}],[{"clip":[417,2,129,251],"anchor":0.5,"sourceHeight":251},{"clip":[141,2,131,253],"anchor":0.5,"sourceHeight":253},{"clip":[276,2,137,252],"anchor":0.5,"sourceHeight":252},{"clip":[141,2,131,253],"anchor":0.5,"sourceHeight":253}],[{"clip":[1270,2,138,247],"anchor":0.5,"sourceHeight":247},{"clip":[977,2,139,249],"anchor":0.5,"sourceHeight":249},{"clip":[550,2,137,250],"anchor":0.5,"sourceHeight":250},{"clip":[977,2,139,249],"anchor":0.5,"sourceHeight":249}]]},{"atlas":1,"rows":[[{"clip":[1210,259,150,241],"anchor":0.5,"sourceHeight":241},{"clip":[2,259,145,244],"anchor":0.5,"sourceHeight":244},{"clip":[300,259,148,243],"anchor":0.5,"sourceHeight":243},{"clip":[2,259,145,244],"anchor":0.5,"sourceHeight":244}],[{"clip":[151,259,145,244],"anchor":0.5,"sourceHeight":244},{"clip":[1412,2,146,245],"anchor":0.5,"sourceHeight":245},{"clip":[452,259,146,243],"anchor":0.5,"sourceHeight":243},{"clip":[1412,2,146,245],"anchor":0.5,"sourceHeight":245}],[{"clip":[602,259,151,242],"anchor":0.5,"sourceHeight":242},{"clip":[1562,2,146,244],"anchor":0.5,"sourceHeight":244},{"clip":[757,259,151,242],"anchor":0.5,"sourceHeight":242},{"clip":[1562,2,146,244],"anchor":0.5,"sourceHeight":244}]]},{"atlas":2,"rows":[[{"clip":[358,1015,115,235],"anchor":0.5,"sourceHeight":235},{"clip":[241,1015,113,236],"anchor":0.5,"sourceHeight":236},{"clip":[591,1015,115,234],"anchor":0.5,"sourceHeight":234},{"clip":[241,1015,113,236],"anchor":0.5,"sourceHeight":236}],[{"clip":[826,1015,111,233],"anchor":0.5,"sourceHeight":233},{"clip":[477,1015,110,235],"anchor":0.5,"sourceHeight":235},{"clip":[710,1015,112,233],"anchor":0.5,"sourceHeight":233},{"clip":[477,1015,110,235],"anchor":0.5,"sourceHeight":235}],[{"clip":[736,770,124,238],"anchor":0.5,"sourceHeight":238},{"clip":[123,1015,114,236],"anchor":0.5,"sourceHeight":236},{"clip":[2,1015,117,236],"anchor":0.5,"sourceHeight":236},{"clip":[123,1015,114,236],"anchor":0.5,"sourceHeight":236}]]},{"atlas":2,"rows":[[{"clip":[153,770,146,240],"anchor":0.5,"sourceHeight":240},{"clip":[688,517,128,242],"anchor":0.5,"sourceHeight":242},{"clip":[2,770,147,241],"anchor":0.5,"sourceHeight":241},{"clip":[688,517,128,242],"anchor":0.5,"sourceHeight":242}],[{"clip":[303,770,143,240],"anchor":0.5,"sourceHeight":240},{"clip":[450,770,125,240],"anchor":0.5,"sourceHeight":240},{"clip":[864,770,143,237],"anchor":0.5,"sourceHeight":237},{"clip":[450,770,125,240],"anchor":0.5,"sourceHeight":240}],[{"clip":[526,517,158,242],"anchor":0.5,"sourceHeight":242},{"clip":[579,770,153,239],"anchor":0.5,"sourceHeight":239},{"clip":[820,517,154,241],"anchor":0.5,"sourceHeight":241},{"clip":[579,770,153,239],"anchor":0.5,"sourceHeight":239}]]},{"atlas":2,"rows":[[{"clip":[574,261,117,250],"anchor":0.5,"sourceHeight":250},{"clip":[816,261,114,250],"anchor":0.5,"sourceHeight":250},{"clip":[448,261,122,250],"anchor":0.5,"sourceHeight":250},{"clip":[816,261,114,250],"anchor":0.5,"sourceHeight":250}],[{"clip":[695,261,117,250],"anchor":0.5,"sourceHeight":250},{"clip":[271,517,114,249],"anchor":0.5,"sourceHeight":249},{"clip":[320,261,124,250],"anchor":0.5,"sourceHeight":250},{"clip":[271,517,114,249],"anchor":0.5,"sourceHeight":249}],[{"clip":[2,517,132,249],"anchor":0.5,"sourceHeight":249},{"clip":[138,517,129,249],"anchor":0.5,"sourceHeight":249},{"clip":[389,517,133,248],"anchor":0.5,"sourceHeight":248},{"clip":[138,517,129,249],"anchor":0.5,"sourceHeight":249}]]},{"atlas":2,"rows":[[{"clip":[283,2,140,254],"anchor":0.5,"sourceHeight":254},{"clip":[150,2,129,255],"anchor":0.5,"sourceHeight":255},{"clip":[2,2,144,255],"anchor":0.5,"sourceHeight":255},{"clip":[150,2,129,255],"anchor":0.5,"sourceHeight":255}],[{"clip":[720,2,131,253],"anchor":0.5,"sourceHeight":253},{"clip":[427,2,115,254],"anchor":0.5,"sourceHeight":254},{"clip":[165,261,151,251],"anchor":0.5,"sourceHeight":251},{"clip":[427,2,115,254],"anchor":0.5,"sourceHeight":254}],[{"clip":[546,2,170,253],"anchor":0.5,"sourceHeight":253},{"clip":[855,2,162,252],"anchor":0.5,"sourceHeight":252},{"clip":[2,261,159,252],"anchor":0.5,"sourceHeight":252},{"clip":[855,2,162,252],"anchor":0.5,"sourceHeight":252}]]},{"atlas":3,"rows":[[{"clip":[138,268,130,248],"anchor":0.5,"sourceHeight":248},{"clip":[272,268,127,248],"anchor":0.5,"sourceHeight":248},{"clip":[542,268,129,247],"anchor":0.5,"sourceHeight":247},{"clip":[272,268,127,248],"anchor":0.5,"sourceHeight":248}],[{"clip":[1551,2,127,249],"anchor":0.5,"sourceHeight":249},{"clip":[1419,2,128,249],"anchor":0.5,"sourceHeight":249},{"clip":[403,268,135,247],"anchor":0.5,"sourceHeight":247},{"clip":[1419,2,128,249],"anchor":0.5,"sourceHeight":249}],[{"clip":[675,268,129,247],"anchor":0.5,"sourceHeight":247},{"clip":[808,268,128,247],"anchor":0.5,"sourceHeight":247},{"clip":[2,268,132,248],"anchor":0.5,"sourceHeight":248},{"clip":[808,268,128,247],"anchor":0.5,"sourceHeight":247}]]},{"atlas":3,"rows":[[{"clip":[2,520,123,241],"anchor":0.5,"sourceHeight":241},{"clip":[940,268,119,244],"anchor":0.5,"sourceHeight":244},{"clip":[129,520,123,241],"anchor":0.5,"sourceHeight":241},{"clip":[940,268,119,244],"anchor":0.5,"sourceHeight":244}],[{"clip":[1338,268,126,242],"anchor":0.5,"sourceHeight":242},{"clip":[1468,268,119,242],"anchor":0.5,"sourceHeight":242},{"clip":[256,520,132,240],"anchor":0.5,"sourceHeight":240},{"clip":[1468,268,119,242],"anchor":0.5,"sourceHeight":242}],[{"clip":[1063,268,134,242],"anchor":0.5,"sourceHeight":242},{"clip":[1201,268,133,242],"anchor":0.5,"sourceHeight":242},{"clip":[1591,268,129,241],"anchor":0.5,"sourceHeight":241},{"clip":[1201,268,133,242],"anchor":0.5,"sourceHeight":242}]]},{"atlas":3,"rows":[[{"clip":[476,2,150,262],"anchor":0.5,"sourceHeight":262},{"clip":[321,2,151,262],"anchor":0.5,"sourceHeight":262},{"clip":[946,2,151,259],"anchor":0.5,"sourceHeight":259},{"clip":[321,2,151,262],"anchor":0.5,"sourceHeight":262}],[{"clip":[162,2,155,262],"anchor":0.5,"sourceHeight":262},{"clip":[2,2,156,262],"anchor":0.5,"sourceHeight":262},{"clip":[785,2,157,259],"anchor":0.5,"sourceHeight":259},{"clip":[2,2,156,262],"anchor":0.5,"sourceHeight":262}],[{"clip":[1101,2,157,258],"anchor":0.5,"sourceHeight":258},{"clip":[1262,2,153,257],"anchor":0.5,"sourceHeight":257},{"clip":[630,2,151,261],"anchor":0.5,"sourceHeight":261},{"clip":[1262,2,153,257],"anchor":0.5,"sourceHeight":257}]]},{"atlas":3,"rows":[[{"clip":[392,520,141,233],"anchor":0.5,"sourceHeight":233},{"clip":[537,520,138,231],"anchor":0.5,"sourceHeight":231},{"clip":[821,520,137,231],"anchor":0.5,"sourceHeight":231},{"clip":[537,520,138,231],"anchor":0.5,"sourceHeight":231}],[{"clip":[962,520,134,231],"anchor":0.5,"sourceHeight":231},{"clip":[679,520,138,231],"anchor":0.5,"sourceHeight":231},{"clip":[1100,520,137,230],"anchor":0.5,"sourceHeight":230},{"clip":[679,520,138,231],"anchor":0.5,"sourceHeight":231}],[{"clip":[1241,520,132,228],"anchor":0.5,"sourceHeight":228},{"clip":[1377,520,131,228],"anchor":0.5,"sourceHeight":228},{"clip":[1512,520,133,227],"anchor":0.5,"sourceHeight":227},{"clip":[1377,520,131,228],"anchor":0.5,"sourceHeight":228}]]},{"atlas":6,"rows":[[{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479}],[{"clip":[233,1013,210,478],"anchor":0.5,"sourceHeight":478},{"clip":[233,1013,210,478],"anchor":0.5,"sourceHeight":478},{"clip":[233,1013,210,478],"anchor":0.5,"sourceHeight":478},{"clip":[233,1013,210,478],"anchor":0.5,"sourceHeight":478}],[{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479}]]},{"atlas":4,"rows":[[{"clip":[591,630,144,304],"anchor":0.5,"sourceHeight":304},{"clip":[741,317,142,306],"anchor":0.5,"sourceHeight":306},{"clip":[440,630,147,304],"anchor":0.5,"sourceHeight":304},{"clip":[741,317,142,306],"anchor":0.5,"sourceHeight":306}],[{"clip":[296,630,140,305],"anchor":0.5,"sourceHeight":305},{"clip":[739,630,139,304],"anchor":0.5,"sourceHeight":304},{"clip":[151,630,141,305],"anchor":0.5,"sourceHeight":305},{"clip":[739,630,139,304],"anchor":0.5,"sourceHeight":304}],[{"clip":[446,317,146,307],"anchor":0.5,"sourceHeight":307},{"clip":[141,317,145,308],"anchor":0.5,"sourceHeight":308},{"clip":[2,630,145,305],"anchor":0.5,"sourceHeight":305},{"clip":[141,317,145,308],"anchor":0.5,"sourceHeight":308}]]},{"atlas":4,"rows":[[{"clip":[2,2,141,311],"anchor":0.5,"sourceHeight":311},{"clip":[733,2,136,309],"anchor":0.5,"sourceHeight":309},{"clip":[147,2,146,310],"anchor":0.5,"sourceHeight":310},{"clip":[733,2,136,309],"anchor":0.5,"sourceHeight":309}],[{"clip":[2,317,135,309],"anchor":0.5,"sourceHeight":309},{"clip":[592,2,137,309],"anchor":0.5,"sourceHeight":309},{"clip":[297,2,139,310],"anchor":0.5,"sourceHeight":310},{"clip":[592,2,137,309],"anchor":0.5,"sourceHeight":309}],[{"clip":[440,2,148,309],"anchor":0.5,"sourceHeight":309},{"clip":[596,317,141,307],"anchor":0.5,"sourceHeight":307},{"clip":[290,317,152,307],"anchor":0.5,"sourceHeight":307},{"clip":[596,317,141,307],"anchor":0.5,"sourceHeight":307}]]},{"atlas":6,"rows":[[{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500}],[{"clip":[227,509,220,499],"anchor":0.5,"sourceHeight":499},{"clip":[227,509,220,499],"anchor":0.5,"sourceHeight":499},{"clip":[227,509,220,499],"anchor":0.5,"sourceHeight":499},{"clip":[227,509,220,499],"anchor":0.5,"sourceHeight":499}],[{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500}]]},{"atlas":6,"rows":[[{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503}],[{"clip":[2,509,221,500],"anchor":0.5,"sourceHeight":500},{"clip":[2,509,221,500],"anchor":0.5,"sourceHeight":500},{"clip":[2,509,221,500],"anchor":0.5,"sourceHeight":500},{"clip":[2,509,221,500],"anchor":0.5,"sourceHeight":500}],[{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503}]]},{"atlas":5,"rows":[[{"clip":[365,2,196,400],"anchor":0.5,"sourceHeight":400},{"clip":[2,2,180,401],"anchor":0.5,"sourceHeight":401},{"clip":[565,2,200,397],"anchor":0.5,"sourceHeight":397},{"clip":[2,2,180,401],"anchor":0.5,"sourceHeight":401}],[{"clip":[769,2,223,396],"anchor":0.5,"sourceHeight":396},{"clip":[186,2,175,401],"anchor":0.5,"sourceHeight":401},{"clip":[996,2,214,395],"anchor":0.5,"sourceHeight":395},{"clip":[186,2,175,401],"anchor":0.5,"sourceHeight":401}],[{"clip":[1391,2,202,385],"anchor":0.5,"sourceHeight":385},{"clip":[1214,2,173,390],"anchor":0.5,"sourceHeight":390},{"clip":[1597,2,188,384],"anchor":0.5,"sourceHeight":384},{"clip":[1214,2,173,390],"anchor":0.5,"sourceHeight":390}]]}];


// SOURCE: data/team-v3100
// Complete isometric checkout poses. Column0 faces down-right, column1 faces up-right.
const CheckoutAtlasKey='assets/team-checkout-v3100.webp';
const checkoutAtlas=runtimeImage(CheckoutAtlasKey);
const CheckoutPoses={"16":[{"clip":[2,1013,227,479],"anchor":0.5,"sourceHeight":479},{"clip":[233,1013,210,478],"anchor":0.5,"sourceHeight":478}],"19":[{"clip":[221,2,230,500],"anchor":0.5,"sourceHeight":500},{"clip":[227,509,220,499],"anchor":0.5,"sourceHeight":499}],"20":[{"clip":[2,2,215,503],"anchor":0.5,"sourceHeight":503},{"clip":[2,509,221,500],"anchor":0.5,"sourceHeight":500}]};
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
  save();
  renderPanel();
  ui();
  toast('직원이 떠났어요. 채용 비용은 돌려받지 못해요');
  return true;
}
// Staff reorder displayed stock. The first hire covers entry products; the second reorders earlier
// and also reorders sold-out premium instruments through the normal next-day order.
function setStaffReserve(value) {
  const n = Number(value);
  if (!Number.isSafeInteger(n) || n < 0 || n > 1e12) return false;
  S.staffPolicy.reserve = n;
  save();
  return true;
}
function staffReorderAt(i) { return S.staffPolicy.products[i].at ?? (delayedProduct(i) ? 1 : Config.staff.entryReorderAt[Math.max(0,Math.min(1,S.staffHired-1))]); }
function setStaffProduct(i, enabled, quantity, at = S.staffPolicy.products[i]?.at ?? null) {
  if (!Number.isInteger(i) || !products[i] || typeof enabled !== 'boolean' || !Number.isSafeInteger(quantity) || quantity < 1 || quantity > 999 || (at !== null && (!Number.isSafeInteger(at) || at < 0 || at > 99))) return false;
  S.staffPolicy.products[i] = { enabled, quantity, at };
  save();
  return true;
}
function staffOrderPlan() {
  const level = Math.min(2, S.staffHired), plan = [];
  let cash = S.money;
  for (const i of displayedProductIds().map((i,index)=>({i,index})).sort((a,b)=>Number(S.stock[b.i]===0)-Number(S.stock[a.i]===0) || S.stock[a.i]-S.stock[b.i] || a.index-b.index).map(r=>r.i)) {
    const rule = S.staffPolicy.products[i];
    const quantity = rule.quantity, cost = products[i].cost * quantity;
    let reason = '';
    if (!level) reason = '직원 채용 필요';
    else if (!rule.enabled) reason = '자동 주문 꺼짐';
    else if (delayedProduct(i)) {
      if (level < 2) reason = '두 번째 직원 필요';
      else if (incomingQuantity(i) > 0) reason = '입고 대기 중';
      else if (S.stock[i] > staffReorderAt(i)) reason = '재고 충분';
    } else if (S.stock[i] > staffReorderAt(i)) reason = '재고 충분';
    const floor = Math.max(S.staffPolicy.reserve, setupReserve(-1) + settlementCushion());
    if (!reason && cash < cost + floor) reason = '최소 현금·정산비 보호';
    if (!reason && incomingQuantity(i) + quantity > 1000000) reason = '입고 수량 한도';
    if (!reason && !['prepare', 'open'].includes(S.phase)) reason = '다음 영업 준비 때 주문';
    if (!reason) cash -= cost;
    plan.push({ i, quantity, cost, ready: !reason, reason: reason || (delayedProduct(i) ? '예약 주문 · 내일 입고' : '자동 주문 · 즉시 입고') });
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
function furnitureUnlocked(t){return t===6?drumsUnlocked():t===7?drumsUnlocked()&&featureUnlocked('drumDemo'):true;}
function adUnlocked() {
  return S.stage >= Config.ad.minStage;
}
function adCost() {
  return Math.round(stageInfo().rent * Config.ad.rentMultiple);
}
function adMultiplier() {
  return S.adDay === S.day ? Config.ad.visitors : 1;
}
function bookAd() {
  if (!adUnlocked() || S.phase !== 'prepare' || S.adDay === S.day) return false;
  const cost = adCost();
  if (S.money < cost + setupReserve(-1) + settlementCushion()) {
    toast('광고비가 부족해요');
    return false;
  }
  S.money -= cost;
  S.expenses += cost;
  S.adDay = S.day;
  save();
  renderPanel();
  ui();
  Sound.play('place');
  toast('오늘 광고를 냈어요 · 방문 +' + Math.round((Config.ad.visitors - 1) * 100) + '%');
  return true;
}

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
  return Math.round(products[i].cost * (1 + Config.expressFee));
}
function incomingQuantity(i) {
  return S.pendingOrders.filter((o) => o.product === i).reduce((n, o) => n + o.quantity, 0);
}
function deliverOrders() {
  const arrived = S.pendingOrders.filter((o) => o.dueDay <= S.day);
  if (!arrived.length) return 0;
  S.pendingOrders = S.pendingOrders.filter((o) => o.dueDay > S.day);
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
    .map((o) => o.p.cost);
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
  const valid = input.value !== '' && Number.isSafeInteger(n) && n >= 1 && n <= 999;
  if (valid) setPurchaseQuantity(i, n);
  if (!valid && commit) { input.value = purchaseQuantity(i); toast('구매 수량은 1~999개로 입력해주세요'); }
  const row = input.closest('[data-product-row]');
  if (!row) return;
  const quantity = purchaseQuantity(i), total = products[i].cost * quantity;
  const signature=[quantity,valid,commit,S.money,setupReserve(-1),staffWage(),S.phase].join('|');
  if(row.dataset.quantityState===signature)return;row.dataset.quantityState=signature;
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
}
function orderProduct(i, express = false, staff = false, quantity = orderQuantity(i)) {
  if (!Number.isInteger(i) || !products[i] || !Number.isSafeInteger(quantity) || quantity < 1 || quantity > 999) return false;
  if (!productUnlocked(i)) {
    toast('매장을 확장하면 주문할 수 있어요');
    return false;
  }
  if (express && !delayedProduct(i)) return false;
  const p = products[i],
    n = quantity,
    cost = (express ? expressCost(i) : p.cost) * n;
  if (incomingQuantity(i) + n > 1000000) return false;
  if (S.money < cost + setupReserve(-1)) {
    toast('주문 자금이 ' + money(Math.ceil(cost + setupReserve(-1) - S.money)) + ' 부족해요 · 필수 가구 비용 포함');
    return false;
  }
  S.money -= cost;
  S.expenses += cost;
  if (delayedProduct(i) && !express) {
    const existing = S.pendingOrders.find((o) => o.product === i);
    if (existing) existing.quantity += n;
    else S.pendingOrders.push({ product: i, quantity: n, dueDay: S.day + 1 });
  } else { S.stock[i] += n; queueStaffRestock(i); }
  if (!staff) purchaseQuantities[i] = 1;
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
        ? '긴급주문 입고 · 수수료 ' + money(cost - p.cost * n)
        : delayedProduct(i)
          ? '내일 입고 예정'
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
 staff:['자동 주문 직원','2단계부터 채용비 50만 원·일급 3만 원. 입문 악기·이펙터·기타줄을 자동 주문해요. 관리 → 직원 관리에서 채용하세요.'],
 staff2:['두 번째 자동 주문 직원','중급 이상 상품도 다음 날 입고하도록 예약 주문해요.'],
 cabinet:['소품장 4칸','소품 진열장에서 최대 4종을 선택할 수 있어요.'],
 rack2:['기타 진열대 2칸','진열대의 악기 선택창에서 1번·2번 칸을 골라 진열하세요.'],
 drums:['전자드럼 판매','전자드럼을 주문하고 전용 진열대를 설치하세요. 밴드 드러머 리온이 찾아와요.'],
 drumDemo:['전자드럼 시연 공간','1×1칸의 시연 공간을 설치하면 드러머 리온이 앉아 연주해요. 시연은 판매 재고를 사용하지 않아요.'],
 ad:['하루 광고','오픈 준비 중 광고를 내면 그날 방문 손님이 늘어요.'],
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
 $('unlockHeading').textContent=stage==null?'새 운영 기능이 열렸어요':'매장 '+(stage+1)+'단계 · '+TierNames[stage]+' 해금';
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
  const wasRegular = isRegular(r),
    requests = S.requests.filter(
      (q) => !q.fulfilled && q.customerKey === p.customerKey && items.includes(q.product)
    );
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
      (preferred ? Config.affinity.preference : 0) +
      (requests.length ? Config.affinity.request : 0)
  );
  r.purchases++;
  r.spent += value;
  r.satisfaction = Math.min(100, r.satisfaction + gain);
  r.affinityGain += gain;
  r.stockoutStreak = 0;
  r.lastStockoutDay = 0;
  r.regular = wasRegular || r.satisfaction >= Config.affinity.regular;
  p.relationshipRecorded = true;
  for (const q of requests) {
    q.fulfilled = true;
    q.resolvedDay = S.day;
  }
  if (!wasRegular && r.regular) {
    log(r.name + '님이 단골이 되었어요 ♡');
    toast(r.name + '님의 감사 편지가 도착했어요 ♡ · 손님 관계에서 확인');
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
function rememberRequest(p, i, reason) {
  if (p.companion || !productUnlocked(i) || !['not_displayed', 'sold_out'].includes(reason))
    return null;
  recordVisit(p);
  let q = S.requests.find(
    (r) => r.customerKey === p.customerKey && r.product === i && !r.fulfilled
  );
  if (q) {
    if (q.lastDay !== S.day) q.count++;
    q.lastDay = S.day;
    q.reason = reason;
    return q;
  }
  if(S.requests.length>=40){const done=S.requests.findIndex(r=>r.fulfilled);if(done>=0)S.requests.splice(done,1);}
  if(S.requests.length>=512)return null;
  q = {
    id: S.nextRequestId++,
    customerKey: p.customerKey,
    customerName: p.name,
    product: i,
    reason,
    firstDay: S.day,
    lastDay: S.day,
    count: 1,
    fulfilled: false,
    resolvedDay: null
  };
  S.requests.push(q);

  return q;
}
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
 if (tab !== 'shop' || !$('management').open) return;
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
$('backupRestore').onclick = () => {
  if (importSaveData($('backupText').value)) { $('saveBackup').close(); toast('백업한 가게를 불러왔어요.'); }
  else if(!assetBusy)backupStatus('저장 내용을 확인해주세요. 현재 가게는 유지돼요.');
};
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


// SOURCE: core/state
// Persistent state; the versioned decoder also accepts old unversioned saves.
function fresh() {
  return {
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
    staffHired: 0,
    cashierHired: 0,
    featureNotices: [],
    newFeatures: [],
    staffPolicy: { reserve: 0, products: products.map((p, i) => ({ enabled: true, quantity: orderQuantity(i), at: null })) },
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
  stockStatus='all';stockFilter='all';instrumentFilter='all';furnitureView='purchase';relationshipFilter='all';
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
const instrumentAtlases = [0,1,2].map(n=>runtimeImage('assets/instruments-'+n+'-v340.webp'));
const drumFixtureAtlas = runtimeImage('assets/drum-fixtures-v350.webp');
const drumProductAtlas = runtimeImage('assets/drum-product-v350.webp');
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
function actorAssetKeys(actor){if([16,19,20].includes(actor))return [CheckoutAtlasKey];return [PeopleAtlasKeys[PeopleFrames[actor]?.atlas??0]];}
function furnitureAssetKeys(f){
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
  const keys=['assets/furniture.webp','assets/furniture-back.webp','assets/empty-rack-v7.webp','assets/empty-cabinet-v3.webp',...actors.flatMap(actorAssetKeys)];
  for(const i of [0,1,2])keys.push(...productAssetKeys(i));
  for(const f of state.furniture)keys.push(...furnitureAssetKeys(f));
  for(const p of state.guests??[]){if(Number.isInteger(p.product))keys.push(...productAssetKeys(p.product));for(const i of p.basket??[])keys.push(...productAssetKeys(i));}
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
    top = landscape ? 100 : view.w <= 650 ? 185 : 110,
    bottom = landscape ? 90 : view.w <= 650 ? 170 : 155;
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
  return '₩' + Math.round(n).toLocaleString('ko-KR');
}
function toast(s) {
  $('toast').textContent = s;
  $('toast').classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $('toast').classList.remove('show'), 3000);
}
function log(s) {
  $('activity').textContent = s;
}

function compactMoney(n) {
  return Math.abs(n) >= 10000
    ? (n / 10000).toLocaleString('ko-KR', { maximumFractionDigits: 1 }) + '만 원'
    : money(n);
}


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
function shopReady() {
  return (
    S.furniture.some(
      (f) =>
        [FurnitureId.GUITAR_RACK,6].includes(f.t) &&
        rackProducts(f).some((i) => productUnlocked(i)) &&
        near(f, ENTRY)
    ) && (['open','closing'].includes(S.phase) || !checkoutConflicts().length) && activeCheckouts().some((f) => near(f, ENTRY))
  );
}
function setupReserve(t) {
  return S.opened
    ? 0
    : [0, 1]
        .filter((kind) => kind !== t && !S.furniture.some((f) => f.t === kind || (kind===0 && f.t===6)) && !(kind===0 && t===6))
        .reduce((sum, kind) => sum + types[kind].cost, 0);
}
function canBuyFurniture(t) {
  return furnitureUnlocked(t) && (t!==1||checkoutStations().length<3) && S.money >= types[t].cost + setupReserve(t);
}
function blocked(x, y, fs = S.furniture) {
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
        if (!legal(p)) continue;
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
    fs.every((f,i)=>Furniture.cells(f).every(p=>p.x>=0&&p.y>=0&&p.x<N&&p.y<M&&!(p.x===ENTRY.x&&p.y===ENTRY.y)&&!fs.slice(i+1).some(q=>Furniture.covers(q,p.x,p.y)))) &&
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
    toast('접근 가능한 진열대와 계산대를 배치해주세요');
    return false;
  }
  if(!assetGate(criticalAssetKeys(),openShop))return false;
  deliverOrders();
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
  deliverOrders();
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
  if (S.phase !== 'prepare' || editing !== null || S.stage >= 5) return false;
  const next = Stages[S.stage + 1];
  if (S.totalSales < 10) {
    toast('누적 10개 판매 후 확장할 수 있어요');
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
  if (!S.introducedTiers.includes(S.stage) && !S.pendingIntroductions.includes(S.stage))
    S.pendingIntroductions.push(S.stage);
  S.expansionNotice = S.stage;
  if(S.stage===1)queueFeatureNotice('staff');
  if(S.stage===2)queueFeatureNotice('cashier1');
  if(S.stage===3){queueFeatureNotice('cashier2');queueFeatureNotice('ad');}
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
  if (S.day < 3 || S.specialDone || S.time < Config.daySeconds * (50 / 180)) return null;
  const cycle = (S.day - 3) % 5;
  if (cycle !== 0 && cycle !== 2) return null;
  return ['band', 'family', 'musician'][
    (Math.floor((S.day - 3) / 5) * 2 + (cycle === 2 ? 1 : 0)) % 3
  ];
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
  if (wanted !== null && !displayedProductIds().includes(wanted)) {
    rememberRequest(p, wanted, 'not_displayed');
    p.bubble = products[wanted].name + '도 있나요?';
    p.bubbleUntil = S.time + 4;
  }
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
        scale: 0.7,
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
  if (!customerCanAfford(p, p.product)) {
    if (p.basket.length) checkout(p);
    else leave(p, '예산보다 비싸네요. 다음에 다시 올게요.');
    return;
  }
  if (S.stock[p.product] <= 0) {
    p.stockout = true;
    rememberRequest(p, p.product, 'sold_out');
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
function advanceCustomer(p, dt) {
  // Keep the rendered feet on the same screen-axis route as the path planner.
  p.avoidX = p.avoidY = 0;
  Motion.advance(p, dt);
}
function update(dt) {
  if(assetBusy || gameplayBlocked())return;
  if (paused || editing !== null || !['open', 'closing'].includes(S.phase)) return;
  const clockDt = dt;
  updateStaffAnimation(dt);
  dt *= Config.guestPace;
  if (S.phase === 'open') {
    S.time = Math.min(Config.daySeconds, S.time + clockDt);
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
      p.facing = parent.facing;
      p.state = 'follow';
      const distance = Math.hypot(p.x - parent.x, p.y - parent.y);
      if (distance > 0.55) {
        p.path =
          path(p, { x: parent.x + 0.22, y: parent.y + 0.22 }) ??
          axisConnector(p, { x: parent.x + 0.22, y: parent.y + 0.22 });
        Motion.advance(p, dt);
      } else {
        p.path = [];
        p.moving = false;
        p.velocity = 0;
        p.animationWeight = (p.animationWeight ?? 0) * Math.exp(-dt * 18);
      }
      continue;
    }
    if (p.path.length) {
      advanceCustomer(p, dt);
      continue;
    }
    p.moving = false;
    p.velocity = 0;
    p.animationWeight = (p.animationWeight ?? 0) * Math.exp(-dt * 18);
    p.avoidX = (p.avoidX ?? 0) * Math.max(0, 1 - dt * 8);
    p.avoidY = (p.avoidY ?? 0) * Math.max(0, 1 - dt * 8);
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
      if (p.queueWait > 30 && S.phase === 'closing') leave(p);
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
          noteStockChange(i);
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
  const doorGoal = people.some((p) => Math.hypot(p.x - ENTRY.x, p.y - ENTRY.y) < 2.2) ? 1 : 0;
  doorOpen += (doorGoal - doorOpen) * Math.min(1, dt * 7);
  for (const f of floaters) {
    f.life -= dt;
    f.y -= dt * 14;
  }
  floaters = floaters.filter((f) => f.life > 0);
  if (S.phase === 'closing' && !people.length) settleDay();
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
function lowStockIds() {
  return displayedProductIds().filter((i) => S.stock[i] <= 2);
}
function noteStockChange(i) {
  if (!displayedProductIds().includes(i)) return;
  if (S.stock[i] === 0) toast(products[i].name + ' 품절 · 상품 주문에서 보충하세요');
  else if (S.stock[i] === 2) toast(products[i].name + ' 재고 2개 남았어요');
  ui();
}
function inventoryStatus(i) {
  return (
    (displayedProductIds().includes(i) ? '진열 중' : '미진열') +
    ' · ' +
    (S.stock[i] === 0 ? '품절' : S.stock[i] <= 2 ? '재고 부족' : '판매 준비') +
    (incomingQuantity(i) ? ' · 내일 입고 ' + incomingQuantity(i) + '개' : '')
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
function furnitureSprite(f) {
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
      rect: displayGroundRect(f, q, w, h)
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
      rect: displayGroundRect(f, q, ArtLayout.cabinetSize, ArtLayout.cabinetSize)
    };
  const cell=FurnitureClips[f.t][dir>=2?1:0];
  return {
    image: dir >= 2 && f.t !== FurnitureId.MONSTERA ? backAtlas : atlas,
    sx: cell[0],
    sy: cell[1],
    sw: cell[2],
    sh: cell[3],
    flip,
    rect: displayGroundRect(f, q, ArtLayout.furnitureSize[f.t], ArtLayout.furnitureSize[f.t])
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
    else {
      text(ids.map((i)=>products[i].name.split(' ')[0]).join(' · '), q.x, labelY, ids.length>1?7:8, '#684a31');
      const empty = ids.filter((i)=>S.stock[i]===0).length;
      if (empty) text(empty === ids.length ? '품절' : '일부 품절',q.x,q.y-60,9,'#bd5949');
    }
  }
  if (f.t === FurnitureId.ACCESSORY_CABINET && editing === null) {
    const all = shelfDisplay(f),
      empty = all.filter((s) => s.soldOut).length;
    if (!all.length) text('소품 선택', q.x, labelY, 8, '#6d7059');
    else if (empty) text(empty === all.length ? '품절' : '일부 품절', q.x, labelY, 8, '#aa4f3e');
  }
  ctx.restore();
}

// Cache only each furniture body; people, shadows, selection and labels retain their layers.
const furnitureBodyCache=new Map(),FurnitureCacheBudget=12*1024*1024;
let furnitureBodyBytes=0,furnitureBodyBuilds=0,furnitureBodyHits=0;
function furnitureImageKey(){return [...(typeof drumFixtureAtlas==='undefined'?[]:[drumFixtureAtlas]),atlas,backAtlas,rackAtlas,cabinetAtlas,accessoryAtlas,goodsAtlas,...(typeof instrumentAtlases==='undefined'?[]:instrumentAtlases)].map(im=>im.complete&&im.naturalWidth?im.naturalWidth:0).join(',');}
function paintFurnitureBodyDirect(c,f,sp=furnitureSprite(f)){
 if(f.t===FurnitureId.GUITAR_RACK||f.t===FurnitureId.ACCESSORY_CABINET){paintDisplayFurniture(c,f,sp);return;}
 if(!sp.image.complete||!sp.image.naturalWidth)return;
 c.save();if(sp.flip){c.translate(P(f.x,f.y).x*2,0);c.scale(-1,1);}
 c.drawImage(sp.image,sp.sx,sp.sy,sp.sw,sp.sh,sp.rect.x,sp.rect.y,sp.rect.w,sp.rect.h);c.restore();
}
function clearFurnitureBodyCache(){furnitureBodyCache.clear();furnitureBodyBytes=0;}
function furnitureBodyStats(){return {entries:furnitureBodyCache.size,bytes:furnitureBodyBytes,builds:furnitureBodyBuilds,hits:furnitureBodyHits,budget:FurnitureCacheBudget};}
function paintFurnitureBody(c,f,sp=furnitureSprite(f),resolution=2){
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
  const row = dir === 4 || dir === 6 ? 2 : dir === 2 || dir === 3 || dir === 7 ? 1 : 0,
    demoRow = row === 1 ? 1 : 0,
    frame = moving ? ((Math.floor(phase * 4) % 4) + 4) % 4 : 1;
  const entry = PeopleFrames[actor];
  if (!entry) throw new RangeError('Unknown character identity');
  const part = entry.rows[row][frame];
  return { image: peopleAtlases[entry.atlas], clip: part.clip, anchor: part.anchor, sourceHeight: part.sourceHeight, flip: dir === 1 || dir === 3 || dir === 6, frame, actor, dir };
}

function makeWalkFrame(actor, dir, frame = 0, moving = true) {
  return walkSprite(actor, dir, frame / 4, moving);
}
function drawFullCharacter(c, sprite, h = 77, phase = 0, moving = false) {
  const [sx, sy, sw, sh] = sprite.clip,
    k = h / (sprite.sourceHeight ?? sh),
    w = sw * k,
    dh = sh * k;
  c.save();
  if (sprite.flip) c.scale(-1, 1);
  // Tiny whole-body weight shift preserves the complete painted anatomy.
  const sway = moving ? Math.sin(phase * Math.PI * 2) * 0.35 : 0,
    bob = moving ? -Math.abs(Math.sin(phase * Math.PI * 2)) * 0.45 : 0;
  c.translate(sway, bob);
  if (sprite.exclude?.length) {
    c.beginPath();
    c.rect(-w * sprite.anchor, -dh, w, dh);
    for (const [x, y, ww, hh] of sprite.exclude)
      c.rect(-w * sprite.anchor + x * k, -dh + y * k, ww * k, hh * k);
    c.clip('evenodd');
  }
  c.drawImage(sprite.image, sx, sy, sw, sh, -w * sprite.anchor, -dh, w, dh);
  c.restore();
}
function drawWalkingSprite(c, actor, dir, phase, h = 77) {
  drawFullCharacter(c, walkSprite(actor, dir, phase, true), h, phase, true);
}
function teamFigureHeight(actor){return actor>=16&&actor<=20?ArtLayout.cashierHeight:ArtLayout.characterHeight;}
function drawPerson(p, cashier = false) {
  if(p.state==='try'&&products[p.product]?.family==='drums'&&p.drumsSeated===true&&!p.path?.length)return;
  const q = P(p.x + (p.avoidX ?? 0), p.y + (p.avoidY ?? 0));
  q.y -= p.elevation ?? 0;
  const actor = cashier ? (p.teamActor ?? 16) : visualActor(p),
    dir = p.facing ?? 0,
    scale = (p.scale ?? 1) * Config.characterScale,
    h = teamFigureHeight(actor);
  const walking = !!p.path?.length && !!p.moving;
  ellipse(q.x, q.y + 1, 11 * scale, 3.7 * scale, '#403b2528');
  ctx.save();
  ctx.translate(q.x, q.y);
  ctx.scale(scale, scale);
  const acousticDemo = p.state === 'try' && !walking && isInstrument(p.product);
  const frame = cashier && typeof checkoutSprite==='function' ? checkoutSprite(actor,dir) : walkSprite(actor, dir, p.gait ?? 0, walking, p.state === 'try' && !walking && !acousticDemo);
  if (frame.image.complete && frame.image.naturalWidth)
    drawFullCharacter(ctx, frame, h, walking ? p.gait : 0, walking);
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
  if (!cashier && p.bubble && (!p.path?.length || (p.bubbleUntil ?? 0) > S.time)) {
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
    const occupied = new Set(S.furniture.flatMap(f=>Furniture.cells(f).map(p=>p.x+','+p.y))), reachable = new Set(), queue = [];
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
  return figures.filter(p=>!people.some(q=>Math.hypot(p.x-q.x,p.y-q.y)<0.65));
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
   const next={...p,path:p.path.map(q=>({...q}))};Motion.advance(next,dt);
   const crowded=people.some(q=>Math.hypot(next.x-q.x,next.y-q.y)<.8)||workers.some(q=>q!==p&&Math.hypot(next.x-q.x,next.y-q.y)<.7);
   if(crowded){p.moving=false;p.velocity=0;p.wait+=dt;p.state='waiting';
    if(p.wait>4){p.path=[];p.targetId=null;p.state='blocked';p.routeCooldown=2;p.wait=0;}
   }else{Object.assign(p,next);p.wait=0;p.state=p.targetId!=null?'walking':'returning';}
  }
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
  Interior.backdrop(ctx, P, null, null, N, M);
  Interior.floor(ctx, P, editing !== null, N, M);
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
  const objects = [
    ...S.furniture.map((f) => ({ depth: f.x + f.y, draw: () => drawFurniture(f) })),
    ...shopTeamFigures().map((p) => ({ depth: p.x + p.y + 0.15, draw: () => drawPerson(p) })),
    ...people.map((p) => ({ depth: p.x + p.y + 0.15, draw: () => drawPerson(p) }))
  ];
  objects.sort((a, b) => a.depth - b.depth).forEach((o) => o.draw());
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
let stockFilter = 'all', instrumentFilter = 'all', furnitureView = 'purchase';
// Management sheets remain part of the game; opening and settlement use dedicated controls.
function setTab(t) {
  Sound.play('click');
  tab = t;
  selected = null;
  if (t === 'furniture') furnitureView = 'purchase';
  $('sheetLabel').textContent = {
    shop: '매장 운영',
    furniture: '가구',
    stock: '상품',
    report: '관리'
  }[t];
  if (!$('management').open) $('management').showModal();
  document
    .querySelectorAll('[data-tab]')
    .forEach((b) => b.classList.toggle('active', b.dataset.tab === t));
  renderPanel();
  $('management').scrollTop = 0;
}
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
  return `<div class="feature"><span class="tag">매장 ${S.stage + 1} / 6단계</span><h3>${st.name}</h3><p>${N}×${M}칸 · 동시 손님 ${st.capacity}명 · 하루 임대료 ${money(st.rent)}</p>${next ? `<button class="secondary" data-action="expandPreview" ${S.phase !== 'prepare' ? 'disabled' : ''}>다음 공간 살펴보기 · ${compactMoney(next.cost)}</button>` : '<p>우리 동네 음악 명소가 되었어요!</p>'}</div>`;
}
function guestUnlockInfo(p){
 const locked=p.tier>S.stage||!!(p.feature&&!featureUnlocked(p.feature));
 const introduced=p.feature==='drums'?S.drummerIntroduced:S.introducedTiers.includes(p.tier);
 return {locked,label:locked?(p.feature?'6단계 누적300개 판매 미션 보상으로 해금':p.tier+1+'단계 확장 시 등장'):introduced?'첫 만남 완료 · 계속 방문해요':'해금됨 · 다음 영업에 첫 방문 예정'};
}
function refreshGuestUnlocks(){
 for(const el of document.querySelectorAll('[data-guest-state]')){const p=CustomerProfiles.find(p=>p.actor===+el.dataset.guestState);if(!p)continue;const state=guestUnlockInfo(p);setLiveText(el,state.label);el.closest('.unlock-guest')?.querySelector('.guest-portrait')?.classList.toggle('silhouette',state.locked);}
}
function renderPanel() {
  $('management').classList.toggle('stock-sheet',tab==='stock');
  const scroll = $('management').scrollTop, opened = new Set(Array.from(document.querySelectorAll('#panel details[open][data-section]')).map((el) => el.dataset.section));
  let h = '';
  if (tab === 'furniture') {
    h = `<span class="eyebrow">MAKE IT YOURS</span><h2>나만의 공간을 만들어요</h2><p class="sub">가구 배치와 확장은 영업 준비 중에 가능해요.<br>기존 가구를 눌러 이동·회전·판매할 수 있어요.</p>${stockWarning()}${featureBadge('cabinet')}${featureBadge('rack2')}<div class="filter-bar"><button data-furniture-view="purchase" aria-pressed="${!selected && furnitureView === 'purchase'}">가구 구매</button><button data-furniture-view="placed" aria-pressed="${!!selected || furnitureView === 'placed'}">배치한 가구</button></div>`;
    if (S.phase === 'prepare')
      h += `<div class="setup-check"><b>오픈 준비</b><p>${S.furniture.some((f) => [FurnitureId.GUITAR_RACK,6].includes(f.t) && rackProducts(f).length) ? '✓' : '○'} 판매 악기 진열　${S.furniture.some((f) => f.t === FurnitureId.CHECKOUT) ? '✓' : '○'} 계산대</p><button class="primary" data-action="open" ${!shopReady() ? 'disabled' : ''}>가게 오픈 · 10:00</button><small>준비 중에는 시간과 임대료가 흐르지 않아요.</small></div>`;
    if (selected) {
      const f = S.furniture.find((f) => f.id === selected);
      if (f) {
        h += `<div class="feature"><h3>${types[f.t].name} 선택됨</h3><button class="primary" data-action="move" ${S.phase !== 'prepare' ? 'disabled' : ''}>가구 이동</button>${f.t !== FurnitureId.MONSTERA ? `<button class="secondary" data-action="rotate" ${S.phase !== 'prepare' ? 'disabled' : ''}>회전 ↻ · ${Furniture.labels[Furniture.direction(f)]}</button>` : ''}${(f.t !== FurnitureId.CHECKOUT || checkoutActor(f)===null) ? `<button class="secondary" data-action="sell" ${S.phase !== 'prepare' ? 'disabled' : ''}>판매 · ${money(Math.floor(types[f.t].cost * 0.5))}</button>` : ''}`;
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
        h += '</div>';
      }
    }
    if (!selected && furnitureView === 'placed') h += S.furniture.length ? S.furniture.map((f) => `<button class="placed-furniture" data-select-furniture="${f.id}">${types[f.t].name} · ${f.x + 1}, ${f.y + 1}<small>${escapeHTML(furnitureContents(f))}</small> <span>관리 ›</span></button>`).join('') : '<p class="sub">아직 배치한 가구가 없어요.</p>';
    if (!selected && furnitureView === 'purchase') h += types
      .map(
        (t, i) =>
          `<div class="item">${furnitureIcon(i)}<div class="item-info"><h3>${t.name}</h3><p>${['악기 최대 ' + rackLimit() + '종 선택 진열', '최대3개 · 기본 계산대는 사장 · 추가 계산대는 계산 직원 채용 필요', '공간을 채우는 앰프', '초록빛 매장 장식', '악기를 직접 연주하는 자리', '이펙터·기타줄 최대 ' + cabinetLimit() + '종 진열','전자드럼1종 · 1×1칸 · 판매 재고와 연동','전자드럼 시연 · 1×1칸 · 판매 재고 차감 없음'][i]}</p><strong>${money(t.cost)}</strong>${!furnitureUnlocked(i)?'<small>🔒 운영 미션 보상으로 해금</small>':''}<button data-build="${i}" ${S.phase !== 'prepare' || !canBuyFurniture(i) ? 'disabled' : ''}>배치 ＋</button></div></div>`
      )
      .join('');
  } else if (tab === 'stock') {
    h =
      '<h2 class="stock-heading">상품 주문</h2><p class="stock-intro">입문 즉시 · 중급 이상 내일 · 긴급주문 오늘(+20%)</p>';
    h += `<div class="filter-bar" aria-label="상품 종류">${[['all','전체'],['instrument','악기'],['effect','이펙터'],['strings','기타줄']].map(([key,label]) => `<button data-stock-filter="${key}" aria-pressed="${stockFilter === key}">${label}</button>`).join('')}</div>`;
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
    if (next < 6)
      h += `<details class="locked-catalog"><summary>다음 확장 · ${next + 1}단계 해금 상품 보기</summary>${productsAtStage(
        next
      )
        .map(({ p, i }) => productOrderCard(p, i))
        .join('')}</details>`;
  } else if (tab === 'report') {
    h = staffManagementShortcut()+`<span class="eyebrow">EVERY LITTLE PROGRESS</span><h2>${escapeHTML(S.shopName)} 운영 기록</h2>`;
    h += [
      ['매장 단계', S.stage + 1 + ' / 6'],
      ['오늘 수입', money(S.revenue + S.furnitureRevenue + S.missionRevenue)],
      ['오늘 지출', money(S.expenses)],
      ['오늘 수지', money(S.revenue + S.furnitureRevenue + S.missionRevenue - S.expenses)],
      ['오늘 방문', S.visitors + '명'],
      ['누적 판매', S.totalSales + '개'],
      ['누적 판매 매출', money(S.totalRevenue)],
      ['하루 임대료', money(stageInfo().rent)],
      ['하루 직원 일급', money(staffWage())]
    ]
      .map(([a, b],i) => `<div class="report-row"><span>${a}</span><b data-report-value="${i}">${b}</b></div>`)
      .join('');

    h += `<div class="note">영업 10:00~20:00 · 하루 약 2분<br>임대료와 직원 일급은 마감 정산 때 한 번 차감돼요.<br>정산은 현금 기준이에요. 주문비는 결제한 날 지출에 포함돼요.</div><button class="secondary" data-action="save">지금 저장하기</button><button class="secondary" data-action="title">타이틀로</button><button class="secondary" data-action="export">저장 백업 · 내려받기</button><button class="secondary" data-action="recover">이전 저장 복구</button><button class="secondary" data-action="import">파일 불러오기</button><button class="secondary" data-action="importCode">코드 붙여넣기 · 불러오기</button><button class="secondary" data-action="rename">가게 이름 변경</button><div class="audio-settings"><h3>사운드 설정</h3><label class="volume-row">배경음<input id="musicVolume" type="range" min="0" max="100" value="${Math.round(S.audio.music * 100)}"><output id="musicValue">${Math.round(S.audio.music * 100)}%</output></label><label class="volume-row">효과음<input id="effectsVolume" type="range" min="0" max="100" value="${Math.round(S.audio.effects * 100)}"><output id="effectsValue">${Math.round(S.audio.effects * 100)}%</output></label><button class="secondary" data-action="audio">${S.audio.muted ? '소리 켜기 ♪' : '전체 음소거'}</button></div>`;
  } else {
    h = `<span class="eyebrow">YOUR LITTLE MUSIC SHOP</span><h2>오늘도, 좋은 선율</h2><div id="missionPanel">${missionPanel()}</div><div id="hanaStoryPanel">${hanaStoryPanel()}</div>${endingGoalPanel()}${expansionCard()}${operationsPanel()}<details data-section="relationships"><summary>손님 관계·요청</summary><div id="relationshipPanel">${relationshipPanel()}</div></details><details data-section="visitors"><summary>손님과 만남</summary><div class="feature"><span class="tag">첫 확장 목표</span><h3>처음 열 번의 만남</h3><p>상품 10개 판매 후 확장 비용을 모으면 매장을 넓힐 수 있어요.</p><div class="progress"><i id="expansionSalesBar" style="width:${Math.min(100, (S.totalSales / 10) * 100)}%"></i></div><small id="expansionSales">${Math.min(10, S.totalSales)} / 10개 판매</small></div><div class="section-label">매장에 머무는 손님 <span id="guestCount">${people.length}명</span></div><div id="customerList"></div><div class="note">3일차부터 2~3일 간격으로 밴드 멤버·부모와 아이·거리 음악가가 찾아와요. 이펙터와 기타줄만 사러 오는 손님도 있어요.</div><div class="section-label">확장으로 만나는 손님</div><div class="customer-unlocks">${CustomerProfiles.filter(
      (p) => !p.mission
    )
      .map(
        (p) =>
          `<div class="unlock-guest"><div class="guest-portrait ${guestUnlockInfo(p).locked?'silhouette':''}" data-customer-art="${p.actor}"></div><div><b>${p.role}</b><p data-guest-state="${p.actor}">${guestUnlockInfo(p).label}</p></div></div>`
      )
      .join('')}</div></details>`;
  }
  const names = [['shop','매장'],['stock','상품'],['furniture','가구'],['report','관리']];
  $('panel').innerHTML = `<nav class="sheet-tabs" aria-label="관리 메뉴 전환">${names.map(([key,label]) => `<button data-panel-tab="${key}" aria-current="${tab === key ? 'page' : 'false'}">${label}</button>`).join('')}</nav>` + (tab === 'shop' ? '<div id="liveStockWarning">'+stockWarning()+'</div>' : '') + h;
  if(tab==='shop'){const mission=document.getElementById('missionPanel');if(mission)mission.dataset.structure=JSON.stringify([S.stage,S.claimedMissions]);}
  for (const el of document.querySelectorAll('#panel details[data-section]')) el.open = opened.has(el.dataset.section);
  $('management').scrollTop = scroll;
  if(S.phase==='prepare' && checkoutConflicts().length){
    const warning=document.createElement('div');warning.className='setup-check';warning.setAttribute('role','alert');
    warning.innerHTML='<b>계산대 앞 손님 칸이 겹쳐요</b><p>표시된 계산대의 위치나 방향을 바꿔주세요. 기존 가구와 직원은 그대로 유지돼요.</p>';
    for(const id of checkoutConflicts()){const button=document.createElement('button');button.textContent='계산대 #'+id+' 조정';button.onclick=()=>edit(1,id);warning.append(button);}
    $('panel').prepend(warning);
  }
  refreshStockVisibility();
  drawIcons();
  drawProductIcons();
  drawCustomerIcons();
  renderCustomers();
  const relation=document.querySelector('#panel details[data-section=relationships]');if(relation)relation.addEventListener('toggle',()=>{if(relation.open)refreshRelationships();});
}
function drawIcons() {
  document.querySelectorAll('[data-sprite]').forEach((el) => {
    if(!menuArtReady(el,furnitureAssetKeys({t:+el.dataset.sprite})))return;
    const c = document.createElement('canvas');
    c.width = 140;
    c.height = 110;
    el.innerHTML = '';
    el.append(c);
    const f = { t: +el.dataset.sprite, x: 0, y: 0, dir: 0, p: null },
      sp = furnitureSprite(f),
      k = Math.min(120 / sp.rect.w, 102 / sp.rect.h),
      cx = c.getContext('2d');
    cx.save();
    cx.translate((140 - sp.rect.w * k) / 2, 110 - sp.rect.h * k);
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
  });
}
function renderCustomers() {
  if ($('guestCount')) $('guestCount').textContent = people.length + '명';
  const el = $('customerList');
  if (!el || !$('management').open || tab!=='shop') return;
  const details=el.closest?.('details');if(details&&!details.open)return;
  const signature=JSON.stringify(people.slice(0,8).map(p=>[p.id,p.state,p.bought,p.product,p.name,p.special,isRegular(S.customerBook[p.customerKey])]));
  if(el.dataset.customerState===signature)return;el.dataset.customerState=signature;
  el.innerHTML = people.length
    ? people
        .filter((p) => !p.companion)
        .slice(0, 8)
        .map(
          (p) =>
            `<div class="customer"><div class="avatar" style="background:${p.color}20">${p.special ? '★' : p.actor % 2 ? '👩' : '🧑'}</div><div><b>${escapeHTML(p.name)}${p.special ? ' · 특별 손님' : isRegular(S.customerBook[p.customerKey]) ? ' · 단골 ♡' : '님'}</b><small>${products[p.product].name}</small></div><em>${{ browse: '구경 중', try: '시연 중', checkout: '계산 중', queue: '대기 중', leave: p.bought ? '구매 완료' : '퇴장 중' }[p.state] ?? ''}</em></div>`
        )
        .join('')
    : `<p class="sub">${S.phase === 'prepare' ? '준비가 끝나면 가게를 열어주세요.' : S.phase === 'open' ? '곧 손님이 찾아올 거예요.' : '오늘도 수고했어요.'}</p>`;
}
function productOrderCard(p,i){
 const unlocked=productUnlocked(i),n=purchaseQuantity(i),total=p.cost*n,short=Math.max(0,total+setupReserve(-1)-S.money);
 return `<div class="item product-order ${unlocked?'':'locked-product'}" data-product-row="${i}" ${unlocked&&!stockMatches(i)?'hidden':''}><div class="item-icon product-art" data-product-art="${i}"></div><div class="item-info"><h3>${p.name}</h3><p class="product-tier">${({electric:'일렉 기타',bass:'베이스',acoustic:'어쿠스틱',effect:'이펙터',strings:'기타줄',drums:'전자드럼'})[p.family]??p.tag} · ${TierNames[p.tier]}</p><p class="product-cost" aria-label="매입 ${money(p.cost)} 판매 ${money(p.price)}">매입 ${compactMoney(p.cost)} <span>판매 ${compactMoney(p.price)}</span></p><small class="inventory-status ${S.stock[i]<=2?'low':''}">${unlocked?'재고 '+S.stock[i]+' · 예정 '+incomingQuantity(i):'🔒 '+productLockReason(i)}</small></div>${unlocked?`<div class="order-actions"><div class="purchase-controls">${quantityControl(i)}<div class="order-total" aria-label="총 구매금액"><span>합계</span><strong>${money(total)}</strong></div><p class="closing-warning" ${closingShortfall(total)?'':'hidden'}>${closingWarning(total)}</p><p class="order-short" ${short?'':'hidden'}>${money(short)} 부족</p></div><button data-order="${i}" ${short?'disabled':''}>${delayedProduct(i)?'일반 주문':'구매'}</button>${delayedProduct(i)?`<button class="express" data-express="${i}" ${S.money<expressCost(i)*n+setupReserve(-1)?'disabled':''}>긴급주문 <span>${compactMoney(expressCost(i)*n)}</span></button>`:''}</div>`:''}</div>`;
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
function refreshLivePanel(){
 if(!$('management').open)return;
 refreshStockVisibility();refreshCheckoutStatuses();refreshEndingGoal();
 if(tab==='stock')for(const row of document.querySelectorAll('#panel .product-order:not(.locked-product)')){
 const i=+row.dataset.productRow,stock=row.querySelector('.inventory-status');setLiveText(stock,'재고 '+S.stock[i]+' · 예정 '+incomingQuantity(i));stock?.classList.toggle('low',S.stock[i]<=2);const input=row.querySelector('[data-quantity-input]');if(input)syncQuantityInput(input);
 }else if(tab==='report'){
 const values=[S.stage+1+' / 6',money(S.revenue+S.furnitureRevenue+S.missionRevenue),money(S.expenses),money(S.revenue+S.furnitureRevenue+S.missionRevenue-S.expenses),S.visitors+'명',S.totalSales+'개',money(S.totalRevenue),money(stageInfo().rent),money(staffWage())];
 for(const el of document.querySelectorAll('[data-report-value]'))setLiveText(el,values[+el.dataset.reportValue]);}
 const warning=document.getElementById('liveStockWarning');if(warning){const h=stockWarning();if(warning.dataset.content!==h){const expanded=warning.querySelector('details')?.open;warning.innerHTML=h;warning.dataset.content=h;const details=warning.querySelector('details');if(details)details.open=!!expanded;}}
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
function refreshMissionPanel() {
 if(tab!=='shop'||!$('management').open)return;
 const el=document.getElementById('missionPanel');if(!el)return;
 const key=JSON.stringify([S.stage,S.claimedMissions]);
 if(el.dataset.structure!==key){replaceLiveContent(el,missionPanel());el.dataset.structure=key;drawProductIcons(el);drawCustomerIcons(el);}
 for(const lane of ['growth','challenge']){
  const m=activeMission(lane);if(!m)continue;const status=missionStatus(m);
  status.goals.forEach((g,index)=>setLiveText(el.querySelector('[data-lane-goal="'+lane+':'+index+'"]'),Math.min(g.value,g.min)+' / '+g.min));
  const bar=el.querySelector('[data-lane-progress="'+lane+'"]');if(bar)bar.style.width=Math.min(100,status.progress*100)+'%';
  const button=el.querySelector('[data-claim-mission="'+m.id+'"]');if(button){button.disabled=!status.ready;setLiveText(button,status.ready?'미션 완료 · 보상 받기':'운영하며 목표를 달성해보세요');}
 }
 setLiveText(el.querySelector('[data-reputation-summary]'),'명성 '+S.rep.toFixed(1)+' / 100 · 추가 방문 +'+((visitorMultiplier()-1)*100).toFixed(1)+'%');
}
function operationsPanel() {
 const prepare=S.phase==='prepare';
 const ad=adUnlocked()?(S.adDay===S.day?'<span>오늘 광고 진행 중</span>':`<button data-ad="book" ${!prepare||S.money<adCost()+settlementCushion()+setupReserve(-1)?'disabled':''}>광고 내기 · ${money(adCost())}</button>`):'<span>매장 4단계에서 해금</span>';
 return `<section class="ops-card"><h3>운영 도구</h3>${staffManagementShortcut()}<div id="orderOperations">${featureBadge('staff')}${featureBadge('staff2')}</div><div id="cashierOperations">${featureBadge('cashier1')}${featureBadge('cashier2')}</div>${drumOperationsPanel()}<div class="ops-row" id="adOperations"><b>광고</b>${featureBadge('ad')}${ad}</div></section>`;
}

function drumOperationsPanel(){return `<div class="ops-row" id="drumOperations"><b>전자드럼</b>${featureBadge('drums')}${featureBadge('drumDemo')}<span>${drumsUnlocked()?'전자드럼 판매 가능 · 드러머 리온 방문':'6단계 누적300개 판매 미션 보상'}</span><small>매입400만 원 · 판매550만 원. 전용 진열대80만 원(1×1칸). 시연 공간120만 원(1×1칸)은 전자드럼3세트 판매 후 후속 미션 보상을 받으면 열려요.</small><div class="ops-actions"><button data-action="drumStock">전자드럼 주문</button><button data-action="furnTab">전용 가구 보기</button></div></div>`;}


// SOURCE: ui/hud
// HUD refresh.
function ui() {
  renderDirty = true;
  $('shopName').textContent = S.shopName;
  $('shopName').classList.toggle('long', Array.from(S.shopName).length > 8);
  document.title = S.shopName + ' · 악기점';
  updateSoundButton();
  const growth=activeMission('growth'),challenge=activeMission('challenge');
  function laneSummary(m,lane){const label=lane==='growth'?'성장':'도전';return m?label+' · '+(missionStatus(m).ready?'보상 받기':Math.round(missionStatus(m).progress*100)+'%'):label+' · '+(currentMission(lane)?'확장 후 시작':'완료');}
  $('questTitle').textContent=growth?.title??(currentMission('growth')?'새 목표는 매장 확장 후':'성장 목표 완료');
  $('questProgress').textContent=laneSummary(growth,'growth')+' / '+laneSummary(challenge,'challenge');
  $('money').textContent = compactMoney(S.money);
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
  if($('management').open&&tab==='shop')refreshGuestUnlocks();
  refreshMissionPanel();
  refreshHanaStory();
  const shortage = lowStockIds();
  $('stockAlert').hidden = !shortage.length || editing !== null;
  $('stockAlert').textContent = '재고 확인 ' + shortage.length + '종 · 상품 주문 ›';
  $('openTag').textContent =
    editing !== null
      ? '배치 중'
      : {
          prepare: '오픈 준비',
          open: paused ? '일시정지' : '영업 중',
          closing: '마감 중',
          settled: '영업 종료'
        }[S.phase];
  $('openShop').hidden = S.phase !== 'prepare' || editing !== null;
  $('openShop').disabled = !shopReady();
  $('pause').textContent = paused ? '▶' : 'Ⅱ';
  $('pause').setAttribute('aria-label', paused ? '계속하기' : '일시정지');
  $('pause').disabled = !['open', 'closing'].includes(S.phase);
  const expansionCount = $('expansionSales');
  if (expansionCount) expansionCount.textContent = Math.min(10, S.totalSales) + ' / 10개 판매';
  const expansionBar = $('expansionSalesBar');
  if (expansionBar) expansionBar.style.width = Math.min(100, (S.totalSales / 10) * 100) + '%';
  renderCustomers();
}


// SOURCE: ui/expansion
function expansionPreview() {
  if (S.stage >= 5) return;
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
    S.phase !== 'prepare' || S.money < next.cost + setupReserve(-1) || S.totalSales < 10;
  $('expansionRequirement').textContent =
    S.totalSales < 10
      ? '누적 10개 판매 후 확장할 수 있어요.'
      : '확장 후 보유 ' +
        money(S.money - next.cost) +
        ' · 권장 운영자금 ' +
        money(expansionReserve()) +
        ' (새 악기·기본 재고·임대료 3일분). 운영자금이 부족해도 확장은 선택할 수 있어요.';
  $('management').close();
  $('expansion').showModal();
}


// SOURCE: ui/relationships
let relationshipFilter='all';
function relationshipPanel() {
  const pending = S.requests.filter((q) => !q.fulfilled),
    sorted = [...S.requests].sort(
      (a, b) => Number(a.fulfilled) - Number(b.fulfilled) || b.lastDay - a.lastDay || b.id - a.id
    ),
    regular = regularCustomers();
  const requestCard = (q) => {
    const status = requestStatus(q);
    return `<div class="request-card"><div class="product-art" data-product-art="${q.product}"></div><div><b>${products[q.product].name}</b><p>${escapeHTML(q.customerName)} · ${q.lastDay}일차 · ${q.reason === 'sold_out' ? '품절 문의' : '진열 요청'}${q.count > 1 ? ' · ' + q.count + '회' : ''}</p><small class="request-status ${status.kind}">${status.label}</small>${!q.fulfilled ? `<div><button data-restock="${q.product}">상품 주문 보기</button><button data-action="furnTab">진열 관리</button></div>` : ''}</div></div>`;
  };
  return `<div class="journal"><h3>손님 요청 <small>${pending.length}건</small></h3>${sorted.length ? sorted.slice(0, 4).map(requestCard).join('') : '<p class="sub">손님이 찾는 상품이 없거나 품절이면 이곳에 요청을 남겨요.</p>'}${sorted.length > 4 ? `<details data-section="request-history"><summary>이전 요청 ${sorted.length - 4}건 보기</summary>${sorted.slice(4).map(requestCard).join('')}</details>` : ''}<details data-section="regular-list" class="regular-list" ${regular.length ? 'open' : ''}><summary>단골 손님 · ${regular.length}명</summary><p class="sub">호감도 100을 달성하면 단골이 돼요. 일반 구매 +5 · 중급 이상 구매 +8 · 선호 상품 +2 · 요청 해결 +3, 하루 최대 +10이에요.</p><div class="filter-bar" aria-label="손님 관계 분류">${[['all','전체'],['regular','단골'],['near','호감도 70 이상']].map(([key,label])=>`<button data-relationship-filter="${key}" aria-pressed="${relationshipFilter===key}">${label}</button>`).join('')}</div>${Object.values(
    S.customerBook
  )
    .filter((r) => r.visits > 0 && (relationshipFilter==='all'||relationshipFilter==='regular'&&isRegular(r)||relationshipFilter==='near'&&r.satisfaction>=70))
    .sort((a, b) => b.satisfaction-a.satisfaction || b.purchases-a.purchases)
    .map(
      (r) =>
        `<div class="unlock-guest"><div class="guest-portrait" data-customer-art="${r.actor}" data-customer-special="${r.key.startsWith('special-') ? r.key.slice(8) : ''}"></div><div><b>${escapeHTML(r.name)} · ${isRegular(r) ? '단골 ♡' : '방문 손님'}</b><p>방문 ${r.visits}회 · 구매 ${r.purchases}회 · 누적 ${compactMoney(r.spent)}</p><small>${TierNames[r.preferredTier]} · ${{ electric: '일렉 기타', bass: '베이스', acoustic: '어쿠스틱', effect: '이펙터', strings: '기타줄', drums: '전자드럼' }[r.favoriteFamily]} 선호 · 호감도 ${r.satisfaction} / 100</small><div class="affinity-track"><i style="width:${r.satisfaction}%"></i></div>${isRegular(r)?'<p class="regular-letter">“제 취향을 기억해주셔서 고마워요. 다음에도 여기서 악기를 고를게요.”</p>':''}</div></div>`
    )
    .join('')}</details></div>`;
}

let relationshipRenderKey = '';
function refreshRelationships() {
  if (
    tab !== 'shop' ||
    !$('management').open ||
    document.activeElement?.closest?.('#relationshipPanel')
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
      : '슬롯을 고르고 서로 다른 악기를 최대 ' + rackLimit() + '종 진열하세요. 재고는 창고에서 함께 관리해요.';
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
        `<div data-product-row="${i}" class="rack-choice ${chosen(i) ? 'chosen' : ''}"><div class="product-art" data-product-art="${i}"></div><div><b>${p.name}</b><p>${TierNames[p.tier]} · 판매 ${money(p.price)}</p><small class="picker-stock">${incomingQuantity(i) ? '내일 입고 ' + incomingQuantity(i) + '개 · ' : ''}${S.stock[i] > 0 ? '재고 ' + S.stock[i] + '개' : '재고 없음 · 선택 후 품절 표시'}</small>${quantityControl(i)}<p class="closing-warning" ${closingShortfall(p.cost*purchaseQuantity(i))?'':'hidden'}>${closingWarning(p.cost*purchaseQuantity(i))}</p><div class="rack-choice-actions"><button class="${chosen(i) && cabinet ? 'secondary' : 'primary'}" data-pick-product="${i}" aria-pressed="${chosen(i)}" ${cabinet && !chosen(i) && items.length >= cabinetLimit() || !cabinet && f[otherField] === i ? 'disabled' : ''}>${cabinet ? (chosen(i) ? '선택 해제' : '이 소품 진열') : chosen(i) ? '진열 중' : f[otherField] === i ? '다른 칸에 진열 중' : '이 악기 진열'}</button>${true ? `<button ${S.stock[i]!==0?'hidden':''} class="secondary" data-picker-order="${i}" ${S.money < products[i].cost * purchaseQuantity(i) + setupReserve(-1) ? 'disabled' : ''}>${purchaseQuantity(i)}개 주문 · ${money(products[i].cost * purchaseQuantity(i))}</button>` : ''}${delayedProduct(i) ? `<button ${S.stock[i]!==0?'hidden':''} class="secondary" data-picker-express="${i}" ${S.money < expressCost(i) * purchaseQuantity(i) + setupReserve(-1) ? 'disabled' : ''}>긴급주문 · ${money(expressCost(i) * purchaseQuantity(i))}</button>` : ''}</div></div></div>`
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
    const i = +b.dataset.quantity;
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
  setLiveText(row.querySelector('.picker-stock'),(n?'내일 입고 '+n+'개 · ':'')+(S.stock[i]>0?'재고 '+S.stock[i]+'개':'재고 없음 · 선택 후 품절 표시'));
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
  if (Furniture.cells(f).some(p=>p.x<0||p.y<0||p.x>=N||p.y>=M||fs.some(q=>Furniture.covers(q,p.x,p.y))||(p.x===ENTRY.x&&p.y===ENTRY.y))) {
    ok = false;
    reason = '빈 칸을 선택해주세요';
  } else if (f.t===FurnitureId.CHECKOUT && checkoutConflicts([...fs,f]).includes(f.id)) {
    ok=false; reason='계산대 앞 손님 칸이 겹쳐요. 위치나 방향을 바꿔주세요';
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
      !old && (editing === FurnitureId.GUITAR_RACK || editing === FurnitureId.ACCESSORY_CABINET),
    id = v.f.id;
  endEdit();
  Sound.play('place');
  toast('가구 배치를 완료했어요 ✓');
  if (picker) openRackPicker(id, true);
  return true;
}
function edit(t, id = null) {
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
        depth: f.x + f.y,
        distance: window.Picking.distance(local, sprite.rect, mask, radius)
      };
    })
  );
}
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
      setTab('furniture');
      selected = f.id;
      renderPanel();
    } else {
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
  if (!b || b.disabled) return;
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
    orderProduct(+b.dataset.order, false, false, purchaseQuantity(+b.dataset.order));
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
    case 'sell': {
      const f = S.furniture.find((f) => f.id === selected);
      if (f && (f.t !== FurnitureId.CHECKOUT || checkoutActor(f)===null) && S.phase === 'prepare' && editing===null) {
        const value = Math.floor(types[f.t].cost * 0.5);
        S.money += value;
        S.furnitureRevenue += value;
        S.furniture = S.furniture.filter((q) => q !== f);
        sceneCacheKey='';
        people = [];
        selected = null;
        save();
        renderPanel();
        ui();
        toast('가구를 판매했어요');
      }
      break;
    }
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
$('quest').onclick = () => setTab('shop');
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
function openHelp() {
  pausedBeforeHelp = paused;
  paused = true;
  $('pause').textContent = '▶';
  $('modal').showModal();
}
function closeHelp() {
  $('modal').close();
  paused = pausedBeforeHelp;
  $('pause').textContent = paused ? '▶' : 'Ⅱ';
  if (!S.opened) setTab('furniture');
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
    importSaveData(await file.text());
  } catch {
    toast('저장 파일을 읽을 수 없어요.');
  }
  e.target.value = '';
});

$('stockAlert').onclick = () => {stockStatus='all';stockFilter='all';setTab('stock');};
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
    openHelp();
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
let staffSettingsScope="displayed";
function staffPreviewHtml(rows = staffOrderPlan()) {
 return rows.length ? rows.map((row) => `<div class="staff-preview"><b>${products[row.i].name}</b><span>${row.quantity}개 · ${money(row.cost)}</span><small>${row.reason}</small></div>`).join('') : '<p>진열할 상품을 먼저 선택해주세요.</p>';
}
function renderStaffSettings() {
  const rows = staffOrderPlan();
  $('staffSettingsContent').innerHTML = `<p class="sub">진열 중인 상품만 자동 주문해요. 첫 직원은 입문 상품, 두 번째 직원은 중급 이상 악기를 예약 주문해요. 설정한 기준 재고 이하에서 품절부터 보충해요. 설정창에서는 영업이 잠시 멈춰요.</p><label class="reserve-field">주문 후 남겨둘 최소 현금 (원)<input id="staffReserve" type="number" inputmode="numeric" min="0" max="1000000000000" step="10000" value="${S.staffPolicy.reserve}"></label><p class="sub">임대료·급여·필수 가구 비용도 별도로 보호해요. 설정은 입력 후 다른 곳을 누르면 저장돼요.</p><h3>주문 예정</h3><p class="sub">현재 재고 기준이며, 실제 주문 전에 자금을 다시 확인해요.</p><div id="staffOrderPreview">${staffPreviewHtml(rows)}</div><h3>상품별 자동 주문</h3><div class="employee-tabs"><button data-staff-scope="displayed" aria-pressed="${staffSettingsScope==='displayed'}">진열 중</button><button data-staff-scope="all" aria-pressed="${staffSettingsScope==='all'}">해금 전체</button></div>${products.map((p, i) => ({p,i})).filter(({i}) => productUnlocked(i) && (staffSettingsScope==='all'||displayedProductIds().includes(i))).map(({p,i}) => `<div class="staff-product"><label><input type="checkbox" data-staff-enabled="${i}" ${S.staffPolicy.products[i].enabled ? 'checked' : ''}>${p.name}<small>재고 ${S.stock[i]} · 입고 ${incomingQuantity(i)}${displayedProductIds().includes(i)?'':' · 미진열'}</small></label><label>주문 수량<input type="number" inputmode="numeric" min="1" max="999" step="1" data-staff-quantity="${i}" aria-label="${p.name} 자동 주문 수량" value="${S.staffPolicy.products[i].quantity}"></label><label>주문 기준 재고<input type="number" inputmode="numeric" min="0" max="99" data-staff-at="${i}" aria-label="${p.name} 주문 기준 재고" value="${staffReorderAt(i)}"></label></div>`).join('')}`;
}
function openStaffSettings() {
  if (!staffSlots()) return false;
  staffSettingsScope='displayed';
  renderStaffSettings();
  $('staffSettings').showModal();
  return true;
}
$('closeStaffSettings').onclick = () => $('staffSettings').close();
function applyStaffSetting(e, commit) {
  const d = e.target.dataset;
  if (d.staffEnabled !== undefined && !commit) return;
  let ok = true;
  if (e.target.id === 'staffReserve') ok = e.target.value !== '' && setStaffReserve(e.target.value);
  else if (d.staffEnabled !== undefined) {
    const i = +d.staffEnabled;
    ok = setStaffProduct(i, e.target.checked, S.staffPolicy.products[i].quantity);
  } else if (d.staffQuantity !== undefined) {
    const i = +d.staffQuantity;
    ok = e.target.value !== '' && setStaffProduct(i, S.staffPolicy.products[i].enabled, Number(e.target.value));
  } else if(d.staffAt !== undefined) {
    const i=+d.staffAt,r=S.staffPolicy.products[i];
    ok=e.target.value!=='' && setStaffProduct(i,r.enabled,r.quantity,Number(e.target.value));
  } else return;
  if (!ok && commit) {
    if (e.target.id === 'staffReserve') e.target.value = S.staffPolicy.reserve;
    if (d.staffQuantity !== undefined) e.target.value = S.staffPolicy.products[+d.staffQuantity].quantity;
    if (d.staffAt !== undefined) e.target.value = staffReorderAt(+d.staffAt);
  }
  $('staffOrderPreview').innerHTML = staffPreviewHtml();
  if (commit) toast(ok ? '자동 주문 설정을 저장했어요' : '수량은 1~999개, 최소 현금은 0~1조 원으로 입력해주세요');
}
$('staffSettingsContent').addEventListener('input', (e) => applyStaffSetting(e, false));
$('staffSettingsContent').addEventListener('change', (e) => applyStaffSetting(e, true));

$('staffSettingsContent').addEventListener('click',e=>{const b=e.target.closest('[data-staff-scope]');if(b){staffSettingsScope=b.dataset.staffScope;renderStaffSettings();}});


// SOURCE: ui/staff-management
let employeeTab='inventory';
function staffManagementShortcut(){return `<section class="employee-shortcut"><div><b>직원 관리</b><small>재고 ${S.staffHired}명 · 계산 ${S.cashierHired}명 · 하루 ${money(staffWage())}</small></div><button data-action="staffManagement">직원 보기 ›</button></section>`;}
function employeeStatus(index){
 if(index>=S.staffHired)return '미채용';
 if(S.phase==='prepare')return '영업 준비';
 if(S.phase==='settled')return '업무 종료';
 const rows=staffOrderPlan().filter(r=>index===0?!delayedProduct(r.i):delayedProduct(r.i));
 if(rows.length && !rows.some(r=>r.ready)){const important=rows.find(r=>r.reason==='최소 현금·정산비 보호')??rows.find(r=>r.reason==='입고 대기 중')??rows.find(r=>r.reason==='자동 주문 꺼짐');if(important)return important.reason;}
 const p=staffTrips[index];
 return ({walking:'진열대로 이동 중',returning:'자리로 복귀 중',sorting:'진열 정리 중',waiting:'손님 통로 양보 중',blocked:'통로 막힘 · 연출 대기'})[p?.state]??'재고 확인 중';
}
function employeeCards(){
 const inventory=employeeTab==='inventory',count=inventory?S.staffHired:S.cashierHired,slots=inventory?staffSlots():cashierSlots();
 return [0,1].map(i=>{
  const active=i<count,unlocked=i<slots,cost=inventory?inventoryHireCost(i):Config.staff.hireCost,wage=inventory?inventoryDailyWage(i):Config.staff.wage;
  const counter=checkoutStations()[i+1];
  const title=(inventory?'재고 직원 ':'계산 직원 ')+(i+1),role=inventory?(i===0?'입문 악기 · 모든 이펙터·기타줄 자동 보충':'중급 이상 악기·전자드럼 일반 예약 주문'):('추가 계산대 '+(i+1)+' 전담');
  const locked=inventory?(i===0?'매장 2단계에서 해금':'5단계 운영 미션 보상으로 해금'):(i===0?'매장 3단계에서 해금':'매장 4단계에서 해금');
  const ready=S.phase==='prepare'&&editing===null;
  const canHire=ready&&unlocked&&i===count&&(inventory||!!counter)&&S.money>=cost+setupReserve(-1)+settlementCushion(wage);
  const state=active?(inventory?employeeStatus(i):counter?checkoutStatus(counter):'계산대 필요'):!unlocked?locked:i>count?'첫 번째 직원을 먼저 채용해주세요':!inventory&&!counter?'추가 계산대를 먼저 배치해주세요':'채용 가능';
  return `<article class="employee-card"><div class="guest-portrait" data-customer-art="${(inventory?17:19)+i}"></div><div class="employee-description"><h3>${title}</h3><p>${role}</p><p data-employee-status="${inventory?'inventory':'cashier'}:${i}">${escapeHTML(state)}</p><small>채용 ${compactMoney(cost)} · 일급 ${compactMoney(wage)}</small></div><div class="employee-actions">${active?`<button data-employee-action="dismiss" ${!ready||i!==count-1?'disabled':''}>퇴사</button>`:`<button data-employee-action="hire" ${canHire?'':'disabled'}>채용</button>`}</div></article>`;
 }).join('');
}
function renderStaffManagement(){
 $('staffManagementContent').innerHTML=`<div class="employee-payroll"><b>재고 ${S.staffHired}명 · 계산 ${S.cashierHired}명</b><span>하루 급여 합계 ${money(staffWage())}</span><small>마감 때 한 번 지급 · 채용·퇴사는 영업 준비 중에 가능</small></div><div class="employee-tabs" role="group" aria-label="직원 업무">${[['inventory','재고 직원'],['cashier','계산 직원']].map(([k,v])=>`<button data-employee-tab="${k}" aria-pressed="${employeeTab===k}">${v}</button>`).join('')}</div>${employeeCards()}${employeeTab==='inventory'?'<button class="primary" id="employeeOrderSettings">자동 주문 설정 ›</button><p class="sub">진열 중인 상품만 자동 주문해요. 이동과 정리는 연출이며 실제 입고·판매 시점에 영향을 주지 않아요.</p>':'<p class="sub">사장은 첫 계산대를 맡아요. 계산 직원은 추가 계산대에 설치 순서대로 배정되고 재고 보충 업무는 하지 않아요.</p>'}<p class="sub">퇴사 시 채용 비용은 반환되지 않아요.</p>`;
 drawCustomerIcons($('staffManagementContent'));
 if($('employeeOrderSettings'))$('employeeOrderSettings').onclick=openStaffSettings;
}
function openStaffManagement(kind){if(['inventory','cashier'].includes(kind))employeeTab=kind;renderStaffManagement();$('staffManagement').showModal();return true;}
function refreshStaffManagement(){
 if(!$('staffManagement').open)return;
 for(const el of document.querySelectorAll('[data-employee-status]')){
  const [kind,raw]=el.dataset.employeeStatus.split(':'),i=+raw;
  if(kind==='inventory'&&i<S.staffHired)setLiveText(el,employeeStatus(i));
  if(kind==='cashier'&&i<S.cashierHired){const f=checkoutStations()[i+1];if(f)setLiveText(el,checkoutStatus(f));}
 }
}
$('closeStaffManagement').onclick=()=>$('staffManagement').close();
$('staffManagementContent').addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b||b.disabled)return;
 if(b.dataset.employeeTab){employeeTab=b.dataset.employeeTab;renderStaffManagement();return;}
 if(b.dataset.employeeAction){const hire=b.dataset.employeeAction==='hire';const ok=employeeTab==='inventory'?(hire?hireStaff():dismissStaff()):(hire?hireCashier():dismissCashier());if(ok)renderStaffManagement();}
});


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


// SOURCE: core/loop
// Final initialization, frame scheduler and the small test/debug interface.

resizeShop();
ui();
showTitle();
let lastPaint=0,stationaryKey='',lastScenePaint=0,wasMenuCovered=false;
function gameplayBlocked(){return $('staffSettings').open || $('recoveryModal').open;}
function largeMenuOpen(){return ['management','rackPicker','saveBackup','staffSettings','staffManagement','unlockModal','expansion','modal','settlement','assetLoading','endingModal','recoveryModal'].some(id=>$(id).open);}
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
  Config,
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
  setStaffReserve,
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
  shopReady,
  makeWalkFrame,
  offers,
  shelfDisplay,
  walkSprite,
  drawFullCharacter,
  drawWalkingSprite,
  displayedProductIds,
  lowStockIds,
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
  PeopleAtlasKeys,
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
