import React from 'react';
import { Carrousel } from './Carrousel';
import {Tarjeta} from './Tarjeta'
const imgs = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8ag6oCfD4JlvpRBVGl3Zh0lG08PZygEURQ&usqp=CAU",
  "https://www.ferrocons.com.ar/wp-content/uploads/2022/08/1.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLdAe7qgESpwjNRpd6hoLYGum-7Srnj8RsCAC8kt-hfMqGDu5CbUfZjIedMvUBXR3x95Y&usqp=CAU"]

  const products = [
    {
        img: "https://canoplast.com/wp-content/uploads/2021/07/Roca-Monaco-Lavatorio-1-AgujeroColumna.jpg",
        nombre: "Lavatorios",
        descripcion: "Mueble colgante para Lavatorios",
        precio: 33.909
    },
    {
        img: "https://canoplast.com/wp-content/uploads/2021/07/Roca-Monaco-Lavatorio-1-AgujeroColumna.jpg",
        nombre: "Lavatorios",
        descripcion: "Mueble colgante para Lavatorios",
        precio: 33.909
    },
    {
        img: "https://canoplast.com/wp-content/uploads/2021/07/Roca-Monaco-Lavatorio-1-AgujeroColumna.jpg",
        nombre: "Lavatorios",
        descripcion: "Mueble colgante para Lavatorios",
        precio: 33.909
    }]
function Home() {
  return (
    <>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
      </head>
      <div>
        <Carrousel imagenes={imgs} ></Carrousel>
        <Tarjeta productos={products}></Tarjeta>
      </div>
    </>
  );
}

export default Home;
