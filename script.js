// Dark Mode 
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// Change Text
function changeText() {
    document.getElementById("aboutText").textContent =
    "You clicked the button! I enjoy buildings websites,";
}
// Form Interaction
function showName(event) {
    event.preventDefault();

    let name = document.getElementById("nameInput").value;

    document.getElementById("output").textContent =
    "Thanks for your message"  + name + "!";
}