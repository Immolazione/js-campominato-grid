console.log('JS OK');

// Consegna
// L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// RECUPERO GLI ELEMENTI DAL DOM
const selectDifficulty = document.getElementById('number-of-cells');
const grid = document.getElementById('grid');
const grid100 = document.getElementById('100');
const grid81 = document.getElementById('81');
const grid49 = document.getElementById('49');
const generateButton = document.getElementById('generate');

// FUNZIONI NEUTRE
const getRandNumber = (min, max) => Math.floor(Math.random() * (max - min) + 1 ) + min;
console.log(getRandNumber(1, 100));
