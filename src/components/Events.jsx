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
    </section>

  )
}

export default Events