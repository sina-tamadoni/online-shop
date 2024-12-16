import "./App.css";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { Provider } from "react-redux";
import store from "./store";
import Layout from "./layout/Layout";
import QueryProvider from "./contexts/QueryContext";
import CartProvider from "./contexts/CartContext";
import DetailsPage from "./pages/DetailsPage";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <Router>
      <QueryProvider>
        <Provider store={store}>
          <CartProvider>
            <div className="h-full">
              <Layout>
                <Routes>
                  <Route path="/" element={<Navigate to="/shop" replace />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route path="/shop/:id" element={<DetailsPage />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Layout>
            </div>
          </CartProvider>
        </Provider>
      </QueryProvider>
    </Router>
  );
}

export default App;
