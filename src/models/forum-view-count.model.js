const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const new_forum_main_category = require('./new-forum-main-category.model');

const  forum_view_count =  sequelize.define('Forum_view_count',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        unique:true
    },
    views:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
})

module.exports= forum_view_count