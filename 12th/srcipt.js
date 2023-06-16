// let a = 100;
// {
//     let a = 300;
//     (()=>{
//         a = 200;
//         console.log(a)
//     })()
//     console.log(a)
// }
// console.log(a)

// const arr = ['a', 20, [10]];
// console.log(arr[2]) 
// arr[2].push('1');
// console.log(arr);


// const arr = [10, 20];
// console.log(arr); 

// const arr2 = ['a', 20, 'd', 'e']

// const random = [ ...arr2, 10];
// console.log(random); //
// arr2[2].push('1');
// console.log(arr2) //
// console.log(random) //



// function test(){
//     const a = 200;
//     const b = 300;
//     return [a,b];
// }
// const [b,a] = test();
// console.log(b); //200
// console.log(a); //300





//numb1 = 10, numb2 = 20;
/* 
    switch values of numb1 and numb2 -> 
    complete code for this ->
*/
/* non js */
// let num = 10;

// let num2 = 20;

// var x = num;

// num = num2;

// num2 = x;

// console.log(num , num2);

// let a = 10;

// let b = 20;

// [a, b] = [b, a];

// const key1 = 100;
// const key2 = 200;
function func1() {
    let obj = {'key1': 10, 'key2': 20, 'key3': {'internalKey': 40}};
    let obj2 = {...obj}
    // obj.key1 = 500;

    obj.key3.internalKey = 500;
    return [obj, obj2];
}

const [a, b] = func1(); 
console.log(a); //?
console.log(b); //?


// function arrDest(){
//     let arr = [10,20];
//     return arr;
// }
// const [l,p] = arrDest();
// console.log(l); //10
// console.log(p);//20

/* 
    object destrucuting is different from array destructing.
    how?
    in object destructing we require the same key to be put 
    at the time of destructing it

    In array we have position mapping when we are dealing with
    destructing
    wherease in case of objects we have a key mapping
*/
