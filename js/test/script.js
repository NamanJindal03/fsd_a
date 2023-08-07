// const list = document.querySelector('.list')
// const listItems = list.children

// console.log(listItems)

let prevSearched;

function colorInnerText(node){
    console.log('second')
    node.innerHTML = node.textContent.replace('abcd', 'ichanged');
    return;
}

function traverseTree (node){
    console.log('first')
    const arrNode = Array.from(node.children);
    if(arrNode.length === 0){
        colorInnerText(node);
        return;
    }
    for(let child of arrNode){
        traverseTree(child);
    }
}

const mainDoc = document.body;
// console.log(mainDoc.children);

traverseTree(mainDoc);

// const mainArr = mainDoc.children

//convert node to array
// for(let child of mainDoc.children){
//     console.log(child.children)
//     // const child2Check = Array.from(child)
//     for(let child2 of child.children){
//         console.log(child2)
        

//     }
// }
