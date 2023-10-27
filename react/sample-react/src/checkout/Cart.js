import { useEffect } from "react"
import React from 'react'
import {getProducts} from './data-service'

export default function Cart() {
    async function getProductData(){
        // console.log(getProducts());
        const response = await getProducts();
        console.log(response)
        // const data = await response.json();
        // console.log(data)
        // const data = await response.json();
        // console.log(data);
    }
    useEffect(()=>{
        // getProducts()
        getProductData();
    }, [])
  return (
    <div>Cart</div>
  )
}
