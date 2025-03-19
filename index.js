// Write your code here!
// Remove the existing main element
const main = document.getElementById("main");
if (main) {
    main.remove();
}

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the ID of the new element to 'victory'
newHeader.id = "victory";

// Set the text content to match the required format
newHeader.textContent = "Grace Zawadi is the champion";  
// Append the new header to the body
document.body.appendChild(newHeader);
