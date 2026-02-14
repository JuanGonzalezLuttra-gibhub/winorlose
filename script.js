document.addEventListener('DOMContentLoaded', () => {
    const btnRed = document.getElementById('btn-red');
    const btnGreen = document.getElementById('btn-green');
    const resultCard = document.getElementById('result-card');
    const resultText = document.getElementById('result-text');

    const outcomes = [
        { text: '¡HAS GANADO!', class: 'win' },
        { text: 'HAS PERDIDO...', class: 'lose' }
    ];

    function play(color) {
        // Clear previous state
        resultCard.classList.remove('win', 'lose', 'animate-pop');
        
        // Trigger reflow to restart animation
        void resultCard.offsetWidth;

        // Random outcome (50/50 chance)
        const randomIndex = Math.floor(Math.random() * outcomes.length);
        const outcome = outcomes[randomIndex];

        // Update UI
        resultText.textContent = outcome.text;
        resultCard.classList.add(outcome.class, 'animate-pop');

        // Console log for debugging
        console.log(`Jugaste con el color ${color}. Resultado: ${outcome.text}`);
    }

    btnRed.addEventListener('click', () => play('Rojo'));
    btnGreen.addEventListener('click', () => play('Verde'));
});
