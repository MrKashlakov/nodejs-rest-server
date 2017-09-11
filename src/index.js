const Koa = require('koa2');
const routes = require('./routes');
const config = require('config');
const logger = require('./logger');

const app = new Koa();

const applicationPort = config.get('application.port');

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    // handle global application errors. Warning: not handle business logic errors at this place
    err.status = err.statusCode || 500;
    throw err;
  }
});

app.use(async (ctx, next) => {
  const { request } = ctx;
  logger.info(`Start processing request: ${request.method} ${request.url}`);
  logger.profile('request');
  await next();
});

// Enable all routes to server
app.use(routes);

app.use(async () => {
  logger.profile('request');
  logger.info('Request end');
});

app.listen(applicationPort, () => logger.info(`Server started at port: ${applicationPort}`));

