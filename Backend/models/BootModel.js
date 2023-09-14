const mongoose = require('mongoose');

const bootSchema = new mongoose.Schema({
    brand :{type : String , required : true},
    model :{type : String , required : true},
    size :{type : Number , required : true},
    color : {type : String , required : true},
});


module.exports = mongoose.model('FootballBoot' , bootSchema);