import { Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { user_logout } from '../store/actions/userActions';
import { useState } from 'react';

const Header = () => {
    const isLoggedIn = useSelector((store) => store.userReducer.isLoggedIn);
    const user = useSelector((store) => store.userReducer.user);
    const dispatch = useDispatch();

    const [userLoggedOut, setUserLoggedOut] = useState(false);

    const handleLogout = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      localStorage.removeItem(user.img);
      dispatch(user_logout());
      console.log('datos user y token borrados')
      setUserLoggedOut(true);
    };
    
  return (
    <header className='header'>
      <h1>My Tinerary</h1>
      <nav className='nav'>
      {isLoggedIn && user && !userLoggedOut ? (
          <div className="user-info">
            <img className="user-foto-logged" src={user.img} alt="Foto usuario" />
            <Link to='/' className='btn_logout' onClick={handleLogout}>Sign out</Link>
            <Link to='/aboutus'>About us</Link>
            <Link to='/cities'>Cities</Link>
            <Link to='/'>Home</Link>
          </div>
        ) : (
          <>
            <Link to='/'>Home</Link>
            <Link to='/cities'>Cities</Link>
            <Link to='/aboutus'>About us</Link>
            <Link to='/signin'>Signin</Link>
            <Link to='/signup'>Create account</Link>
          </>
        )}
      </nav>
    </header>
  );
};



export default Header