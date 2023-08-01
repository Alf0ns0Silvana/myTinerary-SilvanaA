import { useState } from 'react'
import Vector from '/Vector.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='header'>
      <h1>My Tinerary</h1>
          <nav className='nav'>
          <a href="">Home</a>
          <a href="">Cities</a>
          <button className='login_btn'> <img src={Vector} alt="Icon login" />Login</button>
          </nav>
      </header>
      <main>
      </main>
      <footer className="card">
        <p>
          Example
        </p>
      </footer>
    </>
  )
}

export default App
