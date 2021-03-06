const board = document.getElementById('pixel-board');
const generateInput = document.getElementById('board-size');
const generateButton = document.getElementById('generate-board');

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
  if (generateInput.value === '') {
    alert('Board inválido!');
  } else {
    while (board.firstChild) {
      board.removeChild(board.firstChild);
    }
    createBoard(generateInput.value);
    generateInput.value = '';
  }
}

function changeBoardEvents() {
  generateButton.addEventListener('click', changeBoardSize);
  generateInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      changeBoardSize();
    }
  });
}

changeBoardEvents();

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
    const selectedPixel = event.target;
    if (event.target.className === 'pixel') {
      selectedPixel.style.backgroundColor = selectedColor;
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
