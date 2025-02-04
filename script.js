let angle = 0;

function rotateLine() {
  angle += 2; // Increase by 2 degrees
  if (angle >= 360) angle = 0; // Reset after a full rotation
  document.getElementById('line').style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Apply rotation
}

setInterval(rotateLine, 20); // Run every 20ms
