
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Detail from './Pages/Detail'
import Favs from './Pages/Favs'
import Contact from './Pages/Contact'

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favs' element={<Favs/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<h1>Página no encontrada...</h1>}/>
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
