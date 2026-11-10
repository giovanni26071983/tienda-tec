const formContacto = document.getElementById("formContacto");
const respuesta = document.getElementById("respuesta");

formContacto?.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  respuesta.textContent = `Gracias, ${nombre}. Este formulario es una demostración y no envía correos.`;
});

formContacto?.addEventListener("reset", () => {
  respuesta.textContent = "";
});
