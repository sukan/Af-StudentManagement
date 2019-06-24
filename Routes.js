var Express=require('express');
var Routes=Express.Router();
var SignupRoute=require('./src/Signup/Signup.Route');
var CourseRoute=require('./src/Course/Course.Route');
var AdminRoute=require('./src/Admin/Admin.Route');
var InstructorRoute=require('./src/Instructor/Instructor.Route');
var AssignmentUploadRoute=require('./src/AssignmentUpload/AssignmentUpload.Route');
var AnswerRoute=require('./src/Answer/Answer.Route');
Routes.use('/user/',SignupRoute);
Routes.use('/course/',CourseRoute);
Routes.use('/admin/',AdminRoute);
Routes.use('/instructor/',InstructorRoute);
Routes.use('/assignment/',AssignmentUploadRoute);
Routes.use('/studentanswer/',AnswerRoute);
Routes.use('/')
module.exports=Routes;