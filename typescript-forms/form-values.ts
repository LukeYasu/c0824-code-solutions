interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $formContactForm = document.querySelector(
  '#contact-form'
) as HTMLFormElement;
$formContactForm.addEventListener('submit', (event: Event) => {
  event?.preventDefault();
  const $formElements = $formContactForm.elements as FormElements;
  const $formElementsValues = {
    name: $formElements.name.value,
    email: $formElements.email.value,
    message: $formElements.message.value,
  };
  console.log($formElementsValues);
});
