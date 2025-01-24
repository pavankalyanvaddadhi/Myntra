import React, { useState } from "react";
import CustomButton from "../ReusuableComponents/CustomButton";
import { useNavigate } from "react-router-dom";

const Header = ({ updatesearchdata, onCategorySelect }) => {
  const [searchData, updateSearchData] = useState("");

  console.log('Header component rendered'); // Check if the component is rendered

  const handleSearch = (event) => {
    console.log('Search input changed'); // Log when the search input changes
    const value = event.target.value;
    updateSearchData(value); // Update local state
    updatesearchdata(value); // Pass the value to the parent
    console.log('Search term updated:', value);
  };

  const handleCategoryClick = (category) => {
    console.log('Category clicked:', category); // Log the clicked category
    updateSearchData(category); // Set search term to the selected category
    onCategorySelect(category); // Pass the category to the parent
  };

  const Navigate = useNavigate();

  function handlelogin() {
    Navigate("/Login");
  }

  function handlehome() {
    Navigate("/");
  }
  

  return (
    <div className="header" style={{ position: "sticky", top: "0", backgroundColor: "white", zIndex: 1000 }}>
      <div className="subheader" style={{ display: "flex" }}>
        <img
          src={"https://images.indianexpress.com/2021/01/myntra.png"}
          style={{ width: "10%" }}
          alt="Logo"
          onClick={handlehome}
        />
        <div className="navbuttons" style={{ display: "flex", justifyContent: "center", padding: "33px 16px" }}>
          <CustomButton text="All" size="small" variant="text" className="button" color="black" fontWeight="800" onClick={() => handleCategoryClick("")} />
          <CustomButton text="Mens" size="small" variant="text" className="button" color="black" fontWeight="800" onClick={() => handleCategoryClick("men's clothing")} />
          <CustomButton text="Women" size="small" variant="text" className="button" color="black" onClick={() => handleCategoryClick("women's clothing")} />
          <CustomButton text="Jewellery" size="small" variant="text" className="button" color="black" onClick={() => handleCategoryClick("jewelery")} />
          <CustomButton text="Electronics" size="small" variant="text" className="button" color="black" onClick={() => handleCategoryClick("electronics")} />
        </div>
        <div className="headerinside" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <input type="search" placeholder="Search for Products, Brands and more" style={{ width: "400px", height: "40px" }} onChange={handleSearch} value={searchData} />
        </div>
        <div onClick={handlelogin} style={{ paddingLeft: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          <img src="https://thumbs.dreamstime.com/b/person-icon-flat-style-man-symbol-person-icon-flat-style-man-symbol-isolated-white-background-simple-people-abstract-icon-118611127.jpg" style={{ width: "7%" }} alt="Profile" />
          <p style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Header;