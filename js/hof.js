// let array = [{key: 'a', value: 10}, {key: 'b', value: 20}, {key: 'c', value: 30}]; //initial arr


// const output = array.reduce((previousValue, currentValue)=>{
//     const {key, value} = currentValue;
//     const obj = new Object();

//     obj[key] = value;
//     previousValue.push(obj);
//     // previousValue.push({[key]: value});
//     return previousValue;
// }, [])
// console.log(output);

// const output = array.reduce((prev, curr) =>{
//     const {key, value} = curr;
//     prev[key] = value;
//     return prev;
// }, {})
// console.log(output)

//let newArr2 = {a: 10, b:20, c:30} //final 

// const res = array.reduce((acc, val) => {

//     const obj = {};
    
//     obj[val.key] = val.value;
    
//     return acc + JSON.stringify(obj);
    
// }, []);
//     console.log(res)
/* 
    [{a: 10}, {b: 20}] -> final output
*/
/* 
    reduce -> m

*/

// let newArr = [{a: 10}, {b: 20}, {c: 30}]; //newly generated array 


/* 
    dynamic object -> 

*/
// const newObj1 = {
//     name: 'naman',
//     age: 10, 
// }
/* 
    How Can I iterate over a object using map
*/


// const info = Array(newObj1).map((val) => {

//     return val.name;
    
// });
// console.log(info)

//[name, age]
// const output = Object.keys(newObj1).map((objKey)=>{
//     console.log('key : ', objKey);
//     console.log('value : ', newObj1[objKey]);
// })


/* 
    Object.keys
    Object.values
    Object.entries 

    Object.freeze
    Object.seal

    
    
    
    
    
    Object.getPrototypeOf
    Object.isFreeze()

*/

// const obj = {
//     name: 'naman',
//     age: 10,
//     nested: {nest1: 'n', nest2: '2'}
// }
// // Object.freeze(obj);
// Object.freeze(obj);

// // obj.name = 'abcd';
// obj.name = 'nj';
// obj.add = 'add';
// console.log(obj);
// console.log(obj);
/* 
    shallow copy, deep copy,
*/

// const obj2 = {...obj};
// obj2.age = 30;
// console.log(obj2);
// // shallow freeze

// obj.nested.nest1 = 'abcdefghijkl';
// console.log(obj)


/* 
    form -> 

    key -> value -> 
*/

/* 

*/
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));



// const abcd = {
//     name: 'naman',
//     age: 2
// }

// const abcd2 = abcd;

// abcd2.name = 'nj';
// console.log(abcd2);
// console.log(abcd);

/* 
    object and array -> reference 
    nested deep copy 

    shallow copy -> only on the 1st level
    deep copy -> all levels on nesting
*/

/* 
    let const -> 

    what is hoisting? ->>>
    process in which variable declaration and fns expression are moved to top of respective SCOPE

    phenomon in which it seems like the variable are moved to the top of the scope, and are variables
    are given a value undefined, normal funciton are referenfced.

    let const -> 
*/

// let sample1 = 10;
// function abcd(){
//     var testVar = 100;
//     let sample3 = 400;
//     // console.log(sample2); //not defined ->no TDZ for sample2, memory allocation for it hasnt even happend
//     {
//         console.log(sample2); //cannot access before initialization -> TDZ
//         let sample2 = 10; //
//     }
// }

// abcd();

// function test(){
//     let abcd = 5;
//     console.log(abcd);//5
//     {
//         let abcd = 10;
//         console.log(abcd);//10
//     }
//     {
//         abcd = 50; //not doing memory allocation, hence we are referencing the heirarchial lexical environment
//     }
//     console.log(abcd);//50
// }
// test();

// function test2(){
//     const func = ()=>{
//         console.log('func');
//     }
//     return [
//         func,  //0 index
//         ()=>{console.log('func2')} //1st index
//     ]
// }

// const output = test2();
// const check = [()=>{console.log('test3')}, [...output] ]
// check[1]; //func2
// console.log(check[1]) //array -> [func def, func ]
// var b;
// function test(){
//     let a = b = 30;
//     /* '
//         b = 30;
//         let a = b;
    
//     */



//     console.log(a); //30
//     console.log(b);//30
// }
// test();
// console.log(b);//30
// console.log(a); //error -> 

// var b;
// function test2(){
//     b = 10;
// }
// console.log(b) //this wont be undefined  -> 10 -> why?

