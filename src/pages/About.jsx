import countriesData from '../api/countryData.json';
export const About = () => {
    return(
        <div className="container">
            <div className="about-content">
                <div className="about-header">
                    <h2>Here are the Interesting Facts <br /> we're proud of</h2>
                </div>
            <div className="interesting-facts-cards">
                    {countriesData.map((country)=>{
                        const{id, countryname,capital,population, interestingfact} = country;
                        return(
                            <div className="card" key={id}>
                                <h3>{countryname}</h3>
                                <p><span>Capital:</span> {capital}</p>
                                <p><span>Population:</span> {population}</p>
                                <p><span>Interesting Fact:</span> {interestingfact}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}