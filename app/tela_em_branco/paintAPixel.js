export default function paintAPixel() {
  const pixelBoardSelected = document.getElementById('pixel-board');
  pixelBoardSelected.addEventListener('click', paintFramePixel);
};

function paintFramePixel(event) {
  const color = document.querySelector('.selected');
  event.target.style.backgroundColor = color.style.backgroundColor;
};