import React, { useState } from 'react';
import './App.css';

function App() {
  const [trees, setTrees] = useState([]); // Stores the number of trees
  const [height, setHeight] = useState(5); // Default height of trees
  const [color, setColor] = useState('#00FF00'); // Default color of trees
  const [numTrees, setNumTrees] = useState(1); // Number of trees to render

  const addTree = () => {
    if (numTrees > trees.length) {
      setTrees([...trees, { id: trees.length, height, color }]);
    }
  };

  const handleHeightChange = (change) => {
    setHeight(Math.max(1, height + change)); // Prevent height from going below 1
  };

  const handleNumTreesChange = (event) => {
    setNumTrees(Number(event.target.value));
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="App">
      <h1>Christmas Tree App</h1>

      {/* Input for number of trees */}
      <div>
        <label>Enter number of trees: </label>
        <input
          type="number"
          value={numTrees}
          onChange={handleNumTreesChange}
          min="1"
        />
      </div>

      {/* Button to add trees */}
      <div>
        <button onClick={addTree}>Add tree</button>
      </div>

      {/* Button to increase/decrease tree height */}
      <div>
        <button onClick={() => handleHeightChange(-1)}>-</button>
        <span>Height: {height}</span>
        <button onClick={() => handleHeightChange(1)}>+</button>
      </div>

      {/* Color Picker */}
      <div>
        <label>Choose tree color: </label>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
        />
      </div>

      {/* Displaying the trees */}
      <div>
        {trees.map((tree) => (
          <div key={tree.id} className="tree" style={{ height: tree.height * 30 + 'px', backgroundColor: tree.color }}>
            <div className="tree-top"></div>
            <div className="tree-body"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
