import './App.css';
import { Route, Routes} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCountries } from './redux/action';
import LandingPage from './routes/LandingPage/LandingPage';
import Home from './routes/Home/Home';
import MainPage from './components/Main/MainPage/MainPage';
import Details from './routes/Details/Details'
import SearchPage from "./routes/Search/SearchPage"




function App() {
  // Carga de countries de API externa a la DB propia
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries())
  }, [ dispatch ])

  return (
    <>
      <Routes >
        <Route path='/' element={ <LandingPage /> } />
        <Route path='/countries' element={ <Home /> } >
          <Route path="/countries" element={ <MainPage /> } />
          <Route path='search' element={<SearchPage/>}/>
          <Route path="detail/:id" element={ <Details /> } />
        </Route>
      </Routes>
    </>

  )
}

export default App
