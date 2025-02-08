const express = require('express');
const router = express.Router();
const categ_detail_view = require('../models/category-detail-view-count.model');

router.post('/api/categ-detail-view/add', async(req,res)=>{
    const {forign_key, views}= req.body
    const detail_view_add =  await categ_detail_view.create({forign_key,views})
    res.status(200).json({
        message:detail_view_add,
        status:true
    })
    res.status(500).json({
        message:"error",
        status:false
    })
})

router.get('/api/categ-detail-view/get',async(req,res)=>{
    const detail_view_get = await categ_detail_view.findAll()
    res.status(200).json({
        message:detail_view_get,
        status:true
    })
    res.status(500).json({
        message:"error",
        status:false
    })
})

router.get('/api/categ-detail-view/getbyid',async(req,res)=>{
    const {id} = req.body
    const check_valid_id = await forum_category_detail.findByPk(id)
    if (!check_valid_id) {
        return res.status(400).json({ message: "INVALID TID" });
    }
    const detail_view_byid = await categ_detail_view.findOne({where:{id:id}})
    res.status(200).json({
        message:detail_view_byid,
        status:true
    })
    res.status(500).json({
        message:"error",
        status:false
    })
})

router.put('/api/categ-detail-view/update',async(req,res)=>{
    const { id,views,forign_key} = req.body
    const check_valid_id = await forum_category_detail.findByPk(id)
    if (!check_valid_id) {
        return res.status(400).json({ message: "INVALID TID" });
    }
    const detail_view_update = await categ_detail_view.update({views,forign_key},{where:{id:id}})
    res.status(200).json({
        message:detail_view_update,
        status:true
    })
    res.status(500).json({
        message:"error",
        status:false
    })
})

router.delete('/api/categ-detail-view/delete',async(req,res)=>{
    const {id} = req.body
    const check_valid_id = await forum_category_detail.findByPk(id)
    if (!check_valid_id) {
        return res.status(400).json({ message: "INVALID TID" });
    }
    const detail_view_delete = await categ_detail_view.destroy({where:{id:id}})
    res.status(200).json({
        message:detail_view_delete,
        status:true
    })
    res.status(500).json({
        message:"error",
        status:false
    })
})

module.exports = router