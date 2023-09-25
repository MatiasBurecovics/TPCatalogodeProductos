import React, { useState } from 'react';

const Productos = () => {
  const [productos, setProductos] = useState([
    {
      id: 1,
      categoria: 'Lavatorios',
      nombre: 'Mueble colgante para lavatorio',
      precio: 33909,
      imagen:
        'https://canoplast.com/wp-content/uploads/2021/07/Roca-Monaco-Lavatorio-1-AgujeroColumna.jpg',
    },
    {
      id: 2,
      categoria: 'Inodoros',
      nombre: 'Inodoro de diseño moderno',
      precio: 330969,
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_973130-MLA49597749982_042022-O.webp',
    },
    {
      id: 3,
      categoria: 'Grifos',
      nombre: 'Grifo de acero inoxidable',
      precio: 10000,
      imagen:
        'https://http2.mlstatic.com/D_NQ_NP_993222-MLA51446247918_092022-O.webp',
    },
    {
      id: 4,
      categoria: 'Bidés',
      nombre: 'Bidé con función de autolimpieza',
      precio: 85000,
      imagen:
        'https://foschia.com.ar/static/uploads/products/jpg/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6IoPW5QVVL1ydQtz3F5Smtem1FHynT0bohFRtj_3b75epby6lBRXAadDeaoIuFJT6UIhvmQE9ORhosPKSCB82D_pIjwIhEHTHYale-oSnEXb_gg2XgaLz4vymLjhxgyu_9eXBWSzfxPjIiKANpj3RB4t.jpg',
    },
    {
      id: 5,
      categoria: 'Bañeras',
      nombre: 'Bañera de hidromasaje con luces LED',
      precio: 600000,
      imagen: 'https://i.pinimg.com/564x/bd/55/31/bd55316603855fc8c83f37d6f71b3752.jpg',
    },
    {
      id: 6,
      categoria: 'Baño',
      nombre: 'Cortina negra para baño',
      precio: 15000,
      imagen: 'https://falabella.scene7.com/is/image/Falabella/gsc_113341050_616065_1?wid=800&hei=800&qlt=70',
    },
  ]);

  const [filtroCategoria, setFiltroCategoria] = useState('');

  const filtrarProductos = () => {
    if (!filtroCategoria) {
      return productos;
    }

    return productos.filter((producto) =>
      producto.categoria.toLowerCase().includes(filtroCategoria.toLowerCase())
    );
  };

  return (
    <div>
      <h4 className="mt-4 mb-3">
        <strong>Productos destacados</strong>
      </h4>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Filtrar por categoría"
          value={filtroCategoria}
          onChange={(e) => setFiltroCategoria(e.target.value)}
        />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
        {filtrarProductos().map((producto) => (
          <div className="col" key={producto.id}>
            <div className="card text-center">
              <img className="card-img-top" src={producto.imagen} alt={producto.nombre} />
              <div className="card-body">
                <h6 className="card-title">{producto.nombre}</h6>
                <p className="card-text">{producto.categoria}</p>
                <p className="card-text">$ {producto.precio.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
