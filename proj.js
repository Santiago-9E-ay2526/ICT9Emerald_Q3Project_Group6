function buttonFare() {
    let pickup = document.getElementById("PICKUP").value;
    let dropoff = document.getElementById("DROPOFF").value;

    let fare = 50.30; 

    document.getElementById("RegularFare").innerHTML = `
        <div class="alert alert-primary mt-2">
            Regular Fare from ${pickup} to ${dropoff}: <strong>PHP ${fare.toFixed(2)}</strong>
        </div>`;
}


function buttonDiscount() {

    let pickup = document.getElementById("PICKUP").value;
    let dropoff = document.getElementById("DROPOFF").value;


    let regularFare = 50.30;
    let discountedFare = regularFare * 0.75;

    document.getElementById("DiscountFare").innerHTML = `
        <div class="alert alert-success mt-2">
            Discounted Fare (20% off) for ${pickup} to ${dropoff}: <strong>PHP ${discountedFare.toFixed(2)}</strong>
        </div>`;
}

// Password confirmation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const password = document.getElementById("inputPassword");
  const confirmPassword = document.getElementById("confirmPassword");

  form.addEventListener("submit", function (event) {
    if (password.value !== confirmPassword.value) {
      event.preventDefault(); // stop form submission
      alert("Passwords do not match!");
    }
  });

// Image preview & filename display
const fileInput = document.getElementById("ChooseFile");
const profileImg = document.getElementById("ProfileImg");
const fileNameDisplay = document.getElementById("NoFileBtn");

fileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        profileImg.src = URL.createObjectURL(file); // preview
        fileNameDisplay.textContent = file.name;   // show filename
    } else {
        profileImg.src = "";
        fileNameDisplay.textContent = "No File Chosen";
    }
});
