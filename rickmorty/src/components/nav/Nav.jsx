import { Link, NavLink } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import style from "./Nav.module.css"

export default function Nav(props){
    return(
        <div className={style.contenedor}>
            <div className={style.menu}>
                <button>
                    <NavLink to="/About">About</NavLink>
                </button>
                <button>
                    <NavLink to={"/Home"}>Home</NavLink>
                </button>
                <button>
                    <NavLink to={"/"}>Login</NavLink>
                </button>
                <button>
                    <NavLink to={"/favorites"}>Favoritos</NavLink>
                </button>
                <button onClick={()=>props.onInsert()}>
                    Ingresar Nuevo
                </button>
                <SearchBar 
                onSearch={props.onSearch} 
                />            
            </div>

        </div>
    )

}