// const containerTag = document.querySelector('#container');
// const prevBtnTag = document.querySelector('#prev');
// const nextBtnTag = document.querySelector('#next');
// const imagesTag = document.querySelectorAll('img');
// /* nodelist ->  */
// let currentIndex = 0;

// const PREV_CLICKED = -1;
// const NEXT_CLICKED = 1;

// containerTag.addEventListener('click', (e)=>{
//     if(e.target === prevBtnTag){
//         // console.log('go behind')
//         handleSlideShow(PREV_CLICKED);
//     }
//     if(e.target === nextBtnTag){
//         // console.log('go forward');
//         handleSlideShow(NEXT_CLICKED);
//     }
// })

// function handleSlideShow(prevOrNext){
//     // nextBtnTag.style.display = 'none'

//     if(currentIndex + prevOrNext >=imagesTag.length || currentIndex + prevOrNext < 0){
//         // console.log('cant move more in this direction');
//         // alert('cant move more in this direction');
//         // if(currentIndex+1>= imagesTag.length){
//         //     nextBtnTag.style.display = 'none'
//         // }
//         // else{
//         //     prevBtnTag.style.display = 'none'
//         // }
//         return;
//     }
//     nextBtnTag.style.display = 'block';
//     prevBtnTag.style.display = 'block';


//     currentIndex+= prevOrNext;

//     // if(prevOrNext === 1){
//         imagesTag[currentIndex-prevOrNext].style.transform = `translateX(100%)`;
//         imagesTag[currentIndex].style.transform = `translateX(-${currentIndex *100}%)`;
//     // }
//     // if(prevOrNext === -1){
//         // imagesTag[currentIndex+1].style.transform = `translateX(100%)`;
//         // imagesTag[currentIndex].style.transform = `translateX(-${currentIndex *100}%)`;
//     // }

//     if(currentIndex+1 === imagesTag.length){
//         nextBtnTag.style.display = 'none'
//     }
//     if(currentIndex === 0){
//         prevBtnTag.style.display = 'none'

//     }


// }



// Object.getPrototypeOf();
// Object.setPrototypeOf();


// function Person(name){
//     this.name = name;
    
// }
// Person.prototype.getName = function(){
//     return this.name
// };

// const p1 = new Person('naman');
// const p2 = new Person('abcd');


// Person.prototype.getName = function(){
//     console.log('new call')
// }


// p1.getName = function(){
//     console.log('internal call');
// }


// console.log(p1);
// console.log(p2);

/* 
    cosntructo function and object
// */
// function User(){
//     this.gender = 'm';
// }


// const obj = {
//     name: 'naman',
//     age: 10
// }

// const obj2 = {
//     address: 'something',
//     address2: 'something else'
// }

// console.log(obj.prototype)


// // Object.setPrototypeOf(obj, obj2);

// Object.setPrototypeOf(User.prototype, obj2);

// const u1 = new User();




// function Human(name){
//     this.name = name
// }

// function Person(name, age){
//     Human.call(this, name)
//     this.age = age
// }

