// script.ts

// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form from submitting

  // Get the username and password input values
  const usernameInput = document.querySelector('#username') as HTMLInputElement;
  const passwordInput = document.querySelector('#password') as HTMLInputElement;
  const username = usernameInput.value;
  const password = passwordInput.value;

  // Perform login validation
  if (username === 'admin' && password === 'password') {
    // Display success message
    const successMessage = document.createElement('p');
    successMessage.textContent = 'Login successful!';
    successMessage.classList.add('success-message');
    form.appendChild(successMessage);
  } else {
    // Display error message
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'Invalid username or password';
    errorMessage.classList.add('error-message');
    form.appendChild(errorMessage);
  }
});

