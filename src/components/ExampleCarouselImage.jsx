import React from 'react';
import PropTypes from 'prop-types';
import FirstSlideImage from '../assets/images/party-img-2.png'; // Update with your actual file paths
import SecondSlideImage from '../assets/images/img_2.png';
import ThirdSlideImage from '../assets/images/img_1.png';

const ExampleCarouselImage = ({ text }) => {
  let imagePath;

  switch (text) {
    case 'First slide':
      imagePath = FirstSlideImage;
      break;
    case 'Second slide':
      imagePath = SecondSlideImage;
      break;
    case 'Third slide':
      imagePath = ThirdSlideImage;
      break;
    default:
      imagePath = FirstSlideImage; 
  }

  return (
    <img
      className="d-block w-100"
      src={imagePath}
      alt={text}
    />
  );
};

ExampleCarouselImage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ExampleCarouselImage;
