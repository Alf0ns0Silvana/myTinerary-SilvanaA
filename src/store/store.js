import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducers.js'
import cityReducer from './reducers/cityReducers.js'

export const store = configureStore({
    reducer:{ 
        userReducer: userReducer,
        cityReducer: cityReducer
    }
}) 

