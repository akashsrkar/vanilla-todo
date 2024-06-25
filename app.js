const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let input = document.querySelector("input");
    if(input.value !== ""){
        addTodo(input.value);
        input.value = "";
    }
});


function addTodo(todo){
    const list = document.querySelector("#todo-list");
    const item = document.createElement("li");

    item.innerHTML = `
    <span>${todo}</span>
    <div class="button-container">
    <button class="todo-button"><i class="ph ph-check-fat"></i></button>
    <button class="todo-button"><i class="ph ph-trash"></i></button>
    </div>
    `
    list.appendChild(item);
}