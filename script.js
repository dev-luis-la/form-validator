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
        return;
    }
    //check if passwords match
    if (password1.value === password2.value) {
        passwordsMatch = true;
        password1.style.borderColor = 'green';
        password2.style.borderColor = 'green';
        message.textContent = 'All set';
        message.style.color = 'green';
    } else {
        passwordsMatch = false;
        password1.style.borderColor = 'red';
        password2.style.borderColor = 'red';
        message.textContent = 'Passwords dont match';
        message.style.color = 'red';
        return;
    }
    //form valid and password match
    if (isValid && passwordsMatch){
        console.log('sucess');
    }   
}
function storeFormData(){
    const user = {
        name: form.name.value,
        lastName: form.lastName.value,
        phone:  form.phone.value,
        email: form.email.value,
        password: form.password.value
    };
    //do something with user data
}
//get info from form 
function formData(e){
    e.preventDefault();
    //validate form
    validateForm();
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}
   


//event listner

form.addEventListener('submit', formData);