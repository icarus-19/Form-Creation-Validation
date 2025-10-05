// Form validation function
function validateForm(event) {
    event.preventDefault();
    
    // Get form inputs
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // Clear previous errors
    clearErrors();
    
    // Validate each field
    const isUsernameValid = validateUsername(username);
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    // If all validations pass
    if (isUsernameValid && isEmailValid && isPasswordValid) {
        document.getElementById('successMessage').style.display = 'block';
        document.getElementById('successMessage').textContent = 'Registration successful!';
    }
}

// Clear all error messages
function clearErrors() {
    const errors = document.querySelectorAll('.error');
    errors.forEach(error => {
        error.style.display = 'none';
    });
    document.getElementById('successMessage').style.display = 'none';
}

// Username validation
function validateUsername(username) {
    const usernameError = document.getElementById('usernameError');
    
    if (username.length === 0) {
        usernameError.textContent = 'Username is required';
        usernameError.style.display = 'block';
        return false;
    }
    
    if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters';
        usernameError.style.display = 'block';
        return false;
    }
    
    if (username.length > 15) {
        usernameError.textContent = 'Username must be less than 15 characters';
        usernameError.style.display = 'block';
        return false;
    }
    
    // Check for special characters using string methods
    for (let i = 0; i < username.length; i++) {
        const char = username.charAt(i);
        if (!((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9'))) {
            usernameError.textContent = 'Username can only contain letters and numbers';
            usernameError.style.display = 'block';
            return false;
        }
    }
    
    return true;
}

// Email validation
function validateEmail(email) {
    const emailError = document.getElementById('emailError');
    
    if (email.length === 0) {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        return false;
    }
    
    // Basic email validation using string methods
    const atPosition = email.indexOf('@');
    const dotPosition = email.lastIndexOf('.');
    
    if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= email.length) {
        emailError.textContent = 'Please enter a valid email address';
        emailError.style.display = 'block';
        return false;
    }
    
    return true;
}

// Password validation
function validatePassword(password) {
    const passwordError = document.getElementById('passwordError');
    
    if (password.length === 0) {
        passwordError.textContent = 'Password is required';
        passwordError.style.display = 'block';
        return false;
    }
    
    if (password.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters';
        passwordError.style.display = 'block';
        return false;
    }
    
    // Check for at least one uppercase letter
    let hasUpperCase = false;
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) >= 'A' && password.charAt(i) <= 'Z') {
            hasUpperCase = true;
            break;
        }
    }
    
    if (!hasUpperCase) {
        passwordError.textContent = 'Password must contain at least one uppercase letter';
        passwordError.style.display = 'block';
        return false;
    }
    
    // Check for at least one digit
    let hasDigit = false;
    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) >= '0' && password.charAt(i) <= '9') {
            hasDigit = true;
            break;
        }
    }
    
    if (!hasDigit) {
        passwordError.textContent = 'Password must contain at least one number';
        passwordError.style.display = 'block';
        return false;
    }
    
    // Check for at least one special character
    let hasSpecialChar = false;
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    for (let i = 0; i < password.length; i++) {
        if (specialChars.indexOf(password.charAt(i)) !== -1) {
            hasSpecialChar = true;
            break;
        }
    }
    
    if (!hasSpecialChar) {
        passwordError.textContent = 'Password must contain at least one special character';
        passwordError.style.display = 'block';
        return false;
    }
    
    return true;
}

// Attach event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registrationForm').addEventListener('submit', validateForm);
});
