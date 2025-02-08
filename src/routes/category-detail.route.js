const express = require('express');
const router = express.Router();
const forum_category_detail = require('../models/category-detail.model');

router.post('/api/category-detail/add', async (req, res) => {
    const { thread_title, user_name, image } = req.body
    const categ_detail_add = await forum_category_detail.create({ thread_title, user_name, image })
    res.status(200).json({
        message: categ_detail_add,
        status: true
    })
    res.status(500).json({
        message: "error",
        status: false
    })
})

router.get('/api/category-detail/get', async (req, res) => {
    const get_category_detail = await forum_category_detail.findAll()
    res.status(200).json({
        message: get_category_detail,
        status: true
    })
    res.status(500).json({
        message: "error",
        status: false
    })
})

router.get('/api/category-detail/getbyid', async (req, res) => {
    const { id } = req.body
    const check_valid_tid = await forum_category_detail.findByPk(id)
    if (!check_valid_tid) {
        return res.status(400).json({ message: "INVALID TID" });
    }
    const get_by_id = await forum_category_detail.findOne({ where: { tid: id } })
    res.status(200).json({
        message:get_by_id,
        status:true
    })
    res.status(500).json({
        message:"error",
        status:true
    })
})

router.put('/api/category-detail/update', async (req, res)=>{
    const { id,thread_title, user_name, image } = req.body
    const check_valid_tid = await forum_category_detail.findByPk(id)
    if (!check_valid_tid) {
        return res.status(400).json({ message: "INVALID TID" });
    }
    const update_detail = await forum_category_detail.update({thread_title,user_name,image},{where : {tid: id}})
    res.status(200).json({
        message:update_detail,
        status:true
    })
    res.status(500).json({
        message:"error",
        status:false
    })
})

router.delete('/api/category-detail/delete', async ( req , res)=>{
    const {id } = req.body
    const check_valid_tid = await forum_category_detail.findByPk(id)
    if (!check_valid_tid) {
        return res.status(400).json({ message: "INVALID TID" });
    }
    const delete_detail = await forum_category_detail.destroy({where : { tid : id}})
    res.status(200).json({
        message:delete_detail,
        status:true
    })
    res.status(500).json({
        message:"error",
        status:false
    })
})

module.exports = router