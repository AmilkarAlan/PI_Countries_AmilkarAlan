import CountriesBox from "../CountriesBox/CountriesBox"
import style from "./NavBar.module.css"
import ButtonsNav from "../ButtonsNav/ButtonsNav"

const NavBar = () => {
  return (
    <div className={ style.main_asideContainer }>
      <nav className={style.navBar}>
        <ButtonsNav />
        <CountriesBox />
      </nav>
    </div>
  )
}

export default NavBar