const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    cat_name:{
        type: String,
        required: true
    },
    /*cat_image:{
        type: String,
        required:true
    }*/
})
module.exports =  mongoose.model('category',categorySchema);