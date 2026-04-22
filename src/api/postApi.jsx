import axios from "axios";

const api = axios.create({
    baseURL: "https://restcountries.com/v3.1",
});

//HTTP GET METHOD
export const getCountryData = ()=>{
    return api.get("/all?fields=name,capital,flags,population,region");
}

//HTTP GET METHOD FOR COUNTRY DETAILS
export const getCountryDetails=(countryName)=>{
    return api.get(`/name/${countryName}?fullText=true&fields=name,capital,flags,population,region,subregion,tld,currencies,languages,borders`);
}