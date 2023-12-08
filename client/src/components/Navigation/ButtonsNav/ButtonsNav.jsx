import style from './ButtonsNav.module.css'
import HomeIcon from "../../../icons/HomeIcon/HomeIcon"
import { Link } from 'react-router-dom';
import SearchIcon from '../../../icons/SearchIcon/SearchIcon';

const ButtonsNav = () => {


  return (
    <div className={ style.main_searchBoxContainer }>
      <ul className={style.buttonsContainer}>
        <li className={ style.homeButonContainer }>
          <Link to="/countries">
            <HomeIcon />
            <span>Home</span>
          </Link>
        </li>
        <li className={ style.searchButonContainer }>
          <Link to="search">
            <SearchIcon />
            <span>Search</span>
          </Link>
        </li>
      </ul>

    </div>
  )
}

export default ButtonsNav