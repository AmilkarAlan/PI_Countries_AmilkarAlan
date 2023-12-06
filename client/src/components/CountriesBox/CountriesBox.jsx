import style from "./CountriesBox.module.css"
import { useSelector } from "react-redux"
import CountriesGrid from "../CountriesGrid/CountriesGrid"
import useFilter from "../../hooks/useFilter";
import Filters from "../Filters/Filters";
import { useState } from "react";


const CountriesBox = () => {
  const [ currentPage, setCurrentPage ] = useState(1);
  const countriesList = useSelector(state => state.countries);
  const { filteredCountries, setAlphaFilter, setContinentFilter } = useFilter(countriesList);
  
  return (

    <div className={ style.main_box }>
      <Filters
        setAlphaFilter={ setAlphaFilter }
        setContinentFilter={ setContinentFilter }
        setCurrentPage={ setCurrentPage }
      />
      <CountriesGrid filteredCountries={ filteredCountries } currentPage={ currentPage }
        setCurrentPage={ setCurrentPage } />
    </div>
  )
}

export default CountriesBox