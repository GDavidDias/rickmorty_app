//import axios from "axios"
const axios=require("axios");
let control ={};

control.getCharById = function(res,id){
    let char ={};
    
    axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(
               (response)=>{
                   char={
                         id:id,
                         name:response.data.name,
                         gender:response.data.gender,
                         species:response.data.species,
                         origin:response.data.origin,
                         image:response.data.image,
                         status:response.data.status,
                        }
                        res.writeHead(200,{"Content-type": "application/json"});
                        return res.end(JSON.stringify(char));
                    }
            )
            .catch(
                (error)=>{
                    res.writeHead(500,{"Content-type": "text/plain"});                                    
                    res.end(error.message)
                }
            )
};

module.exports = control;

