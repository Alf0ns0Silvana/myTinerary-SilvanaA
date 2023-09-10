import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const user_photo = createAction('user_photo', (obj) => {
    console.log(obj)
    return {
        payload: {
            photo:obj.photo, 
            name:obj.name
        }
    }
})

export const user_login = createAsyncThunk('user_login', async (obj) => {
    try {
        const {data} = await axios.post('http://localhost:8000/api/auth/signin', obj.data)
        console.log(data)
        localStorage.setItem('token', JSON.stringify(data.response.token))
        localStorage.setItem('user', JSON.stringify(data.response.user))
            return {
                user: data.response.user,
                token: data. response.token
                // isLoggedIn: true,
            }
        
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
})
