document.querySelectorAll(".btnDetalle").forEach((boton) => {
  boton.addEventListener("click", () => {
    const detalle = boton.nextElementSibling;
    const mostrar = detalle.hidden;
    detalle.hidden = !mostrar;
    boton.setAttribute("aria-expanded", String(mostrar));
    boton.textContent = mostrar ? "Ocultar detalles" : "Ver detalles";
  });
});
