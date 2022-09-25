const sliderElement = document.querySelector("#slider");
const buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor");
const password = document.querySelector("#password");

const containerPassword = document.querySelector("#conainer-password");

const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let newPassword = "";

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    
    let pass = "";

    for (let index = 0, n = charset.length; index < sliderElement.value; index++) {
        pass += charset.charAt(Math.floor(Math.random() * n));
        
    };

    containerPassword.classList.remove('hidden');
    password.innerHTML = pass;

    newPassword = pass;


};

function copyPassword(){
    navigator.clipboard.writeText(newPassword);
    alert('Senha copiada');
}