const cursorMain = document.querySelector('.cursor-main');
const cursorTrail = document.querySelector('.cursor-trail');

let mouseX = 0;
let mouseY = 0;
let trailX = 0;
let trailY = 0;

window.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  // メインカーソルは即座に追従
  cursorMain.style.top = mouseY + 'px';
  cursorMain.style.left = mouseX + 'px';
});

function animateTrail() {
  // トレイルカーソルはイージングで遅れて追従
  trailX += (mouseX - trailX) * 0.08; // ← 遅くしたいならさらに小さくしてもOK
  trailY += (mouseY - trailY) * 0.08;

  cursorTrail.style.top = trailY + 'px';
  cursorTrail.style.left = trailX + 'px';

  requestAnimationFrame(animateTrail);
}

animateTrail();
