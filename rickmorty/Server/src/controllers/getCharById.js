const axios=require("axios");// se imporat asi en el BACKEND
const URL = "https://rickandmortyapi.com/api/character/";
let control ={};

 control.getCharById = async function(req, res){
    let char ={};
    const {id} = req.params;
    try{
        const resp = await axios(URL+id);
        const{status,name,species,origin,image,gender} = resp.data;        
        const character={id,status,name,species,origin,image,gender};

        return name //si me trajo algo        
           ?res.status(200).json(character)
           :res.status(404).send("Not found...")
    }catch(error){
        return res.status(500).send(error.message)
    }

    //axios.get(`${URL}${id}`) 
    // axios.get(URL+id) //viene de response.data
    //         .then(response => {
    //             const{status,name,species,origin,image,gender} = response.data;
    //             const character={id,status,name,species,origin,image,gender}
    //             return name //si me trajo algo
    //                 ?res.status(200).json(character)
    //                 :res.status(404).send("Not found...")

    //         })
    //         .catch(
    //             (error)=>{
    //                 return res
    //                     // .writeHead(500,{"Content-type": "text/plain"})
    //                     .status(500)
    //                     .send(error.message)
    //             }
    //         )

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

