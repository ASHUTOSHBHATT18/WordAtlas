import { useEffect, useTransition ,useState} from "react";
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/UI/Loader";
import { NavLink } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import { SearchFilter } from "../components/UI/SearchFilter";

export const Country = () => {

    const [isPending, startTransition] = useTransition();
    const[countryData, setCountryData] = useState([]);

    const[search, setSearch] = useState('');
    const[region, setRegion] = useState('all');

    useEffect(() => {
        startTransition(async() => {
            const res= await getCountryData();
            setCountryData(res.data);
        });
    }, []);

    //search and filter functionality
    const searchCountry = (country) => {
        if (search === '') return country;
        return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    const filterByRegion = (country) => {
        if (region === 'all') return country;
        return country.region === region;
    }
    const filteredCountries = countryData.filter((country) => searchCountry(country) && filterByRegion(country) );

    if (isPending) return <Loader />;

    return(
        <div className="container">
        <div className="country-section">

            <SearchFilter search={search} setSearch={setSearch} region={region} setRegion={setRegion} countryData={countryData} setCountryData={setCountryData} />

            <ul className="country-list">
                {filteredCountries.map((country, index)=>{
                    const {name, flags, population, region, capital} = country;
                    return <div className="card" key={index}>
                        <img src={flags.svg} alt={name.common} />
                        <h3>{name.common}</h3>
                        <p><span>Population:</span> {population}</p>
                        <p><span>Region:</span> {region}</p>
                        <p><span>Capital:</span> {capital}</p>
                        <NavLink to={`/country/${name.common}`}>
                        <button>Read more <FaLongArrowAltRight /></button>
                        </NavLink>
                    </div>
                })}
            </ul>
        </div>
        </div>
    );
}