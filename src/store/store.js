import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducers'

export const store = configureStore({
    reducer:{      //van a ser las funciones que van a modificar mi estado
        userReducer: userReducer
    }
}) 

