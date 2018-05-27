var Yoga = require("../../models/yoga").Yoga;
const _ = require('lodash');



module.exports = {
    addYoga,
    getAllYoga,
    getYoga
}



function addYoga(req, res) {
    var body = req.body;
    var yoga = new Yoga(body);
    yoga.save().then((yoga) => {
        res.send('added');
    }).catch((err) => {
        res.status(400).send(err);
    });
}


function getAllYoga(req, res) {
    Yoga.find().then((data)=>{
        res.json(data);
    });
}

function getYoga(req, res) {
    req.params.id
    Yoga.find({_id:req.params.id}).then((data)=>{
        res.json(data);
    });
}