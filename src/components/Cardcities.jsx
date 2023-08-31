import { Link } from 'react-router-dom';

const Cardcities = ({city, showDetailsButton = true}) => {
  return (
    <div className="container-cards">
        <div className="city-card">
          <div className="city_detail">
            <img className="city-card-image" src={city.img} alt="Imagen de la ciudad"/>
              <h3 className="city-card-title">{city.name}</h3>
              <span className="city-country">{city.country}</span>
                <div className="city-card-description">
                  <p className="">{city.description}</p>
                  <span>{city.departureDateTime}</span>
                </div>
                {showDetailsButton && (
                <button className="city-card-button">See details
                    <Link to={`/CityDetails/${city._id}`}></Link>
                </button>
            )}
          </div>
        </div>
    </div>
  )
}

export default Cardcities