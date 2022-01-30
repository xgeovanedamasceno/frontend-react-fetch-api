import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Contact from '../pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home title="React APP" subtitle="Fetching an API" />} />
        <Route path="products" element={<Products title="Products Page" />} />
        <Route path="contact" element={<Contact title="Contact Page" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
