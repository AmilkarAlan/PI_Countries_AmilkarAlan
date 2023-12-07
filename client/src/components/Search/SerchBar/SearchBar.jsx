
import style from "./SearchBar.module.css"


const SearchBar = ({search, handleChange}) => {

  return (
    <div className={style.main_searchBarContainer}>
        <input 
        type="search" 
        value={search} 
        onChange={(e)=>handleChange(e.target.value)} name="search"/>
        <label htmlFor="search"></label>
    </div>
  )
}

export default SearchBar