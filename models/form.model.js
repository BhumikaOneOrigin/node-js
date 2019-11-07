const mongoose = require('mongoose');

var formSchema = new mongoose.Schema({
    
    
    
    fullName : {
        type: String,
        
    },
    email: {
        type: String,
        
    },
    mobile: {
        type: String,
        
    },
    city: {
        type:String,
        
    }
});

mongoose.model('form', formSchema );