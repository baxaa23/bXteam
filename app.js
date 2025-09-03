console.log("JS işləyir!");

// Misal üçün interaktiv: alert
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function() {
            setTimeout(function() {
                alert('Message Sended Successfully!');
            }, 100);
        });
    }
});