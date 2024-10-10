/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getOneCountyDetails } from "../assets/Api/postApi";
import Loading from "../UI/Loading";

const CountryDetails = () => {
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  const param = useParams();
  const countryname = param.id.replace(":", "");

  useEffect(() => {
    startTransition(async () => {
      const countryDetails = await getOneCountyDetails(countryname);
      setCountry(countryDetails.data[0]);
    });
  }, []);

  console.log(country);

  if (isPending || !country) {
    return <Loading />;
  }

  return (
    <section className="singleCountry">
      <div className="container">
        <div className="card-container">
          <div className="imgSection">
            <div>
              <img src={country.flags.svg} alt="Flag" />
            </div>
          </div>
          <div className="info-single-country">
            <h3>{country.name.common}</h3>
            <p>
              Native Name:{" "}
              <span>
                {Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(", ")}
              </span>
            </p>
            <p>
              Population: <span>{country.population.toLocaleString()}</span>
            </p>
            <p>
              Region: <span>{country.region}</span>
            </p>
            <p>
              Sub Region: <span>{country.subregion}</span>
            </p>
            <p>
              Capital: <span>{country.capital}</span>
            </p>
            <p>
              Top Level Domain: <span>{country.tld[0]}</span>
            </p>
            <p>
              Currencies: <span>
                {`${Object.keys(country.currencies)
                  .map((currElm) => country.currencies[currElm].name)
                  .join(", ")} (${Object.keys(country.currencies)
                  .map((currElm) => country.currencies[currElm].symbol)
                  .join(", ")})`}
              </span>
            </p>
            <p>
              Languages:{" "}
              <span>
                {Object.keys(country.languages)
                  .map((curr) => country.languages[curr])
                  .join(", ")}
              </span>
            </p>
            <div className="backSectionDetails">
              <NavLink to="/country" className="backBtn">Back</NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
