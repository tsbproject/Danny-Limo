$(document).ready(function () {
    var previousScroll = 0;
    var $navbar = $('.custom-navbar');
    var $logo = $('.navbar-logo');
    var $navLinks = $('.nav-link');

    $(window).scroll(function () {
        var currentScroll = $(this).scrollTop();

        if (currentScroll > previousScroll) {
            // Scrolling down
            $navbar.css('height', '60px');
            $navbar.css('padding', '10px 0');
            $logo.css('max-height', '40px');
            $navLinks.addClass('shrink');
        } else {
            // Scrolling up
            $navbar.css('height', '80px');
            $navbar.css('padding', '20px 0');
            $logo.css('max-height', '50px');
            $navLinks.removeClass('shrink');
        }

        previousScroll = currentScroll;
    });
});











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