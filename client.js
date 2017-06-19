const INPUTS = {
  test: 87 /* W */,
};

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

document.addEventListener('keydown', e => {
  if (e.keyCode === INPUTS.test) {
    sharedState.flag = true;
  }
});

document.addEventListener('keyup', e => {
  if (e.keyCode === INPUTS.test) {
    sharedState.flag = false;
  }
});

const helloworld = ctx => {
  ctx.font = '30px Arial';
  ctx[sharedState.flag ? 'fillText' : 'strokeText']('Hello World', 10, 50);
};

const showFps = (ctx, deltaTime) => {
  const fps = Math.round(1000 / deltaTime);

  ctx.font = '12px Arial';
  ctx.fillText(fps.toString(10), 5, 10);
};

const renderrer = (ctx, deltaTime) => {
  helloworld(ctx);
  showFps(ctx, deltaTime);
};

const render = (ctx, timestamp) => {
  const currentTime = new Date();

  const deltaTime = currentTime - timestamp;

  clear(ctx);

  renderrer(ctx, deltaTime);

  requestAnimationFrame(() => render(ctx, currentTime));
};

const init = () => {
  render(createCanvasDOM(), new Date());
};

init();
