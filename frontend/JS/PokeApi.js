export default class PokeApi{
  constructor(pokemon) {
    this.pokemon = pokemon;
  }
  async getPokemon(){
    const response = await fetch(`http://localhost:8000?pokemon=${this.pokemon}`);
    const data = await response.json();
    return data;
  }
}