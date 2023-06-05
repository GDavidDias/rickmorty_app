const axios=require("axios");// se imporat asi en el BACKEND
const URL = "https://rickandmortyapi.com/api/character/";
let control ={};

control.getCharById = function(req, res){
    let char ={};
    const {id} = req.params;
    
    axios.get(`${URL}${id}`)
            .then(response => response.data)
            .then(
               (data)=>{
                    if(data){
                        char={
                              id:id,
                              name:data.name,
                              gender:data.gender,
                              species:data.species,
                              origin:data.origin, //no le paso el name, porque el front esta esperando el objeto
                              image:data.image,
                              status:data.status,
                             }
                             // res.writeHead(200,{"Content-type": "application/json"});
                             // return res.end(JSON.stringify(char));
                             res.status(200).json(char)
                    }else{
                        res.status(404).send("Not Found...")
                    }
                }
            )
            .catch(
                (error)=>{
                    res
                        // .writeHead(500,{"Content-type": "text/plain"})
                        .status(500)
                        .send(error.message)
                }
            )

}

//import axios from "axios" //solo en FRONT END

// control.getCharById = function(res,id){
//     let char ={};
    
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//             .then(response => response.data)
//             .then(
//                (data)=>{
//                    char={
//                          id:id,
//                          name:data.name,
//                          gender:data.gender,
//                          species:data.species,
//                          origin:data.origin, //no le paso el name, porque el front esta esperando el objeto
//                          image:data.image,
//                          status:data.status,
//                         }
//                         res.writeHead(200,{"Content-type": "application/json"});
//                         return res.end(JSON.stringify(char));
//                     }
//             )
//             .catch(
//                 (error)=>{
//                     res
//                         .writeHead(500,{"Content-type": "text/plain"})
//                         .end(error.message)
//                 }
//             )
// };

module.exports = control;

