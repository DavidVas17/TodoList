import React, { useState } from "react";
import { Check, X } from "lucide-react";

function EditTaskForm({ task, onSave, onCancel }) {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");
  const [priority, setPriority] = useState((task.priority || "medium").toLowerCase());

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, description, priority });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
        required
      />

      {/* Description */}
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows="3"
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none"
      />

      {/* Priority */}
      <div className="flex items-center gap-3">
        <label className="text-gray-300 text-sm">Prioridad</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
        >
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-2">
        <button
          type="submit"
          className="px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg flex items-center gap-2 shadow-lg"
        >
          <Check size={16} /> Guardar
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600 flex items-center gap-2"
          onClick={onCancel}
        >
          <X size={16} /> Cancelar
        </button>
      </div>
    </form>
  );
}

export default EditTaskForm;
