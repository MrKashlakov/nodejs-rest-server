const logger = require('../logger');
const Items = require('../models/items');

module.exports = async (ctx, next) => {
  const itemsModel = new Items();
  try {
    ctx.body = await itemsModel.getAll();
    await next();
  } catch (err) {
    // handle business logic errors
    logger.error(err);
  }
};
