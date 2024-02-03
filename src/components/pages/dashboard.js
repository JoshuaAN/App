import './dashboard.css';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from "react"; 
import { ThemeProvider, createTheme } from '@mui/material/styles';

const styles = {
  background: "#888888",
  '&.Mui-selected': {
    background: "#777777",
  }
}

function Dashboard(props) {
  const [val, setVal] = useState("1 Day"); 

  const handleChange = (event, newAlignment) => { 
    if (newAlignment != null) {
      setVal(newAlignment); 
    }
  };
  
  return (
    <div className="dashboard">
          <ToggleButtonGroup value={val} exclusive onChange={handleChange}>
            <ToggleButton value="1 Day" sx={styles}>
                    1 Day
            </ToggleButton>
            <ToggleButton value="1 Week" sx={styles}>
                    1 Week
            </ToggleButton>
            <ToggleButton value="1 Month" sx={styles}>
                    1 Month
            </ToggleButton>
          </ToggleButtonGroup>
    </div>
  );
}

export default Dashboard;
