'use strict'

module.exports = {
    name_database_01: {
        alias: 'name_database_01',
        config: {
            host: 'name_database_01.com',
            port: 3306,
            database: "name_database_01.com",
            user: 'tipjs',
            password: 'name_database_01',
            connectionLimit: 10,
            multipleStatements: true
        }
    },
    name_database_02: {
        alias: 'name_database_02',
        config: {
            "host": 'name_database_02.com',
            "port": 3306,
            "database": "name_database_02.com",
            "user": 'tipjs',
            "password": 'name_database_02',
            "connectionLimit": 10,
            multipleStatements: true
        }
    }
}