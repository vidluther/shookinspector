# Webhooks.node

This is my attempt at building an app that acts like https://webhook.site, but it can be run locally and is built on NodeJS (Express)
and [Prisma](https://prisma.io).

## Why?

I needed a way to test sending calls to a Webhook, but the data I needed to send contains customer information, which I couldn't risk sending to a site that I do not own or control.

## Quick Start

1. Clone the repo
2. Copy the env.sample to .env
3. Edit the .env (set the port you want it to run on)
4. Edit the routes/index.js file and set whatever route/method you want
5. ```npm start```

Configure your app to send requests to http://localhost:9000 or whatever port you set in the .env file.