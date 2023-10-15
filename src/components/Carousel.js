import React from 'react';

function Carousel({ imagenes = [] }) {
  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        {imagenes.map((img, index) => (
          <li key={index} data-target="#myCarousel" data-slide-to={index} className={index === 0 ? "active" : ""}></li>
        ))}
      </ol>

      <div className="carousel-inner">
        {imagenes.map((img, index) => (
          <div key={index} className={index === 0 ? "carousel-item active" : "carousel-item"}>
            <img className="d-block w-100" src={img} alt={`Imagen ${index}`} />
          </div>
        ))}
      </div>

      <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
