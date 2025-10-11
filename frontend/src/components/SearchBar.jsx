import React from "react";

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search tasks by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
}

export default SearchBar;
