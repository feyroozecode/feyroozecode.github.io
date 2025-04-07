
// Mobile menu toggle
document.getElementById('menu-btn').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Close mobile menu if open
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.add('hidden');
            
            // Scroll to target
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Add shadow to navbar on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});

// // Initialize EmailJS with your user ID
// (function() {
//     emailjs.init(ProcessingInstruction.env.EMAILJS_USER_ID); // Replace with your EmailJS user ID
// })();

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const progressContainer = document.getElementById('progressContainer');
//     const progressBar = document.getElementById('progressBar');
//     const resultMessage = document.getElementById('resultMessage');
//     const submitButton = this.querySelector('button[type="submit"]');
    
//     // Show progress bar and disable submit button
//     progressContainer.classList.remove('hidden');
//     submitButton.disabled = true;
    
//     // Simulate progress
//     let progress = 0;
//     const progressInterval = setInterval(() => {
//         if (progress < 90) {
//             progress += 10;
//             progressBar.style.width = `${progress}%`;
//         }
//     }, 200);

//     // Prepare template parameters
//     const templateParams = {
//         from_name: document.getElementById('name').value,
//         from_email: document.getElementById('email').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value,
//         to_email: 'feyroozecode@gmail.com'
//     };

//     // Send email using EmailJS
//     emailjs.send(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, templateParams)
//         .then(function(response) {
//             clearInterval(progressInterval);
//             progressBar.style.width = '100%';
            
//             resultMessage.classList.remove('hidden');
//             resultMessage.classList.add('bg-green-100', 'text-green-700');
//             resultMessage.textContent = 'Message envoyé avec succès!';
            
//             // Reset form
//             document.getElementById('contactForm').reset();
//         }, function(error) {
//             clearInterval(progressInterval);
//             progressBar.style.width = '0%';
            
//             resultMessage.classList.remove('hidden');
//             resultMessage.classList.add('bg-red-100', 'text-red-700');
//             resultMessage.textContent = 'Erreur lors de l\'envoi du message. Veuillez réessayer.';
//         })
//         .finally(function() {
//             setTimeout(() => {
//                 progressContainer.classList.add('hidden');
//                 resultMessage.classList.add('hidden');
//                 submitButton.disabled = false;
//                 progressBar.style.width = '0%';
//             }, 3000);
//         });
// });

function openMailto(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    const mailtoLink = `mailto:feyroozecode@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`;
    
    window.location.href = mailtoLink;
}   