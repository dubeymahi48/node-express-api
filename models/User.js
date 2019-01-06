const {mongoose} = require('./mongoose/db-connect');


const User = mongoose.model('Users',
{ name: String },
{ email: String },
{ age: Number }
);

module.exports = {User}