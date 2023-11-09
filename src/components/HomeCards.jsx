import Image1 from "../assets/images/club1.png";
import Image2 from "../assets/images/club2.jpeg";
import Image3 from "../assets/images/club3.jpeg";
import Image4 from "../assets/images/club4.jpeg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';
import Button from "./Button";

const HomeCards = () => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/events');
  };
  return (
    <Container>
      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6} lg={6} sm={6} className="mb-4">
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid rounded"
                src={Image1}
                alt="Venue Club"
              />
            </a>
          </div>
        </Col>
        <Col xs={6} lg={6} sm={6} className="mb-4">
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid rounded"
                src={Image2}
                alt="Venue Club"
              />
            </a>
          </div>
        </Col>
        <Col xs={6} lg={6} sm={6} className="mb-4">
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid rounded"
                src={Image3}
                alt="Venue Club"
              />
            </a>
          </div>
        </Col>
        <Col xs={6} lg={6} sm={6} className="mb-4">
          <div className="portfolio-item">
            <a
              className="portfolio-link"
              data-bs-toggle="modal"
              href="#portfolioModal1"
            >
              <div className="portfolio-hover">
                <div className="portfolio-hover-content">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                className="img-fluid rounded"
                src={Image4}
                alt="Venue Club"
              />
            </a>
          </div>
        </Col>
      </Row>
      <div className="btn-more">
      <Button navigate={handleNavigation} />
      </div>
    </Container>
  );
};

export default HomeCards;
