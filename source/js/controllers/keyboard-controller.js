import insertAtCursor from '../utils';

class KeyboardController {
  constructor(model) {
    this.model = model;
    this.pressed = [];

    // const keys = document.querySelectorAll('.key');

    // window.addEventListener('keydown', (e) => {
    //     console.log(e);
    //     console.log(this.model.chars[this.model.language][e.code]);
    // });

    // window.addEventListener('keydown', this.pressKey);
    // window.addEventListener('keyup', this.removeTransition);
    // window.addEventListener('mousedown', KeyboardController.keydown);
    // window.addEventListener('mouseup', KeyboardController.keyup);
    // window.addEventListener('click', this.changeLanguage.bind(this));
  }

  // EVENTLISTENER INTERFACE
  handleEvent(e) {
    e.stopPropagation();
    switch (e.type) {
      case 'click':
        this.clickHandler();
        break;
      case 'keydown':
        this.pressKey(e);
        this.changeLanguageDetector(e);
        break;
      case 'keyup':
        this.removeTransition(e);

        break;
      case 'mousedown':
        this.keydown(e);
        break;
      case 'mouseup':
        this.keyup(e);
        break;
      default:
        console.log(e.target);
    }
  }

  get modelLanguage() {
    return this.model.language;
  }

  get modelRegister() {
    return this.model.upperCase;
  }

  // CHANGE THE MODEL
  clickHandler() {
    this.changeLanguage();
  }

  changeLanguage() {
    if (this.model.language === 'en') {
      this.model.language = 'ru';
    } else if (this.model.language === 'ru') {
      this.model.language = 'en';
    }

    this.model.notify(this.model);
  }

  changeLanguageDetector(e) {
    this.pressed.push(e.key);
    const secretCode = 'cornify';
    this.pressed.splice(-secretCode.length - 1, this.pressed.length - 2);

    if (this.pressed.includes('Shift') && this.pressed.includes('Alt')) {
      this.changeLanguage();
    }
  }

  changeRegister() {
    this.model.upperCase = !this.model.upperCase;
    this.model.notify(this.model);
  }

  getUpperCase() {
    this.model.upperCase = true;
    this.model.notify(this.model);
  }

  getLowerCase() {
    this.model.upperCase = false;
    this.model.notify(this.model);
  }

  keydown(e) {
    const key = e.target.closest('.key');
    const textarea = document.querySelector('#textarea');

    if (key) {
      key.classList.add('pressed', 'pressed--mouse');
    }

    if (key) {
      let char;
      console.log(this.modelRegister);
      console.log(key.dataset.key);

      if (this.modelRegister) {
        console.log(String.fromCharCode(key.dataset.key).toUpperCase());
        char = String.fromCharCode(key.dataset.key).toUpperCase();
      } else {
        console.log(String.fromCharCode(key.dataset.key).toLowerCase());
        char = String.fromCharCode(key.dataset.key).toLowerCase();
      }

      insertAtCursor(textarea, char);
    }
  }

  keyup() {
    const pressedKey = document.querySelector('.pressed--mouse');
    if (pressedKey) {
      pressedKey.classList.remove('pressed', 'pressed--mouse');
    }

    console.log(this.modelRegister);
  }

  pressKey(e) {
    const key = document.querySelector(`.key[data-key="${e.code}"]`);

    if (key.classList.contains('prevent-default')) {
      e.preventDefault();
    }

    key.classList.add('pressed');

    // console.log(e.code.includes('Key') || e.code.includes('Digit'));

    const textarea = document.querySelector('#textarea');
    textarea.focus();

    // e.code.includes('Key') || e.code.includes('Digit') ? textarea.value += e.key : '';
    // e.code.includes('Backquote') ? textarea.value += e.key : '';

    // console.log(e);
    // console.log(e.code);

    if (e.key === 'CapsLock') {
      this.changeRegister();
    }

    if (e.key === 'Shift') {
      this.getUpperCase();
    }

    if (e.key === 'Tab') {
      // textarea.value += '\t';
      // textarea.setSelectionRange(2, 2);
      // console.log(textarea.selectionStart);

      // const startPos = textarea.selectionStart;
      // let endPos = textarea.selectionEnd;
      // textarea.value = textarea.value.substring(0, startPos) + '\t' +
      // textarea.value.substring(endPos, textarea.value.length);

      insertAtCursor(textarea, '\t');
    }
  }

  removeTransition(e) {
    // console.log(e);

    // if (e.location === 0) {
    //   key = document.querySelector(`.key[data-key="${e.code}"]`);
    // } else if (e.location === 1) {
    //   key = document.querySelector(`.key[data-key="${e.code}"].left`);
    // } else if (e.location === 2) {
    //   key = document.querySelector(`.key[data-key="${e.code}"].right`);
    // }

    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    key.classList.remove('pressed');
    this.pressed = [];

    if (e.key === 'Shift') {
      this.getLowerCase();
    }
  }
}

export default KeyboardController;
