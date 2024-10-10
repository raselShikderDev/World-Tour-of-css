import { useEffect, useState, useTransition } from "react";
import { getCountries } from "../assets/Api/postApi";
import Loading from "../UI/Loading";
import CountryCard from "../UI/CountryCard";
import FilterSearch from "../UI/FilterSearch";
const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [contries, setContries] = useState([]);
  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountries();
      setContries(res.data);
      window.scrollTo(0, 0);
    });
  }, []);

  // Search Logic & function handeling
  const handleSearch = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true;
  };

  // Logic & Filter function handeling
  const handleFilter = (country) => {
    if (filter) {
      if (filter === "all") {
        return true;
      }
      return country.region.toLowerCase() === filter.toLowerCase();
    }
  };

  // Main Logic for Search & Filter
  const filterdCountries = contries.filter(
    (country) => handleSearch(country) && handleFilter(country)
  );

  if (isPending) {
    return <Loading />;
  }
  console.log(filter, search);
  return (
    <section className="countrySection">
      <div className="container">
        <h2>Countries facts</h2>
          <FilterSearch
            filter={filter}
            setFilter={setFilter}
            search={search}
            setSearch={setSearch}
          />
        <ul className="country-Cards">
          {filterdCountries.map((country, index) => {
            return <CountryCard key={index} country={country} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Country;
