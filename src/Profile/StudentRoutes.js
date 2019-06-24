const express= require('express');
const router=express.Router();

const mongoose = require('../DBSchema');

const adminSchema = mongoose.model('Admin');
const instructorSchema =mongoose.model('Instructor');
const studentSchema =mongoose.model('Student');

// router.get // router.post router.delete  router.put

// let studentId = 1;

//localhost:5000/api/student
// POST
// Create student

router.post("/", (req,res) => {
    const newStudent = studentSchema ({
        // _id : "S" + studentId,
        username : req.body.username,
        password : req.body.password,
        securityQuestion : req.body.securityQuestion,
        securityAnswer : req.body.securityAnswer,
        phone : req.body.phone,
        fullName : req.body.fullName,
        email : req.body.email
    })

    console.log(newStudent)

    newStudent.save().then( student => {
        // studentId++;
        res.status(200).send({message : "Successfully Added student", addedObject : student})
    }).catch( err => {
        res.status(500).send({message : "Unsuccessful", error : err})
    })
})



//localhost:5000/api/student/username
// PUT
// Update student

router.put("/:username", (req,res) => {


    studentSchema.update({username : req.params.username},   {
                                                            securityQuestion : req.body.securityQuestion,
                                                            securityAnswer : req.body.securityAnswer,
                                                            phone : req.body.phone,
                                                            fullName : req.body.fullName,
                                                            email : req.body.email})
        .then(updatedStudent => {
            res.status(200).send({message : "Successfully Updated Student", updatedObject : updatedStudent})
        }).catch( err => {
        res.status(500).send({message : "Unsuccessful", error : err})
    })


})

//localhost:5000/api/student/username/password
// GET
// Login Validation

router.get("/:username/:password" ,(req,res) => {
    studentSchema.find({username : req.params.username,password:req.params.password}).exec().then( student => {
        res.status(200).send({message: "Found", student: student})
    }).catch( err => {
        res.status(500).send({message : "Not Found", error : err})
    })
})

module.exports = router;