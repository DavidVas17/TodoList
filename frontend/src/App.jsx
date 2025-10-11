import React, { useState, useEffect} from "react";
import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Stats from "./components/Stats";
import { createTaskApi, deleteTaskApi, toggleTaskApi, updateTasksApi } from "./api/taskApi";
import SearchBar from "./components/SearchBar";
import PriorityFilter from "./components/PriorityFilter";


import { fetchTaskApi } from "./api/taskApi";

function App() {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: "", description: "" });
  const [editingTask, setEditingTask] = useState(null);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("all");
  const [showForm, setShowForm] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const data = await fetchTaskApi();
      setTasks(data);
    } catch (err) {
      console.log("Error fetching", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [filter]);


  const createTask = async () => {
    if (!newTask.title.trim()) return;

    try {
      const data = await createTaskApi(newTask);
      setTasks([...tasks, data]);
      setNewTask({ title: "", description: "" });
      setShowForm(false);
    } catch (err) {
      console.log("Error fetching", err);
    }
  };

  const updateTask = async (id, updates) => {
    try {
      const data = await updateTasksApi(id, updates);
      setTasks(tasks.map((t) => (t._id === id ? data : t))); // ✅ ahora guardas la respuesta completa
      setEditingTask(null);
    } catch (err) {
      console.log("Error fetching", err);
    }
  };


  const deleteTask = async (id) => {
    try {
      await deleteTaskApi(id);
    } catch (err) {
      console.log("Error fetching", err);
    }
  };

  const toggleTask = async (id) => {
    try {
      const updated = await toggleTaskApi(id);
      setTasks(tasks.map((t) => (t.id === id ? updated : t)));
    } catch (err) {
      console.log("Error fetching", err);
    }
  };


  const filteredTasks = tasks.filter((task) => {
    let matchesFilter = true;
    let matchesSearch = true;
    let matchesPriority = true;

    // Estado
    if (filter === "completed") {
      matchesFilter = task.completed;
    } else if (filter === "pending") {
      matchesFilter = !task.completed;
    }

    // Búsqueda
    if (searchTerm.trim() !== "") {
      matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    // Prioridad
    if (priorityFilter !== "all") {
      matchesPriority = task.priority?.toLowerCase() === priorityFilter;
    }

    return matchesFilter && matchesSearch && matchesPriority;
  });



  

  const stats = {
    total: tasks.length,
    completed: tasks.filter((t) => t.completed).length,
    pending: tasks.filter((t) => !t.completed).length,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8">
      <div className="max-w-4xl mx-auto">
        <Header />

        <Stats {...stats}/>

        {/* Add New Task Button */}
        <div className="flex justify-end mb-4">
          <button className="px-4 py-2 bg-green-700 text-white rounded-lg shadow-lg hover:bg-green-900 transition" onClick={() => setShowForm(true)}>
            + Add New Task
          </button>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search tasks by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-[42px] w-full max-w-md px-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600"
        />
      
        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
          className="h-[42px] px-4 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-green-600 transition"
        >
          <option value="all">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
        <FilterButtons filter={filter} setFilter={setFilter} />
        <TaskList 
          tasks={filteredTasks} 
          loading={loading} 
          editingTask={editingTask}
          setEditingTask={setEditingTask}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      </div>
      {/* Dark Full Screen Modal */}
      {/* Conditional Rendering */}
      {showForm && <div className="fixed inset-0 bg-black/80 backdrop-blur-[10px] flex items-center justify-center z-50">
      {/* Task Form */}
        <div className="w-full max-w-3xl px-8">
          <TaskForm newTask={newTask} setNewTask={setNewTask} onAdd={createTask} onCancel={() => setShowForm(false)} />
        </div>
      </div>}
    </div>
  );
}

export default App;
