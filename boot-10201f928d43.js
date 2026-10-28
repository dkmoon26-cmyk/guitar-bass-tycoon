// Lightweight loader runs before the game. Progress counts images actually decoded.
(() => {
  const status = document.getElementById('loadingStatus');
  const progress = document.getElementById('loadingProgress');
  const error = document.getElementById('loadingError');
  const retry = document.getElementById('loadingRetry');
  let loaded = 0, failed = false;
  const entries = Object.entries(window.GameAssets);
  window.GamePreloadedImages = {};
  const loadImage = ([key, url]) => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = async () => {
      try {
        if (image.decode) await image.decode();
        if (failed) { resolve(); return; }
        window.GamePreloadedImages[key] = image;
        loaded++;
        progress.value = loaded;
        status.textContent = `이미지를 준비하고 있어요 · ${loaded} / ${entries.length}`;
        resolve();
      } catch { reject(new Error('이미지를 준비하지 못했어요.')); }
    };
    image.onerror = () => reject(new Error('이미지를 불러오지 못했어요.'));
    image.src = url;
  });
  retry.onclick = () => location.reload();
  async function start() {
    try {
      if (window.GameLoadFailed) throw new Error('화면 스타일을 불러오지 못했어요.');
      progress.max = entries.length;
      status.textContent = '가게 간판을 준비하고 있어요.';
      const title = entries.find(([key]) => key === 'assets/title-v1.webp');
      if (title) await loadImage(title);
      const queue = entries.filter(entry => entry !== title);
      await Promise.all(Array.from({length:3}, async () => {
        while (queue.length && !failed) await loadImage(queue.shift());
      }));
      status.textContent = '매장을 열 준비를 마무리하고 있어요.';
      await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = window.GameAppURL;
        script.onload = () => window.Game ? resolve() : reject(new Error('게임을 시작하지 못했어요.'));
        script.onerror = () => reject(new Error('게임 파일을 불러오지 못했어요.'));
        document.body.append(script);
      });
      document.getElementById('loadingScreen').remove();
      document.documentElement.removeAttribute('data-loading');
    } catch (e) {
      failed = true;
      error.hidden = false;
      error.textContent = (e.message || '준비 중 문제가 생겼어요.') + ' 연결을 확인한 뒤 다시 시도해주세요.';
      retry.hidden = false;
      status.textContent = '아직 가게를 열지 못했어요.';
    }
  }
  start();
})();
