import Vector from '/Vector.png'
import { Link } from 'react-router-dom';
// import Link from './Links'

const Header = () => {
    const links = [
        {title:'Home', to:'/'},
        {title:'Cities', to:'/cities'},
        {title:'About us', to:'/aboutus'},
        {title:'Sign In', to:'/signin'}
      ]
  return (
    <header className='header'>
        <h1>My Tinerary</h1>
        <nav className='nav'>
        {links.map((link) => (<Link key={link.title} to={link.to}>{link.title}</Link>))}
        <button className='login_btn'> <img src={Vector} alt="Icon login" />Login</button>
        </nav>
  </header>
  )
}

export default Header