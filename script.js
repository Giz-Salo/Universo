document.addEventListener("DOMContentLoaded", () => {
    const photos = document.querySelectorAll(".photo");
    const music = document.getElementById("music");
    const musicToggle = document.getElementById("music-toggle");
    let photoData = [];

    // Botón para alternar música
    musicToggle.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            musicToggle.textContent = "⏸️ Pausar música";
        } else {
            music.pause();
            musicToggle.textContent = "🎵 Reproducir música";
        }
    });

    // Centro pantalla
    let centerX = window.innerWidth / 2;
    let centerY = window.innerHeight / 2;

    // Inicializar posiciones
    photos.forEach(photo => {
        let x = centerX + (Math.random() * 200 - 100);
        let y = centerY + (Math.random() * 200 - 100);

        let dx = (Math.random() - 0.5) * 3;
        let dy = (Math.random() - 0.5) * 3;

        photoData.push({ photo, x, y, dx, dy });
        photo.style.left = `${x}px`;
        photo.style.top = `${y}px`;
    });

    function animate() {
        photoData.forEach(obj => {
            obj.x += obj.dx;
            obj.y += obj.dy;

            if (obj.x < 0 || obj.x > window.innerWidth - 150) obj.dx *= -1;
            if (obj.y < 0 || obj.y > window.innerHeight - 150) obj.dy *= -1;

            obj.photo.style.left = `${obj.x}px`;
            obj.photo.style.top = `${obj.y}px`;
        });

        requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
        centerX = window.innerWidth / 2;
        centerY = window.innerHeight / 2;
    });
});