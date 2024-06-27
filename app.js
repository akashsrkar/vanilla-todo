const form = document.querySelector("form");
const list = document.querySelector("#todo-list");
const clearAll = document.querySelector("#clear");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let input = document.querySelector("input");
  if (input.value !== "") {
    addTodo(input.value);
    input.value = "";
  }
});

function addTodo(todo) {
  const list = document.querySelector("#todo-list");
  const item = document.createElement("li");

  item.innerHTML = `
    <span>${todo}</span>
    <div class="button-container">
    <button name="check" class="todo-button"><i class="ph ph-check-fat"></i></button>
    <button name="delete" class="todo-button"><i class="ph ph-trash"></i></button>
    </div>
    `;
  list.appendChild(item);
}

list.addEventListener("click", (e) => {
  if (e.target.name === "check") {
    checkTodo(e);
    console.log("clicked");
  } else if (e.target.name === "delete") {
    deleteTodo(e);
  }
});

function checkTodo(e) {
  const item = e.target.parentNode.parentNode.children[0];

  if (item.style.textDecoration === "line-through") {
    item.style.textDecoration = "none";
  } else {
    item.style.textDecoration = "line-through";
  }
}

function deleteTodo(e) {
  const item = e.target.parentNode.parentNode;
  console.log(item.classList);
  item.addEventListener("transitionend", () => {
    item.remove();
  });
  item.classList.add("transition-fall");
}

clearAll.addEventListener("click", () => {
  list.innerHTML = "";
});
