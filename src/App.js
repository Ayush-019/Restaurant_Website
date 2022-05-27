import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Details from "./Components/detailsPage/details";
import Menu from "./Components/Menu Section/menu";
import Cart from "./Components/Cart/cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Containers/homePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Details />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default App;
