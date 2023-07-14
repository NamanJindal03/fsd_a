const SUCCESS_TOAST = 'success';
const ERROR_TOAST = 'error';

document.getElementById('addToast').addEventListener('click', initiateToastAddition)

function initiateToastAddition(){
    const {
        toastMessage, 
        toastDuration,  
        isToastCancelable, 
        toastType
    } = getToastInputs();

    const toastBody = generateToast(toastMessage, toastDuration, isToastCancelable, toastType);
    const toastContainer = document.getElementById('toastsContainer');
    console.log(toastContainer);
    toastContainer.prepend(toastBody);
}

function getToastInputs(){
    const toastMessage = document.getElementById('toastMessage').value;
    const toastDuration = document.getElementById('toastDuration').value;
    const isToastCancelable = document.getElementById('isCancelable').checked;
    const toastType = document.querySelector('input[name="toastType"]:checked').value;
    return {toastMessage, toastDuration,  isToastCancelable, toastType}
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

        toastBody.addEventListener('click', ()=>{
            toastBody.remove();
        })
    }
    return toastBody;

}