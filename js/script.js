console.log('JS OK');

// Consegna
// L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// ! RECUPERO GLI ELEMENTI DAL DOM
const selectDifficulty = document.getElementById('number-of-cells');
const grid = document.getElementById('grid');
let diff = document.querySelectorAll('diff');
const generateButton = document.getElementById('generate');

// ! FUNZIONI NEUTRE
// const getRandNumber = (min, max) => Math.floor(Math.random() * (max - min) + 1 ) + min;
// console.log(getRandNumber(1, 100));



console.log(diff.value);

generateButton.addEventListener('click', function () {
    if (diff.value === 100) {
        diff = 100;
    } else if (diff.value === 81) {
        diff = 81;
    } else if (diff.value === 49) {
        diff = 49;
    }
    
    // CREO CELLE
    let cell100;
    let number100;
    for (i = 0; i < diff.value; i++) {
        cell100 = document.createElement('div');
        cell100.classList.add('cell-100')
        grid.appendChild(cell100);
        number100 = (i + 1);
        cell100.innerHTML = `${number100}`;
        console.log(number100);
    }
})
