window.addEventListener('DOMContentLoaded', (event) => {

    drawGrid(64);

    // Button for redrawing the grid
    const btn = document.querySelector('button');
    btn.addEventListener('click', event => {
        const size = parseInt(prompt("How many squares per side?", 64));

        drawGrid(size);
    })

});

function drawGrid(squaresPerSide) {
    const container = document.querySelector('#container');
    container.textContent = ''; // Clear container if redrawn

    // Draw squares
    const squareSideSize = container.clientWidth / squaresPerSide;

    for (let i = 0; i < squaresPerSide ** 2; i++) {
        const square = document.createElement('div');

        square.style.width = squareSideSize + "px"; // TODO
        square.style.height = squareSideSize + "px"; //TODO

        square.classList.add('square');
        container.appendChild(square);
    }

    // Make squares drawable
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', event =>
        {

            var theCSSprop = window.getComputedStyle(event.target, null).getPropertyValue("background-color");

            console.log(theCSSprop); // Returns a string in format rgb(x, x, x)
            console.log(typeof(theCSSprop))
            event.target.style.backgroundColor = 'black';
            
        })
    })
}