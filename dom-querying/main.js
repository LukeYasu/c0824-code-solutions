'use strict';
console.log('hello, world');
const $h1 = document.querySelector('.h1');
console.dir($h1);
const $element = document.getElementById('explanation');
console.dir($element);
const $class = document.getElementsByClassName('hint');
console.dir($class);
const $pNodes = document.querySelectorAll('p');
console.log($pNodes);
const $exampleLinksNodes = document.querySelectorAll('.example-link');
console.log($exampleLinksNodes);
