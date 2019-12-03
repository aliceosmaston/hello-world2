let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'What does Bristol have to offer you, ' + myName + '?';
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'What does Bristol have to offer you, ' + storedName + '?';
}
myButton.onclick = function() {
  setUserName();
}
