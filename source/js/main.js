import '../sass/style.scss'

// document.querySelector('#app').innerHTML = `
// <div class="keyboard">
// <div class="function background">
//   <div class="k27 f_key">
//     <div class="keycap">Esc</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F1</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F2</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F3</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F4</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F5</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F6</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F7</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F8</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F9</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F0</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F11</div>
//   </div>
//   <div class="key">
//     <div class="keycap">F12</div>
//   </div>
// </div>
// <div class="main background">
//   <div class="k49 key">
//     <div class="keycap">!<br/>1</div>
//   </div>
//   <div class="k50 key">
//     <div class="keycap">@<br/>2</div>
//   </div>
//   <div class="k51 key">
//     <div class="keycap">#<br/>3</div>
//   </div>
//   <div class="k52 key">
//     <div class="keycap">$<br/>4</div>
//   </div>
//   <div class="k53 key">
//     <div class="keycap">%<br/>5</div>
//   </div>
//   <div class="k54 key">
//     <div class="keycap">^<br/>6</div>
//   </div>
//   <div class="k55 key">
//     <div class="keycap">&<br/>7</div>
//   </div>
//   <div class="k56 key">
//     <div class="keycap">*<br/>8</div>
//   </div>
//   <div class="k57 key">
//     <div class="keycap">(<br/>9</div>
//   </div>
//   <div class="k48 key">
//     <div class="keycap">)<br/>0</div>
//   </div>
//   <div class="k189 key">
//     <div class="keycap">_<br/>-</div>
//   </div>
//   <div class="k187 key">
//     <div class="keycap">+<br/>=</div>
//   </div>
//   <div class="k220 key">
//     <div class="keycap">|<br/>\<span class="side">Ins</span></div>
//   </div>
//   <div class="k192 key">
//     <div class="keycap">~<br/>'<span class="side">Del</span></div>
//   </div>
//   <div class="k9 f_key">
//     <div class="keycap">Tab<span class="side">Caps</span></div>
//   </div>
//   <div class="k81 key">
//     <div class="keycap">Q</div>
//   </div>
//   <div class="k87 key">
//     <div class="keycap">W</div>
//   </div>
//   <div class="k69 key">
//     <div class="keycap">E</div>
//   </div>
//   <div class="k82 key">
//     <div class="keycap">R</div>
//   </div>
//   <div class="k84 key">
//     <div class="keycap">T</div>
//   </div>
//   <div class="k89 key">
//     <div class="keycap">Y</div>
//   </div>
//   <div class="k85 key">
//     <div class="keycap">U</div>
//   </div>
//   <div class="k73 key">
//     <div class="keycap">I<span class="side">PSc/SRq</span></div>
//   </div>
//   <div class="k79 key">
//     <div class="keycap">O<span class="side">ScrLk</span></div>
//   </div>
//   <div class="k80 key">
//     <div class="keycap">P<span class="side">Pus/Brk</span></div>
//   </div>
//   <div class="k219 key">
//     <div class="keycap">{<br/>[<span class="side">↑</span></div>
//   </div>
//   <div class="k221 key">
//     <div class="keycap">}<br/>]</div>
//   </div>
//   <div class="k8 f_key">
//     <div class="keycap">Delete<span class="side">BS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<em>Clear</em></span></div>
//   </div>
//   <div class="k17 f_key">
//     <div class="keycap">CapsLock</div>
//   </div>
//   <div class="k65 key">
//     <div class="keycap">A</div>
//   </div>
//   <div class="k83 key">
//     <div class="keycap">S</div>
//   </div>
//   <div class="k68 key">
//     <div class="keycap">D</div>
//   </div>
//   <div class="k70 key">
//     <div class="keycap">F</div>
//   </div>
//   <div class="k71 key">
//     <div class="keycap">G</div>
//   </div>
//   <div class="k72 key">
//     <div class="keycap">H</div>
//   </div>
//   <div class="k74 key">
//     <div class="keycap">J</div>
//   </div>
//   <div class="k75 key">
//     <div class="keycap">K</div>
//   </div>
//   <div class="k76 key">
//     <div class="keycap">L</div>
//   </div>
//   <div class="k186 key">
//     <div class="keycap">:<br/>;</div>
//   </div>
//   <div class="k222 key">
//     <div class="keycap">"<br/>'</div>
//   </div>
//   <div class="k13 f_key">
//     <div class="keycap">Return</div>
//   </div>
//   <div class="k16 left f_key">
//     <div class="keycap">Shift</div>
//   </div>
//   <div class="k90 key">
//     <div class="keycap">Z</div>
//   </div>
//   <div class="k88 key">
//     <div class="keycap">X</div>
//   </div>
//   <div class="k67 key">
//     <div class="keycap">C</div>
//   </div>
//   <div class="k86 key">
//     <div class="keycap">V</div>
//   </div>
//   <div class="k66 key">
//     <div class="keycap">B</div>
//   </div>
//   <div class="k78 key">
//     <div class="keycap">N<span class="side">+</span></div>
//   </div>
//   <div class="k77 key">
//     <div class="keycap">M<span class="side">-</span></div>
//   </div>
//   <div class="k188 key">
//     <div class="keycap"><<br/>,<span class="side">End</span></div>
//   </div>
//   <div class="k190 key">
//     <div class="keycap">><br/>.<span class="side">PageDn</span></div>
//   </div>
//   <div class="k191 key">
//     <div class="keycap">?<br/>/<span class="side">↓</span></div>
//   </div>
//   <div class="k16 right f_key">
//     <div class="keycap">Shift</div>
//   </div>
//   <div class="fn f_key">
//     <div class="keycap">Fn</div>
//   </div>

