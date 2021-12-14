// Declare x by x number for the grid. let gridSize = 16;
// Create variable to manipulate the squares.const blankSquare = document.getElementsByClassName("square")
// Fills grid based on number of squares per row. A square grid of SxS is constructed where S is the number of elements per row.
function gridSquares() { 
  const numberSquares = gridSize**2; 
  const grid = document.getElementById("grid"); 
  for (let i = 0; i < numberSquares; i++) {   
    const square = document.createElement("div");   
    square.setAttribute("class", "square");   
    square.style.setProperty("background-color", "transparent")   
    // In order to have x squares per row, flex basis has a value of 100/x where x is the number of items per row. */   
    square.style.setProperty("flex-basis", `${100/gridSize}%`)   
    square.style.filter = "brightness(100%)";   
    grid.appendChild(square); 
  }
}

// Create a hover event for each square.
function hoverDraw() {
  for (let i = 0; i < blankSquare.length; i++) {
    blankSquare[i].onmouseover = function(){
      if (blankSquare[i].style.backgroundColor == "transparent") {
        // Randomly change background color by calling randomColors()
        blankSquare[i].style.setProperty("background-color", `rgb(${randomColors()}, ${randomColors()}, ${randomColors()})`);
      }
      else {
        // Get current brightness amount of a square.
        let brightNumber = blankSquare[i].style.filter.replace(/[^0-9]/g,'')
        // Reduce brightness by 10% every hover after a color is assigned.
        blankSquare[i].style.filter = `brightness(${brightNumber - 10}%)`     
      }
    }
  }
}

// Return random value between 0 and 256.
function randomColors() { 
  let randomColorValue = Math.floor(Math.random() * 256);
  return randomColorValue;
}

// Add event to button
const button = document.getElementById("resetGrid");
button.onclick = clearGrid;
// Clear grid for a reset.
function clearGrid() {  document.getElementById("grid").innerHTML = "" 
  // Prompt user for new grid size. 
  promptGrid(); 
  // Create grid. 
  gridSquares(); 
  hoverDraw();
}

function promptGrid() { 
  gridSize = prompt("Enter a number of squares per side for the grid (less or equal to 100).") 
  while (gridSize > 100) {
    gridSize = prompt("Enter a number of squares per side for the grid (less or equal to 100).")
  } 
  // Display grid again by showing borders. 
  for (let i = 0; i < blankSquare.length; i++) {
    blankSquare[i].style.borderStyle = "solid";
  }
}

gridSquares();
hoverDraw();