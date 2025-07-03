//slider controls
function slider() {
  const value = document.getElementById("slider").value;

  for (let i = 0; i <= 10; i++) {
    const img = document.getElementById("s" + i);
    if (img) {
      img.style.display = (i == value) ? "block" : "none";
    }
  }
}
