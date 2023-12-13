import { useEffect, useState } from 'react'
import ActivitiesForm from '../ActivitiesForm/ActivitiesForm'
import DetailBanner from '../DetailBanner/DetailBanner'
import DetailInfo from '../DetailInfo/DetailInfo'
import style from './DetailMain.module.css'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { postActivitie } from '../../redux/action'

const DetailMain = ({ countryDetail, countries }) => {
  const [ activeForm, setActiveForm ] = useState(false)
  const [ activity, setNewActivity ] = useState({
    id: "",
    name: "",
    difficulty: "",
    season: "",
    duration: ""
  })
  const dispatch = useDispatch();
  const { id } = useParams();


  const handleNewActivity = (activity) => {
    setNewActivity(activity)
  }

  const handleDelete

  useEffect(()=>{
    if(activity.id) dispatch(postActivitie(activity, id))
    
  },[activity])

  return (
    <div className={ style.detailContainer }>
      <DetailBanner
        image={ countryDetail.image }
        commonName={ countryDetail.name.common }
        officialName={ countryDetail.name.official } />
      <DetailInfo
        capital={ countryDetail.capital }
        continent={ countryDetail.continent }
        subregion={ countryDetail.subregion }
        area={ countryDetail.area }
        population={ countryDetail.population }
        borders={ countryDetail.borders }
        id={ countryDetail.id }
        landlocked={ countryDetail.landlocked }
        countries={ countries }
        activities={ countryDetail.Activities }
        setActiveForm={setActiveForm} />
      <div className={ activeForm ? (style.formContainer + " " + style.active) : style.formContainer }>
        <ActivitiesForm countryName={ countryDetail.name.common } activities={ countryDetail.Activities } handleNewActivity={ handleNewActivity } idCountry={ id } setActiveForm={setActiveForm}/>
      </div>
    </div>
  )
}

export default DetailMain