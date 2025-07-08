"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-deal"; 
import itemsData from "./items.json";

export default function ShoppingListPage() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {

    const cleanedName = itemName
      .replace(/,.*$/, "") 
      .replace(/[^\p{L}\s]/gu, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-6">
      <h1 className="m-5 text-4xl font-extrabold text-center">Shopping List</h1>
      <div className="flex flex-col md:flex-row gap-10 justify-center">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
