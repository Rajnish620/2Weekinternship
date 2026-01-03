document.addEventListener("DOMContentLoaded", function () {
const emailInput = document.getElementById("email");
const newPasswordInput = document.getElementById("newPassword");
const resetButton = document.getElementById("Reset-button");

resetButton.addEventListener("click", function () {

    const storedEmail = localStorage.getItem("Email");
    const inputEmail = emailInput.value;

    if (inputEmail === storedEmail) {
        const newPassword = newPasswordInput.value;
        localStorage.setItem("Password", newPassword);
        emailInput.style.border = "2px solid green";
        newPasswordInput.style.border = "2px solid green";
        alert("Password reset successfully!");
        emailInput.value = "";
        newPasswordInput.value = "";

    } else {
        alert("Email not found. Please check and try again.");
    }


});
});