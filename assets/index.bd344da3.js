const y=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const t of i)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function s(i){const t={};return i.integrity&&(t.integrity=i.integrity),i.referrerpolicy&&(t.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?t.credentials="include":i.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(i){if(i.ep)return;i.ep=!0;const t=s(i);fetch(i.href,t)}};y();function d(c,e){const s=c;s.focus(),s.setRangeText(e,s.selectionStart,s.selectionStart,"end")}function o(c,e){const s=c;s.focus();try{e==="backspace"?s.setRangeText("",s.selectionStart-1,s.selectionStart,"end"):e==="delete"&&s.setRangeText("",s.selectionStart,s.selectionStart+1,"end")}catch{}}class r{constructor(e){this.model=e,this.pressed=[]}handleEvent(e){switch(e.stopPropagation(),e.type){case"click":this.clickHandler();break;case"keydown":this.pressKey(e),this.changeLanguageDetector(e);break;case"keyup":this.removeTransition(e);break;case"mousedown":this.keydown(e);break;case"mouseup":r.keyup(e);break}}get modelLanguage(){return this.model.language}get modelRegister(){return this.model.upperCase}clickHandler(){this.changeLanguage()}changeLanguage(){this.model.language==="en"?(this.model.language="ru",localStorage.setItem("language","ru")):this.model.language==="ru"&&(this.model.language="en",localStorage.setItem("language","en")),this.model.notify(this.model)}changeLanguageDetector(e){this.pressed.push(e.key);const s="cornify";this.pressed.splice(-s.length-1,this.pressed.length-2),this.pressed.includes("Shift")&&this.pressed.includes("Alt")&&this.changeLanguage()}changeRegister(){this.model.upperCase=!this.model.upperCase,this.model.notify(this.model)}getUpperCase(){this.model.upperCase=!0,this.model.notify(this.model)}getLowerCase(){this.model.upperCase=!1,this.model.notify(this.model)}keydown(e){const s=e.target.closest(".key"),a=document.querySelector("#textarea");if(s&&s.classList.add("pressed","pressed--mouse"),s){let i;switch(s.dataset.key.includes("Key")&&(this.modelRegister?i=this.model.chars[this.model.language][s.dataset.key].toUpperCase():i=this.model.chars[this.model.language][s.dataset.key].toLowerCase()),s.dataset.key.includes("Digit")&&(i=s.dataset.key.replace("Digit","")),i&&(a.focus(),d(a,i)),s.dataset.key){case"Tab":d(a,"    ");break;case"CapsLock":this.changeRegister();break;case"Backquote":this.model.language==="en"?d(a,"`"):d(a,"\u0451");break;case"Minus":d(a,"-");break;case"Equal":d(a,"=");break;case"Enter":d(a,"\r");break;case"Space":d(a," ");break;case"Backslash":d(a,"\\");break;case"ArrowUp":d(a,"\u{1F815}");break;case"ArrowDown":d(a,"\u{1F817}");break;case"ArrowLeft":d(a,"\u{1F814}");break;case"ArrowRight":d(a,"\u{1F816}");break;case"Backspace":o(a,"backspace");break;case"Delete":o(a,"delete");break;case"BracketLeft":this.model.language==="en"?d(a,"["):d(a,"\u0445");break;case"BracketRight":this.model.language==="en"?d(a,"]"):d(a,"\u044A");break;case"Semicolon":this.model.language==="en"?d(a,";"):d(a,"\u0436");break;case"Quote":this.model.language==="en"?d(a,"'"):d(a,"\u044D");break;case"Comma":this.model.language==="en"?d(a,","):d(a,"\u0431");break;case"Period":this.model.language==="en"?d(a,"."):d(a,"\u044E");break;case"Slash":this.model.language==="en"?d(a,"/"):d(a,".");break}}}static keyup(){const e=document.querySelector(".pressed--mouse");e&&e.classList.remove("pressed","pressed--mouse")}pressKey(e){const s=document.querySelector(`.key[data-key="${e.code}"]`);s.classList.contains("prevent-default")&&e.preventDefault(),s.classList.add("pressed");const a=document.querySelector("#textarea");a.focus(),e.key==="CapsLock"&&this.changeRegister(),e.key==="Tab"&&d(a,"    ")}removeTransition(e){const s=document.querySelector(`.key[data-key="${e.code}"]`);s&&(s.classList.remove("pressed"),this.pressed=[])}}class v{constructor(){this.observers=[]}addObserver(e){this.observers.push(e)}removeObserver(e){const s=this.observers.findIndex(a=>e===a);s!==-1&&(this.observers=this.observers.slice(s,1))}notify(e){this.observers.length>0&&this.observers.forEach(s=>s.update(e))}}class n extends v{constructor(){super(),this.language=localStorage.getItem("language")||"en",this.upperCase=!1,this.chars={en:{KeyQ:"q",KeyW:"w",KeyE:"e",KeyR:"r",KeyT:"t",KeyY:"y",KeyU:"u",KeyI:"i",KeyO:"o",KeyP:"p",KeyA:"a",KeyS:"s",KeyD:"d",KeyF:"f",KeyG:"g",KeyH:"h",KeyJ:"j",KeyK:"k",KeyL:"l",KeyZ:"z",KeyX:"x",KeyC:"c",KeyV:"v",KeyB:"b",KeyN:"n",KeyM:"m",Semicolon:":<br />;",Quote:`"<br />'`,Comma:"&lt;<br />,",Period:"><br />.",Slash:"?<br />/",Backquote:"~<br />'",BracketLeft:"{<br />[",BracketRight:"}<br />]",Backslash:"|<br />&#92;"},ru:{KeyQ:"\u0439",KeyW:"\u0446",KeyE:"\u0443",KeyR:"\u043A",KeyT:"\u0435",KeyY:"\u043D",KeyU:"\u0433",KeyI:"\u0448",KeyO:"\u0449",KeyP:"\u0437",KeyA:"\u0444",KeyS:"\u044B",KeyD:"\u0432",KeyF:"\u0430",KeyG:"\u043F",KeyH:"\u0440",KeyJ:"\u043E",KeyK:"\u043B",KeyL:"\u0434",KeyZ:"\u044F",KeyX:"\u0447",KeyC:"\u0441",KeyV:"\u043C",KeyB:"\u0438",KeyN:"\u0442",KeyM:"\u044C",Semicolon:"\u0436",Quote:"\u044D",Comma:"\u0431",Period:"\u044E",Slash:".",Backquote:"\u0451",BracketLeft:"\u0445",BracketRight:"\u044A",Backslash:"|<br />&#92;"}}}}class k{static update(){}}class h extends k{constructor(e){super(),this.controller=e,this.controller.model.addObserver(this),window.addEventListener("keydown",e),window.addEventListener("keyup",e),window.addEventListener("mousedown",e),window.addEventListener("mouseup",e)}update(e){const s=e.chars[this.controller.modelLanguage];for(const[a,i]of Object.entries(s)){const t=document.querySelector(`.key[data-key="${a}"]`);this.controller.modelRegister?t.querySelector(".keycap").innerHTML=i.toUpperCase():t.querySelector(".keycap").innerHTML=i}}render(){const e=document.querySelector("body"),s=`<form action="#" id="form">
        <label for="textarea"></label>
        <textarea id="textarea" name="textarea" class="form-95" rows="4" cols="50"></textarea>
        <br>
        <input type="reset" value="Reset" class="btn">
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
              <div class="key" data-key="Equal">
                <div class="keycap">+<br />=</div>
              </div>
              <div class="f_key key key--auto key--backspace" data-key="Backspace">
                <div class="keycap">\u21E4 Backspace</div>
              </div>
            </div>
            <div class="row">
              <div class="f_key key key--auto key--tab prevent-default" data-key="Tab">
                <div class="keycap">Tab \u21B9</div>
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
                <div class="keycap">Enter<br />\u21B2</div>
              </div>
            </div>
            <div class="row">
              <div class="left f_key key key--shift" data-key="ShiftLeft">
                <div class="keycap">\u21E7 Shift</div>
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
                <div class="keycap">\u21E7 Shift</div>
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
                <div class="keycap">\u25A4</div>
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
                <div class="key" data-key="F13">
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
                <div class="keycap">\u{1F815}</div>
              </div>
            </div>
            <div class="row">
              <div class="key" data-key="ArrowLeft">
                <div class="keycap">\u{1F814}</div>
              </div>
              <div class="key" data-key="ArrowDown">
                <div class="keycap">\u{1F817}</div>
              </div>
              <div class="key" data-key="ArrowRight">
                <div class="keycap">\u{1F816}</div>
              </div>
            </div>
          </div>
        </div>
      </div>`,a=document.createElement("div");a.id="app",a.innerHTML=s,e.insertAdjacentElement("afterbegin",a)}}function p(){const c=document.querySelector("#app"),e=`<div class="desription">
  <p>\u041A\u043B\u0430\u0432\u0438\u0430\u0442\u0443\u0440\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0430 \u0432 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u043E\u0439 \u0441\u0438\u0441\u0442\u0435\u043C\u0435 Windows</p>
  <p>\u0414\u043B\u044F \u043F\u0435\u0440\u0435\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F \u044F\u0437\u044B\u043A\u0430 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u044F: \u043B\u0435\u0432\u044Be Shift + Alt</p>
</div>`;c.insertAdjacentHTML("beforeend",e)}const u=new n,g=new r(u),m=new h(g);m.render();p();
