import React from 'react'
import Cardcities from '../components/Cardcities'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'

const Cities = () => {
    const [cities, setCities] = useState([]);

    useEffect (() => {
      axios.get('http://localhost:8000/api/cities?name=')
        .then(response => setCities(response.data.cities))
        .catch(err => console.log(err))
    }, []);
    
    const handleInputChange = async (city) => {
      console.log(city.target.value) 
        try {
          const response = await axios.get( `http://localhost:8000/api/cities?name=${city.target.value}`) // este reeemplaza .then
          setCities(response.data.cities)
        } catch (error) {
          console.log(error)
        }
    }

    return (
      <div>
        <h2 className='pages-subtitles'>Cities</h2>
        <input onChange={handleInputChange} className='search' type="text" placeholder='Ex:  kuwuait'/>
        {
          cities?.map(city => (
            <Link key={city._id} to={`/cities/${city._id}`}>
              <Cardcities city={city} />
            </Link>
          ))
        }
      </div>
  )
}

export default Cities