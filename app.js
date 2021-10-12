const board = document.querySelector('#board');
const inputChanger = document.querySelector('#inputChanger');
const square_item = document.querySelectorAll('.square');
let squares_number = 999;

const colors = [
    '#FDAC53',
    '#9BB7D4',
    '#B55A30',
    '#F5DF4D',
    '#0072B5',
    '#A0DAA9',
    '#E9897E',
    '#00A170',
    '#926AA6',
    '#D2386C',
    '#939597',
    '#EFE1CE',
    '#E0B589',
    '#9A8B4F',
];

setSquaresNumber();

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function cleanColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #111`;
}

function getRandomColor() {
    const index = Math.floor(Math.random() * colors.length);

    return colors[index];
}

function setSquaresNumber() {
    const newSquareNumber = +inputChanger.value > 0 ? +inputChanger.value : squares_number;
 
    board.innerHTML = '';

    for (let i = 0; i < newSquareNumber; i++) {
        const square = document.createElement('div');
        
        square.classList.add('square');
    
        square.addEventListener('mouseover', () => setColor(square));
        square.addEventListener('mouseleave', () => cleanColor(square));
    
        board.append(square);
    }
}