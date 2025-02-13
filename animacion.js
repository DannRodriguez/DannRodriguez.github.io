const movableButton = document.getElementById('movableButton');
const staticButton = document.getElementById('staticButton');
const message = document.getElementById('message');
const contadorElemento = document.getElementById("contador");
const valentinText2 = document.getElementById('valentinText2');

// Definir un conjunto de coordenadas preestablecidas
const coordenadasPredefinidas = [
    { x: 50, y: 100 },
    { x: 100, y: 200 },
    { x: 400, y: 150 },
    { x: 10, y: 200 },
    { x: 300, y: 350 },
    { x: 100, y: 300 },
    { x: 600, y: 100 },
    { x: 250, y: 50 },
    { x: 500, y: 400 },
    { x: 450, y: 250 },
    { x: 150, y: 50 },
    { x: 350, y: 100 },
    { x: 200, y: 400 },
    { x: 50, y: 200 },
    { x: 200, y: 300 },
    { x: 350, y: 500 }
];



const coordenadasPredefinidas2 = [
    { x: 50, y: 100 },
    { x: 20, y: 300 },
    { x: 400, y: 150 },
    { x: 10, y: 200 },
    { x: 300, y: 350 },
    { x: 100, y: 200 }
];

// Función para obtener coordenadas aleatorias del arreglo
function obtenerCoordenadasAleatorias() {
    const index = Math.floor(Math.random() * coordenadasPredefinidas.length);
    return coordenadasPredefinidas[index];
}

function obtenerCoordenadasAleatorias2() {
    const index = Math.floor(Math.random() * coordenadasPredefinidas2.length);
    return coordenadasPredefinidas2[index];
}

// Deshabilitar el texto al cargar la página
window.onload = () => {
  valentinText2.style.display = 'none'; // Oculta el texto
};

// Variables para manejar las imágenes
let contador = 0;
const imagesContainer = document.getElementById('imagesContainer');  // Asegúrate de tener un contenedor en tu HTML
const totalImages = 14; // Asumiendo que tienes 11 imágenes

// Movimiento del botón cuando pasa el mouse por encima
movableButton.addEventListener('mouseover', () => {
    // Obtener el tamaño de la ventana del navegador
    const maxX = window.innerWidth - movableButton.clientWidth;
    const maxY = window.innerHeight - movableButton.clientHeight;

    const { x, y } = obtenerCoordenadasAleatorias();
    // Mover el botón dentro de los límites de la ventana
    movableButton.style.left = `${x}px`;
    movableButton.style.top = `${y}px`;

    // Actualizar el contador
    contador++;

    // Cambiar el texto del botón según el contador con switch case
    switch (contador) {
        case 1:
            staticButton.textContent = "Elena, ¿en serio?";
            break;
        case 2:
            staticButton.textContent = "Oye, no, espera";
            break;
        case 3:
            staticButton.textContent = "¿Acaso ya no me quieres, verdad?";
            break;
        case 4:
            staticButton.textContent = "¡EUGENIA!";
            break;
        case 5:
            staticButton.textContent = "¿Te estás riendo de mí, verdad?";
            break;
        case 6:
            staticButton.textContent = "Jajajaja, chistosita";
            break;
        case 7:
            staticButton.textContent = "¡AMOOOOOUUUUUURRRR! (voz de Ángela Aguilar)";
            break;
        case 8:
            staticButton.textContent = "Te extraño";
            break;
        case 9:
            staticButton.textContent = "¡ESPERAAAA!";
            break;
        case 10:
            staticButton.textContent = "Beto, porque es un pez beta, jeje";
            break;
        case 11:
            staticButton.textContent = "Oye, ¿y Lula?";
            break;
        case 12:
            staticButton.textContent = "Mi amor, ¡regresaaaaaaaaaaaa!";
            break;
        case 13:
            staticButton.textContent = "¿Entonces sí vamos a ir a abrazar pingüinos, verdad?";
            break;
        case 14:
            staticButton.textContent = "¡YAAAA!";
            break;
        case 15:
            staticButton.textContent = "¡Click, click, click, vamos!";
            break;
        case 16:
            staticButton.textContent = "Qué lindo que la pasé el fin de semana contigo";
            break;
        case 17:
            staticButton.textContent = "Mínimo, si le quieres dar, que no, mándame un besito, pls";
            break;
        case 18:
            staticButton.textContent = "Sé mi date de San Valentín, ándale, te pago con besitos";
            break;
        case 19:
            staticButton.textContent = "¿Ya o aún, nel?";
            break;
        case 20:
            staticButton.textContent = "No le digan a Elena que es el amor de mi vida, pero... ";
            break;
        default:
            staticButton.textContent = "Bruno, no me haría esto";
    }
});

movableButton.addEventListener('click', () => {
    valentinText2.style.display = 'block'; // Muestra el texto

    // Obtener el tamaño de la ventana del navegador
    const maxX = window.innerWidth - movableButton.clientWidth;
    const maxY = window.innerHeight - movableButton.clientHeight;

    // Calcular las posiciones aleatorias dentro de la ventana
    const { x, y } = obtenerCoordenadasAleatorias2();

    // Asegurarse de que las coordenadas no se salgan de los límites
    const newX = Math.min(Math.max(x, 0), maxX);
    const newY = Math.min(Math.max(y, 0), maxY);

    // Mover el botón dentro de los límites de la ventana
    movableButton.style.left = `${newX}px`;
    movableButton.style.top = `${newY}px`;
});

// Mostrar las imágenes al hacer clic en el botón estático
staticButton.addEventListener('click', () => {
    // Verifica si ya existen imágenes para evitar reiniciar la animación
    if (!imagesContainer.querySelector('.image-wrapper')) {
        const imageWrapper = document.createElement('div');
        imageWrapper.classList.add('image-wrapper');

        for (let i = 1; i <= totalImages; i++) {
            const img = document.createElement('img');
            img.src = `img${i}.jpeg`;  
            img.alt = `Imagen ${i}`;
            img.style.height = '200px';
            img.style.marginRight = '100px';
            imageWrapper.appendChild(img);
        }

        imagesContainer.appendChild(imageWrapper);
        imageWrapper.style.position = 'absolute';
        imageWrapper.style.animation = 'moveImages 30s linear infinite';
    }

    // Cambiar el texto del botón estático sin afectar las imágenes
    staticButton.textContent = "Te adoro demasiadooooo ❤️";
});

// Estilos de la animación en CSS (agregar en tu archivo CSS)
const style = document.createElement('style');
style.innerHTML = `
  @keyframes moveImages {
      0% {
          left: 100%; /* Inicia fuera de la pantalla por la derecha */
      }
      100% {
          left: -1000%; /* Mueve las imágenes fuera de la pantalla por la izquierda */
      }
  }
  .image-wrapper {
      display: flex;
      position: relative;
  }
  .image-wrapper img {
      margin-right: 10px;
      height: 200px; /* Ajusta el tamaño de las imágenes */
  }
`;
document.head.appendChild(style);
