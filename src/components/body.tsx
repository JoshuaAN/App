import React, { useState, Component } from "react";
import './body.css';
import Dashboard from './pages/dashboard';
import MyForm from './pages/health';
// import BarcodeScanner from './pages/selector';
import FoodSearch from './pages/lookup';
import BarcodeScanner from './pages/scanner';

interface BodyProps {
  currentPage: string; // Or use an enum if you have a fixed set of pages
}

const Body: React.FC<BodyProps> = ({ currentPage }) => {
  let PageComponent;

  const [activeButton, setActiveButton] = useState<string>("Test");

  console.log("Body: ", currentPage);

  const handleNavbarButtonClick = (buttonText: string) => {
    console.log("Navbar button clicked:", buttonText);
    setActiveButton(buttonText);
  };

  switch (currentPage) {
    case 'Dashboard':
      PageComponent = <Dashboard />;
      break;
    case 'Account':
      // PageComponent = <BarcodeScanner></BarcodeScanner>;
      break;
    case 'Health Details':
      PageComponent = <MyForm></MyForm>;
      break;
    case 'Add Meal':
      PageComponent = 
        <div>
          <BarcodeScanner onSelectionChange={handleNavbarButtonClick}></BarcodeScanner>
          <FoodSearch barcode={activeButton}></FoodSearch>
          <p>{activeButton}</p>
        </div>
      break;
    default:
      PageComponent = <Dashboard />; // Default or a NotFound page
  }

  return (
    <div className="body">
      {PageComponent}
    </div>
  );
}

export default Body;