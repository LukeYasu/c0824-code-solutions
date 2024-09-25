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
function cycleImages(): void {
  i++;
  for (let i = 0; i < imgDots.length; i++) {
    imgDots[i].setAttribute('class', `fa-regular fa-circle img${i + 1}`);
  }

  if (i === 5) {
    i = 0;
  }
  imgDots[i].setAttribute('class', `fa-sharp fa-solid fa-circle img${i + 1}`);
  $currentImage.setAttribute('src', images[i]);

  console.log('current img: ', images[i]);
}

let setIntervalId = setInterval(cycleImages, 3000);

$carousel.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;

  clearInterval(setIntervalId);
  if (eventTarget.matches('.previous-image-button')) {
    for (let i = 0; i < imgDots.length; i++) {
      imgDots[i].setAttribute('class', `fa-regular fa-circle img${i + 1}`);
    }
    i -= 1;
    if (i <= -1) {
      i = 4;
    }
    imgDots[i].setAttribute('class', `fa-sharp fa-solid fa-circle img${i - i}`);
    $currentImage.setAttribute('src', images[i]);
  } else if (eventTarget.matches('.next-image-button')) {
    for (let i = 0; i < imgDots.length; i++) {
      imgDots[i].setAttribute('class', `fa-regular fa-circle img${i + 1}`);
    }

    i += 1;
    if (i >= images.length) {
      i = 0;
    }
    imgDots[i].setAttribute('class', `fa-sharp fa-solid fa-circle img${i}`);

    $currentImage.setAttribute('src', images[i]);
  }
  setIntervalId = setInterval(cycleImages, 3000);
  console.log(eventTarget);
});

$selectCircles.addEventListener('click', (event: Event) => {
  const eventTarget = event.target as HTMLElement;
  clearInterval(setIntervalId);
  if (eventTarget.matches('.fa-circle')) {
    for (let i = 0; i < imgDots.length; i++) {
      imgDots[i].setAttribute('class', `fa-regular fa-circle img${i + 1}`);
    }
  }
  if (eventTarget.matches('.img1')) {
    $currentImage.setAttribute('src', images[0]);
    $img1.setAttribute('class', 'fa-sharp fa-solid fa-circle img1');
    i = 0;
  } else if (eventTarget.matches('.img2')) {
    $currentImage.setAttribute('src', images[1]);
    $img2.setAttribute('class', 'fa-sharp fa-solid fa-circle img2');
    i = 1;
  } else if (eventTarget.matches('.img3')) {
    $currentImage.setAttribute('src', images[2]);
    $img3.setAttribute('class', 'fa-sharp fa-solid fa-circle img3');
    i = 2;
  } else if (eventTarget.matches('.img4')) {
    $currentImage.setAttribute('src', images[3]);
    $img4.setAttribute('class', 'fa-sharp fa-solid fa-circle img4');
    i = 3;
  } else if (eventTarget.matches('.img5')) {
    $currentImage.setAttribute('src', images[4]);
    $img5.setAttribute('class', 'fa-sharp fa-solid fa-circle img5');
    i = 4;
  }
  setIntervalId = setInterval(cycleImages, 3000);
  console.log(eventTarget);
});
