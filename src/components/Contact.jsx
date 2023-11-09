import React from 'react';
import images from '../constants/index'

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <div>
        {images.data.map((image) => (
          <div key={image.id}>
            <h2>{image.name}</h2>
            <p>{image.description}</p>
            <p>{image.date}</p>
            <img src={image.image} alt={image.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Contact