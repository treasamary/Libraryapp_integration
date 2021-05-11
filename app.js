const { Router } = require('express');
const express=require('express');
const port=process.env.PORT|| 5000;

const nav=[
    {link:'/books',name:'Books'},
    {link:'/Authors',name:'Authors'},
    {link:'/Login',name:'Login'},
    {link:'/Signup',name:'Signup'},
    {link:'/admin',name:'Add Book'}]
const app=express();

const booksRouter=require('./src/routes/bookRoutes')(nav);
const AuthorsRouter=require('./src/routes/authorRoutes')(nav);
const LoginRouter=require('./src/routes/loginRoutes')(nav);
const SignupRouter=require('./src/routes/signRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
app.use(express.urlencoded({extended:true}));
app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter)
app.use('/Authors',AuthorsRouter)
app.use('/Login',LoginRouter)
app.use('/Signup',SignupRouter)
app.use('/admin',adminRouter)
app.get('/',function(req,res){
    // res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",{nav,
    title:'Library'
});
});


app.listen(port,()=>{console.log("Server Ready at"+port)});