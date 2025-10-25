import React, { useState } from "react";
import { X, Plus } from "lucide-react";
import { createTaskApi } from "../api/taskApi";

function TaskForm({ onCancel }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("medium"); // ✅ default
  const [saving, setSaving] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      setSaving(true);
      await createTaskApi({ title, description, priority }); // ✅ enviar priority
      onCancel?.();
      window.location.reload(); // 👈 opcional, o refresca tu estado desde App.jsx
    } catch (err) {
      console.error("Error creating task", err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl space-y-4">
      <h3 className="text-lg font-semibold text-white">Agregar Nueva Tarea</h3>

      <input
        type="text"
        placeholder="Título de la tarea"
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Descripción de la tarea (opcional)"
        rows={3}
        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white resize-none"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
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

      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-700 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-600"
        >
          <X size={16} className="inline-block mr-1" /> Cancelar
        </button>
        <button
          type="submit"
          disabled={saving}
          className="px-4 py-2 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-900 transition"
        >
          <Plus size={16} className="inline-block mr-1" /> {saving ? "Guardando..." : "Agregar Tarea"}
        </button>
      </div>
    </form>
  );
}

export default TaskForm;
