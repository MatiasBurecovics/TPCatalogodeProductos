import React, { useState, useEffect } from 'react';
import Carousel from '../components/Carousel'; 
import ProductsDestacados from '../components/ProductosDestacados';
import { GetAllProductImages } from '../Axios/AxiosClient'; 

const Home = () => {
  const [carouselImages, setCarouselImages] = useState([]); 

  useEffect(() => {
    const fetchCarouselImages = async () => {
      try {
        const images = await GetAllProductImages();
        setCarouselImages(images);
      } catch (error) {
        console.error('Error al obtener imágenes de productos', error);
      }
    };

    fetchCarouselImages();
  }, []);

  return (
    <>
      <Carousel imagenes={carouselImages} />
      <ProductsDestacados />
    </>
  );
}

export default Home;
