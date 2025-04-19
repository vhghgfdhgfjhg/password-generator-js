const generate = document.querySelector('.generate');
const passwordbox = document.getElementById('passwordbox');
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = '0123456789';
const symbole = '!@#$%^&*()-_=+[]""{};:,<.>/?|`~';
const length = 12;
const allChars = uppercase + lowercase + number + symbole;

function createpassword(){
    var password = '';
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += symbole[Math.floor(Math.random()*symbole.length)];
    password += number[Math.floor(Math.random()*number.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];
    }

    passwordbox.value = password;
}

function copy(){
    passwordbox.select();
    document.execCommand('copy');
}