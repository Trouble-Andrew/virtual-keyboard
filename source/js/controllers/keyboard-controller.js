class KeyboardController {
    constructor(model) {
        this.model = model;

        const keys = document.querySelectorAll('.key');

        for (const key of keys) {
            // key.addEventListener('keyup', this.removeTransition);
        };

        // window.addEventListener('keydown', (e) => {
        //     console.log(e);
        //     console.log(this.model.chars[this.model.language][e.keyCode]);
        // });

        // window.addEventListener('keydown', this.pressKey);
        // window.addEventListener('mousedown', this.keydown);
        // window.addEventListener('mouseup', this.keyup);
        // window.addEventListener('keyup', this.removeTransition);
        // window.addEventListener('click', this.changeLanguage.bind(this));
    }

    //EVENTLISTENER INTERFACE
    handleEvent(e) {
        e.stopPropagation();
        switch (e.type) {
            case "click":
                this.clickHandler();
                break;
            case "keydown":
                console.log('DOWN');
                break;
            default:
                console.log(e.target);
        }
    }

    get modelLanguage() {
        return this.model.language;
    }

    //CHANGE THE MODEL
    clickHandler() {
        this.changeLanguage();
        // this.model.notify(this.model);

    }

    changeLanguage() {
        if (this.model.language === 'en') {
            this.model.language = 'ru';
        } else if (this.model.language === 'ru') {
            this.model.language = 'en';
        }

        this.model.notify(this.model);
    }

    keydown(e) {
        const key = e.target.closest('.key')
        key ? key.classList.add('pressed', 'pressed--mouse') : '';
    }

    keyup() {
        const pressedKey = document.querySelector('.pressed--mouse');
        pressedKey ? pressedKey.classList.remove('pressed', 'pressed--mouse') : '';
    }

    pressKey(e) {
        // console.log(e);

        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        key.classList.contains('prevent-default') ? e.preventDefault() : '';
        key.classList.add('pressed');

        // console.log(e.code.includes('Key') || e.code.includes('Digit'));

        e.code.includes('Key') || e.code.includes('Digit') ? textarea.value += e.key : '';
        // console.log(textarea.value);
    }

    removeTransition(e) {
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        key.classList.remove('pressed');
    }




}

export default KeyboardController;