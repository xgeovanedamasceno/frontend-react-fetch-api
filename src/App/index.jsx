import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Contact from '../pages/Contact';
import Nav from '../components/Nav';
import Product from '../pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home title="React APP" subtitle="Fetching an API" />} />
        <Route path="products" element={<Products title="Products Page" />} />
        <Route path="products/product/:id" element={<Product />} />
        <Route path="contact" element={<Contact title="Contact Page" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
