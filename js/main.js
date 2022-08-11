const section = document.querySelector("#section");

// Variables botones
const btnHamburguesa = document.querySelector("#hamburguesas");
const btnBebida = document.querySelector("#bebidas");
const btnPostres = document.querySelector("#postres");

document.addEventListener("DOMContentLoaded", () => {
  consultarAPIHamburguesa();
  btnHamburguesa.addEventListener("click", consultarAPIHamburguesa);
  btnBebida.addEventListener("click", consultarAPIBebida);
  btnPostres.addEventListener("click", consultarAPIPostres);
});

function imprimirDataHamburguesa(data) {
  if (btnHamburguesa) {
    data.map((info) => {
      const divContenedorHamburguesa = document.createElement("div");
      divContenedorHamburguesa.setAttribute("id", "producto");
      divContenedorHamburguesa.setAttribute("data-index", info.id);
      divContenedorHamburguesa.innerHTML = `
        <p id="nombre">${info.nombre}</p>
            <img id="producto-img" src="${info.imagen}" width="130px" height="130px" alt="${info.nombre}">
        <p id="precio">$${info.precio}</p>
        <button class="boton-agregar" id="boton">Agregar</button>
    `;

      section.appendChild(divContenedorHamburguesa);
    });
    return;
  }
}

function imprimirDataBebida(data) {
  if (btnBebida) {
    data.map((info) => {
      const divContenedorBebidas = document.createElement("div");
      divContenedorBebidas.setAttribute("id", "producto");
      divContenedorBebidas.setAttribute("data-index", info.id);
      divContenedorBebidas.innerHTML = `
                <p id="nombre">${info.nombre}</p>
                <img id="producto-img" src="${info.imagen}" width="130px" height="100px" alt="${info.nombre}">
                <p id="precio">$${info.precio}</p>
                <button class="boton-agregar" id="boton">Agregar</button>
            `;

      section.appendChild(divContenedorBebidas);
    });
    return;
  }
}

function imprimirDataPostres(data) {
  if (btnPostres) {
    data.map((info) => {
      const divContenedorPostres = document.createElement("div");
      divContenedorPostres.setAttribute("id", "producto");
      divContenedorPostres.setAttribute("data-index", info.id);
      divContenedorPostres.innerHTML = `
                  <p id="nombre">${info.nombre}</p>
                  <img id="producto-img" src="${info.imagen}" width="130px" height="130px" alt="${info.nombre}">
                  <p id="precio">$${info.precio}</p>
                  <button class="boton-agregar" id="boton">Agregar</button>
              `;

      section.appendChild(divContenedorPostres);
    });
    return;
  }
}

async function consultarAPIHamburguesa() {
  limpiarHTML();
  try {
    const url = "db.json";

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    imprimirDataHamburguesa(data[0]);
  } catch (error) {
    console.log(error);
  }
}

async function consultarAPIBebida() {
  limpiarHTML();
  try {
    const url = "db.json";

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    imprimirDataBebida(data[1]);
  } catch (error) {
    console.log(error);
  }
}

async function consultarAPIPostres() {
  limpiarHTML();
  try {
    const url = "db.json";

    const respuesta = await fetch(url);
    const data = await respuesta.json();

    imprimirDataBebida(data[2]);
  } catch (error) {
    console.log(error);
  }
}

function limpiarHTML() {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
}
