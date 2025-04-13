const title = document.getElementById("main-title");
const changeTextBtn = document.getElementById("change-text-btn");
const toggleBoxBtn = document.getElementById("toggle-box-btn");
const boxContainer = document.getElementById("box-container");

let boxExists = false;

// Change text and styles dynamically
changeTextBtn.addEventListener("click", () => {
  title.textContent = "You just changed this text!";
  title.style.color = "darkblue";
  title.style.fontSize = "2.5rem";
});

// Add or remove a box on button click
toggleBoxBtn.addEventListener("click", () => {
  if (!boxExists) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = "the-box";
    boxContainer.appendChild(box);
    boxExists = true;
  } else {
    const box = document.getElementById("the-box");
    if (box) {
      box.remove();
    }
    boxExists = false;
  }
});
