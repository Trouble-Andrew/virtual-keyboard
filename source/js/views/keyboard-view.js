import Observer from '../modules/observer';

class KeyboardView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.controller.model.addObserver(this);

    window.addEventListener('keydown', controller);
    window.addEventListener('keyup', controller);
    window.addEventListener('mousedown', controller);
    window.addEventListener('mouseup', controller);
  }

  update(model) {
    const chars = model.chars[this.controller.modelLanguage];

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(chars)) {
      const currentKey = document.querySelector(`.key[data-key="${key}"]`);
      console.log(key);
      // console.log(value);
      console.log(currentKey);
      if (this.controller.modelRegister) {
        currentKey.querySelector('.keycap').innerHTML = value.toUpperCase();
      } else {
        currentKey.querySelector('.keycap').innerHTML = value;
      }
    }
  }

  render() {
    // const container = document.querySelector('#app');
    const container = document.querySelector('body');
    const template = `<form action="#" id="form">
        <label for="textarea"></label>
        <textarea id="textarea" name="textarea" rows="4" cols="50"></textarea>
        <br>
        <input type="reset" value="Reset">
      </form>
      <div class="keyboard">
        <div class="col col--main">
          <div class="function background">
            <div class="row">
              <div class="f_key key" data-key="Escape">
                <div class="keycap">Esc</div>
              </div>
              <div class="function__group">
                <div class="key prevent-default" data-key="F1">
                  <div class="keycap">F1</div>
                </div>
                <div class="key prevent-default" data-key="F2">
                  <div class="keycap">F2</div>
                </div>
                <div class="key prevent-default" data-key="F3">
                  <div class="keycap">F3</div>
                </div>
                <div class="key prevent-default" data-key="F4">
                  <div class="keycap">F4</div>
                </div>
              </div>
              <div class="function__group">
                <div class="key prevent-default" data-key="F5">
                  <div class="keycap">F5</div>
                </div>
                <div class="key prevent-default" data-key="F6">
                  <div class="keycap">F6</div>
                </div>
                <div class="key prevent-default" data-key="F7">
                  <div class="keycap">F7</div>
                </div>
                <div class="key prevent-default" data-key="F8">
                  <div class="keycap">F8</div>
                </div>
              </div>
              <div class="function__group">
                <div class="key prevent-default" data-key="F9">
                  <div class="keycap">F9</div>
                </div>
                <div class="key prevent-default" data-key="F10">
                  <div class="keycap">F10</div>
                </div>
                <div class="key prevent-default" data-key="F11">
                  <div class="keycap">F11</div>
                </div>
                <div class="key prevent-default" data-key="F12">
                  <div class="keycap">F12</div>
                </div>
              </div>
            </div>
          </div>
          <div class="main background">
            <div class="row">
              <div class="key" data-key="Backquote">
                <div class="keycap">~<br />'</div>
              </div>
              <div class="key" data-key="Digit1">
                <div class="keycap">!<br />1</div>
              </div>
              <div class="key" data-key="Digit2">
                <div class="keycap">@<br />2</div>
              </div>
              <div class="key" data-key="Digit3">
                <div class="keycap">#<br />3</div>
              </div>
              <div class="key" data-key="Digit4">
                <div class="keycap">$<br />4</div>
              </div>
              <div class="key" data-key="Digit5">
                <div class="keycap">%<br />5</div>
              </div>
              <div class="key" data-key="Digit6">
                <div class="keycap">^<br />6</div>
              </div>
              <div class="key" data-key="Digit7">
                <div class="keycap">&<br />7</div>
              </div>
              <div class="key" data-key="Digit8">
                <div class="keycap">*<br />8</div>
              </div>
              <div class="key" data-key="Digit9">
                <div class="keycap">(<br />9</div>
              </div>
              <div class="key" data-key="Digit0">
                <div class="keycap">)<br />0</div>
              </div>
              <div class="key" data-key="Minus">
                <div class="keycap">_<br />-</div>
              </div>
              <div class="key" data-key="Equ  al">
                <div class="keycap">+<br />=</div>
              </div>
              <div class="f_key key key--auto key--backspace" data-key="Backspace">
                <div class="keycap">⇤ Backspace</div>
              </div>
            </div>
            <div class="row">
              <div class="f_key key key--auto key--tab prevent-default" data-key="Tab">
                <div class="keycap">Tab ↹</div>
              </div>
              <div class="key" data-key="KeyQ">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyQ}</div>
              </div>
              <div class="key" data-key="KeyW">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyW}</div>
              </div>
              <div class="key" data-key="KeyE">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyE}</div>
              </div>
              <div class="key" data-key="KeyR">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyR}</div>
              </div>
              <div class="key" data-key="KeyT">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyT}</div>
              </div>
              <div class="key" data-key="KeyY">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyY}</div>
              </div>
              <div class="key" data-key="KeyU">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyU}</div>
              </div>
              <div class="key" data-key="KeyI">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyI}</div>
              </div>
              <div class="key" data-key="KeyO">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyO}</div>
              </div>
              <div class="key" data-key="KeyP">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyP}</div>
              </div>
              <div class="key" data-key="BracketLeft">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].BracketLeft}</div>
              </div>
              <div class="key" data-key="BracketRight">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].BracketRight}</div>
              </div>
              <div class="key key--auto" data-key="Backslash">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].Backslash}</div>
              </div>
            </div>
            <div class="row">
              <div class="f_key key key--caps" data-key="CapsLock">
                <div class="keycap">CapsLock</div>
              </div>
              <div class="key" data-key="KeyA">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyA}</div>
              </div>
              <div class="key" data-key="KeyS">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyS}</div>
              </div>
              <div class="key" data-key="KeyD">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyD}</div>
              </div>
              <div class="key" data-key="KeyF">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyF}</div>
              </div>
              <div class="key" data-key="KeyG">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyG}</div>
              </div>
              <div class="key" data-key="KeyH">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyH}</div>
              </div>
              <div class="key" data-key="KeyJ">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyJ}</div>
              </div>
              <div class="key" data-key="KeyK">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyK}</div>
              </div>
              <div class="key" data-key="KeyL">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyL}</div>
              </div>
              <div class="key" data-key="Semicolon">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].Semicolon}</div>
              </div>
              <div class="key" data-key="Quote">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].Quote}</div>
              </div>
              <div class="f_key key key--auto" data-key="Enter">
                <div class="keycap">Enter<br />↲</div>
              </div>
            </div>
            <div class="row">
              <div class="left f_key key key--shift" data-key="ShiftLeft">
                <div class="keycap">⇧ Shift</div>
              </div>
              <div class="key" data-key="KeyZ">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyZ}</div>
              </div>
              <div class="key" data-key="KeyX">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyX}</div>
              </div>
              <div class="key" data-key="KeyC">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyC}</div>
              </div>
              <div class="key" data-key="KeyV">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyV}</div>
              </div>
              <div class="key" data-key="KeyB">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyB}</div>
              </div>
              <div class="key" data-key="KeyN">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyN}</div>
              </div>
              <div class="key" data-key="KeyM">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].KeyM}</div>
              </div>
              <div class="key" data-key="Comma">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].Comma}</div>
              </div>
              <div class="key" data-key="Period">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].Period}</div>
              </div>
              <div class="key" data-key="Slash">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage].Slash}</div>
              </div>
              <div class="right f_key key key--auto right" data-key="ShiftRight">
                <div class="keycap">⇧ Shift</div>
              </div>
            </div>
            <div class="row">
              <div class="key key--mid left f_key" data-key="ControlLeft">
                <div class="keycap">Ctrl</div>
              </div>
              <div class="key key--mid left f_key" data-key="MetaLeft">
                <div class=" keycap">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.251 455.251"
                    style="enable-background:new 0 0 455.251 455.251" xml:space="preserve">
                    <path
                      d="M23.696 14.663a15 15 0 0 0-9.919 14.113v173.839c66.664-13.975 132.876-4.386 197.506 7.039V10.629C178.976 4.975 145.909 0 112.82 0 80.257 0 51.104 4.796 23.696 14.663zM435.099 16.504a14.994 14.994 0 0 0-13.706-1.841c-24.093 8.674-49.922 12.89-78.963 12.89-33.279 0-67.62-5.591-101.147-11.568V215.03c68.784 12.311 134.533 22.766 200.191 7.292V28.776c0-4.885-2.378-9.463-6.375-12.272zM13.777 233.311v193.163a14.998 14.998 0 0 0 20.081 14.113c24.093-8.674 49.922-12.89 78.962-12.89 32.39 0 65.789 5.296 98.463 11.089V240.123c-67.811-12.099-132.703-22.083-197.506-6.812zM241.283 245.501v198.65c33.158 5.846 67.142 11.1 101.147 11.1 32.563 0 61.717-4.797 89.125-14.664a15 15 0 0 0 9.919-14.113V253.006c-67.109 14.069-133.352 4.368-200.191-7.505z"
                      fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div class="key key--mid left f_key" data-key="AltLeft">
                <div class="keycap">Alt</div>
              </div>
              <div class="key key--spacebar key--auto" data-key="Space">
                <div class="keycap"></div>
              </div>
              <div class="key key--mid right f_key" data-key="AltRight">
                <div class="keycap">Alt</div>
              </div>
              <div class="key key--mid left f_key" data-key="ContextMenu">
                <div class="keycap">▤</div>
              </div>
              <div class="key key--mid right f_key" data-key="ControlRight">
                <div class="keycap">Ctrl</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col controls">
          <div class="function background">
            <div class="row">
              <div class="function__group">
                <div class="key">
                  <div class="keycap">PrtSc<span class="side">Sys Rq</span></div>
                </div>
                <div class="key" data-key="145">
                  <div class="keycap">ScrLk</div>
                </div>
                <div class="key" data-key="19">
                  <div class="keycap">Pause<span class="side">Break</span></div>
                </div>
              </div>
            </div>
          </div>
          <div class="background">
            <div class="row">
              <div class="key" data-key="Insert">
                <div class="keycap">Ins</div>
              </div>
              <div class="key" data-key="Home">
                <div class="keycap">Home</div>
              </div>
              <div class="key" data-key="PageUp">
                <div class="keycap">PgUp</div>
              </div>
            </div>
            <div class="row">
              <div class="key" data-key="Delete">
                <div class="keycap">Del</div>
              </div>
              <div class="key" data-key="End">
                <div class="keycap">End</div>
              </div>
              <div class="key" data-key="PageDown">
                <div class="keycap">PgDn</div>
              </div>
            </div>
          </div>
          <div class="arrows background">
            <div class="row">
              <div class="key" data-key="ArrowUp">
                <div class="keycap">🠕</div>
              </div>
            </div>
            <div class="row">
              <div class="key" data-key="ArrowLeft">
                <div class="keycap">🠔</div>
              </div>
              <div class="key" data-key="ArrowDown">
                <div class="keycap">🠗</div>
              </div>
              <div class="key" data-key="ArrowRight">
                <div class="keycap">🠖</div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    const newElement = document.createElement('div');
    newElement.id = 'app';
    newElement.innerHTML = template;
    // container.innerHTML = template;
    container.insertAdjacentElement('afterbegin', newElement);
  }
}

export default KeyboardView;
