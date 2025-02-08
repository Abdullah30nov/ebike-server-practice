const { DataTypes}  =  require('sequelize');
const sequelize = require('../config/db.config');
const forum_category_detail = require('./category-detail.model');

const categ_detail_view = sequelize.define('category_detail_view', {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    views:{
        type:DataTypes.STRING,
        allowNull:false
    },
    forign_key:{
        type:DataTypes.INTEGER,
        references:{
            model:forum_category_detail,
            key:"tid"
        },
        onDelete:"CASCADE",
        onUpdate:"CASCADE"
    }
})

module.exports = categ_detail_view