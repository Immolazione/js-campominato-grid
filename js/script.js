console.log('JS OK');

// Consegna
// L'utente indica TRAMITE DOM un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// ! RECUPERO GLI ELEMENTI DAL DOM
const difficulty = document.getElementById('number-of-cells').value;
const grid = document.getElementById('grid');
const generateButton = document.getElementById('generate');
console.log(difficulty);



// GENERATE BUTTON
generateButton.addEventListener('click', function () {
    

    // CREO CELLE



    // let cell100;
    // let number100;
    // for (i = 0; i < difficulty; i++) {
    //     cell100 = document.createElement('div');
    //     cell100.classList.add('cell-100')
    //     grid.appendChild(cell100);
    //     number100 = (i + 1);
    //     cell100.innerHTML = `${number100}`;
    //     console.log(number100);
    // }
})
