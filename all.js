document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    // 全画面オーバーレイ要素を取得
    const overlay = document.querySelector('.fullscreen-overlay');

    // 3秒後にフェードアウト
    setTimeout(function () {
        if (overlay) {
            overlay.style.transition = 'opacity 1s'; // フェードアウト時のトランジション
            overlay.style.opacity = '0'; // 透明にする
            setTimeout(function () {
                if (overlay && overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay); // DOMから削除
                }
            }, 1000); // トランジションが終わるまで待つ
        }
        body.style.overflow = 'visible'; // スクロールを無効化
    }, 5000);//5秒後にフェードアウト

    
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { // スクロール量が50pxを超えたら
        header.style.backgroundColor = 'rgba(19, 29, 124, 0.63)'; // 背景色を薄くする
    } else {
        header.style.backgroundColor = '#131e7c'; // 元の色に戻す
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
});
