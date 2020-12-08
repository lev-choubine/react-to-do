
import './App.css';
import ListItem from './Components/ListItem.js';
let Poke=[]


fetch('http://pokeapi.co/api/v2/pokemon?limit=151')
.then(response => {
    if (response.ok){
    
        return response.json();
    
    }
})
.then(pokemon => {
    // console.log(pokemon);
       for(let i= 0; i < pokemon.results.length; i++){
        Poke.push(pokemon.results[i].name)
        console.log(Poke)
       }
    }


).catch(error => {
    console.log(error)
});

function App(){

 const doThis = Poke.map((eachPoke, idx)=>{
   return < ListItem line={eachPoke}/>
  
   
 })
    return (
      <div>
        <header>My List</header>
        <ul>
            {doThis}
        </ul>
      </div>
    )
  
}

export default App;
