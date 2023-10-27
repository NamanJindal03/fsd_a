import products from './products.json';

export function getProducts(){
    const delay = (0.5 + Math.random()) * 1000;
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            // console.log(products)
            resolve(products)
            // fetch('./products.json')
            // .then((data)=>{
            //     console.log(data);
            //     return data.json()
            // })
            // .then((data)=>{
            //     console.log(data)
            // })
        }, delay)
    })
}


