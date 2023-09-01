import { createReducer } from '@reduxjs/toolkit';
import { user_photo } from '../actions/userActions';

const initialState = {
    name: 'Pocahontas',
    photo: 'https://thumbs.dreamstime.com/b/mujer-feliz-que-destaca-con-ambas-manos-39096339.jpg',
    isLoggedIn: false
}
const userReducer = createReducer(initialState,
    (builder) => builder
        .addCase(user_photo,(state, action) => {
            return {
                ...state,
                photo: action.payload.photo,
                name: action.payload.name,
                isLoggedIn: true
            }
        }
    )   
)

export default userReducer;