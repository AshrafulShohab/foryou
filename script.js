function checkPassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const correctPassword = '12345'; // Change this to your desired password

    // Call a function to handle redirection based on password validity
    redirectBasedOnPassword(password === correctPassword);
}

function redirectBasedOnPassword(isValid) {
    // Determine the redirect URL or action based on password validity
    const baseUrl = 'content.html';
    const status = isValid ? 'success' : 'error';
    
    // Construct the URL with dynamic parameters
    const redirectUrl = `${baseUrl}?status=${status}`;

    // Redirect to the dynamically constructed URL
    window.location.href = redirectUrl;
}

// Function to handle Enter key press
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        checkPassword();
    }
}
