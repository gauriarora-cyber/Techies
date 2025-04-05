// For login form
function validateLogin(event) {
    event.preventDefault(); // Prevent page reload
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    if (email === "" || password === "") {
      alert("Please fill in both email and password.");
    } else {
      alert("Login successful! 🚀");
      // You can redirect to home/dashboard here
    }
  }
  
  // For register form
  function validateRegister(event) {
    event.preventDefault();
    const name = document.getElementById("regName").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPassword").value;
  
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields.");
    } else {
      alert("Registration successful! 🎉");
      // Redirect or clear form if needed
    }
  }
  