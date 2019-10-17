const fs = require('fs');
const Koa = require('koa');
const koaBunyanLogger = require('koa-bunyan-logger');
const koaBody = require('koa-body');
const Router = require('koa-router');
const cors = require('@koa/cors');

const app = module.exports = new Koa();
const router = new Router();

async function loadData(filename, ctx, next) {
  ctx.log.info(`Handling a new request to load ${filename}`);
  const data = fs.readFileSync(`./data/${filename}.json`);
  ctx.status = 200;
  ctx.body = {result: 'ok', content: JSON.parse(data)};
  await next();
}

// TODO: use pattern route
router.get('/api/v1/templates', async (ctx, next) => {
  await loadData('templates', ctx, next)
});

router.get('/api/v1/serialization-types', async (ctx, next) => {
  await loadData('serialization-types', ctx, next);
});

router.get('/api/v1/event-types', async (ctx, next) => {
  await loadData('event-types', ctx, next);
});

router.get('/api/v1/keys', async (ctx, next) => {
  await loadData('keys', ctx, next);
});

app.use(koaBunyanLogger())
  .use(koaBody({
    jsonLimit: '1kb'
  }))
  .use(cors())
  .use(router.routes())
  .use(router.allowedMethods());

if (!module.parent) app.listen(4301);
