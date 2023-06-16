var upper_bound = 60;
var lower_bound = 50;

var initialArray = [50, 51, 52, 59, 58, 54, 55, 56, 57, 60];

var dynamicArray = [];

for(var i=0; i<initialArray.length; i++){
    dynamicArray[initialArray[i]] = true;
}
console.log(dynamicArray);

while(lower_bound <= upper_bound){
    if(dynamicArray[lower_bound] == true){
        lower_bound++;
        continue;
    }
    console.log(dynamicArray[lower_bound]);
    console.log(`faulty index ${lower_bound}`);
    break;
}