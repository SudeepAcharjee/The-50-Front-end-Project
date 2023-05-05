const cursorInit = () => {
  const cursor = document.querySelector('.cursor-outer');
  const targets = document.querySelectorAll([
    'a',
    '.btn',
    "[type='button']",
    'input',
    'textarea',
  ]);

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });

  targets.forEach((item) => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('link-hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('link-hover');
    });
  });
};

export default cursorInit;
