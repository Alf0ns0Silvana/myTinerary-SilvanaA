import { useState, useEffect } from "react";
const Home = () => {
    const slides = [
      ["./Ushuaia-TdF.jpg", "./Santiago-Ch.jpg", "./BoraBora-PF.jpg", "./Rosario-Ar.jpg"],
      ["imagen5.jpg", "imagen6.jpg", "imagen7.jpg", "imagen8.jpg"],
      ["imagen9.jpg", "imagen10.jpg", "imagen11.jpg", "imagen12.jpg"],
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
      const interval = setInterval(nextSlide, 10000);
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
            <button className="view-more">View more</button>
          </div>
          <div className="hero-img">
          </div>
        </div>
        <div className="carousel">
              <button onClick={prevSlide}>Prev</button>
              <div className="carousel-container">
                {slides[currentSlide].map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <img src={image} alt={`imagen-${index + 1}`} />
                  </div>
                ))}
              </div>
              <button onClick={nextSlide}>Next</button>
            </div>
      </div>
    );
  };

export default Home