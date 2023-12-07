import CountriesBox from "../CountriesBox/CountriesBox"
import style from "./NavBar.module.css"
import ButtonsNav from "../ButtonsNav/ButtonsNav"

const AsideBar = () => {
  return (
    <div className={style.main_asideContainer}>
      <ButtonsNav />
      <CountriesBox />
    </div>
  )
}

export default AsideBar