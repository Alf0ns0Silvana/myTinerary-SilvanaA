import React from 'react'
import Cardcities from '../components/Cardcities'
import axios from 'axios'
import { useEffect, useState, useRef } from 'react'
import {Link} from 'react-router-dom'

const Cities = () => {
    const [cities, setCities] = useState([]);

    let inputSearch = useRef(); 

    useEffect (() => {
      axios.get('http://localhost:8000/api/cities?name=')
        .then(response => setCities(response.data.cities))
        .catch(err => console.log(err))
    }, []);

    const handleSearch = async () => {

      console.log(inputSearch.current.value)
        const name = inputSearch.current.value

        try {
          const response = await axios.get( `http://localhost:8000/api/cities?name=${name}`)
          setCities(response.data.cities)
        } catch (error) {
            if(error.response.status === 404) {
              console.log('Not found city')
              setCities([])
            } else {
              console.log(error);
            }
        }
    }

    return (
      <div>
        <h2 className='pages-subtitles'>Cities</h2>
          <div className="search_section">
            <input ref={inputSearch} className='search' type="text" placeholder='Ex: kuwuait'/>
            <button onClick={handleSearch} className='btn_search'>Search</button>
          </div>
        {
          cities?.length > 0
          ? cities?.map(city => (
              <Link key={city._id} to={`/cities/${city._id}`}>
                <Cardcities city={city} />
              </Link>
            )) 
            : <h3 className='msj_not_found'>Sorry, we don't have information about that city 😞 </h3>
        }
      </div>
  )
}

export default Cities