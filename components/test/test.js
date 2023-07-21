// const obj = {
//     name: 'naman',
//     age: 10
// }

// const obj2 = {
//     test1: 'test',
//     test2: 'test2'
// }

// // const obj3 = 
// const obj3 = Object.assign(obj, obj2);
// console.log(obj);
// console.log(obj3);

const obj = {
    name: 'naman',
    age: 10
}

const obj2 = {
    test1: 'test',
    test2: 'test2',
    __proto__: obj
}

console.log(obj2);
console.log(obj2.name);