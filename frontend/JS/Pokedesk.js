export default class Pokedesk{
  
  controls(){
    const div = document.createElement('div');
    div.className = 'controls';
    div.innerHTML = `
      <div class="arrow left-control"></div>
      <div class="arrow right-control"></div>
    `;
    return div;
  }
  search(){
    const div = document.createElement('div');
    div.className = 'search';
    div.innerHTML = `
      <input id="search" type="search" placeholder="Buscar por nombre o id" />
    `;
    return div;
  }
  rotate(){
    const div = document.createElement('div');
    div.className = 'rotate';
    const image = document.createElement('img');
    image.src = 'http://localhost/poke-api/frontend/assets/rotate.png';
    image.id = 'rotate';
    div.appendChild(image);
    return div;
  }
  render(){
    const div = document.createElement('div');
    div.className = 'pokedesk';
    div.appendChild(this.rotate());
    div.appendChild(this.search());
    div.appendChild(this.controls());
    return div;    
  }
}