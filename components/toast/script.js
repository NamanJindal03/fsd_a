const SUCCESS_TOAST = 'success';
const ERROR_TOAST = 'error';
const DEFAULT_TOAST_MESSAGE = 'toast message'

document.getElementById('addToast').addEventListener('click', initiateToastAddition)

function initiateToastAddition() {
    //what if I wanna change the variable name at the time of object destructing?
    const {
        toastMessage,  
        toastDuration,  
        isToastCancelable, 
        toastType,
        error
    } = getToastInputs();

    if(error) {
        alert('toast message needs to be added');
        return;
    }
    
    const toastBody = generateToast(toastMessage, toastDuration, isToastCancelable, toastType);
    const toastContainer = document.getElementById('toastsContainer');
    console.log(toastContainer);
    toastContainer.prepend(toastBody);
}

function getToastInputs(){
    // const toastMessage = document.getElementById('toastMessage').value;
    // let toastMessage = DEFAULT_TOAST_MESSAGE;
    // const userToastMessage = document.getElementById('toastMessage').value
    // if(userToastMessage){
    //     toastMessage = userToastMessage;
    // }

    const toastMessage = document.getElementById('toastMessage').value || DEFAULT_TOAST_MESSAGE;

    // ef ? => optional operator 



    const toastDuration = document.getElementById('toastDuration').value;
    const isToastCancelable = document.getElementById('isCancelable').checked;
    const toastType = document.querySelector('input[name="toastType"]:checked').value;
    if(!toastMessage) {  
        return {error: 'toast message needs to be added'}
    };
    return {toastMessage, toastDuration,  isToastCancelable, toastType};
    /* 
        ES7 
        if the key name and the variable which carries that value are supposed
        to be same then you dont explicitly have to write a key name, 
        it will automatically take the variable name as the key name.
    */
    // return {toastMessage: toastMessage, toastDuration: toastDuration, 
    //     isToastCancelable: isToastCancelable, toastType: toastType
    // }
}


function generateToast(toastMessage, toastDuration, isToastCancelable, toastType){
    
    const toastBody = document.createElement('div');
    const toastPara = document.createElement('p');
    toastPara.textContent = toastMessage;
    toastBody.appendChild(toastPara);
    toastBody.classList.add('toast');
    // if(toastType === SUCCESS_TOAST){
    //     toastBody.classList.add('successToast');
    // }
    // else{
    //     toastBody.classList.add('errorToast');
    // }
    // console.log(`${toastType}Toast`);
    toastBody.classList.add(`${toastType}Toast`);
    // console.log(toastBody);
    if(isToastCancelable) {
        const closeToastBtn = document.createElement('span');
        closeToastBtn.textContent = 'X';
        closeToastBtn.classList.add('closeToastBtn');
        toastBody.appendChild(closeToastBtn);

        /* 
            Handling the removal of the toast message through the click of cross button
        */
        closeToastBtn.addEventListener('click', ()=>{
            toastBody.remove();
            clearTimeout(idTest);
        })
    }

    let idTest = setTimeout(()=>{
            toastBody.remove();
    }, toastDuration);
    console.log(idTest);

    return toastBody;

}

// function testSetTimeout(){
//     setTimeout(executeLater, 3000);
// }

// function executeLater(){
//     console.log('I am executed finally');
// }

// setInterval