import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const imageProp = ["pizza","burger","coke"];

function CarouselComponent() {
  return (
    <Carousel autoPlay infiniteLoop showStatus={false} emulateTouch showThumbs={false} navButtonsAlwaysVisible>
      
          <div style={{ maxHeight: '24rem' }} className="object-center ">
            <img src={"/magrita.jpg"}  />
          </div>
          <div style={{ maxHeight: '24rem' }} className="object-fill">
            <img src={"/cr-img-3.jpg"}  />
          </div>
    </Carousel>
  );
}

export default CarouselComponent;
