// Get references to DOM elements
const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Array to store todos
let todos = [];

// Function to render todos
function renderTodos() {
  // Clear existing todos
  todoList.innerHTML = "";

  // Loop through todos and create list items
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.textContent = todo;

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger btn-sm";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteTodo(index);
    });

    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

// Function to add todo
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText === "") {
    alert("Please enter a todo");
    return;
  }
  todos.push(todoText);
  todoInput.value = "";
  renderTodos();
}

// Function to delete todo by index
function deleteTodo(index) {
  todos.splice(index, 1);
  renderTodos();
}

// Event listener for add button
addBtn.addEventListener("click", addTodo);

// Optional: Add todo on pressing Enter key in input
todoInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});

// Initial render (empty list)
renderTodos();
