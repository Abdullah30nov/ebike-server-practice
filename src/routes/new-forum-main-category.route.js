const express = require('express');
const router = express.Router();
const new_forum_main_category = require('../models/new-forum-main-category.model');
const dotenv = require('dotenv');
dotenv.config()


router.post('/add', async (req, res) => {
    try {
        const { name, description, cid, image, createdAt, updatedAt } = req.body;
        const new_category = await new new_forum_main_category.create({ cid, name, description, image, createdAt, updatedAt })
        res.status(201).json({
            new_category: new_category,
            status:true
        });
    } 
    catch (error) {
        res.status(500).json({
            message:error,
            status:false
        });
    }
})