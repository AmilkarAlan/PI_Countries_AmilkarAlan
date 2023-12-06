import { Outlet} from "react-router-dom"
import AsideBar from "../../components/AsideBar/AsideBar"
import InfoSideBar from "../../components/InfoSideBar/InfoSideBar"
import style from "./Home.module.css"



const Home = () => {

  return (
    <div className={style.main_grid}>
      <AsideBar />
      <Outlet/>
      <InfoSideBar />
    </div>
  )
}

export default Home