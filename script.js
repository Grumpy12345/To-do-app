// Get elements
const todo = document.querySelector(".todos");
const addBtn = document.getElementById("add-task");
const completed = document.querySelector(".completed");

// Event listeners
addBtn.addEventListener("click", () => {
    const text = prompt("Enter a task: ");
    if (!text) return;

    const item = document.createElement("div");
    item.className = "todo-item"

    const todoItem = document.createElement("input");
    todoItem.type = "checkbox";

    const todoDesc = document.createElement("span");
    todoDesc.textContent = text;
    todoDesc.contentEditable = true;
    todoDesc.spellcheck = true;

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";

    item.appendChild(todoItem);
    item.appendChild(todoDesc);
    item.appendChild(delBtn);
    todo.appendChild(item);

    delBtn.addEventListener("click", () => {
        item.remove();
    })
})

todo.addEventListener("change", (e) => {
    if (e.target.type === "checkbox") {
        const item = e.target.parentElement;
        completed.appendChild(item);
        item.querySelector("span").style.textDecoration = "line-through";
    }
})