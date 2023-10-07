import React from 'react';
import Cardcities from '../components/Cardcities';
import { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { filtered_cities, get_cities } from '../store/actions/cityActions';
import Swal from 'sweetalert2';

const Cities = () => {
    const cities = useSelector((store) => store.cityReducer.cities);
    const dispatch = useDispatch();
    let inputSearch = useRef(); 

    useEffect (() => {
     dispatch(get_cities())
    }, []);

    const handleSearch = async () => {
      const result = await Swal.fire({
        title: "Confirm search?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: `Yes`,
        denyButtonText: `Go back`,
      })
      if (result.isConfirmed) {
        Swal.fire('Search ok','', 'success')
        dispatch(filtered_cities({
          name: inputSearch.current.value
        }))
      } else if (result.isDenied) {
        Swal.fire("Search cancelled", "", "error")
      }
    }
    
    return (
      <div>
        <h2 className='pages-subtitles'>Cities</h2>
          <div className="search_section">
            <input ref={inputSearch} className='search' type="text" placeholder='Ex: kuwuait'/>
            <button type='submit' onClick={handleSearch} className='btn_search'>Search</button>
          </div>
        {
          cities?.length > 0
          ? cities?.map(city => (
              <Link key={city._id} to={`/cities/${city._id}`}>
                <Cardcities city={city} />
              </Link>
            )) 
            : <h3 className='msj_not_found'>Sorry, not found city 😞 </h3>
        }
      </div>
  )
}

export default Cities