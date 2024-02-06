import Header from "./Header.js";
import PokeApi from "./PokeApi.js";
import Pokedesk from "./Pokedesk.js";
import Screen from "./Screen.js";
const root = document.getElementById('root');
const info = document.createElement('div');
let back = false;
let pokeId = 1;
const pokeapi = new PokeApi();
const res = async api =>{
  const data = await api.getPokemon();
  return data;
} 
pokeapi.pokemon = pokeId;
let pokemon = await res(pokeapi);
const screen = new Screen(pokemon.name, pokemon.stats,pokemon.sprites.front_default);
const header = new Header();
const pokedesk = new Pokedesk();
root.appendChild(header.render());
info.appendChild(screen.render());
root.appendChild(info);
root.appendChild(pokedesk.render());
const rightControl = document.querySelector('.right-control');
const leftControl = document.querySelector('.left-control');
const inputSearch = document.getElementById('search');
const rotate = document.getElementById('rotate');
rightControl.addEventListener('click', async () => {
  if(pokeId === 1008) pokeId = 0;
  pokeapi.pokemon = ++pokeId;
  pokemon = await res(pokeapi);
  screen.update(pokemon.name, pokemon.stats,pokemon.sprites.front_default);
  info.replaceChild(screen.render(),info.firstChild);
});
leftControl.addEventListener('click', async () => {
  if(pokeId === 1) pokeId = 1009;
  pokeapi.pokemon = --pokeId;
  pokemon = await res(pokeapi);
  screen.update(pokemon.name, pokemon.stats,pokemon.sprites.front_default);
  info.replaceChild(screen.render(),info.firstChild);
});

inputSearch.addEventListener('keyup', async (e) => {
  if(e.key === 'Enter'){
    if(!isNaN(inputSearch.value)) pokeId = inputSearch.value;
    pokeapi.pokemon = inputSearch.value;
    pokemon = await res(pokeapi);
    screen.update(pokemon.name, pokemon.stats, pokemon.sprites.front_default);
    info.replaceChild(screen.render(),info.firstChild);
  }
});

rotate.addEventListener('click', () => {
  if(!back){
    screen.update(pokemon.name, pokemon.stats, pokemon.sprites.back_default);
  }else{
    screen.update(pokemon.name, pokemon.stats, pokemon.sprites.front_default);
  }
  info.replaceChild(screen.render(),info.firstChild);
  back = !back;
});

