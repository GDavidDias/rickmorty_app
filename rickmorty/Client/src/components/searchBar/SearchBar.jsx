import { useState } from "react";
import style from "../searchBar/SearchBar.module.css";

export default function SearchBar(props) {
   //console.log("En searchbar "+props)

   const[id,setId]=useState("");

   const handleChange = event =>{
      const {value}=event.target;
      setId(value);
      // console.log("id: ",id);
   }

   return (
      <div className={style.divSearch}>
         <input 
            type='search' 
            name="search"
            id="search"
            onChange={handleChange}
         />
         {/* lo pasamos como callback asi no se ejecuta al montarse */}
         <button onClick={()=>props.onSearch(id)}>Agregar</button>
      </div>
   );
}
