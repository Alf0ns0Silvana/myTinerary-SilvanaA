import Vector from '/Vector.png'
import Link from './Links'

const Header = () => {
    const links = [
        {title:'Home', to:'/home'},
        {title:'Cities', to:'/cities'},
        {title:'About us', to:'/aboutus'},
        {title:'Sign In', to:'/signin'}
      ]
  return (
    <header className='header'>
        <h1>My Tinerary</h1>
        <nav className='nav'>
        {links.map((link) => (<Link key={link.title} title={link.title} to={link.to}/>))}
        <button className='login_btn'> <img src={Vector} alt="Icon login" />Login</button>
        </nav>
  </header>
  )
}

export default Header