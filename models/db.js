const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://OneOrigin:saligramaamarjeeth123@cluster1-zfwue.mongodb.net/test?retryWrites=true&w=majority',{useNewUrlParser: true}, (err) => {
 if(!err) {console.log('MongoDB connection succeeded.')}
 else {console.log('Error in DB connection : ' +err)} 
});

require('./form.model.js');