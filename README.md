# Share Meals Food Guide Toolkit Website


## Setup

First, make sure you have all the `.env` files setup. There are examples available:

1. `./.env.example`
2. `./strapi/.env.example`
3. `./nextjs/.env.example`

## Rapid Development

To speed up development before deploying to production, we recommend running Strapi and NextJS in development mode. This avoids building (and having to rebuild) images, which can slow down coding.

1. Still launch the postgres container: `sudo docker-compose up postgres`
2. Launch Strapi: `cd strapi; yarn develop`
3. Launch NextJS: `cd nextjs; yarn develop`
