
import './App.css'
import Navbar from './componants/Navbar'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Shop from './pages/shop/Shop'


function App() {
  return (
    <>
    <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
        </Routes>
    </HashRouter>
  
    
    </>
  )
}

export default App
