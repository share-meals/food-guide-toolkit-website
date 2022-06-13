'use strict';

/**
 *  hello controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hello.hello');
