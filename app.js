const videojuegos = [
  {
    id: 1,
    nombre: "The Witcher 3",
    sinopsis:
      "Embárcate en una épica aventura de caza de monstruos y magia en un vasto mundo abierto. Juego de combate y toma de decisiones.",
    genero: "RPG de acción",
    pc: true,
    play: true,
    xbox: true,
    nintendo: true,
    moviles: false,
    popularidad: "alta",
    desarrollador: "CD Projekt Red",
    añoDeLanzamiento: 2015,
    puntaje: 95,
    img: "./img/witcher.jpg",
  },
  {
    id: 2,
    nombre: "Red Dead Redemption 2",
    sinopsis:
      "Sumérgete en el salvaje oeste como un forajido en busca de redención en una historia épica y un mundo abierto impresionante. Con disparos en tercera persona y elementos de supervivencia.",
    genero: "Acción y aventura",
    pc: true,
    play: true,
    xbox: true,
    nintendo: false,
    moviles: false,
    popularidad: "alta",
    desarrollador: "Rockstar Games",
    añoDeLanzamiento: 2018,
    puntaje: 97,
    img: "./img/rdr2.jpg",
  },
  {
    id: 3,
    nombre: "The Legend of Zelda",
    sinopsis:
      "Embárcate en una aventura legendaria para salvar Hyrule de la calamidad en este innovador juego de acción, puzzles y exploración.",
    genero: "Acción y aventura",
    pc: false,
    play: false,
    xbox: false,
    nintendo: true,
    moviles: false,
    popularidad: "alta",
    desarrollador: "Nintendo",
    añoDeLanzamiento: 2017,
    puntaje: 98,
    img: "./img/zelda.jpg",
  },
  {
    id: 4,
    nombre: "God of War: Ragnarok",
    sinopsis:
      "Sigue la historia épica de Kratos en su viaje por la mitología nórdica, enfrentando a dioses y monstruos en una lucha personal. Combate brutal y puzzles.",
    genero: "Acción y aventura",
    pc: false,
    play: true,
    xbox: false,
    nintendo: false,
    moviles: false,
    popularidad: "alta",
    desarrollador: "Santa Monica Studio",
    añoDeLanzamiento: 2018,
    puntaje: 94,
    img: "./img/gow.jpg",
  },
  {
    id: 5,
    nombre: "Fortnite",
    sinopsis:
      "Un popular juego de battle royale en el que luchas contra otros jugadores para ser el último en pie, construyendo estructuras y usando habilidades únicas. Multijugador, supervivencia, construcción.",
    genero: "Battle royale",
    pc: true,
    play: true,
    xbox: true,
    nintendo: true,
    moviles: true,
    popularidad: "muyalta",
    desarrollador: "Epic Games",
    añoDeLanzamiento: 2017,
    puntaje: 81,
    img: "./img/fornite.jpg",
  },
  {
    id: 6,
    nombre: "Grand Theft Auto V",
    sinopsis:
      "Únete a tres protagonistas en una historia de crimen y caos en Los Santos, una ciudad llena de acción y posibilidades.",
    genero: "Acción y aventura",
    pc: true,
    play: true,
    xbox: true,
    nintendo: false,
    moviles: false,
    popularidad: "alta",
    desarrollador: "Rockstar Games",
    añoDeLanzamiento: 2013,
    puntaje: 97,
    img: "./img/gta.jpg",
  },
  {
    id: 7,
    nombre: "Minecraft",
    sinopsis:
      "Crea tu propio mundo de bloques y explora, construye y sobrevive en esta aventura sandbox sin límites.",
    genero: "Sandbox, supervivencia",
    pc: true,
    play: true,
    xbox: true,
    nintendo: true,
    moviles: true,
    popularidad: "muyalta",
    desarrollador: "Mojang Studios",
    añoDeLanzamiento: 2011,
    puntaje: 93,
    img: "./img/minecraft.jpg",
  },
  {
    id: 8,
    nombre: "Overwatch",
    sinopsis:
      " Únete a un equipo de héroes en intensos combates por equipos en un mundo futurista lleno de acción y habilidades únicas.",
    genero: "Shooter en primera persona",
    pc: true,
    play: true,
    xbox: true,
    nintendo: true,
    moviles: false,
    popularidad: "alta",
    desarrollador: "Blizzard Entertainment",
    añoDeLanzamiento: 2016,
    puntaje: 94,
    img: "./img/overwatch.jpg",
  },
  {
    id: 9,
    nombre: "Final Fantasy VII RMK",
    sinopsis:
      "Revive la épica aventura de Cloud y sus aliados en este remake moderno de uno de los juegos más queridos de la saga Final Fantasy.",
    genero: "RPG de acción",
    pc: false,
    play: true,
    xbox: false,
    nintendo: false,
    moviles: false,
    popularidad: "alta",
    desarrollador: "Square Enix",
    añoDeLanzamiento: 2020,
    puntaje: 88,
    img: "./img/ffvii.jpg",
  },
  {
    id: 10,
    nombre: "Call of Duty: Warzone",
    sinopsis:
      "Entra en la arena de combate masiva de Warzone y lucha por ser el último en pie en este battle royale lleno de acción y táctica.",
    genero: "Battle royale",
    pc: true,
    play: true,
    xbox: true,
    nintendo: false,
    moviles: true,
    popularidad: "muyalta",
    desarrollador: "Raven Software",
    añoDeLanzamiento: 2020,
    puntaje: 79,
    img: "./img/cod.jpg",
  },
  {
    id: 11,
    nombre: "Assassin's Creed Valhalla",
    sinopsis:
      "Explora la era vikinga como Eivor, un guerrero nórdico, en una aventura llena de acción, conquistas y secretos ancestrales.",
    genero: "Acción y aventura",
    pc: true,
    play: true,
    xbox: true,
    nintendo: false,
    moviles: false,
    popularidad: "alta",
    desarrollador: "Ubisoft",
    añoDeLanzamiento: 2020,
    puntaje: 90,
    img: "./img/acval.jpg",
  },
  {
    id: 12,
    nombre: "Sekiro",
    sinopsis:
      "Sumérgete en el Japón feudal como el lobo de un solo brazo, un ninja de élite, en una historia de venganza y desafío extremo.",
    genero: "Acción y aventura",
    pc: true,
    play: true,
    xbox: true,
    nintendo: false,
    moviles: false,
    popularidad: "alta",
    desarrollador: "FromSoftware",
    añoDeLanzamiento: 2019,
    puntaje: 91,
    img: "./img/sekiro.jpg",
  },
  {
    id: 13,
    nombre: "Animal Crossing",
    sinopsis:
      "Escapa a una isla desierta y crea tu propio paraíso, interactúa con adorables animales antropomórficos y disfruta de una vida relajante y llena de diversión.",
    genero: "Simulación",
    pc: false,
    play: false,
    xbox: false,
    nintendo: true,
    moviles: false,
    popularidad: "muyalta",
    desarrollador: "Nintendo",
    añoDeLanzamiento: 2020,
    puntaje: 90,
    img: "./img/animalc.jpg",
  },
  {
    id: 14,
    nombre: "The Last of Us Part II",
    sinopsis:
      "En un mundo postapocalíptico, acompaña a Ellie en su búsqueda de venganza en un emocionante y desgarrador viaje lleno de peligros y decisiones difíciles.",
    genero: "Acción y aventura",
    pc: false,
    play: true,
    xbox: false,
    nintendo: false,
    moviles: false,
    popularidad: "alta",
    desarrollador: "Naughty Dog",
    añoDeLanzamiento: 2020,
    puntaje: 95,
    img: "./img/tlou.jpg",
  },
  {
    id: 15,
    nombre: "Cyberpunk 2077",
    sinopsis:
      "Sumérgete en la metrópolis futurista de Night City, donde serás un mercenario en busca de la inmortalidad en un mundo lleno de implantes cibernéticos y conflictos políticos.",
    genero: "Rol de acción",
    pc: true,
    play: true,
    xbox: true,
    nintendo: false,
    moviles: false,
    popularidad: "alta",
    desarrollador: "CD Projekt Red",
    añoDeLanzamiento: 2020,
    puntaje: 80,
    img: "./img/cp.jpg",
  },
  {
    id: 16,
    nombre: "Among Us",
    sinopsis:
      "Descubre quién es el impostor en una nave espacial en este juego multijugador en línea. Realiza tareas y deduce quién está saboteando la misión.",
    genero: "Multijugador",
    pc: true,
    play: true,
    xbox: false,
    nintendo: false,
    moviles: true,
    popularidad: "muyalta",
    desarrollador: "InnerSloth",
    añoDeLanzamiento: 2018,
    puntaje: 88,
    img: "./img/amus.jpg",
  },
  {
    id: 17,
    nombre: "Hades",
    sinopsis:
      "Explora el inframundo y enfrenta desafiantes combates en este roguelike de acción. Mejora tus habilidades, haz alianzas con los dioses y desentraña los secretos de tu destino.",
    genero: "Acción y aventura",
    pc: true,
    play: false,
    xbox: false,
    nintendo: true,
    moviles: false,
    popularidad: "muyalta",
    desarrollador: "Supergiant Games",
    añoDeLanzamiento: 2020,
    puntaje: 95,
    img: "./img/hades.jpg",
  },
  {
    id: 18,
    nombre: "A Plague Tale",
    sinopsis:
      "Acompaña a Amicia y su hermano Hugo en una desgarradora aventura durante la Plaga Negra. Sobrevive a la Inquisición y lucha por tu vida en este juego de sigilo y acción.",
    genero: "Acción y aventura",
    pc: true,
    play: true,
    xbox: true,
    nintendo: false,
    moviles: false,
    popularidad: "media",
    desarrollador: "Asobo Studio",
    añoDeLanzamiento: 2019,
    puntaje: 87,
    img: "./img/apt.jpg",
  },
  {
    id: 19,
    nombre: "Control",
    sinopsis:
      "Descubre los secretos de la Agencia Federal de Control en este juego de acción y aventura con elementos sobrenaturales. Explora un edificio en constante cambio y desafía a entidades paranormales.",
    genero: "Acción y aventura",
    pc: true,
    play: true,
    xbox: true,
    nintendo: false,
    moviles: false,
    popularidad: "media",
    desarrollador: "Remedy Entertainment",
    añoDeLanzamiento: 2019,
    puntaje: 88,
    img: "./img/control.jpg",
  },
  {
    id: 20,
    nombre: "Disco Elysium",
    sinopsis:
      "Sumérgete en un mundo de detectives y misterios en este RPG de mundo abierto. Investiga crímenes, interactúa con personajes y toma decisiones que afectarán el curso de la historia.",
    genero: "Rol",
    pc: true,
    play: false,
    xbox: false,
    nintendo: false,
    moviles: false,
    popularidad: "baja",
    desarrollador: "ZA/UM",
    añoDeLanzamiento: 2019,
    puntaje: 91,
    img: "./img/de.jpg",
  },
];

