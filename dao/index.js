var mongoose = require("mongoose");

module.exports = {
    connect: connect
};

function connect() {
  
    
    mongoose.connect(
        "mongodb://vineet:abcdefgh@ds235860.mlab.com:35860/yoga"    );
    
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("Connected to db");
    });
}