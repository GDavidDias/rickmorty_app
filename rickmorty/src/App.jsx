import './App.css';
//import Card from './components/Card.jsx';
import Cards from './components/cards/Cards.jsx';
import SearchBar from './components/searchBar/SearchBar.jsx';
//import characters, { Rick } from './data.js';
import characters from './data.js';

function App() {
   return (
      <div className='App'>
         <div>
            <SearchBar 
               onSearch={(characterID) => window.alert(characterID)} 
            />
         </div>
         <div>
            <Cards 
               characters={characters} 
            />
         </div>
      </div>
   );
}

export default App;
