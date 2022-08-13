import Carousel from "react-bootstrap/Carousel";
import Image1 from "../../assets/caro.png";
import Image2 from "../../assets/codes.jpg";
import image3 from "../../assets/days.jpg";

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={Image1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={Image2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={image3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
