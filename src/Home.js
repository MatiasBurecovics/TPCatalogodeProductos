import React from 'react';

function Home() {
  return (
    <div>
  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="https://www.ferrocons.com.ar/wp-content/uploads/2022/08/1.png" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8ag6oCfD4JlvpRBVGl3Zh0lG08PZygEURQ&usqp=CAU" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdAe7qgESpwjNRpd6hoLYGum-7Srnj8RsCAC8kt-hfMqGDu5CbUfZjIedMvUBXR3x95Y&usqp=CAU" alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div id="card-group">
        <h4 className="mt-4 mb-3"><strong>Productos destacados</strong></h4>
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-5">
          <div className="col">
            <div id="card-e" className="card text-center" style={{ lineHeight: '0px' }}>
              <img className="card-d p-2" src="https://canoplast.com/wp-content/uploads/2021/07/Roca-Monaco-Lavatorio-1-AgujeroColumna.jpg"  />
              <div>
                <h6 className="card-title">Lavatorios</h6>
                <p>Mueble colgante para lavatorio</p>
                <p>$33,909</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div id="card-e" className="card text-center" style={{ lineHeight: '0px' }}>
              <img className="card-d p-2" src="https://http2.mlstatic.com/D_NQ_NP_973130-MLA49597749982_042022-O.webp" />
              <div>
                <h6 className="card-title">Inodoros</h6>
                <p>Inodoro de diseño moderno</p>
                <p>$330,969</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div id="card-e" className="card text-center" style={{ lineHeight: '0px' }}>
              <img className="card-d p-2" src="https://http2.mlstatic.com/D_NQ_NP_993222-MLA51446247918_092022-O.webp" />
              <div>
                <h6 className="card-title">Grifos</h6>
                <p>Grifo de acero inoxidable</p>
                <p>$10,000</p>
              </div>
            </div>
          </div>

          <div className="col">
            <div id="card-e" className="card text-center" style={{ lineHeight: '0px' }}>
              <img className="card-d p-2" src="https://foschia.com.ar/static/uploads/products/jpg/imIqk4qF2eygJQUGAHuPjbIR38nb78HKnmToj-bn6IoPW5QVVL1ydQtz3F5Smtem1FHynT0bohFRtj_3b75epby6lBRXAadDeaoIuFJT6UIhvmQE9ORhosPKSCB82D_pIjwIhEHTHYale-oSnEXb_gg2XgaLz4vymLjhxgyu_9eXBWSzfxPjIiKANpj3RB4t.jpg" />
              <div>
                <h6 className="card-title">Bidés</h6>
                <p>Bidé con función de autolimpieza</p>
                <p>$85,000</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div id="card-e" className="card text-center" style={{ lineHeight: '0px' }}>
              <img className="card-d p-2" src="https://i.pinimg.com/564x/bd/55/31/bd55316603855fc8c83f37d6f71b3752.jpg"  />
              <div>
                <h6 className="card-title">Bañeras</h6>
                <p>Bañera de hidromasaje con luces LED</p>
                <p>$600,000</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div id="card-e" className="card text-center" style={{ lineHeight: '0px' }}>
              <img className="card-d p-2" src="https://falabella.scene7.com/is/image/Falabella/gsc_113341050_616065_1?wid=800&hei=800&qlt=70" />
              <div>
                <h6 className="card-title">Cortina negra para baño</h6>
                <p>Material unico</p>
                <p>$15,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
