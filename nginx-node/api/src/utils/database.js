const Sequelize = require('sequelize');

const { database, user, password, options } = require('../configs/database.config');

const sequelize = new Sequelize(
    database,
    user,
    password,
    options
);

module.exports = sequelize;