// let a = 10;
// {
//     const a = 20;
// }

// var b = 20;
// {
//     var b = 40;
// }

// var c = 50;
// function test(){
//     var c = 100;
// }


// let d = 50;
// function test(){
//     let d = 100;
// }

// let e = 100;
// {
//     var e = 400; //example of illegal shadow -> no error
// }

// var f = 10;
// {
//     let f = 1000;
// }

/* 
    in the same scope let and const do not allow creation of 2 vairables by the same name
*/

/* 
    const , let and var -> 

    const -> 
    let -> 

    var -> 
    window.x =

*/

/* 

*/

// var x =  500;
// let xyz = 200;

/* 
    the scope in which let and const goes -> window doesnt attach it to itself 
*/

/* 
    const a -> [], {}

    let and var -> 

    let and var -> 


    const vs (var, let) -> efficient -> 
    interally ->  


    API -> 

    two systems -> communication between them happens through API -> 

    flipkart, delhivery -> 


    frotnend and backend communication also happens mainly through ->
    
    
    const movieData = {name: 'abcd', director:'abcd2'}; //const -> developer friendly -> 

    movieData = 100;

    for(in )//error -> terminate -> 



*/
// const abcd = {efef};
// abcd = 20;


// const radioTag = document.querySelector("input[type=radio]");
// const radioTag = document.querySelector('input[type="radio"]');

// // const radioTag2 = document.getElementById('temp');
// console.log(radioTag);


// const h1Tag = document.getElementsByTagName('h1');
// console.log(h1Tag);
// h1Tag.addEventListener

// console.log(h1Tag.events); 


/* 
    mouseOver
    mouseOut
    click
    blur
    focus
    check
    change
    scroll

    keydown
    keyup
    keypress


    click
    change
    keypress

    input






*/
// const documentNode = 

// const bodyNode = document.body;
// document.addEventListener("copy", async (event) => {
//     /* the session has shut down */
//     const copiedValue = await navigator.clipboard.readText();
//     console.log(copiedValue);
//     console.log('check');
//     const temp = document.createElement('div'); //
//     console.log(event.target); //
//     temp.append(copiedValue); //
//     bodyNode.append(temp) //
    
// });

// const radioTag2 = document.querySelectorAll('input[name="gender"]');
// console.log(radioTag2);

// const arrTempTag = [];
// for(const tempTag of radioTag2){
//     // console.log(tempTag.labels[0].innerText);
//     if(tempTag.labels[0].innerText === 'Female'){
//         arrTempTag.push(tempTag);
//     }
// }
// console.log(arrTempTag);

// radioTag2

//dom ->


// const bodyNode = document.body;
// const generateHtmlButton = document.querySelector("#generateHtml")
// const addRandomHtml = () => {
//     const container = document.createDocumentFragment();
//     for(let i =0; i<100; i++){
//         console.log('here')
//         const tempNode = document.createElement('div');
//         tempNode.innerText = i;
//         container.append(tempNode);
//          //it will start generating 
//         //a ui in which we have i=0 displayed on the ui
//     }
//     bodyNode.append(container); //optimizaation happens in ui -> 
// }

// generateHtmlButton.addEventListener('click', addRandomHtml); //


/* 
    div
        div ->  class = filled -> 0% -> 10% -> blue
        div -> class = empty -> 100% -> 90%

*/

// localStorage.removeItem('')
// localStorage.clear();

// sessionStorage.removeItem()
// sessionStorage.clear()

// const abc = {
//     name: 'naman',
//     age: 10,
//     add: '611'
// }

// const json_obj = '{"name":"naman","age":10,"add":"611"}';
// console.log(JSON.parse(json_obj));

// JSON.parse({"name":"naman","age":10,"add":"611"})

// localStorage ->
// sessionStorage ->
/* 

    these store data(value) in string format -> 


*/

/* 
    toString -> method ->

    join() ->

*/
// const arr = [10, 20, 30, 40];
// console.log(arr.toString(',ejfhuewh'));
// console.log(arr.join(','));
// console.log(arr.join(' and '));

// const obj =  {
//     name: 'naman',
//     age: 10    
// };

// console.log(obj.join(','));
/* 
    we will get an error -> 
    why??
    join is a mehtod available to only arrays
*/

// console.log(obj.toString());

