import SearchIcon from "../../../icons/SearchIcon/SearchIcon"
import style from "./SearchBar.module.css"


const SearchBar = ({ search, handleChange }) => {

  return (
    <div className={ style.formContainer }>
      <form className={ style.main_searchBarContainer }>
        <input
          className={ style.inputSearch }
          type="search"
          value={ search }
          onChange={ (e) => handleChange(e.target.value) } name="search" />
        <div className={ style.iconContainer }>
          <SearchIcon />
        </div>
      </form>
    </div>

  )
}

export default SearchBar