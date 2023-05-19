import style from "../card/Card.module.css";

export default function Card(props) {
   //console.log(props)
   return (
      <div className={style.divCard}>
         <div>
            <button 
               className={style.button} 
               onClick={()=>props.onClose(props.id)}
            >X</button>
         </div>
         <h2>{props.name}</h2>
         <h2>{props.status}</h2>
         <h2>{props.species}</h2>
         <h2>{props.gender}</h2>
         <h2>{props.origin}</h2>
         <img src={props.image} alt='' />
      </div>
   );
}
