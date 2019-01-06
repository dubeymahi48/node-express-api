const {mongoose} = require('../mongoose/db-connect');

var schema = new mongoose.Schema({
    title: String ,
    description: String ,
    status: Boolean 
});

const Note = mongoose.model('Notes', schema);


module.exports = {Note}