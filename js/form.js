const fieldsets = document.querySelectorAll('.ad-form fieldset');
const adForm = document.querySelector('.ad-form');

function enabledForm() {
  for (const fieldset of fieldsets) {
    fieldset.removeAttribute('disabled');
  }
  adForm.classList.remove('ad-form--disabled');
}

function disabledForm() {
  for (const fieldset of fieldsets) {
    fieldset.setAttribute('disabled', 'disabled');
  }
  adForm.classList.add('ad-form--disabled');
}

function changeFormState(isActive) {
  if (isActive) {
    enabledForm();
    return;
  }
  disabledForm();
}

export {changeFormState};
