var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        depth: 500,
        modifier: 1,
        slideShadows: true,
        rotate: 0,
        stretch: 0
    }
});
let videojuegos= document.querySelector(".grid--1");
let musica=document.querySelector(".grid--2");
let cine=document.querySelector(".grid--3");
let chess=document.querySelector(".grid--4");
let futbol=document.querySelector(".grid--5");
let vuelo=document.querySelector(".grid--6");
let coffee=document.querySelector(".grid--7");
let dinero=document.querySelector(".grid--8");

let tiktok=document.querySelector(".red-tiktok");
tiktok.onclick=function(event){
    alert("TODOS LOS CAMINOS LLEVAN A ROMA")
}

videojuegos.addEventListener("click",()=>{alert("Me gustan los videojuegos :)")});
musica.addEventListener("click",()=>{alert("Mu gusta la música como la salsa, kpop y citypop ♫♡♫")});
cine.addEventListener("click",()=>{
    let respuesta=prompt("Me gustan los thrillers, recomiendame alguna película");
    if(!!respuesta){
        alert( `Gracias por la recomendación seguro veré ${respuesta} luego`);
    }
});
chess.addEventListener("click",()=>{
    let respuesta = prompt(`Me gusta el ajedrez, tengo +2100 en blitz y bullet en lichess. Mi nick es (me lo reservo), retame, seguro te acepto.
        ¿Si yo jugara E4 cual sería tu movimiento?`);

if (respuesta) {
    respuesta = respuesta.toUpperCase();
    
    switch (respuesta) {
        case 'C5':
        case 'E5':
        case 'C6':
        case 'E6':
        case 'D6':
        case 'D5':
        case 'G6':
        case 'KF6':
        case 'CF6':
        case 'KC6':
        case 'CC6':
            alert("¡Buena jugada! Esto parece que se pondrá interesante.");
            break;
        default:
            alert("Probablemente no sepas jugar... 😏");
            break;
    }
} else {
    alert("No dijiste nada, ¿estás nervioso?, mi elo en liches te asusta?");
}
});
futbol.addEventListener("click", () => {
    let respuesta = prompt("Me gustan el futbol, ¿cuál es tu equipo favorito?");
    respuesta = respuesta.toUpperCase();
    
    if (respuesta === "REAL MADRID") {
        alert("Penalti para el Real Madrid ♫♫");
    } else if (!!respuesta) {
        alert(`Buena elección, ${respuesta} es un buen equipo`);
    } else {
        alert("No dijiste ningún equipo.");
    }
});
vuelo.addEventListener("click",()=>{alert("No me gusta viajar, pero me gustaría ir a Japón y South Korea")});
coffee.addEventListener("click",()=>{alert("Me gusta java y el café, a quién no?")});
dinero.addEventListener("click",()=>{alert("Estoy ahorrando...")});


//PROJECTS
document.getElementById("tienda__project").addEventListener("click", function() {
    window.open("tiendaOnline/index.html", "_blank");
});

document.getElementById("reproductor__project").addEventListener("click", function() {
    window.open("reproductorMusic/index.html", "_blank");
});

document.getElementById("ahorcado__project").addEventListener("click", function() {
    window.open("ahorcadoGame/index.html", "_blank");
});

document.getElementById("hoja__project").addEventListener("click", function() {
    window.open("hojaCalculo/index.html", "_blank");
});

document.getElementById("videojuego__project").addEventListener("click", function() {
    window.open("videojuego/index.html", "_blank");
});

document.getElementById("collage__project").addEventListener("click", function() {
    window.open("https://juliandev04.github.io/collagePhotos", "_blank");
});

document.getElementById('submit_button').addEventListener('click', function() {
    alert('Lo siento, No se puede subir backend a GitHub, ya que solo permite subir frontend y otros archivos estáticos.');
  });
