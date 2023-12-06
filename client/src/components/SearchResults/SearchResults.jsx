import { useEffect, useState } from "react"
import style from "./SearchResults.module.css"
import {Link} from "react-router-dom"

const SearchResults = ({ results, handleClick }) => {
  const [ active, setActive ] = useState(false);

  useEffect(() => {
    if (results.length) return setActive(true);
    setActive(false)

  }, [ results ])

  return (
    <div className={ active ? (style.main_results + " " + style.active) : style.main_results }>
      { active ? (results.map((item, index) => {
        return (
          <Link onClick={()=>handleClick(item.id)}to={`countries/${item.id}`} key={ index } >
            <p >{ item.name.common }</p>
          </Link>

        )
      })) : null }
    </div>
  )
}

export default SearchResults