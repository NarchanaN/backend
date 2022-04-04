const Category = require('../model/categort_model');

exports.add = (req,res,next)=>{
    Category.create({
        cat_name:req.body.cat_name,
    })
    .then(result=>{
        console.log(result)
        return res.status(201).json(result)
    })
    .catch(err=>{
        console.log(err)
        return res.status(500).json({messgae:"Oops!something went wrong"})
    })
}

