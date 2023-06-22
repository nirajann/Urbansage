import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Layout/Header";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Signup";
import Products from "./components/Product/Product";
import Gallery from "./components/Home/Gallery";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import ProfilePage from "./components/Home/Profilepage"
import EditProfilePage from "./components/Home/Editprofile"

import Cart from "./components/Product/Cart";
import OrderPage from "./components/Product/order";
import AdminPage from "./components/adminpage/AdminPage"
import AdminUserPage from "./components/adminpage/Adminusers"
import AdminproductPage from "./components/adminpage/AdminProductpage"
import AdminOrderPage from "./components/adminpage/Adminorderpage"
import ProductDetailPage from './components/Product//ProductDetail';
import EditProductPage from "./components/adminpage/EditProductPage"
import AdminContactPage from "./components/adminpage/AdmincontactPage"
import "./style/Main.css"
 
function App() {
  
  return (
    <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/Products" element={<Products/>}/>
      
      <Route path="/productDetail/:id" element={<ProductDetailPage/>}/>
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/ProfilePage" element={<ProfilePage/>}/>
      <Route path="/EditProfilePage" element={<EditProfilePage/>}/>
      <Route path="/OrderPage" element={<OrderPage/>}/>
      <Route path="/CartPage" element={<Cart/>}/>

      {/* admin panel */}
      <Route path="/AdminPage" element={<AdminPage/>}/>
      <Route path="/AdminorderPage" element={<AdminOrderPage/>}/>
      <Route path="/AdminuserPage" element={<AdminUserPage/>}/>
      <Route path="/AdminproductPage" element={<AdminproductPage/>}/>
      <Route path="/AdminContactPage" element={<AdminContactPage/>}/>
      <Route path="/EditProductPage/:id" element={<EditProductPage/>}/>

   
      

    </Routes>
     
   </Router>
  );
}

export default App;