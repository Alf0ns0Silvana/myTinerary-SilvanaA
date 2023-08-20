import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cardcities from '../components/Cardcities';

const CityDetails = () => {
    const [city, setCity] = useState({});
    const { id } = useParams();

    useEffect(() => {
      axios.get(`http://localhost:8000/api/cities/${id}`)
        .then(response => setCity(response.data.city))
        .catch(error => console.log(error));
    }, [id]);

    return (
      <div>
            <div className="title-back-btn">
                <h2 className='pages-subtitles'>{city.name}</h2>
                <Link to="/Cities" className="back-city-btn">
                ← Back to cities
                </Link>
            </div>
                <Cardcities city={city} />
      </div>
    );
  };
  
  export default CityDetails;