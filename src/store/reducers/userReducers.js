import { createReducer } from '@reduxjs/toolkit';
import { user_login, user_photo } from '../actions/userActions';

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
)

export default userReducer;