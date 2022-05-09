window.onload = pixelArts;

function pixelArts() {
  pageTitle();
  createColorPalette();
  createColors();
  firstColor ();
};

function pageTitle() {
  const titleH1 = document.createElement('h1');
  titleH1.id = 'title';
  titleH1.innerText = 'Paleta de Cores';
  document.body.appendChild(titleH1);
};

function createColorPalette() {
  const colorPalette = document.createElement('section');
  colorPalette.id = 'color-palette';
  document.body.appendChild(colorPalette);
};

function createColors() {
  const colors = ['brown', 'orange', 'green', 'red']
  for(const color of colors) {
    const divColors = document.createElement('div');
    const colorPalette = document.getElementById('color-palette');
    colorPalette.appendChild(divColors);
    divColors.className = 'color';
    divColors.style.backgroundColor = color;
  }
};

function firstColor () {
  const firstColor = document.getElementById('color-palette').firstChild;
  firstColor.style.backgroundColor = 'black';
  firstColor.classList.add('selected');
};