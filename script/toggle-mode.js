const light = document.querySelector('#light-mode');
const dark = document.querySelector('#dark-mode');
// const toggleButton = document.querySelector('.switch');
const checkbox = document.querySelector('.checkbox')

checkbox.addEventListener('click', e => {
  if (!e.target.checked) {
    light.disabled = undefined;
    dark.disabled = 'disabled';
  }
  else {
    light.disabled = 'disabled';
    dark.disabled = undefined;
  }
});