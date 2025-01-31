document.addEventListener('DOMContentLoaded', () => {
    // Attach the submit event listener to the login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', login);
    } else {
        console.error('Login form not found');
    }
});

function login(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to the home page after successful login
    } else {
        alert('Login failed! Please check your email and password.');
    }
}
