/* ============================================================
 * 秋青子欢迎页 · welcome.js
 * 仓库: a014108/y2
 * 站点: https://a014108.github.io/y2/
 * 由酒馆正则 loader 通过 GitHub Pages 加载执行。
 * ============================================================ */

(function () {
  'use strict';

  /* 1. 取当前楼层消息原文 */
  function getMessageText() {
    try {
      var arr = getChatMessages(getCurrentMessageId());
      if (arr && arr.length > 0 && arr[0] && typeof arr[0].message === 'string') {
        return arr[0].message;
      }
    } catch (e) {
      /* 取不到就交给上层兜底 */
    }
    return '';
  }

  /* 2. 从消息里抽出 ```html
<div id="qingzi-app">
  <div style="text-align:center;padding:24px;color:#8a8a8a;font-family:serif;letter-spacing:.1em">
    正在展开…
  </div>
</div>
<script>
(function () {
  /* GitHub Pages 直链：改 welcome.js 后刷新即生效 */
  var SRC = 'https://a014108.github.io/y2/welcome.js';

  var app = document.getElementById('qingzi-app');
  if (!app) return;

  /* 兜底：脚本没加载上或渲染失败时给提示，别让页面一直白着 */
  var timer = setTimeout(function () {
    if (app.querySelector('.qingzi-fallback') === null && app.querySelector('.letter') === null) {
      app.innerHTML =
        '<div class="qingzi-fallback" style="text-align:center;padding:24px;color:#b05;">' +
        '界面加载超时，检查网络或仓库是否已部署</div>';
    }
  }, 8000);

  var s = document.createElement('script');
  s.src = SRC;
  s.onload = function () { clearTimeout(timer); };
  s.onerror = function () {
    clearTimeout(timer);
    app.innerHTML =
      '<div class="qingzi-fallback" style="text-align:center;padding:24px;color:#b05;">' +
      '界面加载失败，检查网络或仓库地址</div>';
  };
  document.body.appendChild(s);
})();
</script>

