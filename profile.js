let color = document.querySelector('#color');
let place = document.querySelector('#place');
let ritual = document.querySelector('#ritual');

function buttonClickColor(){    
        alert('My favorite color is brown.');   
}

function buttonClickPlace(){    
    alert('My favorite place is Bangalore!');   
}

function buttonClickRitual(){    
    alert('My favorite ritual is Yoga.');   
}

color.addEventListener('click',buttonClickColor );
place.addEventListener('click',buttonClickPlace );
ritual.addEventListener('click',buttonClickRitual);


//message sent on submit - alert message
let form = document.querySelector('.message');

function handleSubmit(evt) {
	evt.preventDefault();
	alert('The message has been sent successfully.');	
}

form.addEventListener('submit', handleSubmit);