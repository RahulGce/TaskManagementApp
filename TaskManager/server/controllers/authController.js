const User=require('../../database/model/user.model');
const jwt=require('jsonwebtoken');
const validator=require('email-validator');

const signin=async(req,res)=>{
    let{email,password}=req.body;
    try{
        let user=await User.findOne({email});
        console.log(user,req.body);
        if(!user){
            return res.status(400).send('Email does not exist');
        }
        user.comparePassword(password,(err,match)=>{
            if(!match||err)return res.status(400).send('Password does not match');
            let token=jwt.sign({_id:user._id},'Sweeti@1819',{
                expiresIn:'24h',
            });
            res.status(200).send({
                token,
                username:user.username,
                email:user.email,
                id:user._id,
                createdAt:user.createdAt,
                updatedAt:user.updatedAt,
            });
        });
    }catch(error){
        return res.status(400).send('Login Failed');
    }
};

const register=async(req,res)=>{
    const {email,password,username}=req.body;
    try{
        if(!username) return res.status(400).send('Username is required');
        if(!email) return res.status(400).send('Email is required');
        if(!validator.validate(email)){
            return res.status(400).send('Enter valid email id');
        }
        if(!password|| password.length<6){
            return res.status(400).send('Enter valid password');
        }

        const userExist=await User.findOne({email});
        if(userExist){
            return res.status(400).send('Email is taken');
        }
        const user=await new User({
        email,username,password,
        });
        await user.save();
        return res.status(200).send('user added successfully');

    }catch(error){
        return res, statusbar(400).send('Error creating user');
    }
};

module.exports={
    signin,
    register,
};