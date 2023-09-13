import axios from "axios";
import { useRef } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
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
        const userResponse = await axios.post('http://localhost:8000/api/auth/google', data);
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
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                { type: 'standard', shape: 'rectangular', theme: "outline", size: "large", text:"signin_with"}
            );
        }
    }, [ ])

    return (
        <div className="btn_goole" ref={googleButton}></div>
    )

}