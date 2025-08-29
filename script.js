document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".photo");
    let photoData = [];

    // Centro de la pantalla
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    // Inicializar posiciones y velocidad
    photos.forEach(photo => {
        let x = centerX + (Math.random() * 200 - 100);
        let y = centerY + (Math.random() * 200 - 100);

        let dx = (Math.random() - 0.5) * 3; // velocidad X
        let dy = (Math.random() - 0.5) * 3; // velocidad Y

        photoData.push({ photo, x, y, dx, dy });
        photo.style.left = `${x}px`;
        photo.style.top = `${y}px`;
    });

    // Animación
    function animate() {
        photoData.forEach(obj => {
            obj.x += obj.dx;
            obj.y += obj.dy;

            // Rebote en bordes
            if (obj.x < 0 || obj.x > window.innerWidth - 150) obj.dx *= -1;
            if (obj.y < 0 || obj.y > window.innerHeight - 150) obj.dy *= -1;

            obj.photo.style.left = `${obj.x}px`;
            obj.photo.style.top = `${obj.y}px`;
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Ajustar centro al redimensionar pantalla
    window.addEventListener("resize", () => {
        centerX = window.innerWidth / 2;
        centerY = window.innerHeight / 2;
    });
});