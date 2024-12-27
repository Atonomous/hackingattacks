function navigateToHome() {
    location.href = 'D:/PUCIT/Degree/SEM1/ICT/Website/home.html';
}

function navigateToPhishing() {
    location.href = 'D:/PUCIT/Degree/SEM1/ICT/Website/phishing.html';
}

function navigateToMalware() {
    location.href = 'D:/PUCIT/Degree/SEM1/ICT/Website/malware.html';
}

function navigateToDenialOfService() {
   location.href = 'D:/PUCIT/Degree/SEM1/ICT/Website/denial-of-service.html';
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