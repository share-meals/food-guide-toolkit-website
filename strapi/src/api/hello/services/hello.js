'use strict';

/**
 * hello service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hello.hello');
