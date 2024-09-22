// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Show feature detail dynamically
function showFeatureDetail(feature) {
    alert(`You clicked on: ${feature}. More details coming soon!`);
}

// FAQ toggle functionality
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
}

// Loading spinner when visiting app
function goToPredictionApp() {
    const spinner = document.getElementById('loadingSpinner');
    spinner.style.display = 'block'; // Show the spinner
    setTimeout(() => {
        window.open('https://sih-pred-app-12.onrender.com/', '_blank'); // Simulate app loading
        spinner.style.display = 'none'; // Hide the spinner
    }, 2000); // Simulate a 2-second delay before opening the app
}
