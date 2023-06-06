import { connect, useDispatch } from "react-redux";
import Card from "../card/Card";
import style from "../favorites/Favorites.module.css"
//import { FILTER, ORDER } from "../../redux/types";
import { filterCards, orderCards } from "../../redux/actions";
import { useState } from "react";


function Favorites (props){
    const [aux, setAux]=useState(false);
    const dispatch = useDispatch();

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value));
        setAux(true);
    }
    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value));
        setAux(true);
    }

    // console.log("en Favorites: ",props.myFavorites[0])
    return (
        <div>
            <div >
                <select onChange={handleOrder}>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="All">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>
            </div>
            <div className={style.listCards}>
            {
                props.myFavorites.map(character=>(
                    <Card
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        species={character.species}
                        gender={character.gender}
                        origin={character.origin?.name}
                        image={character.image}
                        onClose={props.onClose}
                        //onClose={()=>window.alert('Emulamos que se cierra la card')}
                    />
                ))
            }
            </div>
        </div>
     );
}

function mapStateToProps(state){
    return{
        myFavorites:state.myFavorites,
    }
};

export default connect(mapStateToProps,null)(Favorites);
