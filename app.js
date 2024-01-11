const containerCharacter = document.getElementById("containerCharacter");

const GetData = () => {
  const url = "https://rickandmortyapi.com/api/character";
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const personajes = data.results;
      mostrarPersonajes(personajes);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
const mostrarPersonajes = (personajes) => {
  console.log(personajes);
  personajes.map((item) => {
    containerCharacter.innerHTML += `
  <div class="carCharactar">
  <img
    src="${item.image}"
    alt=""
  />
  <div class="containerInfo">
    <h2>${item.name}</h2>
    <p>${item.status}</p>
    <p>${item.location.name}</p>
  </div>
</div>
  `;
  });
};
GetData();
console.log("hello");

$(document).ready(function () {
  $(window).bind("resize", resizeWindow);
  function resizeWindow(e) {
    var newWindowWidth = $(window).width();

    // Si el ancho de la ventana es menor a 600px, cambia a la hoja de estilo móvil
    if (newWindowWidth < 600) {
      $(".containerCharacter").css("grid-template-columns", "repeat(2, 1fr)");
    }
    // De lo contrario, si el ancho de la ventana es mayor a 600px, cambia a la hoja de estilo grande
    else if (newWindowWidth > 600) {
      $(".containerCharacter").css("grid-template-columns", "repeat(3, 1fr)");
    }
  }
});
