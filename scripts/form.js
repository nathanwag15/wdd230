const password1 = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");
const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("rating");

password2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
    if (password1.value !== password2.value) {
        message.textContent = "❗Please enter matching passwords.";
        password2.value = "";
        password1.value = "";
        password1.focus();
    } else {
        message.style.display = "none";
    }
}




// RANGE event listener
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}