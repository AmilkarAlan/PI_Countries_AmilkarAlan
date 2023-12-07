import CountriesCards from '../CountriesCards/CountriesCards'
import style from './ContinentBox.module.css'

const ContinentBox = ({ continentInfo, countries }) => {
  return (
    <section className={ style.continentBoxContainer }>
      <div className={ style.continentInfo }>
        <h2>{ continentInfo.title }</h2>
      </div>
      <CountriesCards continent={continentInfo.title}countries={ countries } />


    </section>
  )
}

export default ContinentBox