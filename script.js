function validateRegister(event) {
  event.preventDefault();
  const name = document.getElementById("regName").value;
  const email = document.getElementById("regEmail").value;
  const password = document.getElementById("regPassword").value;

  fetch("http://localhost:3000/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, email, password })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Registration successful! 🎉");
        window.location.href = "login.html";
      } else {
        alert("Registration failed!");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error connecting to server.");
    });
}

function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert("Login successful! 🚀");
        window.location.href = "index.html";
      } else {
        alert("Invalid email or password ❌");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Error connecting to server.");
    });
}
