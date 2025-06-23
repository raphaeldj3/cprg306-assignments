"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList() {

  const [sortBy, setSortBy] = useState("name");

  const items = [
    { id: 1, name: "milk, 4 L 🥛", quantity: 1, category: "dairy" },
    { id: 2, name: "bread 🍞", quantity: 2, category: "bakery" },
    { id: 3, name: "eggs, dozen 🥚", quantity: 2, category: "dairy" },
    { id: 4, name: "bananas 🍌", quantity: 6, category: "produce" },
    { id: 5, name: "broccoli 🥦", quantity: 3, category: "produce" },
    { id: 6, name: "chicken breasts, 1 kg 🍗", quantity: 1, category: "meat" },
    { id: 7, name: "pasta sauce 🍝", quantity: 3, category: "canned goods" },
    { id: 8, name: "spaghetti, 454 g 🍝", quantity: 2, category: "dry goods" },
    { id: 9, name: "toilet paper, 12 pack 🧻", quantity: 1, category: "household" },
    { id: 10, name: "paper towels, 6 pack", quantity: 1, category: "household" },
    { id: 11, name: "dish soap 🍽️", quantity: 1, category: "household" },
    { id: 12, name: "hand soap 🧼", quantity: 4, category: "household" },
  ];

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else {
      return a.category.localeCompare(b.category);
    }
  });


return (
  <div>
    <div className="mb-4 flex gap-2 flex justify-center">
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
        />
      ))}
    </div>
</div>

);

};