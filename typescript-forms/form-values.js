'use strict';
const $formContactForm = document.querySelector('#contact-form');
$formContactForm.addEventListener('submit', (event) => {
  event?.preventDefault();
  const $formElements = $formContactForm.elements;
  const $formElementsValues = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log($formElementsValues);
});
