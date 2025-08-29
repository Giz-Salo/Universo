// Reproducir / pausar música
function toggleMusic() {
    const music = document.getElementById('music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Fotos flotando libremente como asteroides
const floatingPhotos = document.querySelectorAll('.floating');

floatingPhotos.forEach(photo => {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = (Math.random() - 0.5) * 3; // velocidad horizontal
    let dy = (Math.random() - 0.5) * 3; // velocidad vertical

    photo.style.left = x + 'px';
    photo.style.top = y + 'px';

    setInterval(() => {
        x += dx;
        y += dy;

        // Rebote en bordes
        if(x < 0 || x > window.innerWidth - photo.width) dx *= -1;
        if(y < 0 || y > window.innerHeight - photo.height) dy *= -1;

        photo.style.left = x + 'px';
        photo.style.top = y + 'px';
    }, 25); // más rápido
});