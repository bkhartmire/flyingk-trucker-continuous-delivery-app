#!/bin/bash
# instructions:
# IMPORTANT: ensure that database is fresh (dropped completely if filled before)
#   to delete database connect to another database(\c postgres) and run "DROP DATABASE truckstop;" in psql
#   to create new database run "CREATE DATABASE truckstop;" in psql
# ensure that migrations have been run ("yarn start" in bash)
# run "./runall.sh" in bash at root level
# program should exit on finish, do not terminate early
# last command imports json data directly to speed up load time 
node ./data/import.js && node ./data/import_restaurants.js && node ./data/import_amenities.js && node ./data/import_gas_types.js && node ./data/import_location_restaurants.js && node ./data/import_location_gas_types.js && node ./data/import_location_amenities.js && node ./data/site_seed.js;
echo $?