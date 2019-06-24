const express=require('express');
const router=express.Router();
const examController=require('../../src/Exam/ExamController');


//get all
router.get('/get-all',examController.getAllExam);

//add a new exam
router.post('/add',examController.addExam);

//get a exam by code
router.get('/exam/:examID',examController.findExamByCode);

//delete a exam
router.delete('/delete-exam/:examID',examController.deleteExamByCode);

module.exports=router;