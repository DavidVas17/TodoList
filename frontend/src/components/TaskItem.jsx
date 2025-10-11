import React from "react";
import EditTaskForm from "./EditTaskForm";
import { Check, Edit2, Trash2 } from "lucide-react";

const priorityStyles = {
  high:   "bg-red-500/15 text-red-300 border border-red-500/30",
  medium: "bg-yellow-500/15 text-yellow-300 border border-yellow-500/30",
  low:    "bg-blue-500/15 text-blue-300 border border-blue-500/30",
};

function TaskItem({ task, editingTask, setEditingTask, updateTask, deleteTask, toggleTask }) {
  const priority = (task.priority || "medium").toLowerCase();

  return (
    <div
      className={`bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-6 transition duration-200 hover:shadow-xl hover:border-gray-600 ${task.completed ? "opacity-70" : ""}`}
    >
      {editingTask === task._id ? (
        <EditTaskForm
          task={task}
          onSave={(updates) => updateTask(task._id, updates)}
          onCancel={() => setEditingTask(null)}
        />
      ) : (
        <div className="flex items-center justify-between">
          {/* Left */}
          <div className="flex items-start space-x-3 flex-1">
            {/* Toggle completion */}
            <button
              onClick={() => toggleTask(task._id)}
              className="mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition duration-200"
            >
              {task.completed && <Check size={16} />}
            </button>

            {/* Content */}
            <div className="flex-1">
              {/* Título + prioridad */}
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className={`text-lg font-medium ${task.completed ? "text-gray-400 line-through" : "text-white"}`}>
                  {task.title}
                </h3>
                <span className={`px-2.5 py-1 text-xs rounded-full uppercase tracking-wider ${priorityStyles[priority] || priorityStyles.medium}`}>
                  {priority}
                </span>
              </div>

              {/* Descripción */}
              {task.description && (
                <p className={`mt-1 ${task.completed ? "text-gray-500" : "text-gray-300"}`}>
                  {task.description}
                </p>
              )}

              {/* Fechas */}
              <p className="text-sm text-gray-500 mt-2">
                Created: {new Date(task.createdAt).toLocaleDateString()}
                {task.updatedAt !== task.createdAt && (
                  <span> . Updated: {new Date(task.updatedAt).toLocaleDateString()}</span>
                )}
              </p>
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center space-x-2 ml-4">
            <button
              className="p-2 text-gray-400 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition duration-200"
              onClick={() => setEditingTask(task._id)}
            >
              <Edit2 size={18} />
            </button>

            <button
              className="p-2 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition duration-200"
              onClick={() => deleteTask(task._id)}
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskItem;
