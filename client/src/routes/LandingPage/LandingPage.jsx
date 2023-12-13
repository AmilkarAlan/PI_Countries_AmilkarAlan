import style from "./LandingPage.module.css"
import backImage from "/countries.png"
import { NavLink } from "react-router-dom"

const LandingPage = () => {
  return (
    <div className={ style.landingContainer }>
      <img src={ backImage } alt="" />
      <NavLink className={ style.buttonInit } to="/countries">
        <div className={ style.buttonContainer }>
          <span >Explore!</span>
        </div>
      </NavLink>
    </div>
  )
}

export default LandingPage