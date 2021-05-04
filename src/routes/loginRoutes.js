const express = require('express');
const LoginRouter=express.Router();
function router(nav){
LoginRouter.get('/',function(req,res){
    res.render("login",{
        nav,
        title:'Library'
    });
});

 return LoginRouter;
}
module.exports=router;