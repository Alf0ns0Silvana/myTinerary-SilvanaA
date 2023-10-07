import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import Swal from 'sweetalert2';
import apiUrl from '../../api.js';

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
        const {data} = await axios.post(`${apiUrl}/auth/signin`, obj.data)
        console.log(data)
        localStorage.setItem('token',data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))
        Swal.fire({
            title: 'Hello again!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'Ok'
          }) 
            return {
                user: data.response.user,
                token: data.response.token
            }
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        return {
            user: null
        }
    }
})

export const user_signup = createAsyncThunk('user_signup', async (obj) => {
    try {
        const {data} = await axios.post(`${apiUrl}/auth/signup`, obj.data)
        // console.log(data)
        localStorage.setItem('token',data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))
        Swal.fire({
            title: 'Welcome!',
            text: 'Do you want to continue',
            icon: 'success',
            confirmButtonText: 'Ok'
          }) 
            return {
                user: data.response.user,
                token: data.response.token
            }      
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: 'Error!',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        return {
            user: null
        }
    }
})

export const user_logout = createAction('user_logout');

export const user_token = createAction('user_token', (user) => {
    return{
        payload:{
            user
        }
    }
});

export const user_login_google = createAsyncThunk('user_login_google', async (obj) => {
    try {
        const {data} = await ('http://localhost:8000/api/auth/google', obj.data)
        console.log(data)
        localStorage.setItem('token',data.response.token)
        localStorage.setItem('user', JSON.stringify(data.response.user))
            return {
                user: data.response.user,
                token: data.response.token
            }
    } catch (error) {
        console.log(error);
        return {
            user: null
        }
    }
})