import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { user_token } from './store/actions/userActions';
import Header from '../src/components/Header';

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((store) => store.userReducer.isLoggedIn);
  
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (token && user) {
      let configs = { headers: { 'Authorization': `Bearer ${token} ` } };
      axios.post('http://localhost:8000/api/auth/token', null, configs)
        .then(response => {
          dispatch(user_token(response.data.user));
        })
        .catch(err => console.log(err));
    }
    
  }, []);

  return (
    <RouterProvider router={router}>
      <Header isLoggedIn={isLoggedIn} />
    </RouterProvider>
  );
}

export default App;
