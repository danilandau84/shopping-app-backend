const dotenv = require('dotenv');
dotenv.config();
const { Sequelize, DataTypes, Model } = require('sequelize');
 

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mssql',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialectOptions: {
        options: {
            encrypt: true, // For Azure SQL
        },
    },
});

class Item extends Model { }

Item.init({

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    category: {
        type: DataTypes.STRING,
    },
},
    {
        sequelize,
        modelName: 'Items', 
    },)

module.exports = { sequelize, Item };
