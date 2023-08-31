import {createAction} from '@reduxjs/toolkit';

export const user_photo = createAction('user_photo', (obj) => {
    console.log(obj)
    
    return {
        payload: {
            photo:obj.photo, // este obj viene de la vista: signin.jsx
            name:obj.name
        }
    }
})

//este despacha una action, va al reducer que es el q hara 
//la logica para modificar el store,
