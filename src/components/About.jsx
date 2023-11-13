import React from 'react';
import techno from '../assets/video/techno-party.mp4';

const About = () => {
  return (
    // <div classNameName="about-container">
    //   <div classNameName="video-background">
    //     <video src={boat} autoPlay loop muted />
    //   </div>

    //   <div classNameName="content">
    //     <h1>About Us</h1>
    //     <p>Some content about your site or service...</p> 
    //     <p>Some content about your site or service...</p> 
    //     <p>Some content about your site or service...</p> 
    //     <p>Some content about your site or service...</p> 
    //     <p>Some content about your site or service...</p> 
    //     <p>Some content about your site or service...</p> 
    //     <p>Some content about your site or service...</p> 
    //     <p>Some content about your site or service...</p> 
    //     <p>Some content about your site or service...</p> 

    //   </div>
    // </div>


    <section id='about'>
      <header>
        <div className="overlay"></div>

        <video src={techno} autoPlay loop muted />

        <div className="container h-100">
          <div className="d-flex h-100 text-center align-items-center">
            <div className="w-100 text-white">
              <h1 className="about-title">ABOUT US</h1>
              <p className="lead mb-0">Brought To You By SoftSage</p>
            </div>
          </div>
        </div>
      </header>

      <div className="container mt-5 text-white">
        <div className="row">
          <div className="col-md-8 mx-auto">
            <p>
              "Step into AFTERDARK, where nights ignite with unforgettable experiences. Our passion for night-time magic transforms every event into an extraordinary adventure. With AFTERDARK, every beat, every rhythm, every moment is designed to dazzle. As the stars ascend, so does the excitement—each party a celebration of the vibrant life after dark. Join us, and let the evening unfold into an epic journey of memories under the moonlit sky."</p>
            {/* <p>The overlay color and opacity can be changed by modifying the <code>background-color</code> and <code>opacity</code> properties of the <code>.overlay</code> className in the CSS.</p>
            <p>Set the mobile fallback image in the CSS by changing the background image of the header element within the media query at the bottom of the CSS snippet.</p> */}
            <p className="mb-0">
              Created by <a href="https://softsage.co">SOFTSAGE</a>
            </p>
          </div>
        </div>
      </div>

    </section>

  );
};

export default About;
