const cards = document.querySelectorAll('.card');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentCard = 0;

function updateCards() {
    // Mostrar solo la tarjeta actual
    cards.forEach((card, index) => {
        card.classList.toggle('active', index === currentCard);
    });

    // Habilitar o deshabilitar botones según el índice
    prevButton.disabled = currentCard === 0;
    nextButton.disabled = currentCard === cards.length - 1;
}

// Botón "Anterior"
prevButton.addEventListener('click', () => {
    if (currentCard > 0) {
        currentCard--;
        updateCards();
    }
});

// Botón "Siguiente"
nextButton.addEventListener('click', () => {
    if (currentCard < cards.length - 1) {
        currentCard++;
        updateCards();
    }
});

// Inicializar la vista
updateCards();
