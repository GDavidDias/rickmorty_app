import { connect } from "react-redux";
import Card from "../card/Card";
import style from "../favorites/Favorites.module.css"

function Favorites (props){
    console.log("en Favorites: ",props.myFavorites[0])
    return (
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
     );
}

function mapStateToProps(state){
    return{
        myFavorites:state.myFavorites,
    }
};

export default connect(mapStateToProps,null)(Favorites);