var fillColor = "#9D3C3C";
  var emptyColor = "#DDDDDD";

document
  .querySelector("input")
  .addEventListener("input", function () {
    var percent = (100 * (this.value - this.min)) / (this.max - this.min) + "%";
    this.style.backgroundImage = `linear-gradient( to right, ${fillColor}, ${fillColor} ${percent}, ${emptyColor} ${percent})`;
  });