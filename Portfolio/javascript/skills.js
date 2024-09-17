// Horizontal bar animation
document.querySelectorAll('.progress-value').forEach((progress) => {
    let value = progress.getAttribute('data-value');
    setTimeout(() => {
      progress.style.width = value + '%'; // Animate width for horizontal bars
    }, 500); // Delay animation slightly to ensure smooth loading
  });
  
  // Circular bar animation
  document.querySelectorAll('.circle').forEach((circle) => {
    let percentage = circle.getAttribute('data-percentage');
    let start = 0; // Start from 0
    let interval = setInterval(() => {
      if (start >= percentage) {
        clearInterval(interval); // Stop the animation when the target percentage is reached
      }
      circle.style.background = `conic-gradient(
        #2196f3 ${start}%, 
        rgba(255, 255, 255, 0.2) ${start}% 100%
      )`;
      start++; // Increment the fill percentage gradually
    }, 10); // Adjust this value for speed
  });
  