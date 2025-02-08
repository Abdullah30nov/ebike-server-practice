const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const forum_category_detail = sequelize.define('forum_category_detail',
    {
        tid:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        thread_title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        user_name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        image:{
            type:DataTypes.STRING,
            allowNull:true
        }
    })

module.exports = forum_category_detail