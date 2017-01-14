# Express Boilerplate

> An experimental boilerplate for Express aplication.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This is only *experimental boilerplate*.

## HOW TO USE

```bash
$ git clone git@github.com:uselessdev/express-boilerplate.git <your-app>
$ cd <your-app>
$ npm install
```

After this, copy .env.example to .env

```bash
$ cp .env.example .env
```

Change the the following env vars:

```bash
APP_LOCALE=your-locale
APP_SECRET=your-secret

SESSION_NAME=your-session-name
SESSION_SECRET=your-session-secret
```

## MongoDB

Connection need be configured on `config/database.js`

### Using docker-compose for MongoDB


```bash
$ docker exec -it app-mongodb [mongod, bash, mongo]
```

## CONTRIBUTING
[Contributing](CONTRIBUTING.md)

## CHANGELOG
[Changelog](CHANGELOG.md)

## LICENSE
[License](LICENSE)
