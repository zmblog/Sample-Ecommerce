
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Product1 from "./Pages/SingleProduct";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home/>}>
        </Route>
        <Route path="/Product/:id">
        </Route>
        <Route path="/Cart" element ={<Cart/>}>
        </Route>
        <Route path="/Login" element ={<Login/>}>
        </Route>
        <Route path="/Register" element ={<Register/>}>
        </Route>
        <Route path="/SingleProduct" element ={<Product1/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
