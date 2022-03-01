# Convey Take Home

## Getting Started

There is 2 ways to run the project, via docker or yarn. First, install dependencies within the root directory:

```bash
$ yarn
```

### Docker

Before proceeding make sure to have [Docker](https://docs.docker.com/install/) installed on your machine. We are using `docker-compose` to make it easier to start the necessary services, once you are ready run the following command to get started:

```bash
$ docker-compose up --build
```

### Yarn

Inside a new terminal window under `packages/frontend` directory run:

```bash
$ yarn start
```

Open another terminal window or tab and repeat under `packages/backend` directory.

## Project Overview

This is a [React](https://reactjs.org/) single page app built using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) with an [Express](https://expressjs.com/) backend.

> Ideally you would spend about four hours on this project. There are no real limits here, so finish at your leisure, however we want to be respectful of you time and would not want you spending more than four hours on this.

We have provided some bootstrap code for you to get you up and running, however feel free roll your own if you are more comfortable with that.

...project details here

## Project Structure

This project is laid out in a `monorepo` organizational style

```
project
├── README.md
├── node_modules
├── package.json
├── .gitignore
└──  packages
    ├── backend
    │   └── src
    └── frontend
        ├── public
        └── src
```
