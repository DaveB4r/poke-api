export default class Screen{
  constructor(name,facts={},image) {
    this.name = name;
    this.facts = facts;
    this.image = image;
  }
  update(name,facts={},image){
    this.name = name;
    this.facts = facts;
    this.image = image;
  }
  statitics(){
    if(this.facts.length > 0){
      const ul = document.createElement('ul');
      this.facts.forEach(fact => {
        const li = document.createElement('li');
        li.innerHTML = `<b class="stat-name">${fact.stat.name}</b>: ${fact.base_stat}`;
        ul.appendChild(li);
      });
      return ul;
    }
  }
  render(){
    const screen = document.createElement('div');
    const title = document.createElement('div');
    const screenImage = document.createElement('div');
    const facts = document.createElement('div');
    title.className = 'title';
    screenImage.className = 'screen-image';
    facts.className = 'facts';
    const h1 = document.createElement('h1');
    const ul = this.statitics();
    const img = document.createElement('img');
    img.src = this.image;
    h1.innerHTML = this.name;
    screen.className = 'screen';
    title.appendChild(h1);
    screenImage.appendChild(img);
    facts.appendChild(ul);
    screen.appendChild(title);
    screen.appendChild(screenImage);
    screen.appendChild(facts);
    return screen;
  }
}