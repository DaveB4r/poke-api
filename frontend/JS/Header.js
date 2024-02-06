export default class Header{
  render(){
    const div = document.createElement('div');
    div.innerHTML = `
      <div id="bg_curve1_left"></div>
      <div id="curve1_left">
        <div id="buttonGlass">
          <div id="reflect"></div>
        </div>
        <div class="miniButtonGlass b1"></div>
        <div class="miniButtonGlass b2"></div>
        <div class="miniButtonGlass b3"></div>
      </div>
    `;
    div.className = 'header';
    return div;
  }
}