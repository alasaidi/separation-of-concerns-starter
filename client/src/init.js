import { state } from './data/state.js';

const listContainer = document.querySelector('.list-container');
const add = document.getElementById('creat');
add.addEventListener('click', () => {
  const text = document.getElementById('content').value;
  creat(text);
});

const creat = (text) => {
  const div = document.createElement('div');
  div.classList.add('list-item');
  const input = document.createElement('input');
  input.setAttribute('type', 'checkbox');
  input.setAttribute('aria-label', 'checkbox');

  const span = document.createElement('span');
  span.textContent = text;
  input.addEventListener('change', (e) => {
    console.log(e.target.checked);
    span.classList.toggle('line-through');
  });
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.textContent = 'delete';
  button.addEventListener('click', () => {
    div.remove();
  });
  listContainer.appendChild(div);
  div.appendChild(input);
  div.appendChild(span);
  div.appendChild(button);
};
