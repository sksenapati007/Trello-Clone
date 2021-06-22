// This is invoked when the add todo button is clicked
const addButton = document.getElementById('add')
addButton.addEventListener('click', addItem)


// This function is invoked when the add todo button is clicked
function addItem() {
    const input = document.getElementById('input')
    let todoItem = input.value
    todoList = document.getElementById('list')

    // var lq = document.createElement('li')
    var textNode1 = document.createTextNode(todoItem)
    // li.appendChild(textNode1)
    // document.querySelector('ul').appendChild(lq)

    if (todoItem === '') {
        var h = document.createElement('p')
        var t = document.createTextNode('Please enter a task')
        h.appendChild(t)
        t.className = 'visual'
    } else {
        // created li
        li = document.createElement('li')
        // create checkbox input
        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.setAttribute('id', 'check')
        // create label
        const label = document.createElement('label')

        // add these elements on page
        todoList.appendChild(label)
        li.appendChild(checkbox)
        label.appendChild(textNode1)
        li.appendChild(label)
        todoList.insertBefore(li, todoList.childNodes[0])
        // li.className = 'visual'
        input.value = ''
    }
    setTimeout(() => {
        li.className = 'visual'
    }, 5)
}





function allowDrop(ev) {
    ev.preventDefault(); // default is not to allow drop
}

function dragStart(ev) {
    // The 'text/plain' is referring the Data Type (DOMString) 
    // of the Object being dragged.
    // ev.target.id is the id of the Object being dragged
    ev.dataTransfer.setData("text/plain", ev.target.id);
}

function dropIt(ev) {
    ev.preventDefault(); // default is not to allow drop
    let sourceId = ev.dataTransfer.getData("text/plain");
    let sourceIdEl = document.getElementById(sourceId);
    let sourceIdParentEl = sourceIdEl.parentElement;
    // ev.target.id here is the id of target Object of the drop
    let targetEl = document.getElementById(ev.target.id)
    let targetParentEl = targetEl.parentElement;
    console.log(targetParentEl);

    // Compare List names to see if we are going between lists
    // or within the same list
    if (targetParentEl.id !== sourceIdParentEl.id) { // If the source and destination have the same 
        // className (card), then we risk dropping a Card in to a Card
        // That may be a cool feature, but not for us!
        if (targetEl.className === sourceIdEl.className) {
            // Append to parent Object (list), not to a 
            // Card in the list
            // This is in case you drag and drop a Card on top 
            // of a Card in a different list
            targetParentEl.appendChild(sourceIdEl);

        } else {
            // Append to the list
            targetEl.appendChild(sourceIdEl);

        }

    } else {
        // Same list. Swap the text of the two cards
        // Just like swapping the values in two variables

        // Temporary holder of the destination Object
        let holder = targetEl;
        // The text of the destination Object. 
        // We are really just moving the text, not the Card
        let holderText = holder.textContent;
        // Replace the destination Objects text with the sources text
        targetEl.textContent = sourceIdEl.textContent;
        // Replace the sources text with the original destinations
        sourceIdEl.textContent = holderText;
        holderText = '';
    }

}