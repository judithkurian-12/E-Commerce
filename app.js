const express=require('express');
const bodyParser=require('body-parser');
const path=require("path");
const app=express();
const adminRoutes=require('./routes/admin');
// const shoproutes=require('./routes/shop');
const authRoutes=require("./routes/auth");
const errorController=require('./controllers/errors');	
const mongoConnect=require('./util/database').MongoConnect;																

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req,res,next)=>{
	// User.findByPk(1).then(user=>{
	// 	req.user=user;
	// 	next();
	// }).catch(err=>console.log(err));
	next();
});

app.use('/admin',adminRoutes);

// app.use(shoproutes);

app.use(authRoutes);

app.use(errorController.get404);

mongoConnect(()=>{
	app.listen(3030);
});