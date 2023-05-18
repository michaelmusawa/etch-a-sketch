const main = document.querySelector('#main');

for (let i = 0; i < 16; i++) {

  for (let j = 0; j < 16; j++) {
    const grid = document.createElement('div');
    grid.classList.toggle('grid');
    grid.style.cssText = "border: solid 1px grey";
    main.appendChild(grid);
  }
}