//   <div class="row">
//     <div class="key key--mid left f_key">
//       <div class="keycap">Ctrl</div>
//     </div>
//     <div class="key key--mid left f_key"">
//       <div class="keycap">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.251 455.251" style="enable-background:new 0 0 455.251 455.251" xml:space="preserve">
//           <path d="M23.696 14.663a15 15 0 0 0-9.919 14.113v173.839c66.664-13.975 132.876-4.386 197.506 7.039V10.629C178.976 4.975 145.909 0 112.82 0 80.257 0 51.104 4.796 23.696 14.663zM435.099 16.504a14.994 14.994 0 0 0-13.706-1.841c-24.093 8.674-49.922 12.89-78.963 12.89-33.279 0-67.62-5.591-101.147-11.568V215.03c68.784 12.311 134.533 22.766 200.191 7.292V28.776c0-4.885-2.378-9.463-6.375-12.272zM13.777 233.311v193.163a14.998 14.998 0 0 0 20.081 14.113c24.093-8.674 49.922-12.89 78.962-12.89 32.39 0 65.789 5.296 98.463 11.089V240.123c-67.811-12.099-132.703-22.083-197.506-6.812zM241.283 245.501v198.65c33.158 5.846 67.142 11.1 101.147 11.1 32.563 0 61.717-4.797 89.125-14.664a15 15 0 0 0 9.919-14.113V253.006c-67.109 14.069-133.352 4.368-200.191-7.505z" fill="currentColor"/>
//         </svg>
//       </div>
//     </div>
//     <div class="key key--mid left f_key">
//       <div class="keycap">Alt</div>
//     </div>
//     <div class="key key--spacebar">
//       <div class="keycap"></div>
//     </div>
//     <div class="key key--mid left f_key">
//       <div class="keycap">Alt</div>
//     </div>
//     <div class="key key--mid left f_key">
//       <div class="keycap">▤</div>
//     </div>
//     <div class="key key--mid left f_key">
//       <div class="keycap">Ctrl</div>
//     </div>
//       </div>
//   </div>
// <div class="addition_wrap background">
//   <div class="addition">
//     <div class="key key--mid left f_key">
//       <div class="keycap">Ctrl</div>
//     </div>
//     <div class="key key--mid left f_key"">
//       <div class="keycap">
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 455.251 455.251" style="enable-background:new 0 0 455.251 455.251" xml:space="preserve">
//           <path d="M23.696 14.663a15 15 0 0 0-9.919 14.113v173.839c66.664-13.975 132.876-4.386 197.506 7.039V10.629C178.976 4.975 145.909 0 112.82 0 80.257 0 51.104 4.796 23.696 14.663zM435.099 16.504a14.994 14.994 0 0 0-13.706-1.841c-24.093 8.674-49.922 12.89-78.963 12.89-33.279 0-67.62-5.591-101.147-11.568V215.03c68.784 12.311 134.533 22.766 200.191 7.292V28.776c0-4.885-2.378-9.463-6.375-12.272zM13.777 233.311v193.163a14.998 14.998 0 0 0 20.081 14.113c24.093-8.674 49.922-12.89 78.962-12.89 32.39 0 65.789 5.296 98.463 11.089V240.123c-67.811-12.099-132.703-22.083-197.506-6.812zM241.283 245.501v198.65c33.158 5.846 67.142 11.1 101.147 11.1 32.563 0 61.717-4.797 89.125-14.664a15 15 0 0 0 9.919-14.113V253.006c-67.109 14.069-133.352 4.368-200.191-7.505z" fill="currentColor"/>
//         </svg>
//       </div>
//     </div>
//     <div class="key key--mid left f_key">
//       <div class="keycap">Alt</div>
//     </div>
//     <div class="key key--spacebar">
//       <div class="keycap"></div>
//     </div>
//     <div class="key key--mid left f_key">
//       <div class="keycap">Alt</div>
//     </div>
//     <div class="key key--mid left f_key">
//       <div class="keycap">▤</div>
//     </div>
//     <div class="key key--mid left f_key">
//       <div class="keycap">Ctrl</div>
//     </div>
//   </div>
// </div>
// </div>`;

