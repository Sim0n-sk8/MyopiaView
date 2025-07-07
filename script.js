
let currentScene = "s";

// Slider logic
function slider() {
  const value = document.getElementById("slider").value;
  const numbers = document.querySelectorAll(".number");


  const displayValue = -value;

 
  numbers.forEach(num => {
    num.classList.remove("active");
    if (parseInt(num.dataset.value) === displayValue) {
      num.classList.add("active");
    }
  });

 
  const sliderElement = document.getElementById("slider");
  const thumbColor = getThumbColor(parseInt(value));
  sliderElement.style.setProperty('--thumb-color', thumbColor);

  updateScene(currentScene);
}

// Function to show the correct image based on the selected scene and slider value
function updateScene(prefix) {
  const value = document.getElementById("slider").value;

  // Hide all images first
  for (let p of ['s', 'r', 'p']) {
    for (let i = 0; i <= 10; i++) {
      const img = document.getElementById(p + i);
      if (img) img.style.display = "none";
    }
  }

  // Show only the selected image
  const targetImg = document.getElementById(prefix + value);
  if (targetImg) targetImg.style.display = "block";
}


function getThumbColor(value) {
  if (value < 30) return "white"; 
}

// Attach button click events to update the scene
document.getElementById("schoolBtn").addEventListener("click", () => {
  currentScene = "s";
  updateScene(currentScene);
});

document.getElementById("roadBtn").addEventListener("click", () => {
  currentScene = "r";
  updateScene(currentScene);
});

document.getElementById("playBtn").addEventListener("click", () => {
  currentScene = "p";
  updateScene(currentScene);
});


slider();
