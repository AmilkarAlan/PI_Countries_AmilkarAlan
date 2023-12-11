import style from "./MainBanner.module.css"
import countriesBack from "/countriesBackGround.png"
const BannerCountry = () => {
  return (
    <div  className={style.main_bannerContainer}>
      <img src={countriesBack}alt="" />
      <h1>Henry Countries Project</h1>
    </div>
  )
}

export default BannerCountry