'use strict';

document.addEventListener('click', (e) => {
  const target = e.target;
  const [mouseX, mouseY] = [e.pageX, e.pageY];

  if (target !== document.querySelector('.wall')) {
    return;
  }

  const spider = document.querySelector('.spider');
  const spiderRect = spider.getBoundingClientRect();
  const [spiderWidth, spiderHeight] = [spiderRect.width, spiderRect.height];

  const [targetLeftOut, targetTopOut, clLeft, clTop] = [
    target.offsetLeft,
    target.offsetTop,
    target.clientLeft,
    target.clientTop,
  ];

  let leftX = mouseX - targetLeftOut - clLeft;
  let topY = mouseY - targetTopOut - clTop;

  leftX = Math.min(
    Math.max(leftX, spiderWidth / 2),
    target.clientWidth - spiderWidth / 2,
  );

  topY = Math.min(
    Math.max(topY, spiderHeight / 2),
    target.clientHeight - spiderHeight / 2,
  );

  spider.style.left = leftX + 'px';
  spider.style.top = topY + 'px';

  spider.style.transform = 'translate(-50%, -50%)';
});
