const input = document.getElementById('itemInput');
const add = document.querySelector('.add');
const items = document.querySelector('.items');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
    return parent.appendChild(el);
}

function remove(parent, el) {
    return parent.removeChild(el);
}

add.addEventListener('click', () => {  

    let val = input.value

    if (!val || val === "") return console.log('Field cannot be empty');

    const item = createNode('li');
    const span = createNode('span');
    const del = createNode('button');

    item.setAttribute('class', 'item');

    span.textContent = val;

    del.textContent = 'Delete';

    append(item, span);
    append(item, del);
    append(items, item);

    input.value = "";
    input.focus();

    del.onclick = (e) => {

        remove(items, item);
    }
})