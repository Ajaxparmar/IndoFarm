import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Admin from './pages/Admin';
import { CartProvider } from './context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-brand-bg flex flex-col pt-20">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              {/* Other routes will be added here */}
            </Routes>
          </main>
        
        <footer className="h-[200px] flex flex-col justify-center px-10 border-t border-brand-ink/5 text-brand-muted">
          <div className="max-w-[1440px] mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[11px] uppercase tracking-widest font-medium">
              © 2026 Indo-Farm Sustainable Trade Co.
            </div>
            
            <div className="flex gap-8 text-[11px] uppercase tracking-widest font-medium">
              <Link to="/terms" className="hover:text-brand-accent transition-colors">Terms & Conditions</Link>
              <Link to="/privacy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link>
              <Link to="/contact" className="hover:text-brand-accent transition-colors">Shipping Track</Link>
            </div>
          </div>
          
          <div className="max-w-[1440px] mx-auto w-full mt-8 text-[10px] italic text-center md:text-left opacity-30">
            Design: Artistic Flair • Roots in Nature
          </div>
        </footer>
      </div>
    </Router>
  </CartProvider>
  );
}

