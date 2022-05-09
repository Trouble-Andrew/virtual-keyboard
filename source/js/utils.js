function insertAtCursor(myField, myValue) {
  const field = myField;
  field.focus();
  field.setRangeText(
    myValue,
    field.selectionStart,
    field.selectionStart,
    'end',
  );
}

function removeElement(myField, mode) {
  const field = myField;
  field.focus();
  try {
    if (mode === 'backspace') {
      field.setRangeText(
        '',
        field.selectionStart - 1,
        field.selectionStart,
        'end',
      );
    } else if (mode === 'delete') {
      field.setRangeText(
        '',
        field.selectionStart,
        field.selectionStart + 1,
        'end',
      );
    }
  } catch {
    //
  }
}

export { insertAtCursor, removeElement };
