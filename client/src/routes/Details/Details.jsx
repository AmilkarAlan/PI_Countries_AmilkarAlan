
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import DetailMain from "../../components/DetailMain/DetailMain";



const Details = () => {

  const { id } = useParams();
  const country = useSelector(state => state.countries)

  // const countryDet = country[ id ]
  const countryDet = country.find((country) => country.id === id)

  console.log(countryDet);
  return (
    <div>
      { countryDet ? <DetailMain countryDetail={countryDet}/> : "cargando" }
    </div>
  )
}

export default Details