document.addEventListener("DOMContentLoaded", function () {
  const todoListItem = document.getElementsByClassName("initial-label");
  const myArray = Array.from(todoListItem);

  myArray.forEach(function (element) {
    element.addEventListener("click", function (event) {
      console.log(element.id);
      moveToDone(element.id);
    });
  });
});

function addTask() {
  const taskText = document.getElementById("taskInput").value;
  const category = document.getElementById("category").value;

  // Neue Aufgabe erstellen
  const todoListItem = document.createElement("div");
  todoListItem.classList.add("todo-list-items");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("checkbox");

  // Eindeutigen Bezeichner für das Label erstellen
  const labelId = `${category}_${Date.now()}`;

  const label = document.createElement("label");
  label.textContent = taskText;
  label.setAttribute("for", labelId);
  label.setAttribute("id", labelId);

  todoListItem.appendChild(checkbox);
  todoListItem.appendChild(label);

  // Todo-Liste finden und Aufgabe hinzufügen
  const todoList = document.querySelector(`.todo-list.${category}`);
  if (todoList) {
    todoList.appendChild(todoListItem);
  }

  todoListItem.addEventListener("click", function (event) {
    moveToDone(labelId);
  });

  // Eingabefeld leeren
  document.getElementById("taskInput").value = "";
}

moveToDone = (labelId) => {
  const todoListItem = document.getElementById(labelId).parentNode;
  console.log(labelId);
  console.log(todoListItem);

  todoListItem.remove();

  const doneList = document.querySelector(".done");
  doneList.appendChild(todoListItem);
};
