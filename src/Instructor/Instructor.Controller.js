var mongoose=require('../DBSchema/SchemaMapper');
var InstructorSchema=mongoose.model('Instructor');

var InstructorController=function () {
    this.insert=(data)=>{
        return new Promise((resolve,reject)=>{
            var instructor=new InstructorSchema({
                instructor_name: data.instructor_name,
                instructor_empno: data.instructor_empno,
                email: data.email,
                faculty: data.faculty
            });
            instructor.save().then(()=>{
                resolve({status:200,message:"new instructor added successfully"});
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            });
        });
    }
    this.searchAll=()=>{
        return new Promise((resolve ,reject)=>{
            InstructorSchema.find().exec().then(data=>{
                resolve({status:200,data:data})
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            })
        })
    }
}

module.exports=new InstructorController();