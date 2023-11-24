import AsideBar from "../../components/AsideBar/AsideBar"
import CenterMain from "../../components/CenterMain/CenterMain"
import InfoSideBar from "../../components/InfoSideBar/InfoSideBar"
import style from "./Home.module.css"


const Home = () => {
  return (
    <div className={style.main_grid}>
      <AsideBar />
      <CenterMain/>
      <InfoSideBar />
    </div>
  )
}

export default Home