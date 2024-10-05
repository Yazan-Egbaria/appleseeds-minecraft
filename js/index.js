// Sidebar feature
const tools = document.getElementsByClassName("tool");
const selectableTools = Array.from(tools);
let selectedTool;

const grassFigure = document.getElementById("grass");
const dirtFigure = document.getElementById("dirt");
const rockFigure = document.getElementById("rock");
let grassCounter = document.getElementById("grassCounter");
let dirtCounter = document.getElementById("dirtCounter");
let rockCounter = document.getElementById("rockCounter");

let grassCount = 0;
let dirtCount = 0;
let rockCount = 0;

selectableTools.forEach((tool) => {
  tool.addEventListener("click", () => {
    if (tool.classList.contains("picked")) {
      tool.classList.remove("picked");
    } else {
      selectableTools.forEach((tool) => {
        tool.classList.remove("picked");
      });
      tool.classList.add("picked");
      selectedTool = tool.id;
    }
  });
});

// Grid feature
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

gridContainer.addEventListener("click", (e) => {
  if (selectedTool === "shovel" && e.target.classList.contains("grassCell")) {
    e.target.classList.remove("cell", "grassCell");
    grassFigure.style.display = 'block'
    return grassCounter.innerText = grassCount+=1
  } else if (selectedTool === "shovel" && e.target.classList.contains("dirtCell")) {
    e.target.classList.remove("cell", "dirtCell");
    dirtFigure.style.display = 'block'
    return dirtCounter.innerText = dirtCount+=1
  } else if (selectedTool === "pickaxe" && e.target.classList.contains("rockCell")) {
    e.target.classList.remove("cell", "rockCell");
    rockFigure.style.display = 'block'
    return rockCounter.innerText = rockCount+=1
  } else {
    return;
  }
});
