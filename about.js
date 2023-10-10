console.log("hello world");

//alert message on submit
let form = document.querySelector('#contact');

function handleSubmit(evt) {
	evt.preventDefault();
	alert('The form has been submitted successfully.');	
}

form.addEventListener('submit', handleSubmit);

//mouseover,alert
const compliment = document.getElementById('compliment');
const image = document.querySelector('#rubberDuckImg');
let counter = 0;

function mouseOverPicture()
{  
	alert(compliment.children[counter].textContent);
	counter++;

	if(counter==3)
		counter=0;
}

image.addEventListener("mouseover",mouseOverPicture);