document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
  
    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      document.getElementById('login-container').style.display = 'none';
      document.getElementById('home-container').style.display = 'block';
    } else {
      document.getElementById('login-message').textContent = 'Invalid username or password';
    }
  });
  
  document.getElementById('logout-button').addEventListener('click', function() {
    localStorage.removeItem('token');
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('home-container').style.display = 'none';
  });
  
  window.addEventListener('load', function() {
    const token = localStorage.getItem('token');
    if (token) {
      document.getElementById('login-container').style.display = 'none';
      document.getElementById('home-container').style.display = 'block';
    }
  });
  