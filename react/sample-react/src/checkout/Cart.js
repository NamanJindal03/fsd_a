import { useEffect } from "react"
import React, {useState} from 'react'
import {getProducts} from './data-service'
import {Loader} from './Loader'

export default function Cart() {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0)
    async function getProductData(){
        // console.log(getProducts());
        const response = await getProducts();
        const updatedProduct = response.products.map((product)=>{
            return {...product, selectedCount: 0, total: 0}
        })
        setProducts(updatedProduct);
        setIsLoading(false);
        // console.log(updatedProduct)
        // const data = await response.json();
        // console.log(data)
        // const data = await response.json();
        // console.log(data);
    }
    function addQty(id){
        let alteredPrice = 0;
        const updatedProduct = products.map((product)=>{
            if(product.id !== id){
                return product
            }
            if(product.availableCount <= product.selectedCount){
                return product;
            }
            product.selectedCount++;
            product.total = product.price * product.selectedCount;
            alteredPrice = product.price;
            return product
        })
        setProducts(updatedProduct);
        setTotalPrice((prev)=>{
            return prev + alteredPrice;
        })
    }
    function reduceQty(id){
        let alteredPrice = 0;
        const updatedProduct = products.map((product)=>{
            if(product.id !== id){
                return product
            }
            if(product.selectedCount <= 0 ){
                return product;
            }
            product.selectedCount--;
            alteredPrice = product.price;
            product.total = product.price * product.selectedCount;
            return product
        })
        setProducts(updatedProduct);
        setTotalPrice((prev)=>{
            return prev - alteredPrice;
        })
    }
    useEffect(()=>{
        // getProducts()
        getProductData();
    }, [])
  return (
    <>
     {isLoading ? 
        <div style={{textAlign: "center"}}>
            <Loader /> 
        </div>  : 
        null
    }
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>price</th>
                <th>Available Qty</th>
                <th>Selected Qty</th>
                <th>total price</th>
            </tr>
        </thead>
            {products.length > 0 &&
            <tbody>
                {products.map((product)=>{
                    const {id, name, price, availableCount, selectedCount, total} = product
                    return (
                    <tr key={id}>
                        <td>{id} </td>
                        <td>{name} </td>
                        <td> {price}</td>
                        <td>{availableCount} </td>
                        <td> {selectedCount}</td>
                        <td>{total} </td>
                        <td>
                            <button onClick={() => reduceQty(id)}>-</button>
                        </td>
                        <td>
                            <button onClick={() => addQty(id)}>+</button>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
            }
    </table>
    {products.length > 0 && 
        <div>
            {totalPrice > 1000 && 
                <div>Discount: {totalPrice/10}</div>
            }
            <div>Total Price: {totalPrice > 1000 ? 
                    <>  
                    <span style={{textDecoration: 'line-through'}}>{totalPrice}</span>
                    {totalPrice - (totalPrice/10)}
                    </>
                    : 
                    totalPrice
                }
            </div>
        </div>
    }
    </>
  )
}
