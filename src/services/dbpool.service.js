'use strict'

const databaseService = require('../dbs/instant.dbs')
const { 
    name_database_01,
    name_database_02
} = require('../configs/dbs.info')
// Create connection pools for each database
try {
    databaseService.createPool(name_database_01.alias, name_database_01.config);
} catch (error) {
    console.error(`Failed to create connection pool for ${name_database_01.alias}:`, error);
}

try {
    databaseService.createPool(name_database_02.alias, name_database_02.config);
} catch (error) {
    console.error(`Failed to create connection pool for ${name_database_02.alias}:`, error);
}


// Access the connection pools in another module
const db01 = databaseService.getPool(name_database_01.alias);
const db02 = databaseService.getPool(name_database_02.alias);

module.exports = {
    db01,
    db02
}