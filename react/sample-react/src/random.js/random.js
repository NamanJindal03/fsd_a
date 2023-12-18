const MAXIMUM_RETRY = 3;
let currentRetryCount = 0;

function getUsers(){
    fetch('www.domain.com/random')
        .then(response => {
            if(!response.ok){
                throw new Error('some error')
            }
            return response.json()
        })
        .then(data => {
            console.log('data', data)
        })
        .catch((error) => {
            if(currentRetryCount < MAXIMUM_RETRY){
                currentRetryCount++;
                console.log('trying');
                getUsers()
            }
            else{
                console.log('something went wrong please try again later')
            }
        })
}

getUsers();