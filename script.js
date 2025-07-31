const heartsContainer = document.createElement('div');
heartsContainer.id = 'hearts-container';
document.body.appendChild(heartsContainer);

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Agregamos estilos random para el movimiento horizontal
  const xMove = random(-50, 50);
  heart.style.setProperty('--x-move', `${xMove}px`);

  // Elegimos color al azar entre 3 clases
  const colorClass = ['pastel', 'white', ''].sort(() => 0.5 - Math.random())[0];
  if (colorClass) heart.classList.add(colorClass);

  // Posición inicial random en la pantalla
  heart.style.left = `${random(0, window.innerWidth)}px`;
  heart.style.top = `${window.innerHeight + 20}px`;

  // Duración y delay random para que no salgan todos iguales
  const duration = random(4, 7);
  const delay = random(0, 2);
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;

  // Cuando termina la animación, removemos el corazón
  heart.addEventListener('animationend', () => {
    heartsContainer.removeChild(heart);
  });

  heartsContainer.appendChild(heart);
}

// Creamos un corazón cada 300 ms aprox
setInterval(createHeart, 300);
