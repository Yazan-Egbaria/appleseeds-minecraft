const gridContainer = document.querySelector(".grid");
const grassRows = 1;
const rocksRows = 2;
const dirtRows = 2;
const columns = 25;

for (let i = 0; i < grassRows * columns; i++) {
  const grassCell = document.createElement("div");
  grassCell.classList.add("cell", "grassCell");
  gridContainer.appendChild(grassCell);
}

for (let i = 0; i < dirtRows * columns; i++) {
  const dirtCell = document.createElement("div");
  dirtCell.classList.add("cell", "dirtCell");
  gridContainer.appendChild(dirtCell);
}

for (let i = 0; i < rocksRows * columns; i++) {
  const rockCell = document.createElement("div");
  rockCell.classList.add("cell", "rockCell");
  gridContainer.appendChild(rockCell);
}

// gridContainer.addEventListener("click", (e) => {
//   e.target.classList.remove("cell");
// });
