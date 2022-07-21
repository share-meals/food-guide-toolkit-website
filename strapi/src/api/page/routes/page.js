'use strict';

/**
 * page router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;
const defaultRouter = createCoreRouter('api::page.page');

const customRouter = (
    innerRouter,
    routeOveride = [],
    extraRoutes = []
) => {
    let routes;

    return {
	get prefix(){
	    return innerRouter.prefix;
	},

	get routes(){
	    if(!routes){
		routes = innerRouter.routes;
	    }

	    const newRoutes = routes.map((route) => {
		let found = false;

		routeOveride.forEach((overide) => {
		    if(route.handler === overide.handler
		       && route.method === overide.method){
			found = overide;
		    }
		});

		return found || route;
	    });

	    return newRoutes.concat(extraRoutes);
	}
    };
};

const myOverideRoutes = [
    {
	method: 'GET',
	path: '/pages/:slug',
	handler: 'api::page.page.findOne'
    }
];

const myExtraRoutes = [];

module.exports = customRouter(defaultRouter, myOverideRoutes, myExtraRoutes);
