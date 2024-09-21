// Select all draggable items and the dropzone
const draggables = document.querySelectorAll('.draggable');
const dropzone = document.getElementById('dropzone');

// Create an audio object for the incorrect sound
const correctSound = new Audio('sounds/correct.mp3');
const incorrectSound = new Audio('sounds/incorrect.mp3');

// Handle dragstart event for draggable items
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);  // Store the ID of the dragged element
  });
});

// Handle dragover event to allow drop
dropzone.addEventListener('dragover', (e) => {
  e.preventDefault();  // Prevent default to allow dropping
});

// Handle dragleave to remove the hover effect
dropzone.addEventListener('dragleave', () => {
});

// Handle drop event
dropzone.addEventListener('drop', (e) => {
  e.preventDefault();  // Prevent default drop behavior
  dropzone.classList.remove('hover');  // Remove hover effect

  const droppedItemId = e.dataTransfer.getData('text/plain');  // Get the ID of the dropped item
  const droppedElement = document.getElementById(droppedItemId);  // Get the actual DOM element

  // Check if the dropped item is marked as correct
  if (droppedElement.getAttribute('data-correct') === 'true') {
    correctSound.play();  // Play the incorrect sound when an incorrect item is dropped
    dropzone.appendChild(droppedElement);
    
    droppedElement.style.position = 'absolute';
    droppedElement.style.top = '0';  // Align it to the top of the dropzone
    droppedElement.style.left = '0';
  } else {
    incorrectSound.play();  // Play the incorrect sound when an incorrect item is dropped
  }
});
