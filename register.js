const submitButton = document.getElementById("submitButton");
const cancelButton = document.getElementById("cancelButton");
const successModal = document.getElementById("successModal");
const closeButton = document.getElementById("closeButton")
submitButton.onclick = function() {
    successModal.style.display = "block";
}
closeButton.onclick = function() {
    successModal.style.display = "none";
}
cancelButton.onclick = function() {
    window.location.href = "index.html"
}