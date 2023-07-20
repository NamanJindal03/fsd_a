// javascript code goes here
const rangeAValueTag = document.querySelector('#range-a-value');
const rangeBValueTag = document.querySelector('#range-b-value');
console.log(rangeBValueTag.textContent)
const rangeATag = document.querySelector('#range-a')
const rangeBTag = document.querySelector('#range-b')
const sumDisplayTag = document.querySelector("#sum");

let maxSum = 50;

function onChangeMaxSum(e){
    maxSum = parseInt(e.target.value);
    changeMaxValues(maxSum, parseInt(rangeATag.value), parseInt(rangeBTag.value) )
    // console.log('check', e)
}
function onChangeRangeA(e){
    console.log('rangeAValue', rangeATag.value)
    console.log('rangeBValue', rangeBTag.value)
    rangeAValueTag.textContent = rangeATag.value;
    changeMaxValues(maxSum, parseInt(rangeATag.value), parseInt(rangeBTag.value) )
    // console.log('check2', e)
}
function onChangeRangeB(e){
    console.log('rangeAValue', rangeATag.value)
    console.log('rangeBValue', rangeBTag.value)
    rangeBValueTag.textContent = rangeBTag.value;

    changeMaxValues(maxSum, parseInt(rangeATag.value), parseInt(rangeBTag.value) )
    // console.log('check3', e)
}

function changeMaxValues(maxSum, rangeAValue = 0, rangeBValue = 50){
    // const currentSum = rangeAValue + rangeBValue;
    // rangeATag.max = maxSum - rangeATag.max;

    // if(maxSum > currentSum){
    //     rangeBTag.max = maxSum - currentSum + rangeBValue;
    //     rangeATag.max = rangeAValue;
    // }
    // else{
    //     if(rangeBValue > currentSum - maxSum){
    //         rangeBValue = maxSum - rangeAValue;
    //     }
    //     rangeBTag.max = 
    // }
    if(maxSum < rangeAValue + rangeBValue){
        const extraSum = (rangeBValue + rangeAValue) - maxSum;
        console.log(extraSum)
        rangeBTag.value = (rangeBValue - extraSum < 0 ? 0 : rangeBValue - extraSum);
        if(parseInt(rangeBTag.value) === 0){
            const remaining = Math.abs(rangeBValue - extraSum);
            rangeATag.value =  (rangeBValue - remaining < 0 ? 0 : rangeBValue - extraSum);
        }

        rangeAValue = parseInt(rangeATag.value);
        rangeBValue = parseInt(rangeBTag.value);
        console.log(rangeAValue);
        console.log(rangeBValue);
        rangeBValueTag.textContent = rangeBValue;
        rangeAValueTag.textContent = rangeAValue;
    }

    rangeATag.max = maxSum - rangeBValue;
    rangeBTag.max = maxSum - rangeAValue;

    sumDisplayTag.textContent = rangeAValue + rangeBValue;
}

