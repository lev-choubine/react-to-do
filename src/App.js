
import './App.css';
import ListItem from './Components/ListItem.js';
import MyList from './Components/MyList.js';
let Tasks=['start', 'wait', 'finish'];


// fetch('http://pokeapi.co/api/v2/pokemon?limit=151')
// .then(response => {
//     if (response.ok){
    
//         return response.json();
    
//     }
// })
// .then(pokemon => {
//     // console.log(pokemon);
//        for(let i= 0; i < pokemon.results.length; i++){
//         Poke.push(pokemon.results[i].name)
//         console.log(Poke)
//        }
//     }


// ).catch(error => {
//     console.log(error)
// });

function App(){


  
   

    return (
      <div>
        <header>My List</header>
        <ul>
            <MyList arr={Tasks}/>
        </ul>
      </div>
    )
  
}

export default App;
