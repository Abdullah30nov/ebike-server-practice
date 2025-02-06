const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.config');

const new_forum_main_category = sequelize.define('New_Main_Forum_Category',{
    cid:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:true
    },
    image:{
        type:DataTypes.STRING,
        allowNull:true
    },
    createdAt:{
        type:DataTypes.DATE,
        allowNull:true,
        defaultValue:DataTypes.NOW
    },
    UpdatedAt:{
        type:DataTypes.DATE,
        allowNull:true,
        defaultValue:DataTypes.NOW
    }
})
module.exports = new_forum_main_category