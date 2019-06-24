const express=require('express');
var router=express.Router();
var Controller=require('./Signup.Controller');

router.post('/add',(req,res)=>{
    Controller.insert(req.body).then(data=>{
        res.status(data.status).send({message:data.message});
    }).catch(err=>{
        res.status(err.status).send({message:err.message});
    });
});

module.exports=router;