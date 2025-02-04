let angle = 0;  // initial angle
const line = document.getElementById('line');  // get the line element

// function to update the rotation angle and rotate the line
function rotateLine() {
  angle += 2;  // increase the angle by 2 degrees
  line.style.transform = `rotate(${angle}deg)`;  // rotate the line
}

// call the rotateLine function every 20 milliseconds
setInterval(rotateLine, 20);