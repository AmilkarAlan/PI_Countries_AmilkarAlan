import CountryCard from '../CountryCard/CountryCard'
import style from './CountriesCards.module.css'
import {Link} from "react-router-dom"

const CountriesCards = ({ countries, continent }) => {
  return (
    <div className={ style.countriesContainer }>
      { countries.map((country, index) => {
        if (continent === country.continent) return (
          <Link key={ index } to={`detail/${country.id}`}>
            <CountryCard
              image={ country.image }
              official={ country.name.official }
              common={ country.name.common }
              capital={ country.capital }
            />
          </Link>
        )
      }) }


    </div>
  )
}

export default CountriesCards