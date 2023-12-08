import { Outlet} from "react-router-dom"
import NavBar from "../../components/Navigation/NavBar/NavBar"
import style from "./Home.module.css"



const Home = () => {

  return (
    <div className={style.main_grid}>
      <NavBar />
      <Outlet/>
      
    </div>
  )
}

export default Home