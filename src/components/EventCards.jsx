const EventCards = ({ cards }) => {
    return (

        <div className="row">
            {
                cards.map((card, index) =>
                    <div key={index} className="event-cards col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src={card.img}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt={card.alt}
                        />
{/* 
                        <img
                            src={card.img}
                            className="w-100 shadow-1-strong rounded mb-4"
                            alt={card.alt}
                        /> */}
                    </div>
                )
            };
        </div>

    )
}

export default EventCards