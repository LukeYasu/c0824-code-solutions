'use strict';
const $button = document.querySelector('button');
const $body = document.querySelector('body');
if (!$button) throw new Error('the !$button query failed');
if (!$body) throw new Error('the !$body query failed');
$body.addEventListener('click', handleClick);
function handleClick(event) {
  const eventTarget = event.target;
  const eventTargetBackground = eventTarget.closest('body');
  console.log('eventTarget: ', eventTarget);
  console.log('eventTarget.tagName: ', eventTarget.tagName);
  if (eventTarget.tagName !== 'BUTTON') {
    return;
  }
  console.log('eventTarget.closest: ', eventTarget.closest('body'));
  if (eventTarget.className === 'light-mode') {
    eventTarget.className = 'dark-mode';
    eventTargetBackground.className = 'background-dark';
  } else if (eventTarget.className === 'dark-mode') {
    eventTarget.className = 'light-mode';
    eventTargetBackground.className = 'background-light';
  }
}
