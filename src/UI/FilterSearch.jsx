/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const FilterSearch = ({ filter, setFilter, search, setSearch }) => {
  const handleSearchInput = (e) => { 
  e.preventDefault()
  setSearch(e.target.value)
  }

  const handleSelectFilter = (e) => {
    e.preventDefault()
  setFilter(e.target.value)
  }
  
   return <div className="filter_Search_Section">
    <div className="infutFeild">
     <input className="searchFeild" value={search} onChange={handleSearchInput} type="text" placeholder="Country Name" />
   </div>
   <div className="filterFeild">
       <select name="region" id="region" onChange={handleSelectFilter}>
        <option value="all">All</option>
         <option value="asia">Asia</option>
         <option value="africa">Africa</option>
         <option value="america">America</option>
         <option value="oceania">Oceania</option>
         <option value="europe">Europe</option>
    </select>
   </div>
   </div>
 }
 
 export default FilterSearch
 