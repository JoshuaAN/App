import React, { useState } from 'react';
import './dashboard.css';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import App from "./line"

const theme = createTheme({
  components: {
    MuiToggleButton: {
      styleOverrides: {
        root: {
          background: "#888888",
          '&.Mui-selected': {
            background: "#777777",
          }
        },
      },
    },
  },
});

const Dashboard: React.FC = () => {
  const [val, setVal] = useState<string>("1 Day");

  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment != null) {
      setVal(newAlignment);
    }
  };

  return (
    <div className="dashboard">
      <div className="selector">
        <ThemeProvider theme={theme}>
          <ToggleButtonGroup value={val} exclusive onChange={handleChange}>
            <ToggleButton value="1 Day">
              1 Day
            </ToggleButton>
            <ToggleButton value="1 Week">
              1 Week
            </ToggleButton>
            <ToggleButton value="1 Month">
              1 Month
            </ToggleButton>
          </ToggleButtonGroup>
        </ThemeProvider>
      </div>
      <div className="Data">
        <div className="Chart">
          <h3>
            Analytics
          </h3>
          {/* <Line></Line> */}
          <App></App>
        </div>
        <div className="Symptoms">
          <h3 className="Title">
            Potential Symptoms
          </h3>
          <div className="Potential">
            <ul>
              <li>Tiredness</li>
              <li>Weakness</li>
              <li>Shortness of breath</li>
              <li>Irregular heartbeat</li>
              <li>Dizziness or lightheadedness</li>
            </ul>
          </div>
          <div className="Spacer"></div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
