const form = document.querySelector("form");
const input = document.querySelectorAll("input")[0];
const ul = document.querySelector("ul");

let todos = [];

const save = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const delItem = (e) => {
  const target = e.target.parentElement;
  todos = todos.filter((todo) => todo.id != target.id);
  target.remove();
  save();
};

const additem = (todo) => {
  if (todo !== "") {
    const li = document.createElement("li");
    const button = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = todo.text;
    button.innerText = "삭제";
    button.style.marginLeft = "10px";
    button.style.background = "#3498db";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "3px";
    button.style.padding = "2px";
    button.addEventListener("click", delItem);
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    li.id = todo.id;
  }
};

const handler = (e) => {
  e.preventDefault();
  const todo = {
    id: Date.now(),
    text: input.value,
  };
  todos.push(todo);
  additem(todo);
  save();
  input.value = "";
};

const init = () => {
  const userTodos = JSON.parse(localStorage.getItem("todos"));
  if (userTodos !== null) {
    userTodos.forEach((todo) => {
      additem(todo);
    });
    todos = userTodos;
  } else {
    todos;
  }
};

init();

form.addEventListener("submit", handler);
localStorage.setItem("hello", "world");
const myData = localStorage.getItem("hello");
console.log(myData);
