import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {  GetAllProducts } from '../Axios/AxiosClient';

const CustomCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      try {
        const response = await GetAllProducts();
        setImages(response.data.thumbnail);
      } catch (error) {
        console.error('Error fetching images', error);
      }
    }

    fetchImages();
  }, []);

  return (
 console.log("gfbfhf")
  );
}

export default CustomCarousel;
