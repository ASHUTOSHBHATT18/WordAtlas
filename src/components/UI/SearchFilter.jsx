export const SearchFilter = ({ search, setSearch, region, setRegion,countryData,setCountryData }) => {

    const sortCountries=(value)=>{
        const sortCountry =[...countryData].sort((a,b)=>{
            return value==="asc" ?
            a.name.common.localeCompare(b.name.common):
            b.name.common.localeCompare(a.name.common);
        });
        setCountryData(sortCountry);
    }

    return (
        <div className="search-bar">
            
            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} />

            <button className="sort-btn" onClick={()=>sortCountries("asc")}>ASC</button>
            <button className="sort-btn" onClick={()=>sortCountries("dse")}>DSE</button>

            <select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="all">All Regions</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    );
}