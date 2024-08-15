import { addTodo, completeTodo, deleteTodo, updateTodo } from './mangeTodo.js';
import { todoList, buttonAdd, TODO_KEY } from './refs.js';
import { createMarkup } from './createMarkup.js';

buttonAdd.addEventListener('click', addTodo);
todoList.addEventListener('click', completeTodo);
todoList.addEventListener('click', updateTodo);
todoList.addEventListener('click', deleteTodo);

const savedTodo = JSON.parse(localStorage.getItem(TODO_KEY));

if (savedTodo) {
  onLoadPage(savedTodo);
}

function onLoadPage(data) {
  if (data) {
    todoList.innerHTML = '';
    createMarkup(data);
  }
}

// console.log('hi1')
// setTimeout(() => console.log('hi2'), 0)
// console.log('hi3')

// const elem = document.querySelector('div')
// console.dir(elem.innerHTML)
// console.dir(elem.textContent)
// console.dir(elem.getAttribute('data-actions'))

// let c = [1]

// b = 10c.
// c.forEach((item) => console.log(item))

// console.log('A')

// setTimeout(() => console.log('B'), 0)

// console.log('C')

// const promise = new Promise((resolve, reject) => {
//   // resolve('Woops2');
//   reject('Woops');
// });
// // // // console.log(promise);

// promise.then(console.log);

// function greet(name) {
//   console.log(`Welcome ${name}!`);
// }

// function registerGuest(name, callback) {
//   console.log(`Registering ${name}!`);
//   callback(name);
// }

// registerGuest('Mango', greet); // "Registering Mango!"

const obj1 = {
  c: 34,
};

// let count = 0;

// const timeoutId = setInterval(() => {
//   console.log('Hi');
//   count++;
//   if (count === 5) {
//     clearInterval(timeoutId);
//   }
// }, 100);

// const uid = function () {
//   return Date.now().toString(36) + Math.random().toString(36).substr(2);
// };

// console.log('A');

// const id = setInterval(() => {
//   clearInterval(id);
//   console.log('C');
// }, 0);
// clearTimeout(id);

const promise = new Promise((resolve, reject) => {
  reject('QWERTY');
});

// promise.then(object => console.log(object));
// promise.then(object => console.log(object)).catch(err => console.log(err));
// promise.then(object => console.log(object)).catch(err => console.log(err));
// promise.then(object => console.log(object)).catch(err => console.log(err));
// promise.then(object => console.log(object)).catch(err => console.log(err));

// console.log('D');

// console.log(uid());

// console.log(window);

// function sayHello(str) {
//   console.log(str);
// }

// const currentString = 'Hello';

// sayHello(currentString);

// console.log(String([]));
// console.log(JSON.stringify([3, 4]));

// const arr = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 33, 3, 3, 3, 3, 3];

// console.log(
//   arr.map(() => {
//     return Date.now();
//   })
// );
