const $currentImage = document.querySelector(
  '.current-image'
) as HTMLImageElement;
const $carousel = document.querySelector('.carousel') as HTMLDivElement;
const $selectCircles = document.querySelector(
  '.select-circles'
) as HTMLDivElement;
const $img1 = document.querySelector('.img1') as HTMLElement;
const $img2 = document.querySelector('.img2') as HTMLElement;
const $img3 = document.querySelector('.img3') as HTMLElement;
const $img4 = document.querySelector('.img4') as HTMLElement;
const $img5 = document.querySelector('.img5') as HTMLElement;

if (!$currentImage) throw new Error('$currentImage query failed');
if (!$carousel) throw new Error('$carousel query failed');
if (!$selectCircles) throw new Error('$selectCircles query failed');
if (!$img1) throw new Error('$img1 query failed');
if (!$img2) throw new Error('$img2 query failed');
if (!$img3) throw new Error('$img3 query failed');
if (!$img4) throw new Error('$img4 query failed');
if (!$img5) throw new Error('$img5 query failed');

const images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
const imgDots = [$img1, $img2, $img3, $img4, $img5];
let i = 0;
let setIntervalId = setInterval(cycleImages, 3000);

function cycleImages(): void {
  i++;
  handleDots();
  if (i === 5) {
    i = 0;
  }
  imgDots[i].setAttribute('class', `fa-sharp fa-solid fa-circle img${i + 1}`);
  $currentImage.setAttribute('src', images[i]);
}

function handleDots(): void {
  for (let i = 0; i < imgDots.length; i++) {
    imgDots[i].setAttribute('class', `fa-regular fa-circle img${i + 1}`);
  }
}

function dotImageSwitch(num: number): void {
  $currentImage.setAttribute('src', images[num]);
  imgDots[num].setAttribute(
    'class',
    `fa-sharp fa-solid fa-circle img${num + 1}`
  );
  i = num;
}

$carousel.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  clearInterval(setIntervalId);

  if (eventTarget.matches('.previous-image-button')) {
    handleDots();
    i -= 1;
    if (i <= -1) {
      i = 4;
    }
    imgDots[i].setAttribute('class', `fa-sharp fa-solid fa-circle img${i}`);
    $currentImage.setAttribute('src', images[i]);
  } else if (eventTarget.matches('.next-image-button')) {
    handleDots();
    i += 1;
    if (i >= images.length) {
      i = 0;
    }
    imgDots[i].setAttribute('class', `fa-sharp fa-solid fa-circle img${i}`);
    $currentImage.setAttribute('src', images[i]);
  }
  setIntervalId = setInterval(cycleImages, 3000);
});

$selectCircles.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  clearInterval(setIntervalId);
  if (eventTarget.matches('.fa-circle')) {
    handleDots();
  }
  switch (true) {
    case eventTarget.matches('.img1'):
      dotImageSwitch(0);
      break;
    case eventTarget.matches('.img2'):
      dotImageSwitch(1);
      break;
    case eventTarget.matches('.img3'):
      dotImageSwitch(2);
      break;
    case eventTarget.matches('.img4'):
      dotImageSwitch(3);
      break;
    case eventTarget.matches('.img5'):
      dotImageSwitch(4);
  }

  setIntervalId = setInterval(cycleImages, 3000);
});
