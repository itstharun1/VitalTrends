import Carousel from 'react-bootstrap/Carousel';

import food from '../Images/food.png'
import clothing from '../Images/clothing.jpg'
import electronics from '../Images/electronics.jpg'

function Cr() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={electronics}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={food}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={clothing}
          alt="Third slide"
        />
        
      </Carousel.Item>
    </Carousel>
  );
}

export default Cr;