document.getElementById("btnSubmit").onclick = function () {

    let customerName = document.getElementById("customerName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let foodItem = document.getElementById("foodItem").value;
    let quantity = document.getElementById("quantity").value;

    // =====================
    // VALIDATION (C)
    // =====================

    if (customerName === "") {
        alert("Customer Name cannot be empty.");
        return;
    }

    if (phoneNumber === "") {
        alert("Phone Number cannot be empty.");
        return;
    }

    if (quantity <= 0) {
        alert("Quantity must be more than 0.");
        return;
    }

    // =====================
    // PROCESSING (D)
    // =====================

    let foodPrice = 0;

    if (foodItem === "Fried Rice") {
        foodPrice = 6.00;
    } 
    else if (foodItem === "Chicken Burger") {
        foodPrice = 5.50;
    } 
    else if (foodItem === "Sandwich") {
        foodPrice = 4.00;
    }

    // Subtotal
    let subtotal = foodPrice * quantity;

    // Discount
    let discountRate = 0;

    if (quantity >= 1 && quantity <= 2) {
        discountRate = 0;
    } 
    else if (quantity >= 3 && quantity <= 5) {
        discountRate = 0.05;
    } 
    else if (quantity > 5) {
        discountRate = 0.10;
    }

    let discountAmount = subtotal * discountRate;
    let totalPayment = subtotal - discountAmount;

    // TEMP OUTPUT (for testing only)
    document.getElementById("output").innerHTML = `
        <p>Subtotal: RM ${subtotal.toFixed(2)}</p>
        <p>Discount: RM ${discountAmount.toFixed(2)}</p>
        <p>Total: RM ${totalPayment.toFixed(2)}</p>
    `;
};