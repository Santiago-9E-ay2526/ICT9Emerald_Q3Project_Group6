const basefare = 50;
const perKMrate = 15;
const baseKM = 2;

function buttonFare() {
    let pickup = document.getElementById("PICKUP").value;
    let dropoff = document.getElementById("DROPOFF").value;
    let distance = parseFloat(document.getElementById("DISTANCE").value) || 0;

    let fare;

    if (distance <= baseKM) {
        fare = basefare;
    } else {
        fare = basefare + (distance - baseKM) * perKMrate;
    }

    document.getElementById("RegularFare").innerHTML = `
        <div class="alert alert-primary mt-2">
            Regular Fare from ${pickup} to ${dropoff}: 
            <strong>PHP ${fare.toFixed(2)}</strong>
        </div>`;
}

function buttonDiscount() {
    let pickup = document.getElementById("PICKUP").value;
    let dropoff = document.getElementById("DROPOFF").value;
    let distance = parseFloat(document.getElementById("DISTANCE").value) || 0;

    let regularFare;

    if (distance <= baseKM) {
        regularFare = basefare;
    } else {
        regularFare = basefare + (distance - baseKM) * perKMrate;
    }

    let discountedFare = regularFare * 0.75;

    document.getElementById("DiscountFare").innerHTML = `
        <div class="alert alert-success mt-2">
            Discounted Fare (25% off) for ${pickup} to ${dropoff}: 
            <strong>PHP ${discountedFare.toFixed(2)}</strong>
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

// Image preview
  const fileInput = document.getElementById("ChooseFile");
  const profileImg = document.getElementById("ProfileImg");

  fileInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        profileImg.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});

