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
      <Route path="/Gallery" element={<Gallery/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Contact" element={<Contact/>}/>
      

    </Routes>
     
   </Router>
  );
}

export default App;