document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('main-nav');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('active');
  });

  // Typing effect
  const words = ['Web Developer', 'Designer', 'Dreamer', 'Star Gazer'];
  let wIndex = 0, cIndex = 0, typing = true;
  const span = document.querySelector('.typing-text span');

  function type() {
    if (cIndex <= words[wIndex].length && typing) {
      span.textContent = words[wIndex].slice(0, cIndex);
      cIndex++;
      setTimeout(type, 120);
    } else {
      typing = false;
      setTimeout(erase, 900);
    }
  }
  function erase() {
    if (cIndex >= 0 && !typing) {
      span.textContent = words[wIndex].slice(0, cIndex);
      cIndex--;
      setTimeout(erase, 70);
    } else {
      typing = true;
      wIndex = (wIndex + 1) % words.length;
      setTimeout(type, 250);
    }
  }
  type();
});
