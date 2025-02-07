const express = require('express');
const router = express.Router();
const forum_view_count = require('../models/forum-view-count.model');
const new_forum_main_category = require('../models/new-forum-main-category.model');

// POST VIEW COUNT
router.post('/api/forum-view-count/add',async (req , res )=>{
        const {views, category_cid} = req.body
        if (!category_cid) {
            return res.status(400).json({ error: "category_cid is required" });
        }
         const check_valid_cid =await new_forum_main_category.findByPk(category_cid)
         if(!check_valid_cid){
             return res.status(400).json({message:"InValid CID"});
         }
        const add_view_count = await forum_view_count.create({views,category_cid});
        res.status(201).json(
            {
                message: add_view_count,
                status: true
            }
        )
        res.status(500).json({
            message: "error",
            status: false
        })
})

// GET ALL DATA VIEW COUNT
router.get('/api/forum-view-count/get',async (req , res )=>{
    const all_view_count = await forum_view_count.findAll()
    res.status(201).json(
        {
            message: all_view_count,
            status: true
        }
    )
    res.status(500).json({
        message: "error",
        status: false
    })
})

// GET VIEW COUNT BY ID
router.get('/api/forum-view-count/getbyid',async (req,res)=>{
    const {id}=req.body
    const get_view_count_byId = await forum_view_count.findOne({where : {id : id}})
    res.status(201).json(
        {
            message: get_view_count_byId,
            status: true
        } 
    )
    res.status(500).json({
        message: "error",
        status: false
    })
})

// DATA UPDATE FORUM VIW COUNT
router.put('/api/forum-view-count/update', async( req, res)=>{
    const {views,id} = req.body
    const update_view_count = await forum_view_count.update(
        {views},{where : { id : id}}
    )
    res.status(201).json(
        {
            message: update_view_count,
            status: true
        }
    )
    res.status(500).json({
        message: "error",
        status: false
    })
})

// DELETE CATEGORY
router.delete('/api/forum-view-count/delete',async (req,res)=>{
    const {id} = req.body
    const Delete_view_count = await forum_view_count.destroy({where : {id : id}})
    res.status(201).json(
        {
            message: Delete_view_count,
            status: true
        }
    )
    res.status(500).json({
        message: "error",
        status: false
    })
})

module.exports = router