window.onload = () => {
  const board = document.getElementById('pixel-board');
  for (let j = 1; j <= 5; j += 1) {
    const pixelLine = document.createElement('div');
    for (let i = 1; i <= 5; i += 1) {
      const pixelSquare = document.createElement('div');
      pixelSquare.className = 'pixel';
      pixelSquare.style.backgroundColor = 'white';
      pixelLine.appendChild(pixelSquare);
    }
    board.appendChild(pixelLine);
  }
};

function selectColor() {
  const palette = document.getElementById('color-palette');
  palette.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  });
}

selectColor();

function paintPixel() {
  const allPixels = document.getElementById('pixel-board');
  allPixels.addEventListener('click', (event) => {
    const selectedElement = document.querySelector('.selected');
    const selectedColor = selectedElement.id;
    if (event.target.className === 'pixel') {
      event.target.style.backgroundColor = selectedColor;
    }
  });
}

paintPixel();

function clearBoard() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', () => {
    const allPixels = document.getElementsByClassName('pixel');
    for (let i = 0; i < allPixels.length; i += 1) {
      allPixels[i].style.backgroundColor = 'white';
    }
  });
}

clearBoard();
