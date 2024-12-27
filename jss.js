function navigateToHome() {
    location.href="home.html";
}

function navigateToPhishing() {
    location.href = 'phishing.html';
}

function navigateToMalware() {
    location.href = 'malware.html';
}

function navigateToDenialOfService() {
   location.href = 'denial-of-service.html';
}
function thanks() {
    const input = document.getElementById("email").value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!input) {
        alert("Please enter an email address.");
    } else if (!regex.test(input)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thanks for subscribing to our newsletter!");
    }
}
function websitevisit() {   
    window.open('https://github.com/Atonomous/hackingattacks', '_blank');   
}