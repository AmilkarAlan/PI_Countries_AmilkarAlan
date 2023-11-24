import './App.css';
import Home from './routes/Home/Home';
import { Route, Routes } from 'react-router-dom'
import LandingPage from './routes/LandingPage';


function App() {

  return (
    <>

      <Routes >
        <Route path='/landing' element={ <LandingPage /> } />
        <Route path='/home' element={ <Home /> } />
      </Routes>
    </>

  )
}

export default App
