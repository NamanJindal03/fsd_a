const containerTag = document.querySelector('#container');
const prevBtnTag = document.querySelector('#prev');
const nextBtnTag = document.querySelector('#next');
const imagesTag = document.querySelectorAll('img');
/* nodelist ->  */
let currentIndex = 0;

const PREV_CLICKED = -1;
const NEXT_CLICKED = 1;

containerTag.addEventListener('click', (e)=>{
    if(e.target === prevBtnTag){
        // console.log('go behind')
        handleSlideShow(PREV_CLICKED);
    }
    if(e.target === nextBtnTag){
        // console.log('go forward');
        handleSlideShow(NEXT_CLICKED);
    }
})

function handleSlideShow(prevOrNext){
    // nextBtnTag.style.display = 'none'

    if(currentIndex + prevOrNext >=imagesTag.length || currentIndex + prevOrNext < 0){
        // console.log('cant move more in this direction');
        // alert('cant move more in this direction');
        // if(currentIndex+1>= imagesTag.length){
        //     nextBtnTag.style.display = 'none'
        // }
        // else{
        //     prevBtnTag.style.display = 'none'
        // }
        return;
    }
    nextBtnTag.style.display = 'block';
    prevBtnTag.style.display = 'block';


    currentIndex+= prevOrNext;

    // if(prevOrNext === 1){
        imagesTag[currentIndex-prevOrNext].style.transform = `translateX(100%)`;
        imagesTag[currentIndex].style.transform = `translateX(-${currentIndex *100}%)`;
    // }
    // if(prevOrNext === -1){
        // imagesTag[currentIndex+1].style.transform = `translateX(100%)`;
        // imagesTag[currentIndex].style.transform = `translateX(-${currentIndex *100}%)`;
    // }

    if(currentIndex+1 === imagesTag.length){
        nextBtnTag.style.display = 'none'
    }
    if(currentIndex === 0){
        prevBtnTag.style.display = 'none'

    }


}
