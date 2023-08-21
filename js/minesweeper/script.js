const gridSize = 9; //GRID_SIZE
const numberOfBombs = 10;
const gridElement = document.querySelector('#grid');
let gridArray = [];

function shuffleArray(array){
    console.log(array);
    for(let i=0; i<array.length; i++){
        /* Math.floor(Math.random()*max -min)+ min */
        const randomIndex = Math.floor(Math.random() * array.length);
        console.log(randomIndex);
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
}
function generateGrid(){
    const fragement = document.createDocumentFragment();
    for(let i=0; i< gridArray.length; i++){
        const cell = document.createElement('div');
        cell.setAttribute('cellNumber', i);
        cell.classList.add('cell');
        //TODO: Remove this code later
        if(gridArray[i] === 'bomb'){
            cell.classList.add('bomb');
        }

        fragement.append(cell);
    }
    gridElement.append(fragement);
}
function fillNumbers(){
    for(let i=0; i<gridArray.length; i++){

        if(gridArray[i] !== 'bomb') continue;

        let isLeft = (i%gridSize != 0);
        let isTop = !(i < gridSize);
        let isRight =  ((i+1) %gridSize) != 0;
        let isBottom = !(gridArray.length - gridSize  <= i);
        console.log(isBottom);
        // console.log(isLeft);

        if(isLeft && isTop && gridArray[i-gridSize -1] != 'bomb'){
            gridArray[i-gridSize -1]++;
        }
        if(isTop && gridArray[i-gridSize] != 'bomb'){
            gridArray[i-gridSize]++;
        }
        if(isTop && isRight && gridArray[i-gridSize + 1] != 'bomb'){
            gridArray[i-gridSize + 1]++;
        }
        if(isRight && gridArray[i+1] != 'bomb'){
            gridArray[i+1]++;
        }
        if(isRight && isBottom && gridArray[i+gridSize+1] != 'bomb'){
            gridArray[i+gridSize+1]++;
        }
        if(isBottom && gridArray[i+gridSize] != 'bomb'){
            gridArray[i+gridSize]++;
        }
        if(isBottom && isLeft &&  gridArray[i+gridSize -1 ] != 'bomb'){
            gridArray[i+gridSize -1 ]++;
        }
        if(isLeft && gridArray[i-1 ] != 'bomb'){
            gridArray[i-1 ]++;
        }
    }
    console.log(gridArray);
}

function initializeArrayAndBombs(){
    const bombArray = new Array(numberOfBombs).fill('bomb');
    const numberedArray = new Array((gridSize*gridSize) - numberOfBombs).fill(0);
    const concatenatedArray = numberedArray.concat(bombArray);
    const randomArray = shuffleArray(concatenatedArray);
    gridArray = randomArray;
}

function handleClick(e){
    //complete on your own -> 
}

function driver(){
    initializeArrayAndBombs();
    generateGrid();
    fillNumbers();
    gridElement.addEventListener('click', (e) => handleClick(e))
}

driver();