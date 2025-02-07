const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');
const new_forum_main_category = require('./new-forum-main-category.model');

const  forum_view_count =  sequelize.define('Forum_view_count',{
    id:{
        type:DataTypes.INTEGER ,
        autoIncrement:true,
        primaryKey:true
    },
    views:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
    ,
    category_cid:{
        type:DataTypes.INTEGER,
        allowNull:false,
        references : {
            model: new_forum_main_category,
            key:"cid"
        },
        onDelete:'CASCADE',
        onUpdate:"CASCADE"
    }
})

module.exports= forum_view_count 