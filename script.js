var btnSubmit = document.getElementById("btnSubmit");
var btnReset  = document.getElementById("btnReset");

// ─── Reset button ─────────────────────────────
btnReset.onclick = function () {
  document.getElementById("customerName").value = "";
  document.getElementById("phoneNumber").value  = "";
  document.getElementById("foodItem").value     = "";
  document.getElementById("quantity").value     = "";
  document.getElementById("dineOption").value   = "";
  document.getElementById("outputSection").style.display = "none";
  document.getElementById("message").innerHTML  = "";
};

// ─── Submit button ─────────────────────────────
btnSubmit.onclick = function () {

  // ─────────────────────────────────────────────
  //  PART C — JAVASCRIPT VALIDATION
  // ─────────────────────────────────────────────

  var customerName = document.getElementById("customerName").value.trim();
  var phoneNumber  = document.getElementById("phoneNumber").value.trim();
  var foodItem     = document.getElementById("foodItem").value;
  var quantity     = parseInt(document.getElementById("quantity").value);
  var dineOption   = document.getElementById("dineOption").value;

  if (customerName === "") {
    alert("Customer Name cannot be empty.");
    return;
  }

  if (phoneNumber === "") {
    alert("Phone Number cannot be empty.");
    return;
  }

  if (foodItem === "") {
    alert("Please select a Food Item.");
    return;
  }

  if (isNaN(quantity) || quantity <= 0) {
    alert("Quantity must be more than 0.");
    return;
  }

  if (dineOption === "") {
    alert("Please select a Dine Option.");
    return;
  }

  // ─────────────────────────────────────────────
  //  PART D — JAVASCRIPT PROCESSING & CALCULATION
  // ─────────────────────────────────────────────

  // Food price using if...else if
  var foodPrice = 0;

  if (foodItem === "Fried Rice") {
    foodPrice = 6.00;
  } else if (foodItem === "Chicken Burger") {
    foodPrice = 5.50;
  } else if (foodItem === "Sandwich") {
    foodPrice = 4.00;
  }

  // Subtotal
  var subtotal = foodPrice * quantity;

  // Discount rate using if...else if
  var discountRate = 0;

  if (quantity >= 1 && quantity <= 2) {
    discountRate = 0;           // No discount
  } else if (quantity >= 3 && quantity <= 5) {
    discountRate = 0.05;        // 5% discount
  } else if (quantity > 5) {
    discountRate = 0.10;        // 10% discount
  }

  // Discount amount & total payment
  var discountAmount = subtotal * discountRate;
  var totalPayment   = subtotal - discountAmount;

<<<<<<< HEAD
  window.orderData = {
    customerName  : customerName,
    phoneNumber   : phoneNumber,
    foodItem      : foodItem,
    quantity      : quantity,
    dineOption    : dineOption,
    foodPrice     : foodPrice,
    subtotal      : subtotal,
    discountAmount: discountAmount,
    totalPayment  : totalPayment
  };

  if (typeof displayOutput === "function") {
    displayOutput(window.orderData);
  }

  // -----------------------------------------------
  // Q2 - C: Display message using jQuery .text()
  // -----------------------------------------------
  $("#message").text("Order processed successfully.");
  $("#message").show();
 
  // -----------------------------------------------
  // Q2 - D: Show output section with jQuery effect
  // Using slideDown()
  // -----------------------------------------------
  $("#outputSection").slideDown(500);
};
 
// -----------------------------------------------
// Reset button - plain JavaScript
// -----------------------------------------------
document.getElementById("btnReset").onclick = function () {
  document.getElementById("customerName").value = "";
  document.getElementById("phoneNumber").value  = "";
  document.getElementById("foodItem").value     = "";
  document.getElementById("quantity").value     = "";
  document.getElementById("dineOption").value   = "";
  document.getElementById("output").innerHTML   = "";
 
  // Hide output section and message on reset
  $("#outputSection").hide();
  $("#message").hide();
};
 
// -----------------------------------------------
// Q2 - B: Hide / Show Summary using jQuery click()
// and toggle()
// -----------------------------------------------
$("#btnToggle").click(function () {
  $("#outputSection").toggle();
});

// ─────────────────────────────────────────────
//  displayOutput function — builds order summary HTML
// ─────────────────────────────────────────────
function displayOutput(data) {
  var discountLabel = (data.discountAmount > 0)
    ? "RM " + data.discountAmount.toFixed(2)
    : "No Discount";
 
  var html = "";
  html += "<p><strong>Customer Name</strong><span>" + data.customerName + "</span></p>";
  html += "<p><strong>Phone Number</strong><span>" + data.phoneNumber + "</span></p>";
  html += "<p><strong>Food Item</strong><span>" + data.foodItem + "</span></p>";
  html += "<p><strong>Unit Price</strong><span>RM " + data.foodPrice.toFixed(2) + "</span></p>";
  html += "<p><strong>Quantity</strong><span>" + data.quantity + "</span></p>";
  html += "<p><strong>Dine Option</strong><span>" + data.dineOption + "</span></p>";
  html += "<p><strong>Subtotal</strong><span>RM " + data.subtotal.toFixed(2) + "</span></p>";
  html += "<p><strong>Discount</strong><span>" + discountLabel + "</span></p>";
  html += "<p class='total-row'><strong>Total Payment</strong><span>RM " + data.totalPayment.toFixed(2) + "</span></p>";
 
  $("#output").html(html);
}
=======
// PART E: Packaging Charge
let packagingCharge = 0;

if (dineOption === "Dine In") {
    packagingCharge = 0;
} else if (dineOption === "Take Away") {
    packagingCharge = 0.5;
}

// Final Payment
let finalPayment = totalPayment + packagingCharge;


// PART F: Output Display
document.getElementById("output").innerHTML = `
<p><strong>Customer Name:</strong> ${customerName}</p>
<p><strong>Phone Number:</strong> ${phoneNumber}</p>
<p><strong>Food Item:</strong> ${foodItem}</p>
<p><strong>Quantity:</strong> ${quantity}</p>
<p><strong>Food Price:</strong> RM ${foodPrice.toFixed(2)}</p>
<p><strong>Subtotal:</strong> RM ${subtotal.toFixed(2)}</p>
<p><strong>Discount Amount:</strong> RM ${discountAmount.toFixed(2)}</p>
<p><strong>Total Payment:</strong> RM ${totalPayment.toFixed(2)}</p>
<p><strong>Packaging Charge:</strong> RM ${packagingCharge.toFixed(2)}</p>
<p><strong>Final Payment:</strong> RM ${finalPayment.toFixed(2)}</p>
`;

document.getElementById("outputSection").style.display = "block";
};
>>>>>>> 88166e40f51ffb720d987f4d6f9274879f6e1409
