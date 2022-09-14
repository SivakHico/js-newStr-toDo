const toDo = ["walk", "wash", "watch", "drive", "sleep", "eat"];

const input = document.querySelector("#input-txt");
const add = document.querySelector("#add");

input.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    toDo.push(input.value);
    document.querySelector("#content").innerHTML = toDo;
    input.value = '';
  }
});

add.addEventListener("click", (e) => {
  document.querySelector("#content").innerText = toDo;
  input.value = '';
});

console.log(toDo);
