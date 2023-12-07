import { useSelector } from "react-redux"
import CountriesMain from "../CountriesMain/CountriesMain"
import MainBanner from "../MainBanner/MainBanner"

import style from "./MainPage.module.css"

const MainPage = () => {
  const countries = useSelector(state => state.countries)
  return (
    <div className={style.main_CenterGrid}>
        <MainBanner />
        <CountriesMain countries={countries}/>
    </div>
  )
}

export default MainPage