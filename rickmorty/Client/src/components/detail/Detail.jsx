import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import style from "./Detail.module.css"

export default function Detail(prop){
    const {id} = useParams();
    console.log(id)

    const[character, setCharacter] = useState({})

    useEffect(() => {
        // axios(`https://rickandmortyapi.com/api/character/${id}`)
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
        .then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);    
     console.log("De Character ",character)
     console.log(character.name)
     console.log(character.species)
     const {dec} = character
     console.log(dec)

    return(
        <div className={style.contenedor}>
            <div className={style.data}>
                <h1>{character.name ?character.name :null}</h1>
                <h3>STATUS | {character.status ?character.status :null}</h3>
                <h3>GENDER | {character.gender ?character.gender :null}</h3>
                <h3>SPECIE | {character.species ?character.species :null}</h3>
                <h3>ORIGIN | {character.origin?.name ?character.origin?.name :null}</h3>
            </div>
            <div className={style.image}>
                <img src={character.image ?character.image :null} alt={character.name} />
            </div>
            
        </div>
    )
}