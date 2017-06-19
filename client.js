const createCanvasDOM = () => {
  const canvas = document.createElement('canvas');

  canvas.style.width = '100%';
  canvas.style.height = '100%';

  document.querySelector('html').style.height = '100%';
  document.body.style.height = '100%';
  document.body.style.margin = 0;
  document.body.appendChild(canvas);

  return canvas.getContext('2d');
};

const clear = ctx => {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

const sharedState = {
  flag: false,
};

setInterval(() => (sharedState.flag = !sharedState.flag), 1000);

const helloworld = ctx => {
  ctx.font = '30px Arial';
  ctx[sharedState.flag ? 'fillText' : 'strokeText']('Hello World', 10, 50);
};

const render = ctx => {
  clear(ctx);

  helloworld(ctx);

  requestAnimationFrame(() => render(ctx));
};

const init = () => {
  render(createCanvasDOM());
};

init();
