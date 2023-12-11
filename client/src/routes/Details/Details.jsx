
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import DetailMain from "../../components/DetailMain/DetailMain";
import style from "./Details.module.css"



const Details = () => {

  const { id } = useParams();
  const country = useSelector(state => state.countries)

  // const countryDet = country[ id ]
  const countryDet = country.find((country) => country.id === id)

  return (
    <div className={style.detail }>
      { countryDet ? <DetailMain countryDetail={countryDet} countries={country}/> : "cargando" }
    </div>
  )
}

export default Details