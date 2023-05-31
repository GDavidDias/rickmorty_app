const data = require("./utils/data.js");
const http = require("http");

http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    
    console.log("de index.js Server: ",req.url)
    if(req.url.includes("/rickandmorty/character/")){
        // console.log("entra a validacion server")
        const {url} = req;
        // console.log("la url es:",url)
        let lineas = url.split("/")
        id = lineas[lineas.length-1]
        // console.log(id)
        let objchar = data.filter((char)=>char.id===Number(id))[0];
        // console.log(objchar)
        res.writeHead(200,{"Content-type": "application/json"});
        return res.end(JSON.stringify(objchar));
        
        
        
    }

}).listen(3001,"localhost");