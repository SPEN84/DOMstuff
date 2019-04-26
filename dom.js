// Javascript and the DOM

document.getElementById('myHeading').style.color = 'purple'

document.getElementById('myHeading').style.color = 'black'

// ex 2

const myHeading = document.getElementById('myHeading');

myHeading.addEventListener('click', () => {
	myHeading.style.color = 'red';
})

// or 
myHeading.addEventListener('click', () => {
	myHeading.style.color = myTextInput.value;
})
// query selector
const errorNotPurple = document.querySelectorAll('.error-not-purple');
for (let i = 0; i < errorNotPurple.length; i += 1) {
	errorNotPurple[i].style.color = 'red';
}