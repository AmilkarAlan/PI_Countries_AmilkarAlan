import style from "./DetailInfo.module.css"
import MiniCard from "../../components/Navigation/MiniCard/MiniCard"
import { Link } from "react-router-dom"
import ActivitiesBox from "../ActivitiesBox/ActivitiesBox"

const DetailInfo = ({ capital, continent, subregion, area, population, borders, id, landlocked, countries, activities, setActiveForm }) => {

  return (
    <div className={ style.infoContainer }>
      <div className={ style.infoCards }>
        <div className={ style.regionInfo }>
          <p><span>Capital: </span> { capital }</p>
          <p><span>Continent: </span> { continent }</p>
          <p><span>Sub-Region: </span> { subregion }</p>
        </div>
        <div className={ style.geographicInfo }>
          <p><span>Area: </span> { area.toLocaleString("en-US") } KM2</p>
          <p><span>Population: </span> { population.toLocaleString("en-US") }</p>

        </div>
      </div>

      <div className={ style.bordersBox }>
        <h2>Borders</h2>
        <hr />
        <div className={ style.bordersContainer }>

          { typeof borders !== "string" ? borders.map((bord, index) => {
            const countryBorder = countries.find((border) => border.id === bord)
            return (
              countryBorder
                ?
                <Link key={ index } to={ `/countries/detail/${bord}` }>
                  <MiniCard image={ countryBorder.image } officialName={ countryBorder.name.official } commonName={ countryBorder.name.common } />
                </Link>
                :
                null

            )
          }) : <p>Don't have borders</p> }
        </div>
      </div>
      <div className={ style.activitiesContainer }>
        <h2>Activities</h2>
        <button onClick={ ()=>setActiveForm(true) }>Create activity</button>
        <hr />
        { activities.length ? activities.map((act, i) => {
          return (
            <p key={ i }>{ act.name }</p> <button onClick={()=>}></button>
          )
        }) : null }
      </div>

    </div>
  )
}

export default DetailInfo