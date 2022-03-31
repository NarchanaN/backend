const Admin = require('../model/admin_model');

exports.signup = (req,res,next)=>{
    Admin.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then(result=>{
        return res.status(201).json(result);
    }).catch(err=>{
        console.log(err)
        return res.status(402).json({measage: 'internal server erroe'});
    })
}

exports.signin = (req,res,next)=>{
    Admin.findOne({
        email:req.body.email,
        password:req.body.password
    }).then(result=>{
       return res.status(200).json({mesage:'current Admin login',result:result});
    }).catch(err=>{
        console.log(err)
       return res.status(500).json({mesage: 'something went wrong'});
    })
}