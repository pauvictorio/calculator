const light = document.querySelector('#light-mode');
const dark = document.querySelector('#dark-mode');
const checkbox = document.querySelector('.checkbox')

function btnChrome_onclick() {
  document.documentElement.webkitRequestFullScreen();
}

checkbox.addEventListener('click', e => {
  if (!e.target.checked) {
    light.disabled = undefined;
    dark.disabled = 'disabled';
  }
  else {
    light.disabled = 'disabled';
    dark.disabled = undefined;
  }

  btnChrome_onclick();
});