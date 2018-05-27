const mongoose = require('mongoose');
const validator = require('validator');
const _ = require('lodash');

var Schema = mongoose.Schema;

var YogaSchema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
    },
    steps:[{
        type:String,
        require:true,
        minlength:6
    }],
    benefits:[{
        type:String,
        require:true,
        minlength:6
    }],
    precautions:[{
        type:String
    }],

    image:{
        type:String
    }

});

YogaSchema.methods.toJSON = function(){
    var yoga = this;
    var yogaObject = yoga.toObject();
    return yogaObject;
};

var Yoga = mongoose.model("Yoga",YogaSchema);

module.exports = {Yoga}