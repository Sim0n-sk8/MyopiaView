//slider controls
function slider() {
  const value = document.getElementById("slider").value;
  const numbers = document.querySelectorAll(".number");
  
  // Update images
  for (let i = 0; i <= 10; i++) {
    const img = document.getElementById("s" + i);//value needs to change based on clicked button school is "s" road is "r" play is "p"
    if (img) {
      img.style.display = (i == value) ? "block" : "none";
    }
  }
  
  // Update current value display
  const displayValue = -value;
  
  // Update number highlighting
  numbers.forEach(num => {
    num.classList.remove("active");
    if (parseInt(num.dataset.value) === displayValue) {
      num.classList.add("active");
    }
  });
  
  // Update thumb color based on value ranges
  const sliderElement = document.getElementById("slider");
  const thumbColor = getThumbColor(parseInt(value));
  sliderElement.style.setProperty('--thumb-color', thumbColor);
}
// Initialize
slider();

function button() {
   const school = document.getElementById("schoolBtn");
   const road = document.getElementById("roadbtn");
   const play = document.getElementById("playBtn")
}