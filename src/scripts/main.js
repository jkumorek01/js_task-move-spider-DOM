'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  const wallSize = wall.getBoundingClientRect();

  const x = e.clientX - wallSize.left - spider.offsetWidth / 2;
  const y = e.clientY - wallSize.top - spider.offsetHeight / 2;

  const maxX = wall.clientWidth - spider.offsetWidth;
  const maxY = wall.clientHeight - spider.offsetHeight;

  const finalX = Math.max(0, Math.min(x, maxX));
  const finalY = Math.max(0, Math.min(y, maxY));

  spider.style.left = `${finalX}px`;
  spider.style.top = `${finalY}px`;
});
