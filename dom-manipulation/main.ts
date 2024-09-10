let $clickAmount = 0;
const $hotButton = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');

if (!$hotButton) throw new Error('the !$hotButton query failed');

function clickIncrement(event: Event): void {
  if (!$hotButton || !$clickCount)
    throw new Error('the $shotButton or $clickCount query failed');
  $clickAmount += 1;
  console.log('event', event);
  console.log('event.target', event.target);
  $clickCount.textContent = `Clicks: ${$clickAmount}`;
  if ($clickAmount < 4) {
    $hotButton.className = 'hot-button cold';
  } else if ($clickAmount < 7) {
    $hotButton.className = 'hot-button cool';
  } else if ($clickAmount < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if ($clickAmount < 13) {
    $hotButton.className = 'hot-button warm';
  } else if ($clickAmount < 16) {
    $hotButton.className = 'hot-button hot';
  } else if ($clickAmount > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

$hotButton.addEventListener('click', clickIncrement);
