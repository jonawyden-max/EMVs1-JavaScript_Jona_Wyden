
function addTodo() {

    let todofeld = document.getElementById("todofeld");
    let todolist = document.getElementById("todolist");

    if (todofeld.value.trim() === "") {
        return;
    }

    // Neues Listenelement erstellen
    let li = document.createElement("li");

    // Checkbox erstellen
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";

    // Aufgabentext erstellen
    let text = document.createElement("span");
    text.textContent = todofeld.value;

    // Wenn Checkbox angeklickt wird
    checkbox.addEventListener("change", function() {
        text.classList.toggle("completed", checkbox.checked);
    });

    // Elemente zusammenfügen
    li.appendChild(checkbox);
    li.appendChild(text);

    todolist.appendChild(li);

    // Eingabefeld leeren
    todofeld.value = "";
}
