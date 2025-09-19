// Part 1 & 2: Functions and Event handling
document.addEventListener('DOMContentLoaded', () => {

    // Toggle Dark/Light Mode
    const toggleBtn = document.getElementById('toggleThemeBtn');
    toggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // My Simple Counter
    const counterBtn = document.getElementById('incrementCounterBtn');
    const counterValue = document.getElementById('counterValue');
    let count = 0;
    counterBtn.addEventListener('click', () => {
        count++;
        counterValue.textContent = count;
    });

    // Part 3: Form Validation
    const form = document.getElementById('signupForm');
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const successMessage = document.getElementById('formSuccessMessage');

    function validateEmail(email) {
        // Simple regex for email validation
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // prevent form submission

        // Clear previous errors and messages
        nameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
        successMessage.textContent = '';

        let valid = true;

        if (nameInput.value.trim() === '') {
        nameError.textContent = 'Le nom est requis.';
        valid = false;
        }
        if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Adresse email invalide.';
        valid = false;
        }
        if (passwordInput.value.length < 6) {
        passwordError.textContent = 'Le mot de passe doit contenir au moins 6 caractères.';
        valid = false;
        }

        if (valid) {
        successMessage.textContent = 'Inscription réussie ! Merci.';
        form.reset();
        }
    });

});