/* w
    that whever you are working with objects adn localstorage
    it is compulsory for oyu to have JSON being the part of it 
*/
// function createAddition(){
//     let count = 0;
//     function increament(){
//         console.log(++count);
//         log();
//     }
//     function log(){
//         let message = `Count is ${count}`;
//         console.log(message); //starts giving ->  Count is 3
//     }
//     return [increament, log]
// }

// const [increament, log] = createAddition();
// increament();//
// increament();//
// increament();//
// log(); //


// function createStack(){
//     return {
//         items: [],
//         push(item){
//             thi
//         }
//     }
// }


// function multiply(num1, num2){
//     //complete the function 
//     if(num2 === undefined){
//         return function(num3){
//             return num3 * num1;
//         }
//     }
//     return num1 * num2;

// }


// multiply(10, 20); //200
// multiply(4, 4); //16
// const double = multiply(2); 
// double(10); //20
// double(200); //400

//this keyword -> 

// function func(){
//     console.log(this);
// }
// func();


/* 
    the value of this is not dependent on where the function is located
    it is dependent on how we are calling the function in case of (not arrow functions)
*/

/* 
    default binding 
    implicit binding 
    explicit binding 
    new  
*/

// const obj = {
//     age: 10,
//     abcd: function(){
//         return function(){
//             console.log(this);
//         }
//     },
// }

// const returnFunc = obj.abcd();
// returnFunc();

/* 
    default binding rule says that whenever a function is being called 
    without a prefix it autoamtically points out to global ->
    which in case of browser is window
*/
/* 
    implicit binding says that if there is a prefix involved it will point
    to whosoever called that function
*/


// const obj = {
//     name: 'naman',
//     getAge: function() {
//         const that = this;
//         function test(){
//             return that.name;
//         }
//         return test;
//     }
// }
// //obj.getAge()()
// const returnFunc = obj.getAge()
// console.log(returnFunc());


// diff between call bind and apply -> 

// const person = {
//     age: 20
// }

// function getAge(numb1, numb2, numb3){
//     console.log(numb1, numb2, numb3);
//     // console.log(this);
//     // console.log(this.age);
// }

// getAge.call(person, 1,2,3); //immediately invokes

// getAge(1,2,3)

// getAge.apply(person, [1,2,3])
// // getAge(person);

// const getAgeBindedWithPerson  = getAge.bind(person);

// getAge();
// getAgeBindedWithPerson();
// getAgeBindedWithPerson();
// getAgeBindedWithPerson();
// function test(){
//     getAgeBindedWithPerson();
// }
// test();
/* 
    call vs bind -> 

    call -> immediately invokes the function -> 
    bind -> it returns a reference to the function which has been binded with the object that we gave
*/

// function random(){
//     console.log(arguments);
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
//     console.log(arguments[3]);
//     console.log(arguments[4]);

// }

// random(1,2,3,4,56, 6);

/* 
    Indicating me that I am trying to define a constructor function -> ???
*/
// function Person(name, numb){
//     let random = 10; //sort of acting like a private variable; 
//     // console.log(this);
//     // let abcd = 20;
//     // this.name = 10;
//     this.name = name;
//     this.numb = numb * random;
//     // return 10;
//     // return this;

//     //setter
//     this.changeRandom =  function(newRandomValue){
//         random = newRandomValue;
//     }

//     //getter -> is used to return private variables
//     this.returnRandomValue = function(){
//         return random;
//     } 

//     /* object -> which is an instrance of that constructor funciton */
// }

// const person1 = new Person('naman', 10);
// const person2 = new Person('abcd', 20);

// console.log(person1);
// const obj = {};
// console.log(obj.abcd);
// console.log(obj.times);
// console.log(person1.returnRandomValue());
// person1.changeRandom(1000);
// console.log(person1.returnRandomValue());


// /* 
//     methods -> never ever define them using arrow keyword;

// */

// function Product( name, price, manufacturer){

//     let tax;
//     this.name = name;
//     this.price = price;
//     this.manufacturer = manufacturer;

//     this.getProductDetails = function(){
//         return `Name: ${this.name}, Price: ${this.price}, Manufacturer: ${this.manufacturer}`
//     }

//     this.setTax = function(amount){
//         tax = amount;
//     }
//     this.getTax = function(amount){
//         return tax;
//     }
//     // function calculateTotalPrice (){
//     //     return this.price + this.price*(tax/100)
//     // }
//     const calculateTotalPrice = () =>{
//         console.log(this);
//         return this.price + this.price*(tax/100)
//     }
//     this.getTotalPrice = function (){
//         return calculateTotalPrice();
//     }
//     this.deleteMethod = function (methodName ) {
//         delete this[methodName];
//     }
// }

