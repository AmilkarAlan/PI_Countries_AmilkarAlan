
import {  useSelector } from "react-redux"
import { useParams } from "react-router-dom"



const Details = () => {

const {id} = useParams();
const country = useSelector(state => state.detailCountry)

const countryDet = country[id]




  return (
    <div>
     {countryDet ? <p>{countryDet.name.common}</p>:"cargando"}
    </div>
  )
}

export default Details