/* Selectores */
const selectGenero = document.getElementById("genero");
const selectDesa = document.getElementById("desa");
const selectAnio = document.getElementById("anio");
const checkPlataformas = document.querySelectorAll(".plataf");
const checkPopularidad = document.querySelectorAll(".popularidad");
const container = document.getElementById("container");
const reset = document.querySelector(".reset");
let plataforma = "";
let popularidad = "";
let videojuegosFiltrados = [];

/* Llamadas */
escucharDOM();
filtrarJuegos();
generarSelects();

/* Funciones */
function escucharDOM() {
  selectGenero.addEventListener("change", filtrarJuegos);
  checkPlataformas.forEach((plat) => {
    plat.addEventListener("change", filtrarJuegos);
  });
  selectDesa.addEventListener("change", filtrarJuegos);
  selectAnio.addEventListener("change", filtrarJuegos);
  checkPopularidad.forEach((pop) => {
    pop.addEventListener("change", filtrarJuegos);
  });
  reset.addEventListener("click", e => {
      e.preventDefault();
      limpiarCampos();
  })
}

function generarSelects(){
  const generosUnicos = [...new Set(videojuegos.map((juego) => juego.genero))].sort()
const desaUnicos = [
  ...new Set(videojuegos.map((juego) => juego.desarrollador))].sort()
const anioUnicos = [
  ...new Set(videojuegos.map((juego) => juego.añoDeLanzamiento)),
].sort()
/* El Set sólo permite valores únicos */

generosUnicos.forEach((genero) => {
  const option = document.createElement("option");
  option.text = genero;
  option.value = genero;
  selectGenero.add(option);
});

desaUnicos.forEach((desa) => {
  const option = document.createElement("option");
  option.text = desa;
  option.value = desa;
  selectDesa.add(option);
});

anioUnicos.forEach((anio) => {
  const option = document.createElement("option");
  option.text = anio;
  option.value = anio;
  selectAnio.add(option);
});
}

