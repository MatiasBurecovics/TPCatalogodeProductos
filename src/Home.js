import React, { useState, useEffect } from 'react';

const Home = () => {
  // Simula una lista de productos aleatorios (reemplaza con tus datos reales)
  const productosAleatorios = [
    {
      id: 1,
      nombre: 'Producto 1',
      imagen: 'imagen1.jpg',
    },
    {
      id: 2,
      nombre: 'Producto 2',
      imagen: 'imagen2.jpg',
    },
    {
      id: 3,
      nombre: 'Producto 3',
      imagen: 'imagen3.jpg',
    },
    {
      id: 4,
      nombre: 'Producto 4',
      imagen: 'imagen4.jpg',
    },
    {
      id: 5,
      nombre: 'Producto 5',
      imagen: 'imagen5.jpg',
    },
    {
      id: 6,
      nombre: 'Producto 6',
      imagen: 'imagen6.jpg',
    },
  ];

  // Simula una lista de imágenes para el carrusel (reemplaza con tus imágenes reales)
  const imagenesCarrusel = ['carrusel1.jpg', 'carrusel2.jpg', 'carrusel3.jpg'];

  // Estados para productos y carrusel
  const [productos, setProductos] = useState([]);
  const [carruselIndex, setCarruselIndex] = useState(0);

  // Función para avanzar al siguiente elemento del carrusel
  const avanzarCarrusel = () => {
    const newIndex = (carruselIndex + 1) % imagenesCarrusel.length;
    setCarruselIndex(newIndex);
  };

  useEffect(() => {
    // Obtener productos aleatorios (aquí puedes cargar datos reales de productos)
    setProductos(productosAleatorios);
  }, []);

  return (
    <div>
      <h1>Home</h1>

      {/* Carrusel de imágenes */}
      <div className="carrusel">
        <img
          src={imagenesCarrusel[carruselIndex]}
          alt={`Imagen ${carruselIndex + 1}`}
        />
        <button onClick={avanzarCarrusel}>Siguiente</button>
      </div>

      {/* Lista de productos aleatorios */}
      <div className="productos">
        <h2>Productos Aleatorios</h2>
        <ul>
          {productos.map((producto) => (
            <li key={producto.id}>
              <img src={producto.imagen} alt={producto.nombre} />
              <p>{producto.nombre}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
