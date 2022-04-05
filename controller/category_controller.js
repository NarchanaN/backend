const Category = require('../model/categort_model');

exports.add = (req,res,next)=>{
    Category.create({
        cat_name:req.body.cat_name,
        cat_image:'https://afront.herokuapp.com/images'+req.file.filename
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

exports.view = (req,res,next)=>{
     Category.find()
     .then(result=>{
         return res.status(201).json(result);
     }).catch(err=>{
         console.log(err);
         return res.status(500).json({mesage:'oops! something went wrong'});
     })
}

