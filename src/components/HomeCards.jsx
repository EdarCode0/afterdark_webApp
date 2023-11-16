import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeCards = ({ cardData }) => {

  return (
      <Row>
        {cardData.map((card, index) => (
          <Col key={index} xs={6} lg={6} sm={6} className="mb-4">
            <div className="portfolio-item">
              <a className="portfolio-link" data-bs-toggle="modal" href={card.modalId}>
                <div className="portfolio-hover">
                  <div className="portfolio-hover-content">
                    <i className="fas fa-plus fa-3x"></i>
                  </div>
                </div>
                <img className="img-fluid rounded" src={card.img} alt={card.alt} />
                <div className="card-title text-white">
                  <h1>{card.title}</h1>
                </div>
              </a>
            </div>
          </Col>
        ))}
      </Row>
  );
};

export default HomeCards;
