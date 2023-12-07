function addTask() {
  const taskText = document.getElementById("taskInput").value;
  const category = document.getElementById("category").value;

  // Neue Aufgabe erstellen
  const newTask = document.createElement("div");
  newTask.classList.add("todo-list-items");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  // Eindeutigen Bezeichner für das Label erstellen
  const labelId = `label_${category}_${Date.now()}`;

  const label = document.createElement("label");
  label.textContent = taskText;
  label.setAttribute("for", labelId);

  newTask.appendChild(checkbox);
  newTask.appendChild(label);

  // Todo-Liste finden und Aufgabe hinzufügen
  const todoList = document.querySelector(`.todo-list.${category}`);
  if (todoList) {
    todoList.appendChild(newTask);
  }

  // Eingabefeld leeren
  document.getElementById("taskInput").value = "";
}
