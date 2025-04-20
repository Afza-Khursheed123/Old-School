window.login = function login(event) {
    event.preventDefault(); 
    const code = document.getElementById("password").value;
  
    const validCode = "ABC123";
  
    if (code === validCode) {
      window.location.replace("home.html");
    } else {
      alert("Invalid code. Please try again.");
    }
  };
