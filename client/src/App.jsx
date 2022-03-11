import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Navigate
} from "react-router-dom"
import Home from "./pages/Home"
import Register from "./pages/Register";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Succuss from "./pages/Succuss";
import { useSelector } from "react-redux";
import ProductsCards from "./pages/ProductsCards";
import UserDetails from "./pages/UserDetails";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/products/:category" element={<ProductList/>}/>
        <Route path="/product/:id" element={<Product/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/succuss" element={<Succuss/>}/>
        <Route path="/products" element={<ProductList/>}/>
        {/* <Route path="/succuss" element={!user ? <Navigate to="/" /> : <Succuss/>}/> */}
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login/>}/>
        <Route path="/register" element={user ? <Navigate to="/" /> : <Register/>}/>
        <Route path="/user" element={!user ? <Navigate to="/" /> : <UserDetails/>}/>
      </Routes>
    </Router>
  );
};

export default App;