// Función unificada para cerrar el modal
function closeModal(modalId) {
    // Si se proporciona un ID específico, cierra ese modal
    if (modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "none";
        }
    } else {
        // Comportamiento original: cierra el modal principal
        const modal = document.getElementById("modal");
        if (modal) {
            modal.style.display = "none";
        }
    }
}

// Función unificada para abrir el modal
function openModal(modalIdOrTitle, content) {
    // Verifica si es la versión antigua (título + contenido)
    if (typeof content === 'string') {
        const modal = document.getElementById("modal");
        const modalTitle = document.getElementById("modal-title");
        const modalDescription = document.getElementById("modal-description");

        if (modal && modalTitle && modalDescription) {
            modal.style.display = "block";
            modalTitle.textContent = modalIdOrTitle;
            modalDescription.innerHTML = content;

            // Esperar a que el contenido se inserte antes de obtener el botón
            setTimeout(() => {
                const visitButton = document.getElementById("visitButton");
                if (visitButton) {
                    visitButton.removeEventListener("click", closeModal);
                    visitButton.addEventListener("click", function() {
                        closeModal();
                    });
                }
            }, 100);
        }
    } 
    // Versión nueva (solo ID del modal)
    else {
        const modal = document.getElementById(modalIdOrTitle);
        if (modal) {
            modal.style.display = "block";
        }
    }
}

// Asegúrate de que el cierre de modales funcione para ambos tipos
document.addEventListener("DOMContentLoaded", function () {
    // Configuración para modales antiguos
    const voluntarioBtn = document.getElementById("voluntario-btn");
    const apadrinarBtn = document.getElementById("apadrinar-btn");
    const closeBtn = document.getElementById("close-btn");
    const modal = document.getElementById("modal");

    // Agregar eventos para botones específicos
    if (voluntarioBtn) {
        voluntarioBtn.addEventListener("click", function () {
            const content = `
                <h3>🙌 Únete como Voluntario 😺</h3>
                <p class="modal-text">Tu tiempo y dedicación pueden marcar la diferencia en la vida de muchos gatos rescatados.</p>
                <h4>Voluntariado Interno</h4>
                <p class="modal-task">🩺 Control de medicinas</p>
                <p class="modal-task">🧹 Limpieza y mantenimiento</p>
                <p class="modal-task">🐾 Cuidado directo de los gatos</p>
                <h4>Voluntariado Externo</h4>
                <p class="modal-task">📦 Recoger productos donados</p>
                <p class="modal-task">🍲 Gestionar alimentos</p>
                <p class="modal-task">📝 Buscar y emitir oficios</p>
                <p class="modal-task">💡 Conseguir apoyos y colaboraciones</p>
                <a href="#visitanos" class="modal-button" id="visitButton">Colabora con nosotros</a>
            `;
            openModal("Información sobre el voluntariado", content);
        });
    }

    if (apadrinarBtn) {
        apadrinarBtn.addEventListener("click", function () {
            const content = `
                <h3>Conoce más sobre el programa de apadrinamiento 🐱💖</h3>
                <video src="/videos/este.mp4" autoplay muted loop playsinline width="400" height="400"></video>
                <div class="galeria-imagenes">
                    <img src="/Imagenes/Vsitas/gatoA1.jpg" alt="Gatito Apadrinado 1">
                    <img src="/Imagenes/Vsitas/gatoA2.jpg">
                    <img src="/Imagenes/Vsitas/gatoA3.jpg">
                </div>
                <div class="descripcion-apadrinamiento">
                    <p>El apadrinamiento cubre costos de alimentación, veterinaria y cuidados especiales.</p>
                    <p><strong>Costo: $10 al mes 💵</strong></p>
                </div>
                <a href="#visitanos" class="modal-button" id="visitButton">Apadrinar Ahora</a>
            `;
            openModal("Programa de Apadrinamiento", content);
        });
    }

    // Cerrar el modal principal con la 'X'
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            closeModal();
        });
    }

    // Cerrar el modal al hacer clic fuera de él
    if (modal) {
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    // Configurar eventos para los nuevos modales (de la sección de tipos de gatos)
    const allCloseButtons = document.querySelectorAll(".close-button");
    allCloseButtons.forEach(button => {
        button.addEventListener("click", function() {
            const modalId = this.closest(".modal").id;
            closeModal(modalId);
        });
    });

    // Cerrar modales nuevos al hacer clic fuera
    const allModals = document.querySelectorAll(".modal");
    allModals.forEach(modal => {
        modal.addEventListener("click", function(event) {
            if (event.target === this) {
                closeModal(this.id);
            }
        });
    });
});