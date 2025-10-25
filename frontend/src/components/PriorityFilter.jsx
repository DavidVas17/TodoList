import React from "react";
import { ChevronDown } from "lucide-react";

function PriorityFilter({ priorityFilter, setPriorityFilter }) {
  return (
    <div className="relative">
      <select
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
        className="appearance-none h-[42px] px-4 pr-10 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 
                   focus:outline-none focus:ring-2 focus:ring-green-600 transition"
      >
        <option value="all">Todas</option>
        <option value="high">Alta</option>
        <option value="medium">Media</option>
        <option value="low">Baja</option>
      </select>

      {/* Icono personalizado */}
      <ChevronDown
        size={18}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
      />
    </div>
  );
}

export default PriorityFilter;
