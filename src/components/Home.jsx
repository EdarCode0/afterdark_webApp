import { Hero, HomeCards } from "./MyCpomponents";
import Container from "react-bootstrap/Container";

const Home = () => {
  return (
    <section className="page-section" id="home">
      <Hero />
      <Container>
        <div className="title-text py-5">
          <h1>Our Main Events</h1>
        </div>
        <HomeCards />
      </Container>
    </section>
  );
};

export default Home;
