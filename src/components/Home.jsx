import { Hero, HomeCards } from "./MyCpomponents";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <section className="page-section" id="home">
      <Hero />
      <Container>
        <div className="title-text py-5">
          <h1><span className="spn-color">Discover the best experiences in</span> <span className="tr">Tirana City</span></h1>
          <span className="spn-color">Concerts, nightlife, culture, pop-ups, and much more</span>
        </div>
        <HomeCards />
      </Container>
    </section>
  );
};

export default Home;
