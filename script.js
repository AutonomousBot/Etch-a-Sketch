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