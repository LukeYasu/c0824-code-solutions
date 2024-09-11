'use strict';
const $taskList = document.querySelector('.task-list');
if (!$taskList) throw new Error('the $taskList query failed');
function handleClick(event) {
  const eventTarget = event.target;
  console.log('eventTarget: ', eventTarget);
  console.log('eventTarget.tagName: ', eventTarget.tagName);
  if (eventTarget.tagName === 'BUTTON') {
    console.log('eventTarget.closest: ', eventTarget.closest('li'));
    eventTarget.closest('li')?.remove();
  }
}
$taskList.addEventListener('click', handleClick);
