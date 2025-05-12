// Toggle between login and register forms
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})

// Simple password hashing function
function hashPassword(password) {
    // Convert password to a numeric value and add a simple offset
    let hash = '';
    for (let i = 0; i < password.length; i++) {
        // Get char code and add simple offset
        const charCode = password.charCodeAt(i) + 7;
        hash += charCode.toString(16); // Convert char code to hexadecimal (base 16) string
    }
    return hash;
}

function saveUserToLocalStorage(username, password, email) {
    // Check if users array exists in local storage
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    // Check if user already exists
    const userExists = existingUsers.find(user => user.username === username);
    if (userExists) {
        alert('User already exists');
        return false;
    }
    // Hash the password before storing
    const hashedPassword = hashPassword(password);
    // Add new user to array
    existingUsers.push({ username, password: hashedPassword, email });
    // Save updated array to local storage
    localStorage.setItem('users', JSON.stringify(existingUsers));
}

function validateUser(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const hashedPassword = hashPassword(password);
    return users.find(user => user.username === username && user.password === hashedPassword);
}

// Login form submission
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Check if user exists in local storage
    const user = validateUser(username, password);
    delete user.password;

    // set current user in local storage
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    if(user){
        window.location.href = '/profile-view/index.html';
    } else {
        alert('Invalid username or password');
    }
    
});

// Register form submission
const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    const email = registerForm.email.value;

    // Check if username and password are correct
    if (username && password && email) {
        // Save user data to local storage
        const saveUser = saveUserToLocalStorage(username, password, email);
        if (saveUser) {
            alert('Registration successful');
        } else {
            alert('Registration failed');
        }
    } else {
        alert('username, password and email are required');
    }
});

