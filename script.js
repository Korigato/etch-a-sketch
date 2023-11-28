const container = document.querySelector('#container');
function createGrids(num = 16) {
    container.innerHTML = '';
    const totalGrids = num * num;
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
    for(let i = 0; i < totalGrids; i += 1) {
        const createDiv = document.createElement('div');
        createDiv.classList.add('grid-cell');
        container.appendChild(createDiv);
    }
        const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black'; // Change color on hover
        });

        cell.addEventListener('click', () => {
            cell.style.backgroundColor = 'black'; // Change color permanently on click
        });
    });

    }
    document.querySelector('.generate').addEventListener('click', function() {
        const userInput = prompt('Enter a number between 1 and 100');
        const num = parseInt(userInput);
        if (num >= 1 && num <= 100) {
            createGrids(num);
        } else {
            alert('I said between 1 and 100 filthy bitch ass gigga nigga');
        }
    });
createGrids();
