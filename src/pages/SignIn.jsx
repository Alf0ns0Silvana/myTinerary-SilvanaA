import { useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { user_login } from "../store/actions/userActions";

const SignIn = () => {
  const store = useSelector (store => store.userReducer)
  console.log('viene del store', store);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  }) // una vez que desde la 29 obtuve mis datos del form los guardo aca y esos values
    // los manejo con el handleInput 
  const handleInput = (e) => {
    // console.log(e.target.name, e.target.value);
    setFormData((formData)=> ({...formData,[e.target.name]:e.target.value}))
     console.log(formData);
  }  // Obtengo los datos de mis inputs

  const dispatch = useDispatch();

  const handleSignIn =  async (e) => {  // console.log("handleSignIn llamado"); 
    e.preventDefault();
    try {
      dispatch(user_login({
        data:formData
      }))
    } catch (error) {
      console.log('Error', error );
    }
    // esta funcion para obtener los datos de mi form (arriba 12) una vez con los datos hago
    //la peticion a mi back para el signin, a traves de una action (user_login, en user.actions)
    //con dispatch que recibe los datos del formulario (user, email) q se envian por axios.post,
    //cuando eso se ejecuta me envia una response {data} (desestructurada), token y user, los guarda
    //en localStorage y retorna ese user y ese token.
  } 

   const isLoggedIn = useSelector((store) => store.userReducer.isLoggedIn);
   const user = useSelector((store) => store.userReducer.user);
   console.log(user)
   
  return (
    <div className="container">
       {isLoggedIn ? (
        <div className="signUp">
          <h2 className="pages-subtitles">Welcome</h2>
          {user && user.img && (
            <img className="user-foto-logged" src={user.img} alt="Foto usuario" />
          )}
        </div>
      ) : (
      <div className="singIn">
        <h2 className='pages-subtitles'>Hello there !</h2>
          <div className='container'>
            <div className='window'>
              <div className='overlay'></div>
              <div className='content'>
                <div className='subtitle'>Before using our services you need to login or create an account.</div>
                <div className='input-fields'>
                  <input onChange={handleInput} name="email" type='email' placeholder='Email' className='input-line full-width'></input>
                  <input onChange={handleInput} name="password" type='password' placeholder='Password' className='input-line full-width'></input>
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