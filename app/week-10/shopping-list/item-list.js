"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <div className="mb-4 flex gap-2 justify-center">
        <button
          onClick={() => setSortBy("name")}
          className={`px-4 py-2 rounded ${
            sortBy === "name"
              ? "bg-cyan-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`px-4 py-2 rounded ${
            sortBy === "category"
              ? "bg-cyan-500 text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          Sort by Category
        </button>
      </div>

      <div className="space-y-2">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            iName={item.name}
            iQuantity={item.quantity}
            iCategory={item.category}
            onSelect={() => onItemSelect(item.name)}
          />
        ))}
      </div>
    </div>
  );
}
