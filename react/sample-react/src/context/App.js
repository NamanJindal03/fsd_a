import Provider from "./provider";
import Child from "./Child";

import React from 'react'

export default function App() {
  return (
    <>
        <h1>We are learning Context API</h1>
        <Provider>
            <Child />
        </Provider>
    </>
  )
}
