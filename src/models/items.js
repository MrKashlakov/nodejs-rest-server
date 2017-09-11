const fs = require('fs');
const util = require('util');
const config = require('config');

const readFile = util.promisify(fs.readFile);

/**
 * Items model
 */
class Items {
  /**
   * Default constructor
   */
  constructor() {
    this.dataSourcePath = config.get('data-source.file-path');
    this.items = null;
  }

  /**
   * Get all items from data source
   *
   * @return {Promise.<Object[]>}
   */
  async getAll() {
    return this.loadData();
  }

  /**
   * Loading data from data source
   *
   * @return {Promise.<Object[]>}
   * @private
   */
  async loadData() {
    if (!this.items) {
      const data = await readFile(this.dataSourcePath);
      this.items = JSON.parse(data);
    }

    return this.items;
  }
}

module.exports = Items;
