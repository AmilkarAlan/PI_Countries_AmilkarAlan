import { useEffect, useState } from "react"

const useFilter = (countries) => {
    const [alphaFilter, setAlphaFilter]= useState('none');
    const [continentFilter, setContinentFilter] = useState('all');
    const [filteredCountries, setFilteredCountries] = useState([]);

    useEffect(()=>{

        const compareName = (a, b) =>{
            if (a.name.common < b.name.common) return -1;
            if (a.name.common > b.name.common) return 1;
            return 0
        };

        const filterContinent = (country) =>{
            if (continentFilter === "all") return true;
            return country.continent === continentFilter;
        }

        let newCountries = [...countries];

        newCountries = newCountries.filter(filterContinent);

        if(alphaFilter === "asc") {
            newCountries.sort(compareName);
        } else if (alphaFilter === "desc"){
            newCountries.sort(compareName).reverse();
        }

        setFilteredCountries(newCountries);
    },[alphaFilter, continentFilter, countries])

    return {
        filteredCountries,
        setAlphaFilter,
        setContinentFilter
    }
}

export default useFilter