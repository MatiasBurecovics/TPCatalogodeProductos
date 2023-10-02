import Carousel from 'react-bootstrap/Carousel';


const CustomCarousel = (item) => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={item.img}
          alt="First slide"
        />
      </Carousel.Item>

      
      
    </Carousel>
  );
}
export default CustomCarousel;