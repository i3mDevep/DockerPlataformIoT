'use strict'

const debug = require('debug')('iot:db_config')

function config_db (force = false) {
    const config = {
        database: process.env.DB_NAME || 'plataformIoT',
        username: process.env.DB_USER || 'root',
        password: process.env.DB_PASS || 'developer',
        host: process.env.DB_HOST || 'db',
        dialect: 'mysql',
        loggin: s => debug(s),
        setup: force
    }
    return config
}
module.exports = {
    config_db
}