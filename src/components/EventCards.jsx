import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventCards = ({ cards }) => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 800,
        });
    }, []);

    const redirectToDetails = () => {
        navigate('/event-details');
    };

    return (
        <div className="row">
            {cards.map((card, index) =>
                <div
                    key={index}
                    className="col-lg-4 col-md-12 mb-4 mb-lg-0"
                    data-aos="zoom-in"
                    data-aos-delay={index * 500}
                    onClick={redirectToDetails}

                >
                    <div className="event-cards event-card-hover">
                        <img
                            src={card.img}
                            className="w-100 w-100 h-100 shadow-1-strong rounded mb-4"
                            alt={card.alt}
                        />

                    </div>
                </div>
            )}
        </div>
    );
}

export default EventCards;
