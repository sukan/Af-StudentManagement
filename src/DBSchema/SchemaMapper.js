const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CourseSchema=new Schema({
    faculty:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    semester:{
        type:String,
        required:true
    },
    module_name:{
        type:String,
        required:true
    },
    instructor:{
        type:String,
        required:true
    },
    enroll:{
        type:String,
        required:true
    }
});

const AdminSchema=new Schema({
    admin_name:{
        type:String,
        required:true
    },
    admin_empno:{
        type:String,
        required:true,
        unique:true
    },
    faculty:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});



const ExamSchema=mongoose.Schema({

    _id:mongoose.Schema.Types.ObjectId,

    examID: {
        type: String,
        required: true,
        unique:true
    },

    moduleCode:{
        type:String,
    },

    moduleName:{
        type:String,
        required:true
    },

    examDay:{
        type:Date,
        required:true
    }

});

const Notification = new schema ({

    from: {
        type : String,
        required : true
    },
    to: {
        type : String,
        required : true
    },
    action: {
        type : String,
        required : true
    },
    courseName: {
        type : String,

    },
    assignmentName: {
        type : String,

    },
    date: {
        type : Date,
        required : true
    }
})

const Assignment = new schema ({

    dueDate: {
        type : String,
        required : true
    },
    instructorUsername: {
        type : String,
        required : true
    },
    courseName: {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }
})

const Submission = new schema ({

    assignmentName: {
        type : String,
        required : true
    },
    studentUsername: {
        type : String,
        required : true
    },
    dateSubmitted: {
        type : String,
        required : true
    },
    fileName : {
        type : String,
        required : true
    }
})

const Marks = new schema ({

    assignmentName: {
        type : String,
        required : true
    },
    studentUsername: {
        type : String,
        required : true
    },
    instructorUsername: {
        type : String,
        required : true
    },
    mark: {
        type : Number,
        required : true
    }
})



const InstructorSchema=new Schema({
    instructor_name:{
        type:String,
        required:true
    },
    instructor_empno:{
        type:String,
        required:true,
        unique:true
    },
    faculty:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
});
const SignupSchema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    role:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const InstructorUploadSchema=new Schema({
    duedate:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        required:true
    },
    comments:{
        type:String
    }
});
const AnswerUploadSchema=new Schema({
    file:{
        type:String,
        required:true
    },
    date:{
        type:String
    }
});
mongoose.model('Course',CourseSchema);
mongoose.model('Exam',ExamSchema)
mongoose.model('Admin',AdminSchema);
mongoose.model('Instructor',InstructorSchema);
mongoose.model('Signup',SignupSchema);
mongoose.model('InsAssignments',InstructorUploadSchema);
mongoose.model('StudentAnswers',AnswerUploadSchema);
mongoose.model('Marks',Marks);
mongoose.model('Submission',Submission);
mongoose.model('Assignment',Assignment);
mongoose.model('Notification',Notification);

mongoose.connect('mongodb://localhost:27017/SliitCourseWeb',(err)=>{
    if(err)
    {
        console.log(err);
        process.exit(-1);
    }
    console.log('Connected to the DB');
});
module.exports=mongoose;