import style from "../searchBar/SearchBar.module.css";

export default function SearchBar(props) {
   //console.log("En searchbar "+props)
   return (
      <div className={style.divSearch}>
         <input type='search' />
         <button onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
