import { Link, NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./Nav.module.css"

export default function Nav(props){
    return(
        <div>
            <button>
                <NavLink to="/About">About</NavLink>
            </button>
            <button>
                <NavLink to={"/Home"}>Home</NavLink>
            </button>
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