const {DataTypes} = require('sequelize');
const sequelize = require('../config/db.config');

const new_forum_main_category = sequelize.define('NewMainForumCategory',{
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
        type:DataTypes.TIME,
        allowNull:false,
        defaultValue:DataTypes.NOW
    },
    UpdatedAt:{
        type:DataTypes.TIME,
        allowNull:false,
        defaultValue:DataTypes.NOW
    }
})
module.exports = new_forum_main_category