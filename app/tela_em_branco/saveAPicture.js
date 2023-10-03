function saveDrawing() {
  const drawingArea = document.getElementById('pixel-board');

  // Use o HTML2Canvas para capturar a área do desenho
  html2canvas(drawingArea).then(function(canvas) {

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'desenho.png';

    link.click();
  });
}

// Adicione um ouvinte de eventos ao botão de salvar
export default function saveAPicture() {
  const saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', saveDrawing);
}
