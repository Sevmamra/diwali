// Function to get parameters from the URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to update the share links
function updateShareLinks(name) {
    const pageUrl = window.location.href;
    const message = encodeURIComponent(`🪔✨ *Happy Diwali, ${name}!* ✨🪔\n\nWishing you a festival of lights filled with joy, prosperity, and happiness. Check out this special greeting I made for you: ${pageUrl}`);
    
    const whatsappLink = `https://api.whatsapp.com/send?text=${message}`;
    document.getElementById('whatsapp-share').href = whatsappLink;

    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
    document.getElementById('facebook-share').href = facebookLink;
}


// This function runs when the page loads
window.onload = function() {
    // Get the name from the URL parameter 'n'
    const name = getQueryParam('n');

    // If a name is found, display it
    if (name) {
        // Capitalize the first letter and display the name
        const displayName = name.charAt(0).toUpperCase() + name.slice(1);
        document.getElementById('name-display').textContent = displayName;
        updateShareLinks(displayName);
    } else {
        // If no name is found, keep the default "Friend" and update share links
        updateShareLinks('Friend');
    }
};

// Add functionality to the "Go" button
document.getElementById('create-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('name-input');
    const newName = nameInput.value.trim();

    // Check if the user entered a name
    if (newName) {
        // Get the current URL without any query parameters
        const baseUrl = window.location.origin + window.location.pathname;
        // Create the new URL with the new name
        const newUrl = `${baseUrl}?n=${encodeURIComponent(newName)}`;
        // Go to the new URL
        window.location.href = newUrl;
    } else {
        alert("Please enter a name!");
    }
});
