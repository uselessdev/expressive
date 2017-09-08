# Express Boilerplate
> An experimental boilerplate for Express aplication.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Running and up

``` bash
git clone git@github:uselessdev/expressive.git <your-app>
cd <your-app>
yarn # npm install
```

If you're using Docker and Docker Compose

``` bash
cp .env.example .env # You need te confire your database connection here
docker-compose up -d
yarn migrate # npm run migrate
yarn seed # npm run seed
```

Otherwise you need to run a database and configure it on `.env` or `config/database.js`

## CONTRIBUTING
[Contributing](CONTRIBUTING.md)

## CHANGELOG
[Changelog](CHANGELOG.md)

## LICENSE
[License](LICENSE)
