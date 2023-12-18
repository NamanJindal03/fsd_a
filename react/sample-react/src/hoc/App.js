import React, {useState} from 'react'
import Child from './Child';
import Child2 from './Child2';
import LoadingHoc from './LoadingHoc';

const LoadingChild = LoadingHoc(Child);
const LoadingChild2 = LoadingHoc(Child2);
// console.log(LoadingChild)

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingChild2, setIsLoadingChild2] = useState(true)
  return (
    <>
    
      <LoadingChild isLoading={isLoading} p1={'p1'} p2={'p2'}/>
      <LoadingChild2 isLoading={isLoadingChild2} random1={'you are random'} name={'namna'} />
      
    </>
  )
}
