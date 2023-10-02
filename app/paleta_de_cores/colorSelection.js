function changeSelectedColor(event) {
  const selectColor = document.querySelector('.selected');
  const previousColor = document.querySelector('.previous-color');
  const rubber = document.getElementById('rubber');
  const clearPixel = document.getElementById('clear-one-button');

  

  if (selectColor) {
    selectColor.classList.remove('selected');
    
    if (previousColor) {
      previousColor.classList.remove('previous-color');
    }
    selectColor.classList.add('previous-color'); // Adicione a classe "previous-color" ao elemento anterior

    if (rubber) {
      rubber.classList.remove('selected');
      rubber.className = 'color';
      rubber.id = '';
      clearPixel.style.backgroundColor = '';
    }
  }

  event.target.classList.add('selected');
  event.target.classList.remove('previous-color'); // Remova a classe "previous-color" do elemento atual
}

export default function selectColor() {
  const colors = document.getElementsByClassName('color');
  for (let index = 0; index < colors.length; index += 1) {
    colors[index].addEventListener('click', changeSelectedColor);
  }
}
