const palabrasConPistas = [
    { palabra: "algoritmo", pista: "Serie de pasos para resolver un problema" },
    { palabra: "binario", pista: "Sistema numérico de 0 y 1" },
    { palabra: "bug", pista: "Error en un programa" },
    { palabra: "compilador", pista: "Convierte código a lenguaje máquina" },
    { palabra: "criptografía", pista: "Ciencia de cifrado de datos" },
    { palabra: "depuración", pista: "Proceso de encontrar y corregir errores" },
    { palabra: "dominio", pista: "Nombre de una página web" },
    { palabra: "encriptación", pista: "Convertir datos para que no sean legibles" },
    { palabra: "firewall", pista: "Protección de red contra accesos no autorizados" },
    { palabra: "hacker", pista: "Experto en informática que explora sistemas" },
    { palabra: "host", pista: "Servidor que ofrece servicios en internet" },
    { palabra: "html", pista: "Lenguaje base para crear páginas web" },
    { palabra: "inteligencia", pista: "Capacidad para aprender y adaptarse" },
    { palabra: "javascript", pista: "Lenguaje de programación web popular" },
    { palabra: "kernel", pista: "Núcleo de un sistema operativo" },
    { palabra: "lenguaje", pista: "Conjunto de reglas para programar" },
    { palabra: "malware", pista: "Software malicioso que daña sistemas" },
    { palabra: "navegador", pista: "Programa para acceder a sitios web" },
    { palabra: "objetivo", pista: "Meta o fin en un proyecto" },
    { palabra: "programa", pista: "Conjunto de instrucciones ejecutables" },
    { palabra: "query", pista: "Consulta realizada a una base de datos" },
    { palabra: "redes", pista: "Conexión de múltiples dispositivos" },
    { palabra: "script", pista: "Código ejecutado para tareas específicas" },
    { palabra: "servidor", pista: "Equipo que proporciona servicios a otros" },
    { palabra: "token", pista: "Clave usada para autentificación" },
    { palabra: "usuario", pista: "Persona que usa un sistema o servicio" },
    { palabra: "variable", pista: "Espacio donde se almacena un dato" },
    { palabra: "wifi", pista: "Red de conexión inalámbrica" },
    { palabra: "xml", pista: "Lenguaje de marcado para datos" },
    { palabra: "yield", pista: "Palabra clave para pausar una función" },
    { palabra: "dragonball", pista: "Anime de Goku" },
    { palabra: "overflow", pista: "Error al exceder el límite de capacidad" },
    { palabra: "cookies", pista: "Datos guardados por sitios web en el navegador" },
    { palabra: "proxy", pista: "Servidor que actúa como intermediario" },
    { palabra: "ip", pista: "Dirección única de un dispositivo en la red" },
    { palabra: "backend", pista: "Parte de la web que trabaja con los datos" },
    { palabra: "frontend", pista: "Interfaz visual con la que interactúan los usuarios" },
    { palabra: "twice", pista: "Grupo de música surcoreano" },
    { palabra: "ajedrez", pista: "Juego de estrategia con piezas y tablero" },
    { palabra: "cafe", pista: "Bebida estimulante popular" },
    { palabra: "anime", pista: "Animación japonesa" },
    { palabra: "datos", pista: "Información que se almacena y procesa" },
    { palabra: "json", pista: "Formato de datos usado para intercambio" },
    { palabra: "sintaxis", pista: "Reglas de estructura en un lenguaje" },
    { palabra: "estructura", pista: "Forma organizada de almacenar datos" },
    { palabra: "compresión", pista: "Reducción del tamaño de un archivo" },
    { palabra: "archivos", pista: "Documentos o datos en un sistema" },
    { palabra: "puerto", pista: "Canal de comunicación en redes" },
    { palabra: "sesión", pista: "Período de conexión de un usuario" },
    { palabra: "cluster", pista: "Grupo de servidores que trabajan juntos" },
    { palabra: "dom", pista: "Modelo de objetos de documento en HTML" },
    { palabra: "linux", pista: "Sistema operativo de código abierto" }
];

const letras = document.querySelectorAll(".letra");

function juego() {
    letras.forEach(letraElemento => {
        letraElemento.classList.remove('letra_deshabilitada');
        letraElemento.classList.add('letra');
    });
    

    let palabraContainer = document.querySelector(".palabra__container");
    let numeroAleatorio = Math.floor(Math.random() * palabrasConPistas.length); 
    let clave = palabrasConPistas[numeroAleatorio].palabra;
    let pista = palabrasConPistas[numeroAleatorio].pista;
    let avance = clave.split("").map(item => "_");
    let pist = document.querySelector(".pist");
    let vidas = 7;
    let vidaslbl = document.querySelector(".vidas");

    pist.innerHTML = `<span>Pista:</span> ${pista}`;
    palabraContainer.innerHTML = '';

    for (let i = 0; i < clave.length; i++) {
        const divLetra = document.createElement("div");
        divLetra.classList.add("bloque__palabra");
        divLetra.textContent = "_"; 
        palabraContainer.appendChild(divLetra); 
    }
    
    let todosblock = document.querySelectorAll(".bloque__palabra");

    return function jugar(letra) {
        if (vidas > 0) {
            if (clave.includes(letra)) {
                avance = avance.map((item, index) => (clave[index] === letra) ? letra : item);
                todosblock.forEach((block, index) => {
                    block.textContent = avance[index];
                });
                if (avance.join("") == clave) {
                    alert(`Felicidades, ganaste! La palabra era ${clave}`);
                    vidaslbl.textContent=7;
                    game = juego();
                }
            }else {
                vidaslbl.textContent = --vidas;
            }
        } else{
            alert(`Perdiste, la palabra era: ${clave}`);
            vidaslbl.textContent=7;
            game = juego();
        }
    }
}

// Iniciar el juego
let game = juego();


letras.forEach(letraElemento => {
    letraElemento.addEventListener("click", () => {
        const letraCorrespondiente = letraElemento.classList[1].split('-')[1].toLowerCase(); 
        letraElemento.classList.add('letra_deshabilitada');
        game(letraCorrespondiente); 
    });
});
