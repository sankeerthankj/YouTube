import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Pages/Home';
import Video from './Pages/Video';
import NavBar from './Components/NavBar';

function App() {
  
return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/video/:id' element={<Video/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
