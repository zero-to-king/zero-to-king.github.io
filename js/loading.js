// 花瓣飘落加载动画（清新风）
window.addEventListener('load', function() {
  const loading = document.getElementById('loading-box');
  if (loading) {
    setTimeout(() => {
      loading.style.opacity = '0';
      setTimeout(() => loading.remove(), 500);
    }, 800);
  }
});

// 生成花瓣元素
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = (Math.random() * 3 + 4) + 's';
  petal.style.opacity = Math.random() * 0.6 + 0.4;
  document.body.appendChild(petal);
  setTimeout(() => petal.remove(), 7000);
}

setInterval(createPetal, 400);
