import { Link } from "react-router-dom";
import style from "../card/Card.module.css";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import React, { useEffect, useState } from "react";
import { createStore } from "redux";

const Card = function(props) {
   
   const [isFav, setIsFav] = useState(false);
   
   // con el HOOK de dispatch, para componentes funcionales.
   // const dispatch = useDispatch();
   // dispatch(addFav())
   
   //uso destructuring
   // const{id,name,status,species,gender,origin,image} = props;


   const handleFavorite = () => {
      if(isFav){
         setIsFav(false)
         props.removeFav(props.id)
      }else{
         setIsFav(true)
         props.addFav(props)
      };
   }
   useEffect(()=>{
      props.myFavorites.forEach((fav)=>{
         if(fav.id === props.id){
            setIsFav(true);
         }
      })
   },[props.myFavorites])

   //console.log(props)
   return (
      <div className={style.divCard}>
         <div>
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }
            <button 
               className={style.button} 
               onClick={()=>props.onClose(props.id)}
            >X</button>
         </div>
         <div>
            <Link to={`/detail/${props.id}`}>
               <h2>{props.name}</h2>
            </Link>
            {/* <h2>{props.status}</h2>
            <h2>{props.species}</h2>
            <h2>{props.gender}</h2> */}
            <h2>{props.origin}</h2>
            <img src={props.image} alt='' />
         </div>
      </div>
   );
}


function mapDispatchToProps(dispatch){
   return{
      addFav:(character)=>dispatch(addFav(character)),
      removeFav:(id)=>dispatch(removeFav(id)),
   }
}

function mapStateToProps(state){
   return{
      myFavorites:state.myFavorites,
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);