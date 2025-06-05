"use client"

import { useState } from "react";

export default function NewItem() {

    const [quantity, setQuantity] = useState(1);

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

    let decrementButtonStyle = "inline-block bg-blue-500 text-white px-3 py-0.5 m-1 rounded hover:bg-blue-700 cursor-pointer";
    let incrementButtonStyle = "inline-block bg-blue-500 text-white px-3 py-0.5 m-1 rounded hover:bg-blue-700 cursor-pointer";

    if (quantity == 1) {
        decrementButtonStyle = "inline-block bg-gray-500 text-white px-3 py-0.5 m-1 rounded";
    } else if (quantity == 20) {
        incrementButtonStyle = "inline-block bg-gray-500 text-white px-3 py-0.5 m-1 rounded";
    }


    return(
        <div className="bg-white m-5 w-50 rounded">
            <p className="inline-block w-5 text-black p-0.5 ml-1 mr-24">{quantity}</p>
            <button className={decrementButtonStyle} onClick={decrement}> - </button>
            <button className={incrementButtonStyle} onClick={increment}> + </button>
        </div>
    );
}