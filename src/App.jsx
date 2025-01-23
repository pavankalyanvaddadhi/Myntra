import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Products from './Components/Products/Products';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); // Initial state

  const updateSearchData = (term) => {
    console.log('Updating search term:', term);
    setSearchTerm(term);
  };

  const handleCategorySelect = (category) => {
    console.log('Selected category:', category); // Log the selected category
    setSelectedCategory(category); // Update selected category
  };

  return (
    <Router>
      <Header updatesearchdata={updateSearchData} onCategorySelect={handleCategorySelect} />
      <Routes>
        <Route path="/" element={<Products searchTerm={searchTerm} selectedCategory={selectedCategory} />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;