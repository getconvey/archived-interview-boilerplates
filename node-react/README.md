# Convey Take Home

## Table of Contents

- [Getting Started](#getting-started)
- [Project Overview](#project-overview)
- [Project Structure](#project-structure)
- [Packages Included](#packages-included)
- [Available Scripts](#available-scripts)

## Getting Started

Before proceeding make sure to have [Docker](https://docs.docker.com/install/) installed on your machine. We are using `docker-compose` to make it easier to start the necessary services, once you are ready run the following command to get started:

```bash
$ docker-compose up --build
```

## Project Overview

This is a [React](https://reactjs.org/) single page app built using [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) with an [Express](https://expressjs.com/) backend.

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
    ├── backend
    │   └── src
    └── frontend
        ├── public
        └── src
```