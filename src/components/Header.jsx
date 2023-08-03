import Vector from '/Vector.png'
function Header () {
  return (
    <header className='header'>
        <h1>My Tinerary</h1>
        <nav className='nav'>
        <a href="">Home</a>
        <a href="" target='blank'>Cities</a>
        <button className='login_btn'> <img src={Vector} alt="Icon login" />Login</button>
        </nav>
  </header>
  )
}

export default Header