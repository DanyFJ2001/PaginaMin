document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const pageNumbers = document.querySelectorAll('.page-number');
    const productsPerPage = 8; // Número de productos por página
  
    function showPage(page) {
      const startIndex = (page - 1) * productsPerPage;
      const endIndex = startIndex + productsPerPage;
  
      products.forEach((product, index) => {
        if (index >= startIndex && index < endIndex) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    }
  
    pageNumbers.forEach((pageNumber, index) => {
      pageNumber.addEventListener('click', function(event) {
        event.preventDefault();
        showPage(index + 1);
  
        // Remover la clase 'active' de todos los números de página
        pageNumbers.forEach(page => page.classList.remove('active'));
  
        // Agregar la clase 'active' al número de página seleccionado
        this.classList.add('active');
      });
    });
  
    // Mostrar la primera página por defecto
    showPage(1);
    pageNumbers[0].classList.add('active');
  });