document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login_form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        window.location.href = 'home.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const logoutForm = document.querySelector('.logout_form');

    logoutForm.addEventListener('submit', function(event) {
        event.preventDefault();

        window.location.href = 'index.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('register_form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        window.location.href = 'Index.html';
    });
});