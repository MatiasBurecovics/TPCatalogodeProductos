import Carousel from 'react-bootstrap/Carousel';

const CustomCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://i.pinimg.com/736x/22/27/0a/22270ac54ea05a9ebd0b45df12cd2e58.jpg"}
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://images.homify.com/image/upload/c_scale,h_500,w_500/v1458567482/p/photo/image/1413501/ArzoInterno1.jpg"}
          alt="First slide"
        />
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={"https://images.homify.com/image/upload/c_scale,h_500,w_500/v1460965979/p/photo/image/1463114/IMG_9118.jpg"}
          alt="First slide"
        />
      </Carousel.Item>
      
    </Carousel>
  );
}
export default CustomCarousel;