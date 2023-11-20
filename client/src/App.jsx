import { useEffect } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries } from './redux/action';


function App() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries)
  useEffect(() => {
    dispatch(getAllCountries())
  }, [ dispatch ])
  return (
    <ul>
      { countries.map((item) => {
        return (

            <li key={item.id}><p>{ item.name.common }</p></li>
      
        )
      }) }
    </ul>
  )
}

export default App
