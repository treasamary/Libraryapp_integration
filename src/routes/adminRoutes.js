const express = require('express');
const adminRouter=express.Router();
const bookdata=require('../model/Bookdata');
function router(nav){
adminRouter.get('/',function(req,res){
    res.render('addbook',{
        nav,
        title:'Library'
    });
});
adminRouter.post('/add',function(req,res){
    var item={

        title:req.body.title,
    author:req.body.author,
    genre:req.body.genre,
    image:req.body.image
    }
    var book=Bookdata(item);
    book.save();//saving to database
    res.redirect('/books');




});
return adminRouter;
}
module.exports=router;