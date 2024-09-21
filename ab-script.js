const draggable = document.getElementById('drag');
const droppable = document.getElementById('drop');
const incorrectAudio = document.getElementById('incorrect');

draggable.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', draggable.id);
});

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
});

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();

    const dragItemId = e.dataTransfer.getData('text/plain');
    const dragElement = document.getElementById (dragItemId);

    if(dragElement.innerText == 'Correct'){
        droppzone.appendChild(dragElement);
    }
    else{
        incorrectAudio.onplay();
    }
})