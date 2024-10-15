// Select all elements related to quantity and price
const plusIcons = document.querySelectorAll('.fa-plus-circle');
const minusIcons = document.querySelectorAll('.fa-minus-circle');
const trashIcons = document.querySelectorAll('.fa-trash-alt');
const heartIcons = document.querySelectorAll('.fa-heart');
const totalPriceElement = document.getElementById('total-price');
let totalPrice = 0;

// Function to calculate total price
function calculateTotal() {
  totalPrice = 0;
  const prices = document.querySelectorAll('.unitt-price');
  const quantities = document.querySelectorAll('.qute');
  
  prices.forEach((price, index) => {
    totalPrice += parseInt(price.textContent) * parseInt(quantities[index].textContent);
  });

  totalPriceElement.textContent = totalPrice;
}

// Event listener for adding quantity
plusIcons.forEach((icon, index) => {
  icon.addEventListener('click', function() {
    const quantityElement = document.querySelectorAll('.qute')[index];
    quantityElement.textContent = parseInt(quantityElement.textContent) + 1;
    calculateTotal();
  });
});

// Event listener for subtracting quantity
minusIcons.forEach((icon, index) => {
  icon.addEventListener('click', function() {
    const quantityElement = document.querySelectorAll('.qute')[index];
    if (parseInt(quantityElement.textContent) > 0) {
      quantityElement.textContent = parseInt(quantityElement.textContent) - 1;
      calculateTotal();
    }
  });
});

// Event listener for removing an item
trashIcons.forEach((icon, index) => {
  icon.addEventListener('click', function() {
    const cardElement = icon.closest('.card');
    cardElement.remove();
    calculateTotal();
  });
});

// Event listener for liking an item
heartIcons.forEach((icon) => {
  icon.addEventListener('click', function() {
    icon.classList.toggle('fas');
    icon.classList.toggle('liked');  // Adds a custom style when the heart is filled
  });
});

// Initial calculation of total price
calculateTotal();
