let characters = "1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength = 12;

function generatePassword() {
    let passwordField = document.getElementById("password");
    let newPassword = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * characters.length);
        newPassword += characters[randomNumber];
    }

    passwordField.value = newPassword;
}

function copyPassword() {
    let copyText = document.getElementById("password");
    copyText.select();
    copyText.setSelectionRange(0, 99999); // for mobile devices ?
    navigator.clipboard.writeText(copyText.value);
}