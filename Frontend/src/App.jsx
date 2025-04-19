import './App.css'
import Navbar from './componants/Navbar'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Shop from './pages/shop/Shop';
import ShopCategory from "./pages/shop_category/shopCategory"


function App() {
  return (
    <>
    <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category= "men"/>}/>
          <Route path='/women' element={<ShopCategory category= "women"/>}/>
          <Route path='/kids' element={<ShopCategory category= "kid"/>}/>
          <Route path='/login' element={""}/>
          <Route path='/cart' element={""}/>
          <Route path='/product' element={""}/>
        </Routes>
    </HashRouter>
  
    
    </>
  )
}

export default App
