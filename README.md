# SIMPLE MERN CRUD

A simple records system using MongoDB, Express.js, VITE(React.js), and Node.js with real-time Create, Read, Update, and Delete operations. REST API was implemented on the back-end. Semantic UI React was used for the UI.

![Node Version](https://img.shields.io/badge/node-v16.16.0-yellowgreen.svg)
![NPM Version](https://img.shields.io/badge/npm-v8.11.0-blue.svg)
![MongoDB Version](https://img.shields.io/badge/mongodb-v6-blue.svg)
![Mongoose Version](https://img.shields.io/badge/mongoose-v6.6.3-blue.svg)
![Language: American English](https://img.shields.io/badge/language-american%20english-red.svg)

<!-- Demo: [https://mern-crud.herokuapp.com/](https://mern-crud.herokuapp.com/)

![MERN CRUD Screenshot](screenshot.png)

## Show Some :heart: :wave:
[![GitHub Stars](https://img.shields.io/github/stars/cefjoeii/mern-crud.svg?style=social&label=Star)](https://github.com/cefjoeii/mern-crud)
[![GitHub Forks](https://img.shields.io/github/forks/cefjoeii/mern-crud.svg?style=social&label=Fork)](https://github.com/cefjoeii/mern-crud/fork)
[![GitHub Watchers](https://img.shields.io/github/watchers/cefjoeii/mern-crud.svg?style=social&label=Watch)](https://github.com/cefjoeii/mern-crud)

[![Follow on GitHub](https://img.shields.io/github/followers/cefjoeii.svg?style=social&label=Follow)](https://github.com/cefjoeii)
[![Follow on Facebook](https://img.shields.io/badge/Follow%20%40cefjoeii%20on-Facebook-%233C5A99.svg)](https://facebook.com/cefjoeii)
[![Follow on Instagram](https://img.shields.io/badge/Follow%20%40cefjoeii%20on-Instagram-C13584.svg)](https://instagram.com/cefjoeii)
[![Follow on Twitter](https://img.shields.io/twitter/follow/cefjoeii.svg?style=social)](https://twitter.com/cefjoeii)

-->

## Instructions

Fork, then download or clone the repo.

```bash
git clone https://github.com/im-abhi/simple-mern-crud.git
```

_Make sure MongoDB service is running._

create a <code>.env</code> file and add following

```
MONGO_URI=mongodb://localhost/mern-crud
```

_MONGO_URI can be either a local database url or a cloud one._

<br />

For the **fornt-end**, install the dependencies once via the terminal.

```bash
yarn install
```

create a <code>.env.local</code> file and add following

```
VITE_BACKEND_BASE_URL=http://localhost:8000
```

Run the React _client_. It listens on port 5173.

```bash
yarn dev
```

View it on the browser.

<br>

To make a production build, simply run on _react-src_ folder via the terminal.

```bash
yarn build
```

<!-- It re-creates a folder named _public_ on the root directory. This is where the production-ready front-end of the web application resides. -->

<!-- ## Docker

```bash
docker-compose up
``` -->

<!-- ## Contribute

Feel free to help out as I may have other work/life commitments. See [CONTRIBUTING.md](CONTRIBUTING.md).

## To Do

- [x] Create
- [x] Read
- [x] Update
- [x] Delet
- [x] Real-time broadcast using Socket.io
- [x] Deploy in Heroku
- [x] Front-end validation (HTML) -->

## License

- [MIT](LICENSE)
