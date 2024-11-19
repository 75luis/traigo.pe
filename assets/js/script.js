const productos = [
    { id: 1, nombre: "Camiseta Deportiva", precio: 20, descripcion: "Camiseta de alta calidad.", imagen: "https://image.spreadshirtmedia.net/image-server/v1/products/T981A1PA2167PT1X43Y34D172738123W20113H21051/views/1,width=378,height=378,appearanceId=1,backgroundColor=F2F2F2,modelId=4064,crop=list/evolution-home-office-e-commerce-2020.jpg" },
    { id: 2, nombre: "Zapatillas Running", precio: 50, descripcion: "Zapatillas cómodas para correr.", imagen: "https://oechsle.vteximg.com.br/arquivos/ids/18277754-800-800/2667789.jpg?v=638551745039900000" },
    { id: 3, nombre: "Mochila Escolar", precio: 30, descripcion: "Mochila resistente.", imagen: "https://f.fcdn.app/imgs/c3aaa9/www.inbox.com.pe/inbope/21e7/original/catalogo/JS00P1_1861_1/2000-2000/pack-mochila-lonchera-cartuchera-misty-rose.jpg" },
    { id: 4, nombre: "Mochila Viajero", precio: 50, descripcion: "Mochila ideal para viajes largos.", imagen: "https://http2.mlstatic.com/D_NQ_NP_750250-MPE26134186621_102017-O.webp" },
    { id: 5, nombre: "Audífonos Bluetooth", precio: 50, descripcion: "Audífonos inalámbricos con cancelación de ruido.", imagen: "https://img.kwcdn.com/product/fancy/d2d22b07-3dea-4c84-942b-d415f872c4c0.jpg?imageView2/2/w/800/q/70/format/webp" },
    { id: 6, nombre: "Smartwatch Deportivo", precio: 120, descripcion: "Reloj inteligente con monitor de actividad física.", imagen: "https://plazavea.vteximg.com.br/arquivos/ids/25894214-1000-1000/image-42acc473c31e4f3b87874c16be9b3eb1.jpg?v=638146050576570000" },
    { id: 7, nombre: "Mochila Escolar", precio: 30, descripcion: "Mochila resistente.", imagen: "https://img4.dhresource.com/webp/m/0x0/f3/albu/km/y/26/76c0f10f-276a-42d9-bbb8-42da2428046c.jpg" },
    { id: 8, nombre: "Lámpara LED", precio: 25, descripcion: "Lámpara de escritorio ajustable con luz LED.", imagen: "https://m.media-amazon.com/images/I/71TC8+sR1ML._AC_SX679_.jpg" },
    { id: 9, nombre: "Termo de Acero Inoxidable", precio: 18, descripcion: "Termo con capacidad de 1 litro, mantiene bebidas calientes.", imagen: "https://plazavea.vteximg.com.br/arquivos/ids/14135667-1000-1000/image-93cd2c51987649baaef639b751e59239.jpg" },
    { id: 10, nombre: "Teclado Mecánico", precio: 75, descripcion: "Teclado retroiluminado RGB con switches táctiles.", imagen: "https://m.media-amazon.com/images/I/41ms8kw6ZIL._AC_.jpg" },
    { id: 11, nombre: "Set de Sartenes", precio: 60, descripcion: "Sartenes antiadherentes de 3 tamaños.", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/120582199_01/w=1500,h=1500,fit=pad" },
    { id: 12, nombre: "Cámara de Seguridad", precio: 90, descripcion: "Cámara IP con visión nocturna y detección de movimiento.", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/125303849_01/w=1500,h=1500,fit=pad" },
    { id: 13, nombre: "Juego de Cubiertos", precio: 35, descripcion: "Juego de 24 piezas de acero inoxidable.", imagen: "https://tramontinastorepe.vteximg.com.br/arquivos/ids/1030311/23499028PNM001B.png?v=638640057952200000" },
    { id: 14, nombre: "Monitor Full HD", precio: 150, descripcion: "Monitor de 24 pulgadas con resolución 1080p.", imagen: "https://oechsle.vteximg.com.br/arquivos/ids/18614030-1000-1000/image-bc2644325f5641f8aba7c32f6df51e71.jpg?v=638609293776700000" },
    { id: 15, nombre: "Botas de Montaña", precio: 85, descripcion: "Botas resistentes al agua para senderismo.", imagen: "https://lavalencianacalzados.com/blog/wp-content/uploads/2023/03/Fotos-Blog-21.jpg" },
    { id: 16, nombre: "Set de Herramientas", precio: 45, descripcion: "Caja con 50 herramientas esenciales.", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/1388630_01/w=800,h=800,fit=pad" },
    { id: 17, nombre: "Robot Aspiradora", precio: 200, descripcion: "Aspiradora automática con programación inteligente.", imagen: "https://store.irobot.pe/wp-content/uploads/2022/07/I3_1000x1000-768x768.jpg" },
    { id: 18, nombre: "Juego de Toallas", precio: 40, descripcion: "Set de 6 toallas suaves y absorbentes.", imagen: "https://www.elvisillo.com/132-thickbox_default/juego-toallas-3-piezas-gris.jpg" },
    { id: 19, nombre: "Gafas de Sol Deportivas", precio: 30, descripcion: "Gafas polarizadas con protección UV.", imagen: "https://m.media-amazon.com/images/I/41HUvrxa3RL._AC_.jpg" },
    { id: 20, nombre: "Teros Gaming", precio: 520, descripcion: "Monitor Teros Curvo 2K QHD 165Hz ULTRA VELOZ", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/127346033_01/w=800,h=800,fit=pad" },
    { id: 21, nombre: "Laptop Asus", precio: 4800, descripcion: "Gamer Asus Intel Core i7 de 12 núcleos RTX3050 8GB 512GB SSD TUF Gaming F15 12°Gen 15.6\" FHD", imagen: "https://rymportatiles.com.pe/cdn/shop/files/ASUS-TUF-F15-FX507VU-LP180-3.png?v=1715702570&width=1214" },
    { id: 22, nombre: "FITNESS SPORT", precio: 2850, descripcion: "Máquina de Correr Trotadora Eléctrica Motor 2 HP Caminadora Pro FITNESS SPORT", imagen: "https://promart.vteximg.com.br/arquivos/ids/7281647-1000-1000/image-b0571812856246de9643db1f06b2cc8f.jpg?v=638248666590900000" },
    { id: 23, nombre: "Samsung", precio: 1720, descripcion: "Celular Samsung A55 5G 8GB 256GB - Negro", imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH655L0QXwm_Wr4QRoSQD_SBjgFEUMRCwvpA&s" },
    { id: 24, nombre: "MIRAY", precio: 850, descripcion: "Cocina a GLP Miray SALVIA PLUS 4 Hornillas", imagen: "https://hiraoka.com.pe/media/catalog/product/1/1/111146_salvia_v1_2.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=560&width=700&canvas=700:560" },
    { id: 25, nombre: "Oster", precio: 185, descripcion: "Licuadora Oster 2112242 Roja", imagen: "https://www.efe.com.pe/media/catalog/product/b/l/blstkagrrd053_principal.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700" },
    { id: 26, nombre: "Philips", precio: 470, descripcion: "BATIDORA PLANETARIA 5LT 800W PHILIPS", imagen: "https://promart.vteximg.com.br/arquivos/ids/3079176-1000-1000/image-519c38c4661d4c909b0f9bccb9a99e05.jpg?v=637733622220600000" },
    { id: 27, nombre: "Desobry", precio: 430, descripcion: "Barra de sonido para TV con Bluetooth 5.0 50 W", imagen: "https://m.media-amazon.com/images/I/71UbuK93svL.jpg" },
    { id: 28, nombre: "Zorslesy", precio: 160, descripcion: "Plancha de vapor para ropa de 1800 W", imagen: "https://m.media-amazon.com/images/I/61NYqg+HFhL._AC_UF894,1000_QL80_.jpg" },
    { id: 29, nombre: "Homca", precio: 190, descripcion: "Almohada Cervical Ortopédica para descanso pleno", imagen: "https://i.ebayimg.com/images/g/ebUAAOSwm~lkJVM1/s-l1600.jpg" },
    { id: 30, nombre: "Bosch", precio: 3750, descripcion: "Nivel láser GLL 3-80CG", imagen: "https://geotop.com.pe/wp-content/uploads/2023/02/Nivel-Laser-Combinado-Bosch-GLL-3-80-P-instop-geotop-topografia-central-1.webp" },
    { id: 31, nombre: "Truper", precio: 470, descripcion: "Gata tipo lagarto gata caimán 3 toneladas con maletín", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/119503355_01/w=800,h=800,fit=pad" },
    { id: 32, nombre: "JBL", precio: 550, descripcion: "JBL Charge 5 - Altavoz Bluetooth portátil con IP67 a prueba de agua y salida de carga USB", imagen: "https://m.media-amazon.com/images/I/61qMO3TS2RL._AC_SL1500_.jpg" },
    { id: 33, nombre: "One Piece", precio: 470, descripcion: "Inodoro One Piece Bali + Asiento Blanco Vainsa", imagen: "https://promart.vteximg.com.br/arquivos/ids/7953593-1000-1000/119253.jpg?v=638500271396270000" },
    { id: 34, nombre: "PETIZOOS", precio: 200, descripcion: "Casa para Perro Raza Pequeña Plástico 66x69x73cm", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/sodimacPE/3475522_01/w=800,h=800,fit=pad" },
    { id: 35, nombre: "ALPINE TREK", precio: 170, descripcion: "Parrillera a carbón 14\" Alpine Trek", imagen: "https://www.titaniccenter.com/cdn/shop/files/PARRILLERAACARBON14ALPINETREK.png?v=1726067224&width=1214" },
    { id: 36, nombre: "BuyPal", precio: 80, descripcion: "Kit Herramientas 46 Piezas Multiusos Dados Puntas Acero Carbono", imagen: "https://promart.vteximg.com.br/arquivos/ids/6832909-1000-1000/image-160f509261ca4f0897340378ec029ec8.jpg?v=638144907986500000" },
    { id: 37, nombre: "YUFIFAIRY", precio: 450, descripcion: "Mesa Plegable Pequeña, 24'' L X 16''", imagen: "https://http2.mlstatic.com/D_NQ_NP_776135-MPE69589546181_052023-O.webp" },
    { id: 38, nombre: "FINCATEC", precio: 780, descripcion: "Motobomba Gasolinera 3X3 Bonelly 7.5HP", imagen: "https://importfcb.com/wp-content/uploads/2022/10/motobomba-gasolinera-4x4-BN-WP40.jpg" },
    { id: 39, nombre: "CeSunlight", precio: 190, descripcion: "Lámpara De Escritorio Led Para Hogar/Oficina", imagen: "https://http2.mlstatic.com/D_NQ_NP_796120-MCO49581410446_042022-O.webp" },
    { id: 40, nombre: "GENÉRICO", precio: 330, descripcion: "Armario Portátil Para Ropa De Tela Color Marrón", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/128809464_01/w=800,h=800,fit=pad" },
    { id: 41, nombre: "LIMA CAUCHO", precio: 245, descripcion: "185/70 R 14 88 S LIMA CAUCHO T70 (N) LLANTA PCR", imagen: "https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaPE/125096468_01/w=1500,h=1500,fit=pad" }


];

let carrito = [];
const productosPorPagina = 12; // Cantidad de productos por página
let paginaActual = 1; // Página inicial

// Renderiza los productos en la página principal
function renderizarProductos() {
    const contenedorProductos = document.querySelector(".lista-productos");
    contenedorProductos.innerHTML = ""; // Limpia el contenido previo
    productos.forEach(producto => {
        const tarjetaProducto = document.createElement("div");
        tarjetaProducto.className = "producto-card";
        tarjetaProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: <strong>S/${producto.precio}</strong></p>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(tarjetaProducto);
    });
}

// Agrega un producto al carrito
function agregarAlCarrito(event) {
    const idProducto = parseInt(event.target.getAttribute("data-id"));
    const productoSeleccionado = productos.find(producto => producto.id === idProducto);

    const productoEnCarrito = carrito.find(item => item.id === idProducto);
    if (productoEnCarrito) {
        productoEnCarrito.cantidad += 1;
    } else {
        carrito.push({ ...productoSeleccionado, cantidad: 1 });
    }
    actualizarCarrito();
}

// Elimina un producto del carrito
function eliminarDelCarrito(idProducto) {
    carrito = carrito.filter(producto => producto.id !== idProducto);
    actualizarCarrito();
}

// Actualiza la cantidad de un producto en el carrito
function actualizarCantidad(idProducto, nuevaCantidad) {
    const producto = carrito.find(item => item.id === idProducto);
    if (producto) {
        producto.cantidad = nuevaCantidad;
        if (producto.cantidad <= 0) {
            eliminarDelCarrito(idProducto);
        }
    }
    actualizarCarrito();
}

// Actualiza el contenido del carrito
function actualizarCarrito() {
    const carritoModal = document.querySelector("#carrito-items");
    const totalCarrito = document.querySelector("#total-carrito");
    const btnCarrito = document.querySelector("#btn-carrito");

    carritoModal.innerHTML = ""; // Limpia el contenido actual
    let total = 0;

    carrito.forEach(producto => {
        const subtotal = producto.precio * producto.cantidad; // Precio total por producto
        const item = document.createElement("div");
        item.className = "item-carrito";
        item.innerHTML = `
            <div class="item-detalle">
                <p>${producto.nombre}</p>
                <input type="number" min="1" value="${producto.cantidad}" class="input-cantidad" data-id="${producto.id}">
            </div>
            <div class="item-precios">
                <p>Precio unidad: S/${producto.precio}</p>
                <p>Subtotal: S/${subtotal}</p>
            </div>
            <button class="btn-eliminar" onclick="eliminarDelCarrito(${producto.id})">Eliminar</button>
        `;
        carritoModal.appendChild(item);
        total += subtotal;
    });

    totalCarrito.textContent = `Total: S/${total}`;
    btnCarrito.textContent = `Carrito (${carrito.reduce((acc, item) => acc + item.cantidad, 0)})`;

    // Agregar eventos para cambiar cantidades
    document.querySelectorAll(".input-cantidad").forEach(input => {
        input.addEventListener("change", (event) => {
            const nuevaCantidad = parseInt(event.target.value);
            const idProducto = parseInt(event.target.getAttribute("data-id"));
            if (isNaN(nuevaCantidad) || nuevaCantidad < 1) {
                event.target.value = 1;
                actualizarCantidad(idProducto, 1);
            } else {
                actualizarCantidad(idProducto, nuevaCantidad);
            }
        });
    });
}

// Redirige a la página de pago
function redirigirPago() {
    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }
    // Guardar los datos del carrito en localStorage para usarlos en la página de pago
    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.location.href = "pago.html";
}

// Inicializa las funciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos();

    document.querySelectorAll(".btn-agregar").forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });

    document.querySelector("#btn-carrito").addEventListener("click", () => {
        document.querySelector("#carrito-modal").style.display = "flex";
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector("#carrito-modal").style.display = "none";
    });

    document.querySelector("#btn-pagar").addEventListener("click", redirigirPago);
});


document.addEventListener("DOMContentLoaded", () => {
    const anuncios = [
        { src: "assets/images/anuncio1.png", link: "https://www.facebook.com/escueladeconstrucciondigital/posts/-cyber-woooooooow-ecd-no-dejes-pasar-esta-oportunidad-ll%C3%A9vate-cualquiera-de-esto/1485881838531782/" },
        { src: "assets/images/anuncio2.jpg", link: "https://www.facebook.com/LaCuracaoPeru/posts/-oferta-irresistible-solo-por-hoy-visita-nuestras-tiendas-y-aprovecha-hasta-15-d/3154205334607992/" },
        { src: "assets/images/anuncio3.jpg", link: "https://www.facebook.com/carsaperu/posts/-aprovecha-estas-super-ofertas-exclusivas-de-carsape-exclusivo-en-wwwcarsape-des/3937160952984357/" }
    ];

    let indiceActual = 0;
    const imagenElemento = document.getElementById("anuncio-imagen");
    const enlaceElemento = document.getElementById("anuncio-enlace");

    function mostrarSiguienteAnuncio() {
        indiceActual = (indiceActual + 1) % anuncios.length; // Alterna entre los anuncios
        const anuncio = anuncios[indiceActual];
        imagenElemento.src = anuncio.src;
        enlaceElemento.href = anuncio.link;
    }

    // Cambia de anuncio cada 3 segundos
    setInterval(mostrarSiguienteAnuncio, 3000);
});






// Renderiza los productos en la página principal
function renderizarProductos(filtro = "") {
    const contenedorProductos = document.querySelector(".lista-productos");
    contenedorProductos.innerHTML = ""; // Limpia el contenido previo

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    if (productosFiltrados.length === 0) {
        contenedorProductos.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }

    productosFiltrados.forEach(producto => {
        const tarjetaProducto = document.createElement("div");
        tarjetaProducto.className = "producto-card";
        tarjetaProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: <strong>S/${producto.precio}</strong></p>
            <button class="btn-agregar" data-id="${producto.id}">Agregar al carrito</button>
        `;
        contenedorProductos.appendChild(tarjetaProducto);
    });
}

// Inicializa el buscador
function inicializarBuscador() {
    const inputBuscador = document.getElementById("buscador-input");
    inputBuscador.addEventListener("input", (event) => {
        const textoBusqueda = event.target.value;
        renderizarProductos(textoBusqueda); // Actualiza los productos filtrados
    });
}

// Inicializa las funciones al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    renderizarProductos(); // Muestra todos los productos al inicio
    inicializarBuscador(); // Activa el buscador

    document.querySelectorAll(".btn-agregar").forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
});



















