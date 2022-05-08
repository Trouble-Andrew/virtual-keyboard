import '../sass/style.scss';
import KeyboardController from './controllers/keyboard-controller';
import KeyboardModel from './models/keyboard-model';
import KeyboardView from './views/keyboard-view';

// const keys = document.querySelectorAll('.key');
// const textarea = document.querySelector('#textarea');

// window.addEventListener('keydown', pressKey);
// window.addEventListener('mousedown', keydown);
// window.addEventListener('mouseup', keyup);
// window.addEventListener('keyup', removeTransition);

// function keydown(e) {
//   const key = e.target.closest('.key')
//   key ? key.classList.add('pressed', 'pressed--mouse') : '';
// }

// function keyup() {
//   const pressedKey = document.querySelector('.pressed--mouse');
//   pressedKey ? pressedKey.classList.remove('pressed', 'pressed--mouse') : '';
// }

// function pressKey(e) {
//   console.log(e);

//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

//   key.classList.contains('prevent-default') ? e.preventDefault() : '';
//   key.classList.add('pressed');

//   // console.log(e.code.includes('Key') || e.code.includes('Digit'));
//   // console.log(window.navigator.language);

//   e.code.includes('Key') || e.code.includes('Digit') ? textarea.value += e.key : '';
//   // console.log(textarea.value);
// }

// function removeTransition(e) {
//   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
//   key.classList.remove('pressed');
// }

// for (const key of keys) {
//   key.addEventListener('keyup', removeTransition);
// };

const model = new KeyboardModel();
const controller = new KeyboardController(model);
const view = new KeyboardView(controller);
// console.log(view);
view.render();
// console.log(view.controller.modelLanguage);
