const express= require('express');
const router=express.Router();

const mongoose = require('../DBSchema');

const adminSchema = mongoose.model('Admin');
const instructorSchema =mongoose.model('Instructor');
const studentSchema =mongoose.model('Student');

//localhost:5000/api/admin/username
// PUT
// Update Admin

    router.put("/:username", (req,res) => {


        adminSchema.update({username : req.params.username},   {
                                                    securityQuestion : req.body.securityQuestion,
                                                    securityAnswer : req.body.securityAnswer,
                                                    phone : req.body.phone,
                                                    fullName : req.body.fullName,
                                                    email : req.body.email})
            .then(updatedAdmin => {
                res.status(200).send({message : "Successfully Updated Admin", updatedObject : updatedAdmin})
            }).catch( err => {
            res.status(500).send({message : "Unsuccessful", error : err})
            })


    })


//localhost:5000/api/admin/username/password
// GET
// Login Validation

    router.get("/:username/:password" ,(req,res) => {
        adminSchema.find({username : req.params.username,password:req.params.password}).exec().then( admin => {

            res.status(200).send({message: "Found", admins: admin})
        }).catch( err => {
            res.status(500).send({message : "Not Found", error : err})
        })
    })




module.exports = router;