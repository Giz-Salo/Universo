// ===== Función para reproducir/pausar música =====
function toggleMusic() {
    const music = document.getElementById('music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// ===== Animación ligera de fotos (opcional para más movimiento) =====
const floatingPhotos = document.querySelectorAll('.floating');

floatingPhotos.forEach((photo, index) => {
    const speed = 2 + Math.random() * 3; // velocidad distinta para cada foto
    let direction = 1;
    let position = 0;

    setInterval(() => {
        position += direction * 0.5; // cambia el movimiento vertical
        if (position > 20 || position < -20) direction *= -1;
        photo.style.transform = `translateY(${position}px) rotate(${position/2}deg)`;
    }, 50 * speed);
});