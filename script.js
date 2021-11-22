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
