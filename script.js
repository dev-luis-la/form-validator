const form = document.getElementById('form');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

let isValid = false;

function validateForm(){
    //usiing constraint API
    isValid = form.checkValidity();
    
}
//get info from form 
function formData(e){
    e.preventDefault();
    //validate form
    validateForm();
}


//event listner

form.addEventListener('submit', formData);