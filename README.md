# [Vue Light Bootstrap Dashboard](http://vuejs.creative-tim.com/vue-light-bootstrap-dashboard) [![version][version-badge]][CHANGELOG] [![license][license-badge]][LICENSE]

> Admin dashboard based on light bootstrap dashboard UI template + vue-router

This project is a vue version of [Light bootstrap dashboard](https://www.creative-tim.com/product/light-bootstrap-dashboard)
designed for vue js. The dashboard includes Bootstrap 4, vue-router, chartist, google-maps and several other plugins/components.

Check the [Live Demo here](http://vuejs.creative-tim.com/vue-light-bootstrap-dashboard).

![](public/Dashboard.PNG)
## :rocket: Getting started

Vue Light Bootstrap Dashboard is built on top of Bootstrap 4, Vuejs and Vue-router. To get started do the following steps:
1. Download the project
2. Make sure you have node.js (https://nodejs.org/en/) installed
3. Type `npm install` in the source folder where `package.json` is located
4. Type `npm run dev` to start the development server

The repo uses [vue-cli](https://github.com/vuejs/vue-cli) scaffolding which takes care of the development setup with webpack and all the necessary modern tools to make web development faster and easier.

## [Documentation](https://demos.creative-tim.com/vue-light-bootstrap-dashboard/documentation/#/buttons)

## :cloud: Build Setup

### install dependencies
`npm install`
### serve with hot reload at localhost:8000
`npm run dev`
### build for production with minification
`npm run build`
### run unit tests
`npm run unit`
### run and watch unit tests
`npm run unit:watch`

## :clipboard: Contribution guide
* `npm install` or `yarn install`
* Please don't use jQuery or jQuery based plugins since there are many pure Vue alternatives

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

[CHANGELOG]: ./CHANGELOG.md
[LICENSE]: ./LICENSE.md
[version-badge]: https://img.shields.io/badge/version-1.0.0-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg


# CRIANDO BANCO LOCAL

## Create a user

### First, we’ll create a role called me and give it a password of password. A role can function as a user or a group, so in this case, we’ll be using it as a user.
`$ psql postgres`

### We want me to be able to create a database.
`postgres=# CREATE ROLE me WITH LOGIN PASSWORD 'password';`

### You can run \du to list all roles/users.
`postgres=# ALTER ROLE me CREATEDB;`

### Now we want to create a database from the me user. Exit from the default session with \q for quit.
`postgres=# \q`

### We’re back in our computer’s default Terminal connection. Now we’ll connect postgres with me.
`psql -d postgres -U me`
* Instead of postgres=#, our prompt shows postgres=> now, meaning we’re no longer logged in as a superuser.

## Create a database

### We can create a database with the SQL command.
`postgres=> CREATE DATABASE api;`

### Let’s connect to the new api database with me using the \c (connect) command.
`postgres=> \c api`
* Deve aparecer isso: You are now connected to database "api" as user "me".

## Create a table

### User Table

```sh
CREATE TABLE users (
  ID SERIAL PRIMARY KEY,
  name VARCHAR(30),
  email VARCHAR(30)
);
```

### Pet Table
```sh
CREATE TABLE pets
(
  id SERIAL PRIMARY KEY,
  active BOOLEAN,
  iname VARCHAR (64),
  beatmap DOUBLE PRECISION,
  locationx INTEGER,
  locationy INTEGER,
  roam DOUBLE PRECISION,
  velocity DOUBLE PRECISION
)
```

### Relationship Table
```sh
CREATE TABLE reviews (
  id serial,
  user_id int NOT NULL,
  pet_id int NOT NULL,
  breed VARCHAR(30),
  PRIMARY KEY (id),
  FOREIGN KEY (pet_id) REFERENCES pets(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```