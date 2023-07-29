import CartProvider from "./Store/CartProvider";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [cartIsShowed, setCartIsShowed] = useState(false);

  const showCartHandler = () => {
    setCartIsShowed(true);
  };

  const hideCartHandler = () => {
    setCartIsShowed(false);
  };

  return (
    <CartProvider>
      {cartIsShowed && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