// const p1 = new Product('name', 'bmw', 'bm');
// console.log(p1.getTotalPrice())

// function add(a,b,c,d) {
//     return a+b+c+d; 
//   }
//   console.log(add.length);
  
// function outer(){
//     this.age = "outer";
//     this.innerFunc = function(){
//         console.log(this.age)
//     }
// }

// const outer1 = new outer();
// const outer2 = new outer();

// outer1.innerFunc();
// const innerFunc2 = outer2.innerFunc;
// innerFunc2();

/* 
    default functions -> value of this is depenedednt on how we are calling that function

    arrow functions -> The value of this is dependent where the function is defined/located -> 
*/

// console.log('here')
// function Person(name){
//     this.name = name;
//     this.getName = () => this.name
// }

// const p1 = new Person('a');
// const p2 = new Person('b');
// console.log(p1.getName());
// console.log(p1);
// const {getName} = p1;
// console.log(getName());



// const length2 = 4;
// function callback(){
//     console.log(this.length2)
// }
// const object = {
//     length2: 10,
//     cb2(callback){
//         callback()
//     }
// }

// object.cb2(callback, 1, 2);

//question 2
// var length = 4;
// function callback(){
//     console.log(this.length)
// }
// const object = {
//     length: 10,
//     cb2(callback){
//         callback()
//     }
// }

// object.cb2(callback, 1, 2);

//question 3
// var length = 4;


// var callback = () => {
//     console.log(this.length)
// }
// const object = {
//     length: 10,
//     cb2(callback){
//         callback() //error
//     }
// }

// object.cb2(callback, 1, 2);


// const User = (name, age) => {

//     // {} => 

//     this.name = name;
//     this.age = age;

//     //Person{}
// }
// const u1 = new User('naman', 10);
// console.log(u1);

// const User = (name, age) => {
//     this.name = name;
//     this.age = age;
//     return 10;
// }

// const u1 = User();
// console.log(u1);


/* 
    Arrow functions cannot be used as constructors -> 
*/

// const first_name = 'abcd';

// const usernames = {
//     first_name_1: 'naman',
//     getName: function(){
//         return `first_name is ${this.first_name_1}`
//     },

//     // setName: (name) => {
//     //     first_name = name
//     // }
    
// }
// // usernames.setName('new_name');
// console.log(usernames.getName()) //first_name is undefiend


/* 
    that you cannot use arrow functions for methods 
*/


//Redis -> database ->
// {
//     "name": 'naman',
//     "age": 
// }

// Implement Redis -> 

/* 
    constructor function -> 

    from which I can extract many DB -> 

    instance -> 
        CRUD -> Create Read Update Delete -> 


        db1.appendInRedis() -> my key value pair should be appened
        db1.deleteInRedis() ->it should be able to delete a key
        db1.updateInRedis() ->
        db1.read() -> 


        2) there should also be a possibility that if the user provides a time, then that particualr key value pair 
        should be automatically deleted after that time period

*/

function redisStore(){
    //private variable => to store data 
    let database = {};
    this.appendInRedis = function(key, value, timer){
        if(database[key]){
            return;
        }
        database[key] = value;

        if(timer){
            setTimeout(()=>{
                console.log(`key deleted ${key}`)
                delete database[key];

                console.log(`updated db is ${JSON.stringify(database)}`)
            }, timer)
        }
    }

    this.updateInRedis = function(key, value){
        if(!database[key]){
            return;
        }
        database[key] = value;
    }

    this.readInRedis = function(key){
        if(!database[key]){
            return;
        }
        return database[key];
    }

    this.deleteInRedis = function(key){
        if(!database[key]){
            return;
        }
        delete database[key];
    }
}

const db1 = new redisStore();
const db2 = new redisStore();

db1.appendInRedis('name', 'play', 4000);
db1.appendInRedis('name2', 'play', 1000);
db1.appendInRedis('name3', 'play', 2000);
db1.appendInRedis('name4', 'play', 3000);
db1.appendInRedis('name5', 'play');
db1.appendInRedis('name6', 'play6');
db1.appendInRedis('age', '10');

const name6 = db1.readInRedis('name6');
console.log(name6);
// db1.deleteInRedis('name');


/* 
    try to replace the setTImeout with new Date() -> EPOCH -> 
*/