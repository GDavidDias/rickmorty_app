import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./Nav.module.css"

export default function Nav(props){
    return(
        <div>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/home">
                <button>Home</button>
            </Link>
            <div className={style.button}>
                <button
                    onClick={()=>props.onInsert()}
                >
                    Ingresar Nuevo
                </button>
            </div>
            <SearchBar 
               onSearch={props.onSearch} 
            />            
        </div>
    )

}