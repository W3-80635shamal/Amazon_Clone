import React from "react";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signin from "./component/Signin";
import Signup from "./component/Signup";
import NavBar from "./component/NavBar";
import Cart from "./component/Cart";
import ProductList from "./component/ProductList";
import { Logout } from "@mui/icons-material";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route index element={<Signin />} />
         <Route path="/" element={<Signin />}/>
         <Route path="/productlist" element={<ProductList />} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/navbar" element={<NavBar />}/>
         <Route path="/signup" element={<Signup />}/>
         <Route path="/logout" element={<Logout />}/>
         
        

      
        </Routes>
       
      </Router>
    
    </div>
  );
}

export default App;