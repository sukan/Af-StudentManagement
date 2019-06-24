const Express = require('express');
const BodyParser = require('body-parser');
const Routes = require('./Routes');
const Cors = require('cors');
const Bundler=require('parcel-bundler');
const bundler = new Bundler('./public/Main.html', {});
const app=Express();
app.use(Cors());
app.use(BodyParser.urlencoded({extended:false}));
app.use(BodyParser.json());
app.use('/',Routes);

app.use(bundler.middleware());

app.use(Express.static('./dist'));
const SignupRoute=Express.Router();
app.listen(8083,'localhost',(err)=>{
   if (err)
   {
       console.log(err);
       process.exit(-1);
   }
   console.log("Server listen to port 8083");
});