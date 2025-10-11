import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, loading, editingTask, setEditingTask, updateTask, deleteTask, toggleTask }) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-400 text-lg">No tasks found, try adding one!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* I will use Map Method */}
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task._id}
            task={task}
            editingTask={editingTask}
            setEditingTask={setEditingTask}
            updateTask={updateTask}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
