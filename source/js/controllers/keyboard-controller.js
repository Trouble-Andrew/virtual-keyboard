import insertAtCursor from '../utils';

class KeyboardController {
  constructor(model) {
    this.model = model;
    this.pressed = [];
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
        KeyboardController.keyup(e);
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
      // console.log(this.modelRegister);
      console.log(key.dataset.key);
      console.log(this.model.chars[this.model.language][key.dataset.key]);

      if (key.dataset.key.includes('Key')) {
        if (this.modelRegister) {
          char = this.model.chars[this.model.language][key.dataset.key].toUpperCase();
        } else {
          char = this.model.chars[this.model.language][key.dataset.key].toLowerCase();
        }
      }

      if (key.dataset.key.includes('Digit')) {
        char = key.dataset.key.replace('Digit', '');
      }

      if (char) {
        textarea.focus();
        insertAtCursor(textarea, char);
      }

      switch (key.dataset.key) {
        case 'Tab':
          insertAtCursor(textarea, '    ');
          break;
        case 'CapsLock':
          this.changeRegister();
          break;
        case 'Backquote':
          if (this.model.language === 'en') {
            insertAtCursor(textarea, '`');
          } else {
            insertAtCursor(textarea, 'ё');
          }
          break;
        case 'Minus':
          insertAtCursor(textarea, '-');
          break;
        case 'Equal':
          insertAtCursor(textarea, '=');
          break;
        case 'Enter':
          insertAtCursor(textarea, '\r');
          break;
        case 'Space':
          insertAtCursor(textarea, ' ');
          break;
        case 'Backslash':
          insertAtCursor(textarea, '\\');
          break;
        case 'ArrowUp':
          insertAtCursor(textarea, '🠕');
          break;
        case 'ArrowDown':
          insertAtCursor(textarea, '🠗');
          break;
        case 'ArrowLeft':
          insertAtCursor(textarea, '🠔');
          break;
        case 'ArrowRight':
          insertAtCursor(textarea, '🠖');
          break;
        case 'BracketLeft':
          if (this.model.language === 'en') {
            insertAtCursor(textarea, '[');
          } else {
            insertAtCursor(textarea, 'х');
          }
          break;
        case 'BracketRight':
          if (this.model.language === 'en') {
            insertAtCursor(textarea, ']');
          } else {
            insertAtCursor(textarea, 'ъ');
          }
          break;
        case 'Semicolon':
          if (this.model.language === 'en') {
            insertAtCursor(textarea, ';');
          } else {
            insertAtCursor(textarea, 'ж');
          }
          break;
        case 'Quote':
          if (this.model.language === 'en') {
            insertAtCursor(textarea, '\'');
          } else {
            insertAtCursor(textarea, 'э');
          }
          break;
        case 'Comma':
          if (this.model.language === 'en') {
            insertAtCursor(textarea, ',');
          } else {
            insertAtCursor(textarea, 'б');
          }
          break;
        case 'Period':
          if (this.model.language === 'en') {
            insertAtCursor(textarea, '.');
          } else {
            insertAtCursor(textarea, 'ю');
          }
          break;
        case 'Slash':
          if (this.model.language === 'en') {
            insertAtCursor(textarea, '/');
          } else {
            insertAtCursor(textarea, '.');
          }
          break;
        default:
          break;
      }
    }
  }

  static keyup() {
    const pressedKey = document.querySelector('.pressed--mouse');
    if (pressedKey) {
      pressedKey.classList.remove('pressed', 'pressed--mouse');
    }
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

    if (e.key === 'CapsLock') {
      this.changeRegister();
    }

    if (e.key === 'Shift') {
      this.getUpperCase();
    }

    if (e.key === 'Tab') {
      insertAtCursor(textarea, '    ');
    }
  }

  removeTransition(e) {
    const key = document.querySelector(`.key[data-key="${e.code}"]`);
    key.classList.remove('pressed');
    this.pressed = [];

    if (e.key === 'Shift') {
      this.getLowerCase();
    }
  }
}

export default KeyboardController;
