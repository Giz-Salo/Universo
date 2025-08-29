// ===== Función para reproducir/pausar música =====
function toggleMusic() {
    const music = document.getElementById('music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// ===== Animación ligera de fotos =====
const floatingPhotos = document.querySelectorAll('.floating');

floatingPhotos.forEach((photo, index) => {
    const speed = 1 + Math.random() * 2; // velocidad distinta
    let direction = 1;
    let position = 0;

    setInterval(() => {
        position += direction * 1; // más rápido
        if (position > 25 || position < -25) direction *= -1;
        photo.style.transform = `translateY(${position}px) rotate(${position/2}deg)`;
    }, 50 * speed);
});