import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/Search/SerchBar/SearchBar'
import style from './SearchPage.module.css'
import { findCountry } from '../../redux/action';
import SearchResults from "../../components/Search/SearchResults/SearchResults"
import { useEffect, useState } from 'react';

const SearchPage = () => {
  const [ search, setInput ] = useState("");


  const dispatch = useDispatch()
  const results = useSelector(state => state.findCountry)


  useEffect(() => {
    dispatch(findCountry(search))
  }, [ search, dispatch ])

  const handleChange = (value) => {
    setInput(value);
  }

  const handleClick = (id) => {
    dispatch(countryDetail(id))
  }

  const resultsToDisplay = search ? results : [];
  return (
    <div>
      <SearchBar search={ search } handleChange={ handleChange } />
      <SearchResults
        handleClick={ handleClick }
        results={ results } />
    </div>

  )
}

export default SearchPage