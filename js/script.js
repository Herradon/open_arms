/*-----POP UP 1-----*/

// Get the popup and button elements
const popup = document.getElementById("popup");
const popupButton = document.getElementById("popupButton");
const closePopup = document.getElementById("closePopup");

// Show the popup when the button is clicked
popupButton.addEventListener("click", () => {
    popup.style.display = "block";
});

// Close the popup when the close button is clicked
closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});

// Close the popup when the user clicks outside of it
window.addEventListener("click", (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
    }
});

/*-----FINAL DE POP UP 1-----*/