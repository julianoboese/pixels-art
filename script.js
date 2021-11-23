const board = document.getElementById('pixel-board');

function generateRandomColor() {
  document.getElementById('black').style.backgroundColor = 'black';
  /** Função abaixo utilizada para geração de cores aleatórias;
   * Source: https://css-tricks.com/snippets/javascript/random-hex-color/ */
  const randomColor1 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor2 = Math.floor(Math.random() * 16777215).toString(16);
  const randomColor3 = Math.floor(Math.random() * 16777215).toString(16);
  document.getElementById('color1').style.backgroundColor = `#${randomColor1}`;
  document.getElementById('color2').style.backgroundColor = `#${randomColor2}`;
  document.getElementById('color3').style.backgroundColor = `#${randomColor3}`;
}

function checkInput(inputValue) {
  const side = inputValue;
  if (side < 5) {
    return 5;
  } if (side > 50) {
    return 50;
  }
  return side;
}

function createBoard(N) {
  const side = checkInput(N);
  for (let i = 1; i <= side; i += 1) {
    const pixelLine = document.createElement('div');
    for (let j = 1; j <= side; j += 1) {
      const pixelSquare = document.createElement('div');
      pixelSquare.className = 'pixel';
      pixelSquare.style.backgroundColor = 'white';
      pixelLine.appendChild(pixelSquare);
    }
    board.appendChild(pixelLine);
  }
}

window.addEventListener('load', () => {
  createBoard(5);
  generateRandomColor();
});

function changeBoardSize() {
  const generateButton = document.getElementById('generate-board');
  const generateInput = document.getElementById('board-size');
  generateButton.addEventListener('click', () => {
    if (generateInput.value === '') {
      alert('Board inválido!');
    } else {
      const allPixels = document.getElementById('pixel-board');
      while (allPixels.firstChild) {
        allPixels.removeChild(allPixels.firstChild);
      }
      createBoard(generateInput.value);
      generateInput.value = '';
    }
  });
}

changeBoardSize();

function selectColor() {
  const palette = document.getElementById('color-palette');
  palette.addEventListener('click', (event) => {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  });
}
Math.random();

selectColor();

function paintPixel() {
  board.addEventListener('click', (event) => {
    const selectedElement = document.querySelector('.selected');
    const selectedColor = selectedElement.style.backgroundColor;
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
