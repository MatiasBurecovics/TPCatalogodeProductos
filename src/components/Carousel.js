import Carousel from 'react-bootstrap/Carousel';


const CustomCarousel = (images) => {

console.log(images)
  return (
    <Carousel>
      {images.forEach(element => {
        <Carousel.Item>
        <img
          className="d-block w-100"
          src={element}
          alt="First slide"
        />
      </Carousel.Item>
      })}
      
        
      
      

      
      
    </Carousel>
  );
}
export default CustomCarousel;