function filtrarJuegos() {
  const generoSeleccionado = selectGenero.value;
  const desaSeleccionado = selectDesa.value;
  const anioSeleccionado = selectAnio.value;

  const plataformasSeleccionadas = Array.from(checkPlataformas)
    .filter((plat) => plat.checked)
    .map((plat) => plat.id);

  const popularidadSeleccionada = Array.from(checkPopularidad)
    .filter((pop) => pop.checked)
    .map((pop) => pop.value);

  videojuegosFiltrados = videojuegos.filter((juego) => {
    if (generoSeleccionado !== "todos" && juego.genero !== generoSeleccionado) {
      return false;
    }
    if (
      desaSeleccionado !== "todos" &&
      juego.desarrollador !== desaSeleccionado
    ) {
      return false;
    }
    if (
      anioSeleccionado !== "todos" &&
      juego.añoDeLanzamiento !== parseInt(anioSeleccionado)
    ) {
      return false;
    }
    for (let plataforma of plataformasSeleccionadas) {
      if (!juego[plataforma]) {
        return false;
      }
    }
    if (
      popularidadSeleccionada.length > 0 &&
      !popularidadSeleccionada.includes(juego.popularidad)
    ) {
      return false;
    }
    return true;
  });
  container.innerHTML = "";

  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 300,
  });
  sr.reveal(`#container`);

  videojuegosFiltrados.forEach((juego) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("cardd");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");
    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");

    const img = document.createElement("img");
    img.src = juego.img;

    const contenido = document.createElement("div");
    contenido.classList.add("contenido");

    const titulo = document.createElement("p");
    titulo.textContent = `${juego.nombre}`;
    titulo.classList.add("titulo_juego");

    const sinopsis = document.createElement("p");
    sinopsis.classList.add("descripcion");
    sinopsis.innerHTML = `<span class="descripcion">${juego.sinopsis}`;

    const genero = document.createElement("p");
    genero.innerHTML = `<span class="descripcion"> - ${juego.genero}</span>`;

    const desarrollador = document.createElement("p");
    desarrollador.innerHTML = `<span class="descripcion"> - ${juego.desarrollador}</span>`;

    const añoLanzamiento = document.createElement("p");
    añoLanzamiento.innerHTML = `<span class="descripcion"> - Año de lanzamiento: ${juego.añoDeLanzamiento}</span>`;

    const puntaje = document.createElement("p");
    puntaje.innerHTML = `<span class="descripcion"> - Puntaje: ${juego.puntaje}/100</span>`;

    cardBack.appendChild(sinopsis);
    cardBack.appendChild(genero);
    cardBack.appendChild(desarrollador);
    cardBack.appendChild(añoLanzamiento);
    cardBack.appendChild(puntaje);
    cardFront.appendChild(titulo);
    cardFront.appendChild(img);
    cardContent.appendChild(cardFront);
    cardContent.appendChild(cardBack)
    cardContent.appendChild(contenido);
    card.appendChild(cardContent);
    container.appendChild(card);

    sr.reveal(`.card`);
    
    console.log(selectGenero.value);
  });
}

function limpiarCampos(){
  selectGenero.value = "todos";
  selectDesa.value = "todos";
  selectAnio.value = "todos";
  
  checkPlataformas.forEach((plat) => {
    plat.checked = false;
  });
  
  checkPopularidad.forEach((pop) => {
    pop.checked = false;
  });
  
  filtrarJuegos();
}
