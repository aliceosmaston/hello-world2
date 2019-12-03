

let myImage = document.querySelector('img');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/background-balloons-bridge.jpeg') {
    myImage.setAttribute ('src','images/houses.jpeg');
  } else {
    myImage.setAttribute ('src','images/background-balloons-bridge.jpeg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Welcome to Bristol, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Bristol, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
