import axios from "axios";
import { useRef } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import apiUrl from "../api.js";
import { user_login_google } from "../store/actions/userActions";

export const GoogleSignin = () => {

    const googleButton = useRef();
    const dispatch = useDispatch();

    const handleCredentialResponse = async  (response) => {
        if (response && response.credential) {
        const data = {
            token_id: response.credential
        };
        try {
        const userResponse = await axios.post(`${apiUrl}/auth/google`, data);
        console.log(userResponse, 'user')
        dispatch(user_login_google({
            data: userResponse
        }));
    } catch (error) {
      console.log(error);
    }
  } else {
    console.error('Response or credential is missing.');
  }
}
    useEffect(()=>{
        if(window.google) {
            window.google.accounts.id.initialize({
                client_id:"1037587118664-d483oog51k6un8i2tnetac5olso52ckr.apps.googleusercontent.com",
                //client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT y en .env mismo nombre
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'circle', theme: "outline", size: "large", text:"signin_with"}
            );
        }
    }, [ ])

    return (
        <div  style={{ colorScheme: 'light' }} className="btn-google" ref={googleButton}></div>
    )

}