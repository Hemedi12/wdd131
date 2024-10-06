


function addChapter() {
    const input = document.getElementById('favchap');
    const chapter = input.value.trim();
    if (chapter) {
        const list = document.getElementById('list');
        const li = document.createElement('li');
        li.textContent = chapter;

        const removeButton = document.createElement('span');
        removeButton.textContent = '✖';
        removeButton.className = 'remove';
        removeButton.onclick = function() {
            list.removeChild(li);
        };

        li.appendChild(removeButton);
        list.appendChild(li);
        input.focus();
    } else {
        alert('Please enter a book and chapter.');
    }
}