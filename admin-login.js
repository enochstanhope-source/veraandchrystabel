// Admin credentials (in a real application, this would be handled server-side)
const ADMIN_CREDENTIALS = {
    username: '#EBOH',
    password: '#12345'
};

// Clear form and console on page load
window.onload = function() {
    console.clear();
    document.getElementById('loginForm').reset();
};

// Clear form and console when page is being closed
window.onbeforeunload = function() {
    console.clear();
    document.getElementById('loginForm').reset();
};

function validateLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginBtn = document.querySelector('.login-btn');
    
    // Remove any existing error messages
    clearErrors();
    
    // Add loading state
    loginBtn.classList.add('loading');
    loginBtn.innerHTML = '<i class="fas fa-spinner"></i> Logging in...';
    
    // Simulate API call delay
    setTimeout(() => {
        if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
            // Successful login
            window.location.href = 'dash.html';
        } else {
            // Failed login
            let errorMessage = 'Invalid credentials.';
            showError(errorMessage);
            
            // Clear form data
            document.getElementById('loginForm').reset();
            loginBtn.classList.remove('loading');
            loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
        }
    }, 1000);
    
    return false;
}

function togglePassword() {
    // Always ensure password is hidden
    const passwordInput = document.getElementById('password');
    const toggleBtn = document.querySelector('.toggle-password i');
    
    // Force password type to be 'password'
    passwordInput.type = 'password';
    toggleBtn.classList.remove('fa-eye-slash');
    toggleBtn.classList.add('fa-eye');
}

function showError(message) {
    const form = document.getElementById('loginForm');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.innerHTML = `<i class="fas fa-exclamation-circle"></i> ${message}`;
    form.insertBefore(errorDiv, form.querySelector('.login-btn'));
    
    // Add error styling to inputs
    document.getElementById('username').classList.add('input-error');
    document.getElementById('password').classList.add('input-error');
}

function clearErrors() {
    // Remove error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(error => error.remove());
    
    // Remove error styling from inputs
    document.getElementById('username').classList.remove('input-error');
    document.getElementById('password').classList.remove('input-error');
}
