import React from 'react';

const filters = ["all", "pending", "completed"];

function FilterButtons({filter, setFilter}) {
  return (
    // I will use logical
  <div className="flex justify-center mb-6 space-x-2">
    {filters.map((type) => {
        return (
          <div className="flex justify-center mb-6 space-x-2">
            <button
              className={`p-4 rounded-lg font-medium transition duration-200 ${
                filter === type
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
                  : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600"
              }`}
              onClick={() => setFilter(type)}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          </div>
        );
    })}
  </div>

  );
}

export default FilterButtons;
