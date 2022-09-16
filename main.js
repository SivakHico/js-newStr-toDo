const intoHTML = (item, index) => {
  return `
            <li class="list-item">
              ${item.text}
              ${item.done}
            </li>
            <button onclick='remove(${index})'>❌</button>
          `;
};

const toDo = [
  { done: false, text: "go" },
  { done: false, text: "come" },
  { done: false, text: "eat" },
  { done: false, text: "drink" },
  { done: false, text: "run" },
  { done: false, text: "watch" },
  { done: false, text: "smile" },
];

document.querySelector("#content").innerHTML = toDo.map(intoHTML).join("");

const input = document.querySelector("#input-txt");
const add = document.querySelector("#add");

input.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    updateView();
  }
});

add.addEventListener("click", (e) => {
  updateView();
});

function updateView() {
  toDo.unshift({ done: false, text: input.value });
  document.querySelector("#content").innerHTML = toDo.map(intoHTML).join("");
  input.value = "";
}

function remove() {
  console.log(555);
}
