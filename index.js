'use strict'

const pixelSize = 1;

// https://stackoverflow.com/questions/1484506/random-color-generator
function randomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function drawPixel(ctxt, color, x, y) {
  ctxt.fillStyle = color;
  ctxt.fillRect(x, y, pixelSize, pixelSize);
}

const canvas = document.getElementById('canvas');
const ctxt = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

for (let x = 0; x < width; x += pixelSize) {
  for (let y = 0; y < height; y += pixelSize) {
    drawPixel(ctxt, randomColor(), x, y);
  }
}