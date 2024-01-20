// FORM VALIDATON
function validateForm() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    if (name === '' || phone === '' || email === '' || message === '') {
        alert('All fields must be filled out');
        return false;
    }


    return true;
}