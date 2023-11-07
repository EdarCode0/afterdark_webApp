import React, { useState, useEffect } from "react";
import ExampleCarouselImage from './ExampleCarouselImage';
import Carousel from "react-bootstrap/Carousel";

// Assuming you have two sets of images for desktop and mobile
import desktopImage1 from '../assets/images/img_1.png';
import desktopImage2 from '../assets/images/img_2.png';
import desktopImage3 from '../assets/images/party-img-2.png';

import mobileImage1 from '../assets/images/mobile/img-1-mob.png';
import mobileImage2 from '../assets/images/mobile/img-2-mob.png';
import mobileImage3 from '../assets/images/mobile/img-3-mob.png';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getImage = (index) => {
    // You can create more sophisticated logic here if necessary
    if (isMobile) {
      switch (index) {
        case 0: return mobileImage1;
        case 1: return mobileImage2;
        case 2: return mobileImage3;
        default: return mobileImage1;
      }
    } else {
      switch (index) {
        case 0: return desktopImage1;
        case 1: return desktopImage2;
        case 2: return desktopImage3;
        default: return desktopImage1;
      }
    }
  };

  return (
    <Carousel fade className="hero-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={getImage(0)}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={getImage(1)}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={getImage(2)}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Hero;
