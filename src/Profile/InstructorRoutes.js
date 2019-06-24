const express= require('express');
const router=express.Router();
const mongoose = require('../DBSchema');

const adminSchema = mongoose.model('Admin');
const instructorSchema =mongoose.model('Instructor');
const studentSchema =mongoose.model('Student');





//localhost:5000/api/instructor/username
// PUT
// Update Instructor

    router.put("/:username", (req,res) => {


        instructorSchema.update({username : req.params.username},   {
                                securityQuestion : req.body.securityQuestion,
                                securityAnswer : req.body.securityAnswer,
                                phone : req.body.phone,
                                fullName : req.body.fullName,
                                email : req.body.email})
            .then(updatedInstructor => {
                res.status(200).send({message : "Successfully Updated Instructor", updatedObject : updatedInstructor})
            }).catch( err => {
            res.status(500).send({message : "Unsuccessful", error : err})
        })


    })

//localhost:5000/api/instructor/username/password
// GET
// Login Validation

    router.get("/:username/:password" ,(req,res) => {
        instructorSchema.find({username : req.params.username,password:req.params.password}).exec().then( instructor => {
            res.status(200).send({message: "Found", instructor: instructor})
        }).catch( err => {
            res.status(500).send({message : "Not Found", error : err})
        })
    })




module.exports = router;