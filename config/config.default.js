/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1593434514987_4364';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    view: {
      mapping: {
        '.ejs': 'ejs',
      },
    },
    cluster: {
      listen: {
        path: '',
        port: 7000,
        hostname: '0.0.0.0',
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
