// 👉 Parte 1: Menú lateral - mostrar/ocultar
function toggleMenu() {
  const menuLateral = document.querySelector(".menu-lateral");
  const botonMenu = document.getElementById("boton-menu");

  menuLateral.classList.toggle("visible");
  botonMenu.style.display = menuLateral.classList.contains("visible") ? "none" : "block";
}

// 👉 Parte 2: Cerrar menú al hacer clic fuera
function cerrarMenuAlClickAfuera(event) {
  const menuLateral = document.querySelector(".menu-lateral");
  const botonMenu = document.getElementById("boton-menu");

  const estaVisible = menuLateral.classList.contains("visible");
  const clicDentroDelMenu = menuLateral.contains(event.target);
  const clicEnBoton = botonMenu.contains(event.target);

  if (estaVisible && !clicDentroDelMenu && !clicEnBoton) {
    menuLateral.classList.remove("visible");
    botonMenu.style.display = "block";
  }
}

// 👉 Parte 3: Mostrar formulario de acceso exclusivo
function mostrarFormulario() {
  const formulario = document.getElementById("formulario-acceso");
  const contenidoEspecial = document.getElementById("contenido-especial");

  formulario.style.display = "block";
  contenidoEspecial.style.display = "none";
}

// 👉 Parte 4: Verificar usuario autorizado
function verificarUsuario() {
  const usuario = document.getElementById("usuario").value.trim();
  const formulario = document.getElementById("formulario-acceso");
  const contenidoEspecial = document.getElementById("contenido-especial");

  const permitidos = ["rafael", "admin", "director", "profesor"];
  if (permitidos.includes(usuario.toLowerCase())) {
    formulario.style.display = "none";
    contenidoEspecial.style.display = "block";
  } else {
    alert("❌ Usuario no autorizado");
  }
}

// 👉 Parte 5: Agregar nuevo ítem al menú dinámico
function agregarItemAlMenu(event) {
  event.preventDefault();

  const texto = document.getElementById("nuevoItem").value;
  const icono = document.getElementById("iconoItem").value;
  const categoria = document.getElementById("categoriaItem").value;

  const nuevoEnlace = document.createElement("a");
  nuevoEnlace.innerHTML = `<i class="fas ${icono}"></i> ${texto}`;
  nuevoEnlace.href = "#";

  const nuevoItem = document.createElement("li");
  nuevoItem.appendChild(nuevoEnlace);

  const secciones = document.querySelectorAll(".menu > li.desplegable");
  secciones.forEach(seccion => {
    if (seccion.textContent.includes(categoria)) {
      const submenu = seccion.querySelector(".submenu");
      if (submenu) submenu.appendChild(nuevoItem);
    }
  });

  document.getElementById("form-edicion").reset();
}

// 👉 Parte 6: Inicialización de eventos
document.addEventListener("DOMContentLoaded", function () {
  const botonMenu = document.getElementById("boton-menu");

  botonMenu.addEventListener("click", toggleMenu);
  document.addEventListener("click", cerrarMenuAlClickAfuera);

  // Activar funciones del formulario exclusivo y editor dinámico
  document.getElementById("form-edicion").addEventListener("submit", agregarItemAlMenu);
});