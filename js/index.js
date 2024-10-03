const gridContainer = document.querySelector(".grid");
const rows = 4;
const columns = 25;

for (let i = 0; i < rows * columns; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gridContainer.appendChild(cell);
}

gridContainer.addEventListener("click", (e) => {
  e.target.classList.remove("cell");
});
