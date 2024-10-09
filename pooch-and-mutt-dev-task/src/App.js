import React from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductDetailsPage from './pages/ProductDetailsPage/ProductDetailsPage';

// Importing stylesheets
import './styles/App.css';

function App() {
  return (
    <div className="font-poppins w-full pb-14">
      <Navbar />
      {/* TODO: Add page routing */}
      <ProductDetailsPage />
    </div>
  );
}

export default App;
