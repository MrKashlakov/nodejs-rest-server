const router = require('koa-router')();
const itemsController = require('./controllers/items');

router.get('/', itemsController);

module.exports = router.routes();
