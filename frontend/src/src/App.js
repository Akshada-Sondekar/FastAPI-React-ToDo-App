import { useEffect, useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [dark, setDark] = useState(false);

  const API = "http://127.0.0.1:8000";

  const getTasks = async () => {
    const res = await fetch(`${API}/tasks`);
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async () => {
    if (title.trim() === "") return;

    await fetch(`${API}/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: Date.now(),
        title: title,
        completed: false,
      }),
    });

    setTitle("");
    getTasks();
  };

  const toggleTask = async (id) => {
    await fetch(`${API}/tasks/${id}`, { method: "PUT" });
    getTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`${API}/tasks/${id}`, { method: "DELETE" });
    getTasks();
  };

  useEffect(() => {
    getTasks();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: dark ? "#121212" : "#f4f4f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        transition: "0.3s",
      }}
    >
      {/* CARD */}
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: dark ? "#1e1e1e" : "#ffffff",
          color: dark ? "#ffffff" : "#000000",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <h2>ToDo App</h2>
          <button
          onClick={() => setDark(!dark)}
          style={{
            border: "1px solid #000",
            backgroundColor: dark ? "#fff" : "#000",
            color: dark ? "#000" : "#fff",
            fontSize: "13px",
            cursor: "pointer",
            fontWeight: "500",
            padding: "4px 10px",
            borderRadius: "4px",
            transition: "0.3s",
            }}
            >
              {dark ? "Light" : "Dark"}
              </button>
              </div>
        {/* COUNTER */}
        <p style={{ fontSize: "14px", color: dark ? "#ccc" : "#555" }}>
          Total: {tasks.length} | Completed:{" "}
          {tasks.filter((t) => t.completed).length}
        </p>

        {/* INPUT */}
        <div style={{ display: "flex", marginBottom: "15px" }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add a task..."
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              marginRight: "5px",
            }}
          />
          <button
            onClick={addTask}
            style={{
              padding: "10px 14px",
              borderRadius: "6px",
              border: "none",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        {/* TASK LIST */}
        <ul style={{ padding: 0 }}>
          {tasks.length === 0 && (
            <p style={{ textAlign: "center", opacity: 0.6 }}>
              No tasks yet
            </p>
          )}

          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                listStyle: "none",
                padding: "10px",
                marginBottom: "8px",
                backgroundColor: dark ? "#2a2a2a" : "#f0f0f0",
                borderRadius: "6px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                transition: "0.2s",
              }}
            >
              <span
                onClick={() => toggleTask(task.id)}
                style={{
                  textDecoration: task.completed ? "line-through" : "none",
                  color: task.completed ? "gray" : "inherit",
                }}
              >
                {task.title}
              </span>

              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  color: "red",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
