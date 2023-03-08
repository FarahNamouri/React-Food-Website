import { useState } from "react";
import CartProvider from "./components/CartProvider";
import Header from "./components/Header";
import Meals from "./components/Meals";

function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  function showCartHandler() {
    setcartIsShown(true);
  }

  // function hideCartHandler() {
  //   setcartIsShown(false)
  // }
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <CartProvider>{cartIsShown && <div>Cart...</div>}</CartProvider>
            <h1>Food app</h1>
            <Meals />
            <Header onShowCart={showCartHandler} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
