import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const slides = [
        {
          images: [
            { src: "./Ushuaia-TdF.jpg", city: "Ushuaia, Tierra del Fuego" },
            { src: "./Santiago-Ch.jpg", city: "Santiago, Chile" },
            { src: "./BoraBora-PF.jpg", city: "Bora Bora, Polinesia Francesa" },
            { src: "./Rosario-Ar.jpg", city: "Rosario, Argentina" },
          ],
        },
        {
          images: [
            { src: "./Bogota-Co.jpg", city: "Bogotá, Colombia" },
            { src: "./España-Es.jpg", city: "España" },
            { src: "./Grecia-At.jpg", city: "Atenas, Grecia" },
            { src: "./Italia-Nap.jpg", city: "Nápoles, Italia" },
          ],
        },
        {
          images: [
            { src: "./LasVegas-EU.jpg", city: "Las Vegas, Estados Unidos" },
            { src: "./Oporto-Port.jpg", city: "Oporto, Portugal" },
            { src: "./Paris-Fr.jpg", city: "París, Francia" },
            { src: "./RiodeJaneiro-Br.jpg", city: "Río de Janeiro, Brasil" },
          ],
        },
      ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };
    const prevSlide = () => {
      setCurrentSlide((prevSlide) =>
        prevSlide === 0 ? slides.length - 1 : prevSlide - 1
      );
    };
    useEffect(() => {
      const interval = setInterval(nextSlide, 4000);
      return () => clearInterval(interval);
    }, []);

    return (
        <div className="container-home">
          <div className="hero">
            <div className="hero-info">
              <h2 className="hero-title">Find the perfect destination</h2>
              <p className="hero-subtitle">
                Our app will help you find the perfect path for your next trip. With an
                easy-to-use interface and a host of itinerary options, planning your next
                trip has never been easier.
              </p>
              <Link to='/signin' className="view-more">View more</Link>
            </div>
            <div className="hero-img">
                <img src="./hero-img.png" alt="Logo-myTinerary" />
            </div>
          </div>
          <div className="container-carousel">
            <h2 className="text-carousel">Popular MYTINERARIES!</h2>
            <div className="carousel">
              <button onClick={prevSlide}>Prev</button>
              <div className="carousel-container">
                {slides[currentSlide].images.map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <img src={image.src} alt={`imagen-${index + 1}`} />
                    <h3 className="text-city">{image.city}</h3>
                  </div>
                ))}
              </div>
              <button onClick={nextSlide}>Next</button>
            </div>
          </div>
        </div>
      );
    };
    
export default Home
