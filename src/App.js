import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './components/pages/Shop';
import ShopCategory from './components/pages/ShopCategory';
import Product from './components/pages/Product';
import Cart from './components/pages/Cart';
import LoginSignup from './components/pages/LoginSignup';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/mens' element={<ShopCategory banner={men_banner} category='men'/>}/>
      <Route path='/womens' element={<ShopCategory banner={women_banner} category='women'/>}/>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category='kid'/>}/>

      <Route path='product' element={<Product/>} >
        <Route path=':productId' element={<Product/>}/>   
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
