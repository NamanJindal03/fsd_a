
var iifeStore = ((number)=>{ //anonymous
    console.log(number + 200);
    return false;
})(100)

console.log(iifeStore) //

// function func_name (number) {
//     console.log(number + 200)
// }

// func_name(100)

const result = callThisFnBack(5, (num)=>{
    return num+6
    })
    console.log(result) // prints 11 because 5+6
    const newFn = (number) => {
    return number - 5
    }
    const newResult = callThisFnBack(5,newFn)
    console.log(newResult) // prints 0 because 5-5=0

    
    var cb = (num)=>{
        return num+6
    }

    var numb = 5;
    return cb(5)