import style from "./LandingPage.module.css"
import backImage from "../../../public/countries.png"
import {Link} from "react-router-dom"

const LandingPage = () => {
  return (
    <div className={ style.landingContainer }>
      <img src={ backImage } alt="" />
      <div className={ style.buttonInit }>
        <Link to="/countries">
        <button >Explore!</button>
        </Link>
      </div>
    </div>
  )
}

export default LandingPage