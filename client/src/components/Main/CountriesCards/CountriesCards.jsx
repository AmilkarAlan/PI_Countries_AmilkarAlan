import CountryCard from '../CountryCard/CountryCard'
import style from './CountriesCards.module.css'

const CountriesCards = ({ countries, continent }) => {
  return (
    <div className={ style.countriesContainer }>
      {countries.map((country, index)=>{
        if (continent === country.continent) return (<CountryCard 
          image={country.image}
          official={country.name.official}
          common={country.name.common}
          capital={country.capital}
          key={index}/>)
      })}
      

    </div>
  )
}

export default CountriesCards