document.body.addEventListener('click', function (event) {
    const smoke = document.querySelector('.smoke');
    const colors = ['#ff0050', '#00ff90', '#0050ff', '#f4ff00']; // Couleurs pour la fumée
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    smoke.style.backgroundColor = randomColor;
    smoke.classList.add('active');

    // Supprimer l'effet de fumée après l'animation
    setTimeout(() => {
        smoke.classList.remove('active');
    }, 2000); // Durée de l'animation (2s)
});
