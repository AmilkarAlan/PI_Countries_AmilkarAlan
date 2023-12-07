import DetailBanner from '../DetailBanner/DetailBanner'
import style from './DetailMain.module.css'

const DetailMain = ({countryDetail}) => {
  return (
    <div>
        <DetailBanner 
        image={countryDetail.image}
        commonName={countryDetail.name.common} 
        officialName={countryDetail.name.official}/>
    </div>
  )
}

export default DetailMain