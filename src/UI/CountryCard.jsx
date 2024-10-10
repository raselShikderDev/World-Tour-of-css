/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom"

const CountryCard = ({country}) => {
   const { capital, flags, name, population, region } = country
  return <li className="country-Card">
                <img src={flags.svg} alt={flags.alt} />
                <div className="card-text">
                  <h2>{name.common }</h2>
                  <p className="population">
                    Population: <span>{population}</span>
                  </p>
                  <p className="region">
                    Region: <span>{region}</span>
                  </p>
                  <p className="capital">
                    Capital: <span>{capital}</span>
                  </p>
                  <div className="btnMore">
                    <NavLink to={`/country/:${name.common}`} className="exploreBtn">Explore More</NavLink>
                  </div>
                </div>
              </li>
}

export default CountryCard
