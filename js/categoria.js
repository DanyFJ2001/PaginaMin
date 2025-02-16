document.addEventListener('DOMContentLoaded', function() {
    const categoryLinks = document.querySelectorAll('.category-link');
    const products = document.querySelectorAll('.product');
  
    categoryLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();
        const selectedCategory = this.getAttribute('data-category');
  
        products.forEach(product => {
          const productCategory = product.getAttribute('data-category');
          if (selectedCategory === 'all' || productCategory === selectedCategory) {
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        });
      });
    });
  });