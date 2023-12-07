import { Outlet} from "react-router-dom"
import Navigation from "../../components/Navigation/NavBar/NavBar"
import InfoSideBar from "../../components/InfoSideBar/InfoSideBar"
import style from "./Home.module.css"



const Home = () => {

  return (
    <div className={style.main_grid}>
      <Navigation />
      <Outlet/>
      <InfoSideBar />
    </div>
  )
}

export default Home