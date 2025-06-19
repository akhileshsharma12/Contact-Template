
let nameField = document.getElementById('your_name');
let emailField = document.getElementById('your_email');
let messageField = document.getElementById('your_message');
let btnField = document.getElementById('btn_field');



window.onsubmit = function() {
    // Reset the form fields when the page loads
    document.getElementById("form").reset();

    nameField.value = '';
    emailField.value = '';
    messageField.value = '';
};