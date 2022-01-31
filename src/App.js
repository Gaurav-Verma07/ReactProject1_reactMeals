import { useState } from "react";
import "./App.scss";
//import Modal from "./Components/UI/Modal";
import CartProvider from "./Components/store/CartProvider";
import Cart from "./Components/Cart/Cart";
//import { Fragment } from "react";
import Meals from "./Components/Meals/Meals";
import Header from "./Components/Header/Header";
function App() {
  const [showCart, setShowCart] = useState(false);
  const onClick = () => {
    return setShowCart(true);
  };
  const closeCart = () => {
    return setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart closeCart={closeCart} />}
      <Header onClick={onClick} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
