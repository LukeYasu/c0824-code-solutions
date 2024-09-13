'use strict';
function handleFocus(event) {
  console.log('focus event was fired');
  const eventTarget = event.target;
  console.log('eventTarget.name: ', eventTarget.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  const eventTarget = event.target;
  console.log('eventTarget.name: ', eventTarget.name);
}
function handleInput(event) {
  console.log('input event was fired');
  const eventTarget = event.target;
  console.log(
    'eventTarget.name: ',
    eventTarget.name,
    'eventTarget.value: ',
    eventTarget.value
  );
}
const $inputUserName = document.querySelector('#user-name');
const $inputUserEmail = document.querySelector('#user-email');
const $textAreaUserMessage = document.querySelector('#user-message');
if (!$inputUserName) throw new Error('$inputUserName query failed');
if (!$inputUserEmail) throw new Error('$inputUserEmail query failed');
if (!$textAreaUserMessage) throw new Error('$textAreaUserMessage query failed');
$inputUserName.addEventListener('focus', handleFocus);
$inputUserName.addEventListener('blur', handleBlur);
$inputUserName.addEventListener('input', handleInput);
$inputUserEmail.addEventListener('focus', handleFocus);
$inputUserEmail.addEventListener('blur', handleBlur);
$inputUserEmail.addEventListener('input', handleInput);
$textAreaUserMessage.addEventListener('focus', handleFocus);
$textAreaUserMessage.addEventListener('blur', handleBlur);
$textAreaUserMessage.addEventListener('input', handleInput);
