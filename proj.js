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
