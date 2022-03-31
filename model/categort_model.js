const mongoose = require('mongoose');
const categorySchema = mongoose.Schema({
    cat_name:{
        type: String,
        required: true
    },
    cat_image:{
        type: String,
        required:true
    },
    cat_qty:{
        type:Number,
        required:true
    },
    cat_price:{
        type:Number,
        required:true
     },
    cat_discount:{
        type:Number,
        required:true
    },
    cat_desc:{
        type:String,
        required:true
    }

})