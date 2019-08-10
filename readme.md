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
1.  To run migrations, run: `yarn start`
1.  To seed data into your database, run: `chmod +x runall.sh` then `./runall.sh` if you are a mac user, and just `./runall.sh` for windows users.
1.  To see build the production server, run: `yarn build`
1.  To have the production server running, run: `yarn hack`
