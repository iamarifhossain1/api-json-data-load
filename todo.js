const loadToDO = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((response) => response.json())
    .then((data) => displayTodo(data));
};

const displayTodo = (todos) => {
  // 1. get the container
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    console.log(todo);

    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
    <div class="todo-class">
      <p> ${
        todo.completed === true
          ? `<i class="fa-solid fa-square-check"></i>`
          : `<i class="fa-regular fa-square-check"></i>`
      } </p>
      <h4>${todo.title}</h4>
    </div>
    `;

    todoContainer.appendChild(todoCard);
  });
};

loadToDO();
