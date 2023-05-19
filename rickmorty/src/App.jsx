import { useEffect, useState } from 'react';
import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import SearchBar from './components/searchBar/SearchBar.jsx';
import axios from "axios";
import {Navigate, Route, Routes} from "react-router-dom"
import About from './components/about/About';
import Detail from './components/detail/Detail';
import NotFound from './components/notfound/NotFound';

//import characters, { Rick } from './data.js';
//import characters from './data.js';

function App() {
   

   const [characters,setCharacters]=useState([]);
   //3- ir guardando en characters los objetos = [{-},{-}]

   const example = {
      id: 1,
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human',
      gender: 'Male',
      origin: {
         name: 'Earth (C-137)',
         url: 'https://rickandmortyapi.com/api/location/1',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   };

   const onInsert = ()=>{
      setCharacters([
         ...characters,
         example
      ])
   }

   //7 - ahora on Search, ya no hardcodea un ejemplo, sino que
   //se conecta a la api para traer un personaje segun el 
   //id que le pasa el input al presiona el boton en searchbar
   const onSearch = id=>{

      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {

            //------------------------------
            //EXTRA homework 03
            //Para buscar el ID Y NO GUARDAR REPETIDOS
            const guarda=true;
            characters.forEach(pers=>{
               if(pers.id == Number(id)){
                  guarda = false;
               } 
            })
            //console.log(guarda);            
            if (guarda){
               setCharacters((oldChars) => [...oldChars, data]);
            }else{
               window.alert('Ya se encuentra');
            }
            //----------------------------

         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
      
      //4 - Creamos funcion onsearch
      //modifico estado characters, traer lo qeu tenia
      //y pasarle exxample

      //setCharacters([...characters, example])
   }

   //8 - esta funcion es para borrar la card del personaje
   //cuando presionamos el boton X de la card.
   const onClose = id =>{
      //Filtro las cartas de mi estado para quedarme
      //con todos aquellas que sean distinto del 
      //ID que quiero borrar.
      //como el id que recibe por parametro es string
      //se parsea como number
      const characterfiltrados = characters.filter(
         character => character.id != Number(id)
      );
      //cambio el estado de mi character y paso los
      //filtrados para que se actualice.
      setCharacters(characterfiltrados);
   }

   return (
      <div className='App'>
         <div>
            <Nav 
               onSearch={onSearch} 
               onInsert={onInsert}
            />
         </div>
         <hr/>
         <div>
            <Routes>
               <Route exact path='/home' element={
                  <Cards 
                  characters={characters} 
                  onClose={onClose}
               />
               } />
               <Route exact path='/about' element={<About/>} />
               <Route exact path='/detail/:id' element={<Detail/>}/>
               <Route exact path='/notfound' element={<NotFound/>}/>
               <Route exact path='*' element={<Navigate to="/notfound" replace/>}/>
            </Routes>
         </div>
      </div>
   );
}

export default App;
