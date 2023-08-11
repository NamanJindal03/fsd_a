// const list = document.querySelector('.list')
// const listItems = list.children

// console.log(listItems)

let prevSearched;

function colorInnerText(node, original, replaceValue){
    console.log('second')
    node.innerHTML = node.textContent.replaceAll(original, replaceValue);
    return;
}

function traverseTree (node, original, toBeReplacedWith){
    console.log('first')
    const arrNode = Array.from(node.children);
    if(arrNode.length === 0){
        colorInnerText(node,original, toBeReplacedWith);
        return;
    }
    for(let child of arrNode){
        traverseTree(child, original, toBeReplacedWith);
    }
}

const mainDoc = document.body;
// console.log(mainDoc.children);

traverseTree(mainDoc, 'abcd', '<mark> abcd </mark>');
traverseTree(mainDoc, '<mark> abcd </mark>', 'abcd')

// const mainArr = mainDoc.children

//convert node to array
// for(let child of mainDoc.children){
//     console.log(child.children)
//     // const child2Check = Array.from(child)
//     for(let child2 of child.children){
//         console.log(child2)
        

//     }
// }
