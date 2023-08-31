import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cardcities from '../components/Cardcities';

const CityDetails = () => {
    const [city, setCity] = useState({});
    const [itineraries, setItineraries] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      axios.get(`http://localhost:8000/api/cities/${id}`)
        .then(response => { setCity(response.data.city);
          setItineraries(response.data.city.Itinerary);
            console.log(response.data.city.Itinerary)
          // me trae bien todos los datos
        })
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
                <Cardcities city={city} key={itineraries._id} showDetailsButton={false}/>
                <div className="itineraries">
                  {itineraries.length > 0 ? (
                    <div>
                      {itineraries.map(Itinerary => (
                        <div className="container-itinerary">
                          <div className="itinerarie-title" key={Itinerary._id}>
                              <h4>{Itinerary.name}</h4><hr />
                          </div>
                          <div className="itinerarie-info">
                              <div className="price-duration">
                                <p>Price: ${Itinerary.price}</p>
                                {/* agregar los billetitos  */}
                                <p>Duration: {Itinerary.duration} days</p>
                              </div> 
                              <div className="user">
                                {/* aca aun no llame al user */}
                              </div>
                              <div className="likes_hashtags">
                                <span>0</span>
                                <img src="../likes.png" alt="Likes" />
                                <div className="hashtags">
                                  <p>{Itinerary.hashtags.map(tag => `#${tag}`).join(', ')}</p> 
                                </div>
                              </div>
                                {/* <p>Comments: {Itinerary.comments}</p> */}
                          </div>
                        </div>
                      ))}
                    </div>                  
                      ) : (
                          <p className="sorry"> Sorry, no itineraries available yet for this city. </p>
                      )}
                </div>
      </div>
    );
  };
  // chequear porque salen warnings de los anchors
  export default CityDetails; 