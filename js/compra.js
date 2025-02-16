const cartItemsContainer = document.getElementById('cart-items-container');
const cartSubtotal = document.getElementById('cart-subtotal');
const cartTotal = document.getElementById('cart-total');
const finalizePurchase = document.getElementById('finalize-purchase');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Función para renderizar el carrito en la tabla
function renderCart() {
  cartItemsContainer.innerHTML = ''; // Limpiar la tabla
  let subtotal = 0;

  cart.forEach((item, index) => {
    const itemSubtotal = item.price * item.quantity;
    subtotal += itemSubtotal;

    const row = document.createElement('tr');
    row.classList.add('cart-item');

    row.innerHTML = `
      <td class="product">
        <img src="${item.image}" alt="${item.name}" style="max-width:50px; height:auto;">
        <span>${item.name}</span>
      </td>
      <td class="price">$${item.price.toFixed(2)}</td>
      <td class="quantity">
        <input type="number" value="${item.quantity}" min="1" data-index="${index}" class="quantity-input">
      </td>
      <td class="item-total">$${itemSubtotal.toFixed(2)}</td>
      <td class="remove">
        <button class="delete-btn" data-index="${index}">❌</button>
      </td>
    `;

    cartItemsContainer.appendChild(row);
  });

  cartSubtotal.textContent = subtotal.toFixed(2);
  cartTotal.textContent = subtotal.toFixed(2);
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Función para eliminar un producto del carrito
function removeItem(e) {
  if (e.target.classList.contains('delete-btn')) {
    const index = parseInt(e.target.dataset.index, 10); // Convertir a número
    if (!isNaN(index) && index >= 0) {
      cart.splice(index, 1); // Eliminar el producto del array
      localStorage.setItem('cart', JSON.stringify(cart)); // Guardar cambios
      renderCart(); // Volver a renderizar el carrito
    }
  }
}

// Evento para eliminar un producto
cartItemsContainer.addEventListener('click', removeItem);

// Evento para actualizar la cantidad
cartItemsContainer.addEventListener('input', (e) => {
  if (e.target.classList.contains('quantity-input')) {
    const index = parseInt(e.target.dataset.index, 10);
    const newQuantity = parseInt(e.target.value, 10);

    if (!isNaN(index) && index >= 0 && newQuantity > 0) {
      cart[index].quantity = newQuantity;
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }
  }
});

// Evento para finalizar la compra
finalizePurchase.addEventListener('click', () => {
  if (cart.length === 0) {
    alert('El carrito está vacío.');
    return;
  }

  let message = 'Hola, quiero comprar estos productos:';
  cart.forEach((item) => {
    message += ` ${item.name} (Cantidad: ${item.quantity}, Precio: $${item.price})`;
  });
  message += ` Total a pagar: $${cartTotal.textContent}`;

  const whatsappNumber = '593969383691';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, '_blank');
});

// Inicializar el carrito asegurando que cada producto tenga al menos 1 como cantidad
cart = cart.map(item => ({ ...item, quantity: item.quantity || 1 }));
renderCart();
