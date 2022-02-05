//Step 1: Create container for the 16 x 16 boxes
    //Here I assgned variables to the container ID

const gridContainer = document.querySelector('#grid-container');
const resetButton = document.querySelector('#reset-grid');
const rainbowModeButton = document.querySelector('#change-colour-button');
const blackModeButton = document.querySelector('#black')
const eraserModeButton = document.querySelector('#eraser')



// Step 2: Create a webpage with a 16x16 grid of square divs


// Button event listeners
let type = 'black';

rainbowModeButton.addEventListener('click', function() {
    type = 'random';
  });
blackModeButton.addEventListener('click', function() {
    type = 'black';
});

eraserModeButton.addEventListener('click', function(){
    type = 'white';
});

// Here I created a function that uses a loop to create 256 divs. I assigned those divs to be the child of the container div
const createBoxes = (size) => {
    
    for (let rows = 0; rows < size; rows++) {
     const row = gridContainer.appendChild(document.createElement('div'));
     row.className = 'generatedRow';
  
        for (let columns = 0; columns < size; columns++){
                const gridBoxes = row.appendChild(document.createElement('div'));
                gridBoxes.className = 'box';
                gridBoxes.style.width = 500 / size + "px";
                gridBoxes.style.height = 500 / size + "px";

// Step 3: Set up a “hover” effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.

                gridBoxes.addEventListener('mouseover', function hover() {
                    if (type === 'random') {
                        randomColours(gridBoxes);
                        return console.log(type);
                    } else if (type === 'white'){
                        hoverEraser(gridBoxes);
                        return console.log(type)
                    } else (type === 'black') 
                        hoverBlack(gridBoxes);
                        return console.log(type);
                }) 
        }
    }
};

createBoxes(16);

/* Step 4: Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid. 
Once entered, the new grid should be generated in the same total space as before (e.g. 960px wide) so that you’ve got a new sketch pad. 
Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent. */

    /* Created a function that prompts the user for a response to the request 'Please select a number between 1 and 100'. Then it takes the users input and assigns the value to the createBoxes function. It also 
    erases the original 16x16 grid with the remove.Child() method. */
    
const resetGrid = () => {
    let userPrompt = prompt('Please select a number between 1 and 100');
    let userInput = parseInt(userPrompt);
    
    if (userInput > 0 && userInput < 101) {
        while(gridContainer.firstChild)
            gridContainer.removeChild(gridContainer.firstChild);
            return createBoxes(userInput);
        
    } else 
        alert('You must return a number between 1 and 100');
        while(gridContainer.firstChild)
            gridContainer.removeChild(gridContainer.firstChild);
            return createBoxes(16)
};

// Step 5: Wth each pass through with the mouse change it to a completely random RGB value. 

// Each of these functions has a parameter called element. The goal is to return the element with the desired background colour. 

const randomColours = element => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return element.style.backgroundColor = `rgb(${r},${g},${b})`
};

const hoverBlack = element => {
    return element.style.backgroundColor = 'black'
};

const hoverEraser = element => {
    return element.style.backgroundColor = 'white'
};