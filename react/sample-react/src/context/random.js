import React, { useState } from "react";

import "../styles/App.css";

const App = () => {
  const [selectedShape, setselectedShape] = useState("Square");

  const [shapes, setShapes] = useState([]);

  const [nextId, setNextId] = useState(1);

  const handleshapechange = (e) => {
    setselectedShape(e.target.value);
  };

  const handleAddshape = () => {
    const newShape = {
      id: nextId,
      type: selectedShape,
    };

    setShapes([...shapes, newShape]);

    setNextId(nextId + 1);
  };

  return (
    <div id="main">
      <div id="shape-creator">
        <select value={selectedShape} onChange={handleshapechange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>

        <button onClick={handleAddshape}>Add Shape</button>
      </div>

      <div id="shapes-holder">
        {shapes.map((shape) => (
          <div key={shape.id} className={shape.type.toLowerCase()}>
            {shape.id}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
