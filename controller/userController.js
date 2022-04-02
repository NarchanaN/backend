const User = require('../model/user_model');

exports.signup = (req,res,next)=>{
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then(result=>{
       return res.status(201).json(result);
    }).catch(err=>{
        console.log(err);
       return res.status(501).json({mesage: 'internal server error'});
    })
}

exports.signin = (req,res,next)=>{
    User.findOne({
        email:req.body.email,
        password:req.body.password
    }).then(result=>{
        console.log(result)
        return res.status(200).json({mesage: 'current user login', result: result});
    }).catch(err=>{
        console.log(err)
        return res.status(500).json({mesage: 'something went wrong'});
    })  
}