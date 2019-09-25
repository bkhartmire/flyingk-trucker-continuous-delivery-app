<div align="center" style="padding-top: 10px;">
<img src="./img/react.png" alt="react logo" width="30%">
<img src="./img/postgresql.png" alt="postgresql logo" width="30%">
<img src="./img/knex.png" alt="knex logo" width="30%">
</div>

# FlyingK Truck Stops App

## 1. Introduction

This app is a single-page app for travellers that want to search for truck stops.

## 2. Set Up

1.  To install dependencies, run:
    `yarn`
1.  Install [PostgresApp](https://postgresapp.com/) if you don't have one.
1.  To start postgres, run: `psql`
1.  To create database, run: `create database truckstop;`
1.  To connect to database, run: `\c truckstop`
1.  To connect your database with knex, create a .env file and set the appropriate DB_USER, DB_PASSWORD, DB_NAME, and DB_HOST local config variables
1.  To build your production mode, run: `yarn build`
1.  To run migrations and start your static production mode server, run: `yarn start`
1.  To seed data into your database, run: `chmod +x runall.sh` then `./runall.sh`.
1.  To have the hot-reloading development server running, run: `yarn hack`
