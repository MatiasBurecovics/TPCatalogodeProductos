import React, { useState, useEffect } from 'react';

const DetalleProducto = ({ match }) => {
  // Simula una lista de productos (reemplaza con tus datos reales)
  const productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      categoria: 'Electrónica',
      descripcion: 'Descripción del producto 1.',
      imagenes: ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'],
    },
    {
      id: 2,
      nombre: 'Producto 2',
      categoria: 'Ropa',
      descripcion: 'Descripción del producto 2.',
      imagenes: ['imagen4.jpg', 'imagen5.jpg', 'imagen6.jpg'],
    },
    // Agrega más productos aquí
  ];

  // Encuentra el producto correspondiente al ID proporcionado en la ruta
  const productoId = parseInt(match.params.id);
  const productoSeleccionado = productos.find((producto) => producto.id === productoId);

  // Estado para el producto seleccionado
  const [producto, setProducto] = useState(productoSeleccionado || {});

  useEffect(() => {
    // Si el producto no se encontró por ID, puedes mostrar un mensaje de error
    if (!productoSeleccionado) {
      setProducto({ nombre: 'Producto no encontrado', categoria: '', descripcion: '', imagenes: [] });
    }
  }, [productoSeleccionado]);

  return (
    <div>
      <h1>Detalle del Producto</h1>
      <div className="detalle-producto">
        <h2>{producto.nombre}</h2>
        <p>Categoría: {producto.categoria}</p>
        <p>Descripción: {producto.descripcion}</p>

        {/* Muestra imágenes del producto */}
        <div className="imagenes">
          {producto.imagenes.map((imagen, index) => (
            <img key={index} src={imagen} alt={`Imagen ${index + 1}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
