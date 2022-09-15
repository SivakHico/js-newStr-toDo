const toDo = ["walk", "wash", "watch", "drive", "sleep", "eat"];

const input = document.querySelector("#input-txt");
const add = document.querySelector("#add");

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    updateView();
  }
});

add.addEventListener("click", (e) => {
  updateView();
});

function updateView() {
  toDo.push(input.value);
  document.querySelector("#content").innerHTML = toDo.map(intoHTML).join("");
  input.value = "";
}

const intoHTML = (item) => {
  return `
        <li class="list-item">
          ${item}
        </li>
      `;
};
