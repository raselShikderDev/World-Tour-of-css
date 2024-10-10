import world from "../assets/world.png"
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return <section className="heroSection">
    <div className="container">
      <div className="hero-container grid grid-cols-2">
        <div className="hero-info">
          <h2 className="heroHeader">Explore the World, One Country at a Time.</h2>
          <p>Discover the history, culture, and beauty of every nation. Sort, search, and filter through countries to find the details you need.</p>
          <div>
             <a href="#" className="hero-info-button">Explore More <FaArrowRightLong /></a>
         </div>
        </div>
        <div className="hero-img">
          <div>
            <img src={world} alt="World Image" />
          </div>
        </div>
      </div>
    </div>
  </section>
}

export default Hero
