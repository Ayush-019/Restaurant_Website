import React from 'react';
import Cart from '../Components/Cart/cart';
import Footer from "../Components/Footer/footer";
import Navbar from "../Components/Navbar/navbar";

const CartPage = () => {
  return (
    <div>
      <Navbar />
      <Cart />
      <Footer />
    </div>
  );
}

export default CartPage