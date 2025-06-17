"use client"

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState("");
    const [category, setCategory] = useState("default");

    const handleItemNameChange = (event) => {
        console.dir(event.target.value);
        setName(event.target.value);
    }
    
    const handleQuantityChange = (event) => setQuantity(event.target.value);
    const handleCategoryChange = (event) => setCategory(event.target.value);

    const handleSubmit = (event) => {
        event.preventDefault();

        let itemObject = {
            iName: name,
            qty: quantity,
            cat: category
        }

        alert(`
            Item Name: ${itemObject.iName}
            Quantity: ${itemObject.qty}
            Category: ${itemObject.cat}`)

        setName("");
        setQuantity(1);
        setCategory("default");
    }

    const increment = () => {
        let currentQuantity = quantity;
        if (currentQuantity <= 19) {
            setQuantity(currentQuantity + 1);
        }
    }

    const decrement = () => {
        let currentQuantity = quantity;
        if (currentQuantity >= 2) {
            setQuantity(currentQuantity - 1);
        }
    }

    let decrementButtonStyle = "bg-blue-500 text-white px-3 py-0.5 m-0.5 rounded hover:bg-blue-700 cursor-pointer";
    let incrementButtonStyle = "bg-blue-500 text-white px-3 py-0.5 m-0.5 rounded hover:bg-blue-700 cursor-pointer";

    if (quantity == 1) {
        decrementButtonStyle = "bg-gray-500 text-white px-3 py-0.5 m-0.5 rounded";
    } else if (quantity == 20) {
        incrementButtonStyle = "bg-gray-500 text-white px-3 py-0.5 m-0.5 rounded";
    }


    return(
        <div className="flex items-center justify-center p-6 rounded ">
            <form onSubmit={handleSubmit} className="bg-gray-800 shadow-md rounded-xl p-5">

                <div className="bg-white w-50 dark:bg-gray-700">
                    <input type="text" 
                    placeholder="Item name" 
                    onChange={handleItemNameChange}
                    value={name} 
                    required
                    className="w-full border border-gray-300 dark:bg-gray-700 dark:text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
                </div>

                <div className="bg-white m-5 p-2 rounded flex items-center justify-between">
                    <span className="text-black font-medium" onChange={handleQuantityChange}>{quantity}</span>
                    <div>
                        <button type="button" className={decrementButtonStyle} onClick={decrement}> - </button>
                        <button type="button" className={incrementButtonStyle} onClick={increment}> + </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-700 rounded m-5 p-2">
                    <select onChange={handleCategoryChange} 
                    value={category}
                    required
                    className="w-full px-2 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white">
                        <option value="default" disabled>Category</option>
                        <option value="produce">Produce</option>
                        <option value="dairy">Dairy</option>
                        <option value="bakery">Bakery</option>
                        <option value="meat">Meat</option>
                        <option value="frozen">Frozen Foods</option>
                        <option value="canned">Canned Goods</option>
                        <option value="dry">Dry Goods</option>
                        <option value="beverages">Beverages</option>
                        <option value="snacks">Snacks</option>
                        <option value="household">Household</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex justify-center">
                    <button type="submit" className="border m-2 p-1 w-full rounded-xl bg-blue-600 hover:bg-blue-400 text-align:center active:bg-yellow-400">+</button>
                </div>
            </form>
        </div>
 
    );
}