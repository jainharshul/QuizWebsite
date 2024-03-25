document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting in the traditional way

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Retrieve stored user credentials (for demonstration only, not secure)
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        // Check if this is a returning user
        if (storedUsername && storedPassword) {
            if (username === storedUsername && password === storedPassword) {
                alert('Login successful!');
                window.location.href = 'QuizSelectionPage.html'; // Redirect to the quiz selection page
            } else {
                alert('Incorrect username or password.');
            }
        } else {
            // No user found, save the new user
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            // Directly log the user in by redirecting to the quiz selection page
            window.location.href = 'QuizSelectionPage.html'; // Redirect as if it was a successful login
        }
    });
});
