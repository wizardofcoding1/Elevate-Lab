// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const alertButton = document.getElementById('alertBtn');
    
    if (alertButton) {
        alertButton.addEventListener('click', () => {
            alert('Hello! Your JavaScript is working perfectly on GitHub Pages!');
        });
    }
});