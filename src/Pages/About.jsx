import { useEffect, useState } from "react"
import countryData from "../assets/Api/countryData.json"

const About = () => {
  const [countryCard, setCountryCard] = useState([])
  useEffect(() => {
    setCountryCard(countryData)
  },[])
  return <section className="about-section">
    <div className="container">
      <h2>Here are the Interesting Facts <br />we’re proud of</h2>
      <div className="card-cards-container">
        {countryCard.map((country) => {
          const {id, countryName, capital, population, interestingFact} = country
          return <div key={id} className="about-card">
            <h3>{countryName}</h3>
            <p className="capital">Capital: <span>{capital}</span></p>
            <p className="population">Population: <span>{population}</span></p>
            <p className="fact">Intresting Fact: <span>{interestingFact}</span></p>
        </div>
        })}
      </div>
    </div>
  </section>
}

export default About
