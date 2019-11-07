const express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Form = mongoose.model('form');
const Post = require("../models/form.model.js");

router.get('/', (req, res)=>{
    res.render("form/addOrEdit",{
        viewTitle : "Insert data"
    });
});

router.post('/',(req,res)=> {
   insertRecord(req,res);
    
});

function insertRecord(req, res){
    var form = new Form();
    form.fullName = req.body.fullName;
    form.email = req.body.email;
    form.mobile = req.body.mobile;
    form.city = req.body.city;
    form.save((err,doc) => {
        if(!err)
            res.send(req.body);
        else{
            console.log('Error during record insertion : '+err);
        }
    });
    
    
    
}

router.get('/list', (req, res) => {
    
    Form.find((err,docs) => {
        if(!err){
            res.render("form/list",{
                list: docs
            });
        }
        else {
            console.log('Error from form list :' +err); 
        }
    });
});


router.delete('/delete/:id',(req,res) => {
   Form.remove({_id: req.params.id}, (err, doc) => {
       if(!err){
           res.redirect('/form/list');
       }
       
       else{ console.log(' Error in Form Delete :' + err); }
   }); 
}); 
              
              
module.exports = router;