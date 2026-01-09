# FastAPI React ToDo App

A simple full-stack **ToDo application** built using **FastAPI** for the backend and **React** for the frontend.  
This project demonstrates basic **CRUD operations**, REST API communication, and React hooks usage.

---

## 🚀 Features

- Add new tasks
- View all tasks
- Mark tasks as completed
- Delete tasks
- Dark / Light mode toggle
- FastAPI REST API integration with React

---

## 🛠️ Tech Stack

- **Backend:** FastAPI (Python)
- **Frontend:** React (JavaScript)
- **API Communication:** Fetch API
- **Styling:** CSS

---

## 📁 Project Structure

```
FASTAPI_TODO/
├── main.py              # FastAPI backend
├── frontend/
│   └── src/
│       ├── App.js       # React main component
│       └── App.css      # Styling (optional)
└── README.md            # Project documentation



> Note: Boilerplate React files are intentionally omitted to keep the repository focused on core logic.
```
---

## ▶️ How to Run the Project

### 1️⃣ Run Backend (FastAPI)

```bash
pip install fastapi uvicorn
uvicorn main:app --reload
```

Backend will run at:
👉 http://127.0.0.1:8000

2️⃣ Run Frontend (React)

Place App.js and App.css inside a React project’s src folder and run:

```
npm start
```

Frontend will run at:
👉 http://localhost:3000

api_endpoints:
  - method: GET
    endpoint: /tasks
    description: Get all tasks

  - method: POST
    endpoint: /tasks
    description: Add a new task

  - method: PUT
    endpoint: /tasks/{id}
    description: Toggle task completion status

  - method: DELETE
    endpoint: /tasks/{id}
    description: Delete a task

purpose:
  - Learn FastAPI basics
  - Understand REST API handling
  - Practice React hooks (useState, useEffect)
  - Implement full-stack integration

🙌 Author

Akshada Sondekar
BCA AIML Student | FastAPI | React | Python

## 📂 Project Structure

