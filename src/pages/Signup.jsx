import { useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { user_signup } from "../store/actions/userActions";

const SignUp = () => {
    const store = useSelector (store => store.userReducer)
    const user = useSelector((store) => store.userReducer.user);
    console.log(user)

    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        email: '',
        password: '',
        img: '',
        select: ''
    })

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData ((formData) => ({
            ...formData,
            [name]:value,
            
        }));

        console.log(formData); 
        console.log(formData.select);
    }
    const dispatch = useDispatch();

    const handleSignUp =  async (e) => { 
        e.preventDefault(); 
        try {
        dispatch(user_signup({
            data:formData
        }))
        } catch (error) {
        console.log('Error', error );
        }
    }

    return (
        <div className="container"> 
        <h2 className='pages-subtitles'>Hello there !</h2>
            <div className="container-signup">
                    <div className='container'>
                        <div className='overlay-signup'></div>
                        <div className='content'>
                            <div className='subtitle'>Before using our services you need to create an account.</div>
                                <div className='input-fields-signup'>
                                <input onChange={handleInputChange} name="name" type='text' placeholder='Name' className='input-line'></input>
                                <input onChange={handleInputChange} name="lastname" type='text' placeholder='Lastname' className='input-line'></input>
                                <input onChange={handleInputChange} name="email" type='email' placeholder='Email' className='input-line'></input>
                                <input onChange={handleInputChange} name="password" type='password' placeholder='Password' className='input-line '></input>
                                <input onChange={handleInputChange} name="img" type='text' placeholder='Url-img' className='input-line'></input>
                                <select value={formData.select} onChange={handleInputChange} name="select" type="select" className='input-line'>
                                    <option value="">Country</option>
                                    <option value="Argentina">Argentina</option>
                                    <option value="Brasil">Brasil</option>
                                    <option value="España">España</option>
                                    <option value="Rusia">Rusia</option>
                                    <option value="China">China</option>
                                    <option value="Colombia">Colombia</option>
                                    <option value="México">México</option>
                                    <option value="Estados Unidos">Estados Unidos</option>
                                </select>
                                </div>
                                <div className="container-buttons"><button  onClick={handleSignUp} type="submit" className='ghost-round full-width'>Signup</button>or
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      );
}
export default SignUp