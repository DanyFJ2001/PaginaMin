// Renombrar las funciones para la sección de tipos de gatos
function openCatModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
    }
}

function closeCatModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Actualizar los llamados en los botones
document.addEventListener("DOMContentLoaded", function() {
    // Actualizar los onclick en los botones de "Ver más"
    const readMoreButtons = document.querySelectorAll(".read-more");
    readMoreButtons.forEach(button => {
        const originalOnclick = button.getAttribute("onclick");
        if (originalOnclick && originalOnclick.includes("openModal")) {
            const modalId = originalOnclick.match(/'([^']+)'/)[1];
            button.setAttribute("onclick", `openCatModal('${modalId}')`);
        }
    });
    
    // Actualizar los onclick en los botones de cierre
    const closeButtons = document.querySelectorAll(".close-button");
    closeButtons.forEach(button => {
        const originalOnclick = button.getAttribute("onclick");
        if (originalOnclick && originalOnclick.includes("closeModal")) {
            const modalId = originalOnclick.match(/'([^']+)'/)[1];
            button.setAttribute("onclick", `closeCatModal('${modalId}')`);
        }
    });
});