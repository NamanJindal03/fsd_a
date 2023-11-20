import { useState } from "react";
import useToggle from "./useToggle";

export function App() {
//   const [toggle, setToggle] = useState(true);

//   function handleToggle() {
//     setToggle(!toggle);
//   }

//   return (
//     <div>
//       <button onClick={handleToggle}>{toggle ? "Show" : "Hide"}</button>
//     </div>
//   );
    const [val, Toggle] = useToggle(false);
    return (
        <div>
            {val ? 'true' : 'false'}
            <button onClick={()=> Toggle(false)}>btn always false</button>
            <button onClick={()=> Toggle(true)}>btn always true</button>
            <button onClick={()=> Toggle(!val)}>I can do toggle for you</button>
        </div>
    );

}

export default App;
