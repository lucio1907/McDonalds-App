const section = document.querySelector("#section");
const footer = document.querySelector('#footer')

// Variables botones
const btnHamburguesa = document.querySelector("#hamburguesas");
const btnBebida = document.querySelector("#bebidas");
const btnPostres = document.querySelector("#postres");

document.addEventListener("DOMContentLoaded", () => {
  consultarAPIHamburguesa();
  btnHamburguesa.addEventListener("click", () => {
    setTimeout(() => {
      consultarAPIHamburguesa();
    }, 200);
  });
  btnBebida.addEventListener("click", () => {
    setTimeout(() => {
      consultarAPIBebida();
    }, 200);
  });
  btnPostres.addEventListener("click", () => {
    setTimeout(() => {
      consultarAPIPostres();
    }, 200);
  });
});

function imprimirDataHamburguesa(data) {
  if (btnHamburguesa) {
    data.map((info) => {
      const {id, nombre, imagen, precio} = info;
      const divContenedorHamburguesa = document.createElement("div");
      divContenedorHamburguesa.setAttribute('class', 'contenedor-producto')
      divContenedorHamburguesa.setAttribute("id", "producto");
      divContenedorHamburguesa.setAttribute("data-index", id);
      divContenedorHamburguesa.innerHTML = `
        <p class="sizeParrafo posicion-parrafo" id="nombre">${nombre}</p>
            <img id="producto-img" class="size-img" src="${imagen}" alt="${nombre}">
        <p class="sizeParrafo" id="precio">$${precio}</p>
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
      const {id, nombre, imagen, precio} = info;
      const divContenedorBebidas = document.createElement("div");
      divContenedorBebidas.setAttribute('class', 'contenedor-producto')
      divContenedorBebidas.setAttribute("id", "producto");
      divContenedorBebidas.setAttribute("data-index", id);
      divContenedorBebidas.innerHTML = `
                <p class="sizeParrafo" id="nombre">${nombre}</p>
                <img class="sizeBebida" id="producto-img" src="${imagen}" alt="${nombre}">
                <p class="sizeParrafo" id="precio">$${precio}</p>
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
      const {id, nombre, imagen, precio} = info;
      const divContenedorPostres = document.createElement("div");
      divContenedorPostres.setAttribute('class', 'contenedor-producto')
      divContenedorPostres.setAttribute("id", "producto");
      divContenedorPostres.setAttribute("data-index", id);
      divContenedorPostres.innerHTML = `
                  <p class="sizeParrafo" id="nombre">${nombre}</p>
                  <img id="producto-img" class="size-img" src="${imagen}" alt="${nombre}">
                  <p class="sizeParrafo" id="precio">$${precio}</p>
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

    if (btnHamburguesa) {
      spinner();
      setTimeout(() => {
        imprimirDataHamburguesa(data[0]);
      }, 1200);
    }
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

    if (btnBebida) {
      spinner();
      setTimeout(() => {
        imprimirDataBebida(data[1]);
      }, 1200);
    }
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

    if (btnPostres) {
      spinner();
      setTimeout(() => {
        imprimirDataPostres(data[2]);
      }, 1200);
    }
  } catch (error) {
    console.log(error);
  }
}

function spinner() {
  const divSpinner = document.createElement('div');
  divSpinner.innerHTML = `
    <img class="spinner" src="./image/logo.png" alt="spinner-logo-mcDonalds">
  `

  section.appendChild(divSpinner)

  if (divSpinner) {
    section.style.height = '80vh'
    footer.style.display = 'none'
  }

  setTimeout(() => {
    divSpinner.remove()
    section.style.height = '100%'
    footer.style.display = 'flex'
  }, 1200);
}

function limpiarHTML() {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
}
