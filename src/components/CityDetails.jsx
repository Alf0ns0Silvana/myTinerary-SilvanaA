import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import { useEffect, useState } from 'react'
import Cardcities from '../components/Cardcities';
import { useSelector, useDispatch } from "react-redux";
import { user_photo } from "../store/actions/userActions";
import apiUrl from "../api.js";

const CityDetails = () => {
    const [city, setCity] = useState({});
    const [itineraries, setItineraries] = useState([]);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
      axios.get(`${apiUrl}/cities/${id}`)
        .then(response => { setCity(response.data.city);
          setItineraries(response.data.city.Itinerary);
            console.log(response.data.city.Itinerary)

        })
        .catch(error => console.log(error));
    }, [id]);

        const user = {
          photo: 'https://secrecyjewels.es/blog/wp-content/uploads/2022/10/esencia-de-una-persona.jpg',
          name:'Alexa'
        }
        dispatch(user_photo(user))

    const photo = useSelector(store =>store.userReducer.photo)
    const user_name = useSelector(store =>store.userReducer.name)

    const [showActivities, setShowActivities] = useState(false);
    const [activities, setActivities] = useState([]);

    const handleViewMoreClick = () => {
      setShowActivities(!showActivities);
    };

    return (
      <div className="city-itineraries-activities">
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
                        <div className="container-itinerary" key={Itinerary._id}>
                            <div className="itinerarie-title" key={Itinerary._id}>
                                <h4>{Itinerary.name}</h4><hr />
                            </div>
                            <div className="itinerarie-info">
                                <div className="price-duration">
                                  <p>Price: 💵{Itinerary.price}</p>
                                  <p>Duration: {Itinerary.duration} hours</p>
                                </div> 
                                <div className="user">
                                  <span className="user-name">{user_name}</span>
                                  <img className="user-foto" src={photo} alt="Foto usuario" />
                                </div>
                                <div className="likes_hashtags">
                                  <span>0</span>
                                  <img src="../likes.png" alt="Likes" />
                                  <div className="hashtags">
                                    <p>{Itinerary.hashtags.map(tag => `#${tag}`).join(', ')}</p> 
                                  </div>
                                </div>
                            </div>
                          </div>
                      ))}
                        </div>                  
                      ) : (
                          <p className="sorry"> Sorry, no itineraries available yet for this city. </p>
                      )}
                    </div>
                          <div className="activities-panel">
                            <button className="activities_btn" onClick={handleViewMoreClick}>View More</button>
                                {showActivities && (
                                  <div className="activities">
                                    <h3>Activities :</h3>
                                    <p>Under Construction</p>                        
                                  </div>
                                )}
                            {/* <p>Comments: {Itinerary.comments}</p> */}
                          
                </div>
      </div>
    );
  };

export default CityDetails; 








