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
  trailX += (mouseX - trailX) * 0.05; // 0.1は追従スピード（小さいほど遅れる）
  trailY += (mouseY - trailY) * 0.1;

  cursorTrail.style.top = trailY + 'px';
  cursorTrail.style.left = trailX + 'px';

  requestAnimationFrame(animateTrail);
}

animateTrail();
document.addEventListener("DOMContentLoaded", () => {
  const text = "クリエイティブで、価値をデザインする。";
  const subtitleEl = document.getElementById("subtitle");

  const mid = Math.floor(text.length / 2);
  let left = mid - 1;
  let right = mid;
  
  function reveal() {
    if (left >= 0) {
      subtitleEl.textContent = text[left] + subtitleEl.textContent;
      left--;
    }
    if (right < text.length) {
      subtitleEl.textContent = subtitleEl.textContent + text[right];
      right++;
    }
    if (left >= 0 || right < text.length) {
      setTimeout(reveal, 150); // ← 速度調整
    }
  }

  reveal();
});
