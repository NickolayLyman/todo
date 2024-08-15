import { buttonDelete, buttonUpdate, todoList } from './refs.js';

export function createMarkup(data) {
  const murkup = data.map(item => createMarkupOneTodo(item)).join('');

  todoList.insertAdjacentHTML('beforeend', murkup);
}

export function createMarkupOneTodo(data) {
  const toggleBtn = data.cls === 'todo' ? buttonUpdate : buttonDelete;
  return `<li class="${data.cls}" id="${data.id}">
  <p>${data.text}</p> 
  ${toggleBtn}
  </li>`;
}
