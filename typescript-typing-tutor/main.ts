const $body = document.querySelector('body');
if (!$body) throw new Error('The $body query failed');
const $span = document.querySelectorAll('span');
if (!$span) throw new Error('The $span query failed');
const $divAcc = document.createElement('div');
$divAcc.className = 'accuracy';

let i = 0;
let errorCount = 0;
let correctCount = 0;
function handleKeydown(event: KeyboardEvent): void {
  const eventTarget = event.target as HTMLElement;
  const eventKey = event.key;
  console.log('eventKey: ', eventKey);
  console.log('eventTarget', eventTarget);

  let currentClassList = $span[i].classList;

  if (eventKey === $span[i].textContent) {
    $span[i].className = 'typed-correct';
    i++;
    correctCount += 1;
    currentClassList = $span[i].classList;
    if (currentClassList.contains('space')) {
      $span[i].className = 'space upcoming-character';
    } else {
      $span[i].className = 'upcoming-character';
    }
  } else if (currentClassList.contains('space') && eventKey === ' ') {
    $span[i].className = 'typed-correct';
    i++;
    correctCount += 1;
    currentClassList = $span[i].classList;
    if (currentClassList.contains('space')) {
      $span[i].className = 'space upcoming-character';
    } else {
      $span[i].className = 'upcoming-character';
    }
  } else {
    errorCount += 1;
    currentClassList = $span[i].classList;
    if (currentClassList.contains('space')) {
      $span[i].className = 'space upcoming-character typed-incorrect';
    } else {
      $span[i].className = 'upcoming-character typed-incorrect';
    }
  }
  const accuracy = (1 - errorCount / correctCount) * 100;
  console.log('accuracy %', accuracy);
  $divAcc.textContent = `Accuracy: % ${accuracy.toFixed(2)}`;
  document.body.append($divAcc);
}
$body.addEventListener('keydown', handleKeydown);
