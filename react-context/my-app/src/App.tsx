import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { About } from './pages/About';
import { Catalog } from './pages/Catalog';
import { NotFound } from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { CartProvider } from './components/CartContext';

export function App() {
  // const [cartContents, setCartContents] = useState<Product[]>([]);
  // function addItem(item: Product) {
  //   setCartContents((prev) => [...prev, item]);
  // }
  // const cartContentValues = { cart: cartContents, addToCart: addItem };
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Catalog />} />
          <Route path="details/:productId" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </CartProvider>
  );
}
