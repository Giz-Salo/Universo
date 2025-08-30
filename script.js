document.addEventListener("DOMContentLoaded", () => {
  const universe = document.querySelector(".universe");
  const music = document.getElementById("bg-music");
  const musicBtn = document.getElementById("music-btn");

  // Generar imágenes flotantes
  const images = [
    "img1.jpg", "img2.jpg", "img3.jpg"
  ];

  images.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.classList.add("floating");

    // Posiciones aleatorias iniciales
    img.style.top = `${Math.random() * 80}vh`;
    img.style.left = `${Math.random() * 80}vw`;
    img.style.animationDuration = `${15 + Math.random() * 10}s`;

    document.body.appendChild(img);
  });

  // Botón de música
  musicBtn.addEventListener("click", () => {
    if (music.paused) {
      music.play();
      musicBtn.textContent = "⏸️ Pausar Música";
    } else {
      music.pause();
      musicBtn.textContent = "▶️ Reproducir Música";
    }
  });
});