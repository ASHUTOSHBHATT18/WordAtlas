import { useTransition} from "react";
import { useState , useEffect} from "react";
import { useParams,useNavigate} from "react-router-dom";
import { Loader } from "../components/UI/Loader";
import { getCountryDetails } from "../api/postApi";

export const CountryDetails = () => {
    const param=useParams();
    const navigation = useNavigate();

    const [isPending, startTransition] = useTransition();
    const[countryDetails, setCountryDetails]=useState([]);

    useEffect(() => {
        startTransition(async() => {
            const response = await getCountryDetails(param.id); 
            if(response.status === 200){
            setCountryDetails(response.data[0]);
            }}); 
    },[]);
    
    if(isPending) return <Loader/>

    return(
    <div className="container">
        <div className="country-details-section">
            <div className="country-details-card">
                <div className="country-flag">
                <img src={countryDetails.flags?.svg} alt={countryDetails.name?.common} />
                </div>
                <div className="country-details">
                <h2>{countryDetails.name?.common}</h2>
                <p><span>Population:</span> {countryDetails.population}</p>
                <p><span>Region:</span> {countryDetails.region}</p>
                <p><span>Sub Region:</span> {countryDetails.subregion}</p>
                <p><span>Capital:</span> {countryDetails.capital}</p>
                <p><span>Top Level Domain:</span>
                     {countryDetails.tld && countryDetails.tld.map((domain, index)=>(<span key={index} style={{color: 'white'}}> {domain}</span>))}
                </p>
                <p><span>Currencies:</span>
                     {countryDetails.currencies && Object.values(countryDetails.currencies).map((currency, index) => (
                        <span key={index} style={{color: 'white'}}> {currency.name}</span>
                    ))}
                </p>
                <p><span>Languages:</span>
                     {countryDetails.languages && Object.values(countryDetails.languages).map((language, index) => (
                        <span key={index} style={{color: 'white'}}> {language},</span>
                    ))}
                </p>
                <p>
                    <span>Border Countries:</span>
                     {countryDetails.borders ? countryDetails.borders.map((border, index) => (
                        <span key={index} style={{color: 'white'}}> {border}</span>
                    )) : <span>None</span>}
                </p>
            </div>
        </div>
        <button onClick={() => navigation(-1)}>Go back</button>
    </div>
    </div>
    );
}