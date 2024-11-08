"use client"

import React, { useState } from 'react';

const categories = [
  "All",
  "Electronics",
  "Clothing",
  "Mobiles",
  "Laptops",
  "Accesories"
];

export default function Filter() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState("none");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    // Here you would typically filter your products based on the selected category
    console.log(`Filtering by category: ${category}`);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
    // Here you would typically sort your products based on the selected order
    console.log(`Sorting by price: ${event.target.value}`);
  };

  return (
    <div className="m-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm border transition-colors duration-200 ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                } `}
              >
                {category}
              </button>
            ))}
          </div>
          <select
            value={sortOrder}
            onChange={handleSortChange}
            className="px-4 py-2 border border-gray-300 rounded-full shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
          >
            <option value="none">Sort</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
    </div>
  );
}