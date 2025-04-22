import './App.css'
import Navbar from './componants/Navbar'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Shop from './pages/shop/Shop';
import ShopCategory from "./pages/shop_category/shopCategory"
import Login from './pages/login/login';
import ShopContext, { ShopProvider } from './componants/context/context';
import { useContext } from 'react';
import Product from './pages/product/product';


function App() {
  return (
    <>
    <ShopProvider>
    <HashRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory category= "men"/>}/>
          <Route path='/women' element={<ShopCategory category= "women"/>}/>
          <Route path='/kids' element={<ShopCategory category= "kid"/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={""}/>
          <Route path='/product/:id' element={<Product/>}/>
        </Routes>
    </HashRouter>
    </ShopProvider>
    </>
  )
}

export default App
