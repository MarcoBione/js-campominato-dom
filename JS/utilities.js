//genRundomNumbers
function genCasualNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//generate bombs
function generateBombs (maxBomb, numberBoxes){
    //add array of bombs
    const arrayBombs = [];

    //cycle for create bombs and load to arrayBombs
    while(arrayBombs.length < maxBomb){
        //create randomnumber
        let randomNumber = Math.floor((Math.random() * numberBoxes) + 1);
        //check if is already exist
        if(!arrayBombs.includes(randomNumber)){
            arrayBombs.push(randomNumber);
        };
    };
    return arrayBombs;
};