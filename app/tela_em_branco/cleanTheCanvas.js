export default function cleanTheCanvas() {
  const clearButton = document.getElementById('clear-all-button');
  clearButton.addEventListener('click', clearAllPixels);
};

function clearAllPixels() {
  let pixels = document.getElementsByClassName('pixel');
  for (pixels of pixels) {
    pixels.style.backgroundColor = 'white';
  }
}