import Card from '../card/Card';
import style from "../cards/Cards.module.css";

//characters lo paso por desestructurado
export default function Cards({characters}) {
   //console.log(characters)
   return (
      <div className={style.listCards}>
      
         {
            characters.map(character=>(
               <Card
               key={character.id}
               name={character.name}
               status={character.status}
               species={character.species}
               gender={character.gender}
               origin={character.origin.name}
               image={character.image}
               onClose={()=>window.alert('Emulamos que se cierra la card')}
               />
            ))
         }
      </div>
   );
}
