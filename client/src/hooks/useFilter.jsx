import { useEffect, useState } from "react"

const useFilter = (countries) => {
    const [alphaFilter, setAlphaFilter]= useState('none');
    const [continentFilter, setContinentFilter] = useState('all');
    const [independentFilter, setIndependentFilter] = useState('none')
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

        const filterIndependet = (country) =>{
            if (independentFilter === "none") return true;
            return country.landlocked === (independentFilter === 'true');
        }

        let newCountries = [...countries];
        newCountries = newCountries.filter(filterContinent).filter(filterIndependet);
        if(alphaFilter === "asc") {
            newCountries.sort(compareName);
        } else if (alphaFilter === "desc"){
            newCountries.sort(compareName).reverse();
        }
        setFilteredCountries(newCountries);


    },[alphaFilter, continentFilter, countries, independentFilter])

    return {
        filteredCountries,
        setAlphaFilter,
        setContinentFilter,
        setIndependentFilter
    }
}

export default useFilter