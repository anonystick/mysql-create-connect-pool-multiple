'use strict'

const mysql = require('mysql2/promise');
// const mysql = require('mysql');

class DatabaseService {
    constructor() {
        this.pools = {};
    }

    createPool(databaseName, config) {
        this.pools[databaseName] = mysql.createPool(config);
    }

    getPool(databaseName) {
        const pool = this.pools[databaseName];
        if (!pool) {
            throw new Error(`Pool for '${databaseName}' is not defined.`);
        }

        return pool;
    }
}

module.exports = new DatabaseService();