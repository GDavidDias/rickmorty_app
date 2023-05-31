import { createStore, applyMiddleware, compose} from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"

//instalar => npm i redux-devtools-extension
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
    //composeEnhancer(applyMiddleware(thunk))
    );
export default store;


//aNTES DE USAR 
// import { createStore, applyMiddleware, compose} from "redux";
// import reducer from "./reducer";
// import thunkMiddleware from "redux-thunk";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     reducer,
//     //Permite hacer peticiones asincronas:
//     composeEnhancer(applyMiddleware(thunkMiddleware))
//     );

// export default store;