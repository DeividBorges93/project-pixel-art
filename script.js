window.onload = pixelArts;

function pixelArts() {
  pageTitle();
  createColorPalette();
  createColors();
  firstColor ();
  pixelFrame();
  selectColor();
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

function pixelFrame() {
  const framePrincipal = document.createElement('section');
  framePrincipal.id = 'pixel-board';
  document.body.appendChild(framePrincipal);
};

function selectColor() {
  const colorSelected = document.getElementsByClassName('color');
  for (let color = 0; color < colorSelected.length; color += 1) {
    colorSelected[color].addEventListener('click', changeSelectedColor);
  }
};

function changeSelectedColor(event) {
  const selectColor = document.querySelector('.selected');
  selectColor.classList.remove('selected');
  event.target.classList.add('selected');
};

function selectFramePixel() {
  const pixelBoardSelected = document.getElementById('pixel-board');
  pixelBoardSelected.addEventListener('click', paintFramePixel);
};

function paintFramePixel(event) {
  const color = document.querySelector('.selected');
  event.target.style.backgroundColor = color.style.backgroundColor;
};