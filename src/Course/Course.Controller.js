var mongoose=require('../DBSchema/SchemaMapper');
var CourseSchema=mongoose.model('Course');

var CourseController=function () {
    this.insert=(data)=>{
        return new Promise((resolve,reject)=>{
            var course=new CourseSchema({
                faculty: data.faculty,
                year: data.year,
                semester: data.semester,
                module_name: data.module_name,
                instructor: data.instructor,
                enroll: data.enroll
            });
            course.save().then(()=>{
                resolve({status:200,message:"new course added successfully"});
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            });
        });
    }
    this.searchAll=()=>{
        return new Promise((resolve ,reject)=>{
            CourseSchema.find().exec().then(data=>{
                resolve({status:200,data:data})
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            })
        })
    }
}

module.exports=new CourseController();