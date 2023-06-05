const user = require("../utils/users.js");

const login = function(req,res){
    // console.log("Ingresa a funcion login")
    // console.log(req.query)
    // console.log(user)
    const {email,password} = req.query;

    // user.forEach((usu) => {
    //     if(usu.email === email && usu.password === Number(password)){
    //         enc=true;
    //         console.log("user encontrado!!")
    //     }
    // });

    const enc = user.find((user)=>{
        return user.email === email && user.password === Number(password);
    });
    // console.log("valor de enc: ", enc)

    if(enc){
        res.status(200).json({access:true});
    }else{
        res.status(200).json({access:false});
    }

};

module.exports = login;