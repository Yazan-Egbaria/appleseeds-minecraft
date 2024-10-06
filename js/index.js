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
      selectedTool = "";
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
    e.target.classList.remove("grassCell");
    grassFigure.style.display = "block";
    grassCounter.innerText = grassCount += 1;
  } else if (
    selectedTool === "shovel" &&
    e.target.classList.contains("dirtCell")
  ) {
    e.target.classList.remove("dirtCell");
    dirtFigure.style.display = "block";
    dirtCounter.innerText = dirtCount += 1;
  } else if (
    selectedTool === "pickaxe" &&
    e.target.classList.contains("rockCell")
  ) {
    e.target.classList.remove("rockCell");
    rockFigure.style.display = "block";
    rockCounter.innerText = rockCount += 1;
  }

  if (
    selectedTool === "grass" &&
    grassCount > 0 &&
    !e.target.classList.contains("grassCell") &&
    !e.target.classList.contains("dirtCell") &&
    !e.target.classList.contains("rockCell")
  ) {
    e.target.classList.add("grassCell");
    grassCounter.innerText = grassCount -= 1;
    if (grassCount === 0) grassFigure.style.display = "none";
  } else if (
    selectedTool === "dirt" &&
    dirtCount > 0 &&
    !e.target.classList.contains("grassCell") &&
    !e.target.classList.contains("dirtCell") &&
    !e.target.classList.contains("rockCell")
  ) {
    e.target.classList.add("dirtCell");
    dirtCounter.innerText = dirtCount -= 1;
    if (dirtCount === 0) dirtFigure.style.display = "none";
  } else if (
    selectedTool === "rock" &&
    rockCount > 0 &&
    !e.target.classList.contains("grassCell") &&
    !e.target.classList.contains("dirtCell") &&
    !e.target.classList.contains("rockCell")
  ) {
    e.target.classList.add("rockCell");
    rockCounter.innerText = rockCount -= 1;
    if (rockCount === 0) rockFigure.style.display = "none";
  }
});

const resetBtn = document.getElementById("reset");
const body = document.getElementsByTagName("body")[0];

function resetWorld() {
  selectableTools.forEach((tool) => {
    tool.classList.remove("picked");
  });
  grassCount = 0;
  dirtCount = 0;
  rockCount = 0;
  grassCounter.innerHTML = grassCount;
  dirtCounter.innerHTML = dirtCount;
  rockCounter.innerHTML = rockCount;
  grassFigure.style.display = "none";
  dirtFigure.style.display = "none";
  rockFigure.style.display = "none";

  const cells = document.querySelectorAll(".cell");
  const myCells = Array.from(cells);

  myCells.forEach((cell, index) => {
    cell.classList.remove("grassCell", "dirtCell", "rockCell");

    if (index < columns * grassRows) {
      cell.classList.add("grassCell");
    } else if (index < columns * (dirtRows + grassRows)) {
      cell.classList.add("dirtCell");
    } else {
      cell.classList.add("rockCell");
    }
  });
}

resetBtn.addEventListener("click", resetWorld);
