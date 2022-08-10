# Share Meals Food Guide Toolkit Website


## Setup

First, make sure you have all the `.env` files setup. There are examples available:

1. `./.env.example`
2. `./strapi/.env.example`
3. `./nextjs/.env.example`

Second, run yarn in the strapi and nextjs directories.
1. `cd strapi; yarn;`
2. `cd nextjs; yarn;`

To run Strapi in detached mode, first make sure PM2 is installed on your system

`yarn global add pm2`

## Rapid Development

To speed up development before deploying to production, we recommend running Strapi and NextJS in development mode. This avoids building (and having to rebuild) images, which can slow down coding.

1. Still launch the postgres container: `sudo docker-compose up postgres`
2. Launch Strapi: `cd strapi; yarn develop`
3. Launch NextJS: `cd nextjs; yarn develop`

To deactivate the SEO slug generator in Strapi
1. Go into `Content-Type Builder`.
2. Choose which COLLECTION TYPE you would like to edit.
3. In the top right, click on `Configure View`.
4. In the Displayed Fields look for the SLUG field and click on the pencil to edit.
5. Set `Editable Field` to FALSE.