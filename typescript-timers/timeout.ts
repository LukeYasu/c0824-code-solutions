const $message = document.querySelector('.message') as HTMLHeadingElement;

setTimeout(function () {
  $message.textContent = 'Hello There';
}, 2000);
