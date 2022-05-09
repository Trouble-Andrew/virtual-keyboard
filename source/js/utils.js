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

export default insertAtCursor;
