'use strict';

const config = require(`${__dirname}/../../config`);
const fs = require('fs');

const runyConfigPath = `${process.cwd()}/${config.configName}`;
const isRunyConfigExist = () => fs.existsSync(runyConfigPath);

module.exports = {
  isRunyConfigExist,
  runyConfig: (() => {
    return isRunyConfigExist() ? require(runyConfigPath) : {}
  })(),
};
