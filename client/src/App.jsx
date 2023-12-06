import './App.css';
import { Route, Routes} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllCountries } from './redux/action';
import LandingPage from './routes/LandingPage/LandingPage';
import Home from './routes/Home/Home';
import CenterMain from './components/CenterMain/CenterMain';
import Details from './routes/Details/Details'




function App() {
  // Carga de countries de API externa a la DB propia
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCountries())
  }, [ dispatch ])

  return (
    <>
      <Routes >
        <Route path='/landing' element={ <LandingPage /> } />
        <Route path='/' element={ <Home /> } >
          <Route path="countries" element={ <CenterMain /> } />
          <Route path="countries/:id" element={ <Details /> } />
        </Route>
      </Routes>
    </>

  )
}

export default App
