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

        // Visual Effects
        if (outcome.class === 'win') {
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#10b981', '#34d399', '#ffffff']
            });
        } else {
            document.body.classList.remove('body-lose');
            void document.body.offsetWidth; // trigger reflow
            document.body.classList.add('body-lose');
        }

        // Console log for debugging
        console.log(`Jugaste con el color ${color}. Resultado: ${outcome.text}`);
    }

    btnRed.addEventListener('click', () => play('Rojo'));
    btnGreen.addEventListener('click', () => play('Verde'));
});
