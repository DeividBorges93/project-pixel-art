function addPixel (number) {
  const colorBorder = document.getElementById('pixel-board');
  const numberPixels = number * number;
  for( let index = 1; index <= numberPixels; index += 1) {
    const pixel = document.createElement('div');
    pixel.className = 'pixel';
    colorBorder.appendChild(pixel);
  }
};

function removePixel() {
  const pixels = document.querySelectorAll('.pixel');

  for (let index = 0; index < pixels.length; index += 1) {
    pixels[index].remove();
  }
};

function checkRange(range) {
  if (range < 5) {
    const tamanho = 5;
    return tamanho;
  };
  if (range > 30) {
    const tamanho = 30;
    return tamanho;
  } else return range;
};

function squareInPixel() {
  const divBlankCanvas = document.getElementById('pixel-board');
  const numberPixels = document.getElementById('define-square-size').value;
  const verifiedRange = checkRange(numberPixels);
  removePixel();
  addPixel(verifiedRange);
  const board = verifiedRange * 40;
  const px = 'px';
  divBlankCanvas.style.width = board + px;
  divBlankCanvas.style.height = board + px;
}

export default function createBlankCanvas() {
  const createBtn = document.getElementById('define-button');
  createBtn.addEventListener('click', squareInPixel);
}