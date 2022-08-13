# Share Meals Food Guide Toolkit Website

## Introduction

At the start of the global pandemic, we developed an adhoc software architecture to bring up-to-date information about food assistance resources. At its peak, we served 80,000 New Yorkers per month. This is the Food Guides. We launched in NYC and later expanded to Alabama.

The need for trusted, updated information about food assistance is still needed. We've decided to upgrade our whole system to use high configurable microservices based on open source software. It's built on the pillars of transparency, collaboration, and service. We want to make the architecture available for other organizations to adopt.

This repo is not that architecture. Instead, The Share Meals Food Guide Toolkit Website (FTW) is full stack solution for organizations to discover, learn about, and adopt that architecture.

## Components

We use 3 major components:

1. postgres for storing our data
2. [Strapi](https://strapi.com) for a backend management GUI
3. [NextJS](https://nextjs.com) for the frontend

### The Twitch Experiment

Expanding on our emphasis on open source and community driven development, we are also streaming our coding sessions on Twitch! Feel free to drop by, comment, and contribute: [twitch.tv/sharemeals](https://twitch.tv/sharemeals)

### Google Docs Development Logs

During our Twitch streams, we also used a shared Google Drive to store diagrams, meeting notes, interview notes, and more. You can view them all [here](https://drive.google.com/drive/folders/1v4umtmkReNvD7yWjmauG4M5WVBVQ_1Pu?usp=sharing).

## Setup

First, make sure you have all the `.env` files setup. There are example files available:

1. `./.env.example`
2. `./strapi/.env.example`
3. `./nextjs/.env.example`

Second, run yarn in the strapi and nextjs directories.
1. `cd strapi; yarn;`
2. `cd nextjs; yarn;`

## Rapid Development

To speed up development before deploying to production, we recommend running Strapi and NextJS in development mode. This avoids building (and having to rebuild) images, which can slow down coding.

1. Launch the postgres container using docker: `sudo docker-compose up postgres`
2. Launch Strapi: `cd strapi; yarn develop`
3. Launch NextJS: `cd nextjs; yarn develop`

## Strapi Setup

When loading Strapi for the first time, you'll need to create a root user.

There are 2 Collection Types:

1. **Page** - These are public pages that are viewable by everyone through NextJS
2. **Toolkit Page** - These are only available to users after they have created an account through NextJS. This will let users keep track of their progress implementing the Toolkit.
