const main = document.querySelector('#main');
let currentGrid;


function drawGrid(pixels){

  clearGrid();

  for (let i = 0; i < pixels; i++) {

    for (let j = 0; j < pixels; j++) {
      const grid = document.createElement('div');
      
      grid.classList.toggle('grid');
      grid.style.cssText = "border: solid 1px grey";
      grid.style.cssText = `flex-basis: calc(100% / ${pixels})`;
      main.appendChild(grid);
  
      grid.addEventListener('mouseover', () => {
      grid.classList.add('hovered');
      grid.style.backgroundColor = 'black';
      });
      /*
      grid.addEventListener('mouseout', () => {
      grid.classList.remove('hovered');
      grid.style.backgroundColor = '';
      });
      */
    }
  }

  currentGrid = pixels;
}

function clearGrid() {
  // Remove all child elements of the main container
  while (main.firstChild) {
    main.firstChild.remove();
  }
}

function checkValue(pixels) {
  if (typeof pixels !== 'number') {
    pixels = prompt("Wrong value type! Enter only a number between 10 and 100: ");
    checkValue(Number(pixels));
  } else if (pixels > 100 || pixels < 10) {
    pixels = prompt("Wrong value! Make sure your value is between 10 and 100: ");
    checkValue(Number(pixels));
  } else {
    drawGrid(pixels);
  }
}


const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
    let pixels = 0;
    pixels = prompt("Enter pixels between 40 to 100: ");
    checkValue(pixels);
    
    
});

