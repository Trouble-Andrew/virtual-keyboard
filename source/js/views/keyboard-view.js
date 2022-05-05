import Observer from "../modules/observer.js";

class KeyboardView extends Observer {
  constructor(controller) {
    super();
    this.controller = controller;
    this.controller.model.addObserver(this);

    window.addEventListener('click', controller);
  }

  update(model) {
    const chars = model.chars[this.controller.modelLanguage]

    for (const [key, value] of Object.entries(chars)) {
      const currentKey = document.querySelector(`.key[data-key="${key}"]`);
      currentKey.querySelector('.keycap').innerHTML = value;
    }
  }

  render() {
    const container = document.querySelector('#app');
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
              <div class="f_key key" data-key="27">
                <div class="keycap">Esc</div>
              </div>
              <div class="function__group">
                <div class="key prevent-default" data-key="112">
                  <div class="keycap">F1</div>
                </div>
                <div class="key prevent-default" data-key="113">
                  <div class="keycap">F2</div>
                </div>
                <div class="key prevent-default" data-key="114">
                  <div class="keycap">F3</div>
                </div>
                <div class="key prevent-default" data-key="115">
                  <div class="keycap">F4</div>
                </div>
              </div>
              <div class="function__group">
                <div class="key prevent-default" data-key="116">
                  <div class="keycap">F5</div>
                </div>
                <div class="key prevent-default" data-key="117">
                  <div class="keycap">F6</div>
                </div>
                <div class="key prevent-default" data-key="118">
                  <div class="keycap">F7</div>
                </div>
                <div class="key prevent-default" data-key="119">
                  <div class="keycap">F8</div>
                </div>
              </div>
              <div class="function__group">
                <div class="key prevent-default" data-key="120">
                  <div class="keycap">F9</div>
                </div>
                <div class="key prevent-default" data-key="121">
                  <div class="keycap">F10</div>
                </div>
                <div class="key prevent-default" data-key="122">
                  <div class="keycap">F11</div>
                </div>
                <div class="key prevent-default" data-key="123">
                  <div class="keycap">F12</div>
                </div>
              </div>
            </div>
          </div>
          <div class="main background">
            <div class="row">
              <div class="key" data-key="192">
                <div class="keycap">~<br />'</div>
              </div>
              <div class="key" data-key="49">
                <div class="keycap">!<br />1</div>
              </div>
              <div class="key" data-key="50">
                <div class="keycap">@<br />2</div>
              </div>
              <div class="key" data-key="51">
                <div class="keycap">#<br />3</div>
              </div>
              <div class="key" data-key="52">
                <div class="keycap">$<br />4</div>
              </div>
              <div class="key" data-key="53">
                <div class="keycap">%<br />5</div>
              </div>
              <div class="key" data-key="54">
                <div class="keycap">^<br />6</div>
              </div>
              <div class="key" data-key="55">
                <div class="keycap">&<br />7</div>
              </div>
              <div class="key" data-key="56">
                <div class="keycap">*<br />8</div>
              </div>
              <div class="key" data-key="57">
                <div class="keycap">(<br />9</div>
              </div>
              <div class="key" data-key="48">
                <div class="keycap">)<br />0</div>
              </div>
              <div class="key" data-key="109">
                <div class="keycap">_<br />-</div>
              </div>
              <div class="key" data-key="187">
                <div class="keycap">+<br />=</div>
              </div>
              <div class="f_key key key--auto key--backspace" data-key="8">
                <div class="keycap">⇤ Backspace</div>
              </div>
            </div>
            <div class="row">
              <div class="f_key key key--auto key--tab prevent-default" data-key="9">
                <div class="keycap">Tab ↹</div>
              </div>
              <div class="key" data-key="81">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['81']}</div>
              </div>
              <div class="key" data-key="87">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['87']}</div>
              </div>
              <div class="key" data-key="69">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['69']}</div>
              </div>
              <div class="key" data-key="82">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['82']}</div>
              </div>
              <div class="key" data-key="84">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['84']}</div>
              </div>
              <div class="key" data-key="89">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['89']}</div>
              </div>
              <div class="key" data-key="85">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['85']}</div>
              </div>
              <div class="key" data-key="73">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['73']}</div>
              </div>
              <div class="key" data-key="79">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['79']}</div>
              </div>
              <div class="key" data-key="80">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['80']}</div>
              </div>
              <div class="key" data-key="219" data-alt-key="160">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['219']}</div>
              </div>
              <div class="key" data-key="221">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['211']}</div>
              </div>
              <div class="key key--auto" data-key="220">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['220']}</div>
              </div>
            </div>
            <div class="row">
              <div class="f_key key key--caps" data-key="20" data-alt-key="70">
                <div class="keycap">CapsLock</div>
              </div>
              <div class="k65 key" data-key="65">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['65']}</div>
              </div>
              <div class="key" data-key="83">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['83']}</div>
              </div>
              <div class="key" data-key="68">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['68']}</div>
              </div>
              <div class="key" data-key="70">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['70']}</div>
              </div>
              <div class="key" data-key="71">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['71']}</div>
              </div>
              <div class="key" data-key="72">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['72']}</div>
              </div>
              <div class="key" data-key="74">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['74']}</div>
              </div>
              <div class="key" data-key="75">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['75']}</div>
              </div>
              <div class="key" data-key="76">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['76']}</div>
              </div>
              <div class="key" data-key="186">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['186']}</div>
              </div>
              <div class="key" data-key="222">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['222']}</div>
              </div>
              <div class="f_key key key--auto" data-key="13">
                <div class="keycap">Enter<br />↲</div>
              </div>
            </div>
            <div class="row">
              <div class="left f_key key key--shift" data-key="16">
                <div class="keycap">⇧ Shift</div>
              </div>
              <div class="key" data-key="90">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['90']}</div>
              </div>
              <div class="key" data-key="88">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['88']}</div>
              </div>
              <div class="key" data-key="67">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['67']}</div>
              </div>
              <div class="key" data-key="86">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['86']}</div>
              </div>
              <div class="key" data-key="66">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['66']}</div>
              </div>
              <div class="key" data-key="78">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['78']}</div>
              </div>
              <div class="key" data-key="77">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['77']}</div>
              </div>
              <div class="key" data-key="108">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['108']}</div>
              </div>
              <div class="key" data-key="190">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['190']}</div>
              </div>
              <div class="key" data-key="191">
                <div class="keycap">${this.controller.model.chars[this.controller.modelLanguage]['191']}</div>
              </div>
              <div class="right f_key key key--auto" data-key="16">
                <div class="keycap">⇧ Shift</div>
              </div>
            </div>
            <div class="row">
              <div class="key key--mid left f_key" data-key="17">
                <div class="keycap">Ctrl</div>
              </div>
              <div class="key key--mid left f_key" data-key="91">
                <div class=" keycap">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.251 455.251"
                    style="enable-background:new 0 0 455.251 455.251" xml:space="preserve">
                    <path
                      d="M23.696 14.663a15 15 0 0 0-9.919 14.113v173.839c66.664-13.975 132.876-4.386 197.506 7.039V10.629C178.976 4.975 145.909 0 112.82 0 80.257 0 51.104 4.796 23.696 14.663zM435.099 16.504a14.994 14.994 0 0 0-13.706-1.841c-24.093 8.674-49.922 12.89-78.963 12.89-33.279 0-67.62-5.591-101.147-11.568V215.03c68.784 12.311 134.533 22.766 200.191 7.292V28.776c0-4.885-2.378-9.463-6.375-12.272zM13.777 233.311v193.163a14.998 14.998 0 0 0 20.081 14.113c24.093-8.674 49.922-12.89 78.962-12.89 32.39 0 65.789 5.296 98.463 11.089V240.123c-67.811-12.099-132.703-22.083-197.506-6.812zM241.283 245.501v198.65c33.158 5.846 67.142 11.1 101.147 11.1 32.563 0 61.717-4.797 89.125-14.664a15 15 0 0 0 9.919-14.113V253.006c-67.109 14.069-133.352 4.368-200.191-7.505z"
                      fill="currentColor" />
                  </svg>
                </div>
              </div>
              <div class="key key--mid left f_key" data-key="18">
                <div class="keycap">Alt</div>
              </div>
              <div class="key key--spacebar key--auto" data-key="32">
                <div class="keycap"></div>
              </div>
              <div class="key key--mid left f_key" data-key="18">
                <div class="keycap">Alt</div>
              </div>
              <div class="key key--mid left f_key" data-key="93">
                <div class="keycap">▤</div>
              </div>
              <div class="key key--mid left f_key" data-key="17">
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
              <div class="key" data-key="45">
                <div class="keycap">Ins</div>
              </div>
              <div class="key" data-key="36">
                <div class="keycap">Home</div>
              </div>
              <div class="key" data-key="33">
                <div class="keycap">PgUp</div>
              </div>
            </div>
            <div class="row">
              <div class="key" data-key="46">
                <div class="keycap">Del</div>
              </div>
              <div class="key" data-key="35">
                <div class="keycap">End</div>
              </div>
              <div class="key" data-key="34">
                <div class="keycap">PgDn</div>
              </div>
            </div>
          </div>
          <div class="arrows background">
            <div class="row">
              <div class="key" data-key="38">
                <div class="keycap">🠕</div>
              </div>
            </div>
            <div class="row">
              <div class="key" data-key="37">
                <div class="keycap">🠔</div>
              </div>
              <div class="key" data-key="40">
                <div class="keycap">🠗</div>
              </div>
              <div class="key" data-key="39">
                <div class="keycap">🠖</div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    container.innerHTML = template;
  }
}

export default KeyboardView;