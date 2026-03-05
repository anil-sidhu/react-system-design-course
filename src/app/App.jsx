import React, { useState } from "react";

const App = () => {
  const items = ["Apple", "Banana", "Mango", "Orange"];
  const [selectedItems, setSelectItems] = useState([])

  const handleSelect = (item) => {
    console.log(item);
    if (selectedItems.includes(item)) {
      setSelectItems(selectedItems.filter((i) => i != item))
    } else {
      setSelectItems([...selectedItems, item]);

    }

  }

  const handleSelectAll = () => {
    if (selectedItems.length === items.length) {
      // Deselect All
      setSelectItems([]);
    } else {
      // Select All
      setSelectItems(items);
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Selectable List</h2>

      <label>
        <input
          type="checkbox"
          checked={selectedItems.length === items.length}
          onChange={handleSelectAll}
        />
        Select All
      </label>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {items.map((item) => (
          <li key={item}>
            <label>
              <input
                type="checkbox"
                checked={selectedItems.includes(item)}
                onChange={() => handleSelect(item)}

              />
              {item}
            </label>
          </li>
        ))}
      </ul>

      <h4>Selected Items:</h4>
      <pre>{JSON.stringify(selectedItems, null, 2)}</pre>
    </div>
  );
};

export default App;