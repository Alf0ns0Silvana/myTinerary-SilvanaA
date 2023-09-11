import { createReducer } from '@reduxjs/toolkit';
import { user_login, user_photo, user_token } from '../actions/userActions';

const initialState = {
    user: null,
    token: null,
    isLoggedIn: null
}
const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo,(state, action) => {
            return {
                ...state,
                photo: action.payload.photo,
                name: action.payload.name
            }
        }) 
        .addCase(user_login.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                token: action.payload.token,
                isLoggedIn: true,
            }
        })
        .addCase(user_token, (state, action) => {
            return {
                ...state,
                user: action.payload.user,
                isLoggedIn: true
            }
        })
)

export default userReducer;