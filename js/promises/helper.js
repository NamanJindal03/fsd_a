//common functions

export function helper(){
    console.log(' I am a helper function')
}

export function helper2(){
    console.log('I am helper 2')
}

function r1(){
    console.log('r1');
    //return undefined
}

function r2(){
    console.log('r2');
    //return undefined
}

// export let name = 'naman';

// export default function IamDefaultExportFunction(){
//     console.log('i am default ')
// }

export default  {
    r1, r2
}


