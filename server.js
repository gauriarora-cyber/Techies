const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Set up body parser to parse form data
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files (like HTML pages)
app.use(express.static(path.join(__dirname, 'public')));

// In-memory "database" to store users (for simplicity)
const users = [];

// Registration route
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if the username already exists (simple validation)
    const userExists = users.find(user => user.username === username);

    if (userExists) {
        return res.send('Username already taken. Try another one.');
    }

    // Save the new user (this is a simple in-memory store for demo purposes)
    users.push({ username, password });

    // After successful registration, redirect to the login page
    res.redirect('/login');
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Check if the user exists and the password matches
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Successful login - redirect to the list page
        res.redirect('/list');
    } else {
        // Invalid login - show error
        res.send('Invalid credentials');
    }
});

// List page route (this is where the user should go after login)
app.get('/list', (req, res) => {
    res.send('This is the book list page');  // You can replace this with your actual list page
});

// Serve register page
app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html'));  // This serves the registration page
});

// Serve login page (this is just for redirection purposes)
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));  // This serves the login page
});

// Start server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});

