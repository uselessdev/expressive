# Expressive

![Code Style][ico-standard]
[![Software License][ico-license]](LICENSE)
[![Codacy grade][ico-codacy]][link-codacy]

[ico-standard]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-codacy]: https://img.shields.io/codacy/grade/f0aebf53e061468d84718fbb3e1deabf.svg?style=flat-square
[link-codacy]: https://www.codacy.com/app/wallacebatistaoliveira/expressive/dashboard

## Running and up

``` bash
git clone git@github:uselessdev/expressive.git <your-app>
cd <your-app>
yarn # npm install
cp .env.example .env # You need te confire your database connection here
```
## Updates
Expressive no longer has database configurations, authentication and page rendering, is now a simple boilerplate that proposes a simpler structure to handle an API application.

## Project
```
├── app
│   ├── Authors
│   │   ├── controller.js
│   │   ├── index.js
│   │   ├── repository.js
│   │   └── routes.js
│   ├── Books
│   │   ├── controller.js
│   │   ├── index.js
│   │   ├── repository.js
│   │   ├── request.js
│   │   └── routes.js
│   ├── Home
│   │   ├── controller.js
│   │   ├── index.js
│   │   └── routes.js
│   └── Routes.js
├── bootstrap
│   └── app.js
├── config
│   └── app.js
├── LICENSE
├── package.json
├── README.md
├── server.js
├── tests
│   ├── books.test.js
│   └── index.test.js
└── yarn.lock
```


## LICENSE
[License](LICENSE)