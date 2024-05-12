const listContainer = document.querySelector('.list-container');

const div = document.createElement('div');
div.classList.add('list-item');
const input = document.createElement('input');
input.setAttribute('type', 'checkbox');
input.setAttribute('aria-label', 'checkbox');
const span = document.createElement('span');
span.textContent = 'test';
const button = document.createElement('button');
button.setAttribute('type', 'button');
button.textContent = 'delete';
listContainer.appendChild(div);
div.appendChild(input);
div.appendChild(span);
div.appendChild(button);
