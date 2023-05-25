import { ADD_FAV, REMOVE_FAV } from "./types";

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    console.log("entra al reducer - myFavorites: ",state.myFavorites)
    switch(action.type){
        case ADD_FAV:
            return{
                ...state,
                myFavorites:[...state.myFavorites, action.payload]
            };
        case REMOVE_FAV:
            const newfav = state.myFavorites.filter((pers)=>pers.id !== Number(action.payload))
            return{
                ...state,
                myFavorites: newfav,
            };
        default: return {...state};
    }
};

export default reducer;