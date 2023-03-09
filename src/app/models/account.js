const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const course = require('./Course')

const account = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String},
    password: {type: String},
    list_course:{
        course: {
            type: String,
            ref:'Course',
        }
    }
},
{
    timestamps: true,
});

 // register the schema

module.exports = mongoose.model('account', account)