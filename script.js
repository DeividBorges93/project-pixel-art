window.onload = pixelArts;

function pixelArts() {
  pageTitle();
  createColorPalette();
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