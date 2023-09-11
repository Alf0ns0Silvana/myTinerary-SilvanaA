import { useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { user_login } from "../store/actions/userActions";

const SignUp = () => {
    // const store = useSelector (store => store.userReducer)
    // const isLoggedIn = useSelector((store) => store.userReducer.isLoggedIn);
    // const user = useSelector((store) => store.userReducer.user);
    // console.log(user)

    return (
        <div className="container"> 
            <div className="container">
                <div className="signUp">
                {/* {user && user.img && (
                <img className="user-foto-logged" src={user.img} alt="Foto usuario" />
            )} */}
                </div>
                <div className="singIn">
                    <h2 className='pages-subtitles'>Hello there !</h2>
                    <div className='container'>
                        <div className='overlay'></div>
                        <div className='content'>
                            <div className='subtitle'>Before using our services you need to create an account.</div>
                                <div className='input-fields'>
                                <input name="name" type='text' placeholder='Name' className='input-line full-width'></input>
                                <input name="lastname" type='text' placeholder='Lastname' className='input-line full-width'></input>
                                <input name="email" type='email' placeholder='Email' className='input-line full-width'></input>
                                <input name="password" type='password' placeholder='Password' className='input-line full-width'></input>
                                <input name="img" type='text' placeholder='Url-img' className='input-line full-width'></input>
                                </div>
                                <div className="container-buttons"><button type="submit" className='ghost-round full-width'>Login</button>or
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
      );
}
export default SignUp