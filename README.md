# Express Boilerplate

> An experimental boilerplate for Express aplication.

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This is only *experimental boilerplate*.

## HOW TO USE

``` bash
$ git clone git@github.com:uselessdev/express-boilerplate.git <your-app>; cd <your-app>
$ npm install
```

## MongoDB

Connection need be configured on `config/database.js`

### Using docker-compose for MongoDB

``` bash
$ docker exec -it app-mongodb mongod
```

If you need to use the shell:

``` bash
$ docker exec -it app-mongodb bash
```

## CONTRIBUTING
[Contributing](CONTRIBUTING.md)

## CHANGELOG
[Changelog](CHANGELOG.md)
