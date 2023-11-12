import EventCards from "./EventCards";

const Events = () => {

  const eventCards = [
    { img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt: 'img1' },

    { img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt: 'img1' },

    { img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt: 'img1' },

    { img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt: 'img1' },

    { img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt: 'img1' },

    { img: "https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp", alt: 'img1' },


  ]
  return (
    <section className='container'>
      <div className='mt-5'>
        <h1 className='text-white'>Our Events</h1>
      </div>
      <div id="myBtnContainer">
        <button className="btn active text-white" > Show all</button>
        <button className="btn text-white" > Nature</button>
        <button className="btn text-white"> Cars</button>
        <button className="btn text-white" > People</button>
      </div>
      <a href="#">
        <EventCards cards={eventCards} />
      </a>

      {/* <div className="row">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />

          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain1.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Wintry Mountain Landscape"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain2.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Mountains in the Clouds"
          />

          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Boat on Calm Water"
          />
        </div>

        <div className="col-lg-4 mb-4 mb-lg-0">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Waves at Sea"
          />

          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
            className="w-100 shadow-1-strong rounded mb-4"
            alt="Yosemite National Park"
          />
        </div>
      </div> */}
    </section>

  )
}

export default Events