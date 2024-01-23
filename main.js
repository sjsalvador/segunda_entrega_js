const productos = [
    { id: 1, nombre: "camisa", precio: 1000 },
    { id: 2, nombre: "media", precio: 750 },
    { id: 3, nombre: "zapato", precio: 320 },
    { id: 4, nombre: "gorra", precio: 142 },
    { id: 5, nombre: "pantalon", precio: 1750 },
    { id: 6, nombre: "remera", precio: 550 },
];

const encontrar = () => {
    // Solicitar al usuario que ingrese el nombre del producto
    const nombre = prompt("Ingrese el nombre del producto a buscar:").toLowerCase();

    // Utilizar el método find para buscar el producto por nombre, ignorando mayúsculas/minúsculas
    const producto = productos.find((producto) => producto.nombre.toLowerCase() === nombre);

    // Verificar si se encontró un producto
    if (producto) {
        // Mostrar las propiedades del producto encontrado
        alert(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
    } else {
        // Mostrar un mensaje si no se encontró el producto
        alert("Producto no encontrado");
    }
};

encontrar();

const filtrarPorPrecio = () => {
    // Solicitar al usuario que ingrese el rango de precios
    const precioMin = Number(prompt("Ingrese ahora un precio mínimo para su rango de busqueda:"));
    const precioMax = Number(prompt("Ingrese tambien un precio máximo para su rango de busqueda:"));

    // Utilizar el método filter para filtrar productos por rango de precio
    const productosFiltrados = productos.filter((producto) => producto.precio >= precioMin && producto.precio <= precioMax);

    // Verificar si se encontraron productos
    if (productosFiltrados.length > 0) {
        const resultado = productosFiltrados.map(p => `ID: ${p.id}, Nombre: ${p.nombre}, Precio: ${p.precio}`).join('\n');
        alert(`Estos son los productos encontrados en ese rango de precios:\n${resultado}`);
    } else {
        alert("No se encontraron productos en este rango de precios");
    }
};


filtrarPorPrecio();

  
  