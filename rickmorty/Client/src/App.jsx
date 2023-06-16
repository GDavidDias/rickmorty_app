import { useEffect, useState } from 'react';
import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import SearchBar from './components/searchBar/SearchBar.jsx';
import axios from "axios";
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom"
import About from './components/about/About';
import Detail from './components/detail/Detail';
import NotFound from './components/notfound/NotFound';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';

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
   const onSearch = async id=>{

      // axios(`https://rickandmortyapi.com/api/character/${id}`)
      // axios(`http://localhost:3001/rickandmorty/character/${id}`)
      try{
         const resp = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
         const {data} = resp;
         
         let guarda=true;
            characters.forEach((pers)=>{
               if(pers.id === id) guarda=false;
            });
            
         guarda 
            ?setCharacters((oldChars)=>[...oldChars, data])
            :window.alert('Ya se encuentra')
      
      }catch(error){
         window.alert('¡No hay personajes con este ID!')
      }


      // .then(({ data }) => {
      //    if (data.name) {

      //       //------------------------------
      //       //EXTRA homework 03
      //       //Para buscar el ID Y NO GUARDAR REPETIDOS
      //       let guarda=true;
      //       characters.forEach(pers=>{
      //          if(pers.id == Number(id)){
      //             guarda = false;
      //          } 
      //       })
      //       //console.log(guarda);            
      //       if (guarda){
      //          setCharacters((oldChars) => [...oldChars, data]);
      //       }else{
      //          window.alert('Ya se encuentra');
      //       }
      //       //----------------------------

      //    } else {
      //       window.alert('¡No hay personajes con este ID!');
      //    }
      // });
      
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
         character => character.id != id
      );
      //cambio el estado de mi character y paso los
      //filtrados para que se actualice.
      setCharacters(characterfiltrados);
   }

   const location = useLocation()
   console.log("de App.jsx",location.pathname)

   const [access, setAccess] = useState(false)
   // const EMAIL = "gdd@gmail.com";
   // const PASSWORD = "123456";

   const navigate = useNavigate();

   async function login(userData){
      const{email, password} = userData;
      try{
         const URL = 'http://localhost:3001/rickandmorty/login/';
         const {data} = await axios(URL + `?email=${email}&password=${password}`);
         const {access} = data;
         //console.log(access)
         setAccess(access);
         access && navigate('/home');
      }catch(error){
         window.alert('error en login!')
      }
   }

   // function login(userData) {
   //    const { email, password } = userData;
   //    const URL = 'http://localhost:3001/rickandmorty/login/';
      
   //    axios(URL + `?email=${email}&password=${password}`)
   //          .then(({ data }) => {
   //             const { access } = data;
   //             setAccess(data);
   //             access && navigate('/home');
   //          });
   // }
   // function login(userData){
   //    if(userData.password === PASSWORD && userData.email === EMAIL){
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   //No permite que ingrese is access es false
   //Prover este cambio de estado para revisar la pagina de login
   useEffect(()=>{
      !access && navigate('/');
   },[access]);


   return (
      <div className='App'>
         <div>
            {location.pathname!='/' ?<Nav onSearch={onSearch} onInsert={onInsert}/> :null}
         </div>
         <div>
            <Routes>
               <Route exact path='/home' element={
                  <Cards 
                  characters={characters} 
                  onClose={onClose}
               />
               } />
               <Route exact path='/about' element={<About/>} />
               <Route exact path='/favorites' element={<Favorites/>} />
               <Route exact path='/detail/:id' element={<Detail/>} />
               <Route exact path='/' element={<Form login={login}/>} />
               <Route exact path='/notfound' element={<NotFound/>} />
               <Route exact path='*' element={<Navigate to="/notfound" replace/>} />
            </Routes>
         </div>
      </div>
   );
}

export default App;
