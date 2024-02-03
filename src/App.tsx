import React, { useState, Component } from "react";
import './App.css';
import Navbar from './components/navbar'; // Ensure this path matches your project structure
import Body from './components/body';

// Assuming Navbar expects a prop named onSelectionChange or similar

interface AppProps {
  onSelectionChange: (selectedText: string) => void; // Define a prop for the callback function
}

const App: React.FC<AppProps> = () => {
  const [activeButton, setActiveButton] = useState<string>("Dashboard");

  // Callback function to receive button click information
  const handleNavbarButtonClick = (buttonText: string) => {
    console.log("Navbar button clicked:", buttonText);
    setActiveButton(buttonText);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        {/* Pass the callback function as a prop to Navbar */}
        <Navbar onSelectionChange={handleNavbarButtonClick} />
        <Body currentPage={activeButton} />
      </header>
    </div>
  );
}

export default App;
