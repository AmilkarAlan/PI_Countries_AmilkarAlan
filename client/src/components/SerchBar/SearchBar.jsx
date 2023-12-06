import { useEffect, useState } from "react"
import style from "./SearchBar.module.css"
import {useDispatch} from "react-redux"
import { findCountry} from "../../redux/action";

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