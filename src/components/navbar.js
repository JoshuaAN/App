import './navbar.css';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      ':hover': {
        main: "0000000"
      },
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FF00000"
    }
  },
  typography: {
    fontSize: 17,
  }
});

function Navbar() {
  return (
    <div className="navbar">
      <div className="padding"></div>
      <div className="links">
        <Button className="text" style={{textTransform: 'none'}} theme={theme}>Account</Button>
        <Button className="text" style={{textTransform: 'none'}} theme={theme}>Health Details</Button>
        <Button className="text" style={{textTransform: 'none'}} theme={theme}>Meal History</Button>
        <Button className="text" style={{textTransform: 'none'}} theme={theme}>Add Meal</Button>
        <Button className="text" style={{textTransform: 'none'}} theme={theme}>Dashboard</Button>
      </div>
    </div>
  );
}

export default Navbar;
