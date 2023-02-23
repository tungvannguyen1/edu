const account = require('../models/account')
const { mutipleMongooseToObject } = require('../../util/mongoose')
const { mongooseToObject } = require('../../util/mongoose')
const jwt = require('jsonwebtoken')


class LoginController {
    //GET
    loginSite(req, res){
        res.render('login/login' , {layout: false})
    }
    //POST
    // signin(req, res){
    //     console.log(req.body)
    // }   
    
    
    /// Đăng Kí ok rồi
    // signin(req,res){
    //     const accounts = new account(req.body);
    //     accounts
    //         .save()
    //         .then(() => res.send('SAVED!!!!'))
    //         .catch((error) => {});
    // }
    // 
    login(req,res,next){
        var username =  req.body.username
        var password =  req.body.password
        account.findOne({ 
            username: username,
            password: password
        })
            .then(data => {
                if(data){
                    var token = jwt.sign({
                        _id: data._id
                    },'mk')
                    res.json({ 
                        mess: 'LOGIN OK',
                        token : token})
                }else{
                    res.json('LOGIN FAIL !!!')
                }
            })
            .catch(next)
        }
    }



module.exports = new LoginController