import React, { useEffect, useRef } from "react";

function Multiple() {
  const inputRef1 = useRef(null);

  const inputRef2 = useRef(null);

  const inputRef3 = useRef(null);

  useEffect(() => {
    inputRef1.current.focus();
  }, []);

  return (
    <div>
      <label>
        Input 1:
        <input type="text" ref={inputRef1} />
      </label>

      <br />

      <label>
        Input 2:
        <input type="text" ref={inputRef2} />
      </label>

      <br />

      <label>
        Input 3:
        <input type="text" ref={inputRef3} />
      </label>
    </div>
  );
}
