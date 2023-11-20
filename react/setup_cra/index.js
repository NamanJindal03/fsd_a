import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

function giveElement(){
    return (<>
        {/* <h1>abcd</h1> */}
        <App/>
    </>)
}
// const element =  React.createElement('div', {
//     className: 'container' ,
//     // children: [
//     //     React.createElement('h2', {}, 'abcd'),
//     //     React.createElement('h1', {}, 'defg')
//     // ]
// }, React.createElement('h2', {}, 'abcd'),React.createElement('h1', {}, 'defg'))

// const element = <div>
//         <h1>abcd</h1>
//         <h2>defg</h2>
//     </div>
ReactDOM.createRoot(document.getElementById('root')).render(giveElement());