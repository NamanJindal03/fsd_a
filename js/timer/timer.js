// javascript code goes here

const timeDisplay=document.getElementById('time');
const startButton= document.getElementById('start');
const stopButton=document.getElementById('stop');
const pauseButton=document.getElementById('pause');
// console.log(timeDisplay, startButton,pauseButton)

stopButton.disabled=true;
pauseButton.disabled=true;

let startTime=0;
let timeinterval;
let paused=false;
let midTime = 0;
let currentime = 0;
// const SECOND = 


function updateDisplay(){
    currentime=new Date().getTime()-startTime + midTime;
    // console.log(currentime);
    const MILLISECONDS = 1000;
    // const SECONDS = MILLISECONDS* 
    const seconds=Math.floor((currentime % (60* 1000))/MILLISECONDS);
    const minutes=Math.floor((currentime% 3600000)/60000);
    const hours=Math.floor(currentime/3600000);
    const timeString=`${hours.toString().padStart(2,'0')}:${minutes.toString().padStart(2,'0')}:${seconds.toString().padStart(2, '0')}`;
    timeDisplay.textContent=timeString;

}

function start(){
    startTime=new Date().getTime();
    timeinterval= setInterval(updateDisplay,500);
    startButton.disabled=true;
    pauseButton.disabled=false;
    stopButton.disabled=false;
}

function pause(){
    if(paused){
        //continue getting hit
        paused=false;
        pauseButton.textContent='Pause';
        startTime= new Date().getTime();
        timeinterval=setInterval(updateDisplay,500);
    }
    else{
        //pause getting hit
        midTime = currentime;
        paused=true;
        pauseButton.textContent= 'Continue';
        clearInterval(timeinterval);
    }
}

function stop(){
    clearInterval(timeinterval);
    timeDisplay.textContent='00:00:00';
    pauseButton.textContent='Pause';
    startButton.disabled=false;
    pauseButton.disabled=true;
    stopButton.disabled=true;
    paused=false;
    startTime=0;
    timeinterval = 0;
    paused=false;
    midTime = 0;
    currentime = 0;
}

//