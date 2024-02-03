import React, { useState } from 'react';
import './navbar.css';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FF0000", // Corrected color value
    },
  },
  typography: {
    fontSize: 17,
  },
});

interface NavbarProps {
  onSelectionChange: (selectedText: string) => void; // Define a prop for the callback function
}

const Navbar: React.FC<NavbarProps> = ({ onSelectionChange }) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (buttonText: string) => {
    setActiveButton(buttonText);
    onSelectionChange(buttonText); // Call the callback function with the button text
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="navbar">
        <div className="padding"></div>
        <div className="links">
          <Button
            className="text"
            style={{
              textTransform: 'none',
              backgroundColor: activeButton === 'Account' ? 'blue' : 'transparent',
            }}
            onClick={() => handleButtonClick('Account')}
          >
            Account
          </Button>
          <Button
            className="text"
            style={{
              textTransform: 'none',
              backgroundColor: activeButton === 'Health Details' ? 'green' : 'transparent',
            }}
            onClick={() => handleButtonClick('Health Details')}
          >
            Health Details
          </Button>
          <Button
            className="text"
            style={{
              textTransform: 'none',
              backgroundColor: activeButton === 'Add Meal' ? 'orange' : 'transparent',
            }}
            onClick={() => handleButtonClick('Add Meal')}
          >
            Add Meal
          </Button>
          <Button
            className="text"
            style={{
              textTransform: 'none',
              backgroundColor: activeButton === 'Dashboard' ? 'purple' : 'transparent',
            }}
            onClick={() => handleButtonClick('Dashboard')}
          >
            Dashboard
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Navbar;
