
export default function clearAPixel() {
  const clearPixel = document.getElementById('clear-one-button');
  clearPixel.addEventListener('click', cleanFramePixel);
};

function cleanFramePixel(event) {
  
  const colorPalette = document.getElementById('colors');
  !colorPalette.lastChild.id ? colorPalette.lastChild.id  = 'rubber' : colorPalette.lastChild.id = '';

  const rubber = document.getElementById('rubber');
  const previousColor = document.querySelector('.previous-color');
  const selectColor = document.querySelector('.selected');
  const clearPixel = document.getElementById('clear-one-button');

  if (rubber) {
    clearPixel.style.backgroundColor = '#727070';
    clearPixel.style.boxShadow = 'inset 0px 1px 0px 0px #f1f0f0';

    if (previousColor) {
      previousColor.classList.remove('previous-color');
    }
    
    selectColor.classList.add('previous-color');
    selectColor.classList.remove('selected');
    rubber.classList.add('selected');
  } else {
    clearPixel.style.backgroundColor = '';
    selectColor.classList.remove('selected');
    previousColor.classList.add('selected');
    previousColor.classList.remove('previous-color');
  }
};