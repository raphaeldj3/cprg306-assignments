"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals || [];
  } catch (error) {
    console.error("Error fetching meals:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function loadMealIdeas() {
      const result = await fetchMealIdeas(ingredient);
      setMeals(result);
    }

    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Meal Ideas for "{ingredient}"</h2>
      <ul className="list-disc list-inside space-y-2">
        {meals.map((meal) => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
}
