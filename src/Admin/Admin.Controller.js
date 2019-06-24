var mongoose=require('../DBSchema/SchemaMapper');
var AdminSchema=mongoose.model('Admin');

var AdminController=function () {
    this.insert=(data)=>{
        return new Promise((resolve,reject)=>{
            var admin=new AdminSchema({
                admin_name: data.admin_name,
                admin_empno: data.admin_empno,
                email: data.email,
                faculty: data.faculty
            });
            admin.save().then(()=>{
                resolve({status:200,message:"new admin added successfully"});
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            });
        });
    }
    this.searchAll=()=>{
        return new Promise((resolve ,reject)=>{
            AdminSchema.find().exec().then(data=>{
                resolve({status:200,data:data})
            }).catch(err=>{
                reject({status:500,message:"Error:-"+err});
            })
        })
    }
}

module.exports=new AdminController();