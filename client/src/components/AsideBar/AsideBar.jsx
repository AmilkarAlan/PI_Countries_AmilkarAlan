import CountriesBox from "../CountriesBox/CountriesBox"
import SearchBox from "../SearchBox/SearchBox"
import style from "./AsideBar.module.css"

const AsideBar = () => {
  return (
    <div className={style.main_asideContainer}>
      <SearchBox />
      <CountriesBox />
    </div>
  )
}

export default AsideBar