import { RandomExecChild } from "./RandomExecChild"
export function RandomExec(){
    function JSXFunc(){
        return (
            <>
                <h1>This is heading</h1>
            </>
        )
    }
    return(
        <>
            {/* <RandomExecChild func={JSXFunc}/> */}

            {RandomExecChild(JSXFunc)}
        </>
    )
}