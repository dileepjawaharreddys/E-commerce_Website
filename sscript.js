function signup(event) {
    event.preventDefault();
    const username = document.getElementById('signupUsername').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = { username, email, password };
    storedUsers.push(user);
    localStorage.setItem('users', JSON.stringify(storedUsers));

    alert('Signup successful! Redirecting to login...');
    window.location.href = 'login.html'; // Redirect to login page after signup
}

document.getElementById('signup-form').addEventListener('submit', signup);
