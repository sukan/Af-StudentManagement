var mongoose=require('../DBSchema/SchemaMapper');
var AnswerUploadSchema=mongoose.model('StudentAnswers');

var AnswerController=function () {
    this.insert=(data)=>{
        return new Promise((resolve,reject)=>{
            var answer=new AnswerUploadSchema({
                file: data.file,
                date: new Date(Date.now("<YYYY-mm-dd>")).toDateString()
            });
            answer.save().then(()=>{
                resolve({status:200,message:"answer upload successfully"});
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            });
        });
    }
    this.searchAll=()=>{
        return new Promise((resolve ,reject)=>{
            AnswerUploadSchema.find().exec().then(data=>{
                resolve({status:200,data:data})
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            })
        })
    }
};

module.exports=new AnswerController();