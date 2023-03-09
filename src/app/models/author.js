const mongoose = require('mongoose')
const Schema = mongoose.Schema;
// const course = require('./Course')

const author = new Schema({
    name: {type: String},
    email: {type: String},
    // list_course:{
    //     course: {
    //         type: Schema.Types.ObjectId,
    //         ref:'Course',
    //     }
    // }
    list_course:[{
        type: Schema.Types.ObjectId,
        ref:'Course'    
    }]
},
{
    collection:'author'
});

 // register the schema

module.exports = mongoose.model('author', author)