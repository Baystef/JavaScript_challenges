const input = document.getElementById('itemInput');
const add = document.querySelector('.add');
const items = document.querySelector('.items');

function createNode(element) {
    return document.createElement(element);
}

function remove(parent, el) {
    return parent.removeChild(el);
}

function append(parent, el) {
    return parent.appendChild(el);
}

add.addEventListener('click', function(e) {
    e.preventDefault();

    const li = createNode('li');
    const span = createNode('span');
    const del = createNode('button');
    li.setAttribute('class', 'item');
    span.textContent = input.value;
    del.setAttribute('class', 'delete');
    del.textContent = 'Delete';

    append(li, span);
    append(li, del);
    append(items, li);

    input.value = "";
    input.focus();
})

document.querySelector('.delete').addEventListener('click', e => {
    e.preventDefault();

    remove(items, li);
})