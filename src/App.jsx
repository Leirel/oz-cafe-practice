import "./App.scss";
import data from "./assets/data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";
import { MenuProvider } from "./context/MenuContext";

function App() {
  return (
    <MenuProvider>
      <CartProvider>
        <div>
          <Header />
          <main>
            <Routes>
              <Route
                path="/"
                element={<Menu menu={menu} cart={cart} setCart={setCart} />}
              />
              <Route
                path="/cart"
                element={<Cart menu={menu} cart={cart} setCart={setCart} />}
              />
            </Routes>
          </main>
        </div>
      </CartProvider>
    </MenuProvider>
  );
}

export default App;
