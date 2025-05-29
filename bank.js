function changeColor(imageFile, element, price) {
  document.getElementById("productImg").src = imageFile;

  document.querySelectorAll(".color-circle").forEach((circle) => {
    circle.classList.remove("selected");
  });

  element.classList.add("selected");

  document.getElementById("priceTag").textContent = `$${price.toLocaleString()}`;
}

function buyNow() {
  const selectedBank = document.getElementById("bankSelect").value;

  if (!selectedBank) {
    alert("Please select your bank before proceeding.");
    return;
  }

  document.getElementById("selectedBank").textContent = selectedBank;

  const bankSection = document.getElementById("bankInfo");
  bankSection.style.display = "block";
  bankSection.scrollIntoView({ behavior: "smooth" });
}

function goToThankYou() {
  window.location.href = "thankyou.html";
}
