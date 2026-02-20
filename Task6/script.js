document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const messageError = document.getElementById('messageError');
    const successMessage = document.getElementById('successMessage');

    // Step 8: Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener('submit', (e) => {
        // Step 5: Prevent form submission if invalid (or to handle it via JS)
        e.preventDefault(); 

        let isValid = true;

        // Hide success message upon new submission attempt
        successMessage.style.display = 'none';
        
        // Validate Name (non-empty)
        if (nameInput.value.trim() === '') {
            nameError.style.display = 'block';
            nameInput.classList.add('invalid');
            isValid = false;
        } else {
            nameError.style.display = 'none';
            nameInput.classList.remove('invalid');
        }

        // Validate Email (using regex)
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
            emailInput.classList.add('invalid');
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.classList.remove('invalid');
        }

        // Validate Message (non-empty)
        if (messageInput.value.trim() === '') {
            messageError.style.display = 'block';
            messageInput.classList.add('invalid');
            isValid = false;
        } else {
            messageError.style.display = 'none';
            messageInput.classList.remove('invalid');
        }

        // Step 6: Show success message on valid submission
        if (isValid) {
            successMessage.style.display = 'block';
            form.reset(); // Clear the form inputs after success
        }
    });
});