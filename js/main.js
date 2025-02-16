// Products Data
const products = [
    {
        id: 1,
        name: 'Alimento Premium',
        price: 25.99,
        image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Alimento de alta calidad para gatos'
    },
    {
        id: 2,
        name: 'Cama para Gatos',
        price: 35.99,
        image: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Cama cómoda y suave'
    },
    {
        id: 3,
        name: 'Juguetes Interactivos',
        price: 15.99,
        image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        description: 'Set de juguetes para gatos'
    }
];

// Load Products
function loadProducts() {
    const productContainer = document.getElementById('product-container');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">$${product.price}</p>
                <button onclick="addToCart(${product.id})" class="cta-button">Agregar al Carrito</button>
            </div>
        `;
        productContainer.appendChild(productCard);
    });
}

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Form Submissions
const donationForm = document.getElementById('donation-form');
const visitForm = document.getElementById('visit-form');

if (donationForm) {
    donationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Gracias por tu donación!');
        donationForm.reset();
    });
}

if (visitForm) {
    visitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('¡Tu visita ha sido programada! Te contactaremos pronto.');
        visitForm.reset();
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});