//buttons
const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");
const successModal = document.getElementById("successModal");
const closeButton = document.getElementById("closeButton");

//form
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const errorText = document.getElementById("errorText");


submitButton.onclick = function() {
    let valid = true;
    if (firstName.value.trim() == "") {
        valid = false;
        errorText.innerHTML = "missing information";
    } else {
        valid = true;
    }
    if (lastName.value.trim() == "") {
        valid = false;
        errorText.innerHTML = "missing information";
    } else {
        valid = true;
    }
    if (email.value.trim() == "") {
        valid = false;
        errorText.innerHTML = "missing information";
    } else {
        valid = true;
    }
    if (valid == true) {
        successModal.style.display = "block";
    }
    event.preventDefault();
}
closeButton.onclick = function() {
    successModal.style.display = "none";
}
cancelButton.onclick = function() {
    window.location.href = "index.html"
}