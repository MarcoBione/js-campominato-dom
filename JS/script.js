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

//userscore counter
const userScore = document.createElement('p');
userScore.innerHTML = `Benvenuto, per inizare a giocare seleziona la difficoltà!`;
userScore.classList.add('text-white-50');
document.getElementById('userscorecounter').appendChild(userScore);

//game initializing
function startGame(e){
    //prevent form submit
    e.preventDefault();

    //number of bombs
    const bomb = 16;

    //gamestatus
    let endGame = false;
    
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

    //generate bombs - function call
    const bombsGenerated = generateBombs (bomb, gameDiff);
    console.log(bombsGenerated);

    //reset playarea
    document.getElementById('playarea').innerHTML='';

    //userscore counter reset
    userScore.innerHTML = ``;

    //start score
    let score = 0;

    //cycle stamp
    for(let i = 1; i <= gameDiff; i++){
        const boxes = createBoxes(i, boxesNumberRow);
        boxes.addEventListener('click', function(){
            //check gameover
            if(!endGame){

                //check if boxes is a bomb
                if(bombsGenerated.includes(parseInt(boxes.innerText))){

                    //read the arreybomb for add class boom
                    for(let i = 0; i < bombsGenerated.length; i++){
                        console.log(bombsGenerated[i]);
                        boxes.classList.add('boom');
                    }
                    //add boom class to box w/bomb
                    //boxes.classList.add('boom');
                    endGame = true;
                    //display end message + userscore
                    userScore.classList.remove('text-white-50');
                    userScore.classList.add('text-danger');
                    userScore.innerHTML = `BOOM, hai pestato una mina!`;
                    
                }else{
                    score++;
                    boxes.classList.add('safe'); //add safe color to safe boxes
                    userScore.classList.remove('text-white-50');
                    userScore.classList.add('text-success');
                    userScore.innerHTML = `Tutto tranquillo! punteggio : ${score}`;
                }
                
            }
            
        });
        document.getElementById('playarea').appendChild(boxes);

    };

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
