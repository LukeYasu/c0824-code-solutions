const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$openModal) throw new Error('the $openModal query failed');
if (!$dismissModal) throw new Error('the $dismissModal query failed');
if (!$dialog) throw new Error('the $dialog query failed');

function handleClickOpen(event: Event): void {
  const eventTarget = event.target as HTMLInputElement;
  console.log('event', event);
  console.log('eventTarget: ', eventTarget);
  $dialog?.showModal();
}

$openModal.addEventListener('click', handleClickOpen);

function handleClickClose(event: Event): void {
  const eventTarget = event.target as HTMLInputElement;
  console.log('event', event);
  console.log('eventTarget: ', eventTarget);
  $dialog?.close();
}

$dismissModal.addEventListener('click', handleClickClose);
