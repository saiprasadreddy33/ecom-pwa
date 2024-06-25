import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
import NavigationMenu from './components/NavigationMenu';
import ProductListingPage from './pages/ProductListingPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import ThankYouPage from './pages/ThankYouPage';
import store from './redux/store';
import Alert from './components/Alert';
import './styles/output.css';
import ProfilePage from './components/ProfilePage';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <NavigationMenu className="mb-4" />
          <div className="container mx-auto flex-grow">
          <Alert />
            <Routes>
              <Route path="/" element={<ProductListingPage />} />
              <Route path="/product/:id" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/thankyou" element={<ThankYouPage />} /> 
              <Route path="/profile" element={<ProfilePage />} /> 
            </Routes>
          </div>
          <Footer className="mt-auto" />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
