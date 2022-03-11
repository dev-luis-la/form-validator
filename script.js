const form = document.getElementById('form');
const message = document.getElementById('message');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');

let isValid = false;
let passwordsMatch = false;

function validateForm(){
    //usiing constraint API
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'Please check All Fields';
        message.style.color = 'red';
    }
    //check if passwords match
    if (password1.value === password2.value) {
        passwordsMatch = true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
        message.textContent = 'Youre all set'
        message.style.color = 'green'
    } else {
        passwordsMatch = false;
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        message.textContent = 'Passwords dont match'
        message.style.color = 'red'
    }
    if (isValid && passwordsMatch){
        console.log('sucess');
    }
    
}
//get info from form 
function formData(e){
    e.preventDefault();
    //validate form
    validateForm();
}


//event listner

form.addEventListener('submit', formData);