import Vector from '/Vector.png'
import './App.css'

function App() {
  return (
    <>
      <header className='header'>
        <h1>My Tinerary</h1>
        <nav className='nav'>
          <a href="">Home</a>
          <a href="" target='blank'>Cities</a>
          <button className='login_btn'> <img src={Vector} alt="Icon login" />Login</button>
        </nav>
      </header>
      <main>
        <div className="hero">
          <div className="hero-info">
            <h2 className='hero-title'>Find the perfect destination</h2>
            <p className='hero-subtitle'>Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <button className='view-more'>View more</button>
          </div>
          <div className="hero-img">
            <img src="" alt="imagen-paisaje" />
          </div>
        </div>

      </main>
  <footer className="footer">
    <div className="column1">
      <span className='span1'>
        Explore without limits, travel with us.
      </span>
      <span className='span2'>
        My Itinerary
      </span>
    </div>
    <div className="column2">
      <a href="#">Home</a>
      <a href="#">Login</a>
      <a href="#">Cities</a>
      <a href="#">Features</a>
    </div>
    <div className="column3">
      <div className="column-title">Contact Us</div>
      <div className="social-icons">
        <span className="social-icon"></span>
        <span className="social-icon"></span>
        <span className="social-icon"></span>
      </div>
    </div>
  </footer>
    </>
  )
}

export default App
