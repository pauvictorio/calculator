const keys = [...document.querySelectorAll('.button')];

// 
function displayOperation() {

}

//
function displayResult() {

}

// Handle keyboard input
window.addEventListener('keydown', e => {
  const key = document.querySelector(`.button[data-key="${e.key}"]`);
  if (keys.includes(key)) console.log(key);
});

// Handle onscreen input
window.addEventListener('click', e => {
  const key = e.target;
  if (keys.includes(key)) console.log(key);
});

function btnChrome_onclick() {
  document.documentElement.webkitRequestFullScreen();
}

