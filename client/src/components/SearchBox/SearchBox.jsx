import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../SerchBar/SearchBar'
import style from './SearchBox.module.css'
import { useEffect, useState } from 'react';
import { countryDetail, findCountry } from '../../redux/action';
import SearchResults from '../SearchResults/SearchResults';

const SearchBox = () => {

  const [ search, setInput ] = useState("");
  

  const dispatch = useDispatch()
  const results = useSelector(state => state.findCountry)

  
  useEffect(() => {
    dispatch(findCountry(search))
  }, [ search, dispatch])

  const handleChange = (value) => {
    setInput(value);
  }

const handleClick = (id)=>{
  dispatch(countryDetail(id))
}

  const resultsToDisplay = search ? results : [];

  return (
    <div className={ style.main_searchBoxContainer }>
      <SearchBar search={ search } handleChange={ handleChange } />
      <SearchResults results={ resultsToDisplay } handleClick={handleClick}/>

    </div>
  )
}

export default SearchBox