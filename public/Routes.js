var Express=require('express');
var Routes=Express.Router();
var SignupRoute=require('./src/Signup/Signup.Route');
var CourseRoute=require('./src/Course/Course.Route');
var AdminRoute=require('./src/Admin/Admin.Route');
var InstructorRoute=require('./src/Instructor/Instructor.Route');
var AssignmentUploadRoute=require('./src/AssignmentUpload/AssignmentUpload.Route');
var AnswerRoute=require('./src/Answer/Answer.Route');
var AssignmentRoute = require ('./src/Student/AssignmentRoutes');
var MarksRoute = require ('./src/Student/MarksRoutes');
var NotificationRoute = require ('./src/Student/NotificationRoutes');
var ExamRoute = require ('./src/Exam/ExamRoute');
var SubmissionRoute = require ('./src/Student/SubmissionRoutes');

Routes.use('/user/',SignupRoute);
Routes.use('/course/',CourseRoute);
Routes.use('/admin/',AdminRoute);
Routes.use('/instructor/',InstructorRoute);
Routes.use('/assignment/',AssignmentUploadRoute);
Routes.use('/studentanswer/',AnswerRoute);
Routes.use('/exam',ExamRoute);
Routes.use('/notification',NotificationRoute);
Routes.use('/marks',MarksRoute);
Routes.use('/assignments',AssignmentRoute);
Routes.use('/submission',SubmissionRoute);




module.exports=Routes;