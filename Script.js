document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  // Clear previous error messages
  emailError.textContent = '';
  passwordError.textContent = '';
  emailError.style.display = 'none';
  passwordError.style.display = 'none';

  let hasError = false;

  if (email === '') {
    emailError.textContent = 'Please enter your email.';
    emailError.style.display = 'block';
    hasError = true;
  } else {
    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = 'Please enter a valid email address.';
      emailError.style.display = 'block';
      hasError = true;
    }
  }

  if (password === '') {
    passwordError.textContent = 'Please enter your password.';
    passwordError.style.display = 'block';
    hasError = true;
  } else if (password.length < 6) {
    passwordError.textContent = 'Password must be at least 6 characters long.';
    passwordError.style.display = 'block';
    hasError = true;
  } else {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordPattern.test(password)) {
      passwordError.textContent = 'Password must contain at least one uppercase letter, one lowercase letter, one special character, and one number.';
      passwordError.style.display = 'block';
      hasError = true;
    }
  }

  // If there are no errors, submit the form
  if (!hasError) {
    this.submit();
  }
});
