import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./theme/darkTheme";

function App() {
  return (
      <ThemeProvider theme={darkTheme}>

      </ThemeProvider>
  );
}

export default App;
