
let addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click' , addValue);
let parentList = document.getElementById('parentList');

function addValue(e) {
    if(parentList.children[0].className == 'empty-msg') {
        parentList.children[0].remove();
    }

    let currentBtn = e.currentTarget;
    let currentInput = currentBtn.previousElementSibling;
    let currentChapterName = currentInput.value;

    let newLi = document.createElement('li');
    // newLi.classList.add('list-group-item');
    // newLi.textContent = currentInput.value;
    newLi.className = `list-group-item d-flex justify-content-between`;
    newLi.innerHTML = `<h3 class="flex-grow-1">${currentChapterName}</h3>
    <button class="btn btn-warning mx-3">Edit</button>
    <button class="btn btn-danger" onclick="removeElement(this)">Remove</button>`;

    parentList.appendChild(newLi);
}

function removeElement(currElement) {
    currElement.parentElement.remove();
    let parentList = document.getElementById('parentList');
    if(parentList.children.length <= 0) {
        let emptyMsg = document.createElement('h3');
        emptyMsg.classList.add('empty-msg');
        emptyMsg.textContent = 'nothing is here plz add a something';
        parentList.appendChild(emptyMsg);
    }
}

function editElement(currElement) {
    if(currElement.textContent == 'Done') {
        currElement.textContent = 'Edit';
        let currChapterName = currElement.previousElementSibling.value;
        let currentHeading = document.createElement('h3');
        currentHeading.className = 'flex-grow-1';
        currentHeading.textContent = currChapterName;
        currElement.parentElement.replaceChild(currentHeading , currElement.previousElementSibling);
    } else {
        currElement.textContent = 'Done';
        let currChapterName = currElement.previousElementSibling.textContent;
        let currentInput = document.createElement('input');
        currentInput.type = 'text';
        currentInput.className = 'form-control';
        currentInput.placeholder = 'Chapter';
        currentInput.value = currChapterName;
    
        currElement.parentElement.replaceChild(currentInput , currElement.previousElementSibling);
    }
}