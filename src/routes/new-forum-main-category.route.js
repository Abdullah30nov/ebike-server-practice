const express = require('express');
const router = express.Router();
const Forum_main_category = require('../models/new-forum-main-category.model');


// POST API
router.post('/api/forum-main-categ/add', async (req, res) => {
    try {
        const { name, description, image, createdAt, updatedAt } = req.body;
        const new_category = await Forum_main_category.create({ name, description, image, createdAt, updatedAt })
        res.status(201).json({
            new_category: new_category,
            status: true
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message,
            status: false
        });
    }
})

// GET ALL CATEGORY
router.get('/api/forum-main-categ/get', async (req, res) => {
    const getAllForumCateg = await Forum_main_category.findAll()
    res.status(201).json(
        {
            message: getAllForumCateg,
            status: true
        }
    )
    res.status(500).json({
        message: "error",
        status: false
    })
})

// GET ON CATEGORY BY ID
router.get('/api/forum-main-categ/getbyid', async (req, res) => {
    const {id} = req.body
    const get_by_id =await Forum_main_category.findOne({where :{cid : id}})
    res.status(201).json(
        {
            message: get_by_id,
            status: true
        }
    )
    res.status(500).json({
        message: "error",
        status: false
    })
})

// UPDATE CATEGORY DATA
router.put('/api/forum-main-categ/update',async (req,res)=>{
    const {name,description,id} = req.body
    const update_forum_categ =await Forum_main_category.update(
        {name , description},{where:{cid : id}}
    )
    res.status(201).json(
        {
            message: update_forum_categ,
            status: true
        }
    )
    res.status(500).json({
        message: "error",
        status: false
    })
})

// DELETE CATEGORY
router.delete('/api/forum-main-categ/delete',async (req,res)=>{
    const {id} = req.body
    const Delete_Category = await Forum_main_category.destroy({where : {cid : id}})
    res.status(201).json(
        {
            message: Delete_Category,
            status: true
        }
    )
    res.status(500).json({
        message: "error",
        status: false
    })
})

module.exports = router