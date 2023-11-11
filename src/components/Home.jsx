import { Hero, HomeCards } from "./MyCpomponents";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom';
import Button from "./Button";
import Image1 from "../assets/images/club1.png";
import Image2 from "../assets/images/club2.jpeg";
import Image3 from "../assets/images/club3.jpeg";
import Image4 from "../assets/images/club4.jpeg";
import Image5 from "../assets/images/party-people.jpg";
import Image6 from "../assets/images/boiler_room_1024x1024.png";
import Image7 from "../assets/images/art.png";
import Image8 from "../assets/images/local-activities.png";

const Home = () => {
  const eventData = [
    { img: Image1, alt: 'Venue Club 1', modalId: '#portfolioModal1' },
    { img: Image2, alt: 'Venue Club 2', modalId: '#portfolioModal2' },
    { img: Image3, alt: 'Venue Club 3', modalId: '#portfolioModal3' },
    { img: Image4, alt: 'Venue Club 4', modalId: '#portfolioModal4' },
  ];

  const categories = [
    { img: Image5, alt: 'Venue Club 5', title: 'Festivals', modalId: '#portfolioModal5' },
    { img: Image6, alt: 'Venue Club 6', title: 'Night Life', modalId: '#portfolioModal6' },
    { img: Image7, alt: 'Venue Club 7', title: 'Culture & Arts', modalId: '#portfolioModal7' },
    { img: Image8, alt: 'Venue Club 8', title: 'Local Activities', modalId: '#portfolioModal8' },
  ];

  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/events');
  };
  return (
    <section className="page-section" id="home">
      <Hero />
      <Container>
        <div className="title-text py-5">
          <h1><span className="spn-color">Discover the best experiences in</span> <span className="tr">Tirana City</span></h1>
          <span className="spn-color">Concerts, nightlife, culture, pop-ups, and much more</span>
        </div>
        <HomeCards cardData={eventData} />
        <div className="btn-more">
          <Button navigate={handleNavigation} text="MORE EVENTS" />
        </div>
        <h1 className="text-white py-5">Categories</h1>
        <HomeCards cardData={categories} />
      </Container>
    </section>
  );
};

export default Home;
