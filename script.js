document.body.addEventListener('click', function(e) {
    const circle = document.getElementById('circle');
    
    // Positionner le cercle au point de clic
    circle.style.left = `${e.pageX - 25}px`; // Centre le cercle
    circle.style.top = `${e.pageY - 25}px`; // Centre le cercle
    
    // Afficher le cercle
    circle.style.opacity = 1;

    // Change la couleur du cercle de manière aléatoire
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    circle.style.backgroundColor = randomColor;

    // Masquer le cercle après l'animation
    setTimeout(() => {
        circle.style.opacity = 0;
    }, 300);
});
