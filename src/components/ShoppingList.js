// import React from "react";
// import Item from "./Item";

// function ShoppingList({ items }) {
//   return (
//     <div className="ShoppingList">
//       <div className="Filter">
//         <select name="filter">
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//       </div>
//       <ul className="Items">
//         {items.map((item) => (
//           <Item key={item.id} name={item.name} category={item.category} />
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ShoppingList;

import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Function to handle category change
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Filter items based on selectedCategory
  const filteredItems = selectedCategory === "All" ? items : items.filter(item => item.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleCategoryChange} value={selectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

