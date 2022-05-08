function insertAtCursor(myField, myValue) {
  const field = myField;
  if (document.selection) {
    field.focus();
    const sel = document.selection.createRange();
    sel.text = myValue;
  } else if (field.selectionStart || field.selectionStart === '0') {
    const startPos = field.selectionStart;
    const endPos = field.selectionEnd;
    field.value = field.value.substring(0, startPos)
            + myValue
            + field.value.substring(endPos, field.value.length);
  } else {
    field.value += myValue;
  }
}

export default insertAtCursor;
