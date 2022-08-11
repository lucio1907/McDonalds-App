$(document).ready(() => {
  const carrito = {};
  let estadocarrito = false,
    distancia = 50;
  const contenedorpicado = document.createElement("div");
  contenedorpicado.classList.add("contenedorcompra");
  document.querySelector(".posicion-carrito").appendChild(contenedorpicado);
  document.querySelector("#carrito").addEventListener("click", () => {
    setTimeout(() => {
      if (estadocarrito === false) {
        $(contenedorpicado).css({
          display: "block",
        });
        contenedorpicado.innerHTML =
          '<svg class="queso-carrito" id="queso-carrito" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffd700" fill-opacity="1" d="M0,192L17.1,170.7C34.3,149,69,107,103,80C137.1,53,171,43,206,85.3C240,128,274,224,309,224C342.9,224,377,128,411,122.7C445.7,117,480,203,514,218.7C548.6,235,583,181,617,170.7C651.4,160,686,192,720,213.3C754.3,235,789,245,823,256C857.1,267,891,277,926,256C960,235,994,181,1029,144C1062.9,107,1097,85,1131,106.7C1165.7,128,1200,192,1234,224C1268.6,256,1303,256,1337,240C1371.4,224,1406,192,1423,176L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path></svg>';
        $("#queso-carrito").animate(
          {
            marginTop: distancia + "",
          },
          1300
        );
        $(contenedorpicado).animate(
          {
            height: distancia + "",
          },
          1300,
          () => {
            estadocarrito = true;
            mostrarEnCarrito();
          }
        );
      } else {
        $("#queso-carrito").animate(
          {
            marginTop: "0px",
          },
          800
        );
        $(contenedorpicado).animate(
          {
            height: "0px",
          },
          800,
          () => {
            $(contenedorpicado).css({
              display: "none",
            });
            estadocarrito = false;
          }
        );
      }
    }, 400);
  });

  document.querySelector("body").addEventListener("click", () => {
    if (estadocarrito === true) {
      $("#queso-carrito").animate(
        {
          marginTop: "0px",
        },
        1100
      );
      $(contenedorpicado).animate(
        {
          height: "0px",
        },
        1100,
        () => {
          estadocarrito = false;
          $(contenedorpicado).css({
            display: "none",
          });
        }
      );
    }
  });

  document.querySelector("#section").addEventListener("click", (e) => {
    if (e.target.id === "boton") {
      e.preventDefault();
      crearProducto(e.target.parentElement);
      distancia += 100;
    }
  });

  function crearProducto(e) {
    const producto = {
      id: $(e).attr("data-index"),
      imagen: $(e).children("#producto-img").attr("src"),
      nombre: $(e).children("#nombre").text(),
      precio: $(e).children("#precio").text().slice(1),
      cantidad: 1,
    };
    console.log(producto);
    if (carrito.hasOwnProperty(producto.id)) {
      let precio = producto.precio;
      producto.cantidad = carrito[producto.id].cantidad + 1;
      producto.precio = producto.precio * producto.cantidad;
      distancia -= 100;
    }
    carrito[producto.id] = { ...producto };
  }

  function mostrarEnCarrito() {
    let total = 0;
    for (let producto in carrito) {
      let contenedorproducto = document.createElement("div");
      contenedorproducto.classList.add("contenedor-producto-carrito");
      contenedorproducto.innerHTML = `<img class="imagen-carrito" src="${carrito[producto].imagen}">
                                        <p>${carrito[producto].id}</p>
                                        <h4>${carrito[producto].nombre}</h4>
                                        <h3>$${carrito[producto].precio}</h3>
                                        <p>Cant ${carrito[producto].cantidad}</p>`;
      contenedorpicado.append(contenedorproducto);
      total += Number(carrito[producto].precio);
    }
    const contenedortotal = document.createElement("div");
    contenedortotal.classList.add("contenedor-total");
    contenedortotal.innerHTML = `<h3>TOTAL $${total}</h3>`;
    contenedorpicado.appendChild(contenedortotal);
  }
});
