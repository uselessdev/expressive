# Express Boilerplate
> An experimental boilerplate for Express aplication.

![Code Style][ico-standard]
[![Software License][ico-license]](LICENSE)
[![Build Status][ico-travis]][link-travis]
[![Greenkeeper badge][ico-greenkeeper]](https://greenkeeper.io/)

[ico-greenkeeper]: https://badges.greenkeeper.io/uselessdev/expressive.svg?style=flat-square
[ico-standard]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/uselessdev/expressive/master.svg?style=flat-square
[link-travis]: https://travis-ci.org/uselessdev/expressive

## Running and up

``` bash
git clone git@github:uselessdev/expressive.git <your-app>
cd <your-app>
yarn # npm install
cp .env.example .env # You need te confire your database connection here
```

If you're using Docker and Docker Compose

``` bash
docker-compose up -d
```
Otherwise you need to run a database and configure it on `.env` or `config/database.js`

Common commands for knex migrations
``` bash
yarn migrate # npm run migrate
yarn seed # npm run seed
```

## Migrations and Seeds

To create migrations and seed we are using knex, but to avoid install globally and run locally it's
boring so we write an smaller npm scripts, so to create a migrate, instead to type this:

``` bash
./node_modules/.bin/knex migrate:make users
```

You can type this:

``` bash
yarn make:migrate -- users # npm run make:migrate -- users
```

Or you can install knex globally and run:

``` bash
knex migrate:make users
```

## CONTRIBUTING
[Contributing](CONTRIBUTING.md)

## CHANGELOG
[Changelog](CHANGELOG.md)

## LICENSE
[License](LICENSE)
