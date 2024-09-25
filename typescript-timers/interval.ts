const $countdownDisplay = document.querySelector(
  '.countdown-display'
) as HTMLHeadingElement;

let count = 5;
const intervalId = setInterval(function () {
  count--;
  $countdownDisplay.textContent = `${count}`;

  if (count <= 0) {
    $countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
  }
}, 1000);
console.log('intervalId typeof ', typeof intervalId);
