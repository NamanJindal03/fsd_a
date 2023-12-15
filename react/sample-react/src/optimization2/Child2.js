import React, { useMemo } from 'react'

export default function Child2({data, value}) {
    const result = useMemo(()=>{
        let abcd = 0;
        for(let i=0; i<data; i++){
            for(let j=0; j<data; j++){
                abcd += (i +j)
            }   
        }
        return abcd;
    }, [data])
    // const result = (()=>{
    //     console.log('called child2')
    //     let abcd = 0;
    //     for(let i=0; i<data; i++){
    //         for(let j=0; j<data; j++){
    //             abcd += (i +j)
    //         }   
    //     }
    //     return abcd;
    // })()
  return (
    <div>{result}</div>
  )
}
