const draggables = document.querySelectorAll('.draggable');
const dropzone = document.getElementById('dropzone');

const correctSound = new Audio('sounds/correct.mp3');
const incorrectSound = new Audio('sounds/incorrect.mp3');

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });
});

dropzone.addEventListener('dragover', (e) => {
  e.preventDefault(); 
});

dropzone.addEventListener('dragleave', () => {
});

dropzone.addEventListener('drop', (e) => {
  e.preventDefault(); 
  dropzone.classList.remove('hover');

  const droppedItemId = e.dataTransfer.getData('text/plain');  
  const droppedElement = document.getElementById(droppedItemId);

  if (droppedElement.getAttribute('data-correct') === 'true') {
    correctSound.play(); 
    dropzone.appendChild(droppedElement);
    
    droppedElement.style.position = 'absolute';
    droppedElement.style.top = '0';  
    droppedElement.style.left = '0';
  } else {
    incorrectSound.play();
  }
});
