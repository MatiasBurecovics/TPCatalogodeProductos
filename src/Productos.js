import React, { useState, useEffect } from 'react';

const Productos = () => {
  // Simula una lista de productos (reemplaza con tus datos reales)
  const productos = [
    {
      id: 1,
      nombre: 'Producto 1',
      categoria: 'Electrónica',
      descripcion: 'Descripción del producto 1.',
    },
    {
      id: 2,
      nombre: 'Producto 2',
      categoria: 'Ropa',
      descripcion: 'Descripción del producto 2.',
    },
    // Agrega más productos aquí
  ];

  // Estado para la lista de productos y el filtro de categoría
  const [productosList, setProductosList] = useState(productos);
  const [categoriaFiltro, setCategoriaFiltro] = useState('');

  // Función para filtrar productos por categoría
  const filtrarProductos = () => {
    if (categoriaFiltro === '') {
      setProductosList(productos);
    } else {
      const productosFiltrados = productos.filter(
        (producto) => producto.categoria === categoriaFiltro
      );
      setProductosList(productosFiltrados);
    }
  };

  useEffect(() => {
    filtrarProductos();
  }, [categoriaFiltro]);

  return (
    <div>
      <h1>Productos</h1>

      {/* Filtro por categoría */}
      <div className="filtro">
        <label htmlFor="categoria">Filtrar por categoría:</label>
        <select
          id="categoria"
          onChange={(e) => setCategoriaFiltro(e.target.value)}
          value={categoriaFiltro}
        >
          <option value="">Todos</option>
          <option value="Electrónica">Electrónica</option>
          <option value="Ropa">Ropa</option>
          {/* Agrega más opciones de categoría según tus datos */}
        </select>
      </div>

      {/* Lista de productos */}
      <div className="lista-productos">
        {productosList.map((producto) => (
          <div key={producto.id} className="producto">
            <h2>{producto.nombre}</h2>
            <p>Categoría: {producto.categoria}</p>
            <p>Descripción: {producto.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
