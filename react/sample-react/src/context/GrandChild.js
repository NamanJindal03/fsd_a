import React, {useContext} from 'react'
import MyContext from './context'
export default function GrandChild() {
    /* Implement consumer */
    const tempContext = useContext(MyContext);
    console.log(tempContext.data.mname)
  return (
    <>
        {/* <MyContext.Consumer>
            {
                (context) =>{
                    return (<>
                        {console.log(context.data.mname)}
                        <div>{context.data.mname}</div>
                    </>)
                }
            }
        </MyContext.Consumer> */}
        <div>{tempContext.data.mname}</div>


        <div>data from context 1, data from context 2 and data from contexct 3</div>
    </>
  )
}
