import "./App.css";
import Navbar from "./Components/Navbar/navbar";
import Footer from "./Components/Footer/footer";
import Details from "./Components/detailsPage/details";
import Menu from "./Components/Menu Section/menu";
import Cart from "./Components/Cart/cart";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Containers/homePage";
import Dashboard from "./Containers/DashboardPage/dashboardpage";
import Users from "./Components/AdminPanel/users";
import Items from "./Components/AdminPanel/allItems/allitems";
import NewItem from "./Components/AdminPanel/NewItem/newItem";
import UpdateItem from "./Components/AdminPanel/UpdateItem/updateItem";


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Details />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/admin" element={<Dashboard />} />
        <Route exact path="/users" element={<Users />} />
        <Route exact path="/items" element={<Items />} />
        <Route exact path="/additem" element={<NewItem />} />
        <Route exact path="/updateitem/:id" element={<UpdateItem />} />
      </Routes>
    </Router>
  );
}

export default App;
