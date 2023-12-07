import style from './ButtonsNav.module.css'
import HomeIcon from "../../../icons/HomeIcon/HomeIcon"
import { Link } from 'react-router-dom';
import SearchIcon from '../../../icons/SearchIcon/SearchIcon';

const ButtonsNav = () => {

  
  return (
    <div className={ style.main_searchBoxContainer }>
      <div className={style.homeButonContainer}>
        <Link to="main">
          <HomeIcon />
          <span>Home</span>
        </Link>
      </div>
      <div className={style.searchButonContainer}>
        <Link to="search">
          <SearchIcon/>
          <span>Search</span>
        </Link>
      </div>

    </div>
  )
}

export default ButtonsNav