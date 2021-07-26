const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database');

const peoples = sequelize.define('peoples', {
    
    name: {
        type: DataTypes.STRING
    }

});

peoples.sync();

module.exports = peoples;