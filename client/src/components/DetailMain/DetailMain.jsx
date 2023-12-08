import DetailBanner from '../DetailBanner/DetailBanner'
import DetailInfo from '../DetailInfo/DetailInfo'
import ActiviesBox from "../ActivitiesBox/ActivitiesBox"
import style from './DetailMain.module.css'

const DetailMain = ({countryDetail, countries}) => {
  return (
    <div className={style.detailContainer}>
        <DetailBanner 
        image={countryDetail.image}
        commonName={countryDetail.name.common} 
        officialName={countryDetail.name.official}/>
        <DetailInfo 
        capital={countryDetail.capital}
        continent={countryDetail.continent}
        subregion={countryDetail.subregion}
        area={countryDetail.area} 
        population={countryDetail.population} 
        borders={countryDetail.borders}
        id={countryDetail.id} 
        landlocked={countryDetail.landlocked}
        countries={countries}/>
        <ActiviesBox />
    </div>
  )
}

export default DetailMain