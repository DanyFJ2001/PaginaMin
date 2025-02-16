const priceSlider = document.getElementById('price-slider');
const maxPriceDisplay = document.getElementById('max-price');
const applyPriceButton = document.getElementById('apply-price');
const products = document.querySelectorAll('.product');
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];


priceSlider.addEventListener('input', () => {
  maxPriceDisplay.textContent = priceSlider.value;
});


applyPriceButton.addEventListener('click', () => {
  const maxPrice = parseFloat(priceSlider.value);

  products.forEach(product => {
    const productPrice = parseFloat(product.getAttribute('data-price'));
    if (productPrice <= maxPrice) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (e) => {
      const product = e.target.closest('.product');
      const name = product.querySelector('h4').textContent;
      const price = parseFloat(product.dataset.price);
      const image = product.querySelector('img').src;
  
      // Añadir producto al carrito
      cart.push({ name, price, image });
  
      updateCart();
    });
  });
  
  // Actualizar carrito
  function updateCart() {
    // Actualizar contador
    cartCount.textContent = cart.length;
  
    // Mostrar productos en el tooltip
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach((item, index) => {
      total += item.price;
      cartItems.innerHTML += `
        <li>
          <img src="${item.image}" alt="${item.name}">
          <span>${item.name} - $${item.price}</span>
          <button class="remove-btn" data-index="${index}">X</button>
        </li>
      `;
    });
  
    // Actualizar total
    cartTotal.textContent = total;
  
    // Añadir funcionalidad para eliminar
    document.querySelectorAll('.remove-btn').forEach(button => {
      button.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        cart.splice(index, 1);
        updateCart();
      });
    });
  }
  const checkoutBtn = document.getElementById('checkout-btn');

checkoutBtn.addEventListener('click', () => {
  // Guardar carrito en localStorage
  localStorage.setItem('cart', JSON.stringify(cart));
  // Redirigir a la página de compra
  window.location.href = 'comprar.html';
});

