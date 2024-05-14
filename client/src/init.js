import { state } from './data/state.js';

const listContainer = document.querySelector('.list-container');
const add = document.getElementById('creat');

const renderListFromState = () => {
  listContainer.innerHTML = '';
  for (const item of state.todoList) {
    const div = document.createElement('div');
    div.classList.add('list-item');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.setAttribute('aria-label', 'checkbox');
    input.checked = item.done;

    input.addEventListener('change', () => {
      item.done = !item.done;

      state.todoList.sort((a, b) => {
        const doneA = a.done ? 1 : 0;
        const doneB = b.done ? 1 : 0;
        return doneA - doneB;
      });
      renderListFromState();
    });

    const span = document.createElement('span');
    span.textContent = item.description;
    if (input.checked) {
      span.classList.toggle('line-through');
    }
    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'delete';
    button.addEventListener('click', () => {
      div.remove();
      state.todoList.splice(state.todoList.indexOf(item), 1);
    });
    console.log(state.todoList);
    listContainer.appendChild(div);
    div.appendChild(input);
    div.appendChild(span);
    div.appendChild(button);
  }
};
add.addEventListener('click', () => {
  const text = document.getElementById('content').value;

  const listItems = {
    id: window.crypto.randomUUID(),
    done: false,
    description: text,
  };

  state.todoList.unshift(listItems);
  renderListFromState();
});
renderListFromState();
