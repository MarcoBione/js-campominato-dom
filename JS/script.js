/*
Consegna
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
Consigli del giorno:  :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.
*/

//load play button
const btnPlay = document.querySelector('form');
btnPlay.addEventListener('submit', startGame);
//check load correctly
console.log(btnPlay);

//game initializing
function startGame(e){
    //prevent form submit
    e.preventDefault();

    //load user difficulty level
    const userDiff = document.querySelector('select').value;
    console.log(userDiff);

    //dowload user difficulty
    let gameDiff =0;

    //switch case for user difficulty
    switch(userDiff){

        //easy
        case "easy" : 
        gameDiff = 100;
        break;

        //medium
        case "medium" : 
        gameDiff = 81;
        break;

        //hard
        case "hard" : 
        gameDiff = 49;
        break;
    }
    console.log(gameDiff);

    //number of boxes x Row
    let boxesNumberRow = Math.sqrt(gameDiff);
    console.log(boxesNumberRow);

    document.getElementById('playarea').innerHTML='';

    //cycle stamp
    for(let i = 1; i <= gameDiff; i++){
        const boxes = createBoxes(i, boxesNumberRow);
        boxes.addEventListener('click', function safe(){
            boxes.classList.add('safe'); //add safe color to safe boxes
        });
        document.getElementById('playarea').appendChild(boxes);

    }

    //generating cubes
    function createBoxes(index , userDiff){

        const boxes = document.createElement('div');
        //box style print
        boxes.classList.add('boxstyle');
        //box dimensions
        boxes.style.width = `calc(100% / ${userDiff})`
        boxes.style.height = boxes.style.width;
        //content of the boxes
        boxes.innerText =index;
        //return boxes element
        return boxes;
    }
    
    
}
