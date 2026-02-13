const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let editMode = null; // Track which task is being edited

addBtn.addEventListener("click", addOrUpdateTask);

function addOrUpdateTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    if (editMode) {
        // Update existing task
        editMode.querySelector("span").textContent = taskText;
        editMode = null;
        addBtn.textContent = "Add";
    } else {
        // Create new task
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = taskText;

        const btnContainer = document.createElement("div");
        btnContainer.className = "task-buttons";

        // Edit button
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.className = "editBtn";
        editBtn.addEventListener("click", () => {
            taskInput.value = span.textContent;
            editMode = li;
            addBtn.textContent = "Update";
        });

        // Done button
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.className = "doneBtn";
        doneBtn.addEventListener("click", () => {
            li.classList.toggle("completed");

            if (li.classList.contains("completed")) {
                // Disable edit and delete when task is marked done
                editBtn.disabled = true;
                removeBtn.disabled = true;
                doneBtn.textContent = "Undone";
            } else {
                // Re-enable buttons if undone
                editBtn.disabled = false;
                removeBtn.disabled = false;
                doneBtn.textContent = "Done";
            }
        });

        // Remove button
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Delete";
        removeBtn.className = "removeBtn";
        removeBtn.addEventListener("click", () => {
            taskList.removeChild(li);
            if (editMode === li) {
                editMode = null;
                addBtn.textContent = "Add";
                taskInput.value = "";
            }
        });

        btnContainer.appendChild(editBtn);
        btnContainer.appendChild(doneBtn);
        btnContainer.appendChild(removeBtn);

        li.appendChild(span);
        li.appendChild(btnContainer);
        taskList.appendChild(li);
    }

    taskInput.value = "";
}
