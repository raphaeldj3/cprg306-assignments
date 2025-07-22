"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";

import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-deal";

import { getItems, addItem } from "../_services/shopping-list-service";

export default function ShoppingListPage() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, firebaseSignOut } = useUserAuth();


  async function loadItems() {
    if (!user) return;
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  }

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (newItem) => {
    if (!user) return;

    try {
      const id = await addItem(user.uid, newItem);
      setItems([...items, { ...newItem, id }]);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .replace(/,.*$/, "")
      .replace(/[^\p{L}\s]/gu, "")
      .trim()
      .toLowerCase();

    setSelectedItemName(cleanedName);
  };

  const handleLogout = async () => {
    await firebaseSignOut();
  };

  if (!user) {
    return (
      <main className="p-6 text-center">
        <p>You are not logged in.</p>
        <Link href="/week-10">
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Go to Login
          </button>
        </Link>
      </main>
    );
  }

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold -center">Shopping List</h1>

        <Link href="/week-10">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </Link>
      </div>

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
