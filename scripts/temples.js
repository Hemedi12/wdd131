
function displayCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
}

// Call the function when the document is loaded
window.onload = displayCurrentYear;


// Get the current year
const currentYear = new Date().getFullYear();

// Get the last modified date
const lastModifiedDate = document.lastModified;

// Update the HTML elements with the dynamic content
document.getElementById("copyrightYear").textContent = `© ${currentYear}`;
document.getElementById("lastModifiedDate").textContent = `Last modification: ${lastModifiedDate}`;