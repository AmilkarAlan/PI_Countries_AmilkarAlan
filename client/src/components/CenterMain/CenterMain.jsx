import ActivitiesMain from "../ActivitiesMain/ActivitiesMain"
import BannerCountry from "../BannerCountry/BannerCountry"

import style from "./CenterMain.module.css"

const CenterMain = () => {
  return (
    <div className={style.main_CenterGrid}>
        <BannerCountry />
        <ActivitiesMain />
    </div>
  )
}

export default CenterMain