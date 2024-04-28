import React, { useState, useEffect } from "react";
import Cell from "./components/cell/Cell";
import { GRID } from "./constants";

import "./App.css";

function App() {
  const [selectedCell, setSelectedCell] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const clickButton = (id) => {
    setSelectedCell((prev) => [...prev, id]);
  };

  useEffect(() => {
    if (
      selectedCell.length === GRID.flat(1).filter((data) => data === 1).length
    ) {
      const timer = setInterval(() => {
        setIsDeactivating(true);
        setSelectedCell((prev) => {
          const newItem = [...prev];
          newItem.pop();
          if (newItem.length === 0) {
            clearInterval(timer);
            setIsDeactivating(false);
          }
          return newItem;
        });
      }, 300);
    }
  }, [selectedCell]);

  return (
    <div className="App">
      <div
        className="container"
        style={{ gridTemplateColumns: `repeat(${GRID[0].length}, 1fr)` }}
      >
        {GRID.flat(1).map((data, idx) => {
          return (
            <Cell
              data={data}
              clickButton={clickButton}
              index={idx}
              filled={selectedCell.includes(idx)}
              isDisabled={selectedCell.includes(idx) || isDeactivating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
