function getDescription() {
  const body = document.querySelector('#app');
  const descriptionTemplate = `<div class="desription">
  <p>Клавиатура создана в операционной системе Windows</p>
  <p>Для переключения языка комбинация: левыe Shift + Alt</p>
</div>`;

  body.insertAdjacentHTML('beforeend', descriptionTemplate);
}

export default getDescription;
