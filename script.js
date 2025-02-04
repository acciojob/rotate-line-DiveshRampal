// Select the line element
const line = document.getElementById('line');

// Initialize the angle
let angle = 0;

// Function to rotate the line
function rotateLine() {
  angle += 2; // Increase the angle by 2 degrees every time
  line.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply the rotation
}

// Set an interval to rotate the line every 20 milliseconds
setInterval(rotateLine, 20);
