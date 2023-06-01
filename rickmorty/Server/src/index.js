//const data = require("./utils/data.js");
let control = require("./controllers/getCharById");
const http = require("http");

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    console.log("de index.js Server: ",req.url)

    if(req.url.includes("/rickandmorty/character/")){
        let id = req.url.split("/").pop();
        // control(res,id)
        // control.getCharById(res,id);
        control.getCharById(res,id);
    }


    // if(req.url.includes("/rickandmorty/character/")){
    //     // console.log("entra a validacion server")
    //     // const {url} = req;
    //     // console.log("la url es:",url)
    //     // let lineas = url.split("/")
    //     // id = lineas[lineas.length-1]
    //     //tammbien
    //     let id = req.url.split("/").pop();
    //     // console.log(id)
    //     let objchar = data.filter((char)=>char.id===Number(id))[0];
    //     // console.log(objchar)
    //     res.writeHead(200,{"Content-type": "application/json"});
    //     return res.end(JSON.stringify(objchar));
    // }

}).listen(3001,"localhost");