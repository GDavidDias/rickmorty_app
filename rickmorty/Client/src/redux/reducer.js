import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: [], //QUE RENDERIZO
    allCharacters:[], //TODOS MIS FAVORITOS
    errors:false
}


const reducer = (state = initialState, action) => {
    console.log("entra al reducer - myFavorites: ",state.myFavorites)
    console.log("entra el reducer - allCharacters: ",state.allCharacters)
    switch(action.type){
        case ADD_FAV:
            // return{
            //     ...state,
            //     myFavorites:[...state.myFavorites, action.payload]
            // };
            // console.log("entra a casoo ADD_FAV - payload ",action.payload)
            // console.log("entra a casoo ADD_FAV - myFavorites ",state.myFavorites)
            return { 
                    ...state, 
                    myFavorites: action.payload, allCharacters: action.payload , errors:false
                    //myFavorites:[...state.myFavorites, action.payload]
                };
        case REMOVE_FAV:
            // const newfav = state.myFavorites.filter((pers)=>pers.id !== Number(action.payload))
            // return{
            //     ...state,
            //     myFavorites: newfav,
            // };
            // console.log("entra a caso REMOVE_FAV - myfavorites: ",state.myFavorites)
            // console.log("entra a caso REMOVE_FAV - payload: ",action.payload)
            return { ...state, myFavorites: action.payload , errors:false};
        case FILTER:
            let filterAllCharacters=[];
            console.log("en reducer FILTER: ", action.payload)
            if(action.payload==="All"){
                filterAllCharacters=[...state.allCharacters];
            }else{
                filterAllCharacters=state.allCharacters.filter((char)=>char.gender===action.payload)
            }
            return{
                ...state,
                myFavorites:filterAllCharacters, 
            };
        case ORDER:
            const orderAllCharacters=[...state.allCharacters];
            if(orderAllCharacters.length>1){
                if(action.payload === "A"){
                    orderAllCharacters.sort();
                }else if(action.payload==="D"){
                    orderAllCharacters.sort((a,b)=>Number(b.id)-Number(a.id));
                }
            }
            return{
                ...state,
                myFavorites:orderAllCharacters,
            };
        case 'ERROR':
            return{
                ...state, errors: action.payload
            };

        default: return {...state};
    }
};

export default reducer;
