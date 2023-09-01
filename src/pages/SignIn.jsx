import { useDispatch, useSelector  } from "react-redux";
import { user_photo } from "../store/actions/userActions";

const SignIn = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.userReducer.isLoggedIn);

  const handleSignIn = () => {
    console.log("handleSignIn llamado");
    const user = {
      photo: 'https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg',
      name:'Alexa'
    }
    dispatch(user_photo(user))
  }
  
  const photo = useSelector(store =>store.userReducer.photo)
  const user_name = useSelector(store =>store.userReducer.name)

  return (
    <div className="container">
       {isLoggedIn ? (
        <div className="signUp">
          <h2 className="pages-subtitles">Welcome, {user_name}!</h2>
          <img className="user-foto-logged" src={photo} alt="Foto usuario" />
        </div>
      ) : (
      <div className="singIn">
        <h2 className='pages-subtitles'>Sign in to start travel !</h2>
          <div className='container'>
            <div className='window'>
              <div className='overlay'></div>
              <div className='content'>
                <div className='welcome'>Hello There!</div>
                <div className='subtitle'>Before using our services you need to login or create an account.</div>
                <div className='input-fields'>
                  <input type='email' placeholder='Email' className='input-line full-width'></input>
                  <input type='password' placeholder='Password' className='input-line full-width'></input>
                </div>
                <div className="container-buttons"><button onClick={handleSignIn} type="submit" className='ghost-round full-width'>Login</button>or
                <button type="submit" className='ghost-round media-width'>Create Acount</button></div>
              </div>
            </div>
          </div>
      </div> )}
    </div>
  );
};

export default SignIn