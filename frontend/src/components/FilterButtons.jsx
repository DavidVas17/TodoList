import React from 'react';

// Usamos objetos con value (interno) y label (lo que se muestra en pantalla)
const filters = [
  { value: "all", label: "Todas" },
  { value: "pending", label: "Pendientes" },
  { value: "completed", label: "Completadas" }
];

function FilterButtons({ filter, setFilter }) {
  return (
    <div className="flex justify-center mb-6 space-x-2">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          className={`p-4 rounded-lg font-medium transition duration-200 ${
            filter === value
              ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg"
              : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700 hover:border-gray-600"
          }`}
          onClick={() => setFilter(value)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;
