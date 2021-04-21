const express = require('express');

var app = express();

const router = express.Router();

const mongoose =require('mongoose');



mongoose.connect('mongodb://localhost:27017/mernAuth',{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{

    if (err) {
        
        console.log(err);
    } else{
        console.log('Mongo DB connection Successfull');
    }

});

var Usermodel = mongoose.model('users',{name:String,username:String,password:String})

router.post('/registeruser', (req,res)=>{

    

    var newuser = new Usermodel({name:req.body.name,username:req.body.username,password:req.body.password})

    newuser.save((err)=>{
        if (err) {
            res.send('Something went wrong')
        } else{
            res.send("User Registration successfull")
        }
    })

})
router.post('/login', (req,res)=>{

    Usermodel.find({
        username:req.body.username,
        password:req.body.password
    },(err,documents)=>{

        if (err) {
            res.send('Something went wrong')
        }
        else{

            if (documents.length == 0) {
                res.send('Login Failed');
            }
            else{
                res.send('Login Successfull')
            }
        }
    })

})

router.post('/getusers', (req,res)=>{

    Usermodel.find({},(err,documents)=>{

        if (err) {
            res.send('Something went wrong')
        }
        else{

           res.send(documents)
        }
    })

})



module.exports = router;