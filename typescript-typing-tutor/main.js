'use strict';
// const $textChallenge = document.querySelector('.text-challenge');
// if (!$textChallenge) throw new Error('The $textChallenge query failed');
// const $body = document.querySelector('body');
// if (!$body) throw new Error('The $body query failed');
// const $span = document.querySelectorAll('span');
// if (!$span) throw new Error('The $span query failed');
// let $spanLength = $span.length;
// let i = 0;
// function handleKeydown(event: KeyboardEvent): void {
//   const eventTarget = event.target as HTMLElement;
//   const eventKey = event.key;
//   console.log('eventKey: ', eventKey);
//   const currentClassList = $span[i].classList;
//   // if (currentClassList.contains('space') && eventKey === ' ') {
//   //   $span[i].className = 'typed-correct';
//   //   i++;
//   //   $span[i].className = 'upcoming-character space';
//   // }
//   if (eventKey === $span[i].textContent) {
//     $span[i].className = 'typed-correct';
//     i++;
//     $span[i].className = 'upcoming-character';
//   } else if (currentClassList.contains('space') && eventKey === ' ') {
//     $span[i].className = 'typed-correct';
//     i++;
//   } else {
//     $span[i].className = 'typed-incorrect upcoming-character';
//   }
// }
// $body.addEventListener('keydown', handleKeydown);
