const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    name : {
        type:String,
        repuired: true
    },
    title : {
        type: String,
        required:true
    }
},
{
    timestamp:true
}
);

module.exports = mongoose.model("Todo" , todoSchema);