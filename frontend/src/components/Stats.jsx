import React from "react";

function Stats({ total, completed, pending }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {/* Total Tasks */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 text-center">
        <div className="text-3xl font-bold text-green-400">{total}</div>
        <div className="text-gray-300">Total Tasks</div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 text-center">
        <div className="text-3xl font-bold text-green-400">{completed}</div>
        <div className="text-gray-300">Completed</div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 text-center">
        <div className="text-3xl font-bold text-green-400">{pending}</div>
        <div className="text-gray-300">Pending</div>
      </div>
    </div>
  );
}

export default Stats;
