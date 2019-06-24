var mongoose=require('../DBSchema/SchemaMapper');
var SignupSchema=mongoose.model('Signup');

var SignupController=function () {
    this.insert=(data)=>{
        return new Promise((resolve,reject)=>{
            var user=new SignupSchema({
                email: data.email,
                role: data.role,
                password: data.password
            });
            user.save().then(()=>{
                resolve({status:200,message:"new user added successfully"});
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            });
        });
    }
}

module.exports=new SignupController();