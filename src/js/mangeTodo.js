import * as basicLightbox from 'basiclightbox';
import '../../node_modules/basiclightbox/dist/basicLightbox.min.css';

import {
  TODO_KEY,
  todoList,
  input,
  buttonUpdate,
  buttonDelete,
} from './refs.js';
import { createMarkupOneTodo } from './createMarkup.js';

let instance = null;

export const addTodo = () => {
  if (!input.value.trim()) {
    return;
  }
  const parsedData = JSON.parse(localStorage.getItem(TODO_KEY)) || [];

  const todo = {
    id: Date.now(),
    cls: 'todo',
    text: input.value,
  };
  parsedData.push(todo);
  const murkup = createMarkupOneTodo(todo);
  todoList.insertAdjacentHTML('afterbegin', murkup);
  localStorage.setItem(TODO_KEY, JSON.stringify(parsedData));
  input.value = '';
};

export const deleteTodo = e => {
  if (!e.target.classList.contains('btn-delete')) {
    return;
  }

  const parsedData = JSON.parse(localStorage.getItem(TODO_KEY));

  const newTodoList = parsedData.filter(
    item => item.id !== Number(e.target.parentNode.id)
  );

  localStorage.setItem(TODO_KEY, JSON.stringify(newTodoList));
  e.target.parentNode.remove();
};

export const completeTodo = evt => {
  const parsedData = JSON.parse(localStorage.getItem(TODO_KEY));
  const newData = replaceClassTodo(evt.target, parsedData);
  if (newData) {
    localStorage.setItem(TODO_KEY, JSON.stringify(newData));
  }
};

const replaceClassTodo = (element, data) => {
  if (!data || element.nodeName !== 'LI') {
    return;
  }
  if (element.classList.contains('todo')) {
    element.classList.replace('todo', 'complete');
    element.lastElementChild.remove();
    element.insertAdjacentHTML('beforeend', buttonDelete);
  } else {
    element.classList.replace('complete', 'todo');
    element.lastElementChild.remove();
    element.insertAdjacentHTML('beforeend', buttonUpdate);
  }

  const complete = data.map(item =>
    item.id === Number(element.id)
      ? {
          ...item,
          cls: item.cls === 'todo' ? 'complete' : 'todo',
        }
      : item
  );
  return complete;
};

export const updateTodo = e => {
  if (!e.target.classList.contains('btn-update')) {
    return;
  }

  instance = basicLightbox.create(
    `<div class="modal-container"><button type="button" class="btn-close-modal">X</button><input type="text" class="input-modal"/><button type="button" class="btn-update-modal" id="${e.target.parentNode.id}">Update todo</button></div>`,
    {
      closable: false,
    }
  );
  instance.show();
  if (instance.visible()) {
    const btnClose = document.querySelector('.btn-close-modal');
    const btnUpdate = document.querySelector('.btn-update-modal');
    const inputUpdate = document.querySelector('.input-modal');
    btnClose.addEventListener('click', instance.close);
    btnUpdate.addEventListener('click', e =>
      updateTodoText(e, inputUpdate.value)
    );
  }
};

const updateTodoText = (e, value) => {
  if (!value.trim()) {
    return;
  }
  [...todoList.children].forEach(element => {
    if (element.id === e.target.id) {
      element.firstElementChild.textContent = value;
    }
  });
  const parsedData = JSON.parse(localStorage.getItem(TODO_KEY));

  const updatedLS = parsedData.map(item =>
    item.id === Number(e.target.id)
      ? {
          ...item,
          text: value,
        }
      : item
  );

  localStorage.setItem(TODO_KEY, JSON.stringify(updatedLS));
  instance.close();
};
