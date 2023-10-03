import createColors from "./app/paleta_de_cores/createColors.js";
import createBlankCanvas from "./app/tela_em_branco/createBlankCanvas.js";
import colorSelection from "./app/paleta_de_cores/colorSelection.js";
import paintAPixel from "./app/tela_em_branco/paintAPixel.js";
import cleanTheCanvas from "./app/tela_em_branco/cleanTheCanvas.js";
import clearAPixel from "./app/tela_em_branco/clearAPixel.js";
import saveAPicture from "./app/tela_em_branco/saveAPicture.js";

window.onload = pixelArts;

function pixelArts() {
  createColors();
  createBlankCanvas();
  colorSelection();
  paintAPixel();
  cleanTheCanvas();
  clearAPixel();
  saveAPicture();
};
