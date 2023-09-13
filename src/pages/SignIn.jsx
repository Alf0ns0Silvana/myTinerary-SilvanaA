import { useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { GoogleSignin } from "../components/GoogleSignin.jsx";
import { user_login } from "../store/actions/userActions";

const SignIn = () => {
  const store = useSelector (store => store.userReducer)
  console.log('viene del store', store);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  })
  const handleInput = (e) => {

    setFormData((formData)=> ({...formData,[e.target.name]:e.target.value}))
     console.log(formData);
  }

  const dispatch = useDispatch();

  const handleSignIn =  async (e) => { 
    e.preventDefault();
    try {
      dispatch(user_login({
        data:formData
      }))
    } catch (error) {
      console.log('Error', error );
    }
  } 

   const isLoggedIn = useSelector((store) => store.userReducer.isLoggedIn);
   const user = useSelector((store) => store.userReducer.user);
   console.log(user)

  return (
    <div className="container">
       {isLoggedIn ? (
        <div className="signUp">
          {user && user.img && (
            <img className="user-foto-logged" src={user.img} alt="Foto usuario" />
          )}
        </div>
      ) : (
      <div className="singIn">
        <h2 className='pages-subtitles'>Welcome back !</h2>
          <div className='container'>
            <div className='window'>
              <div className='overlay'></div>
              <div className='content'>
                <div className='subtitle'>Before using our services you need to login</div>
                <div className='input-fields'>
                <input onChange={handleInput} name="name" type='text' placeholder='Name' className='input-line full-width'></input>
                  <input onChange={handleInput} name="email" type='email' placeholder='Email' className='input-line full-width'></input>
                  <input onChange={handleInput} name="password" type='password' placeholder='Password' className='input-line full-width'></input>
                </div>
                <div className="container-buttons"><button onClick={handleSignIn} type="submit" className='ghost-round full-width'>Login</button>or
                <GoogleSignin/>
                </div>
              </div>
            </div>
          </div>
      </div> )}
    </div>
  );
};

export default SignIn