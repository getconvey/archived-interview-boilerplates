# Convey Take Home

## Table of Contents

- [Getting Started](#getting-started)
- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Packages Included](#packages-included)
- [Available Scripts](#available-scripts)

## Getting Started

For you convenience we have provided two paths for getting started:

- **[Getting Started with Docker](#with-docker)**
- **[Getting Started with Lerna](#with-lerna)**

### With Docker

Before proceeding make sure to have [Docker](https://docs.docker.com/install/) installed on your machine. We are using `docker-compose` to make it easier to start the necessary services, once you are ready run the following command to get started:

```bash
$ docker-compose up --build
```

### With Lerna

Before proceeding make sure to have [Yarn](https://classic.yarnpkg.com/en/docs/getting-started) installed on your machine. We are using `lerna` to make it easier to start the necessary services, once you are ready run the following commands to get started:

```bash
$ yarn
$ yarn start
```

<br>

## Project Overview

This is a [React](https://reactjs.org/) single page app with a [GraphQL](https://graphql.org/) API leveraging [Express](https://expressjs.com/).

> Ideally you would spend about four hours on this project. There are no real limits here, so finish at your leisure, however we want to be respectful of you time and would not want you spending more than four hours on this.

We have provided a lot of bootstrap code for you to get you up and running, however feel free roll your own if you are more comfortable with that.

...project details here

<br>

## Project Structure

This project is laid out in a `monorepo` organizational style. We leverage `lerna` to help build processes across the different packages.

```
project
├── README.md
├── node_modules
├── package.json
├── .gitignore
└──  packages
    ├── api
    │   └── src
    └── app
        ├── config
        ├── scripts
        └── src
```

<br>

## Packages Included

We have included some default third-party libraries for you use, they are not required however. Do not hesitate to include any libraries or frameworks that you are more comfortable with.

- [Apollo Server Express](https://github.com/apollographql/apollo-server/tree/master/packages/apollo-server-express)
- [Apollo Client](https://www.apollographql.com/docs/react/get-started/)
- [Material-UI](https://material-ui.com/)
- [Testing Library](https://testing-library.com/)
- [Jest](https://jestjs.io/)

<br>

## Available Scripts

In the root of the project you can run:

```bash
$ yarn lint
```

Lints all the JavaScript code in the project

```bash
$ yarn lint:fix
```

Attempts to fix any linting errors

```bash
$ yarn start
```

Starts both the api and app development servers

```bash
$ yarn start:api
```

Starts both the api development server

```bash
$ yarn start:app
```

Starts both the app development server

```bash
$ yarn test
```

Runs the testing suite for each package

```bash
$ yarn test:coverage
```

Runs coverage reports for each package
