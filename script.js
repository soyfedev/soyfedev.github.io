let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: -34.5735899, lng: -58.4210624 },
    zoom: 15,
  });
  const marker = new AdvancedMarkerView({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();

let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}


function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var telefono = document.getElementById("telefono").value;
  var consulta = document.getElementById("consulta").value;

  if (nombre === "" || email === "" || telefono === "" || consulta === "") {
      alert("Por favor, completa todos los campos.");
      return false;
  }

  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!email.match(emailPattern)) {
      alert("Por favor, ingresa una dirección de correo electrónico válida.");
      return false;
  }

  var phonePattern = /^\d{8}$/;
  if (!telefono.match(phonePattern)) {
      alert("Por favor, ingresa un número de teléfono válido (8 dígitos).");
      return false;
  }

  return true;
}                   
