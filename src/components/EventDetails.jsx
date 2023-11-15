import React from 'react';
import image from "../assets/images/club1.png";
import EventCards from "./EventCards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const eventCards = [
    { img: image, alt: 'img1' },
]

const EventDetails = () => {
    return (
        <section id="eventDetails" className=''>
            <Container className='py-5'>
                <div className='row'>
                    <div className='col-10'> {/* Adjust this value as needed */}
                        <EventCards cards={eventCards} />
                    </div>
                    <div className='col-10'> {/* Adjust this value as needed */}
                        <h2 className='text-white'>Accidentally Wes Anderson: The Exhibition</h2>
                    </div>
                    <div className='col-10'>
                        <div className='conent-detail'>
                            <span className='text-white'>Description:</span> <span className='event-detail'>Event Detail Description</span>
                            <br />
                            <span className='text-white'>Location:</span> <span className='event-detail'>Rruga Test Event 123</span>
                        </div>
                    </div>
                </div>


            </Container>
        </section>
    )
}

export default EventDetails