import React, {useState} from 'react'
import MyContext from "./context";

const Provider = (props) =>{
    const [mission, setMission] = useState({
        mname: 'Learn Context',
        agent: 'random',
        accept: 'not accepted'
    })

    return (
        <MyContext.Provider
            value={
                {
                    data: mission
                }
            }
        >
            {props.children}
        </MyContext.Provider>
    )
}
export default Provider;