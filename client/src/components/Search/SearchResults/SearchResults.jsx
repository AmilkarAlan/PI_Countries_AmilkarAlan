import { useEffect, useState } from "react"
import style from "./SearchResults.module.css"
import { Link } from "react-router-dom"
import MiniCard from "../../Navigation/MiniCard/MiniCard";

const SearchResults = ({ results }) => {
  const [ active, setActive ] = useState(false);

  useEffect(() => {
    if (results.length) return setActive(true);
    setActive(false)

  }, [ results ])

  return (
    <div className={ active ? (style.main_results + " " + style.active) : style.main_results }>
      { active ? (results.map((item, index) => {
        return (
          <Link  to={ `/countries/detail/${item.id}` } key={ index } >
            < MiniCard image={ item.image } officialName={ item.name.official } commonName={ item.name.common } />
          </Link>

        )
      })) : null }
    </div>
  )
}

export default SearchResults