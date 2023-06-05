import axios from "axios";
import { ORDER, FILTER, ADD_FAV, REMOVE_FAV } from "./types"


// ACTION | addFav
export const addFav = (character) => {
    // console.log("ingresa a nuevo addFav - character: ", character)
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       axios.post(endpoint, character).then(({ data }) => {
        // console.log("que trae data: ", data)
          return dispatch({
             type: ADD_FAV,
             payload: data,
            //payload:character, //cambie a character porque data no trae nada
          });
       });
    };
 };

// export function addFav(character){
//     return{
//         type:ADD_FAV,
//         payload:character
//     };
// }


// ACTION | removeFav
export const removeFav = (id) => {
    console.log("entra a removeFav - id: ",id)
    const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
    return (dispatch) => {
        axios.delete(endpoint).then(({ data }) => {
          console.log("que trae data en removeFav: ",data)
          return dispatch({
             type: REMOVE_FAV,
             payload: data,
       });
       });
    };
 };

// export function removeFav(id){
//     return{
//         type: REMOVE_FAV,
//         payload: id
//     };
// };

//ACTION | FILTER
export const filterCards = (gender)=>{
   return{
      type: FILTER,
      payload: gender,
   }
};

//ACTION | ORDERCARDS
export const orderCards = (order)=>{
   return{
      type: ORDER,
      payload: order,
   }
}